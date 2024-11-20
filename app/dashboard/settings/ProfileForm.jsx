"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react"; // Assuming these icons are imported

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
                className="w-80 h-12"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name</Label>
              <Input
                id="lastName"
                placeholder="Enter your last name"
                className="w-80 h-12"
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
                className="w-80 h-12"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="dob">Date Of Birth</Label>
              <Input
                id="dob"
                placeholder="Enter your date of birth"
                className="w-80 h-12"
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
                  className="w-[30rem] h-10"
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
              <Button variant="outline" className="text-blue-500">
                change password
              </Button>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email address</Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email address"
              className="h-10"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="role">Your Role</Label>
            <Input id="role" placeholder="Enter your role" />
          </div>

          <div className="flex justify-between items-center pt-4">
            <Button variant="outline">Cancel</Button>
            <div className="space-x-2">
              <Button className="bg-teal-700 hover:bg-teal-800 text-white">
                Edit
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
