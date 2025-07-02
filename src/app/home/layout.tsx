import { Sidebar } from "@/modules/home/ui/components/sidebar";
import { Navbar } from "@/modules/home/ui/components/navbar"; // adapte le chemin si besoin
import { ReactNode } from "react";
import { Footer } from "@/modules/home/ui/components/footer";

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div className="flex min-h-screen bg-[#F4F4F0]">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Navbar />
         <main className="flex-1 p-0 overflow-y-auto">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
