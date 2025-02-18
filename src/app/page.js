"use client";
import Image from 'next/image'
import ImagePage from './components/Upload_image';
import ImageGallery from './components/TRY';
import axios from 'axios';
import UploadImage from './components/Upload_image';
import Link from 'next/link'
import UploadIVideo from './components/Upload_video';
import { useEffect, useState } from 'react';
import Navbar from './components/layout/navbar';
import Footer from './components/layout/footer';
import { useRouter } from 'next/navigation';



export default function Home() {
   const router = useRouter()
  //Delete image from firebase
  const del = (ur) => {
    axios.post('http://127.0.0.1:5000/deletefb', { data: [ur] }).then((response) => {
      console.log(response)
    })
  }

  useEffect(() => {
    axios.get('/api/usersinfo').then((response) => {
      console.log(response.data.data);
      if(!response.data.data && localStorage.getItem("id")){
        localStorage.removeItem("id");
      }
    })
    router.push('/main')
  }, []);


  const destroy = () => {
    const _id = 2 // id of the bucket 
    axios.delete('api/destroy', { data: {_id} }).then((response) => {
      console.log(response.data)
    })
  }

  return (  
    <div>
      <Navbar />
      
      
      <button onClick={destroy}>
      destroy
      </button>
      <Footer />


    </div>
  )
}