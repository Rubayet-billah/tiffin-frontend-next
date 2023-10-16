import Login from "@/components/Authentication/Login";
import AboutUs from "@/components/Home/AboutUs";
import Banner from "@/components/Home/Banner";
import Contact from "@/components/Home/Contact";
import FeaturedContent from "@/components/Home/FeaturedContent";
import NewsLetter from "@/components/Home/NewsLetter";
import Testimonials from "@/components/Home/Testimonials";

const Homepage = () => {
  return (
    <div>
      <Banner />
      <FeaturedContent />
      <Testimonials />
      <AboutUs />
      <Contact />
      <NewsLetter />
    </div>
  );
};

export default Homepage;
