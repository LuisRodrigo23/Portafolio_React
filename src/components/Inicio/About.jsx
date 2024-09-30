import SectionPost from "./SectionPost";
import "../../page/HomePage.css";

const About = () => {
    return (
        <> <section id="services" className="sm:p-10 lg:p-20 p-5 ">
            <div className="container mx-auto">
                <div className="sm:grid grid-cols-2 max-[1250px]:grid-cols-1">
                    <div className="sm:p-10 p-5 bg-white sm:me-5 mb-10 rounded-md shadow-md h-[auto] ">
                        <h3 className="text-2xl mb-5 font-bold">Un poco sobre mi</h3>
                        <p className="leading-10 text-gray-500 text-2xl max-[750px]:text-[17px]">
                            Recientemente, tuve el privilegio de finalizar mis prácticas en uno de los medios de comunicación más importantes del país: Prensa Libre-Guatevisión. Esta experiencia me brindó la oportunidad de continuar trabajando en el desarrollo de nuestra plataforma Data Science, <a className="text-green-500" href="https://www.goo.live/">Goo</a> y <a className="text-blue-950" href="https://goo-admin.web.app/">Goo-Admin</a>.
                            <br />
                            <br />De igual manera me expreso emocionado del comenzar mis estudios ante el siguiente ciclo en la Facultad de Ingeniería en la Universidad Mariano Gálvez de Guatemala.
                        </p>

                    </div>
                    <div className="mt-[1rem] max-[1000px]:mt-[-5rem]" id="">
                        <img className="w-[auto] h-[auto] rounded-md mx-[auto] my-[auto]
                         max-[650px]:my-[5rem] animate-wave" src="/dev2.svg" alt="Graphic Design" id="routeProyects" />
                    </div>
                </div>
            </div>
        </section>
            <SectionPost />
        </>

    );
}

export default About