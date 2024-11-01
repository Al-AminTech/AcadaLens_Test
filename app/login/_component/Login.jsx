import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Image from "next/image"
import Link from "next/link"

export default function Component() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-4">
      <Card className="w-full max-w-[480px] p-8 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-orange-200 to-yellow-100 rounded-full -translate-y-1/2 translate-x-1/2 opacity-50" />
        <div className="absolute bottom-0 right-0 w-48 h-48 bg-gradient-to-br from-orange-200 to-yellow-100 rounded-full translate-y-1/2 translate-x-1/2 opacity-50" />
        
        <div className="relative">
          <div className="flex justify-between items-start mb-8">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 mb-1">Login To Your Account</h1>
              <p className="text-sm text-gray-600">
                Don't have an account?{" "}
                <Link href="/signup" className="text-blue-600 hover:underline font-semibold">
                  Sign Up
                </Link>
              </p>
            </div>
            <div className="w-16 h-16">
              <div className="w-full h-full bg-blue-500 rounded-br-3xl" />
            </div>
          </div>

          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" placeholder="Enter full name" type="email" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" placeholder="Enter Password" required />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox id="remember" />
                <Label htmlFor="remember" className="text-sm font-normal">
                  Keep me sign in
                </Label>
              </div>
              <Link href="/forgot-password" className="text-sm text-blue-600 hover:underline">
                Forgot password?
              </Link>
            </div>

            <Button className="w-full bg-teal-600 hover:bg-teal-700" size="lg">
              Login
            </Button>

            <div className="relative my-4">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">or</span>
              </div>
            </div>

            <div className="space-y-3">
              <Button variant="outline" className="w-full" size="lg">
                <Image
                  src="/placeholder.svg"
                  alt="Facebook"
                  className="mr-2"
                  height={20}
                  width={20}
                />
                Login with Facebook
              </Button>
              <Button variant="outline" className="w-full" size="lg">
                <Image
                  src="/placeholder.svg"
                  alt="Google"
                  className="mr-2"
                  height={20}
                  width={20}
                />
                Sign up with Google
              </Button>
              <Button variant="outline" className="w-full" size="lg">
                <Image
                  src="/placeholder.svg"
                  alt="Apple"
                  className="mr-2"
                  height={20}
                  width={20}
                />
                Login with Apple
              </Button>
            </div>
          </form>

          <div className="absolute bottom-0 left-0 w-48">
            <Image
              src="/placeholder.svg"
              alt="Decorative illustration"
              width={200}
              height={200}
              className="w-full"
            />
          </div>
        </div>
      </Card>
    </div>
  )
}