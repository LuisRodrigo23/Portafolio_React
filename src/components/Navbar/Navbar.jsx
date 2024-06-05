import React, { useState } from 'react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuClick = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className='fixed top-0 w-full bg-white shadow-lg z-10'>
            <div className="py-7 px-2 lg:mx-4 xl:mx-12">
                <div className="">
                    <nav className="flex items-center justify-between flex-wrap">
                        <div className="block lg:hidden">
                            <button
                                onClick={handleMenuClick} // Manejar el clic del botón del menú
                                className="navbar-burger flex items-center px-3 py-2 border rounded text-white border-white hover:text-white hover:border-white">
                                <svg className="fill-current h-6 w-6 text-gray-700" viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <title>Menu</title>
                                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                                </svg>
                                <h1 className='text-gray-700 font-bold ml-[30px] text-xl'>Mi portafolio</h1>
                            </button>
                        </div>
                        <div id="main-nav" className={`w-full flex-grow lg:flex items-center lg:w-auto ${isMenuOpen ? 'block' : 'hidden'}`}>

                            <div className="text-lg lg:flex-grow mt-2 animated jackinthebox xl:mx-8">
                                <a href="/"
                                    className="block lg:inline-block text-md font-bold  text-gray-900  sm:hover:border-indigo-400  hover:text-orange-500 mx-2 focus:text-blue-500  p-1 hover:bg-gray-300 sm:hover:bg-transparent rounded-lg">
                                    INICIO
                                </a>
                                <a href={"/proyects"}
                                    className="block lg:inline-block text-md font-bold  text-gray-900  sm:hover:border-indigo-400  hover:text-orange-500 mx-2 focus:text-blue-500  p-1 hover:bg-gray-300 sm:hover:bg-transparent rounded-lg">
                                    MIS PROYECTOS
                                </a>
                                <a href={"/sobreMi"}
                                    className="block lg:inline-block text-md font-bold  text-gray-900  sm:hover:border-indigo-400  hover:text-orange-500 mx-2 focus:text-blue-500  p-1 hover:bg-gray-300 sm:hover:bg-transparent rounded-lg">
                                    SOBRE MI
                                </a>
                                <a href={"/contactame"}
                                    className="block lg:inline-block text-md font-bold  text-gray-900  sm:hover:border-indigo-400  hover:text-orange-500 mx-2 focus:text-blue-500  p-1 hover:bg-gray-300 sm:hover:bg-transparent rounded-lg">
                                    CONTACTAME
                                </a>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Navbar;
