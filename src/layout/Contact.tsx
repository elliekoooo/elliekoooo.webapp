import { useEffect, useRef } from "react";
import emailjs from 'emailjs-com';
import { useForm } from "react-hook-form";
import { ColorfulText } from "../motion/Colorful";
import PageTransition from "../motion/PageTransition";

export const Contact = () => {

    const form = useRef<HTMLFormElement>(null);
    const { register, handleSubmit, formState, reset } = useForm({ defaultValues: {email: "", from_name: "", message: ""}})

    const send = (e: any) => {
        e.preventDefault();        

        if(form.current) {
            emailjs.sendForm('service_4osi97k', 'template_zshm8hv', form.current, 'ftmlpBTiWpuaspQLy')
                .then((r) => {
                    console.log(r);
                }, (err) => {
                    console.log(err.text);
            });
        }
    }

    const {errors} = formState;

    useEffect(()=> {
        if(formState.isSubmitSuccessful){
            reset({from_name: "", email:"", message: ""});
        }
    }, [formState, reset]);

    return (
        <PageTransition>
            <div className="pb-5"><ColorfulText text="Get In Touch!"></ColorfulText></div>
            <form ref={form} onSubmit={handleSubmit(send)}>
                <div className="w-full max-w-sm group">
                    <div className="border-b border-black-300 py-2 my-3">
                        <input type="text" className="appearance-none border-none w-full text-gray-500 leading-tight focus:outline-none" placeholder="Your Name"
                            {...register("from_name", {
                                required: "Please fill out this field",
                                maxLength: {
                                    value: 30,
                                    message: "Your input exceeds the maximum allowed length."
                                }
                            })}/>  
                    </div>
                    <p className="text-xs text-red-500 italic">{errors.from_name?.message}</p>
                    <div className="border-b border-black-300 py-2 my-3">
                        <input type="email" className="appearance-none border-none w-full text-gray-500 leading-tight focus:outline-none" placeholder="Your Email"
                            {...register("email", {
                                required: "Please fill out this field",
                                pattern: {
                                    value: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i,
                                    message: "Please use the proper email format"
                                },
                                maxLength: {
                                    value: 60,
                                    message: "Your input exceeds the maximum allowed length."
                                }
                                })}/>
                    </div>
                    <p className="text-xs text-red-500 italic">{errors.email?.message}</p>
                    <div className="pt-5 border-b">
                        <textarea className="w-full pb-30 text-gray-500 leading-tight focus:outline-none" placeholder="Your Message"
                            {
                            ...register("message", {
                                required: "Please fill out this field",
                                maxLength: {
                                    value: 500,
                                    message: "Your input exceeds the maximum allowed length."
                                }
                            })
                        }>
                        </textarea>
                    </div>
                    <p className="text-xs text-red-500 italic">{errors.message?.message}</p>
                    <div className="flex my-5 justify-end">
                        <button type="submit" className="bg-yellow-500 hover:bg-black-500 hover:text-white hover:cursor-pointer py-1 px-2 rounded">SUBMIT</button>
                    </div>
                </div>
            </form>  
        </PageTransition>
    )
}