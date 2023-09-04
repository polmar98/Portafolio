
import React from "react";
import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import { TerminalIcon, UsersIcon } from "@heroicons/react/solid";
import { testimonials } from "../data";

const Testimonials = () => {
  return (
    <section id="testimonials">
      <div className="container px-5 py-10 mx-auto text-center">
        <div className="text-center mb-20">
        <UsersIcon className="w-10 inline-block mb-2" />
        <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-12">
          Clientes Satisfechos
        </h1>
        <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto my-0">
            A continuación describo un listado de clientes que están utilizando
            mis proyectos para satisfacer sus requerimientos. 
          </p>
        </div>

        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {testimonials.map((skill) => (
            <div key={skill} className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                <BadgeCheckIcon className="text-orange-400 w-6 h-6 flex-shrink-0 mr-4" />
                <span className="title-font font-medium text-amber-300">
                  {skill}
                </span>
              </div>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
}

export default Testimonials;