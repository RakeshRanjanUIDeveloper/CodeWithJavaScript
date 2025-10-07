import React, { useEffect, useState } from "react";
import { fakeVideoLibraryFetch } from "../PracticeSet6/api/fakeVideoLibraryFetch";
const VideoLibrary = () => {
  const [allVideos, setAllvideos] = useState([]);
  useEffect(() => {
    fakeVideoLibraryFetch("https://example.com/api/videos")
      .then((res) => {
        setAllvideos(res.data.videos);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);


  const handleDelete = () =>{
      const updatedVideos = allVideos.slice(1)
        setAllvideos(updatedVideos)
  }
  return (
    <React.Fragment>
      <h2>PlayList</h2>
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", gap:'10px' }}>
        {allVideos.map((v) => (
          <div
            className="videos"
            key={v.title}
            style={{ border: "1px solid black", width:'200px', height: 'auto' }}
          >
            <div className="video-image">
              <img src={v.thumbnail} />
              <p>{v.title}</p>
            </div>
            <div className="video-details">
              <h4>Likes : {v.likes}</h4>
              <h4>Views : {v.views}</h4>
            </div>
          </div>
        ))}
      </div>
      <button onClick={handleDelete}>Delete</button>
    </React.Fragment>
  );
};
export default VideoLibrary;

