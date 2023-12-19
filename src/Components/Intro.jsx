import React from "react";
import intro from "../assets/illustration-intro.png";
const Intro = () => {
    return (
        <main id="intro" className="container flex flex-col justify-start items-center p-5 md:max-w-[700px] md:h-[80vh]">
            <img src={intro} alt="intro-image" />
            <h3 className="text-center mt-5 md:text-4xl">
                All your files in one secure location, accessible anywhere.
            </h3>
            <p className="text-center max-w-[550px] mt-5 md:text-xl">
                Fylo stores all your most important filess in one secure location.
                Access them wherever you need, share and colaborate with friends family,
                and co-workers.
            </p>
            <button className="min-w-[250px] py-3 bg-gradient-to-r from-cyan-gradient to-blue-gradient rounded-3xl text-white font-semibold text-sm mt-5 hover:saturate-200">
                Get Started
            </button>
        </main>
    );
};

export default Intro;
