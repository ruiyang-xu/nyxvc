
import AlvinXiao from "@/assets/AlvinXiao.jpg";
import AlvinXiaoBg1 from "@/assets/AlvinXiaoBg1.jpg";
import AlvinXiaoBg2 from "@/assets/AlvinXiaoBg2.png";
import AlvinXiaoBg3 from "@/assets/AlvinXiaoBg3.png";
import AlvinXiaoBg4 from "@/assets/AlvinXiaoBg4.jpg";
import AlvinXiaoBg5 from "@/assets/AlvinXiaoBg5.png";

import NathanYu from "@/assets/NathanYu.jpg";
import NathanYuBg1 from "@/assets/NathanYuBg1.jpg";
import NathanYuBg2 from "@/assets/NathanYuBg2.png";
import NathanYuBg3 from "@/assets/NathanYuBg3.png";
import { useState } from 'react'; // 引入useState钩子

const User = (props: { userImag: string, userName: string, description: string, images: string[] }) => {
    // 创建一个名为showDescription的状态变量，初始值为false
    const [showDescription, setShowDescription] = useState(true);

    // 定义一个函数来切换showDescription的值
    const toggleDescription = () => {
        setShowDescription(!showDescription);
    };

    return (
        <div className="card w-96 h-[480px] shadow-x  bg-base-300 text-base cursor-pointer" onClick={toggleDescription}>
            {
                showDescription ? (
                    <div className="m-10">
                        {/* 为figure添加点击事件处理函数 */}
                        <figure onClick={toggleDescription}><img src={props.userImag} alt={props.userName} /></figure>
                        <div className="card-body flex justify-center items-center">
                            <h2 className="card-title">{props.userName}</h2>
                            <div className='flex justify-center flex-wrap rounded w-auto'>
                                {props.images.map((image, index) => {
                                    return (
                                        <img
                                            key={index}
                                            src={image}
                                            alt=""
                                            className='p-2 flex flex-wrap object-cover h-12 w-auto md:h-12 md:w-auto  transition-shadow duration-300 ease-in-out'
                                        />
                                    )
                                })}
                            </div>
                            {/* 根据showDescription的值来决定是否显示描述文本 */}

                        </div>
                    </div>
                ) : (
                    <p onClick={toggleDescription} className={`duration-300 m-10`} >{props.description}</p>
                )
            }
        </div >
    )
}

const Team = () => {
    return (
        <div className='pb-10' id="TEAM">
            <h1 className='text-3xl text-center pt-10'>TEAM</h1>
            <div className='flex items-center justify-center pt-4'>
                <hr className="bg-neutral h-0.5 border-none w-[90vw]"></hr>
            </div>
            <div className="flex flex-wrap-reverse justify-center gap-40 pt-10" >
                <User userImag={NathanYu} userName="Nathan Yu" description={`Nathan is ex Managing Partner at NIO Capital, and a Board Member of Lotus Automobiles. Prior to joining NIO Capital, Yu Ning served as vice president at Zhejiang Geely Holding Group, focusing on international mergers and acquisitions, also in charge of the Volvo alliance, Geely new energy vehicles, and the Lynk & Co. He successfully completed acquisitions including Proton Automobiles in Malaysia, and Lotus Cars in the UK. Mr. Yu Ning holds a Master's degree in Industrial Engineering from the University of Windsor, Canada, and PhD in Vehicle Engineering from China Agricultural University.`} images={[NathanYuBg1, NathanYuBg2, NathanYuBg3]} />
                <User userImag={AlvinXiao} userName="Alvin Xiao" description={`Alvin is currently undertaking a variety of roles: Director of Partnerships at an educational technology company and Advisor to the CEO of Seer.AI + other companies he invested in.`} images={[AlvinXiaoBg1, AlvinXiaoBg2, AlvinXiaoBg3, AlvinXiaoBg4, AlvinXiaoBg5]} />
                {/* <User userImag={RichardChen} userName="Richard Chen" description='Venture Partner' images={[RichardChenBg1, RichardChenBg2]} /> */}
            </div>
        </div>
    )
}

export default Team