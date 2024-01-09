"use client";

import { useState, useRef } from "react";

export default function Career() {
  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState();
  const formRef = useRef()

  async function formHandler(e) {
    e.preventDefault();
    setLoading(true);

    const form = formRef.current
    const formData = new FormData(form)

    try {
      const res = await fetch("/api/career", {
        method: "POST",
        headers:{
            'Conetnt-Type': 'multipart/form-data'
        },
        body: formData,
      });
      const data = await res.json();
      if (data.success) {
        setNotification('Send successfully!')
      } else {
        setNotification('Error: failed to send CV.')
      }
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  }
  return (
    <>
      <div className="bg-gradient-to-r from-[rgb(24,117,255)] to-[rgb(139,221,255)] text-center text-black py-6">
        <p className="text-4xl mb-4">Apply For Job Now</p>
        <p>
          Excited to work with us? Apply now and we will get back to you soon...
        </p>
      </div>
      <div className="flex items-center justify-center my-16">
        <form className="text-lg border p-4 rounded-md" id="form" onSubmit={formHandler} ref={formRef}>
          <div className="flex flex-col mb-4">
            <label className="mb-2">Name</label>
            <input name='name' type="text"></input>
          </div>
          <div className="grid grid-cols-2 gap-2 mb-4">
            <div className="">
              <label className="pr-2">Contact Number</label>
              <input name="number" type="tel"></input>
            </div>
            <div>
              <label className="pr-2">Email</label>
              <input name="email" type="text"></input>
            </div>
          </div>
          <div className="flex flex-col mb-4">
            <label className="mb-2">Upload your CV</label>
            <input name="file" type="file" accept=".pdf" className="border"></input>
          </div>
          <button className="btn bg-[#0d6efd] px-2 py-3 min-h-0 h-fit text-white">
            {loading && <span className="loading loading-spinner"></span>}
            Submit
          </button>
        </form>
        {notification && <p>{notification}</p>}
      </div>
    </>
  );
}
