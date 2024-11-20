import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import Sidebar, { AppSidebar } from "./_component/Sidebars";

export default function Layout({ children }) {
  return (
    <div className="flex  relative gap-2 bg-gray-50">
      <Sidebar />
      <div className="absolute left-72"> {children}</div>
    </div>
  );
}
