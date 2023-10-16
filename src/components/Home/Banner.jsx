import Image from "next/image";
import streetFoodImg from "../../assets/streetFood.png";

const Banner = () => {
  const handleSearch = () => {};
  return (
    <div>
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-12">
        <div className="flex place-items-center">
          <div>
            <h1 className="text-xl md:text-3xl lg:text-5xl font-bold">
              Delivering the flavors you crave, to your doorstep
            </h1>
            <div className="bg-base-200 mt-5 p-4 rounded flex gap-3">
              <input
                className="input input-sm w-full rounded-sm"
                type="text"
                placeholder="Search your desire food"
              />
              <button
                onClick={() => handleSearch()}
                className="btn btn-warning btn-sm"
              >
                Search
              </button>
            </div>
          </div>
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
