import React from 'react';

export const Tecnologias = () => {
    return (
        <div className="my-8">
            <div className="relative w-full h-[35rem] bg-fixed bg-cover bg-center"
                style={{
                    backgroundImage: `url('https://plus.unsplash.com/premium_photo-1678566111481-8e275550b700?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`
                }}>
                <div className="absolute inset-0 h-full w-full bg-black/40"></div>
                <div className="relative p-[3rem] min-[1200px]:p-[12rem] text-center max-[1000px]:pt-[4.5rem]">
                    {/* Puedes agregar más contenido aquí si lo deseas */}
                </div>
            </div>

            <br />
            <h2 className="text-2xl font-bold text-center text-gray-900 mb-4">Tecnologías</h2>
            <ul className="flex flex-wrap items-center justify-center text-gray-900 mx-[2rem]">
                {[
                    "Node Js",
                    "Postgres SQL",
                    "Amazon AWS",
                    "Java",
                    "GitHub",
                    "React",
                    "Tailwind",
                    "MongoDB",
                    "CSS5",
                    "HTML3",
                    "Git",
                    "JavaScript",
                    "NextJs",
                    "ExpressJs",
                    "NPM",
                    "Firebase",
                    "NetiFly"
                ].map((tech, index) => (
                    <li
                        key={index}
                        className="bg-gray-200 rounded-full px-4 py-2 m-2 transition-all duration-300 hover:bg-blue-500 hover:text-white"
                    >
                        <a href="#" className="hover:underline">
                            {tech}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};
