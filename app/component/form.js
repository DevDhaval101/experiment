"use client";

import Image from "next/image";
import { useRef, useState } from "react";

export default function Form(e) {
  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState();

  const nameRef = useRef();
  const emailRef = useRef();
  const contactNumRef = useRef();
  const subjectRef = useRef();
  const inquiryRef = useRef();

  function clearForm(){
    if(notification){
        setNotification()
    }
  }

  async function formSubmitHandler(e) {
    setLoading(true);
    e.preventDefault();
    const body = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      contactNumber: contactNumRef.current.value,
      subject: subjectRef.current.value,
      inquiry: inquiryRef.current.value,
    };

    const response = await fetch("/api/contact-form", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const data = await response.json();
    console.log(data)
    setLoading(false)
    if(data.message === 'success'){
        setNotification('Send successfully!')
    }else{
        setNotification('Error: failed to send inquiry.')
    }
  }

  return (
    <div className="flex items-center justify-center m-4">
      <div className="flex gap-2">
        <Image
          src="/images/general/getin-touch.webp"
          alt="get in touch image"
          width={500}
          height={333}
          className="rounded-md"
        ></Image>
        <div>
          <p className="text-xl">Get In Touch</p>
          <form onSubmit={formSubmitHandler} onChange={clearForm}>
            <div className="grid grid-cols-2">
              <input
                type="text"
                placeholder="Name"
                className="border border-slate-400 rounded-md p-1 m-1"
                ref={nameRef}
              ></input>
              <input
                type="email"
                placeholder="Email"
                className="border border-slate-400 rounded-md p-1 m-1"
                ref={emailRef}
              ></input>
            </div>
            <div className="grid grid-cols-2">
              <input
                type="tel"
                placeholder="Contact No"
                className="border border-slate-400 rounded-md p-1 m-1"
                ref={contactNumRef}
              ></input>
              <input
                type="text"
                placeholder="Subject"
                className="border border-slate-400 rounded-md p-1 m-1"
                ref={subjectRef}
              ></input>
            </div>
            <div>
              <textarea
                rows="5"
                cols="50"
                placeholder="Your Inquiry"
                className="border border-slate-400 rounded-md p-1 m-1"
                ref={inquiryRef}
              ></textarea>
            </div>
            <button className="btn bg-[#0d6efd] p-2 min-h-0 h-fit text-white">
                {
                    loading && (<span className="loading loading-spinner"></span>)
                }
              Submit
            </button>
          </form>
          {
            notification && <p>{notification}</p>
          }
        </div>
      </div>
    </div>
  );
}
