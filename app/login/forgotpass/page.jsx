// import React from "react";

// function page() {
//   return (
//     <div className="loginbg">
//       <div className="min-h-screen  flex justify-center items-center flex-col">
//         <div className="flex flex-col">
//           <h1 className="text-black text-2xl font-extrabold">Forgotten Password</h1>
//           <p className="font-medium text-black pt-3">Enter the email associated to your account</p>
//         </div>
//         <div className="pt-10">
//           <div className="flex flex-col pb-5 ">
//             <label htmlFor="email" className="font-medium pb-3 text-black">Email Address:</label>
//             <input type="email" name="email" id="" className="border border-[#4C4C4C] rounded-sm p-3 outline-none" placeholder="Enter email address" />
//           </div>
//           <button className="bg-[#004859] h-[3rem] w-[20rem] rounded-md">Continue</button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default page;
"use client"

import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation"; 
import { toast } from "react-toastify";

function Page() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleForgotPassword = async () => {
    if (!email) {
      toast.error("Please enter an email address.");
      return;
    }

    setLoading(true);
    
    try {
      const response = await axios.post('https://academiabackend-1-1ekf.onrender.com/user//api/v1/forgotpassword', {
        email,
      });

      if (response.status === 200) {
        localStorage.setItem('email', email); 
        toast.success("Check your mail for the token"); 
        router.push('/reset-password'); 
      } else {
        toast.error('Error: ' + response.data.message); 
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('An error occurred, please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="loginbg">
      <div className="min-h-screen flex justify-center items-center flex-col">
        <div className="flex flex-col">
          <h1 className="text-black text-2xl font-extrabold">Forgotten Password</h1>
          <p className="font-medium text-black pt-3">Enter the email associated with your account</p>
        </div>
        <div className="pt-10">
          <div className="flex flex-col pb-5">
            <label htmlFor="email" className="font-medium pb-3 text-black">Email Address:</label>
            <input
              type="email"
              name="email"
              id="email"
              className="border border-[#4C4C4C] rounded-sm p-3 outline-none"
              placeholder="Enter email address"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <button
            className="bg-[#004859] h-[3rem] w-[20rem] rounded-md"
            onClick={handleForgotPassword}
            disabled={loading} // Disable button while loading
          >
            {loading ? "Processing..." : "Continue"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Page;
