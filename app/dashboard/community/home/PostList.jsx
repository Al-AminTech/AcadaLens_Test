"use client";

import { Community, Profile, UnilroinLogo } from "@/app/img";
import { MessageSquare, Heart, Share2 } from "lucide-react";
import Image from "next/image";

export default function PostList() {
  return (
    <div className="space-y-6">
      {[1, 2].map((post) => (
        <div key={post} className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center space-x-3 mb-4">
            <div className="h-10 w-10 rounded-full bg-gray-200 overflow-hidden">
              <Image
                src={UnilroinLogo}
                alt="University Profile"
                width={40}
                height={40}
              />
            </div>
            <div>
              <h3 className="font-semibold">University of Ilorin</h3>
              <p className="text-sm text-gray-500">Yesterday at 10:48 AM</p>
            </div>
          </div>

          <p className="mb-4">
            {post === 1
              ? 'It\'s more likely that people reading your blog will opt in with their email addresses if you give them something highly relevant in return. Ditch that too-general lead magnet and create "content upgrades" for your highest-traffic articles.'
              : "University of Ilorin concluded her convocation in style 🌿"}
          </p>

          {post === 2 && (
            <div className="mb-4 rounded-lg overflow-hidden">
              <Image
                src={Community}
                alt="Graduation ceremony"
                width={800}
                height={400}
                className="w-full"
              />
            </div>
          )}

          <div className="flex items-center space-x-6">
            <button className="flex items-center space-x-2 text-gray-600">
              <Heart className="h-5 w-5" />
              <span>122</span>
            </button>
            <button className="flex items-center space-x-2 text-gray-600">
              <MessageSquare className="h-5 w-5" />
              <span>7</span>
            </button>
            <button className="flex items-center space-x-2 text-gray-600">
              <Share2 className="h-5 w-5" />
              <span>298</span>
            </button>
          </div>
          <div className="flex gap-3 items-center mt-5">
            <Image src={Profile} className="w-10 " />
            <input
              type="text"
              placeholder="Write a comment.."
              className="border-none outline-none text-sm h-10 pl-4 w-full bg-[#F2FDFF] rounded-lg  "
            />
          </div>
          <div>
            {post == 2 && (
              <div className="mt-3">
                <div className="bg-[#F2FDFF]  rounded-xl  p-2 flex items-center gap-4">
                  <Image src={Profile} className="w-10" />
                  <div className=" flex flex-col pt-5">
                    <div className="flex items-center gap-6 ">
                      <h5 className="text-gray-400 font-bold">Sanni Ahmed Agboola </h5>
                      <p className="text-gray-400 text-sm">44min</p>
                    </div>
                    <div className="flex gap-2 items-center" >
                      <h5 className="font-bold text-[#004859]" >@Sanni Ahmed Agboola </h5>
                      <p   className="text-sm">Reading through this information it should be helpful.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
