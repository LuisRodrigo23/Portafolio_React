import React from 'react'

function InfoPrev() {
    return (
        <div className='w-full max-w-lg px-10 py-8 mx-auto bg-white rounded-lg shadow-xl'>
            <div className='max-w-md mx-auto space-y-6'>

                <h2 className="text-2xl font-bold">shadcn/ui</h2>
                <div className='text-base leading-3'>
                    <p className='font-normal text-gray-700'>Looking For Free premium components?</p>


                </div>

                <div className='text-base leading-3'>
                    <p className='font-normal text-gray-700'>Looking for premium themes and landing pages?</p>

                </div>

                <div className='text-base leading-3'>
                    <p className='font-normal text-gray-700'>Looking for Awesome cheatsheet for Tailwind CSS?</p>

                </div>

                <div className='text-base leading-7'>
                    <p className='font-normal text-gray-700'>Want to dig deeper into Tailwind CSS?</p>
                    <p>
                        <a target='_blank' rel='noopener noreferrer' href='https://tailwindcss.com/docs' className='text-stone-400 hover:underline'>Read the docs →</a>
                    </p>
                </div>

                <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-stone-800 text-white shadow hover:bg-primary/90 h-9 px-4 py-2">Deploy</button>
            </div>
        </div>
    )
}

export default InfoPrev