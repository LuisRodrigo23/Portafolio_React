import React from 'react';
import PropTypes from 'prop-types';
import { TimeLineSection } from './TimeLineSection';

const SectionPost = (props) => {
    return (
        <> <div className="relative bg-[#161513]">
            {/* Wave SVG */}
            <div className="absolute top-0  w-full overflow-hidden leading-[0] mt-[-25rem]">
                <svg
                    className=" w-full h-[46rem]"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1440 320"
                >
                    <path
                        fill="#161513"
                        fillOpacity="1"
                        d="M0,96L60,112C120,128,240,160,360,170.7C480,181,600,171,720,144C840,117,960,75,1080,64C1200,53,1320,75,1380,85.3L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
                    ></path>
                </svg>
            </div>

            {/* Main Content */}
            <div className="relative max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                {/* Title */}
                <div className="max-w-2xl mx-[1.5rem] text-left">
                    <h3 className="text-[2.2rem] mb-5 font-bold text-white">Posts</h3>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-[1rem]">
                    {/* Card */}
                    <a className="group flex flex-col focus:outline-none" href="#">
                        <div className="relative pt-[110%] sm:pt-[110%] rounded-xl overflow-hidden">
                            <img
                                className="size-full h-[90%] absolute top-0 start-0 object-cover group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out rounded-xl"
                                src="/imguvgConference.jpg"
                                alt="Blog Image"
                            />
                            <span className="absolute top-0 end-0 rounded-se-xl rounded-es-xl text-xs font-medium bg-gray-800 text-white py-1.5 px-3 dark:bg-neutral-900">
                                UVG LUIS
                            </span>
                        </div>

                        <div className="mt-[-1rem]">
                            <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 ">
                                Conferencia UVG
                            </h3>
                            <p className="mt-3 text-gray-800 ">Hola estoy contento de</p>
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
                    </a>
                    <br />
                    <a
                        className="group relative flex flex-col w-full min-h-60 bg-[url('https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80')] bg-center bg-cover rounded-xl hover:shadow-lg focus:outline-none focus:shadow-lg transition"
                        href="#"
                    >
                        <div className="flex-auto p-4 md:p-6">
                            <h3 className="text-xl text-white/90 group-hover:text-white">
                                <span className="font-bold">Preline</span> Press publishes books about economic and technological advancement.
                            </h3>
                        </div>
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
        </div>
            <TimeLineSection />
        </>

    );
};

SectionPost.propTypes = {};

export default SectionPost;
