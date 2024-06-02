import React from 'react'

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
                                src="https://bucket.material-tailwind.com/magic-ai/06b38f84f9669f766048c469ce861b81880378273a11ae9badaedfc32868ef44.jpg"
                                alt="Revolutionizing Our Production Process"
                                className="object-cover w-full h-full"
                            />
                        </div>
                        <div className="p-6 px-2 sm:pr-6 sm:pl-4">
                            <p className="block antialiased font-sans text-sm font-light leading-normal text-inherit mb-4 !font-semibold">
                                Technology
                            </p>
                            <a
                                href="#"
                                className="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-blue-gray-900 mb-2 normal-case transition-colors hover:text-gray-700"
                            >
                                Revolutionizing Our Production Process
                            </a>
                            <p className="block antialiased font-sans text-base leading-relaxed text-inherit mb-8 font-normal !text-gray-500">
                                Learn how our recent investment in new technology has revolutionized our production process, leading to improved efficiency and product quality.
                            </p>
                            <div className="flex items-center gap-4">
                                <img
                                    src="https://bucket.material-tailwind.com/magic-ai/6b1c5941d417a2a32baee89c2f3d1975d7d4fb81e486ed43dc1082ac54b0658b.jpg"
                                    className="inline-block relative object-cover object-center !rounded-full w-12 h-12 rounded-lg"
                                />
                                <div>
                                    <p className="block antialiased font-sans text-base font-light leading-relaxed text-blue-gray-900 mb-0.5 !font-semibold">
                                        John Doe
                                    </p>
                                    <p className="block antialiased font-sans text-sm leading-normal text-gray-700 font-normal">
                                        2022-08-15
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative flex-col bg-clip-border rounded-xl bg-transparent text-gray-700 shadow-none grid gap-2 item sm:grid-cols-2">
                        <div className="relative bg-clip-border rounded-xl overflow-hidden bg-white text-gray-700 shadow-lg m-0">
                            <img
                                src="https://bucket.material-tailwind.com/magic-ai/e7aa235a7bc5f504db1c66e27ece08f8118b1da6b21c013500391afcd572cf7d.jpg"
                                alt="Expanding Our Service Network"
                                className="object-cover w-full h-full"
                            />
                        </div>
                        <div className="p-6 px-2 sm:pr-6 sm:pl-4">
                            <p className="block antialiased font-sans text-sm font-light leading-normal text-inherit mb-4 !font-semibold">
                                Expansion
                            </p>
                            <a
                                href="#"
                                className="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-blue-gray-900 mb-2 normal-case transition-colors hover:text-gray-700"
                            >
                                Expanding Our Service Network
                            </a>
                            <p className="block antialiased font-sans text-base leading-relaxed text-inherit mb-8 font-normal !text-gray-500">
                                Discover how our expansion investment has allowed us to enhance our service network, providing better support and customer experience.
                            </p>
                            <div className="flex items-center gap-4">
                                <img
                                    src="https://bucket.material-tailwind.com/magic-ai/16d71aaeda38d7aea4412875984357949ff12e7f2c502bb20c4c1bcf6c661607.jpg"
                                    className="inline-block relative object-cover object-center !rounded-full w-12 h-12 rounded-lg"
                                />
                                <div>
                                    <p className="block antialiased font-sans text-base font-light leading-relaxed text-blue-gray-900 mb-0.5 !font-semibold">
                                        Jane Smith
                                    </p>
                                    <p className="block antialiased font-sans text-sm leading-normal text-gray-700 font-normal">
                                        2022-09-02
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative flex-col bg-clip-border rounded-xl bg-transparent text-gray-700 shadow-none grid gap-2 item sm:grid-cols-2">
                        <div className="relative bg-clip-border rounded-xl overflow-hidden bg-white text-gray-700 shadow-lg m-0">
                            <img
                                src="https://bucket.material-tailwind.com/magic-ai/dc74a867f21afc734166a6d37c08beaba4ff040664ba8ccce918e054264ad68d.jpg"
                                alt="Sustainable Practices for a Greener Future"
                                className="object-cover w-full h-full"
                            />
                        </div>
                        <div className="p-6 px-2 sm:pr-6 sm:pl-4">
                            <p className="block antialiased font-sans text-sm font-light leading-normal text-inherit mb-4 !font-semibold">
                                Sustainability
                            </p>
                            <a
                                href="#"
                                className="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-blue-gray-900 mb-2 normal-case transition-colors hover:text-gray-700"
                            >
                                Sustainable Practices for a Greener Future
                            </a>
                            <p className="block antialiased font-sans text-base leading-relaxed text-inherit mb-8 font-normal !text-gray-500">
                                Find out how our investment in sustainable practices is driving us towards a greener future, showcasing our commitment to environmental responsibility.
                            </p>
                            <div className="flex items-center gap-4">
                                <img
                                    src="https://bucket.material-tailwind.com/magic-ai/2fadd7f00b6d08fc9dcacef52af357ec1213c0415ab97ace57ae0f17c7f6c2c8.jpg"
                                    className="inline-block relative object-cover object-center !rounded-full w-12 h-12 rounded-lg"
                                />
                                <div>
                                    <p className="block antialiased font-sans text-base font-light leading-relaxed text-blue-gray-900 mb-0.5 !font-semibold">
                                        Alex Johnson
                                    </p>
                                    <p className="block antialiased font-sans text-sm leading-normal text-gray-700 font-normal">
                                        2022-09-20
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>

    );
}

export default Gallery