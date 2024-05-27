import React from 'react';

const Cards = () => {
    const cards = [
        {
            img: ["https://tmssl.akamaized.net/images/foto/galerie/lionel-messi-1711467863-132837.jpg?lm=1711467875"],
            name: "Meessi",
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
            img: ["https://tmssl.akamaized.net/images/foto/galerie/lionel-messi-1711467863-132837.jpg?lm=1711467875"],
            name: "Meessi",
            description: "The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to 'Naviglio' where you can enjoy the main night life in Barcelona.",
            url: "https://www.youtube.com/"
        }
    ];

    return (
        <div className="m-auto px-11 py-6 ms:max-w-4xl, max-w-7xl ">
            <div className="sm:grid  sm:grid-cols-2 lg:grid-cols-3, grid-cols-2 sm:gap-8, gap-8 ">
                {cards.map((card, index) => (
                    <div key={index} className="bg-white shadow-2xl overflow-hidden rounded-lg">
                        <img
                            src={card.img[0]}
                            alt={card.name}
                            className="w-full h-84 object-cover object-center"
                        />
                        <div className="p-6">
                            <h2 className="text-xl font-semibold text-gray-800 mb-2">{card.name}</h2>
                            <p className="text-sm text-gray-700 mb-4">{card.description}</p>
                            {card.url && (
                                <div className="flex items-center">
                                    <img
                                        className="w-10 h-10 rounded-full mr-4"
                                        src="https://play-lh.googleusercontent.com/PCpXdqvUWfCW1mXhH1Y_98yBpgsWxuTSTofy3NGMo9yBTATDyzVkqU580bfSln50bFU=w240-h480-rw"
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
    );
};

export default Cards;
