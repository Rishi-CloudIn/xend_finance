import React, { useState, useRef } from 'react';
// import './Contact.css';
import Lottie from "lottie-react";
import contact from '../../../Images/lottie/contact-us-2.json';

import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import emailjs from '@emailjs/browser';
function TechBContact ()
{

  const form = useRef();
  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors },
    reset
  } = useForm();
  const [ data, setData ] = useState( {} );

  const onInputChange = ( e ) =>
  {
    setData( { ...data, [ e.target.name ]: e.target.value } );
  };
  const sendEmail = ( data, e ) =>
  {
    e.preventDefault();

    emailjs.sendForm(
      "service",
      "template",
      form.current,
      "Sz5nHTgdr-rAs6Oht", )
      .then( ( result ) =>
      {
        Swal.fire(
          "Good job!",
          "Message Send Successfully :)",
          "success",
          "Close",
        );
      }, ( error ) =>
      {
        Swal.fire( {
          title: "Error!",
          text: "Something went wrong message could not be sent :) ",
          icon: "error",
          button: "ok!",
        } );
      } );



    console.log( data );
    reset();
  };
  return (
    <>
      <div className='container contact-container' id="Contact">
        <div className='contact-content-div'>
          <h1 className='h1 fw-bold text-center linear-text'>Investment and Business Partners are Welcome</h1>
          <div className='row'>
            <div className='col-md-5 d-md-block d-none'>
              <div className='contact-img-div'>
                <Lottie animationData={contact} />
              </div>
            </div>
            <div className='col-md-7 col-12 d-flex align-items-center'>
              <div className='contact-form-div'>
                <form ref={form} onSubmit={handleSubmit( sendEmail )}>
                  <div className='row p-sm-4 p-1'>

                    <div className='col-6 p-sm-3 p-2'>
                      <input
                        type="text"
                        name="name"
                        maxLength={50}
                        className='form-input w-100'
                        placeholder='Name'
                        onChange={e => onInputChange( e )}
                        {...register( "name", {
                          required: "Name is required",
                          maxLength: 20,
                          minLength: 1,
                          pattern: {
                            value: /^[A-Z a-z]+$/,
                            message: "Value is Invalid",
                          }
                        } )}
                        onKeyUp={() =>
                        {
                          trigger( "name" );
                        }}
                        onKeyPress={() =>
                        {
                          trigger( "name" );
                        }}
                      />
                      {errors.name &&
                        ( <small className='text-danger error-text'>{errors.name.message} </small> )}
                    </div>


                    <div className='col-6 p-sm-3 p-2'>
                      <input
                        type="email"
                        name="email"
                        className='form-input w-100'
                        placeholder='Email Id'
                        onChange={e => onInputChange( e )}
                        {...register( "email", {
                          required: "Email is required",
                          pattern: {
                            // eslint-disable-next-line no-useless-escape
                            value: /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
                            message: "Value is Invalid",
                          }
                        } )}
                        onKeyUp={() =>
                        {
                          trigger( "email" );
                        }}
                        onKeyPress={() =>
                        {
                          trigger( "email" );
                        }} />
                      {errors.email &&
                        ( <small className='text-danger error-text'>{errors.email.message} </small> )}
                    </div>


                    <div className='col-6 p-sm-3 p-2'>
                      <input
                        type="text"
                        name="phone"
                        maxLength={10}
                        className='form-input w-100'
                        placeholder='Phone Number'
                        onChange={e => onInputChange( e )}
                        {...register( "phone", {
                          required: "phone number is required",
                          maxLength: 10,
                          pattern: {
                            value: /^[6-9]{1}[0-9]{9}$/,
                            message: "Value is Invalid",
                          }
                        } )}
                        onKeyUp={( e ) =>
                        {
                          trigger( "phone" );
                        }
                        }
                        onKeyPress={( event ) =>
                        {
                          if ( !/[0-9]/.test( event.key ) )
                          {
                            event.preventDefault();
                          }
                        }}
                      />
                      {errors.phone &&
                        ( <small className='text-danger error-text'>{errors.phone.message} </small> )}
                    </div>
                    <div className='col-6 p-sm-3 p-2'>
                      <input
                        type="text"
                        name="location"
                        className='form-input w-100'
                        placeholder='Location'
                        onChange={e => onInputChange( e )}
                        {...register( "location", {
                          required: "Location is required",
                          maxLength: 20,
                          minLength: 1,
                          pattern: {
                            value: /^[A-Z a-z]+$/,
                            message: "Value is Invalid",
                          }
                        } )}
                        onKeyUp={() =>
                        {
                          trigger( "location" );
                        }}
                        onKeyPress={() =>
                        {
                          trigger( "location" );
                        }}
                      />
                      {errors.location &&
                        ( <small className='text-danger error-text'>{errors.location.message} </small> )}
                    </div>
                    <div className='col-12 p-sm-3 p-2'>
                      <textarea
                        type="text"
                        name="message"
                        className='textarea form-input w-100'
                        placeholder='Massage' rows='5' {...register( "message", {
                          required: "Message is required",
                        } )}
                        onKeyUp={() =>
                        {
                          trigger( "message" );
                        }}
                        onKeyPress={() =>
                        {
                          trigger( "message" );
                        }} />
                      {errors.message &&
                        ( <small className='text-danger textarea-input error-text'>{errors.message.message}</small> )}
                    </div>

                    <button type='submit' value="Send" className='contact-btn px-4'>Submit</button>
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

export default TechBContact;