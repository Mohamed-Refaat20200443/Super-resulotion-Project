"use client";
import React from 'react';
import './medo.css';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import Navbar from '../components/layout/navbar';
import Footer from '../components/layout/footer';



const Typewriter = dynamic(() => import('typewriter-effect'), { ssr: false });


function Main() {




    return <>

    <header>


          <Navbar/>
    <div  className='SectionOne'>
    <div className="first-section  vh-100">
  <div id="carouselExampleIndicators" className="carousel slide">
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={1} aria-label="Slide 2" />
    </div>
    <div className="carousel-inner">
      <div className="carousel-item active  text-white">
        <div className="info-home">
          <h1 className="pb-4">Welcome to VImage.</h1>
          <p className="pb-2">We are an innovative company  for 
          <Typewriter
  options={{
    strings: ['Single Image Super resulotion .', 'Video Super resulotion .'],
    autoStart: true,
    loop: true,
  }}
/></p>
          <div className="btn-home">


          <Link href={'/home'} className='  btn  .btn-color btn-contact text-decoration-none  me-3   '> Start  </Link>
            <button className="btn  .btn-color me-3 btn-more">Read More</button>
           

            
              
             
          </div>
        </div>
      </div>
      <div className="carousel-item text-white">
        <div className="info-home">
          <h1 className="pb-4">Create With VImage.</h1>
          <p className="pb-2">Innovative super resolution solutions for safety services.</p>
          <div className="btn-home">

          <Link href={'/home'} className='  btn  .btn-color btn-contact text-decoration-none  me-3   '> Start  </Link>
            <button className="btn  .btn-color me-3 btn-more">Read More</button>
            
     
         
          </div>
        </div>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true" />
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true" />
      <span className="visually-hidden">Next</span>
    </button>
  </div> 
</div>
    
      
    </div >

    </header>




    <Footer/>



  
    </>
}

export default Main
