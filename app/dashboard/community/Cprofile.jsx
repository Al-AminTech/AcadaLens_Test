import {
  ArrowRight,
  Bell,
  Link2,
  MapPin,
  MoreHorizontal,
  Search,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Institution from "./Institution";
import { Profile } from "@/app/img";

export default function Cprofile() {
  return (
    <div className="min-h-screen  bg-white shadow-lg w-[64rem] m-6 rounded-lg  p-4">
     
      <header className="border-b">
        <div className=" flex items-center justify-between py-4">
          <div className="relative flex w-full max-w-sm items-center">
            {/* <Search className="absolute left-2 h-4 w-4 text-muted-foreground" /> */}
            {/* <Input
              className="pl-8"
              placeholder="Search for community"
              type="search"
            /> */}
            <h2 className="text-xl font-bold ">Profile</h2>
          </div>
          {/* <Button size="icon" variant="ghost">
            <Bell className="h-5 w-5" />
            <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
              1
            </span>
          </Button> */}
        </div>
      </header>

      {/* Cover Image */}
      <div className="relative h-48 bg-[#024751]">
        <div className="container relative h-full">
          <div className="absolute left-4 top-4">
            <div className="flex items-center gap-2 text-white">
              <div className="flex h-8 w-8 items-center justify-center rounded-sm bg-white/20">
                <div className="h-4 w-4 rotate-45 border-2" />
              </div>
              <span className="text-lg">Converting ordinary shapes</span>
            </div>
          </div>
          <div className="absolute bottom-4 right-4">
            <div className="text-right text-white">
              <p className="text-lg">jaw dropping</p>
              <p className="text-xl font-semibold">functional master piece</p>
            </div>
          </div>
        </div>
        <div className="absolute top-24 left-8 z-40">
          <div className="h-48 w-48 overflow-hidden rounded-full border-4 border-white">
            <Image
              alt="Profile picture"
              className="aspect-square object-cover"
              height={192}
              src={Profile}
              width={192}
            />
          </div>
        </div>
      </div>

      {/* Profile Content */}
      <main className="container mt-20 relative">
        <div className="pt-20">
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-2xl font-bold">
                Sanni Ahmed Agboola
                {/* <span className="ml-2 inline-block">
                  <Image
                    alt="Star"
                    height={24}
                    src="/placeholder.svg"
                    width={24}
                  />
                </span> */}
              </h1>
              <p className="text-muted-foreground">
                Post-UTME, University of Ilorin
              </p>
              <div className="mt-2 flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  Ilorin, Kwara
                </div>
                <div className="flex items-center gap-1">
                  <Link2 className="h-4 w-4" />
                  sanniahmedagboola@gmail.com
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              <Button size="icon" variant="ghost">
                <MoreHorizontal className="h-5 w-5" />
              </Button>
              <Button>Edit Profile</Button>
            </div>
          </div>

          {/* About Section */}
          <section className="mt-8">
            <h2 className="text-xl font-semibold">About Me</h2>
            <p className="mt-2 text-muted-foreground">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
            <p className="mt-4 text-muted-foreground">
              Consectetur adipiscing elit, sed do eiusmod tempor magna aliqua.
            </p>
          </section>

          {/* Recommended Community */}
      <Institution/>
        </div>
      </main>
    </div>
  );
}
