"use client";
import React from 'react'
import '../Pricing/pricing.css'
import Navbar from '../components/layout/navbar';
import Footer from '../components/layout/footer';





function Pricing() {
    return<>

    <Navbar/>

<section id="pricing" className="pricing py-5  ">
  <div className="container py-4 ">
    <div className="row ">
      <div className="title-teams m-auto text-center mb-5">
        <div className="title d-flex justify-content-center align-items-center my-4">
          <h2 className="l-teams ">C</h2>
          <h2 className="text-dark title-layer-teams position-absolute">Cheap Prices</h2>
        </div>
        <h4 className="text-secondary">We provide the best quality.</h4>
      </div>
      <div className="col-md-6 col-lg-3 p-5 main-pricing  ">
        <div className="card py-4">
          <div className="card-body">
            <div className="a-princing my-4 ps-4">
              <h4>Starter</h4>
            </div>
            <div className="b-pricing ps-4 ">
              <h2><sup>$</sup>9 </h2>
            </div>
            <div className="f-pricing ps-4">
              <hr />
            </div>
            <div className="c-pricing ">
              <ul className="list-unstyled ps-4 text-secondary">
                <li className><p>Unlimited Connections</p></li>
                <li><p>24/7 Support</p></li>
                <li><p>Full SSL Protection</p></li>
                <li><p>Unlimited Channels</p></li>
              </ul>
            </div>
            <div className="d-pricing ps-4 ">
              <button className="btn btn-primary .btn-color ">Sign Up</button>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-6 col-lg-3 p-5 main-pricing  ">
        <div className="card py-4">
          <div className="card-body">
            <div className="a-princing my-4 ps-4">
              <h4>Silver</h4>
            </div>
            <div className="b-pricing ps-4 ">
              <h2><sup>$</sup>19 </h2>
            </div>
            <div className="f-pricing ps-4">
              <hr />
            </div>
            <div className="c-pricing ">
              <ul className="list-unstyled ps-4 text-secondary">
                <li className><p>Unlimited Connections</p></li>
                <li><p>24/7 Support</p></li>
                <li><p>Full SSL Protection</p></li>
                <li><p>Unlimited Channels</p></li>
              </ul>
            </div>
            <div className="d-pricing ps-4 ">
              <button className="btn btn-primary .btn-color ">Sign Up</button>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-6 col-lg-3 p-5 main-pricing gold-pricing  ">
        <div className="card py-5 ">
          <div className="card-body">
            <div className="a-princing my-4 ps-4 ">
              <h4>Gold</h4>
            </div>
            <div className="b-pricing ps-4 text-info ">
              <h2><sup>$</sup>29 </h2>
            </div>
            <div className="f-pricing ps-4">
              <hr />
            </div>
            <div className="c-pricing ">
              <ul className="list-unstyled ps-4 text-secondary">
                <li className><p>Unlimited Connections</p></li>
                <li><p>24/7 Support</p></li>
                <li><p>Full SSL Protection</p></li>
                <li><p>Unlimited Channels</p></li>
              </ul>
            </div>
            <div className="d-pricing ps-4 ">
              <button className="btn btn-primary .btn-color ">Sign Up</button>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-6 col-lg-3 p-5 main-pricing  ">
        <div className="card py-4">
          <div className="card-body">
            <div className="a-princing my-4 ps-4">
              <h4>Platinum</h4>
            </div>
            <div className="b-pricing ps-4 ">
              <h2><sup>$</sup>49 </h2>
            </div>
            <div className="f-pricing ps-4">
              <hr />
            </div>
            <div className="c-pricing ">
              <ul className="list-unstyled ps-4 text-secondary">
                <li className><p>Unlimited Connections</p></li>
                <li><p>24/7 Support</p></li>
                <li><p>Full SSL Protection</p></li>
                <li><p>Unlimited Channels</p></li>
              </ul>
            </div>
            <div className="d-pricing ps-4 ">
              <button className="btn btn-primary .btn-color ">Sign Up</button>
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
export default Pricing

