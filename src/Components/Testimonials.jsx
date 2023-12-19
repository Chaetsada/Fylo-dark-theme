import React from "react";

import person1 from '../assets/profile-1.jpg'
import person2 from '../assets/profile-2.jpg'
import person3 from '../assets/profile-3.jpg'
import quote from '../assets/bg-quotes.png'

const Testimonials = () => {
  return (
    <main className="mt-[150px] container flex flex-col justify-center px-5 gap-5 md:flex-row md:justify-between">

      <div className="relative bg-darkblue-400 px-5 py-8  shadow-2xl md:w-[30%]">
        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
          perspiciatis laborum maiores omnis reiciendis, voluptatem distinctio
          tempora, voluptas dolor neque commodi et libero quos aut.
        </p>
        <div className="mt-5 flex items-center space-x-3">
          <img className="w-[35px] h-[35px] rounded-full " src={person1} alt="profile1" />
          <div className="flex flex-col">
            <strong className="text-sm">Satish patel</strong>
            <small className="text-slate">Founder & CEO, Huddle</small>
          </div>
        </div>
        <img className="absolute -top-6 left-0" src={quote} alt="quote-icon" />
      </div>

      <div className="bg-darkblue-400 px-5 py-8  shadow-2xl md:w-[30%]">
        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
          perspiciatis laborum maiores omnis reiciendis, voluptatem distinctio
          tempora, voluptas dolor neque commodi et libero quos aut.
        </p>
        <div className="mt-5 flex items-center space-x-3">
          <img className="w-[35px] h-[35px] rounded-full " src={person2} alt="profile1" />
          <div className="flex flex-col">
            <strong className="text-sm">Bruce McKenzie</strong>
            <small className="text-slate">Founder & CEO, Huddle</small>
          </div>
        </div>
      </div>

      <div className="bg-darkblue-400 px-5 py-8  shadow-2xl md:w-[30%]">
        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
          perspiciatis laborum maiores omnis reiciendis, voluptatem distinctio
          tempora, voluptas dolor neque commodi et libero quos aut.
        </p>
        <div className="mt-5 flex items-center space-x-3">
          <img className="w-[35px] h-[35px] rounded-full " src={person3} alt="profile1" />
          <div className="flex flex-col">
            <strong className="text-sm">Iva Boyd</strong>
            <small className="text-slate">Founder & CEO, Huddle</small>
          </div>
        </div>
      </div>

    </main>
  );
};

export default Testimonials;
