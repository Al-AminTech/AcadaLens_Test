"use client";

import { MessageSquare, Heart, Share2 } from 'lucide-react';
import Image from 'next/image';

export default function PostList() {
  return (
    <div className="space-y-6">
      {[1, 2].map((post) => (
        <div key={post} className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center space-x-3 mb-4">
            <div className="h-10 w-10 rounded-full bg-gray-200 overflow-hidden">
              <Image
                src=""
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
            {post === 1 ? (
              "It's more likely that people reading your blog will opt in with their email addresses if you give them something highly relevant in return. Ditch that too-general lead magnet and create \"content upgrades\" for your highest-traffic articles."
            ) : (
              "University of Ilorin concluded her convocation in style 🌿"
            )}
          </p>

          {post === 2 && (
            <div className="mb-4 rounded-lg overflow-hidden">
              <Image
                src=""
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
        </div>
      ))}
    </div>
  );
}