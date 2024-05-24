import React from 'react'
import img1 from '../images/1.jpg'
import img2 from '../images/2.jpg'
import img3 from '../images/3.jpg'


const Services = () => {
  return (
    <div class='container' style={{ marginLeft: '200px' }}  >
                
      <div class="about-section">
          <h1>Our Services</h1>
          <p>Some text about who we are and what we do.</p>
          <p>Resize the browser window to see that this page is responsive by the way.</p>
      </div>

      <div class="container mt-5">
        <h1 class="text-center mb-4">Our Services</h1>
        <div class="row">
          
          <div class="col-md-4 mb-4">
            <div class="card h-100">
              <img src={img1} class="card-img-top" alt="Service 1" />
              <div class="card-body">
                <h5 class="card-title">Vehicle Sales</h5>
                <p class="card-text">Explore our wide range of vehicles. From family cars to luxury sedans, we offer the best options to suit your needs.</p>
              </div>
            </div>
          </div>
          
          <div class="col-md-4 mb-4">
            <div class="card h-100">
              <img src={img2} class="card-img-top" alt="Service 2" />
              <div class="card-body">
                <h5 class="card-title">Vehicle Maintenance</h5>
                <p class="card-text">Our expert technicians provide top-notch maintenance services to keep your vehicle running smoothly.</p>
              </div>
            </div>
          </div>
        
          <div class="col-md-4 mb-4">
            <div class="card h-100">
              <img src={img3} class="card-img-top" alt="Service 3" /> 
              <div class="card-body">
                <h5 class="card-title">Customer Support</h5>
                <p class="card-text">We offer 24/7 customer support to assist you with any inquiries and ensure a seamless experience.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

   </div>
  )
}

export default Services

