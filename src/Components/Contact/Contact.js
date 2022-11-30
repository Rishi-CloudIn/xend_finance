import React from 'react';
import './Contact.css';
import Lottie from "lottie-react";
import contact from '../../Images/lottie/contact-us-2.json';

import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

function Contact ()
{
  return (
    <>
      <div className='container contact-container' id="Contact">
        <div className='contact-content-div'>
          <h1 className='h1 fw-bold text-center'>Contact Us</h1>
          <div className='row'>
            <div className='col-md-5 d-md-block d-none'>
              <div className='contact-img-div'>
                <Lottie animationData={contact} />
              </div>
            </div>
            <div className='col-md-7 col-12 d-flex align-items-center'>
              <div className='contact-form-div'>
                <form>
                  <div className='row p-sm-4 p-1'>
                    <div className='col-6 p-sm-3 p-2'>
                      <input type="text" name="name" className='form-input w-100' placeholder='Name' />
                    </div>

                    <div className='col-6 p-sm-3 p-2'>
                      <input type="email" name="email" className='form-input w-100' placeholder='Email Id' />
                    </div>


                    <div className='col-6 p-sm-3 p-2'>
                      <input type="text" name="phone" className='form-input w-100' placeholder='Phone Number' />
                    </div>
                    <div className='col-6 p-sm-3 p-2'>
                      <input type="text" name="location" className='form-input w-100' placeholder='Location' />
                    </div>
                    <div className='col-12 p-sm-3 p-2'>
                      <textarea type="text" name="massage" className='textarea form-input w-100' placeholder='Massage' rows='5' />
                    </div>

                    <button type='submit' className='contact-btn px-4'>Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;