// import AboutUs1 from '@/assets/aboutus1.png'
// import AboutUs2 from '@/assets/aboutus2.png'

const AboutUs = () => {
    return (

        <div className="flex flex-col items-center min-h-[70vh] p-4">
            <h1 className='text-3xl text-center pt-10'>ABOUT US</h1>
            <div className='flex items-center justify-center pt-4'>
                <hr className=" bg-neutral h-0.5 border-none w-[90vw]"></hr>
            </div>
            <div className=" w-[70%]">
                {/* <h1 className="text-4xl font-bold text-gray-800 mb-4">About US</h1> */}
                <p className=" mb-8 text-xl">
                    NYX Ventures is a multi-stage venture capital firm, dedicated to empower AI startups/companies.
                    NYX Ventures is dedicated to being the premier early partner for trailblazing AI startups. We specialize in making our first investments at critical early stages—Pre-Seed, Seed, or Series A, but we also empower companies through Series B to pre-IPO. As a firm that prioritizes AI-first companies, we select our partnerships with care, invest deeply, and relentlessly pursue excellence.
                </p>
            </div>
            {/* <div className="flex flex-col items-center justify-center gap-4">
                <img
                    src={AboutUs1} // 替换为你的图片路径
                    className="w-[70%] h-auto rounded-lg shadow-lg"
                />
                <div className="text-center mb-8">
                    <p className="">
                        stable returns over the past 6 years
                    </p>
                </div>
                <img
                    src={AboutUs2} // 替换为你的图片路径
                    className="w-[70%] h-auto rounded-lg shadow-lg"
                />
                <div className="text-center mb-8">
                    <p className="">
                        Successfully seized opportunities at each paradigm shift
                    </p>
                </div>
            </div> */}

        </div>

    );
};

export default AboutUs;