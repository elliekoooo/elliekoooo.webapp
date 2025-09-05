import { ColorfulText } from "../motion/Colorful"

export const About = () => {
    return (
        <div className="grid grid-cols-3">
            <div className="col-span-3 px-20 mb-10">
                <h2 className="text-yellow-500">
                    About Me
                </h2>
            </div>
            <div className="col-span-3 px-20 tracking-widest text-sm/10">
                Frontend Developer with 2+ years of experience creating responsive and user-friendly web applications using React, TypeScript, and Angular.<br/>
                Contributed to data visualization platforms in collaboration with research teams, improving accessibility of large-scale datasets. Strong foundation in UI/UX principles, performance optimization, and Agile teamwork, with a focus on delivering clean, maintainable code.
            </div>
        </div>
    )
}
