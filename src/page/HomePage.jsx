import About from "../components/Inicio/About";
import Proyectos from "../components/Proyects/Proyectos";
import "../components/StyleTransition.css";
import NavbarAb from "../components/Navbar/Navbar";
import "../page/HomePage.css";

const HomePage = () => {
    return (
        <>
            <NavbarAb />
            <div className="flex flex-col justify-center items-center min-h-screen bg-[#161513]">
                <div className="mx-auto text-center mt-6 sm:mt-12">
                    <div className="mx-auto mb-6 sm:mb-8 h-[12rem] sm:h-[14rem] w-[12rem] sm:w-[14rem] overflow-hidden rounded-full bg-gradient-to-tr from-[#0E3386] to-[#00CED1]">
                        <img src="/iconLr1.png" alt="" className="h-[100%] w-[17rem] object-cover" />
                    </div>
                    <h1 className="max-w-screen-md text-[2rem] sm:text-4xl lg:text-5xl font-extrabold text-white mb-4 sm:mb-6 animate-wave">
                        Luis Rodrigo. <br className="hidden sm:inline" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-tr from-[#00CED1] to-[#0E3386] animate-wave">
                            Frontend Develop
                        </span>
                    </h1>
                    <p className="mx-[1.5rem] sm:mx-[3rem] mt-4 sm:mt-6 mb-6 text-sm sm:text-lg font-light text-[#C5C5C5] max-w-2xl">
                        Desde pequeño, siempre he sentido una gran fascinación por entender cómo funcionan las cosas a mi alrededor, en un sentido literal.
                    </p>
                    <div className="text-center">
                        <a href="https://www.linkedin.com/in/luis-vaquin-644605245/" download={"Mi CV-Luis"}>
                            <button className="inline-block px-8 py-4 bg-[#6c63ff] rounded-full font-semibold text-base sm:text-lg text-white hover:bg-[#5a54f2]">
                                Ver mi perfil
                            </button>
                        </a>
                    </div>
                </div>
            </div>
            <div className="flex items-end justify-end fixed bottom-5 right-5 z-10">
                <div>
                    <a
                        title="Buy me a beer"
                        href="https://www.instagram.com/luis_roodrigoo/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-[3.5rem] h-[3.5rem] sm:w-[4rem] sm:h-[4rem] lg:w-[5rem] lg:h-[5rem] rounded-full transition-transform transform hover:scale-110 hover:rotate-12"
                    >
                        <img
                            className="object-cover object-center w-full h-full rounded-full"
                            src="https://previews.123rf.com/images/kritchanut/kritchanut1406/kritchanut140600071/29035233-icono-azul-de-la-foto-de-perfil-avatar-masculino-en-c%C3%ADrculo.jpg"
                            alt="Buy me a beer"
                        />
                    </a>
                </div>
            </div>
            <About />
            <Proyectos />
        </>
    );
}

export default HomePage;
