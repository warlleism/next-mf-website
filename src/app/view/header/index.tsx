
import './style.scss'
import { useEffect } from 'react';
import Image from 'next/image';
import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa";
import { BsFillMouseFill } from "react-icons/bs";

const Header = ({ handlerTheme, theme }: any) => {

    function transformTitle() {
        const t1 = document.getElementById('txt1') as HTMLElement
        const txt1 = t1?.style
        const t2 = document.getElementById('txt2') as HTMLElement
        const txt2 = t2?.style
        const t3 = document.getElementById('txt3') as HTMLElement
        const txt3 = t3?.style

        setTimeout(() => {
            txt1.transform = 'translateX(0px)'
        }, 100)
        setTimeout(() => {
            txt2.transform = 'translateX(0px)'
        }, 900)
        setTimeout(() => {
            txt3.transform = 'translateX(0px)'
        }, 1500)
    }

    useEffect(() => {
        transformTitle()
    }, [])

    return (
        <div className='container-header'
            style={{ background: !theme ? '#fff' : "#161616" }}
        >
            {
                theme ?
                    <div
                        onClick={() => handlerTheme()}
                        style={{
                            width: 30,
                            height: 30,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            border: '2px solid rgb(155, 155, 155)',
                            borderRadius: 100,
                            cursor: 'pointer',
                            position: 'fixed',
                            top: 10,
                            right: 10,
                            fontSize: 25,
                            padding: 10,
                            color: "#aa8645",
                            zIndex: 999
                        }}
                    >
                        <FaMoon />
                    </div>
                    :
                    <div
                        onClick={() => handlerTheme()}
                        style={{
                            width: 30,
                            height: 30,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            border: '2px solid rgb(155, 155, 155)',
                            borderRadius: 100,
                            cursor: 'pointer',
                            position: 'fixed',
                            top: 10,
                            right: 10,
                            fontSize: 25,
                            padding: 10,
                            color: "#aa8645",
                            zIndex: 999
                        }}
                    >
                        <FaSun />
                    </div>
            }
            <div className='white-card'>
                <div id='txt1' style={{ letterSpacing: -10, color: !theme ? 'rgb(64, 64, 64)' : "#fff" }}>M<span style={{ fontSize: '4rem', color: "#888a8b", marginLeft: 20 }}>.</span><strong style={{ fontWeight: 100, marginLeft: 30 }}>F</strong><span style={{ fontSize: '4rem', color: "#888a8b" }}>.</span></div>
                <div id='txt2' style={{ color: !theme ? '#aa8645' : "#fff" }}>Mármores</div>
                <div id='txt3' style={{ color: !theme ? 'rgb(64, 64, 64)' : "#aa8645" }}><strong style={{ fontWeight: 100 }}>&</strong> Granitos</div>
            </div>
            <div className='black-card'>
                <Image
                    src={require('../../images/img.png')}
                    alt='granito'
                />
            </div>

            <div className='container-drop-arrow'>
                <a href='#granite'
                    style={{ cursor: 'pointer' }}
                >
                    <BsFillMouseFill color='#aa8645' size={35} />
                </a>
            </div>
        </div>
    )
}

export default Header;