"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";

export default function ProfileForm() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="p-6">
      <div className="p-0">
        <form className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name</Label>
              <Input
                id="firstName"
                placeholder="Enter your first name"
                className="w-full h-12"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name</Label>
              <Input
                id="lastName"
                placeholder="Enter your last name"
                className="w-full h-12"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="address">Residential address</Label>
            <Input id="address" placeholder="Enter your residential address" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="phone">Phone number</Label>
              <Input
                id="phone"
                placeholder="Enter your phone number"
                className="w-full h-12"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="dob">Date Of Birth</Label>
              <Input
                id="dob"
                placeholder="Enter your date of birth"
                className="w-full h-12"
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <div className="flex justify-between gap-3 ">
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="w-[45rem] h-10"
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="absolute right-2 top-1/2 -translate-y-1/2"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </Button>
              </div>
              <Button
                variant="outline"
                className="text-[#0090B2] hover:bg-white hover:text-[#0090B2] border border-[#0090B2] "
              >
                change password
              </Button>
            </div>
          </div>

          <div className="flex  items-center gap-3 justify-between">
            <div className="space-y-2 w-full">
              <Label htmlFor="email">Email address</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email address"
                className="h-10 w-full"
              />
            </div>

            <div className="space-y-2 flex flex-col w-full ">
              <Label htmlFor="role">Your Role</Label>
              <select
                name=""
                id=""
                className="w-full border shadow-sm p-2 rounded-lg text-gray-500 "
              >
                <option value="jamb">Jamb</option>
                <option value="Postutme">PostUtme</option>
              </select>
            </div>
          </div>

          <div className="flex gap-4 items-center pt-4">
            <Link href={"/dashboard/settings"}>
              <Button variant="outline" className="w-44 h-10 border border-[#0090B2] text-[#0090B2]">Cancel</Button>
            </Link>
            <div className="space-x-2">
              <Button className="bg-[#0090B2] w-40 h-10 text-md hover:bg-teal-800 text-white">
                Next
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
