"use client";
import Login from "@/components/Authentication/Login";
import { useRouter } from "next/navigation";

const Homepage = () => {
  const router = useRouter();
  router.push("/home");
  return (
    <div>
      {/* <Banner /> */}
      {/* <FeaturedContent /> */}
      {/* <Testimonials /> */}
      {/* <AboutUs /> */}
      {/* <ItemDetails /> */}
      {/* <OrderForm /> */}
      {/* <Login /> */}
    </div>
  );
};

export default Homepage;
