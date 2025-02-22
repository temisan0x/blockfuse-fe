import React from "react";

export default function Features() {
    return (
        <section className="py-16 px-6 sm:px-10 lg:px-20 text-white overflow-hidden">
            <div className="max-w-7xl mx-auto relative overflow-hidden">

                <img
                    className="absolute left-0 right-4 top-14 w-1/6 h-64 object-cover z-0"
                    src="data:image/svg+xml,%3csvg%20width='438'%20height='578'%20viewBox='0%200%20438%20578'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20opacity='0.4'%20x='50'%20width='388'%20height='486'%20fill='%23BF64E7'/%3e%3crect%20opacity='0.4'%20y='92'%20width='342'%20height='486'%20fill='%235330F4'/%3e%3c/svg%3e"
                    alt="Decorative gradient rectangles for Blockfuse Labs"
                />

                <div className="relative z-10">
                    <h4 className="text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed text-center ">
                        At Blockfuse Labs, we see education as a journey. Whether you're new to blockchain or an experienced developer, we offer resources, expert instructors, and tools for every stage of your growth.
                    </h4>

                    <div className="relative mt-8">
                        <img
                            className="w-11/12 h-full rounded-lg shadow-md mx-auto"
                            src="https://www.blockfuselabs.com/assets/Frame-10-AmuGo1Ak.png"
                            alt="Blockfuse Labs educational resources illustration"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}