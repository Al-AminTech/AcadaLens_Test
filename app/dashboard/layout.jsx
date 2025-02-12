import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import Sidebar, { AppSidebar } from "./_component/Sidebars";
import Header from "./_component/Header";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col sm:flex-row">
     <div className=" fixed top-0 left-0 bottom-0">
     <Sidebar />
     </div>
      <div className="flex-grow lg:ml-[280px]">
        <Header />
        <div className="flex-grow p-4  lg:ml-[300px">{children}</div>
      </div>
    </div>
  );
}