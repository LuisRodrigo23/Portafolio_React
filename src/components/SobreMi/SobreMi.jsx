import React from 'react'
import Gallery from './Gallery';
import Footer from '../Footer/Footer';

function SobreMi() {
    return (
        <>
            <br />
            <br /><section className="bg-white dark:bg-[#161513] mb-[65px]">
                <br />
                <section className="">
                    <div className="container mx-auto">
                        <div className="flex justify-center">
                            <div className="mx-auto mb-[1rem] sm:mb-[0rem] mt-12 sm:mt-20 h-[16rem] sm:h-[16rem] w-[16rem] sm:w-[16rem] overflow-hidden rounded-full bg-gradient-to-tr from-[red] to-[#6c63ff]">
                                <img src="../src/img/imgDev.png" alt="" className="h-[110%] w-[101%] object-cover" />
                            </div>
                        </div>
                    </div>
                </section>
                <div className="container px-6 py-10 mx-auto">
                    <div className="lg:flex lg:items-center">
                        <div className="w-full space-y-12 lg:w-1/2 ">
                            <div>
                                <h1 className="text-2xl font-semibold text-gray-800  lg:text-4xl dark:text-white">Hola mi nombre es<br /> Luis Rodrigo Vaquin Bacajol</h1>
                                <div className="mt-2">
                                    <span className="inline-block w-40 h-1 rounded-full bg-blue-500"></span>
                                    <span className="inline-block w-3 h-1 ml-1 rounded-full bg-blue-500"></span>
                                    <span className="inline-block w-1 h-1 ml-1 rounded-full bg-blue-500"></span>
                                </div>
                            </div>
                            <div className="md:flex md:items-start md:-mx-4">

                                <div className="mt-4 md:mx-4 md:mt-0">
                                    <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">Diseñador</h1>
                                    <p className="mt-3 text-gray-500 dark:text-gray-300">
                                        Disfruto diseñando productos dinamicos y creativos de principio a fin
                                        Enfocados en desarrollar experiencias intuitivas que crecen y mejoran
                                        constantemente para la experiencia de usuario.
                                    </p>
                                </div>
                            </div>
                            <div className="md:flex md:items-start md:-mx-4">

                                <div className="mt-4 md:mx-4 md:mt-0">
                                    <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">Desarrollador</h1>
                                    <p className="mt-3 text-gray-500 dark:text-gray-300">
                                        Me apasiona desarrollar porque cada proyecto es una oportunidad para combinar lógica y creatividad. Disfruto resolver problemas
                                        con soluciones  eficientes, transformando ideas abstractas en interfaces intuitivas y funcionales. La satisfacción que me queda
                                        de ver cómo cada línea de código y cada elemento de diseño se unen para crear experiencias digitales unicas para el usuario.
                                    </p>
                                </div>
                            </div>
                            <div className="md:flex md:items-start md:-mx-4">
                                <span className="inline-block p-2 text-blue-500 bg-blue-100 rounded-xl md:mx-4 dark:text-white dark:bg-blue-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                                    </svg>
                                </span>
                                <div className="mt-4 md:mx-4 md:mt-0">
                                    <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">Mis habilidades blandas</h1>
                                    <p className="mt-3 text-gray-500 dark:text-gray-300">
                                        Comunicacion
                                    </p>
                                    <p className="mt-3 text-gray-500 dark:text-gray-300">
                                        Flexibidad
                                    </p>
                                    <p className="mt-3 text-gray-500 dark:text-gray-300">
                                        Pensamiento creativo
                                    </p>
                                    <p className="mt-3 text-gray-500 dark:text-gray-300">
                                        Trabajo en equipo
                                    </p>
                                    <p className="mt-3 text-gray-500 dark:text-gray-300">
                                        Pensamiento crítico
                                    </p>

                                </div>
                            </div>

                        </div>

                        <div className="flex">
                            <div className='mt-[25px] w-full ml-[10rem] max-[1000px]:mx-[auto]'>
                                <div className="mt-[auto]">

                                    <div className='w-[full] h-full'>
                                        <div className="mt-5">
                                            <img className="w-auto h-auto rounded-md mx-[auto]" src="../src/assets/dev.svg" alt="Graphic Design" />
                                        </div>
                                    </div>


                                </div>
                            </div>

                        </div>
                    </div>
                    <hr className="border-gray-200 my-12 dark:border-gray-700" />
                </div>
            </section>
            <Gallery></Gallery>
            <Footer></Footer>
        </>
    );
}

export default SobreMi