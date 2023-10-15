import Image from "next/image";
import streetFoodImg from "../../assets/streetFood.png";

const Banner = () => {
  return (
    <div>
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-12">
        <div className="flex place-items-center">
          <h1 className="text-xl md:text-3xl lg:text-5xl font-bold">
            Delivering the flavors you crave, to your doorstep
          </h1>
        </div>
        <div>
          <Image
            src={streetFoodImg}
            className="mx-auto"
            height={500}
            width={500}
            alt="street-food"
          />
        </div>
      </section>
    </div>
  );
};

export default Banner;
