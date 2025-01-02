import { Bell, Shield, User } from "lucide-react";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { FaBell } from "react-icons/fa";
import Image from "next/image";
import { Profile } from "@/app/img";
import { FaRegBell } from "react-icons/fa6";

export default function Sinterface() {
  return (
    <div className="bg-white w-[60rem] h-[44rem] m-4 rounded-md  shadow-lg">
      <div className="flex justify-between m-2">
        <h1 className="font-bold text-2xl pl-5">Settings</h1>
        <div className="flex  items-center gap-4">
        <Image src={Profile} className="w-10 h-10"/>
        <FaRegBell className="text-blue-500 text-3xl" />
        </div>
      </div>
      <div className="w-full flex flex-col gap-7 pl-4 pt-10 max-w-3xl  ml-4 p-4 space-y-4">
        <Link href={"/dashboard/settings/profile"}>
          <Card className="p-6 transform transition-all duration-300 hover:scale-105">
            <div className="flex gap-4">
              <User className="w-6 h-6 mt-1" />
              <div>
                <h2 className="text-xl font-bold mb-2">Profile</h2>
                <p className="text-muted-foreground">
                  You can change your account settings whenever you want, Change
                  your username and other account information.
                </p>
              </div>
            </div>
          </Card>
        </Link>

        <Link href={"/dashboard/settings/security"}>
          <Card className="p-6 transform transition-all duration-300 hover:scale-105 cursor-pointer">
            <div className="flex gap-4">
              <Shield className="w-6 h-6 mt-1" />
              <div>
                <h2 className="text-xl font-bold mb-2">Security</h2>
                <p className="text-muted-foreground">
                  Utilize your actions to the fullest, and the security
                  mechanisms will safeguard you from malware and potentially
                  dangerous websites.
                </p>
              </div>
            </div>
          </Card>
        </Link>

        <Card className="p-6 transform transition-all duration-300 hover:scale-105 cursor-pointer">
          <div className="flex gap-4">
            <Bell className="w-6 h-6 mt-1" />
            <div>
              <h2 className="text-xl font-bold mb-2">Notification</h2>
              <p className="text-muted-foreground">
                Notifications are update about your activities. You can go to
                notification settings to streamline the notifications you will
                get and how to be notified
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
