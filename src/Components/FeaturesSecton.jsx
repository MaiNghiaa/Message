import React from 'react'

export default function FeaturesSecton() {
    return (
        <section className="features">
            <p className="font-semibold text-center text-xl py-20">Features for a better experience</p>
            <div className="w-full pb-20 flex flex-col items-center gap-10 md:flex-row md:justify-center md:gap-10 md:px-20  ">
                {/* camera */}
                <div className="flex flex-col items-center gap-5 md:flex-row md: ">
                    <div>
                        <svg className="size-12" width={60} height={60} viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_2_1178)">
                                <circle opacity="0.2" cx={30} cy={30} r={30} fill="#FD6003" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M19 37C18.4696 37 17.9609 36.7893 17.5858 36.4142C17.2107 36.0391 17 35.5304 17 35V25C17 24.4696 17.2107 23.9609 17.5858 23.5858C17.9609 23.2107 18.4696 23 19 23H32C32.5304 23 33.0391 23.2107 33.4142 23.5858C33.7893 23.9609 34 24.4696 34 25V35C34 35.5304 33.7893 36.0391 33.4142 36.4142C33.0391 36.7893 32.5304 37 32 37H19ZM36 33L40.445 35.964C40.5957 36.0645 40.7708 36.1222 40.9517 36.131C41.1326 36.1397 41.3125 36.0992 41.4722 36.0136C41.6319 35.9281 41.7653 35.8008 41.8583 35.6454C41.9512 35.4899 42.0002 35.3121 42 35.131V24.869C42 24.688 41.9509 24.5103 41.8579 24.355C41.7648 24.1997 41.6314 24.0725 41.4718 23.9871C41.3121 23.9017 41.1323 23.8612 40.9515 23.87C40.7707 23.8788 40.5956 23.9365 40.445 24.037L36 27V33Z" fill="#FD6003" />
                            </g>
                            <defs>
                                <clipPath id="clip0_2_1178">
                                    <rect width={60} height={60} fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                    <div className="flex flex-col items-center gap-5">
                        <p className="font-medium text-center">Video Messaging</p>
                        <p className="text-center px-8  line-clamp-2 ">This software is very easy for you to manage. You can use it as you wish.</p>
                    </div>
                </div>
                {/* clock */}
                <div className=" flex flex-col items-center gap-5 md:flex-row  ">
                    <div>
                        <svg className="size-12" width={60} height={60} viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_2_1201)">
                                <circle opacity="0.2" cx={30} cy={30} r={30} fill="#4DA44E" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M31.4671 22.8962C32.0359 22.8962 32.4152 22.517 32.4152 21.9481C32.4152 21.3792 32.0359 21 31.4671 21H27.6747C27.1058 21 26.7266 21.3792 26.7266 21.9481C26.7266 22.517 27.1058 22.8962 27.6747 22.8962H31.4671ZM36.3972 25.9301C36.7765 25.5509 36.7765 24.982 36.3972 24.6028C36.018 24.2236 35.4491 24.2236 35.0699 24.6028L34.2166 25.4561C31.4671 23.2754 27.6747 23.2754 24.9252 25.4561L24.0719 24.6028C23.6926 24.2236 23.1238 24.2236 22.7445 24.6028C22.3653 24.982 22.3653 25.5509 22.7445 25.9301L23.5978 26.7834C21.0379 30.1018 21.6068 34.8423 24.9252 37.4022C28.2435 39.9621 32.984 39.3932 35.5439 36.0748C37.7246 33.3253 37.7246 29.5329 35.5439 26.7834L36.3972 25.9301ZM29.5709 33.3253C28.528 33.3253 27.6747 32.472 27.6747 31.4291C27.6747 30.7655 28.0539 30.1018 28.6228 29.8174V27.6367C28.6228 27.0679 29.002 26.6886 29.5709 26.6886C30.1397 26.6886 30.519 27.0679 30.519 27.6367V29.8174C31.4671 30.2914 31.7515 31.4291 31.1826 32.3772C30.8034 32.9461 30.2345 33.3253 29.5709 33.3253Z" fill="#4DA44E" />
                            </g>
                            <defs>
                                <clipPath id="clip0_2_1201">
                                    <rect width={60} height={60} fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                    <div className="flex flex-col items-center gap-5">
                        <p className="font-medium  text-center">Save your time</p>
                        <p className="text-center px-8  line-clamp-2 ">This software is very easy for you to manage. You can use it as you wish.</p>
                    </div>
                </div>
                {/* pad lock */}
                <div className=" flex flex-col items-center gap-5 md:flex-row   ">
                    <div>
                        <svg className="size-12" width={60} height={60} viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_2_1189)">
                                <circle opacity="0.2" cx={30} cy={30} r={30} fill="#FB8E0B" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M36.9862 28.685L39 26C36.4913 24.1175 33.375 23 30 23C26.625 23 23.5087 24.1175 21 26L30 38L32.625 34.5012V32.375C32.625 30.305 34.305 28.625 36.375 28.625C36.585 28.625 36.7837 28.655 36.9862 28.685ZM38.25 32.375C38.25 31.34 37.41 30.5 36.375 30.5C35.34 30.5 34.5 31.34 34.5 32.375V33.5C34.0875 33.5 33.75 33.8375 33.75 34.25V37.25C33.75 37.6625 34.0875 38 34.5 38H38.25C38.6625 38 39 37.6625 39 37.25V34.25C39 33.8375 38.6625 33.5 38.25 33.5V32.375ZM35.25 33.5V32.375C35.25 31.7525 35.7525 31.25 36.375 31.25C36.9975 31.25 37.5 31.7525 37.5 32.375V33.5H35.25Z" fill="#FB8E0B" />
                            </g>
                            <defs>
                                <clipPath id="clip0_2_1189">
                                    <rect width={60} height={60} fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                    <div className="flex flex-col items-center gap-5">
                        <p className="font-medium  text-center">Keep safe &amp; private</p>
                        <p className="text-center px-8  line-clamp-2 ">This software is very easy for you to manage. You can use it as you wish.</p>
                    </div>
                </div>
            </div>
            <div className="w-full flex flex-col bg-[#F8F8FA] py-8 md:flex-row md:gap-10 md:px-10">
                {/* Image Section */}
                <img className="w-4/5 max-w-sm mx-auto md:w-1/2 md:max-w-md" src="../public/resources/woman-with-video-call.png" alt />
                {/* Text Section */}
                <div className="w-full md:w-1/2 flex flex-col items-center md:items-start gap-5">
                    <p className="font-semibold px-8  text-center md:text-left text-xl md:text-2xl py-5">
                        Meet your customers, with live video chat
                    </p>
                    <div className="w-full flex flex-col gap-5">
                        <p className="line-clamp-3 px-8  text-left ">
                            Proin faucibus nibh et sagittis a. Lacinia purus ac amet pellentesque aliquam enim.
                        </p>
                        <p className="line-clamp-3 px-8  text-left">
                            Get paychecks up to two days early. Get a $20 bonus when you receive qualifying direct deposits.
                        </p>
                    </div>
                </div>
            </div>
            <div className="w-full flex flex-col py-8 md:flex-row-reverse md:gap-10 md:px-10">
                {/* Image Section */}
                <img className="w-4/5 max-w-sm mx-auto md:w-1/2 md:max-w-md" src="../public/resources/chat-demo.png" alt />
                {/* Text Section */}
                <div className="w-full md:w-1/2 flex flex-col items-center md:items-start gap-5">
                    <p className="font-semibold text-center px-8  md:text-left text-xl md:text-2xl py-5">
                        Start selling directly inside conversations
                    </p>
                    <div className="flex flex-col gap-10">
                        <p className="line-clamp-4 px-8 text-left md:text-left ">
                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered all injected humour or randomised words which don't look even slightly believable.
                        </p>
                        <button className="self-center  mt-6 bg-[#FB8E0B] text-white px-3 py-3 rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2">
                            Start Chatting Now
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 inline ml-2 font-semibold">
                                <path fillRule="evenodd" d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}
