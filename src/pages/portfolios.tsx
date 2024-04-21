import Pixocial from "@/assets/Pixocial.png";
import FastMossLogo from "@/assets/FastMoss-logo.png";
import PlatoXLogo from '@/assets/PlatoX-logo.png'
import React from 'react';
import LotusLogo from "@/assets/lotus-logo.svg"
import TetramemLogo from '@/assets/Tetramem-logo.png'

// 定义公司信息类型
type Company = {
    name: string;
    about: string;
    link: string;
    logo: string | React.ReactNode
};

// 公司信息数组
const companies: Company[] = [
    {
        name: 'Lotus',
        about: 'Lotus is a premium electric car manufacture, the company is listed in NASDAQ (Ticker: LOT)',
        link: 'https://www.lotuscars.com/',
        logo: <img src={LotusLogo} className="max-w-xs max-h-40 min-h-40 object-contain" />,  // 请替换为实际的logo路径
    },
    {
        name: 'Tetramem',
        about: 'TetraMem is poised to deliver the industry’s most disruptive in-memory computing (IMC) technology for edge applications.',
        link: 'https://www.tetramem.com/',
        logo: <img src={TetramemLogo} className="max-w-xs max-h-40 min-h-40 object-contain" />,  // 请替换为实际的logo路径
    },
    {
        name: 'Pixocial',
        about: 'Pixocial’s mission is to democratize AI technology, making sophisticated digital art accessible to all.',
        link: 'https://pixocial.com/',
        logo: <img src={Pixocial} className="max-w-xs max-h-40 min-h-40 object-contain" />, // 请替换为实际的logo路径
    },
    {
        name: 'PlatoX',
        about: 'PlatoX’s mission is to become everyone’s AI assistant.',
        link: 'https://platox.ai/',
        logo: <img src={PlatoXLogo} className="max-w-xs max-h-40 min-h-40 object-contain" />, // 请替换为实际的logo路径
    },
    {
        name: 'FastMoss',
        about: 'FastMoss is a leading data analytics platform with focus on short videos.',
        link: 'https://fastmoss.com/',
        logo: <img src={FastMossLogo} className="max-w-xs max-h-40 min-h-40 object-contain" />, // 请替换为实际的logo路径
    },
];

const Portfolios = () => {
    return (
        <div id='PORTFOLIO' className="pb-10">
            <h1 className='text-3xl text-center pt-10'>PORTFOLIO</h1>
            <div className='flex items-center justify-center pt-4'>
                <hr className="bg-neutral h-0.5 border-none w-[90vw]"></hr>
            </div>
            <div className="flex flex-wrap-reverse justify-center gap-40 pt-10">
                {companies.map((company) => (
                    <div key={company.name} className="card w-96 shadow-x  bg-base-300 text-base">
                        <figure className="px-10 pt-10 flex justify-center">
                            {
                                typeof company.logo === 'string' ? (
                                    <img
                                        src={company.logo}
                                        alt={company.name}
                                        className="max-w-xs max-h-40 min-h-40 object-contain" // 控制图片大小和宽高比
                                    />
                                ) : (
                                    company.logo
                                )
                            }
                        </figure>
                        <div className="card-body items-center text-center">
                            <a className="card-title link" href={company.link} target="_blank" rel="noopener noreferrer">{company.name}</a>
                            <p>{company.about}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Portfolios;