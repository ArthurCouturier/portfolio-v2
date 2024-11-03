import React from "react";
import SkillCategoryButton from "../../components/SkillCategoryButton";

export default function PepperzMissionPage() {
    return (
        <div>
            This page is under construction actually
            <p className="my-2 mx-5">On Spring 2024, I wanted to develop a new web application using React and a Java / SpringBoot backend.</p>
            <p className="my-2 mx-5">Thus, I decided to create a cooking web application because I love cooking</p>
            <p className="my-2 mx-5">Some days later, I decided to turn this application (that was most a marmitton-like) to an application specialized in pepper</p>
            <div className="mt-7">
                <SkillCategoryButton url="https://www.pepperz.app">Link to Pepperz</SkillCategoryButton>
            </div>
            <div className="mt-7">
                <SkillCategoryButton url="/missions">Back</SkillCategoryButton>
            </div>
        </div>
    )
}
