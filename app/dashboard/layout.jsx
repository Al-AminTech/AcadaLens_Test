import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import Sidebar, { AppSidebar } from "./_component/Sidebars";

export default function Layout({ children }) {
  return (
    <div className="flex  relative">
      <Sidebar/>
      <div className="absolute left-0 md:left-52 lg:left-64"> {children}</div>
    </div>
  );
}
