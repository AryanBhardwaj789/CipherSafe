import Image from 'next/image';
import React from 'react';
import { FaLongArrowAltRight } from "react-icons/fa";
import user1 from '/public/images/user-1.png';
import user2 from '/public/images/user-2.png';
import user3 from '/public/images/user-3.png';
import home from '/public/images/home.jpeg';

const Homepage = () => {
    return (
        <>
            <section className="flex items-center mb-20 justify-between max-[1100px]:justify-center flex-col-reverse md:flex-row">
                <div className="flex flex-col justify-center mt-[200px] max-[1100px]:mt-[80px] max-[600px]:mt-[40px] px-4">
                    <h1 className="text-6xl font-semibold max-[1400px]:text-5xl max-[1100px]:text-center max-[600px]:text-3xl">
                        Save, organize and <br className="hidden max-[600px]:block" /> create your passwords
                    </h1>
                    <div className="flex items-center mt-2 max-[600px]:justify-center">
                        <div className="flex items-center">
                            <div className="h-1 bg-secundary w-[200px] max-[1400px]:w-[150px] max-[600px]:w-[60px]"></div>
                        </div>
                        <span className="mainStyle_securityName__QEdM8 text-6xl font-semibold bg-clip-text max-[1400px]:text-5xl max-[600px]:text-3xl flex items-center">
                            <FaLongArrowAltRight className="mr-2" /> with security
                        </span>
                    </div>
                    <p className="font-regular text-purple max-w-xl mt-4 text-lg max-[1400px]:text-base max-[1100px]:text-center max-[600px]:text-sm px-4">
                        With the CipherSafe you can create and save your random password, organize with dood title and find them quickly with security.
                    </p>
                </div>
                <Image className="mr-20 rounded-xl max-w-xs" src={home} alt="Home Illustration" width={450} priority />
            </section>

            <div className="flex flex-wrap justify-center">
                <article className="bg-violet-200 border-2 border-gray-600 rounded-xl w-full md:w-2/5 m-4 p-8 flex flex-col text-center items-center">
                    <Image className="mb-2" src={user1} alt="Jane Doe" width={300} priority />
                    <p className="mb-2"><span className="font-rubik font-semibold text-xl">Jane Doe</span></p>
                    <p><span className="font-rubik font-semibold text-md tracking-tight">&quot;Password-Manager has revolutionized how I manage my passwords. It&apos;s secure and so easy to use!&quot;</span></p>
                </article>
                <article className="bg-emerald-200 border-2 border-gray-600 rounded-xl w-full md:w-2/5 m-4 p-8 flex flex-col text-center items-center">
                    <Image className="mb-2" src={user2} alt="Emma Johnson" width={300} priority />
                    <p className="mb-2"><span className="font-rubik font-semibold text-xl">Emma Johnson</span></p>
                    <p><span className="font-rubik font-semibold text-md tracking-tight">&quot;Being able to access my passwords from any device is a game-changer. Highly recommend!&quot;</span></p>
                </article>
                <article className="bg-rose-200 border-2 border-gray-600 rounded-xl w-full md:w-2/5 m-4 p-8 flex flex-col text-center items-center">
                    <Image className="mb-2" src={user3} alt="John Smith" width={300} priority />
                    <p className="mb-2"><span className="font-rubik font-semibold text-xl">John Smith</span></p>
                    <p><span className="font-rubik font-semibold text-md tracking-tight">&quot;I love the password generation feature. It gives me peace of mind knowing my accounts are secure.&quot;</span></p>
                </article>
            </div>
        </>
    );
}

export default Homepage;
