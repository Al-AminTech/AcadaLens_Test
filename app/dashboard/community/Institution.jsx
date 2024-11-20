import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function () {
  return (
    <section className="mt-8">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Recommended Community</h2>
      </div>

      <h3 className="mb-4 mt-6 font-semibold text-lg flex items-center  gap-2 md:gap-72 lg:gap-[43rem]">
        Institutions
        <Link className="text-sm text-[#005C73]" href="#">
          See more
        </Link>
      </h3>

      <div className="flex flex-col md:flex-row  gap-20">
        {[1, 2].map((i) => (
          <Card key={i} className="w-96 h-36 rounded-sm">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <Image
                  alt="University logo"
                  className="h-10 w-10"
                  height={40}
                  src="/placeholder.svg"
                  width={40}
                />
                <div>
                  <h4 className="font-semibold">University of Ilorin</h4>
                  <p className="text-sm text-muted-foreground">
                    The most chosen University in Nigeria
                  </p>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <div className="flex items-center">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((j) => (
                      <Image
                        key={j}
                        alt={`Member ${j}`}
                        className="h-8 w-8 rounded-full border-2 border-background"
                        height={32}
                        src="/placeholder.svg"
                        width={32}
                      />
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-muted-foreground">
                    +10,000
                  </span>
                </div>
                <Button variant="link" className="p-0 text-[#005C73] font-semibold">
                  View Community
                  <ArrowRight className="mr-2 h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <h3 className="mb-4 mt-6">Departments</h3>
      <div className="flex flex-col md:flex-row  gap-20">
        {[1, 2].map((i) => (
          <Card key={i} className="w-96 h-36 rounded-sm">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <Image
                  alt="University logo"
                  className="h-10 w-10"
                  height={40}
                  src="/placeholder.svg"
                  width={40}
                />
                <div>
                  <h4 className="font-semibold">University of Ilorin</h4>
                  <p className="text-sm text-muted-foreground">
                    The most chosen University in Nigeria
                  </p>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <div className="flex items-center">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((j) => (
                      <Image
                        key={j}
                        alt={`Member ${j}`}
                        className="h-8 w-8 rounded-full border-2 border-background"
                        height={32}
                        src="/placeholder.svg"
                        width={32}
                      />
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-muted-foreground">
                    +10,000
                  </span>
                </div>
                <Button variant="link" className=" font-semibold p-0 text-[#005C73]">
                  View Community
                  <ArrowRight className="mr-2 h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
