import React from "react";
import banner_logo from "@/assets/hero_img.jpg";
import Image from "next/image";
const Banner = () => {
  return (
    <section className="container mx-auto mt-10">
      {" "}
      <div className="grid grid-cols-2 gap-4 items-center p-40 bg-slate-100 border-0 rounded-2xl ">
        <div className="space-y-4">
          {" "}
          <h1 className="font-bold text-3xl">
            Books to freshen up your bookshelf
          </h1>
          <button className="btn btn-success">View The List</button>
        </div>
        <Image src={banner_logo} alt=""></Image>
      </div>
    </section>
  );
};

export default Banner;
