"use client";
import Image from "next/image";
import Footer from "../../components/footer";
import { FaWhatsapp } from "react-icons/fa";
import { BiSolidRightArrow } from "react-icons/bi";
import Logo from "./gabriele-logo.png";
import Whatsapp from "./icons8-whatsapp-96.png";
import { useState } from "react";

import QuemSou from "./../../img/foto-quem-sou-site.jpg";
import Topo from "./../../img/foto-site-topo.jpg";
import { FaArrowsDownToLine } from 'react-icons/fa6'
import { TbPointFilled } from "react-icons/tb"

import Mente from './../../img/icons/mente.png'
import Vicio from './../../img/icons/vicio.png'
import Conversa from './../../img/icons/conversa.png'
import Medo from './../../img/icons/medo.png'
import Ansiedade from './../../img/icons/ansiedade.png'


import { Great_Vibes } from "next/font/google";
import Link from "next/link";

const Great = Great_Vibes({ weight: ["400"], subsets: ["latin"] });

export default function Page() {
  const [questionOne, setQuestionOne] = useState(false);
  const [questionTwo, setQuestionTwo] = useState(false);
  const [questionThree, setQuestionThree] = useState(false);
  const [questionFour, setQuestionFour] = useState(false);
  const [questionFive, setQuestionFive] = useState(false);
  const [questionSix, setQuestionSix] = useState(false);
  const [politics, setPolitics] = useState(false);

  return (
    <main className="">
      <nav className="w-full flex items-center justify-between px-[10%] mobile:px-[5%] bg-white py-1">
        <div>
          <Image src={Logo} alt="logo" height={52} />
        </div>

        <div>
          <Link className="w-full" href="https://wa.me/5511986717169">
            <button
              id="button"
              className="bg-[#29a71b] px-6 text-white font-medium text-lg transition shadow-md hover:shadow-lg w-full rounded-md py-3 border-white border-[1px] mt-2 flex flex-row items-center justify-center mobile:text-lg min-mobile:text-base"
            >
              <FaWhatsapp className="mr-2" />
              Whatsapp
            </button>
          </Link>
        </div>
      </nav>

      <div className="grid grid-cols-2 max-w-[80%] min-h-[75vh] m-auto tablet:max-w-[90%] mobile:flex mobile:flex-col mobile:py-8">
        <div className="h-full flex justify-center flex-col mobile:pb-6">
          <h1 className="mb-2 text-5xl font-bold text-white uppercase mobile:text-[2.10rem]">
            <span className="underline decoration-2">Psicóloga online</span> para <span className="underline decoration-2">terapia virtual!</span>
          </h1>
          <p className="text-white">
            Entre em contato comigo sem nenhum compromisso. Você pode fazer uma ligação ou uma chamada de vídeo, caso prefira, para esclarecer todas as suas dúvidas.
            Compreenda o funcionamento dos atendimentos e descubra se você precisa de um profissional para auxiliá-lo, tudo isso sem nenhum custo.
          </p>

          <h2 className="text-center mt-4 text-white text-2xl">Tem alguma dúvida? Tire todas dúvidas sem compromisso!</h2>

          <Link className="w-full" href="https://wa.me/5511986717169">
            <button
              id="button"
              className="bg-[#29a71b] text-white font-semibold text-xl transition shadow-md hover:shadow-lg w-full rounded-md py-3 border-white border-[1px] mt-2 flex flex-row items-center justify-center mobile:text-lg min-mobile:text-base"
            >
              <FaWhatsapp className="mr-2" />
              Esclarecer dúvidas pelo whatsapp
            </button>
          </Link>
        </div>
        {/* <div className="flex justify-center items-center">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/Ob4LvFqq5b8" title="YouTube video player" allowFullScreen/>
        </div> */}
      </div>

      <div className="bg-white px-[10%] py-14">
        <h2 className="text-5xl text-brow-500 font-semibold mb-4 text-center">Eu preciso de atendimento psicológico ?</h2>
        <p className="mb-1">
          É importante destacar que o Atendimento Psicológico não é diretamente voltado para tratar casos de depressão profunda, transtornos graves ou dores intensas.
        </p>

        <p className="mb-2">
          <span className="underline decoration-1">O recomendado é iniciar o acompanhamento com um psicólogo ao identificar o aumento persistente de sentimentos como</span> medo, tristeza, ansiedade, depressão, raiva, angústia, desânimo e procrastinação. Além disso, caso você esteja enfrentando dificuldades em relação a sua autoestima, realização pessoal ou desempenho nas atividades diárias e profissionais, isso pode ser indicativo de questões psicológicas.
        </p>

        <p>
          <span className="underline decoration-1">Através do suporte de um profissional da psicologia, é possível alcançar</span> um maior conforto emocional, aumentar a produtividade e promover o bem-estar geral. Portanto, considere a possibilidade de buscar auxílio psicológico para lidar com esses aspectos e melhorar sua qualidade de vida.
        </p>
      </div>


      <div className=" flex flex-col items-center justify-center py-20 mobile:py-10">
        <h6 className="text-5xl text-white pb-10 font-semibold mobile:pb-4">
          Você sofre com algum desses problemas ?
        </h6>

        <div className="grid grid-cols-3 gap-x-10 mx-[10%] mobile:grid-cols-1 gap-y-4 mobile:mx-[5%]">
          <div className="border-white border-[2px] rounded-md p-4 flex items-center justify-center flex-col text-center">
            <Image src={Ansiedade} alt="Problema em se relacionar" height={100} width={100} />

            <h6 className="mb-2 text-4xl text-white font-semibold">
              Ansiedade
            </h6>
            <p className="text-white">
              Alguns sintomas incluem preocupação constante, nervosismo,
              dificuldade em se concentrar, tensão muscular, cansaço, problemas
              de sono e desconforto gastrointestinal.
            </p>
          </div>

          <div className="border-white border-[2px] rounded-md p-4 flex items-center justify-center flex-col text-center">
            <Image src={Medo} alt="Problema em se relacionar" height={100} width={100} />

            <h6 className="mb-2 text-4xl text-white font-semibold">
              Fobias
            </h6>
            <p className="text-white">
              Medo ou ansiedade em relação a algum objeto ou situação,
              sintomas incluem medo extremo, ansiedade antecipatória e
              evitação. Terapia é essencial para superar as fobias.
            </p>
          </div>

          <div className="border-white border-[2px] rounded-md p-4 flex items-center justify-center flex-col text-center">
            <Image src={Conversa} alt="Problema em se relacionar" height={100} width={100} />
            <h6 className="mb-2 text-4xl text-white font-semibold">
              Problemas em relacionar-se
            </h6>
            <p className="text-white">
              Dificuldade com a comunicação, o que pode levar a sentimentos de
              tristeza e ansiedade, baixa autoestima, irritabilidade, solidão,
              falta de motivação, dentre outros.
            </p>
          </div>

          <div className="border-white border-[2px] rounded-md p-4 flex items-center justify-center flex-col text-center">
            <Image src={Vicio} alt="Vício" height={100} width={100} />
            <h6 className="mb-2 text-white font-semibold text-4xl">
              Vícios
            </h6>
            <p className="text-white">
              Diversos tipos de vícios, dificuldade de controle ao
              consumir certas substâncias, jogos de azar e/ou vídeogames dentre outros.
            </p>
          </div>

          <div className="border-white border-[2px] rounded-md p-4 flex items-center justify-center flex-col text-center">
            <Image src={Mente} alt="mente" height={100} width={100} />
            <h6 className="mb-2 text-4xl text-white font-semibold">
              Outros
            </h6>
            <p className="text-white flex items-center justify-center"> <TbPointFilled size={20} className="text-white" />Depressão</p>
            <p className="text-white flex items-center justify-center"> <TbPointFilled size={20} className="text-white" />Transtornos</p>
            <p className="text-white flex items-center justify-center"> <TbPointFilled size={20} className="text-white" />TOC</p>
            <p className="text-white flex items-center justify-center"> <TbPointFilled size={20} className="text-white" />TDA</p>
            <p className="text-white flex items-center justify-center"> <TbPointFilled size={20} className="text-white" />TDAH</p>
            <p className="text-white flex items-center justify-center"> <TbPointFilled size={20} className="text-white" />Etc...</p>
          </div>
        </div>
      </div>

      <div className="bg-white grid grid-cols-5 min-h-[500px] items-center py-10 px-[10%] tablet:py-10 mobile:px-[5%] mobile:grid-cols-1">
        <div className="col-span-2 mobile:min-h-[300px] mr-10 mobile:mr-0">
          <Image src={Topo} alt="Topo" />
        </div>
        <div className="col-span-3">
          <h4 className="text-brow-500 font-semibold text-3xl">Sua psicóloga</h4>
          <h4 className={` text-3xl text-brow-500 py-1`}>
            Gabriele Chimento Fonseca de Oliveira
          </h4>
          <h4 className="text-brow-500 pb-4">CRP: 06/180209</h4>
          <p className="">
            Olá, meu nome é Gabriele, sou psicóloga e apaixonada pela alma
            humana. As diferenças que carregamos nos torna únicos, e isso foi
            fonte de inspiração para que eu escolhesse essa profissão. As
            sessões possuem cinquenta minutos cada e acontecem de forma online
            ou presencial dependendo da necessidade do paciente. Trabalho com a
            abordagem Terapia Cognitivo Comportamental, mais conhecida como TCC,
            que tem como um de seus objetivos melhorar o humor e ensinar aos
            pacientes que a forma como interpretamos as situações podem ser
            modificadas.
            <br />
            <br />
            Meu foco é me aproximar de você com carinho e sempre disposta a
            ouvir o que tem a dizer sem julgamentos, além de tentar compreender
            o que você vem sentindo para que juntos, encontremos meios que
            amenizem os sofrimentos e conflitos presentes.
          </p>

          <Link className="w-full" href="https://wa.me/5511986717169">
            <button
              id="button"
              className="bg-[#29a71b] text-white font-semibold text-xl transition shadow-md hover:shadow-lg w-full rounded-md py-3 border-white border-[1px] mt-2 flex flex-row items-center justify-center mobile:text-lg min-mobile:text-base"
            >
              <FaWhatsapp className="mr-2" />
              Entenda mais sobre o atendimento
            </button>
          </Link>
        </div>
      </div>


      <div className="bg-blue-500 px-[10%] py-[50px] mobile:px-[5%]">
        <h6 className="text-5xl text-white font-bold mb-4 mobile:2 text-center">
          Perguntas frequentes
        </h6>

        <div className="border-b-[2px] border-white pt-4 mb-4">
          <h6
            className={`text-2xl font-semibold flex items-center cursor-pointer pb-4 ${questionOne === true ? "text-slate-200" : "text-white"
              }`}
            onClick={() => {
              setQuestionOne(!questionOne);
            }}
          >
            <BiSolidRightArrow
              size={18}
              className={`mr-2 ${questionOne === true ? "rotate-90" : "rotate-0"
                } `}
            />{" "}
            Será que meu problema necessita de uma psicóloga?
          </h6>
          <p
            className={`mb-4 text-white ${questionOne === true ? "block" : "hidden"
              }`}
          >
            Se você vem apresentando alguns ou até mesmo muitos dos sintomas
            mencionados anteriormente ou se você deseja se conhecer melhor,
            estou aqui para oferecer apoio e ajudar no seu processo de
            compreensão interna. Podemos trabalhar juntas para explorar sua
            maneira de pensar e enfrentar seus pensamentos e problemas, buscando
            melhorar sua qualidade de vida e proporcionar mais conforto. Estou
            disponível para ajudá-la nesse processo de maneira acolhedora e
            comprometida.
          </p>
        </div>

        <div className="border-b-[2px] border-white pt-4 mb-4">
          <h6
            className={`text-2xl font-semibold flex items-center cursor-pointer pb-4 ${questionSix === true ? "text-slate-200" : "text-white"
              }`}
            onClick={() => {
              setQuestionSix(!questionSix);
            }}
          >
            <BiSolidRightArrow
              size={18}
              className={`mr-2 ${questionSix === true ? "rotate-90" : "rotate-0"
                } `}
            />{" "}
            Meus horarios são corridos, consigo ter consultas ?
          </h6>
          <p
            className={`mb-4 text-white ${questionSix === true ? "block" : "hidden"
              }`}
          >
            {" "}
            Claro! Uma das maiores vantagens de ter terapia online é a
            flexibilidade em marcar horários, entre em contato comigo e iremos
            ajustar os melhores horários para suas consultas.
          </p>
        </div>

        <div className="border-b-[2px] border-white pt-4 mb-4">
          <h6
            className={`text-2xl font-semibold flex items-center cursor-pointer pb-4 ${questionTwo === true ? "text-slate-200" : "text-white"
              }`}
            onClick={() => {
              setQuestionTwo(!questionTwo);
            }}
          >
            <BiSolidRightArrow
              size={18}
              className={`mr-2 ${questionTwo === true ? "rotate-90" : "rotate-0"
                } `}
            />{" "}
            Como funciona os pagamentos pela terapia?
          </h6>
          <p
            className={`mb-4 text-white ${questionTwo === true ? "block" : "hidden"
              }`}
          >
            Ao entrar em contato comigo, podemos conversar acerca dos valores.
            Por questão de ética, o CRP não permite que eu faça anúncios de
            valores diretamente na página, mas podemos por whatsapp planejar
            pagamentos por atendimento ou planos mensais.
          </p>
        </div>

        <div className="border-b-[2px] border-white pt-4 mb-4">
          <h6
            className={`text-2xl font-semibold flex items-center cursor-pointer pb-4 ${questionThree === true ? "text-slate-200" : "text-white"
              }`}
            onClick={() => {
              setQuestionThree(!questionThree);
            }}
          >
            <BiSolidRightArrow
              size={18}
              className={`mr-2 ${questionThree === true ? "rotate-90" : "rotate-0"
                } `}
            />{" "}
            Como funciona o atendimento online?
          </h6>
          <p
            className={`mb-4 text-white ${questionThree === true ? "block" : "hidden"
              }`}
          >
            Um dos maiores benefícios do atendimento online, é o fato de maior
            liberdade com horarios, podemos marcar qualquer horário para
            atendimento que for melhor para a atendida, contato que a agenda da
            psicológa esteja livre no momento solicitado, o atendimento será
            feito por alguma plataforma de chamada de vídeo("google meet, skype,
            zoom e outros").
          </p>
        </div>

        <div className="border-b-[2px] border-white pt-4 mb-4">
          <h6
            className={`text-2xl font-semibold flex items-center cursor-pointer pb-4 ${questionFour === true ? "text-slate-200" : "text-white"
              }`}
            onClick={() => {
              setQuestionFour(!questionFour);
            }}
          >
            <BiSolidRightArrow
              size={18}
              className={`mr-2 ${questionFour === true ? "rotate-90" : "rotate-0"
                } `}
            />{" "}
            Tenho dificuldade com aplicativos de chamada
          </h6>
          <p
            className={`mb-4 text-white ${questionFour === true ? "block" : "hidden"
              }`}
          >
            Podemos fornecer a instrução para utilizar o aplicativo escolhido
            até que esteja apto para realizarmos a terapia.
          </p>
        </div>

        <div className="border-b-[2px] border-white pt-4 mb-4">
          <h6
            className={`text-2xl font-semibold flex items-center cursor-pointer pb-4 ${questionFive === true ? "text-slate-200" : "text-white"
              }`}
            onClick={() => {
              setQuestionFive(!questionFive);
            }}
          >
            <BiSolidRightArrow
              size={18}
              className={`mr-2 ${questionFive === true ? "rotate-90" : "rotate-0"
                } `}
            />{" "}
            O que é necessário para a terapia online?
          </h6>
          <p
            className={`mb-4 text-white ${questionFive === true ? "block" : "hidden"
              }`}
          >
            Será preciso ter um aparelho com conexão a internet, e um local onde
            possa ter uma conversa sem distrações ou pessoas ao redor para
            preservar o sigilo das informações.
          </p>
        </div>
      </div>

      <div className="text-center bg-white py-10 px-[5%]">
        <p className="mb-4">Atenção:</p>

        <p className="mb-4">
          Este site não oferece atendimento imediato a pessoas em crise suicida.
        </p>

        <p>
          Em caso de crise ligue para o CVV – 188, ou procure um hospital mais
          próximo.
        </p>
      </div>

      <Link id="zap-flutuante" className="w-full" href="https://wa.me/5511986717169">
        <div id="zap-flutuante" className="fixed bottom-4 right-4">
          <Image id="zap-flutuante" src={Whatsapp} width={60} height={60} alt="whatsapp" />
        </div>
      </Link>

      <div
        className={`fixed bottom-5 w-full max-w-[90%] mx-[5%] bg-white py-4 px-4 flex justify-between rounded ${politics ? "hidden" : "block"
          }`}
      >
        <p>
          Ao permanecer na página, você estará de acordo com a nossa{" "}
          <Link href="/politica-de-privacidade">política de privacidade</Link>{" "}
        </p>
        <button
          className="bg-pink-500 text-white px-10 rounded-sm"
          onClick={() => {
            setPolitics(true);
          }}
        >
          Aceito
        </button>
      </div>
    </main>
  );
}




















{/* <div className="bg-white flex justify-center py-20 flex-col mobile:py-10">
<h2 className="text-center text-4xl text-pink-500 font-bold mb-14 mobile:mb-4 mobile:text-start mobile:mx-[5%]">
  Você precisa saber que...
</h2>
<div className="grid grid-cols-3 gap-x-10 max-w-[80%] mx-[10%] mobile:grid-cols-1 mobile:mx-[5%] mobile:max-w-[90%] mobile:gap-y-4">
  <div>
    <h3 className="text-2xl font-bold mb-1 text-pink-500">
      Aqui você será ouvida
    </h3>
    <p>
      Desabafar e compartilhar coisas que causam desconforto pode ser um
      desafio significativo para algumas pessoas. Obstáculos como
      timidez, medo de ser julgada e pensamentos negativos podem
      afastá-las de buscar ajuda. No entanto, eu estaria aqui para
      ouvi-lo com atenção e sem julgamentos.
    </p>
  </div>

  <div>
    <h3 className="text-2xl font-bold mb-1 text-pink-500">
      O seu problema é real
    </h3>
    <p>
      Os sentimentos e feridas que você experimenta são reais e têm
      causado sofrimento e problemas em sua vida. Ignorar ou adiar essas
      questões não é a solução adequada. É fundamental enfrentar
      problemas reais com tratamentos igualmente reais.
    </p>
  </div>

  <div>
    <h3 className="text-2xl font-bold mb-1 text-pink-500">
      Existem soluções
    </h3>
    <p>
      Às vezes, certos pensamentos e hábitos parecem pertencer apenas a
      nós, mas você sabia que podemos lidar com o que pensamos e
      sentimos de uma maneira diferente e que isso não precisa
      comprometer nosso bem-estar nem mudar a forma como vivemos ? Há
      inúmeras técnicas oferecidas pela Terapia Cognitivo comportamental
      que podem te ajudar.
    </p>
  </div>
</div>
</div> */}