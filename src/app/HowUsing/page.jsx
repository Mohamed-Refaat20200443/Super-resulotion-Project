"use client";
import React from 'react'
import './howusing.css'
import Image from 'next/image'
import Image1 from './Image upload-bro.png'
import Image2 from './9098089.jpg'
import Image3 from './Download-rafiki.png'
import Navbar from '../components/layout/navbar';
import Footer from '../components/layout/footer';
function HowUsing() {

  
    return <>


    <Navbar/>





<section  className="Using py-5  vh-100   ">
  <div className="container py-4">
    <div className="header-portofolio text-center pb-4  mt-3">
      <h2 className="Using-title my-4">What is Super Resolution?</h2>
      <p className="position-relative paragraph">Super resolution enhances image quality by increasing pixel density beyond the original size or resolution. This process involves AI-driven analysis of image data to intelligently generate new pixels, resulting in sharper and more detailed images.</p>
    </div>
    <div className="row   g-5">
      <div className="col-md-4 ">
        <div className="card shadow">
          <div className="portfolio-img w-100 ">
            <Image src={Image1} className="card-img-top  h-25" alt="Image upload" />
          </div>
          <div className="card-body d-flex justify-content-between align-items-center bg-white">
            <div className="main-body">
              <h5 className="Using-p">1. Upload an image</h5>
              <p className="text-secondary Using-par"> We accept both PNG and JPG file formats and most videos file format.</p>
            </div>
        
          </div>
        </div>
      </div>


      <div className="col-md-4">
        <div className="card shadow">
          <div className="portfolio-img w-100">
            <Image src={Image2} className="card-img-top h-25" alt="upscale photo" />
          </div>
          <div className="card-body d-flex justify-content-between align-items-center bg-white">
            <div className="main-body">
              <h5 className="portfolio-p Using-p">2. Upscale using AI</h5>
              <p className="text-secondary Using-par">Transform your images into high-quality digital.</p>
            </div>
        
          </div>
        </div>
      </div>
 


      <div className="col-md-4">
        <div className="card shadow">
          <div className="portfolio-img">
            <Image src={Image3} className="card-img-top h-25" alt="mobiel" />
          </div>
          <div className="card-body d-flex justify-content-between align-items-center bg-white">
            <div className="main-body">
              <h5 className="portfolio-p Using-p">3. Download</h5>
              <p className="text-secondary Using-par"> Download your enhanced image in PNG format.</p>
            </div>
        
          </div>
        </div>
      </div>
 
 




    </div>
  </div>
</section>


<Footer/>

    
    
    
    
    
    </>
        
   
}

export default HowUsing
