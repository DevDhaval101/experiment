"use client";

import { useState, useRef } from "react";

export default function Career() {
  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState();
  const formRef = useRef();

  async function formHandler(e) {
    e.preventDefault();
    setLoading(true);

    const form = formRef.current;
    const formData = new FormData(form);

    try {
      const res = await fetch("/api/career", {
        method: "POST",
        baseUrl: "https://sivector.com",
        headers: {
          "Conetnt-Type": "multipart/form-data",
        },
        body: formData,
      });
      const data = await res.json();
      if (data.success) {
        setNotification("Send successfully!");
      } else {
        setNotification("Error: failed to send CV.");
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
        <p className="p-2">
          Excited to work with us? Apply now and we will get back to you soon...
        </p>
      </div>
      <div className="flex items-center justify-center my-16">
        <form
          className="text-lg border p-4 rounded-md w-[90%] md:w-[50%]
                [box-shadow:rgba(50,_50,_93,_0.25)_0px_50px_100px_-20px,_rgba(0,_0,_0,_0.3)_0px_30px_60px_-30px,_rgba(10,_37,_64,_0.35)_0px_-2px_6px_0px_inset]"
          id="form"
          onSubmit={formHandler}
          ref={formRef}
        >
          <div className="flex flex-col mb-4">
            <label className="mb-2">Name</label>
            <input name="name" type="text" className="border px-2"></input>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
            <div className="flex flex-col md:flex-col">
              <label className="pr-2">Contact Number</label>
              <input name="number" type="tel" className="border px-2"></input>
            </div>
            <div className="flex flex-col md:flex-col">
              <label className="pr-2">Email</label>
              <input name="email" type="text" className="border px-2"></input>
            </div>
          </div>
          <div className="flex flex-col mb-4">
            <label className="mb-2">Upload your CV</label>
            <input
              name="file"
              type="file"
              accept=".pdf"
              className="border"
            ></input>
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
