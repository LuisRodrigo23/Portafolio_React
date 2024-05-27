import React from 'react'
import Cards from './Cards'

function Proyectos() {
    return (
        <>
            <br />
            <a href="https://www.material-tailwind.com/magic-ai" target="_blank" rel="noopener noreferrer">
                Generated with <b>Magic AI Blocks</b>
            </a>
            by <a href="https://www.creative-tim.com/" target="_blank" rel="noopener noreferrer">Creative Tim</a>.
            <br /><br />
            <section>
                <div className="relative w-full h-[50vh]">
                    <img
                        className="absolute h-full w-full object-cover object-center"
                        src="https://images.unsplash.com/photo-1523800503107-5bc3ba2a6f81?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="nature"
                    />
                    <div className="absolute inset-0 h-full w-full bg-black/40"></div>
                    <div className="relative pt-[11rem] text-center">
                        <h2 className="block antialiased tracking-normal font-sans font-semibold leading-[1.3] text-white mb-4 text-3xl lg:text-4xl">
                            MIS PROYECTOS
                        </h2>
                        <p className="block antialiased font-sans text-xl font-normal leading-relaxed text-white mb-9 opacity-70">
                            Esta seccion es para mis proyectos blablabablabalba
                        </p>
                    </div>
                </div>
            </section>
            <Cards />
        </>
    );


}

export default Proyectos