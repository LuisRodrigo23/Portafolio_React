import React from 'react'

function Tecnologys() {
    return (
        <body className="h-screen">
            <main>
                <section className="">
                    <div className="container mx-auto">
                        <div className="flex justify-center">
                            <div className="mx-auto mb-[1rem] sm:mb-[0rem] mt-12 sm:mt-20 h-[16rem] sm:h-[16rem] w-[16rem] sm:w-[16rem] overflow-hidden rounded-full bg-gradient-to-tr from-[#FF8660] to-[#8000FF]">
                                <img src="../src/img/imgDev.png" alt="" className="h-[110%] w-[101%] object-cover" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* about me */}
                <section id="about" className="sm:p-10 lg:p-20 bg-gray-50">
                    <div className="container mx-auto">
                        <div className="sm:grid grid-cols-2">
                            <img className="sm:w-1/2 mb-10 sm:mb-0" src="https://th.bing.com/th/id/OIG..x5DGrfb1HXjpZELjMgm?pid=ImgGn" alt="" />
                            <div>
                                <h2 className="text-bold text-2xl mb-3">Full Stack Web Developer</h2>
                                <p className="mb-5 text-sm text-gray-400">Providing web solutions</p>
                                <p className="text-gray-500 text-justify leading-10">
                                    Hello there! I'm a full stack web developer, and I'm very passionate and dedicated to my
                                    work.
                                    With more than 5 years of experience as a professional web developer,
                                    With this time period I have acquired the skills and knowledge necessary to make your
                                    project a success.
                                    I enjoy every step of the development process, from discussion and collaboration.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* services */}
                <section id="services" className="sm:p-10 lg:p-20 p-5">
                    <div className="sm:container mx-auto">
                        <h2 className="text-center text-4xl font-bold pt-10 sm:pt-0 pb-10">Services</h2>
                        <div className="sm:grid grid-cols-2">
                            <div className="sm:p-10 p-5 bg-gray-50 sm:me-5 mb-10 rounded-md hover:shadow-md">
                                <h3 className="text-xl mb-5 font-bold">Web Design</h3>
                                <p className="leading-10 text-gray-500 text-justify">
                                    As a dedicated web design professional,
                                    I bring a creative and strategic approach to crafting visually stunning and user-centric
                                    websites.
                                    With a keen eye for aesthetics and a commitment to delivering exceptional user experiences,
                                    my goal is to translate your brand identity into a captivating online presence.
                                </p>
                            </div>

                            {/* Rest of service divs */}
                        </div>
                    </div>
                </section>

                {/* Rest of the sections */}

            </main>

            {/* footer */}
            <footer className="bg-gray-50 lg:p-20 p-10">
                <section className="container mx-auto">
                    <div className="sm:grid justify-between sm:grid-cols-2 lg:grid-cols-4">
                        {/* Footer content */}
                    </div>
                </section>
            </footer>

        </body>
    );
}

export default Tecnologys