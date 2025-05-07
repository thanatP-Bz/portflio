import React from "react";
import Image from "next/image";
import { assets, infoList } from "@/assets/assets";

const About = () => {
  return (
    <div
      id="about"
      className="w-full px-[12%] py-24 scroll-mt-20 md:py-10 lg:py-0"
    >
      <h4 className="text-center mb-2 text-lg font-Ovo">Introduction</h4>
      <h2 className="text-center text-5xl font-Ovo">About me</h2>

      <div className="flex w-full flex-col lg:flex-row items-center gap-10 my-20">
        <div className="w-64 sm:w-80 rounded-3xl max-w-none">
          <Image
            src={assets.user_image}
            alt="user"
            className="w-full rounded-3xl"
          />
        </div>
        <div className="flex-1">
          <p className="mb-10 max-w-2xl font-Ovo">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore,
            assumenda corporis? Dignissimos, reiciendis numquam laudantium fugit
            quasi labore exercitationem aliquam modi nisi est ullam expedita
            nulla doloribus. Dicta, quis ipsa.
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <li
                key={index}
                className="border-[0.5px] border-gray-400 rounded-xl p-4 cursor-pointer hover:-translate-y-1 duration-500 hover:bg-light hover:shadow-color-dark"
              >
                <Image src={icon} alt={title} className="w-7 mt-3" />
                <h3 className="my-4 font-semibold text-gray-700">{title}</h3>
                <p className="text-gray-600 text-sm">{description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
