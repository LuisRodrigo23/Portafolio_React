import React from 'react'
import PropTypes from 'prop-types'

const SectionPost = props => {
    return (
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto mt-[-2rem]">
            {/* Title */}
            <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
                <h2 className="text-2xl font-bold md:text-4xl md:leading-tight text-left">Postings.</h2>

                {/**  <h2 className="text-2xl font-bold md:text-4xl md:leading-tight ">Hola tengo el agrado y el honor de participar en esta conferencia en la universidad del valle de Guatemala, junto al gran equipo de dataLab Prensa Libre, sinceramente es una gran oportunidad en varios ambitos para mi.</h2>*/}
                <p className="mt-1 text-gray-600 ">Hola tengo el agrado y el honor de participar en esta conferencia en la universidad del valle de Guatemala, junto al gran equipo de dataLab Prensa Libre, sinceramente es una gran oportunidad en varios ambitos para mi.</p>

            </div>
            {/* End Title 
            
                            <p className="mt-1 text-gray-600 dark:text-neutral-400">Hola tengo el agrado y el honor de participar en esta conferencia en la universidad del valle de Guatemala, junto al gran equipo de dataLab Prensa Libre, sinceramente es una gran oportunidad en varios ambitos para mi.</p>
*/}

            {/* Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {/*   <a className="group flex flex-col focus:outline-none" href="#">
                    <div className="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
                        <img
                            className="size-full absolute top-0 start-0 object-cover group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out rounded-xl"
                            src="/imguvgConference.jpg"
                            alt="Blog Image"
                        />
                        <span className="absolute top-0 end-0 rounded-se-xl rounded-es-xl text-xs font-medium bg-gray-800 text-white py-1.5 px-3 dark:bg-neutral-900">
                            Sponsored
                        </span>
                    </div>

                    <div className="mt-7">
                        <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-neutral-300 dark:group-hover:text-white">
                            Studio by Preline
                        </h3>
                        <p className="mt-3 text-gray-800 dark:text-neutral-200">
                            Produce professional, reliable streams easily leveraging Preline's innovative broadcast studio
                        </p>
                        <p className="mt-5 inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 group-hover:underline group-focus:underline font-medium dark:text-blue-500">
                            Read more
                            <svg
                                className="shrink-0 size-4"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="m9 18 6-6-6-6" />
                            </svg>
                        </p>
                    </div>
                </a>*/}
                <a
                    className="group relative flex flex-col w-full min-h-[23rem] bg-[url('/imguvgConference.jpg')] bg-center bg-cover rounded-xl hover:shadow-lg focus:outline-none focus:shadow-lg transition"
                    href="https://datalabprensalibre.com/"
                >
                    {/* <div className="flex-auto p-4 md:p-6">
                        <h3 className="text-xl text-white/90 group-hover:text-white">
                            <span className="font-bold">Preline</span> Press publishes books about economic and technological advancement.
                        </h3>
                    </div>*/}
                    <div className="pt-0 p-4 md:p-6">
                        <div className="inline-flex items-center gap-2 text-sm font-medium text-white group-hover:text-white/70 group-focus:text-white/70">
                            Visit the site
                            <svg
                                className="shrink-0 size-4"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="m9 18 6-6-6-6" />
                            </svg>
                        </div>
                    </div>
                </a>
                {/* End Card */}
            </div>
            {/* End Grid */}
        </div>
    )
}

SectionPost.propTypes = {}

export default SectionPost