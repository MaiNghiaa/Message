import React from 'react'

export default function ReviewSection() {
    return (
        <section className="bg-[#FB8E0B] py-10 review">
            <div className="w-full">
                <p className="text-2xl text-center pb-8 px-6  text-white font-bold">Our blessed client said this about us 😍</p>
                <div className="flex flex-col items-center md:flex-row md:justify-around">
                    <div className="w-3/4 md:w-1/3">
                        <div className=" flex flex-col gap-4 rounded-md bg-white  p-6">
                            <p className="font-semibold text-center text-[#FD6003]">“Incredible Experience”</p>
                            <p className="font-light text-center text-[#383A47]">We had an incredible experience working with Mixland and
                                were impressed they made such a big difference in only three
                                weeks. Our team is so grateful for the wonderful improvements
                                they made and their ability to get familiar with the concept
                                so quickly.</p>
                        </div>
                        <div className="flex flex-row mt-6 justify-center">
                            <img className="w-16" src="../public/resources/african-woman.png" alt />
                            <div className="flex flex-col justify-evenly pl-4">
                                <p className="text-white font-medium">Wade Warren</p>
                                <p className="text-white font-light">CEO of ABC Coporation</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-3/4 mt-8 md:w-1/3 md:mt-0 ">
                        <div className=" flex flex-col gap-4 bg-white p-6 rounded-md">
                            <p className="font-semibold text-center text-[#FD6003]">“Dependable, Responsive, Professional”</p>
                            <p className="font-light text-center text-[#383A47]">Fermin Apps has collaborated with Mixland team for several projects such as Photo Sharing Apps and Custom Social Networking Apps. The experience has been pleasant, professional and exceeding our expectations. The team is always thinking beyond.</p>
                        </div>
                        <div className="flex flex-row mt-6 justify-center">
                            <img className="w-16" src="../public/resources/sitting-woman.png" alt />
                            <div className="flex flex-col justify-evenly pl-4">
                                <p className="text-white font-medium">Esward Howard</p>
                                <p className="text-white font-light">Founder of CHAMELLIA</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
