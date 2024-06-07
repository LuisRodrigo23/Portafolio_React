import Footer from "../components/Footer/Footer";
import About from "../components/Inicio/About";

const HomePage = () => {
    return (
        <>
            <div className="max-[300px]:pt-[3rem] pt-[12px]"></div>
            <div className="flex flex-col justify-center items-center h-[100vh] bg-[#161513] max-[375px]:h-[115vh] ">
                <div className="mx-auto text-center">
                    <div className="mx-auto mb-[1rem] sm:mb-[0rem] mt-12 sm:mt-20 h-[14rem] sm:h-[16rem] w-[14rem] sm:w-[16rem] overflow-hidden rounded-full bg-gradient-to-tr from-[#FF8660] to-[#8000FF]">
                        <img src="../src/img/imgDev.png" alt="" className="h-[110%] w-[101%] object-cover" />
                    </div>
                    <br />
                    <h1 className="max-w-screen-sm text-3xl sm:text-5xl font-extrabold text-white mb-4 sm:mb-8">
                        HOLA SOY LUIS <br className="hidden sm:inline" /> <br />
                        Frontend <span className="text-transparent bg-clip-text bg-gradient-to-tr from-[#FF8660] to-[#8000FF]">Developer</span>
                    </h1>
                    <p className="mx-[2rem] mt-4 sm:mt-7 mb-8 sm:mb-11 text-base sm:text-lg font-light text-[#C5C5C5] max-w-lg">
                        Hola mi nombre es Luis Rodrigo tengo 17 años de edad actualmente curso mi tercer y ultimo año de educacion media
                        en el centro educativo tecnico laboral Kinal soy un joven apacionado por la tecnologia, es de mas mencionar de que yo
                        desarrolle este pequeño proyecto con ayuda de varias tecnologias y frameworks como React, JavaScript, Tailwind y GitHub.
                    </p>
                    <div className="text-center">
                        <a href="../src/documents/CV_LuisRodrigo.pdf" download={"Mi CV-Luis"}>
                            <button className="text-gray-800 inline-block px-6 py-3 mr-4 sm:mr-8 bg-white rounded-full font-semibold text-lg sm:text-xl">Ver mi CV</button>
                        </a>
                    </div>
                </div>
            </div>
            <About></About>
        </>
    );
}

export default HomePage