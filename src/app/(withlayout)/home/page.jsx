import Login from "@/components/Authentication/Login";
import AboutUs from "@/components/Home/AboutUs";
import Banner from "@/components/Home/Banner";
import FeaturedContent from "@/components/Home/FeaturedContent";
import Testimonials from "@/components/Home/Testimonials";

const Homepage = () => {
  return (
    <div>
      <Banner />
      <FeaturedContent />
      <Testimonials />
      <AboutUs />
    </div>
  );
};

export default Homepage;
