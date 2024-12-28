import Image from "next/image"
import { Social } from "../img"

export function ArticleCards({ featured = false }) {
  return (
    <div className={`group relative ${featured ? 'col-span-1' : ''}`}>
      <div className="relative h-48 overflow-hidden rounded-lg">
        <Image
          alt="Social Media Marketing"
          className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
          height={240}
          src={Social}
          width={360}
        />
      </div>
      <div className="mt-4 space-y-2">
        <h3 className="font-medium leading-6">
          <a href="#" className="hover:underline">
            Selling your skills using Social Media Marketing
          </a>
        </h3>
        <p className="text-sm text-muted-foreground">
          Social Media Marketing PLUS is a comprehensive guide to social media marketing. Learn how to sell your skills and grow your business...
        </p>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span>Posted</span>
          <span>•</span>
          <time>12/28/2023</time>
        </div>
      </div>
    </div>
  )
}

