"use client";
import Image from 'next/image'
import UploadImage from '../components/Upload_image';
import UploadIVideo from '../components/Upload_video';
import "@/style/home.css"
import Navbar from '../components/layout/navbar'
import { useState } from 'react';
import SidebarComponent from '../Sidebar/page';
// import UploadImage from '././components/Upload_image';


export default function Home() {
  const [Type, setType] = useState('image');
  
  return (
    <>
    < Navbar />

    <div className=" position-absolute">
    <SidebarComponent/>
    </div>

 

  

    

    <div className="  m-5">

      

    <div className='container-fluid  '>

<div className="">

         
{Type=='image' ? <UploadImage /> : <UploadIVideo />   }



{/* <UploadImage />  */}

{/*  <UploadIVideo />  */}
<div className=" d-flex justify-content-center align-items-center  ">

<button onClick={()=>setType('image')} className=' mx-4 btn btn-success    p-2   rounded-2 text-white px-5 py-3'>image</button>


<button onClick={()=>setType('video')} className=' mx-4  btn btn-warning   p-2   rounded-2 text-white px-5 py-3'>video</button>




</div>







</div>







</div>

    </div>
  




    </>
  )
}

