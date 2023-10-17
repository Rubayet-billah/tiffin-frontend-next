"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Homepage = () => {
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      router.push("/home");
    }
  }, [router]);

  return <div>Redirecting to /home...</div>;
};

export default Homepage;
