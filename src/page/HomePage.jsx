import Footer from "../components/Footer/Footer";
import About from "../components/Inicio/About";
import Navbar from "../components/Navbar/Navbar";
import Proyectos from "../components/Proyects/Proyectos";
import "../components/StyleTransition.css"

const HomePage = () => {
    return (
        <>
            <Navbar />
            <div className="max-[300px]:pt-[3rem] pt-[12px]"></div>
            <div className="flex flex-col justify-center items-center h-[100vh] bg-[#161513] max-[375px]:h-[115vh] ">
                <div className="mx-auto text-center">
                    <div className="mx-auto mb-[1rem] sm:mb-[0rem] mt-12 sm:mt-20 h-[14rem] sm:h-[16rem] w-[14rem] sm:w-[16rem] overflow-hidden rounded-full bg-gradient-to-tr from-[red] to-[#6c63ff]">
                        <img src="https://i.postimg.cc/d1rLKzTH/imgDev.png" alt="" className="h-[110%] w-[101%] object-cover" />
                    </div>
                    <br />
                    <h1 className="max-w-screen-sm text-3xl sm:text-5xl font-extrabold text-white mb-4 sm:mb-8">
                        HOLA SOY LUIS <br className="hidden sm:inline" /> <br />
                        Frontend <span className="text-transparent bg-clip-text bg-gradient-to-tr from-[#6c63ff] to-[#6c63ff]">Developer</span>
                    </h1>
                    <p className="mx-[2rem] mt-4 sm:mt-7 mb-8 sm:mb-11 text-base sm:text-lg font-light text-[#C5C5C5] max-w-lg">
                        Hola mi nombre es Luis Rodrigo tengo 17 años de edad actualmente curso mi tercer y ultimo año de educacion media
                        en el centro educativo tecnico laboral Kinal soy un joven apacionado por la tecnologia, es de mas mencionar de que yo
                        desarrolle este pequeño proyecto con ayuda de varias tecnologias y frameworks como React, JavaScript, Tailwind y GitHub.
                    </p>
                    <br />
                    <div className="text-center">
                        <a href="https://www.linkedin.com/in/luis-vaquin-644605245/" download={"Mi CV-Luis"}>
                            <button className="inline-block px-6 py-3 mr-4 sm:mr-8 bg-[#6c63ff] rounded-full font-semibold text-lg sm:text-xl text-white">Ver mi perfil</button>
                        </a>
                    </div>
                </div>


            </div>
            <div className="flex items-end justify-end fixed bottom-5 right-0 mb-4 mr-4 z-10">
                <div>
                    <a
                        title="Buy me a beer"
                        href="https://www.instagram.com/luis_roodrigoo/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-[4rem] h-[4rem] rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12"
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

export default HomePage