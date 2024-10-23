import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import Sidebar, { AppSidebar } from "./_component/Sidebars"

export default function Layout({ children }) {
  return (
    <div className="body flex gap-4">
     <Sidebar/>
      <main className="">
        {children}
      </main>
    </div>
  )
}
