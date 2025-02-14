import { Bell, Shield, User } from "lucide-react";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { FaBell } from "react-icons/fa";
import Image from "next/image";
import { Profile } from "@/app/img";
import { FaRegBell } from "react-icons/fa6";
import Header from "../_component/Header";

export default function Sinterface() {
  return (
    <div className="bg-white md:w-[60rem]  w-full min-h-screen m-4 rounded-md shadow-lg p-4">
    <div className="w-full flex flex-col gap-7 pt-20 max-w-4xl mx-auto space-y-4">
      <Link href={"/dashboard/settings/profile"}>
        <Card className="p-6 transform transition-all duration-300 hover:scale-105 w-full">
          <div className="flex gap-4 items-start">
            <User className="w-6 h-6 mt-1 shrink-0" />
            <div className="flex-1">
              <h2 className="text-lg sm:text-xl font-bold mb-2">Profile</h2>
              <p className="text-sm sm:text-base text-muted-foreground">
                You can change your account settings whenever you want. Change
                your username and other account information.
              </p>
            </div>
          </div>
        </Card>
      </Link>
  
      <Link href={"/dashboard/settings/security"}>
        <Card className="p-6 transform transition-all duration-300 hover:scale-105 cursor-pointer w-full">
          <div className="flex gap-4 items-start">
            <Shield className="w-6 h-6 mt-1 shrink-0" />
            <div className="flex-1">
              <h2 className="text-lg sm:text-xl font-bold mb-2">Security</h2>
              <p className="text-sm sm:text-base text-muted-foreground">
                Utilize your actions to the fullest, and the security
                mechanisms will safeguard you from malware and potentially
                dangerous websites.
              </p>
            </div>
          </div>
        </Card>
      </Link>
  
      <Card className="p-6 transform transition-all duration-300 hover:scale-105 cursor-pointer w-full">
        <div className="flex gap-4 items-start">
          <Bell className="w-6 h-6 mt-1 shrink-0" />
          <div className="flex-1">
            <h2 className="text-lg sm:text-xl font-bold mb-2">Notification</h2>
            <p className="text-sm sm:text-base text-muted-foreground">
              Notifications are updates about your activities. You can go to
              notification settings to streamline the notifications you will
              receive and how to be notified.
            </p>
          </div>
        </div>
      </Card>
    </div>
  </div>
  
  );
}
