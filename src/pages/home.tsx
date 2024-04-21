
// import RichardChen from "@/assets/RichardChen.jpg";
// import RichardChenBg1 from "@/assets/RichardChenBg1.png";
// import RichardChenBg2 from "@/assets/RichardChenBg2.jpg";
import BG from "@/assets/bg.jpg"


import Portfolios from "./portfolios";
import Team from "./team";

const Hero = () => {
    return (
        <div>
            <div className="hero min-h-[80vh]" style={{ backgroundImage: `url(${BG})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="">
                        <h1 className="mb-5 text-6xl font-bold">What future are you building?</h1>
                        <div className=" text-2xl">
                            <p>NYX Ventures is a multi-stage venture capital firm, dedicated to empower visionary founders</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


const Home = () => {
    return (
        <div>

            <Hero />

            {/* <AboutUs /> */}
            <Portfolios />
            <Team />
        </div>
    );
}

export default Home;