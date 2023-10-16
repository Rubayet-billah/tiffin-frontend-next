import PageHeading from "../ui/PageHeading";

const NewsLetter = () => {
  return (
    <section className="bg-white px-5 md:px-0 py-12">
      <div className="container mx-auto px-2">
        <div className="max-w-2xl mx-auto">
          <div className="text-center">
            <PageHeading
              title=" Subscribe To Our Newsletter"
              subTitle="Stay up-to-date with the latest news, events, and special offers
              from our company."
            />
          </div>
          <form className="">
            <input
              className="text-center mb-6 border-0 border-b bg-transparent w-full text-gray-700 mr-3 py-2 px-2 leading-tight focus:ring-0 active:outline-none"
              type="email"
              placeholder="Your Email Address"
            />
            <button className="btn btn-warning mx-auto" type="submit">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
export default NewsLetter;
