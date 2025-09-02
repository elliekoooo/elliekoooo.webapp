import type { PropsWithChildren } from "react"

export const Glass = ({ children }: PropsWithChildren) => {
    return (
        <div className="relative group w-full max-w-xl rounded-xl overflow-hidden">
            <div className="p-6  leading-7">
                { children }
            </div>

            <div className="absolute inset-0 bg-white/15 ring-1 ring-white/20
                    opacity-0 group-hover:opacity-100 transition
                    duration-200 ease-out
                    backdrop-blur-md pointer-events-none">
            </div>
            <div
                className="absolute inset-0 grid place-items-center
                    opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0
                    transition duration-200 ease-out pointer-events-none">
                <div className="pointer-events-auto">
                <button
                    className="px-4 py-2 rounded-xl bg-white/90 text-zinc-900 hover:bg-white
                        shadow-md shadow-black/20 ring-1 ring-white/60 transition
                        focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400">
                    Click Me!
                </button>
                </div>
            </div>
        </div>
    )

}