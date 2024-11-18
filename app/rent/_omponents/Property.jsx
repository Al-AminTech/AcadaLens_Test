import { Heart, Zap, Shirt, Plus } from 'lucide-react'
import { ZapIcon as Tap } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { GiTap } from "react-icons/gi";
import { PiSolarPanelLight } from "react-icons/pi";

export default function Component() {
  const properties = Array(12).fill({
    price: "250,000/Yr",
    type: "Self Con (Blessed House)",
    location: "4 Onipanu Street, Surle, Ketu's Koran State",
  })

  return (
    <div className="w-full  p-6 bg-[#F2FDFF]">
      <h2 className="text-xl font-semibold mb-4">Available properties for lease</h2>
      
      <div className="flex gap-2 mb-6">
        <Button variant="outline" className="rounded-md text-gray-600">All</Button>
        <Button variant="outline" className="rounded-md bg-blue-100 text-blue-600">House</Button>
        <Button variant="outline" className="rounded-md text-gray-600">Apartment</Button>
        <Button variant="outline" className="rounded-md text-gray-600">Land</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {properties.map((property, index) => (
          <Card key={index} className="overflow-hidden border w-[25rem] border-gray-200 rounded-lg">
            <CardContent className="p-4">
              <div className="flex justify-between items-start mb-4">
                <span className="text-sm text-white  p-3 bg-slate-400 rounded-sm ">For rent</span>
                <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                  <Heart className="h-4 w-4 text-gray-400" />
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
                  <Button variant="outline" size="sm" className="h-6 w-6 p-0 border-gray-300 text-gray-600">
                    <Plus className="h-3 w-3" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <Button className="bg-teal-600 text-white rounded-lg hover:bg-teal-700">View more</Button>
      </div>
    </div>
  )
}