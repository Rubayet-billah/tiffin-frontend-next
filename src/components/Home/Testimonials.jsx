import { testimonials } from "../../constants/constants";

const Testimonials = () => {
  // Define an array of sample testimonials (replace with actual data)

  return (
    <section className="py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-4">Reviews</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-4 bg-gray-200 shadow-md rounded-lg">
              <p className="text-gray-700">{testimonial.feedback}</p>
              <div className="mt-auto">
                <strong>{testimonial.author}</strong>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
