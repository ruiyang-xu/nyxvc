import React, { useState } from 'react';
import Pixocial from "@/assets/Pixocial.png";
import FastMossLogo from "@/assets/FastMoss-logo.png";
import PlatoXLogo from '@/assets/PlatoX-logo.png'
import LotusLogo from "@/assets/lotus-logo.svg"
import TetramemLogo from '@/assets/Tetramem-logo.png'
import FastmossUser from "@/assets/user/Fastmoss.png"
import LotusUser from '@/assets/user/Lotus.png'
import TetramemUser from '@/assets/user/Tetramem.png'
import PlatoXUser from '@/assets/user/Platox.png'
import PixocialUser from '@/assets/user/Pixocial.png'
import PikaLogo from '@/assets/pikaLogo.jpg'
import PikaUser from '@/assets/user/pikauser.png'
import Armory from '@/assets/Armory.jpg'
import ArmoryUser from '@/assets/user/Armory.jpg'
import BillionToOne from '@/assets/BillionToOne.png'
import BillionToOneUser from '@/assets/user/BillionToOne.png'
import MightyBuilding from '@/assets/MightyBuilding.png'
import MightyBuildingUser from '@/assets/user/MightyBuilding.png'
import JasperAI from '@/assets/JasperAI.png'
import JasperAIUser from '@/assets/user/JasperAI.png'
import Rippling from '@/assets/Rippling.png'
import RipplingUser from '@/assets/user/Rippling.png'
import Supergoop from '@/assets/Supergoop.jpg'  // 有白底背景比没背景好看
import SupergoopUser from '@/assets/user/Supergoop.jpg'
import Frontage from '@/assets/Frontage.jpg'
import FrontageUser from '@/assets/user/Frontage.jpg'
import FiberGlobal from '@/assets/FiberGlobal.jpg'
import FiberGlobalUser from '@/assets/user/FiberGlobal.jpg'
import Cresta from '@/assets/Cresta.png'
import CrestaUser from '@/assets/user/Cresta.jpg'


// 定义公司信息类型
type Company = {
    name: string;
    about: string;
    link: string;
    logo: string | React.ReactNode
    userLogo?: string | React.ReactNode
    description?: string
};

// 公司信息数组
const companies: Company[] = [
    {
        name: 'Lotus(IPO)',
        about: 'Lotus is a premium electric car manufacture, the company is listed in NASDAQ (Ticker: LOT)',
        link: 'https://www.lotuscars.com/',
        logo: <img src={LotusLogo} className="max-w-xs max-h-40 min-h-40 object-contain" />,  // 请替换为实际的logo路径
        userLogo: <img src={LotusUser} className="max-w-xs max-h-40 min-h-40 object-contain" style={{
        boxShadow: 'inset 3px 3px 0 0 rgba(0, 0, 0, 0), inset -3px -3px 0 0 rgba(0, 0, 0, 0)',
        clipPath: 'inset(3px 3px 3px 3px)'
    }} />,  // 请替换为实际的logo路径
        description: "Colin Chapman"
    },
    {
        name: 'Tetramem',
        about: 'TetraMem is poised to deliver the industry’s most disruptive in-memory computing (IMC) technology for edge applications.',
        link: 'https://www.tetramem.com/',
        logo: <img src={TetramemLogo} className="max-w-xs max-h-40 min-h-40 object-contain" />,  // 请替换为实际的logo路径
        userLogo: <img src={TetramemUser} className="max-w-xs max-h-40 min-h-40 object-contain" style={{
        boxShadow: 'inset 3px 3px 0 0 rgba(0, 0, 0, 0), inset -3px -3px 0 0 rgba(0, 0, 0, 0)',
        clipPath: 'inset(3px 3px 3px 3px)'
    }} />,  // 请替换为实际的logo路径
        description: "Dr. Glenn Ge"
    },
    {
        name: 'Pixocial',
        about: 'Pixocial’s mission is to democratize AI technology, making sophisticated digital art accessible to all.',
        link: 'https://pixocial.com/',
        logo: <img src={Pixocial} className="max-w-xs max-h-40 min-h-40 object-contain" />, // 请替换为实际的logo路径
        userLogo: < img src={PixocialUser} className="max-w-xs max-h-40 min-h-40 object-contain" />, // 请替换为实际的logo路径
        description: "Xinhong Wu"

    },
    {
        name: 'PlatoX',
        about: 'PlatoX’s mission is to become everyone’s AI assistant.',
        link: 'https://platox.ai/',
        logo: <img src={PlatoXLogo} className="max-w-xs max-h-40 min-h-40 object-contain" />, // 请替换为实际的logo路径
        userLogo: <img src={PlatoXUser} className="max-w-xs max-h-40 min-h-40 object-contain" style={{
        boxShadow: 'inset 3px 3px 0 0 rgba(0, 0, 0, 0), inset -3px -3px 0 0 rgba(0, 0, 0, 0)',
        clipPath: 'inset(3px 3px 3px 3px)'
    }} />,  // 请替换为实际的logo路径
        description: "Hua Mao"
    },
    {
        name: 'FastMoss',
        about: 'FastMoss is a leading data analytics platform with focus on short videos.',
        link: 'https://fastmoss.com/',
        logo: <img src={FastMossLogo} className="max-w-xs max-h-40 min-h-40 object-contain" />, // 请替换为实际的logo路径
        userLogo: <img src={FastmossUser} className="max-w-xs max-h-40 min-h-40 object-contain" style={{
        boxShadow: 'inset 3px 3px 0 0 rgba(0, 0, 0, 0), inset -3px -3px 0 0 rgba(0, 0, 0, 0)',
        clipPath: 'inset(3px 3px 3px 3px)'
    }} />,  // 请替换为实际的logo路径
        description: "Wenlu Shi"
    },

    {
        name: "Armory",
        about: "Open-source continuous delivery platform for Spinnaker, Armory helps hyper-growth startups increase enterprise value by optimizing their software delivery velocity.",
        link: "https://www.harness.io/products/continuous-delivery",  // TODO
        logo: <img src={Armory} className="max-w-xs max-h-40 min-h-40 object-contain" />,  // 请替换为实际的logo路径
        userLogo: <img src={ArmoryUser} className="max-w-xs max-h-40 min-h-40 object-contain" style={{
        boxShadow: 'inset 3px 3px 0 0 rgba(0, 0, 0, 0), inset -3px -3px 0 0 rgba(0, 0, 0, 0)',
        clipPath: 'inset(3px 3px 3px 3px)'
    }} />,  // 请替换为实际的logo路径
        description: "Jim Douglas"
    },
    {
        name: "BillionToOne",
        about: "Accurate, efficient, and accessible molecular diagnostics.",
        link: "https://billiontoone.com", // TODO
        logo: <img src={BillionToOne} className="max-w-xs max-h-40 min-h-40 object-contain" />,  // 请替换为实际的logo路径
        userLogo: <img src={BillionToOneUser} className="max-w-xs max-h-40 min-h-40 object-contain" style={{
        boxShadow: 'inset 3px 3px 0 0 rgba(0, 0, 0, 0), inset -3px -3px 0 0 rgba(0, 0, 0, 0)',
        clipPath: 'inset(3px 3px 3px 3px)'
    }} />,  // 请替换为实际的logo路径
        description: "Oguzhan Atay"
    },
    {
        name: "MightyBuilding",
        about: "3D printing and robotic automation for construction.",
        link: "https://www.mightybuildings.com/",
        logo: <img src={MightyBuilding} className="max-w-xs max-h-40 min-h-40 object-contain" />,  // 请替换为实际的logo路径
        userLogo: <img src={MightyBuildingUser} className="max-w-xs max-h-40 min-h-40 object-contain" style={{
        boxShadow: 'inset 3px 3px 0 0 rgba(0, 0, 0, 0), inset -3px -3px 0 0 rgba(0, 0, 0, 0)',
        clipPath: 'inset(3px 3px 3px 3px)'
    }} />,  // 请替换为实际的logo路径
        description: "Scott Gebicke"
    },
    {
        name: "JasperAI",
        about: "Enterprise-grade AI tools to help marketing teams achieve both speed and performance.",
        link: "https://www.jasper.ai/",
        logo: <img src={JasperAI} className="max-w-xs max-h-40 min-h-40 object-contain" />,  // 请替换为实际的logo路径
        userLogo: <img src={JasperAIUser} className="max-w-xs max-h-40 min-h-40 object-contain" style={{
        boxShadow: 'inset 3px 3px 0 0 rgba(0, 0, 0, 0), inset -3px -3px 0 0 rgba(0, 0, 0, 0)',
        clipPath: 'inset(3px 3px 3px 3px)'
    }} />,  // 请替换为实际的logo路径
        description: "Dave Rogenmoser"
    },
    {
        name: "Rippling",
        about: "Rippling is the workforce management platform that unifies HR, IT, finance, and more. Built on a single source of truth for employee data and integrated with 500+ apps, Rippling allows businesses to execute more efficiently.",
        link: "https://www.rippling.com/",
        logo: <img src={Rippling} className="max-w-xs max-h-40 min-h-40 object-contain" />,  // 请替换为实际的logo路径
        userLogo: <img src={RipplingUser} className="max-w-xs max-h-40 min-h-40 object-contain" style={{
        boxShadow: 'inset 3px 3px 0 0 rgba(0, 0, 0, 0), inset -3px -3px 0 0 rgba(0, 0, 0, 0)',
        clipPath: 'inset(3px 3px 3px 3px)'
    }} />,  // 请替换为实际的logo路径
        description: "Parker Conrad"
    },
    {
        name: "Supergoop",
        about: "Embarked on a mission to make sunscreen an everyday necessity after a friend was diagnosed with skin cancer. High-performance SPF for all skin tones, types and activities — including daily skincare, beauty and suncare solutions for face and body.",
        link: "https://supergoop.com/",
        logo: <img src={Supergoop} className="max-w-xs max-h-40 min-h-40 object-contain" />,  // 请替换为实际的logo路径
        userLogo: <img src={SupergoopUser} className="max-w-xs max-h-40 min-h-40 object-contain" style={{
        boxShadow: 'inset 3px 3px 0 0 rgba(0, 0, 0, 0), inset -3px -3px 0 0 rgba(0, 0, 0, 0)',
        clipPath: 'inset(3px 3px 3px 3px)'
    }} />,  // 请替换为实际的logo路径
        description: "Holly Thaggard"
    },
    {
        name: "Frontage(IPO)",
        about: "Offered extensive drug metabolism and pharmacokinetic capabilities for new chemical entities and compounds in development.",
        link: "https://www.frontagelab.com/",
        logo: <img src={Frontage} className="max-w-xs max-h-40 min-h-40 object-contain" />,  // 请替换为实际的logo路径
        userLogo: <img src={FrontageUser} className="max-w-xs max-h-40 min-h-40 object-contain" style={{
        boxShadow: 'inset 3px 3px 0 0 rgba(0, 0, 0, 0), inset -3px -3px 0 0 rgba(0, 0, 0, 0)',
        clipPath: 'inset(3px 3px 3px 3px)'
    }} />,  // 请替换为实际的logo路径
        description: "Abdul Mutlib"
    },
    {
        name: "FiberGlobal",
        about: "Climate technology company focused on advancing building materials. Our mission is to reclaim abundant global waste streams to create sustainable, high performing building materials.",
        link: "https://www.fiberglobal.com/",
        logo: <img src={FiberGlobal} className="max-w-xs max-h-40 min-h-40 object-contain" />,  // 请替换为实际的logo路径
        userLogo: <img src={FiberGlobalUser} className="max-w-xs max-h-40 min-h-40 object-contain" style={{
        boxShadow: 'inset 3px 3px 0 0 rgba(0, 0, 0, 0), inset -3px -3px 0 0 rgba(0, 0, 0, 0)',
        clipPath: 'inset(3px 3px 3px 3px)'
    }} />,  // 请替换为实际的logo路径
        description: "KC McCreery"
    },
    {
        name: "Cresta",
        about: "Cresta provides real-time coaching for call centers. By learning from the experts on a team, Cresta’s AI trains sales and service representatives to make every conversation with customers count.",
        link: "https://cresta.com/",
        logo: <img src={Cresta} className="max-w-xs max-h-40 min-h-40 object-contain" />,  // 请替换为实际的logo路径
        userLogo: <img src={CrestaUser} className="max-w-xs max-h-40 min-h-40 object-contain" style={{
        boxShadow: 'inset 6px 6px 0 0 rgba(0, 0, 0, 0), inset -6px -6px 0 0 rgba(0, 0, 0, 0)',
        clipPath: 'inset(6px 6px 6px 6px)'
    }} />,  // 请替换为实际的logo路径
        description: "Ping Wu"
    },
    {
        name: "Pika Lab",
        about: "An AI video platform that is redesigning the video-making and editing experience.",
        link: "https://www.pika.art/",
        logo: <img src={PikaLogo} className="max-w-xs max-h-40 min-h-40 object-contain" />,  // 请替换为实际的logo路径
        userLogo: <img src={PikaUser} className="max-w-xs max-h-40 min-h-40 object-contain" style={{
        boxShadow: 'inset 3px 3px 0 0 rgba(0, 0, 0, 0), inset -3px -3px 0 0 rgba(0, 0, 0, 0)',
        clipPath: 'inset(3px 3px 3px 3px)'
    }} />,  // 请替换为实际的logo路径
        description: "Demi Guo"
    },

];


const Portfolio = (company: Company) => {
    // 创建一个名为showDescription的状态变量，初始值为false
    const [showDescription, setShowDescription] = useState(false);

    // 定义函数来处理鼠标悬停和离开事件
    const handleMouseEnter = () => {
        setShowDescription(true);
    };

    const handleMouseLeave = () => {
        setShowDescription(false);
    };


    return (
        <div className="card w-96 h-[480px] shadow-x  bg-base-300 text-base "
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>
            {
                showDescription ? (
                    <div key={company.name} className="card w-96 shadow-x  bg-base-300 text-base">
                        <figure className="px-10 pt-10 flex justify-center">
                            {company.userLogo}
                        </figure>
                        <div className="card-body items-center text-center">
                            <a className="card-title link" href={company.link} target="_blank" rel="noopener noreferrer">{company.description}</a>
                            <p>{company.about}</p>
                        </div>
                    </div>
                ) : (
                    <div key={company.name} className="card w-96 shadow-x  bg-base-300 text-base">
                        <figure className="px-10 pt-10 flex justify-center">
                            {company.logo}
                        </figure>
                        <div className="card-body items-center text-center">
                            <a className="card-title link" href={company.link} target="_blank" rel="noopener noreferrer">{company.name}</a>
                            <p>{company.about}</p>
                        </div>
                    </div>
                )
            }
        </div >
    )
}

const Portfolios = () => {
    return (
        <div id='PORTFOLIO' className="pb-10">
            <h1 className='text-3xl text-center pt-10'>PORTFOLIO</h1>
            <div className='flex items-center justify-center pt-4'>
                <hr className="bg-neutral h-0.5 border-none w-[90vw]"></hr>
            </div>
            <div className="flex flex-wrap-reverse justify-center gap-20 pt-10">
                {companies.map((company) => (
                    <Portfolio {...company} key={company.name} />
                ))}
            </div>
        </div>
    );
};

export default Portfolios;
