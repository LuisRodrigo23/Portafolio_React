import React from 'react'
import Cards from './Cards'
import "../StyleTransition.css"
import Navbar from '../Navbar/Navbar';

function Proyectos() {
    return (
        <>
            <Navbar />
            <section id='routeProyects'>
                <div className="relative w-full h-[50vh]">
                    <img
                        className="absolute h-full w-full object-cover object-center"
                        src="https://images.unsplash.com/photo-1562813733-b31f71025d54?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3DF"
                        alt="nature"
                    />
                    <div className="absolute inset-0 h-full w-full bg-black/40"></div>
                    <div className="relative p-[3rem] min-[1200px]:p-[12rem] text-center max-[1000px]:pt-[5rem]">
                        <h2 className="block antialiased tracking-normal font-sans font-semibold leading-[1.3] text-white mb-4 text-3xl lg:text-4xl">
                            MIS PROYECTOS
                        </h2>
                        <p className="block antialiased font-sans text-xl font-normal leading-relaxed text-white mb-9 opacity-70">
                            Esta seccion se encuentran algunos de los proyectos los cuales e podido desarrollar a lo largo de mi corto tiempo como Desarrollador
                        </p>
                    </div>
                </div>
            </section>
            <Cards />
        </>
    );


}

export default Proyectos