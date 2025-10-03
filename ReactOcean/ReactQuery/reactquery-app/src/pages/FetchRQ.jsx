import { keepPreviousData, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React, { useState } from "react";
import { deletePost, fetchPosts, updatePost } from "../API/Api";
import { NavLink } from "react-router-dom";

const FetchRQ = () => {
  const [pageNumber, setPageNumber] = useState(0)
  const queryClient = useQueryClient(); 
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["posts", pageNumber],
    queryFn: () => fetchPosts(pageNumber),
    //gcTime:1000,
    // staleTime:5000
    // refetchInterval:5000,
    // refetchIntervalInBackground:true
    placeholderData:keepPreviousData
  });

  const deleteMutation =useMutation({
    mutationFn:(id)=> deletePost(id),
    onSuccess: (data, id) => {
        queryClient.setQueryData( ["posts", pageNumber], (curElm)=> {
            return curElm?.filter((post)=> post.id !== id)
        })
    }
  })

    const updateMutation =useMutation({
    mutationFn:(id)=> updatePost(id),
    onSuccess: (apiData, postId) => {
        queryClient.setQueryData( ["posts", pageNumber], (postData)=> {
            return postData?.map((curPost)=>{
              return curPost.id === postId ? { ...curPost, title: apiData.data.title } : curPost;
            })
        })
    }
  })

  if (isLoading) return <h2>Loading...</h2>;
  if (isError) return <h2>Error: {error.message}</h2>;
  if (!Array.isArray(data)) return <h2>Invalid data format</h2>;
  return (
    <div>
      <ul className="section-accordion">
        {data?.map((curElm) => {
          const { id, title, body } = curElm;
          return (
            <li key={id}>
              <p>{id}</p>
              <NavLink to={`/rq/${id}`}>
              <p>{title}</p>
              <p>{body}</p>
              </NavLink>
              <button onClick={() => deleteMutation.mutate(id)}>Delete</button>
               <button onClick={() => updateMutation.mutate(id)}>Update</button>
            </li>
          );
        })}
      </ul>
      <div className="pagination-section container">
        <button disabled={pageNumber === 0 ? true : false} onClick={()=> setPageNumber((prev)=> prev -3 )}>Prev</button>
          <h2>{(pageNumber/3) +1}</h2>
        <button onClick={()=> setPageNumber((prev)=> prev +3 )}>Next</button>
      </div>
    </div>
  );
};

export default FetchRQ;
