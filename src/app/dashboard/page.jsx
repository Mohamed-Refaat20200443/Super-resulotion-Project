"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import Navbar from "../components/layout/navbar";
import Img from "../components/img";
import "./dashboard.css";
export default function Home() {
  const [images, setImages] = useState([]);
  const [videos, setVideos] = useState([]);
  const [storage, setStorage] = useState(0);
  
  useEffect(() => {
    axios.get('/api/storage').then((response) => {
      console.log(response);
      setStorage(response.data.data);
    })
    console.log(storage/Math.pow(10,6));
  })

  const destroy = (url, _id) => {
    axios.delete('api/destroy', { data: {_id} }).then((response) => {
      console.log(response.data)
    })

    axios.post('http://127.0.0.1:5000/deletefb', { data: [url] }).then((response) => {
      console.log(response)
    })
  }
    

  useEffect(() => {
    axios.get('/api/images').then((response) => {
 
      setImages(response.data.data); // Assuming response.data is structured as { data: [...] }
    }).catch((error) => {
      console.error('Error fetching images:', error);
    });

    axios.get('/api/videos').then((response) => {
      console.log(response.data);
      setVideos(response.data.data); 
    }).catch((error) => {
      console.error('Error fetching images:', error);
    });
  }, []);

  return (
      <>
      
      <Navbar />
      <label>{(storage/Math.pow(10,6)).toFixed(1)} MP</label>
      <br />
      <meter style={{ width: '50%' }}  value={storage/Math.pow(10,6)} min="0" max="100"></meter>

        <div className="container-fluid">
          <h1 className="text-center">Dashboard</h1>
          <h2>Images</h2>
        <div className="row" key={"Math.random() * 1000"}>
            {
              Array.isArray(images) && images.length > 0 ? (
                images.map((el, index) => (
                  <div className="col-lg-2 col-md-3 col-sm-4" key={`${Math.random() * 1000}`}>
                    <Img size={el.size} url={el.image_url} id={el.id}/>
                  </div>
                ))
              ) : (
                <p>No images</p>
              )
            }
        </div>


        <div className="row">
            {
              Array.isArray(videos) && videos.length > 0 ? (
                videos.map((el, index) => (
                  <div className="col-lg-2 col-md-3 col-sm-4"  key={`${Math.random() * 1000}`}>
                    <video src={el.image_url} controls></video>
                    <button onClick={() => destroy(el.image_url, el.id)}>
                      Delete
                    </button>
                  </div>
                ))
              ) : (
                <p>No videos</p>
              )
            }
        </div>
        </div>
    </>
  );
}
