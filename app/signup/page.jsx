// import { Button } from "@/components/ui/button";
// import { Card } from "@/components/ui/card";
// import { Checkbox } from "@/components/ui/checkbox";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import Image from "next/image";
// import Link from "next/link";
// import { FaSquareFacebook } from "react-icons/fa6";
// import { FaApple } from "react-icons/fa6";
// import { FcGoogle } from "react-icons/fc";

// export default function Component() {
//   return (
//     <div className="loginbg">
//       <div className="min-h-screen flex items-center justify-center p-4">
//         <div className="w-full max-w-[480px] p-8 relative overflow-hidden">
//           {/* Decorative elements */}
//           {/* <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-orange-200 to-yellow-100 rounded-full -translate-y-1/2 translate-x-1/2 opacity-50" />
//         <div className="absolute bottom-0 right-0 w-48 h-48 bg-gradient-to-br from-orange-200 to-yellow-100 rounded-full translate-y-1/2 translate-x-1/2 opacity-50" /> */}

//           <div className="relative">
//             <div className="flex justify-between items-start mb-2">
//               <div>
//                 <h1 className="text-2xl font-bold text-gray-900 mb-1">
//                   Create a new account
//                 </h1>
//                 <p className="text-sm text-gray-600">
//                   Already have an account?{" "}
//                   <Link
//                     href="/login"
//                     className="text-blue-600 hover:underline font-semibold"
//                   >
//                     Login
//                   </Link>
//                 </p>
//               </div>
//               {/* <div className="w-16 h-16">
//               <div className="w-full h-full bg-blue-500 rounded-br-3xl" />
//             </div> */}
//             </div>

//             <form className="space-y-4">
//               <div className="space-y-2">
//                 <Label htmlFor="email" className="text-black">
//                   Name
//                 </Label>
//                 <Input
//                   id="email"
//                   placeholder="Enter full name"
//                   type="email"
//                   required
//                 />
//               </div>
//               <div className="space-y-2">
//                 <Label htmlFor="email" className="text-black">
//                   Email
//                 </Label>
//                 <Input
//                   id="email"
//                   type="email"
//                   placeholder="Enter Your Email"
//                   required
//                 />
//               </div>

//               <div className="space-y-2">
//                 <Label htmlFor="password" className="text-black">
//                   Password
//                 </Label>
//                 <Input
//                   id="password"
//                   type="password"
//                   placeholder="Enter Password"
//                   required
//                 />
//               </div>
//               <div className="space-y-2">
//                 <Label htmlFor="password" className="text-black">
//                   Confirm Password
//                 </Label>
//                 <Input
//                   id="password"
//                   type="password"
//                   placeholder="Enter Password again"
//                   required
//                 />
//               </div>
//               <div className="space-y-2">
//                 <Label htmlFor="password" className="text-black">
//                   Phone number
//                 </Label>
//                 <Input
//                   id="password"
//                   type="password"
//                   placeholder="Enter phone number"
//                   required
//                 />
//               </div>

//               <div className="">
//                 <div className="flex items-center space-x-2">
//                   <Checkbox id="remember" />
//                   <Label
//                     htmlFor="remember"
//                     className="text-sm text-black font-normal"
//                   >
//                     I agree to the Terms of Use and Privacy Policy
//                   </Label>
//                 </div>
//               </div>

//               <Button
//                 className="w-full bg-[#005C73] hover:bg-[#005C73] text-lg"
//                 size="lg"
//               >
//                 Sign Up
//               </Button>

//               <div className="relative my-4">
//   <div className="absolute inset-0 flex items-center">
//     <div className="w-full border-t border-black"></div>
//   </div>
//   <div className="relative flex justify-center text-sm">
//     <span className="px-2 bg-[#F2FDFF] text-black font-semibold text-lg"  >or</span>
//   </div>
// </div>


// <div className="space-y-4">
//   <Link href="/login/fblogin">
//     <Button
//       variant="outline"
//       className="w-full flex items-center justify-start text-black border border-teal-700 px-4 py-2 rounded-md"
//       size="lg"
//     >
//       <FaSquareFacebook className="text-blue-500 text-2xl mr-4" />
//       <span className="text-lg font-medium">Sign up with Facebook</span>
//     </Button>
//   </Link>
//   <Button
//     variant="outline"
//     className="w-full flex items-center justify-start text-black border border-teal-700 px-4 py-2 rounded-md"
//     size="lg"
//   >
//     <FcGoogle className="text-2xl mr-4" />
//     <span className="text-lg font-medium">Sign up with Google</span>
//   </Button>
//   <Button
//     variant="outline"
//     className="w-full flex items-center justify-start text-black border border-teal-700 px-4 py-2 rounded-md"
//     size="lg"
//   >
//     <FaApple className="text-black text-2xl mr-4" />
//     <span className="text-lg font-medium">Sign up with Apple</span>
//   </Button>
// </div>

//             </form>

//             {/* <div className="absolute bottom-0 left-0 w-48">
//             <Image
//               src="/placeholder.svg"
//               alt="Decorative illustration"
//               width={200}
//               height={200}
//               className="w-full"
//             />
//           </div> */}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
"use client"

import { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import Link from "next/link";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaApple } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { useRouter } from "next/navigation";
import { FaEye, FaEyeSlash } from 'react-icons/fa'

// export default function Component() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phonenumber: "",
//     password: "",
//     confirmPassword: "",
//   });

//   const handleChange = (e) => {
//     const { id, value } = e.target;
//     setFormData((prev) => ({ ...prev, [id]: value }));
//   };

//   // const handleSubmit = async (e) => {
//   //   e.preventDefault();

//   //   if (formData.password !== formData.confirmPassword) {
//   //     toast.error("Passwords do not match");
//   //     return;
//   //   }

//   //   try {
//   //     const response = await axios.post(
//   //       "https://academiabackend-1-1ekf.onrender.com/user/api/v1/sighup",
//   //       formData
//   //     );

//   //     if (response.data.status === "Successful") {
//   //       toast.success("Check your mail for OTP to verify your signup");
//   //     } else {
//   //       toast.error(response.data.message);
//   //     }
//   //   } catch (error) {
//   //     if (error.response && error.response.status === 500) {
//   //       toast.error("Email, Name, and Phone Number Already Exist");
//   //     } else {
//   //       toast.error("An error occurred during signup");
//   //     }
//   //   }
//   // };


//   const handleSubmit = async (e) => {
//     e.preventDefault();
  
//     const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{6,}$/;
  
//     if (!passwordRegex.test(formData.password)) {
//       toast.error(
//         "Password must have at least one uppercase letter, one number, one special character, and be more than 5 characters long."
//       );
//       return;
//     }
  
//     if (formData.password !== formData.confirmPassword) {
//       toast.error("Passwords do not match");
//       return;
//     }
  
//     try {
//       const response = await axios.post(
//         `${Baseurl}/user/api/v1/sighup`,
//         formData
//       );
  
//       if (response.data.status === "Successful") {
//         toast.success("Check your mail for OTP to verify your signup");
//       } else {
//         toast.error(response.data.message);
//       }
//     } catch (error) {
//       if (error.response && error.response.status === 500) {
//         toast.error("Email, Name, and Phone Number Already Exist");
//       } else {
//         toast.error("An error occurred during signup");
//       }
//     }
//   };
  
//   return (
//     <div className="loginbg">
//       <div className="min-h-screen flex items-center justify-center p-4">
//         <div className="w-full max-w-[480px] p-8 relative overflow-hidden">
//           <div className="relative">
//             <div className="flex justify-between items-start mb-2">
//               <div>
//                 <h1 className="text-2xl font-bold text-gray-900 mb-1">
//                   Create a new account
//                 </h1>
//                 <p className="text-sm text-gray-600">
//                   Already have an account?{" "}
//                   <Link
//                     href="/login"
//                     className="text-blue-600 hover:underline font-semibold"
//                   >
//                     Login
//                   </Link>
//                 </p>
//               </div>
//             </div>

//             <form className="space-y-4" onSubmit={handleSubmit}>
//               <div className="space-y-2">
//                 <Label htmlFor="name" className="text-black">
//                   Name
//                 </Label>
//                 <Input
//                   id="name"
//                   placeholder="Enter full name"
//                   type="text"
//                   required
//                   value={formData.name}
//                   onChange={handleChange}
//                 />
//               </div>
//               <div className="space-y-2">
//                 <Label htmlFor="email" className="text-black">
//                   Email
//                 </Label>
//                 <Input
//                   id="email"
//                   type="email"
//                   placeholder="Enter Your Email"
//                   required
//                   value={formData.email}
//                   onChange={handleChange}
//                 />
//               </div>
//               <div className="space-y-2">
//                 <Label htmlFor="phonenumber" className="text-black">
//                   Phone number
//                 </Label>
//                 <Input
//                   id="phonenumber"
//                   type="text"
//                   placeholder="Enter phone number"
//                   required
//                   value={formData.phonenumber}
//                   onChange={handleChange}
//                 />
//               </div>
//               <div className="space-y-2">
//                 <Label htmlFor="password" className="text-black">
//                   Password
//                 </Label>
//                 <Input
//                   id="password"
//                   type="password"
//                   placeholder="Enter Password"
//                   required
//                   value={formData.password}
//                   onChange={handleChange}
//                 />
//               </div>
//               <div className="space-y-2">
//                 <Label htmlFor="confirmPassword" className="text-black">
//                   Confirm Password
//                 </Label>
//                 <Input
//                   id="confirmPassword"
//                   type="password"
//                   placeholder="Enter Password again"
//                   required
//                   value={formData.confirmPassword}
//                   onChange={handleChange}
//                 />
//               </div>
//               <div className="">
//                 <div className="flex items-center space-x-2">
//                   <Checkbox id="remember" />
//                   <Label
//                     htmlFor="remember"
//                     className="text-sm text-black font-normal"
//                   >
//                     I agree to the Terms of Use and Privacy Policy
//                   </Label>
//                 </div>
//               </div>
//               <Button
//                 className="w-full bg-[#005C73] hover:bg-[#005C73] text-lg"
//                 size="lg"
//                 type="submit"
//               >
//                 Sign Up
//               </Button>
//             </form>

//             <div className="relative my-4">
//               <div className="absolute inset-0 flex items-center">
//                 <div className="w-full border-t border-black"></div>
//               </div>
//               <div className="relative flex justify-center text-sm">
//                 <span className="px-2 bg-[#F2FDFF] text-black font-semibold text-lg">
//                   or
//                 </span>
//               </div>
//             </div>

//             <div className="space-y-4">
//               <Link href="/login/fblogin">
//                 <Button
//                   variant="outline"
//                   className="w-full flex items-center justify-start text-black border border-teal-700 px-4 py-2 rounded-md"
//                   size="lg"
//                 >
//                   <FaSquareFacebook className="text-blue-500 text-2xl mr-4" />
//                   <span className="text-lg font-medium">
//                     Sign up with Facebook
//                   </span>
//                 </Button>
//               </Link>
//               <Button
//                 variant="outline"
//                 className="w-full flex items-center justify-start text-black border border-teal-700 px-4 py-2 rounded-md"
//                 size="lg"
//               >
//                 <FcGoogle className="text-2xl mr-4" />
//                 <span className="text-lg font-medium">Sign up with Google</span>
//               </Button>
//               <Button
//                 variant="outline"
//                 className="w-full flex items-center justify-start text-black border border-teal-700 px-4 py-2 rounded-md"
//                 size="lg"
//               >
//                 <FaApple className="text-black text-2xl mr-4" />
//                 <span className="text-lg font-medium">Sign up with Apple</span>
//               </Button>
//             </div>
//           </div>
//         </div>
//       </div>
//       <ToastContainer />
//     </div>
//   );
// }


// export default function Component() {
//   const router = useRouter();
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phonenumber: "",
//     password: "",
//     confirmPassword: "",
//   });
//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     const { id, value } = e.target;
//     setFormData((prev) => ({ ...prev, [id]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{6,}$/;

//     if (!passwordRegex.test(formData.password)) {
//       toast.error(
//         "Password must have at least one uppercase letter, one number, one special character, and be more than 5 characters long."
//       );
//       setLoading(false);
//       return;
//     }

//     if (formData.password !== formData.confirmPassword) {
//       toast.error("Passwords do not match");
//       setLoading(false);
//       return;
//     }

//     try {
//       const response = await axios.post(
//         `${Baseurl}/user/api/v1/sighup`,
//         formData
//       );

//       if (response.ok) {
//         toast.success("Check your mail for OTP to verify your signup");

//         setFormData({
//           name: "",
//           email: "",
//           phonenumber: "",
//           password: "",
//           confirmPassword: "",
//         });


//         setTimeout(() => router.push("/login"), 2000);
//       } else {
//         toast.error(response.data.message);
//       }
//     } catch (error) {
//       if (error.response && error.response) {
//         toast.error("Email, Name, and Phone Number Already Exist");
//       } else {
//         toast.error("An error occurred during signup");
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="loginbg">
//       <div className="min-h-screen flex items-center justify-center p-4">
//         <div className="w-full max-w-[480px] p-8 relative overflow-hidden">
//           <div className="relative">
//             <div className="flex justify-between items-start mb-2">
//               <div>
//                 <h1 className="text-2xl font-bold text-gray-900 mb-1">
//                   Create a new account
//                 </h1>
//                 <p className="text-sm text-gray-600">
//                   Already have an account?{" "}
//                   <Link
//                     href="/login"
//                     className="text-blue-600 hover:underline font-semibold"
//                   >
//                     Login
//                   </Link>
//                 </p>
//               </div>
//             </div>

//             <form className="space-y-4" onSubmit={handleSubmit}>
//               <div className="space-y-2">
//                 <Label htmlFor="name" className="text-black">
//                   Name
//                 </Label>
//                 <Input
//                   id="name"
//                   placeholder="Enter full name"
//                   type="text"
//                   required
//                   value={formData.name}
//                   onChange={handleChange}
//                   className="text-black"
//                 />
//               </div>
//               <div className="space-y-2">
//                 <Label htmlFor="email" className="text-black">
//                   Email
//                 </Label>
//                 <Input
//                   id="email"
//                   type="email"
//                   placeholder="Enter Your Email"
//                   required
//                   value={formData.email}
//                   onChange={handleChange}
//                    className="text-black"
//                 />

//               </div>
//               <div className="space-y-2">
//                 <Label htmlFor="phonenumber" className="text-black">
//                   Phone number
//                 </Label>
//                 <Input
//                   id="phonenumber"
//                   type="text"
//                   placeholder="Enter phone number"
//                   required
//                   value={formData.phonenumber}
//                   onChange={handleChange}
//                    className="text-black"
//                 />
//               </div>
//               <div className="space-y-2">
//                 <Label htmlFor="password" className="text-black">
//                   Password
//                 </Label>
//                 <Input
//                   id="password"
//                   type="password"
//                   placeholder="Enter Password"
//                   required
//                   value={formData.password}
//                   onChange={handleChange}
//                    className="text-black"
//                 />
//               </div>
//               <div className="space-y-2">
//                 <Label htmlFor="confirmPassword" className="text-black">
//                   Confirm Password
//                 </Label>
//                 <Input
//                   id="confirmPassword"
//                   type="password"
//                   placeholder="Enter Password again"
//                   required
//                   value={formData.confirmPassword}
//                   onChange={handleChange}
//                    className="text-black"
//                 />
//               </div>
//               <div className="">
//                 <div className="flex items-center space-x-2">
//                   <input type="checkbox" id="remember" />
//                   <Label
//                     htmlFor="remember"
//                     className="text-sm text-black font-normal"
//                   >
//                     I agree to the Terms of Use and Privacy Policy
//                   </Label>
//                 </div>
//               </div>
//               <Button
//                 className="w-full bg-[#005C73] hover:bg-[#005C73] text-lg"
//                 size="lg"
//                 type="submit"
//                 disabled={loading}
//               >
//                 {loading ? "Signing Up..." : "Sign Up"}
//               </Button>
//             </form>

//             <div className="relative my-4">
//               <div className="absolute inset-0 flex items-center">
//                 <div className="w-full border-t border-black"></div>
//               </div>
//               <div className="relative flex justify-center text-sm">
//                 <span className="px-2 bg-[#F2FDFF] text-black font-semibold text-lg">
//                   or
//                 </span>
//               </div>
//             </div>

//             <div className="space-y-4">
//               <Link href="/login/fblogin">
//                 <Button
//                   variant="outline"
//                   className="w-full flex items-center justify-start text-black border border-teal-700 px-4 py-2 rounded-md"
//                   size="lg"
//                 >
//                   <FaSquareFacebook className="text-blue-500 text-2xl mr-4" />
//                   <span className="text-lg font-medium">
//                     Sign up with Facebook
//                   </span>
//                 </Button>
//               </Link>
//               <Button
//                 variant="outline"
//                 className="w-full flex items-center justify-start text-black border border-teal-700 px-4 py-2 rounded-md"
//                 size="lg"
//               >
//                 <FcGoogle className="text-2xl mr-4" />
//                 <span className="text-lg font-medium">Sign up with Google</span>
//               </Button>
//               <Button
//                 variant="outline"
//                 className="w-full flex items-center justify-start text-black border border-teal-700 px-4 py-2 rounded-md"
//                 size="lg"
//               >
//                 <FaApple className="text-black text-2xl mr-4" />
//                 <span className="text-lg font-medium">Sign up with Apple</span>
//               </Button>
//             </div>
//           </div>
//         </div>
//       </div>
//       <ToastContainer />
//     </div>
//   );
// }



export default function Component() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phonenumber: "",
    password: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setLoading(true);
  
  //   const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{6,}$/;
  
  //   if (!passwordRegex.test(formData.password)) {
  //     toast.error(
  //       "Password must have at least one uppercase letter, one number, one special character, and be more than 5 characters long."
  //     );
  //     setLoading(false);
  //     return;
  //   }
  
  //   if (formData.password !== formData.confirmPassword) {
  //     toast.error("Passwords do not match");
  //     setLoading(false);
  //     return;
  //   }
  
  //   try {
  //     const response = await axios.post(
  //       `https://academiabackend-1-1ekf.onrender.com/user/api/v1/sighup`,
  //       formData
  //     );
  
  //     if (response.data.status === "Succesful") { 
  //       toast.success("OTP created successfully! Check your mail to verify.");
  
  //       localStorage.setItem("user_email", formData.email);
  
  //       setFormData({
  //         name: "",
  //         email: "",
  //         phonenumber: "",
  //         password: "",
  //         confirmPassword: "",
  //       });
  
  //       // Redirect to verify page instead of login
  //       setTimeout(() => router.push("/verify"), 2000);
  //     } else {
  //       toast.error(response.data.message || "Something went wrong");
  //     }
  //   } catch (error) {
  //     if (error.response && error.response.data) {
  //       toast.error(error.response.data.message || "An error occurred during signup");
  //     } else {
  //       toast.error("An error occurred during signup");
  //     }
  //   } finally {
  //     setLoading(false);
  //   }
  // };
  
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
  
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{6,}$/;
  
    if (!passwordRegex.test(formData.password)) {
      toast.error(
        "Password must have at least one uppercase letter, one number, one special character, and be more than 5 characters long."
      );
      setLoading(false);
      return;
    }
  
    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match");
      setLoading(false);
      return;
    }
  
    try {
      const response = await axios.post(
        `https://academiabackend-1-1ekf.onrender.com/user/api/v1/sighup`,
        formData
      );
      if (response.status === 200) { 
        toast.success("OTP created successfully! Check your mail to verify.");
  
      
        localStorage.setItem("user_email", formData.email);
  
        setFormData({
          name: "",
          email: "",
          phonenumber: "",
          password: "",
          confirmPassword: "",
        });
        setTimeout(() => router.push("/signup/verify"), 2000);
      } else {
        toast.error(response.data.message || "Something went wrong");
      }
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.message || "An error occurred during signup");
      } else {
        toast.error("An error occurred during signup");
      }
    } finally {
      setLoading(false);
    }
  };
  
  
  return (
    <div className="loginbg">
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="w-full max-w-[480px] p-8 relative overflow-hidden">
          <div className="relative">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h1 className="text-2xl font-bold text-gray-900 mb-1">
                  Create a new account
                </h1>
                <p className="text-sm text-gray-600">
                  Already have an account?{" "}
                  <Link
                    href="/login"
                    className="text-blue-600 hover:underline font-semibold"
                  >
                    Login
                  </Link>
                </p>
              </div>
            </div>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <Label htmlFor="name" className="text-black">
                  Name
                </Label>
                <Input
                  id="name"
                  placeholder="Enter full name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="text-black"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-black">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter Your Email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="text-black"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phonenumber" className="text-black">
                  Phone number
                </Label>
                <Input
                  id="phonenumber"
                  type="text"
                  placeholder="Enter phone number"
                  required
                  value={formData.phonenumber}
                  onChange={handleChange}
                  className="text-black"
                />
              </div>
              <div className="space-y-2 relative">
                <Label htmlFor="password" className="text-black">
                  Password
                </Label>
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter Password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  className="text-black pr-10"
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute inset-y-0 text-black right-0  top-5 pr-3 flex items-center text-lg  leading-5"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
              <div className="space-y-2 relative">
                <Label htmlFor="confirmPassword" className="text-black">
                  Confirm Password
                </Label>
                <Input
                  id="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Enter Password again"
                  required
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="text-black pr-10"
                />
                <button
                  type="button"
                  onClick={toggleConfirmPasswordVisibility}
                  className="absolute inset-y-0 right-0 top-5   text-black pr-3 flex items-center text-lg leading-5"
                >
                  {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
              <div className="">
                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="remember" />
                  <Label
                    htmlFor="remember"
                    className="text-sm text-black font-normal"
                  >
                    I agree to the Terms of Use and Privacy Policy
                  </Label>
                </div>
              </div>
              <Button
                className="w-full bg-teal-600 hover:bg-teal-700"
                size="lg"
                type="submit"
                disabled={loading}
              >
                {loading ? (
                  <div className="flex items-center">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Signing Up...
                  </div>
                ) : (
                  "Login"
                )}
              </Button>
            </form>

            <div className="relative my-4">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-black"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-[#F2FDFF] text-black font-semibold text-lg">
                  or
                </span>
              </div>
            </div>

            <div className="space-y-4">
              <Link href="/login/fblogin">
                <Button
                  variant="outline"
                  className="w-full flex items-center justify-start text-black border border-teal-700 px-4 py-2 rounded-md"
                  size="lg"
                >
                  <FaSquareFacebook className="text-blue-500 text-2xl mr-4" />
                  <span className="text-lg font-medium">
                    Sign up with Facebook
                  </span>
                </Button>
              </Link>
              <Button
                variant="outline"
                className="w-full flex items-center justify-start text-black border border-teal-700 px-4 py-2 rounded-md"
                size="lg"
              >
                <FcGoogle className="text-2xl mr-4" />
                <span className="text-lg font-medium">Sign up with Google</span>
              </Button>
              <Button
                variant="outline"
                className="w-full flex items-center justify-start text-black border border-teal-700 px-4 py-2 rounded-md"
                size="lg"
              >
                <FaApple className="text-black text-2xl mr-4" />
                <span className="text-lg font-medium">Sign up with Apple</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}