import './style.scss'
import { Shirts_Male } from '../../data/data';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { MdTouchApp } from "react-icons/md";

const Carousel = ({ theme }: any) => {

    const [width, setWidth] = useState(0)
    const carousel = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (carousel.current) {
            setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
        }
    }, [])

    function hiddenArrow() {
        const arrow = document.getElementById('Arrow') as HTMLElement;
        const style = arrow.style;
        style.opacity = '0';
    }

    return (
        <div className='container-carousel'
            style={{ background: !theme ? '#f1efe9' : 'rgb(17, 17, 17)' }}
        >
            <div className='container-change-skin-gener'>
                <div
                    style={{ color: !theme ? 'rgba(78, 51, 0, 0.87)' : '#fff' }}
                >GRANITOS</div>
            </div>

            <div
                className='container-left-arrow'
                id='Arrow'>
                <MdTouchApp
                    className='touch'
                    color='#ffffff67;' size={200} />
            </div>

            <motion.div
                ref={carousel}
                className='carousel'
                whileTap={{ cursor: "grabbing" }}
            >
                <motion.div
                    className='inner'
                    drag="x"
                    animate={{ x: 0 }}
                    initial={{ x: 100 }}
                    dragConstraints={{ right: 0, left: -width }}
                    onTouchStart={() => hiddenArrow()}
                >
                    {
                        Shirts_Male?.map((itens: any) => {
                            return (
                                <motion.div
                                    key={itens.id}
                                    className='item'
                                    id='item'
                                >
                                    <Image src={itens?.img1?.img_1} alt={itens?.name} />
                                    <div
                                        style={{
                                            color: !theme ? 'rgba(78, 51, 0, 0.87)' : '#fff',
                                            fontWeight: 600, letterSpacing: 3, textTransform: 'uppercase'
                                        }}>{itens.name}</div>
                                </motion.div>

                            )
                        })
                    }

                </motion.div>
            </motion.div>
        </div >
    )
}

export default Carousel;