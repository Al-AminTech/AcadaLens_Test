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

export default function Component() {
  return (
    <div className="loginbg">
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="w-full max-w-[480px] p-8 relative overflow-hidden">
          {/* Decorative elements */}
          {/* <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-orange-200 to-yellow-100 rounded-full -translate-y-1/2 translate-x-1/2 opacity-50" />
        <div className="absolute bottom-0 right-0 w-48 h-48 bg-gradient-to-br from-orange-200 to-yellow-100 rounded-full translate-y-1/2 translate-x-1/2 opacity-50" /> */}

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
              {/* <div className="w-16 h-16">
              <div className="w-full h-full bg-blue-500 rounded-br-3xl" />
            </div> */}
            </div>

            <form className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-black">
                  Email
                </Label>
                <Input
                  id="email"
                  placeholder="Enter full name"
                  type="email"
                  required
                
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-black">
                  Password
                </Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter Password"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password" className="text-black">
                 Confirm  Password
                </Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter Password again"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password" className="text-black">
                  Phone number
                </Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter phone number"
                  required
                />
              </div>

              <div className="">
                <div className="flex items-center space-x-2">
                  <Checkbox id="remember" />
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
              >
                Sign Up
              </Button>

              <div className="relative my-4">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2  text-">or</span>
                </div>
              </div>

              <div className="space-y-3">
              <Link href={"/login/fblogin"}>
              <Button
                  variant="outline"
                  className="w-full flex justify-around text-black border border-blue-500"
                  size="lg"
                >
                  <p>
                  <FaSquareFacebook className="text-blue-500" />
                  </p>
                  <p className="pl-20"> Sign Up with Facebook</p>
                </Button>
              </Link>
                <Button
                  variant="outline"
                  className="w-full flex justify-around border border-pink-500 text-black"
                  size="lg"
                >
                  <p>
                  <FcGoogle  className="pr-6"/>
                  </p>
                  <p className="pl-8"> Sign Up with Google</p>
                </Button>
                <Button
                  variant="outline"
                  className="w-full flex justify-around  border border-black text-black"
                  size="lg"
                >
                  <p>
                    <FaApple className="text-2xl"/>
                  </p>
                  <p className="text-xs"> Sign Up with Apple</p>
                </Button>
              </div>
            </form>

            {/* <div className="absolute bottom-0 left-0 w-48">
            <Image
              src="/placeholder.svg"
              alt="Decorative illustration"
              width={200}
              height={200}
              className="w-full"
            />
          </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
