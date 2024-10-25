
import React from 'react'
import video from '../assets/video.svg'

export default function () {
    return (
        <div className='px-4 md:px-8'>
            <h1 className='font-RedRose pt-20 md:pt-56 text-textColor text-4xl md:text-7xl text-center mt-8 md:-mt-40'>
                Guia de Utilização
            </h1>
            <section>
                <div>
                    <h1 className='font-RedRose p-8 mt-10 text-center text-textColor text-4xl md:text-5xl'>
                        Passo 1:
                    </h1>
                </div>
                <div>
                    <img className='m-auto mt-8 md:mt-24' src={video} alt="" />
                    <p className='text-white text-center'>Tutorial em vídeo</p>
                </div>
                <div className='flex flex-col md:flex-row  p-8 md:p-14 space-y-8 md:space-y-0'>
                    <div className='m-auto  md:w-1/5 text-center  md:ml-24'>
                        <p className='font-lilita text-lg md:text-xl text-textColor'>
                            Seleção do Local:
                        </p>
                        <p className='font-lilita text-lg md:text-xl mt-4 md:mt-8 text-stone-300'>
                            Escolha um local central em sua plantação que receba boa incidência solar e possua fácil acesso para monitoramento e manutenção.
                        </p>
                    </div>
                    <div className='md:mr-60 md:w-1/5 text-center  '>
                        <p className='font-lilita text-lg md:text-xl text-textColor'>
                            Preparando o Solo:
                        </p>
                        <p className='font-lilita text-lg md:text-xl mt-4 md:mt-8 text-stone-300'>
                            Certifique-se de que o solo no local escolhido esteja firme e livre de detritos. Nivele o terreno se necessário para garantir a estabilidade do espantalho robô.

                        </p>
                    </div>
                    <div className='md:w-1/5 text-center   md:mr-24 '>
                        <p className='font-lilita text-lg md:text-xl text-textColor'>
                            Fixação do Dispositivo:
                        </p>
                        <p className='font-lilita text-lg md:text-xl mt-4 md:mt-8 text-stone-300'>
                        Posicione o espantalho robô no local preparado e utilize as estacas de fixação fornecidas para garantir que o dispositivo esteja firmemente instalado no solo. 

                        </p>
                    </div>
                </div>
                <div>
                    <h1 className='font-RedRose p-8 mt-10 text-center text-textColor text-4xl md:text-5xl'>
                        Passo 2:
                    </h1>
                </div>
                <div>
                    <img className='m-auto mt-8 md:mt-16' src={video} alt="" />
                    <p className='text-white text-center'>Tutorial em vídeo</p>
                </div>
                <div className='p-8 md:p-12'>
                    <p className='font-lilita text-lg md:text-xl text-center mt-4 md:mt-8 text-textColor'>
                        Download e Instalação: 
                    </p>
                    <p className='font-lilita text-lg md:text-xl text-center md:mt-8  text-stone-300 '>Baixe o aplicativo Cultucana na Play Store ou Apple Store.</p>
                    <p className='font-lilita text-lg md:text-xl text-center mt-4 md:mt-14 text-stone-300 m-auto md:w-1/3 '>
                    Na primeira página do aplicativo após a inicialização, selecione o módulo Bluetooth disponível para emparelhar o dispositivo. Certifique-se de que o dispositivo esteja dentro do alcance de comunicação do Bluetooth no local de instalação do projeto
                    </p>
                    
                </div>
                <div>
                    <h1 className='font-RedRose p-8 mt-10 text-center text-textColor text-4xl md:text-5xl'>
                        Passo 3:
                    </h1>
                </div>
                <div>
                    <img className='m-auto mt-8 md:mt-16' src={video} alt="" />
                    <p className='text-white text-center'>Tutorial em vídeo</p>
                </div>
                <div className='p-8 md:p-12'>
                    <p className='font-lilita text-lg md:text-xl text-center mt-4 md:mt-8 text-textColor'>Verificação Regular:</p>
                    <p className='font-lilita text-lg md:text-xl text-center mt-4 md:mt-8 text-stone-300 m-auto md:w-1/3'>
                         Inspecione periodicamente o espantalho para garantir que ele esteja firmemente instalado no solo e que nenhum sensor tenha sido danificado ou removido.
                    </p>
                    <p className='font-lilita text-lg md:text-xl text-center mt-4 md:mt-8 text-stone-300 m-auto md:w-1/3'>
                        Atualizações do Aplicativo: Mantenha o aplicativo Cultucana atualizado com a última versão para garantir o acesso às funcionalidades mais recentes e correções de bugs.
                    </p>
                </div>
            </section>
        </div>
  )
}