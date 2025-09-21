import { ColorfulText } from "../motion/Colorful"
import PageTransition from "../motion/PageTransition"
import { Pulse } from "../motion/Pulse"
import SlideIn from "../motion/SlideIn"
import SlideOut from "../motion/SlideOut"

export const About = () => {
    const skills = ["REACT", "TYPESCRIPT", "HTML", "CSS", "TAILWIND", "BULMA", "ANGULAR", "JAVASCRIPT", "JAVA", "SPRING"]

    return (
        <PageTransition>
            <div className="grid grid-cols-3">
                <div className="col-span-3 mb-10">
                    <h3>
                        <ColorfulText text="About Me"></ColorfulText>
                    </h3>
                </div>
                <div className="col-span-3 tracking-wide px-5 text-sm/6">
                    <SlideIn>
                        Frontend Developer with 2+ years of experience creating responsive and user-friendly web applications using React, TypeScript, and Angular.<br/>
                    </SlideIn>
                </div>
                <br></br>
                <div className="col-span-3 tracking-wide px-5 text-sm/6">
                    <SlideOut>
                        Contributed to data visualization platforms in collaboration with research teams, improving accessibility of large-scale datasets. Strong foundation in UI/UX principles, performance optimization, and Agile teamwork, with a focus on delivering clean, maintainable code.
                    </SlideOut>
                </div>
                <div className="col-span-3 my-10">
                    <h3>
                        <ColorfulText text="My Skills"></ColorfulText>
                    </h3>
                </div>
                <div className="col-span-3 tracking-wide px-5 text-sm/6">
                    {
                        skills.map((s:string)=>(
                            <Pulse>
                                <div className="border-1 inline-flex items-center px-2 py-1 m-1 text-sm rounded-sm bg-gray-500 text-white hover:bg-black hover:text-red-500 hover:cursor-not-allowed">{s}</div>
                            </Pulse>
                        ))
                    }
                </div>
            </div>
        </PageTransition>
    )
}
