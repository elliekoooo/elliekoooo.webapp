import { faEnvelopeCircleCheck, faListCheck, faStarOfLife } from '@fortawesome/free-solid-svg-icons';
import { Card } from '../component/card';
import { Glass } from '../component/glass';
import Wiper from '../motion/Wiper';
import { useState } from 'react';
import SlideIn from '../motion/SlideIn';
import SlideOut from '../motion/SlideOut';

export const Home = () => {
    const [order, setOrdering] = useState(0);

    return (
        <>
            <div className="grid grid-cols-3 grid-rows-3 gap-15">
                <div className="col-span-2 row-span-1">
                    <SlideIn>
                        <Card order={1} set={(value)=>setOrdering(value)} wavyText="about me" icon={faStarOfLife}>
                            <Glass menu="about">
                                <div className="p-2 rounded-lg leading-7">
                                    Front-End Developer passionate about creating clean, performant, and user-friendly web applications.<br/>
                                    Skilled in React, Angular, and TypeScript, currently exploring Next.js and TailwindCSS animations to craft modern and accessible web experiences......
                                </div>
                            </Glass>
                        </Card>
                    </SlideIn>
                </div>
                <div className="col-span-1 flex m-auto">
                    <SlideOut>
                        {
                                <Wiper active={order == 1}>
                                    <img src="/images/about.png" ></img>
                                </Wiper>
                        }
                    </SlideOut>
                </div>
                <div className="col-span-1 flex m-auto">
                    <SlideIn>
                        {
                                <Wiper active={order == 2}>
                                    <img src="/images/projects.png" ></img>
                                </Wiper>
                        }
                    </SlideIn>
                </div>
                <div className="col-span-2">
                    <SlideOut>
                        <Card order={2} set={(value)=>setOrdering(value)} wavyText="projects" icon={faListCheck}>
                            <Glass menu="projects">
                                <div className="p-2 rounded-lg leading-7">
                                    Front-End Developer passionate about creating clean, performant, and user-friendly web applications.<br/>
                                    Skilled in React, Angular, and TypeScript, currently exploring Next.js and TailwindCSS animations to craft modern and accessible web experiences.
                                </div>
                            </Glass>
                        </Card>
                    </SlideOut>
                </div>
                <div className="col-span-2">
                    <SlideIn>
                        <Card order={3} set={(value)=>setOrdering(value)} wavyText="contact" icon={faEnvelopeCircleCheck}>
                            <Glass menu="contact">
                                <div className="p-2 rounded-lg leading-7">
                                    Front-End Developer passionate about creating clean, performant, and user-friendly web applications.<br/>
                                    Skilled in React, Angular, and TypeScript, currently exploring Next.js and TailwindCSS animations to craft modern and accessible web experiences.
                                </div>
                            </Glass>
                        </Card>
                    </SlideIn>
                </div>
                <div className="col-span-1 flex m-auto">
                    <SlideOut>
                    {
                            <Wiper active={order == 3}>
                                <img src="/images/contacts.png" ></img>
                            </Wiper>
    
                    }
                    </SlideOut>
                </div>
            </div>
        </>
        
    )
};