import React from "react";
import PageHeading from "../ui/PageHeading";

const Contact = () => {
  return (
    <div className="container mx-auto px-5 md:px-0 py-12">
      <div className="text-center mb-6">
        <PageHeading title="Contact Us" subTitle="Please Leave Your Message" />
      </div>

      <form className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-3">
          <div>
            <div className="mb-1">
              <label
                htmlFor="fullName"
                className="block text-gray-800 font-medium"
              >
                Your Name
              </label>
            </div>
            <input
              id="fullName"
              type="text"
              placeholder="Your Name"
              required
              className="w-full border border-gray-300 rounded-md p-2"
            />
          </div>
          <div>
            <div className="mb-1">
              <label
                htmlFor="email"
                className="block text-gray-800 font-medium"
              >
                Your Email
              </label>
            </div>
            <input
              id="email"
              type="email"
              placeholder="Your Email"
              required
              className="w-full border border-gray-300 rounded-md p-2"
            />
          </div>

          <div className="md:col-span-2">
            <div className="mb-1">
              <label
                htmlFor="comment"
                className="block text-gray-800 font-medium"
              >
                Your message
              </label>
            </div>
            <textarea
              id="comment"
              placeholder="Leave a message..."
              required
              rows={4}
              className="w-full border border-gray-300 rounded-md p-2"
            />
          </div>
        </div>
        <div className="flex justify-end">
          <button className="mt-4 px-6 btn btn-warning" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
