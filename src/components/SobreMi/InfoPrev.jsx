import React from 'react'

function InfoPrev() {

    return (
        <div className="relative overflow-hidden">
            {/* Gradients */}
            <div aria-hidden="true" className="flex absolute -top-96 start-1/2 transform -translate-x-1/2">
                <div className="bg-gradient-to-tl  via-blue-100 to-blue-50 blur-3xl w-[90rem] h-[50rem] rounded-fulls origin-top-left "></div>
            </div>
            {/* End Gradients */}

            <div className="relative z-10">
                <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
                    <div className="max-w-2xl text-center mx-auto">

                        {/* Title */}
                        <div className="mt-5 max-w-2xl">
                            <h1 className="block font-semibold text-gray-800 text-4xl md:text-5xl lg:text-6xl ">
                                Ah que aspiro
                            </h1>
                        </div>
                        {/* End Title */}

                        <div className="mt-5 max-w-3xl">
                            <p className="text-lg text-gray-600 ">
                                <br />
                                "Aspiro a transformar mis sueños en realidades, trabajando con pasión  y
                                construir un futuro lleno de posibilidades como el poder priorizar el trabajar y ejerzer una profesion y porsupuesto el
                                continuar estudiando."
                            </p>
                        </div>

                        {/* Buttons */}
                        <div className="mt-8 gap-3 flex justify-center">
                            <a className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none " href={"/contactame"}>
                                Contactame
                                <svg className="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="m9 18 6-6-6-6" />
                                </svg>
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );

}

export default InfoPrev