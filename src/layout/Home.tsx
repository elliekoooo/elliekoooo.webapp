import { faListCheck, faStarOfLife } from '@fortawesome/free-solid-svg-icons';
import { WavyText } from '../motion/WavyText';
import { Card } from '../component/card';
import { Pulse } from '../motion/Pulse';
import { Glass } from '../component/glass';

export const Home = () => {

  
    return (
        <div className="lg:w-[50vw]">
            <div className="grid grid-cols-3 grid-rows-3 px-20 gap-15">
                <div className="col-span-2 row-span-3 flex flex-col justify-center items-start">
                    <h1>Ellie Koo</h1>
                    <div className="text-gray-400 mx-auto"><WavyText text="Hey, This is my Portfolio"/></div>
                </div>
                <div className="col-span-1 row-span-3">
                    <img src="/images/image.png"></img>
                </div>
                <div className="col-span-2 row-span-1">
                    <Card order={1} wavyText="about me" icon={faStarOfLife}>
                        <Glass>
                            <div className="p-3 rounded-lg leading-7">
                                <div className='p-2'>
                                    Front-End Developer passionate about creating clean, performant, and user-friendly web applications.<br/>
                                    Skilled in React, Angular, and TypeScript, currently exploring Next.js and TailwindCSS animations to craft modern and accessible web experiences.....
                                </div>
                            </div>
                        </Glass>
                    </Card>
                </div>
                <div className="col-span-1"></div>
                <div className="col-span-1"></div>
                <div className="col-span-2 row-span-3">
                    <Card order={2} wavyText="projects" icon={faListCheck}>
                        <div className="p-5 rounded-lg leading-7">
                            <div className='p-2'>
                            Front-End Developer passionate about creating clean, performant, and user-friendly web applications.<br/>
                            Skilled in React, Angular, and TypeScript, currently exploring Next.js and TailwindCSS animations to craft modern and accessible web experiences.
                            </div>
                        </div>
                    </Card>
                </div>
                <div className="col-span-1"></div>
                <div className="col-span-2 row-span-2">
                    
                </div>
            </div>
        </div>
        
    )
};