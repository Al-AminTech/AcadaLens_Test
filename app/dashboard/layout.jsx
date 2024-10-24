import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import Sidebar, { AppSidebar } from "./_component/Sidebars"

export default function Layout({ children }) {
  return (
    <div className="flex gap-4 bg-gray-50">
     <Sidebar/>

        {children}
    </div>
  )
}
