import React from "react";
const About = () => {
   return (
      <section id="about">
      <div className="container mx-auto flex items-start py-20">
        <div className="flex-1 items-center text-center px-10 w-2/3">
          <h1 className="title-font text-2xl text-amber-200">Hola!</h1>
          <br className="hidden lg:inline-block" />
          <h1 className="title-font font-bold text-4xl text-amber-200">Soy Paul Martínez</h1>
            
          <p className="mb-8 leading-relaxed text-xl text-white"> Desarrollador Web Full Stack</p>
          <p className="mb-8 leading-relaxed text-amber-500">  
          Soy una persona apasionada por el diseño y desarrollo de aplicaciones de escritorio
          y páginas o sitios Web, con un alto grado de compromiso y dedicación para la solución
          de problemas con el fin de cumplir los objetivos y satisfacer las necesidades de  mis
          clientes. He dedicado gran parte de mi vida a la programación y al estudio de nuevas
          tecnologías y nuevos recursos para cada día mejorar mucho más cada proceso. En las 
          empresas con las que he trabajado me he destacado por aportar nuevas ideas en beneficio
          de robustecer más los programas y de esta forma mejorar los resultados.  
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Trabaja conmigo
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              Ver mis Proyectos
            </a>
          </div>
        </div>
        <div className="px-20 w-1/3">
          <img
            className="outline-white rounded-lg shadow-2xl"
            alt="hero"
            src="./img/pol.jpg"
          />
        </div>
      </div>
    </section>
   )
};

export default About;