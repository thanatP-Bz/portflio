import { assets, serviceData } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Services = () => {
  return (
    <div
      id="services"
      className="w-full px-[12%] py-0 scroll-mt-20 md:py-12 lg:py-0"
    >
      <h4 className="text-center mb-2 text-lg font-Ovo">What I offer</h4>
      <h2 className="text-center text-5xl font-Ovo">Services</h2>

      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
        praesentium placeat, neque sit suscipit consectetur nulla eum dolorum
        labore enim!
      </p>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4 my-10 ">
        {serviceData.map(({ icon, title, description, link }, index) => (
          <div
            key={index}
            className="border border-gray-400 rounded-lg px-8 py-8 cursor-pointer hover:-translate-y-1 duration-500 hover:bg-light hover:shadow-color-dark"
          >
            <Image src={icon} alt="" className="w-10" />
            <h3 className="text-lg my-4 text-gray-700">{title}</h3>
            <p className="text-sm text-gray-600 leading-5">{description}</p>
            <a href={link} className="flex items-center gap-2 text-sm mt-5">
              Read More{" "}
              <Image alt="" src={assets.right_arrow} className="w-4" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
