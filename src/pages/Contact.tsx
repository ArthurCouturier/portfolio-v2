import React, { useState } from "react";
import Skill from "../components/Skill";

export default function ContactPage() {
    const [copied, setCopied] = useState(false);

    const handleCopyEmail = () => {
        navigator.clipboard.writeText("arthurcouturier.freelance@gmail.com");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // Réinitialise après 2 secondes
    };

    return (
        <div className="flex flex-col items-center h-max text-white font-sans">
            <div className="flex flex-col items-center justify-center h-1/2 text-center p-4 space-y-4">
                <p className="text-lg md:text-xl animate-fade-in-delay">
                    French Freelance Engineer based in {" "}
                    <a
                        href="https://metropole.toulouse.fr"
                        className="inline-block hover:text-pink-400 hover:scale-105 transform duration-200"
                        target="_blank" rel="noreferrer"
                    >
                        Toulouse
                    </a>
                </p>
                <p className="text-md md:text-lg animate-fade-in-delay">
                    Creating innovative solutions for web and software development
                </p>
            </div>

            <div className="w-full h-full flex flex-col justify-center items-center">
                <Skill
                    skill={JSON.stringify({
                        name: "LinkedIn",
                        icon: "devicon-linkedin-plain colored",
                        url: "https://www.linkedin.com/in/arthur-couturier/",
                    })}
                />
                <Skill
                    skill={JSON.stringify({
                        name: "Github",
                        icon: "devicon-github-original colored",
                        url: "https://github.com/ArthurCouturier",
                    })}
                />

                <a
                    href="mailto:arthurcouturier.freelance@gmail.com"
                    className="h-[10vh] w-fit sm:my-2 md:my-4 lg:my-6 xl:my-7 flex justify-center scale-50 sm:scale-75 md:scale-900 lg:scale-100 xl:scale-110"
                >
                    <img src="/gmailImage.png" alt="Email" />
                </a>

                <div className="flex items-center space-x-2 mt-4">
                    <p
                        onClick={handleCopyEmail}
                        className="cursor-pointer text-md md:text-lg hover:text-coutYellow transition transform hover:scale-105 flex items-center"
                    >
                        <span className="mr-2">arthurcouturier.freelance@gmail.com</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-white hover:text-coutYellow"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path d="M8 2a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H8zm-3 4a1 1 0 011-1h7a1 1 0 010 2H6a1 1 0 01-1-1zM5 9a1 1 0 011-1h7a1 1 0 010 2H6a1 1 0 01-1-1zm0 3a1 1 0 011-1h7a1 1 0 010 2H6a1 1 0 01-1-1z" />
                        </svg>
                    </p>
                    {copied && (
                        <span className="text-sm text-coutPurple animate-fade-in">
                            Copied!
                        </span>
                    )}
                </div>

                <Skill
                    skill={JSON.stringify({
                        name: "Mail",
                        icon: "devicon-mail-plain",
                        url: "mailto:arthurcouturier.freelance@gmail.com",
                    })}
                />
            </div>
        </div>
    );
}
