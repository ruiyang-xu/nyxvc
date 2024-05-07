// import AboutUs1 from '@/assets/aboutus1.png'
// import AboutUs2 from '@/assets/aboutus2.png'

const AboutUs = () => {
    return (
        <div className="flex flex-col items-center min-h-[0vh] p-4">
            <h1 className='text-3xl text-center pt-10'>ABOUT US</h1>
            <div className='flex items-center justify-center pt-4'>
                <hr className="bg-neutral h-0.5 border-none w-[90vw]"></hr>
            </div>
            <article className="lg:px-80 pt-10">
                <h1 className="text-xl font-bold">
                    We Invest from Seed to Growth, Artificial General Intelligence is our focus
                </h1>
                <p className="pt-4">
                    NYX Ventures is a multi-stage venture capital firm, dedicated to empowering AGI startups/companies. NYX Ventures is not only committed to being the premier early partner for trailblazing AGI startups, confident in making our first investments at critical early stages—Pre-Seed or Seed, but we also empower companies through Series A to pre-IPO.
                </p>
                <h1 className="text-xl pt-10 font-bold">
                    Though AGI is hard, we are committed for the long term
                </h1>
                <p className="pt-4">
                    We understand that failures are part of the journey, not the end of the road. Embrace rapid iteration: test boldly, learn quickly, and evolve. We are committed to backing founders who navigate challenges over the long haul, transforming every failure into a stepping stone toward our shared vision.
                </p>
                <h1 className="text-xl pt-10 font-bold">
                    A bit more about NYX Ventures
                </h1>
                <p className="pt-4">
                    NYX Ventures was started in early 2024, though we are still a very young firm, we have partnered closely with people who have the ability and the authority to redefine their category. The collective wisdom/achievements are invaluable to us and founders we backed.
                </p>
                <div className="flex flex-col items-center justify-center gap-4 pt-8 lg:flex-row lg:gap-40 lg:items-center lg:justify-center">
                    {
                        [
                            { key: "100+", value: "Total investments" },
                            { key: `$3bn`, value: "Total money deployed and advised" },
                            { key: "30+", value: "Companies went IPO or being acquired" },
                        ].map((item, index) => (
                            <div key={index} className="card bg-neutral p-10 w-full h-full lg:min-w-56 lg:min-h-48 flex flex-col items-center justify-center">
                                <h1 className="text-4xl font-bold text-center">{item.key}</h1>
                                <p className="pt-4 text-center">{item.value}</p>
                            </div>
                        ))
                    }
                </div>
                <p className="pt-4 text-sm" > * The number includes the performance of advised and partner entities.</p>
            </article>
        </div>
    );
};

export default AboutUs;
