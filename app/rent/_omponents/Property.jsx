import { Heart, Zap, Shirt, Plus } from 'lucide-react'
import { ZapIcon as Tap } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { GiTap } from "react-icons/gi";
import { PiSolarPanelLight } from "react-icons/pi";
import Image from 'next/image';
import { bed } from '@/app/img';
export default function Component() {
  const properties = Array(12).fill({
    price: "250,000/Yr",
    type: "Self Con (Blessed House)",
    location: "4 Onipanu Street, Surle, Ketu's Koran State",
  });

  return (
    <div className="w-full p-6 bg-[#F2FDFF]">
      <h2 className="text-3xl font-bold mb-4">Available properties for Lease</h2>
      
      <div className="flex gap-2 mb-6">
        {/* <Button variant="outline" className="rounded-md text-gray-600">All</Button>
        <Button variant="outline" className="rounded-md bg-blue-100 text-blue-600">House</Button>
        <Button variant="outline" className="rounded-md text-gray-600">Apartment</Button>
        <Button variant="outline" className="rounded-md text-gray-600">Land</Button> */}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        {properties.map((property, index) => (
          <Card key={index} className="overflow-hidden border relative w-[23rem] border-gray-200 rounded-lg">
            <CardContent className="p-4">
              <div className="relative group">
                <Image src={bed} className="w-[20rem] rounded-lg cursor-pointer" />
                <div className="absolute cursor-pointer w-[20rem] rounded-lg inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity"></div>
              </div>
              <div className="flex justify-around pl-3 gap-48 items-center mb-4 absolute top-5 z-20">
                <span className="text-sm text-black  p-3 bg-slate-100 rounded-sm ">For rent</span>
                <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                  <Heart className="h-4 w-4 text-white" />
                </Button>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-baseline">
                  <span className="text-lg">₦</span>
                  <span className="text-lg font-semibold">{property.price}</span>
                </div>
                
                <div className="text-sm">{property.type}</div>
                <div className="text-xs text-gray-500">{property.location}</div>
                
                <div className="flex gap-2 pt-2">
                  <Button variant="outline" size="sm" className="h-6 px-2 text-xs border-gray-300 text-gray-600">
                    <Zap className="h-3 w-3 mr-1" />
                    24/7 El
                  </Button>
                  <Button variant="outline" size="sm" className="h-6 px-2 text-xs border-gray-300 text-gray-600">
                    <GiTap className="h-3 w-3 mr-1" />
                    Water
                  </Button>
                  <Button variant="outline" size="sm" className="h-6 px-2 text-xs border-gray-300 text-gray-600">
                    <PiSolarPanelLight className="h-3 w-3 mr-1" />
                      Solar Panel
                  </Button>
                  <Button variant="outline" size="sm" className="h-7  flex  w-12 p-0 border-gray-300 text-gray-600">
                    <Plus className="h-3 w-3" />
                    <p>5</p>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="flex justify-center mt-10 mb-10">
        <Button className="bg-[#005C73] text-white rounded-lg w-72 hover:bg-[#005c73be]">View more</Button>
      </div>
    </div>
  );
}
