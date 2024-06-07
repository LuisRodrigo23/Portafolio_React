import React from 'react';
import { Link } from 'react-router-dom';
import { GithubIcon, InstagramIcon, LinkedinIcon, TwitterIcon, YoutubeIcon } from './Icons';

function Networks() {
    return (
        <section className="flex items-center justify-center w-full h-[45vh] py-12 md:py-24 lg:py-32 bg-white mb-[40px]
        max-[650px]:h-[60vh]">
            <div className="container max-w-5xl px-4 md:px-6 ">
                <div className="space-y-4 text-center">
                    <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight"> Mis redes sociales</h2>
                    <p className="mx-auto max-w-[600px] bg-gray-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed ">
                        Mantente conectado y entérate de todas mis últimas novedades.
                    </p>
                </div>
                <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                    <Link to="#" className="group flex flex-col items-center justify-center rounded-lg bg-white p-4 transition-colors hover:bg-gray-100 ">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 transition-colors group-hover:bg-gray-200 ">
                            <TwitterIcon className="h-6 w-6 text-gray-500 transition-colors group-hover:text-gray-900 " />
                        </div>
                        <span className="mt-2 text-sm font-medium text-gray-500 transition-colors group-hover:text-gray-900 ">
                            Twitter
                        </span>
                    </Link>
                    <Link to="#" className="group flex flex-col items-center justify-center rounded-lg bg-white p-4 transition-colors hover:bg-gray-100  ">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 transition-colors group-hover:bg-gray-200  ">
                            <LinkedinIcon className="h-6 w-6 text-gray-500 transition-colors group-hover:text-gray-900" />
                        </div>
                        <span className="mt-2 text-sm font-medium text-gray-500 transition-colors group-hover:text-gray-900">
                            LinkedIn
                        </span>
                    </Link>
                    <Link to="#" className="group flex flex-col items-center justify-center rounded-lg bg-white p-4 transition-colors hover:bg-gray-100 ">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 transition-colors group-hover:bg-gray-200 ">
                            <InstagramIcon className="h-6 w-6 text-gray-500 transition-colors group-hover:text-gray-900" />
                        </div>
                        <span className="mt-2 text-sm font-medium text-gray-500 transition-colors group-hover:text-gray-900 ">
                            Instagram
                        </span>
                    </Link>
                    <Link to="#" className="group flex flex-col items-center justify-center rounded-lg bg-white p-4 transition-colors hover:bg-gray-100 ">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 transition-colors group-hover:bg-gray-200 ">
                            <GithubIcon className="h-6 w-6 text-gray-500 transition-colors group-hover:text-gray-900 " />
                        </div>
                        <span className="mt-2 text-sm font-medium text-gray-500 transition-colors group-hover:text-gray-900">
                            GitHub
                        </span>
                    </Link>
                    <Link to="#" className="group flex flex-col items-center justify-center rounded-lg bg-white p-4 transition-colors hover:bg-gray-100 ">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 transition-colors group-hover:bg-gray-200 ">
                            <YoutubeIcon className="h-6 w-6 text-gray-500 transition-colors group-hover:text-gray-900 " />
                        </div>
                        <span className="mt-2 text-sm font-medium text-gray-500 transition-colors group-hover:text-gray-900 s">
                            YouTube
                        </span>
                    </Link>
                </div>
                <br />
            </div>
            <br />

        </section>
    );
}

export default Networks