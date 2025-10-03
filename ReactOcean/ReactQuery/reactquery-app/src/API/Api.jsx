import axios from "axios";
import React from "react";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

//to fetch the data
export const fetchPosts = async(pageNumber) => {
  try {
      const res = await  api.get(`/posts?_start=${pageNumber}&_limit=3`);
      return res.status === 200 ? res.data : []  
  } catch (error) {
    console.log(error)
    return [];
  }

};

// to fetch the individual
export const fetchIndvPost = async (id) =>{
  try {
    const res = await api.get(`/posts/${id}`)
    return res.status === 200 ? res.data : []
  } catch (error) {
    console.log(error)
  }
}

// to delete the individual post

export const deletePost =(id)=>{
  return api.delete(`/posts/${id}`)
}

// to update the post
export const updatePost =(id)=>{
  return api.patch(`/posts/${id}`, {title : "I have updated"})
}

// infintie scrolling
export const fetchUsers = async ({ pageParam }) => {
  try {
    const res = await axios.get(
      `https://api.github.com/users?per_page=10&page=${pageParam}`
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};