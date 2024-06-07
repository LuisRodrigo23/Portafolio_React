import React from 'react';
import Footer from '../Footer/Footer';

const Cards = () => {
    const cards = [
        {
            img: ["https://www.mytaskpanel.com/wp-content/uploads/2023/04/consulting-blog-09.webp"],
            name: "Calculadora Grafica-Java",
            description: "Este es una pequeña calculadora con una interfaz sencilla desarrollada con Java FXML",
            url: "https://github.com/LuisRodrigo23/CalculadoraGrafica/tree/main/CalculadoraGrafica_2022300"
        },
        {
            img: ["https://bambu-mobile.com/wp-content/uploads/2023/10/Que-es-MySQL-bases-de-datos-app-apps-dato-aplicaciones-scaled.jpg"],
            name: "Tonys Kinal-MySQL-Java",
            description: "The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to 'Naviglio' where you can enjoy the main night life in Barcelona.",
            url: "https://github.com/LuisRodrigo23/TonysKinalApllicacion.git"
        }, {
            img: ["https://www.tatvasoft.com/blog/wp-content/uploads/2022/07/Why-Use-React.jpg"],
            name: "Blog React",
            description: "The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to 'Naviglio' where you can enjoy the main night life in Barcelona.",
            url: "https://github.com/lvaquin2022300/blog_frontend.git"
        }, {
            img: ["https://images.ctfassets.net/aq13lwl6616q/7cS8gBoWulxkWNWEm0FspJ/c7eb42dd82e27279307f8b9fc9b136fa/nodejs_cover_photo_smaller_size.png"],
            name: "MESSI",
            description: "The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to 'Naviglio' where you can enjoy the main night life in Barcelona.",
            url: "fasdkfj"
        },

        {
            img: ["https://img.freepik.com/foto-gratis/collage-fondo-programacion_23-2149901782.jpg?size=626&ext=jpg&ga=GA1.1.44546679.1716508800&semt=ais_user"],
            name: "Tienda-HTML y Css",
            description: "The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to 'Naviglio' where you can enjoy the main night life in Barcelona.",
            url: "https://github.com/lvaquin2022300/TiendaOnV.git"
        },

        {
            img: ["https://codigoonclick.com/wp-content/uploads/2019/05/practice-javascript-and-learn-functions-400x277.png"],
            name: "Blog React",
            description: "The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to 'Naviglio' where you can enjoy the main night life in Barcelona.",
            url: "https://github.com/lvaquin2022300/blog_frontend.git"
        },
    ];

    return (
        <>
            <div className="m-auto px-[2rem] py-8 sm:px-6 lg:px-8 max-w-8xl">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {cards.map((card, index) => (
                        <div key={index} className="bg-white shadow-2xl overflow-hidden rounded-lg">
                            <img
                                src={card.img[0]}
                                alt={card.name}
                                className="w-full sm:h-[20rem] object-cover object-center"
                            />
                            <div className="p-6 sm:p-8 lg:p-10">
                                <h2 className="text-xl font-semibold text-gray-800 mb-2">{card.name}</h2>
                                <p className="text-sm text-gray-700 mb-4">{card.description}</p>
                                {card.url && (
                                    <div className="flex items-center">
                                        <img
                                            className="w-10 h-10 rounded-full mr-4"
                                            src="../src/img/imgLogoGit.jpeg"
                                            alt="avatar"
                                        />
                                        <a
                                            href={card.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-black hover:underline"
                                        >
                                            VER CODIGO
                                        </a>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </>

    );
};

export default Cards;
