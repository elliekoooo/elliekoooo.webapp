import { useEffect, useState } from "react";
import { ImageSlider } from "../component/slider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faLink } from "@fortawesome/free-solid-svg-icons";
import PageTransition from "../motion/PageTransition";

export const Projects = () => {
    const [projects, setProjects] = useState([] as any);


    useEffect(()=>{
        setProjects({
            "personal-finance":"",
            "age-calculator-app":"1 this is my first frontend-mentor-project by react, bulma",
            "entertainment-webapp": "2 this is my second toy project",
            "interactive-comments-section":""
        });
    }, []);


    return (
        <PageTransition>
            <div className="py-5 leading-7">
                These small projects showcase my solutions.<br/>
                I usually built them as part of my portfolio, using React, TypeScript, and Bulma(or other CSS libraries).<br/>
                Each project includes a live demo website.
            </div>
            <div className="w-full">
                <ImageSlider srcs={projects}/>
            </div>
        </PageTransition>
    )
}