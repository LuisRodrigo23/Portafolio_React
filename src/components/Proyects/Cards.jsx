import React from 'react';

const Cards = () => {
    const cards = [
        {
            img: ["https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"],
            name: "Simon",
            description: "Este es una API realizada con hsdjfadksjfasljfkasfopija dljsaiofjas fasme",
            url: "https://www.youtube.com/"
        },
        {
            img: ["https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"],
            name: "See",
            description: "The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to 'Naviglio' where you can enjoy the main night life in Barcelona.",
            url: ""
        },
        {
            img: ["https://tmssl.akamaized.net/images/foto/galerie/lionel-messi-1711467863-132837.jpg?lm=1711467875"],
            name: "Meessi",
            description: "The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to 'Naviglio' where you can enjoy the main night life in Barcelona.",
            url: ""
        }
    ];

    return (
        <div className='w-full flex flex-wrap justify-center'>
            {cards.map((card, index) => (
                <div key={index} className="relative flex m-4 w-full max-w-md flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                    <div className="relative mx-4 -mt-6 h-56 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
                        {card.img.length > 0 && (
                            <img
                                src={card.img[0]}
                                alt="img-blur-shadow"
                                className="object-cover h-full w-full"
                            />
                        )}
                    </div>
                    <div className="p-6">
                        <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                            {card.name}
                        </h5>
                        <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                            {card.description}
                        </p>
                    </div>
                    <div className="p-6 pt-0">
                        <a href={card.url}><button
                            className="select-none rounded-lg bg-pink-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="button"
                            data-ripple-light="true"
                        >
                            VER CODIGO
                        </button>
                        </a>

                    </div>
                </div>
            ))}

            <div className="w-full pt-5 px-4 mb-8 mx-auto text-center">
                <div className="text-sm text-gray-700 py-1">
                    Made with <a className="text-gray-700 font-semibold" href="https://www.material-tailwind.com/docs/html/card?ref=tailwindcomponents" target="_blank" rel="noopener noreferrer">Material Tailwind</a> by <a href="https://www.creative-tim.com?ref=tailwindcomponents" className="text-gray-700 font-semibold" target="_blank" rel="noopener noreferrer"> Creative Tim</a>.
                </div>
            </div>

            {/* stylesheet */}
            <link
                rel="stylesheet"
                href="https://unpkg.com/@material-tailwind/html@latest/styles/material-tailwind.css"
            />

            {/* Ripple Effect */}
            {/* from cdn */}
            <script src="https://unpkg.com/@material-tailwind/html@latest/scripts/ripple.js"></script>
        </div>
    );
};

export default Cards;
