export const authKey = "USER";
export const userRole = {
  admin: "ADMIN",
  customer: "CUSTOMER",
};

export const testimonials = [
  {
    id: 1,
    fullName: "John Smith",
    position: "HR Manager",
    review:
      "I've been using this HR management software for a few months now and it has made my job so much easier. The interface is user-friendly and all of the features are intuitive. I particularly like the employee tracking feature, which allows me to easily see who is currently on vacation or sick leave. Highly recommend!",
    star: 5,
    image: "https://www.example.com/images/john-smith.jpg",
  },
  {
    id: 2,
    fullName: "Jane Doe",
    position: "HR Assistant",
    review:
      "This HR management software has been a game-changer for our department. It's made it so much easier to track employee information and keep everything organized. The onboarding process was smooth and the customer support has been excellent. I would definitely recommend it to other HR professionals.",
    star: 4,
    image: "https://www.example.com/images/jane-doe.jpg",
  },
  {
    id: 3,
    fullName: "Bob Johnson",
    position: "HR Director",
    review:
      "I've been using this HR management software for a few years now and it has consistently exceeded my expectations. The interface is easy to use and the customer support team is always quick to resolve any issues. I would highly recommend this software to any HR department.",
    star: 5,
    image: "https://www.example.com/images/bob-johnson.jpg",
  },
  {
    id: 4,
    fullName: "Samantha Williams",
    position: "HR Consultant",
    review:
      "I recently started using this HR management software and have been really impressed with its capabilities. It's made it much easier to manage employee information and track important HR metrics. The user interface is intuitive and the customer support has been top-notch. Highly recommend!",
    star: 4,
    image: "https://www.example.com/images/samantha-williams.jpg",
  },
  {
    id: 5,
    fullName: "Michael Brown",
    position: "HR Coordinator",
    review:
      "I've been using this HR management software for a few months now and it's been a great tool for our department. It's made it much easier to keep track of employee information and stay organized. The customer support team has also been very helpful when I've had questions. Overall, I'm very happy with this software.",
    star: 4,
    image: "https://www.example.com/images/michael-brown.jpg",
  },
];

export const foodItems = [
  {
    id: 1,
    name: "Margherita Pizza",
    description: "Classic pizza with tomato, mozzarella, and basil.",
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    category: "Pizza",
    price: 12.99,
    isNew: false,
    location: "Dhaka, Bangladesh",
    contactInfo: "+8801875685814",
    available: true,
    provider: "Sultans Dine",
    reviews: [
      {
        userEmail: "abc@gmail.com",
        comment: "Nice and yummy",
      },
      {
        userEmail: "abc@gmail.com",
        comment: "Nice and yummy",
      },
    ],
  },
  {
    id: 2,
    name: "Sushi Platter",
    description: "Assorted sushi rolls with soy sauce and wasabi.",
    image:
      "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c3VzaHx8ZW58MHx8MHx8fDA%3D%3D&auto=format&fit=crop&w=500&q=60",
    category: "Sushi",
    price: 18.99,
    isNew: true,
    location: "Dhaka, Bangladesh",
    contactInfo: "+8801875685814",
    available: true,
    provider: "Sultans Dine",
    reviews: [
      {
        userEmail: "abc@gmail.com",
        comment: "Nice and yummy",
      },
      {
        userEmail: "abc@gmail.com",
        comment: "Nice and yummy",
      },
    ],
  },
  {
    id: 3,
    name: "Burger Combo",
    description: "Delicious burger with fries and a drink.",
    image:
      "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJ1cmdlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    category: "Burgers",
    price: 9.99,
    isNew: false,
    location: "Dhaka, Bangladesh",
    contactInfo: "+8801875685814",
    available: true,
    provider: "Sultans Dine",
    reviews: [
      {
        userEmail: "abc@gmail.com",
        comment: "Nice and yummy",
      },
      {
        userEmail: "abc@gmail.com",
        comment: "Nice and yummy",
      },
    ],
  },
  {
    id: 4,
    name: "Pad Thai Noodles",
    description: "Stir-fried noodles with shrimp, tofu, and peanuts.",
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    category: "Asian",
    price: 14.99,
    isNew: true,
    location: "Dhaka, Bangladesh",
    contactInfo: "+8801875685814",
    available: true,
    provider: "Sultans Dine",
    reviews: [
      {
        userEmail: "abc@gmail.com",
        comment: "Nice and yummy",
      },
      {
        userEmail: "abc@gmail.com",
        comment: "Nice and yummy",
      },
    ],
  },
  {
    id: 5,
    name: "Caesar Salad",
    description: "Fresh salad with romaine lettuce and Caesar dressing.",
    image:
      "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJ1cmdlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    category: "Salads",
    price: 7.99,
    isNew: false,
    location: "Dhaka, Bangladesh",
    contactInfo: "+8801875685814",
    available: true,
    provider: "Sultans Dine",
    reviews: [
      {
        userEmail: "abc@gmail.com",
        comment: "Nice and yummy",
      },
      {
        userEmail: "abc@gmail.com",
        comment: "Nice and yummy",
      },
    ],
  },
];
