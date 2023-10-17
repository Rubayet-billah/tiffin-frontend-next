"use client";

import Footer from "@/components/Common/Footer";
import Navigation from "@/components/Common/Navigation";
import SideBar from "@/components/Common/SideBar";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";

const MainLayout = ({ children }) => {
  const { user } = useSelector((state) => state.auth);
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
  }, [user, router]);
  return (
    <div>
      <Navigation />
      <main className="max-w-[1440px] mx-auto p-5 md:p-12 min-h-[100vh]">
        {children}
      </main>
      <Footer />
      <Toaster />
    </div>
  );
};

export default MainLayout;
