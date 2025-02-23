import React from "react";

export default function Features({ title, imageUrl }) {
  return (
    <section className="py-16 px-6 sm:px-10 lg:px-20 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto relative overflow-hidden">
        <img
          className="absolute left-[-20px] top-[-30px] w-1/6 h-64 object-cover opacity-50 z-[-1]"
          src="data:image/svg+xml,%3csvg%20width='438'%20height='578'%20viewBox='0%200%20438%20578'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20opacity='0.7'%20x='50'%20width='388'%20height='486'%20fill='%235532A1'/%3e%3crect%20opacity='0.7'%20y='92'%20width='342'%20height='486'%20fill='%232C1E6F'/%3e%3c/svg%3e"
          alt="Decorative gradient rectangles for Blockfuse Labs"
        />

        <div className="relative z-10">
          <h4 className="text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed text-center ">
            {title}
          </h4>

          <div className="relative mt-8">
            <img
              className="w-11/12 h-full rounded-lg shadow-md mx-auto"
              src={imageUrl}
              alt="Blockfuse Labs educational resources illustration"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
