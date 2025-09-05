import { faEnvelopeCircleCheck, faListCheck, faStarOfLife } from '@fortawesome/free-solid-svg-icons';
import { Card } from '../component/card';
import { Glass } from '../component/glass';
import Wiper from '../motion/Wiper';
import { useState } from 'react';

export const Home = () => {
    const [order, setOrdering] = useState(0);

    return (
        <div className="lg:w-[50vw]">
            <div className="grid grid-cols-3 grid-rows-3 px-20 gap-15">
                <div className="col-span-2 row-span-1">
                    <Card order={1} set={(value)=>setOrdering(value)} wavyText="about me" icon={faStarOfLife}>
                        <Glass menu="about">
                            <div className="p-2 rounded-lg leading-7">
                                Front-End Developer passionate about creating clean, performant, and user-friendly web applications.<br/>
                                Skilled in React, Angular, and TypeScript, currently exploring Next.js and TailwindCSS animations to craft modern and accessible web experiences.
                            </div>
                        </Glass>
                    </Card>
                </div>
                <div className="col-span-1">
                    {
                        order == 1 ? 
                            <Wiper>
                                <img src="/images/about.png" className="w-100 h-70"></img>
                            </Wiper>
                                :
                                <img src="/images/about.png" className="w-100 h-70"></img>
                    }

                </div>
                <div className="col-span-1">
                    {
                        order == 2 ? 
                            <Wiper>
                                <img src="/images/projects.png" className="w-100 h-70"></img>
                            </Wiper>
                                :
                                <img src="/images/projects.png" className="w-100 h-70"></img>
                    }
                </div>
                <div className="col-span-2">
                    <Card order={2} set={(value)=>setOrdering(value)} wavyText="projects" icon={faListCheck}>
                        <Glass menu="projects">
                            <div className="p-2 rounded-lg leading-7">
                                Front-End Developer passionate about creating clean, performant, and user-friendly web applications.<br/>
                                Skilled in React, Angular, and TypeScript, currently exploring Next.js and TailwindCSS animations to craft modern and accessible web experiences.
                            </div>
                        </Glass>
                    </Card>
                </div>
                <div className="col-span-2">
                    <Card order={3} set={(value)=>setOrdering(value)} wavyText="contact" icon={faEnvelopeCircleCheck}>
                        <Glass menu="contact">
                            <div className="p-2 rounded-lg leading-7">
                                Front-End Developer passionate about creating clean, performant, and user-friendly web applications.<br/>
                                Skilled in React, Angular, and TypeScript, currently exploring Next.js and TailwindCSS animations to craft modern and accessible web experiences.
                            </div>
                        </Glass>
                    </Card>
                </div>
                <div className="col-span-1">
                    {
                        order == 3 ? 
                            <Wiper>
                                <img src="/images/contacts.png" className="w-100 h-full"></img>
                            </Wiper>
                                :
                                <img src="/images/contacts.png" className="w-100 h-full"></img>
                    }
                    
                </div>
            </div>
        </div>
        
    )
};