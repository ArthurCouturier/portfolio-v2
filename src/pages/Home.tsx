import React from "react";
import Skill from "../components/Skill";

export default function Home() {
    return (
        <div className="flex flex-col items-center h-max text-white font-sans">
            <div className="flex flex-col items-center justify-center h-1/2 text-center p-4 space-y-4">
                <p className="text-lg md:text-xl animate-fade-in-delay">French Freelance Engineer based in {" "}
                    <a href="https://metropole.toulouse.fr"
                        className="inline-block hover:text-pink-400 hover:scale-105 transform duration-200"
                        target="_blank" rel="noreferrer"
                    >
                        Toulouse
                    </a>
                </p>
                <p className="text-md md:text-lg animate-fade-in-delay">Creating innovative solutions for web and software development</p>
            </div>

            <div className="flex flex-col items-center h-1/3 w-full p-6 md:p-12 space-y-6">
                <h2 className="text-2xl md:text-3xl font-semibold">My Specialities</h2>

                <div className="grid grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12 2xl:gap-14 text-center animate-fade-in">
                    <Speciality href={"/web-skills"}>Skills</Speciality>
                    <Speciality href={"/missions"}>Missions</Speciality>
                    <Speciality href={"https://www.malt.fr/profile/arthurcouturier"} new_tab={true}>Malt Profile</Speciality>
                    <Speciality href={"/content/CV-Arthur-Couturier.pdf"} new_tab={true}>Resume</Speciality>
                </div>

                <div className="flex items-center justify-center gap-2 sm:gap-4 md:gap-6 animate-fade-in">
                    <Skill
                        skill={JSON.stringify({
                            name: "LinkedIn",
                            icon: "devicon-linkedin-plain",
                            url: "https://www.linkedin.com/in/arthur-couturier/",
                        })}
                    />
                    <a
                        href="mailto:arthurcouturier.freelance@gmail.com"
                        aria-label="Mail"
                        className="sm:my-2 md:my-4 lg:my-6 xl:my-7 flex justify-center items-center scale-75 sm:scale-90 md:scale-90 lg:scale-100 xl:scale-110"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-20 h-20 text-coutPurple hover:text-coutYellow transition duration-300"
                        >
                            <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                            <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                        </svg>
                    </a>
                    <Skill
                        skill={JSON.stringify({
                            name: "Github",
                            icon: "devicon-github-original",
                            url: "https://github.com/ArthurCouturier",
                        })}
                    />
                </div>
            </div>
        </div>
    )
}

function Speciality({ children, href, new_tab = false }) {
    const boxSizeProperty = "w-40 sm:w-44 md:w-48 lg:w-52 xl:w-56 2xl:w-60"
    return (
        <a
            className={`p-4 bg-coutPurple hover:bg-coutYellow rounded-lg shadow-lg ${boxSizeProperty} transition-transform duration-300 transform hover:scale-105 active:scale-90`}
            href={href}
            target={new_tab ? "_blank" : "_self"}
            rel={new_tab ? "noopener noreferrer" : ""}
        >
            {children}
        </a>
    )
}
