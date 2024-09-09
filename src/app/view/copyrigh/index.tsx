import './style.scss'
import React from 'react'

const Copyrigh = ({ theme }: any) => {
    return (
        <div
            className='copyrigh'
            style={{ transition: ".5s", background: !theme ? 'rgb(241, 239, 233)' : 'rgb(13, 13, 13)' }}
        >
            <div
                className="text-copyrigh"
                style={{
                    display: "flex",
                    transition: ".5s",
                    color: !theme ? '#111' : 'rgb(241, 239, 233)'
                }}>
                Copyright © 2024 <div style={{ fontWeight: '800', marginLeft: 3, color: '#aa8645' }}> MF Eldorado Granitos.</div> Todos os direitos reservados.
            </div>
        </div>
    )
}

export default Copyrigh;