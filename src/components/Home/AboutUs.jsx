import Image from "next/image";
import aboutUs from "../../assets/aboutUs.png";
import PageHeading from "../ui/PageHeading";
const AboutUs = () => {
  return (
    <div>
      {" "}
      <PageHeading title="About Us" subTitle="Learn More About Our Team" />
      <div className="hero place-items-start">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="lg:w-1/2 flex justify-center">
            {" "}
            <div className="w-full rounded-lg">
              {" "}
              <Image src={aboutUs} alt="about-us" height="auto" width="100%" />
            </div>
          </div>
          <div className="lg:w-1/2">
            <p className="py-6">
              At Tiffin, we are passionate about delivering delicious and
              high-quality meals to your doorstep. Our mission is to make
              mealtime easy and convenient. With a wide variety of menu options
              and speedy delivery, we aim to provide you with a seamless dining
              experience.
            </p>
            <button className="btn btn-warning">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
