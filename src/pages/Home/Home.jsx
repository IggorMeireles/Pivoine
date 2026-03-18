import './style.css'
import LOGO from '../../assets/pivoine-logo.png'
import BRA1 from '../../assets/bra1.png'
import CONJUNTOS from '../../assets/conjuntos.png'
import SUTIA from '../../assets/sutia.png'
import CALCINHA from '../../assets/calcinhas.png'
import PIJAMAS from '../../assets/pijamas.png'

function Home() {

  return (

    <div id='global' className='h-screen w-screen'>

      <header className='z-99 bg-[#FFFFF0] h-30 w-full drop-shadow-2xl drop-shadow-black/40 flex justify-center relative'>

        <div id='header-items' className='w-[50%] h-full flex items-center'>

          <div id='header-left' className='flex flex-row items-center justify-between w-[33%]'>

            <h1>Novidades</h1>
            <h1>Conjuntos</h1>
            <h1>Sutiã</h1>

          </div>

          <div id='header-image' className=' w-[34%] h-full flex justify-center'>

            <img src={LOGO} alt="LOGO" className='h-full p-2 hover:scale-110 active:scale-[95%] transition-all duration-200' />

          </div>

          <div id='header-left' className='flex flex-row items-center justify-between w-[33%]'>

            <h1>Calcinhas</h1>
            <h1>Noivas</h1>
            <h1>Lingeries</h1>

          </div>

        </div>

        <div id='icons' className='flex flex-row items-center w-[25%] absolute right-0 h-full justify-end gap-5 pr-10'>

          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 hover:scale-110 active:scale-[95%] transition-all duration-200">
            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
          </svg>

          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 hover:scale-110 active:scale-[95%] transition-all duration-200">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
          </svg>

          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 hover:scale-110 active:scale-[95%] transition-all duration-200">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
          </svg>

        </div>

      </header>

      <div id='body' className='flex flex-col justify-center w-full'>

        <div className='flex justify-center w-full mt-10 z-10'>

          <section className='bg-[#FFF6E8] h-280 w-[90%] drop-shadow-2xl drop-shadow-black/60'>

            <div id='section-text' className='relative'>

              <img src={BRA1} alt="BRA1" className='scale-95 brightness-70 rounded-[6px] mt-5' />

              <div id='text-box-1' className='absolute inset-0 flex flex-col items-start gap-2 text-6xl font-Playfair-Display text-[#EFE0CD] mt-10 ml-230'>

                <p className='drop-shadow-2xl drop-shadow-black/40'>Celebre sua</p>
                <p className='drop-shadow-2xl drop-shadow-black/40'>essência,</p>
                <p className='drop-shadow-2xl drop-shadow-black/40'>com leveza</p>
                <p className='drop-shadow-2xl drop-shadow-black/40'>e elegância</p>
                <p className='drop-shadow-2xl drop-shadow-black/40'>diária</p>

              </div>

              <div id='text-box-2' className='absolute inset-0 flex flex-col items-start text-2xl text-[#EFE0CD] font-bold font-Roboto mt-110 ml-25 w-94 h-45 p-4'>

                <p className='drop-shadow-2xl drop-shadow-black/80'>Decubra a coleção que combina</p>
                <p className='drop-shadow-2xl drop-shadow-black/80'>com o seu estilo!</p>
                <button className='bg-[#C0715D] hover:bg-[#a5563f] active:scale-[95%] transition-all duration-200 text-[#EFE0CD] font-bold py-2 px-4 rounded-xl mt-6 h-15 w-87'>
                  COMPRAR NOVA COLEÇÃO
                </button>

              </div>

            </div>

            <div className='grid grid-cols-4 gap-6 px-8 mt-5 mb-5'>

              <div className='h-[350px] relative'>
                <img src={CONJUNTOS} className='h-full w-full object-cover rounded-2xl brightness-70' />
                <div className='absolute inset-0 flex items-center justify-center text-4xl font-Playfair-Display text-[#EFE0CD] mt-40'>
                  <p className='absolute drop-shadow-2xl drop-shadow-black/80'>SUTIÃS</p>
                  <button className='bg-[#EFE0CD] hover:bg-[#D4C0A1] active:scale-[90%] transition-all duration-200 text-amber-900 text-[20px] py-2 px-4 rounded-[6px] mt-25'>
                    EXPLORAR
                  </button>
                </div>
              </div>

              <div className='relative'>
                <img src={SUTIA} className='h-full w-full object-cover rounded-2xl brightness-70' />
                <div className='absolute inset-0 flex items-center justify-center text-4xl font-Playfair-Display text-[#EFE0CD] mt-40'>
                  <p className='absolute drop-shadow-2xl drop-shadow-black/80'>CONJUNTOS</p>
                  <button className='bg-[#EFE0CD] hover:bg-[#D4C0A1] active:scale-[90%] transition-all duration-200 text-amber-900 text-[20px] py-2 px-4 rounded-[6px] mt-25'>
                    EXPLORAR
                  </button>
                </div>
              </div>

              <div className='relative'>
                <img src={CALCINHA} className='h-full w-full object-cover rounded-2xl brightness-70' />
                <div className='absolute inset-0 flex items-center justify-center text-4xl font-Playfair-Display text-[#EFE0CD] mt-40'>
                  <p className='absolute drop-shadow-2xl drop-shadow-black/80'>CALCINHAS</p>
                  <button className='bg-[#EFE0CD] hover:bg-[#D4C0A1] active:scale-[90%] transition-all duration-200 text-amber-900 text-[20px] py-2 px-4 rounded-[6px] mt-25'>
                    EXPLORAR
                  </button>
                </div>
              </div>

              <div className='relative'>
                <img src={PIJAMAS} className='h-full w-full object-cover rounded-2xl brightness-70' />
                <div className='absolute inset-0 flex flex-col items-center justify-center text-4xl font-Playfair-Display text-[#EFE0CD] mt-40'>
                  <p className='absolute drop-shadow-2xl drop-shadow-black/80'>PIJAMAS</p>
                  <button className='bg-[#EFE0CD] hover:bg-[#D4C0A1] active:scale-[90%] transition-all duration-200 text-amber-900 text-[20px] py-2 px-4 rounded-[6px] mt-25'>
                    EXPLORAR
                  </button>
                </div>
              </div>

            </div>

          </section>

        </div>

        <div className='flex justify-center w-full mt-10 z-10'>

          <section className='bg-[#FFF6E8] h-50 w-[90%] drop-shadow-2xl drop-shadow-black/60'>



          </section>

        </div>

      </div>

      <footer className='bg-[#E3BC9A] mt-10 h-60 flex flex-row gap-30 items-center justify-center'>

        <div className='flex flex-row ml-30 gap-20'>

          <div className='flex flex-col font-Roboto text-[15px]'>

            <h1 className='font-bold text-[20px] mb-3'>AJUDA</h1>
            <p>Fale conosco</p>
            <p>Política de Privacidade</p>
            <p>Termos e Condições</p>
            <p>Prazos de Entrega</p>

          </div>

          <div className='flex flex-col font-Roboto text-[15px]'>

            <h1 className='font-bold text-[20px] mb-3'>Informações Úteis</h1>
            <p>Como Comprar</p>
            <p>Sobre Nós</p>
            <p>Perguntas Frequentes</p>

          </div>

          <div className='flex flex-col font-Roboto text-[15px]'>

            <h1 className='font-bold text-[20px] mb-3'>Siga-nos</h1>
            <p>Instagram</p>
            <p>TikTok</p>
            <p>Twitter</p>
            <p>YouTube</p>

          </div>

        </div>

        <div>

          <h1 className='font-bold text-[20px]'>Receba 10% de desconto na sua primeira compra!</h1>

          <div className='flex flex-row'>
            <input type="text" placeholder="Digite seu email" className='w-100 h-10 mt-5 bg-amber-50 border placeholder:text-center' />
            <button className='bg-[#EFE0CD] hover:bg-[#D4C0A1] transition-all duration-200 border-t border-r border-b h-10 w-17 flex mt-5'>

              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className='w-full h-full p-2 m-auto active:scale-[90%]'>
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
              </svg>

            </button>
          </div>

        </div>

        <div>

          <section className='bg-amber-800 h-10'></section>

        </div>

      </footer>

    </div>

  )
}

export default Home