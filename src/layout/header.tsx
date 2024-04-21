
import logo from '@/assets/logo.jpg'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'

// const ThemeChanger = () => {
//     return (
//         <label
//             className="swap swap-rotate"
//         >

//             {/* this hidden checkbox controls the state */}
//             <input type="checkbox" data-choose-theme className="theme-controller" value={'light'} data-key="theme-data" />

//             {/* sun icon */}
//             <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

//             {/* moon icon */}
//             <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

//         </label>
//     )
// }

const scrollToAnchor = (anchorName: string) => {
    if (anchorName) {
        // 找到锚点
        const anchorElement = document.getElementById(anchorName);
        // 如果对应id的锚点存在，就跳转到锚点
        if (anchorElement) { anchorElement.scrollIntoView({ block: 'start', behavior: 'smooth' }); }
    }
}




export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false); // 用于控制移动端菜单的显示状态
    const navigate = useNavigate();

    const onLinkClick = (anchor?: string, link?: string) => {
        setIsMenuOpen(false); // 点击链接后关闭菜单
        const isHomePage = window.location.pathname === '/';
        if (isHomePage && anchor) {
            scrollToAnchor(anchor);
            return;
        }
        if (link) {
            navigate(link);
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`flex flex-col top-0 left-0 w-full z-50 duration-300 glass`}>
            <div className={`navbar  shadow mx-auto p-4 transition-all duration-300 ${scrolled ? 'bg-opacity-100 max-w-[100%]' : 'bg-opacity-0 max-w-[100%]'}`}>
                <div className="navbar-start">

                    <div className="avatar pl-3" onClick={() => { navigate("/") }}>
                        <div className="w-10 rounded-xl">
                            <img src={logo} alt="logo" />
                        </div>
                    </div>
                    <a className="pl-8 text-2xl hidden lg:block" onClick={() => { navigate("/") }}>NYX Ventures</a>
                </div>
                {/* 仅在大屏幕上显示的菜单 */}
                <div className="navbar-end  ">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-8 6h8" />
                        </svg>
                    </div>
                    <ul className="menu menu-horizontal px-1 hidden lg:flex">
                        <li><a onClick={() => { onLinkClick("PORTFOLIO", "/portfolios") }}>PORTFOLIO</a></li>
                        <li><a onClick={() => { onLinkClick("TEAM", "/team") }}>TEAM</a></li>
                        <li><a onClick={() => { onLinkClick("", "/contact") }}>CONTACT</a></li>
                        <li><a onClick={() => { navigate("/about") }}>ABOUT US</a></li>

                    </ul>
                </div>
                {/* 移动端菜单 */}

            </div>
            <div className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
                <ul className="menu menu-vertical p-1">
                    <li><a onClick={() => { onLinkClick("PORTFOLIO", "/portfolios") }}>PORTFOLIO</a></li>
                    <li><a onClick={() => { onLinkClick("TEAM", "/team") }}>TEAM</a></li>
                    <li><a onClick={() => { onLinkClick("", "/contact") }}>CONTACT</a></li>
                    <li><a onClick={() => { navigate("/about") }}>ABOUT US</a></li>

                </ul>
            </div>
        </div>
    );
}