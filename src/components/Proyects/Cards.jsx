import React from 'react';
import Footer from '../Footer/Footer';

const Cards = () => {
    const cards = [
        {
            img: ["https://tmssl.akamaized.net/images/foto/galerie/lionel-messi-1711467863-132837.jpg?lm=1711467875"],
            name: "Meessi",
            description: "The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to 'Naviglio' where you can enjoy the main night life in Barcelona.",
            url: "https://www.youtube.com/"
        },
        {
            img: ["https://solowrestling.mundodeportivo.com/uploads/RESEM129050reigns.jpg"],
            name: "Luis Rodrigos",
            description: "The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to 'Naviglio' where you can enjoy the main night life in Barcelona.",
            url: "https://www.youtube.com/"
        },
        {
            img: ["https://tmssl.akamaized.net/images/foto/galerie/lionel-messi-1711467863-132837.jpg?lm=1711467875"],
            name: "Meessi",
            description: "The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to 'Naviglio' where you can enjoy the main night life in Barcelona.",
            url: "https://www.youtube.com/"
        },
        {
            img: ["https://solowrestling.mundodeportivo.com/uploads/RESEM129050reigns.jpg"],
            name: "Luis Rodrigos",
            description: "The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to 'Naviglio' where you can enjoy the main night life in Barcelona.",
            url: "https://www.youtube.com/"
        },
        {
            img: ["https://tmssl.akamaized.net/images/foto/galerie/lionel-messi-1711467863-132837.jpg?lm=1711467875"],
            name: "Meessi",
            description: "The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to 'Naviglio' where you can enjoy the main night life in Barcelona.",
            url: "https://www.youtube.com/"
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
