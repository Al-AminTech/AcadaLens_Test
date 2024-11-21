import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import Sidebar, { AppSidebar } from "./_component/Sidebars";

export default function Layout({ children }) {
  return (
    <div className="flex  relative  bg-gray-50">
      <Sidebar />
      <div className="absolute left-64"> {children}</div>
    </div>
  );
}
