import Footer from "../components/Footer/Footer";
import About from "../components/Inicio/About";

const HomePage = () => {
    return (
        <><div className="flex flex-col justify-center items-center h-[90vh] bg-[#161513]">
            <div className="mx-auto text-center">
                <div className="mx-auto mb-8 sm:mb-16 mt-12 sm:mt-20 h-32 sm:h-48 w-32 sm:w-48 overflow-hidden rounded-full bg-gradient-to-tr from-[#FF8660] to-[#8000FF]">
                    <img src="https://i.imgur.com/4U5tBXC.png" alt="" className="h-full w-full object-cover" />
                </div>
                <h1 className="max-w-screen-sm text-3xl sm:text-5xl font-extrabold text-white mb-4 sm:mb-8">
                    HOLA SOY LUIS <br className="hidden sm:inline" /> <br />
                    Frontend <span className="text-transparent bg-clip-text bg-gradient-to-tr from-[#FF8660] to-[#8000FF]">Developer</span>
                </h1>
                <p className="mx-auto mt-4 sm:mt-8 mb-8 sm:mb-12 text-base sm:text-lg font-light text-[#C5C5C5] max-w-lg">I am a seasoned full-stack software engineer with over
                    8 years of professional experience, specializing in backend development.
                    My expertise lies in crafting robust and scalable SaaS-based
                    architectures on the Amazon AWS platform.</p>
                <div className="text-center">
                    <button className="text-gray-800 inline-block px-6 py-3 mr-4 sm:mr-8 bg-white rounded-full font-semibold text-lg sm:text-xl">Get In Touch</button>
                </div>
            </div>
        </div>
            <About></About>
            <Footer></Footer>
        </>

    );
}

export default HomePage