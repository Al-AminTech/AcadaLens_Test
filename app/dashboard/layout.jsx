// import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
// import Sidebar, { AppSidebar } from "./_component/Sidebars";
// import Header from "./_component/Header";

// export default function Layout({ children }) {
//   return (
//     <div className="flex flex-col sm:flex-row">
//      <div className=" fixed top-0 left-0 bottom-0">
//      <Sidebar />
//      </div>
//       <div className="flex-grow lg:ml-[280px]">
//         <Header />
//         <div className="flex-grow p-4  lg:ml-[300px">{children}</div>
//       </div>
//     </div>
//   );
// }
// import Sidebar, { AppSidebar } from "./_component/Sidebars";
// import Header from "./_component/Header";

// export default function Layout({ children }) {
//   return (
//     <div className="flex flex-col sm:flex-row min-h-screen">
//       <div className="fixed top-0 left-0 bottom-0 z-50 transition-transform duration-300 transform">
//         <Sidebar />
//       </div>
//       <div className="flex-grow flex flex-col transition-all duration-300 sm:ml-24 lg:ml-72">
//         <div className="sticky top-0 z-40 bg-white w-full">
//           <Header />
//         </div>
//         <div className="flex-grow p-4">{children}</div>
//       </div>
//     </div>
//   );
// }

import Sidebar, { AppSidebar } from "./_component/Sidebars";
import Header from "./_component/Header";
export default function Layout({ children }) {
  return (
    <div className="flex flex-row min-h-screen">
      {/* Sidebar with fixed position */}
      <div className="fixed min-h-screen sm:w-24 lg:w-72 flex-shrink-0 z-50">
        <Sidebar />
      </div>

      {/* Main content area */}
      <div className="flex-grow flex flex-col ml-[72px] sm:ml-24 lg:ml-72">
        <div className="sticky top-0 z-40 bg-white w-full">
          <Header />
        </div>
        <div className="flex-grow p-4">{children}</div>
      </div>
    </div>
  );
}