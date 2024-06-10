import Footer from "../Footer/Footer";

const About = () => {
    return (
        <> <section id="services" className="sm:p-10 lg:p-20 p-5 ">
            <div className="container mx-auto">
                <h2 className="text-center text-4xl font-bold pt-10 sm:pt-0 pb-10">Un poco de mi</h2>
                <div className="sm:grid grid-cols-2 max-[1250px]:grid-cols-1">
                    <div className="sm:p-10 p-5 bg-gray-50 sm:me-5 mb-10 rounded-md hover:shadow-md h-[auto] ">
                        <h3 className="text-2xl mb-5 font-bold">¿Que me apaciona?</h3>
                        <p className="leading-10 text-gray-500 text-2xl max-[750px]:text-[19px]">
                            Desde pequeño siempre he estado fascinado por cómo funcionan las cosas especialmente los
                            dispositivos electrónicos y las computadoras.
                            <br />
                            <br />
                            Y fue una pequeña charla con un amigo por el cual me decidi a estudiar Informatica en el año 2022
                            agradezco como el centro educativo tecnico laboral Kinal me abrieron sus puertas para poder formarme en esta etapa de
                            mi juventud y un dia lograr ser el profecional que tanto anelo
                            y durante este periodo de tiempo, tuve la dicha del poder a conocer a grandes personas como amigos.
                        </p>
                    </div>
                    <div className="mt-5 ">
                        <img className="w-[auto] h-[auto] rounded-md mx-[auto] my-[auto]
                         max-[650px]:my-[5rem]" src="../src/assets/dev2.svg" alt="Graphic Design" />
                    </div>
                </div>
            </div>
        </section>
            <Footer />
        </>

    );
}

export default About