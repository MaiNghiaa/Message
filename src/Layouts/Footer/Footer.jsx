import React from 'react'

export default function Footer() {
    return (
        <div>
            <footer className="flex w-full flex-col items-center shadow-md">
                <div className="flex w-full flex-col items-center justify-between">
                    <div className="flex w-full flex-col items-center justify-center bg-[#12141D]">
                        <div className="flex w-full items-center justify-center gap-10 py-8">
                            <i className="bx bxl-facebook-circle text-2xl text-white" />
                            <i className="bx bxl-twitter text-2xl text-white" />
                            <i className="bx bxl-github text-2xl text-white" />
                            <i className="bx bxl-linkedin-square text-2xl text-white" />
                        </div>
                        <div className="flex w-full items-center justify-center gap-10 py-6">
                            <a href="#" className="py-1 text-sm text-white hover:underline xl:text-sm 2xl:text-xl">Home
                            </a>
                            <a href="#" className="py-1 text-sm text-white hover:underline xl:text-sm 2xl:text-xl">About
                            </a>
                            <a href="#" className="py-1 text-sm text-white hover:underline xl:text-sm 2xl:text-xl">Demo</a>
                            <a href="#" className="py-1 text-sm text-white hover:underline xl:text-sm 2xl:text-xl">Contact</a>
                        </div>
                    </div>
                    <div className="flex w-full items-center justify-center gap-8 bg-black py-6">
                        <p className="text-xs text-white xl:text-sm 2xl:text-xl">
                            Copyright © 2025; Developed by Vuong Binh
                        </p>
                    </div>
                </div>
            </footer>

        </div>

    )
}
