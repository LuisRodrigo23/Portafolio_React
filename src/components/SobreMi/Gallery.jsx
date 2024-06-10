import React from 'react'
import Tecnologys from './Tecnologys';

function Gallery() {
    return (
        <>
            <section className="grid min-h-screen p-8 place-items-center mt-[-1.5rem]">
                <div className='mb-[-3rem] mt-[-3%] max-[1050px]:mb-[4rem] max-[1050px]:mt-[-2%] text-wrap font-bold 
                text-4xl w-full text-center max-[700px]:text-2xl'>ALGUNOS DE MIS HOBIIS

                    <div className="mx-0">
                        <span className="inline-block w-[15rem] h-1 rounded-full bg-blue-500 max-[700px]:w-[10rem]"></span>
                        <span className="inline-block w-3 h-1 ml-1 rounded-full bg-blue-500"></span>
                        <span className="inline-block w-1 h-1 ml-1 rounded-full bg-blue-500"></span>
                    </div>
                </div>

                <div className="container grid grid-cols-1 gap-8 my-auto lg:grid-cols-2">
                    <div className="relative flex-col bg-clip-border rounded-xl bg-transparent text-gray-700 shadow-none grid gap-2 item sm:grid-cols-2">
                        <div className="relative bg-clip-border rounded-xl overflow-hidden bg-white text-gray-700 shadow-lg m-0">
                            <img
                                src="https://d2yoo3qu6vrk5d.cloudfront.net/images/20170905121301/cubo-de-rubik-900x485.jpg?itok=1504707634"
                                alt="Revolutionizing Our Production Process"
                                className="object-cover w-full h-full"
                            />
                        </div>
                        <div className="p-2 px-2 sm:pr-6 sm:pl-4">
                            <a
                                className="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-blue-gray-900 mb-2 normal-case transition-colors hover:text-gray-700"
                            >
                                Armar cubos de rubik
                            </a>
                            <p className="block antialiased font-sans text-base leading-relaxed text-inherit mb-8 font-normal !text-gray-500">
                                "Mi fascinación por los cubos de Rubik comenzó con la curiosidad de un niño, ya que a temprana edad estos me llamaron la atencion
                                y cada vez los podia armar mas rapido y diferentes tipos de cubos y eso aumento mas mi pequeña fascinación con los cubos."
                            </p>

                        </div>
                    </div>
                    <div className="relative flex-col bg-clip-border rounded-xl bg-transparent text-gray-700 shadow-none grid gap-2 item sm:grid-cols-2">
                        <div className="relative bg-clip-border rounded-xl overflow-hidden bg-white text-gray-700 shadow-lg m-0">
                            <img
                                src="https://www.elsoldetampico.com.mx/deportes/ux4my8-con-el-invierno-nacio-el-basquetbol/ALTERNATES/LANDSCAPE_1140/Con%20el%20invierno%20nacio%CC%81%20el%20ba%CC%81squetbol"
                                alt="Revolutionizing Our Production Process"
                                className="object-cover w-full h-full"
                            />
                        </div>
                        <div className="p-2 px-2 sm:pr-6 sm:pl-4">
                            <a
                                className="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-blue-gray-900 mb-2 normal-case transition-colors hover:text-gray-700"
                            >
                                Jugar baloncesto
                            </a>
                            <p className="block antialiased font-sans text-base leading-relaxed text-inherit mb-8 font-normal !text-gray-500">
                                "Desde pequeño me fascina el poder practicar este deporte aunque creo que los deportes no se me den bien pero disfruto el practicar
                                este deporte cada vez que puedo."
                            </p>

                        </div>
                    </div>
                    <div className="relative flex-col bg-clip-border rounded-xl bg-transparent text-gray-700 shadow-none grid gap-2 item sm:grid-cols-2">
                        <div className="relative bg-clip-border rounded-xl overflow-hidden bg-white text-gray-700 shadow-lg m-0">
                            <img
                                src="../src/img/imgFt1.jpg"
                                alt="Revolutionizing Our Production Process"
                                className="object-cover w-full h-full"
                            />
                        </div>
                        <div className="p-2 px-2 sm:pr-6 sm:pl-4">
                            <a

                                className="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-blue-gray-900 mb-2 normal-case transition-colors hover:text-gray-700"
                            >
                                Tiempo con amigos
                            </a>
                            <p className="block antialiased font-sans text-base leading-relaxed text-inherit mb-8 font-normal !text-gray-500">
                                "Desde siempre me a gustado el poder pasar tiempo con amigos cercanos que e conocido a lo largo del tiempo que me an ayudado
                                a poder mejorar en varios aspectos de mi vida y pasar malos o buenos momentos que hacen unicos e inolvidables eso propios."
                            </p>

                        </div>
                    </div>
                    <div className="relative flex-col bg-clip-border rounded-xl bg-transparent text-gray-700 shadow-none grid gap-2 item sm:grid-cols-2">
                        <div className="relative bg-clip-border rounded-xl overflow-hidden bg-white text-gray-700 shadow-lg m-0">
                            <img
                                src="../src/img/imgFt4.jpg"
                                alt="Revolutionizing Our Production Process"
                                className="object-cover w-full h-full"
                            />
                        </div>
                        <div className="p-2 px-2 sm:pr-6 sm:pl-4">
                            <a

                                className="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-blue-gray-900 mb-2 normal-case transition-colors hover:text-gray-700"
                            >
                                Tiempo con amigoss
                            </a>
                            <p className="block antialiased font-sans text-base leading-relaxed text-inherit mb-8 font-normal !text-gray-500">
                                "Pasar tiempo con amigos es como añadir pinceladas de alegría y risas a la obra maestra de la vida, cada momento compartido se
                                convierte en un color vibrante que ilumina nuestro lienzo de recuerdos."
                            </p>

                        </div>
                    </div>




                </div>
            </section>
            <Tecnologys />
        </>
    );
}

export default Gallery