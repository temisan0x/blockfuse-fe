import React from "react";

export default function MoreThanBasics() {
  const features = [
    {
      icon: "https://www.blockfuselabs.com/assets/Frame-3703-B-g3x3F1.svg",
      title: "Real World Experience",
      description: "Apply your skills to solve real-world problems and see immediate results.",
    },
    {
      icon: "https://www.blockfuselabs.com/assets/Frame-3704-BDzRpwN3.svg",
      title: "Hands-On Learning",
      description: "Dive into projects and learn by doing, transforming theory into practice.",
    },
    {
      icon: "https://www.blockfuselabs.com/assets/Frame-3701-CvA-aC47.svg",
      title: "Interactive Learning",
      description: "Engage actively with hands-on activities that bring concepts to life.",
    },
    {
      icon: "https://www.blockfuselabs.com/assets/Frame-3702-CXfKDzyq.svg",
      title: "Collaborative Learning",
      description: "Collaborate with peers to share insights, tackle challenges, and grow together.",
    },
  ];

  return (
    <section className="py-16 text-white">
      <div className="mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
          More Than Just the Basics
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center gap-6" 
            >

              <img
                src={feature.icon}
                alt="Icon"
                className="w-10 h-10 flex-shrink-0" 
              />

              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <div className="flex justify-between items-end">
                  <div className="flex-1">
                    <p className="text-base text-gray-300 leading-relaxed">
                      {feature.description}
                    </p>
                    <div className="h-[1px] w-full bg-gradient-to-r from-purple-500 to-pink-500 mt-2"></div>
                  </div>

                  <img
                    src="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M8.99988%2016.7705L13.2699%2012.5005H20.9219V11.5005H13.2679L8.99988%207.23047L4.22987%2012.0005L8.99988%2016.7705Z'%20fill='white'/%3e%3c/svg%3e"
                    alt="Diamond"
                    className="w-5 h-5 ml-4" // Added margin for spacing
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}