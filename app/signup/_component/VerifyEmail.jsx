// "use client";

// import { useState, useRef } from "react";
// import { useRouter } from "next/navigation";
// import axios from "axios";
// import { toast } from "react-toastify";

// export default function VerificationCode() {
//   const [code, setCode] = useState(Array(6).fill(""));
//   const [loading, setLoading] = useState(false);
//   const inputRefs = useRef([]);
//   const router = useRouter();

//   const handleChange = (index, value) => {
//     if (/^[0-9]?$/.test(value)) {
//       const newCode = [...code];
//       newCode[index] = value;
//       setCode(newCode);
//       if (value && index < 5) {
//         inputRefs.current[index + 1]?.focus();
//       }
//     }
//   };

//   const handleKeyDown = (index, e) => {
//     if (e.key === "Backspace" && !code[index] && index > 0) {
//       inputRefs.current[index - 1]?.focus();
//     }
//   };

//   const handlePaste = (e) => {
//     e.preventDefault();
//     const pastedData = e.clipboardData.getData("text").slice(0, 6);
//     if (/^[0-9]{6}$/.test(pastedData)) {
//       const newCode = pastedData.split("");
//       setCode(newCode);
//       inputRefs.current[5]?.focus();
//     } else {
//       toast.error("Invalid OTP. Please paste a 6-digit code.");
//     }
//   };

//   const handleVerify = async () => {
//     const verificationCode = code.join("");
//     if (verificationCode.length !== 6) {
//       toast.error("Please enter a 6-digit OTP.");
//       return;
//     }

//     const user_email = localStorage.getItem("user_email");
//     if (!user_email) {
//       toast.error("No email found. Please try again.");
//       console.log("Hello");
//       return;
//     }

//     setLoading(true);
//     try {
//       const response = await axios.post(
//         "https://academiabackend-1-1ekf.onrender.com/user/api/v1/verifyotp",
//         {
//           otp: verificationCode,
//           email: user_email,
//         }
//       );

//       if (response.data.Status === "Succesful") {
//         toast.success("Account verified successfully!");
//         router.push("/login");
//       }
//     } catch (error) {
//       toast.error(error.response?.data?.message || "Invalid or expired OTP");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleResend = async () => {
//     const user_email = localStorage.getItem("user_email");
//     if (!user_email) {
//       toast.error("No email found. Please try again.");
//       return;
//     }

//     setLoading(true);
//     try {
//       await axios.post(
//         "https://academiabackend-1-1ekf.onrender.com/user/api/v1/resendotp",
//         { email: user_email }
//       );
//       toast.success("OTP resent successfully!");
//     } catch (error) {
//       toast.error(error.response?.data?.message || "Failed to resend OTP");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="verify">
//       <div className="flex items-center justify-center min-h-screen">
//         <div className="w-full max-w-md p-6">
//           <h1 className="text-[32px] text-black font-bold mb-2">
//             Verify Your Email ✨
//           </h1>
//           <p className="text-[#666666] mb-6">
//             Enter the verification code sent to your email here
//           </p>
//           <div className="flex gap-2 mb-6">
//             {code.map((digit, index) => (
//               <input
//                 key={index}
//                 type="text"
//                 inputMode="numeric"
//                 maxLength={1}
//                 value={digit}
//                 ref={(el) => (inputRefs.current[index] = el)}
//                 onChange={(e) => handleChange(index, e.target.value)}
//                 onKeyDown={(e) => handleKeyDown(index, e)}
//                 onPaste={handlePaste}
//                 className="w-[52px] h-[52px] border border-gray-300 text-black rounded-md text-center text-lg focus:outline-none focus:border-[#006D77] focus:ring-1 focus:ring-[#006D77]"
//               />
//             ))}
//           </div>
//           <button
//             onClick={handleVerify}
//             disabled={loading || code.join("").length !== 6}
//             className={`w-[22rem] py-2 rounded-md text-white font-medium ${
//               code.join("").length === 6
//                 ? "bg-[#006D77] hover:bg-[#005c64]"
//                 : "bg-gray-400 cursor-not-allowed"
//             }`}
//           >
//             {loading ? "Verifying..." : "Verify"}
//           </button>

//           <div className="text-center mt-4">
//             <span className="text-[#666666]">Didn't receive a code? </span>
//             <button
//               onClick={handleResend}
//               className="text-[#006D77] hover:text-[#005c64] text-sm underline font-medium"
//             >
//               Resend Code
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-toastify";

export default function VerificationCode() {
  const [code, setCode] = useState(Array(6).fill(""));
  const [loading, setLoading] = useState(false);
  const [resendLoading, setResendLoading] = useState(false); 
  const inputRefs = useRef([]);
  const router = useRouter();

  const handleChange = (index, value) => {
    if (/^[0-9]?$/.test(value)) {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);
      if (value && index < 5) {
        inputRefs.current[index + 1]?.focus();
      }
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text").slice(0, 6);
    if (/^[0-9]{6}$/.test(pastedData)) {
      const newCode = pastedData.split("");
      setCode(newCode);
      inputRefs.current[5]?.focus();
    } else {
      toast.error("Invalid OTP. Please paste a 6-digit code.");
    }
  };

  const handleVerify = async () => {
    const verificationCode = code.join("");
    if (verificationCode.length !== 6) {
      toast.error("Please enter a 6-digit OTP.");
      return;
    }

    const user_email = localStorage.getItem("user_email");
    if (!user_email) {
      toast.error("No email found. Please try again.");
      console.log("Hello");
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post(
        "https://academiabackend-1-1ekf.onrender.com/user/api/v1/verifyotp",
        {
          otp: verificationCode,
          email: user_email,
        }
      );

      if (response.status == 200 || 201) {
        toast.success("Account verified successfully!");
        router.push("/login");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Invalid or expired OTP");
    } finally {
      setLoading(false);
    }
  };

  const handleResend = async () => {
    const user_email = localStorage.getItem("user_email");
    if (!user_email) {
      toast.error("No email found. Please try again.");
      return;
    }

    setResendLoading(true); 
    try {
      await axios.post(
        "https://academiabackend-1-1ekf.onrender.com/user/api/v1/resendotp",
        { email: user_email }
      );
      toast.success("OTP resent successfully!");
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to resend OTP");
    } finally {
      setResendLoading(false);
    }
  };

  return (
    <div className="verify">
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-full max-w-md p-6">
          <h1 className="text-[32px] text-black font-bold mb-2">
            Verify Your Email ✨
          </h1>
          <p className="text-[#666666] mb-6">
            Enter the verification code sent to your email here
          </p>
          <div className="flex gap-2 mb-6">
            {code.map((digit, index) => (
              <input
                key={index}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={digit}
                ref={(el) => (inputRefs.current[index] = el)}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                onPaste={handlePaste}
                className="w-[52px] h-[52px] border border-gray-300 text-black rounded-md text-center text-lg focus:outline-none focus:border-[#006D77] focus:ring-1 focus:ring-[#006D77]"
              />
            ))}
          </div>
          <button
            onClick={handleVerify}
            disabled={loading || code.join("").length !== 6}
            className={`w-[22rem] py-2 rounded-md text-white font-medium ${
              code.join("").length === 6
                ? "bg-[#006D77] hover:bg-[#005c64]"
                : "bg-gray-400 cursor-not-allowed"
            }`}
          >
            {loading ? "Verifying..." : "Verify"}
          </button>

          <div className="text-center mt-4">
            <span className="text-[#666666]">Didn't receive a code? </span>
            <button
              onClick={handleResend}
              className="text-[#006D77] hover:text-[#005c64] text-sm underline font-medium"
            >
              {resendLoading ? "Resending..." : "Resend Code"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
