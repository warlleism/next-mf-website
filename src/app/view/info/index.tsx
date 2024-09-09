import './style.scss'
import { FaHammer, FaBoxOpen, FaMapMarkerAlt, FaHandsHelping, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { MdKitchen } from "react-icons/md";

const InfoComponent = ({ theme }: any) => {
    return (
        <div className='main-info-container' style={{
            background: !theme ? '#fff' : '#161616',
        }}>
            <div className="title-services"
                style={{
                    transition: ".5s", color: !theme ? '#db8f00de' : '#fff',
                }}>SERVIÇOS</div>
            <div className='container-info' style={{ border: !theme ? "solid 2px rgba(78, 51, 0, 0.87)" : "solid 2px #fff" }}>
                <div className='container-list-itens'>
                    <div className='icon-info-container'  style={{
                        border: !theme ? '2px #db8f00de solid' : '2px #fff solid',
                    }}>
                        <FaHammer size={27} />
                    </div>
                    <div className='title-list-info' style={{
                        color: !theme ? '#db8f00de' : '#fff',
                    }}>Serviços Oferecidos</div>
                    <div className='line' />
                    <ul className={`${!theme ? 'colorDark' : 'colorLight'}`}>
                        <li>Instalação de bancadas de granito</li>
                        <li>Revestimento de pisos e paredes</li>
                        <li>Medição e corte sob medida</li>
                        <li>Acabamento de bordas</li>
                        <li>Manutenção e polimento de granitos</li>
                        <li>Reparo de fissuras e trincas</li>
                    </ul>
                </div>
                <div className='container-list-itens'>
                    <div className='icon-info-container'  style={{
                        border: !theme ? '2px #db8f00de solid' : '2px #fff solid',
                    }}>
                        <FaBoxOpen size={27} />
                    </div>
                    <div className='title-list-info' style={{
                        color: !theme ? '#db8f00de' : '#fff',
                    }}>Materiais Disponíveis</div>
                    <div className='line' />
                    <ul className={`${!theme ? 'colorDark' : 'colorLight'}`}>
                        <li>Granito Branco Siena</li>
                        <li>Granito Verde Ubatuba</li>
                        <li>Granito Preto Absoluto</li>
                        <li>Granito Marrom Imperador</li>
                        <li>Granito Amarelo Icaraí</li>
                        <li>Granito Vermelho Brasília</li>
                    </ul>
                </div>
                <div className='container-list-itens'>
                    <div className='icon-info-container'  style={{
                        border: !theme ? '2px #db8f00de solid' : '2px #fff solid',
                    }}>
                        <MdKitchen size={27} />
                    </div>
                    <div className='title-list-info' style={{
                        color: !theme ? '#db8f00de' : '#fff',
                    }}>Áreas de Atuação</div>
                    <div className='line' />
                    <ul className={`${!theme ? 'colorDark' : 'colorLight'}`}>
                        <li>Cozinhas</li>
                        <li>Banheiros</li>
                        <li>Áreas Externas</li>
                        <li>Escadas e Corrimãos</li>
                        <li>Mesas e Balcões</li>
                    </ul>
                </div>
                <div className='container-list-itens'>
                    <div className='icon-info-container'  style={{
                        border: !theme ? '2px #db8f00de solid' : '2px #fff solid',
                    }}>
                        <FaHandsHelping size={27} />
                    </div>
                    <div className='title-list-info' style={{
                        color: !theme ? '#db8f00de' : '#fff',
                    }}>Diferenciais</div>
                    <div className='line' />
                    <ul className={`${!theme ? 'colorDark' : 'colorLight'}`}>
                        <li>Granitos de alta qualidade</li>
                        <li>Equipe especializada</li>
                        <li>Entrega rápida</li>
                        <li>Preços competitivos</li>
                        <li>Suporte técnico especializado</li>
                    </ul>
                </div>
                <div className='container-list-itens' style={{ borderRight: 'none' }}>
                    <div className='icon-info-container'  style={{
                        border: !theme ? '2px #db8f00de solid' : '2px #fff solid',
                    }}>
                        <FaPhoneAlt size={27} />
                    </div>
                    <div className='title-list-info' style={{
                        color: !theme ? '#db8f00de' : '#fff',
                    }}>Contato</div>
                    <div className='line' />
                    <ul className={`${!theme ? 'colorDark' : 'colorLight'}`}>
                        <li><FaEnvelope size={15} style={{ marginRight: 5 }} />warllei.s.martins@hotmail.com</li>
                        <li><FaPhoneAlt size={15} style={{ marginRight: 5 }} />(27) 99881-4012</li>
                        <li><FaMapMarkerAlt size={15} style={{ marginRight: 5 }} />Estr. Ayrton Senna da Silva, 2072 - Barramares, Vila Velha - ES, 29124-386</li>
                        <li>Horário de Funcionamento: Seg/Sex 7:27h às 18h</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default InfoComponent;
