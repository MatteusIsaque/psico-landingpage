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
      <nav className="w-full flex items-center justify-center bg-white py-1">
        <div>
          <Image src={Logo} alt="logo" height={52} />
        </div>
      </nav>

      <div className="grid grid-cols-2 max-w-[80%] min-h-[75vh] m-auto tablet:max-w-[90%] mobile:flex mobile:flex-col-reverse mobile:py-10">
        <div className="h-full flex justify-center flex-col mobile:pt-6">
          <h1 className="mb-2 text-5xl font-semibold text-white mobile:text-3xl">
            Algumas{" "}
            <span className="font-extrabold underline decoration-2">
              conversas
            </span>{" "}
            não podem esperar,{" "}
            <span className="font-extrabold underline decoration-2">
              cuide de quem você mais ama!
            </span>
          </h1>
          <p className="text-white">
            Atendimento online, escolha o melhor horário para você! Fale
            diretamente comigo do conforto da sua casa. Sua saúde mental deve
            ser o seu bem mais precioso. Tenha atendimentos regulares e cuide de
            você ou de quem você ama!
          </p>

          <Link className="w-full" href="https://wa.me/5511986717169">
            <button
              id="button"
              className="bg-pink-500 text-white text-xl transition shadow-md hover:shadow-lg w-full rounded-md py-3 border-white border-[1px] mt-2 flex flex-row items-center justify-center"
            >
              <FaWhatsapp className="mr-2" />
              Fale comigo e marque sua consulta
            </button>
          </Link>
        </div>
        <div className="flex justify-center items-center">
          <Image src={Topo} alt="Topo" />
        </div>
      </div>

      <div className="bg-white flex justify-center py-20 flex-col mobile:py-10">
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
      </div>

      <div className="grid grid-cols-5 min-h-[500px] items-center py-10 px-[10%] tablet:py-10 mobile:px-[5%] mobile:grid-cols-1">
        <div className="col-span-2 mobile:min-h-[300px] mr-10 mobile:mr-0">
          <Image src={QuemSou} alt="gabriele" />
        </div>
        <div className="col-span-3">
          <h4 className="text-white font-semibold text-3xl">Sobre Mim</h4>
          <h4 className={`${Great.className} text-5xl text-white pt-2`}>
            Gabriele Chimento Fonseca de Oliveira
          </h4>
          <h4 className="text-white pb-4">CRP: 06/180209</h4>
          <p className="text-white">
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
              className="bg-pink-500 text-white text-xl transition shadow-md hover:shadow-lg w-full rounded-md py-3 border-white border-[1px] mt-2 flex flex-row items-center justify-center"
            >
              <FaWhatsapp className="mr-2" />
              Marque sua consulta
            </button>
          </Link>
        </div>
      </div>

      <div className="bg-white flex flex-col items-center justify-center py-20 mobile:py-10">
        <h6 className="text-3xl text-pink-500 pb-10 font-semibold mobile:pb-4">
          Se você sofre com...
        </h6>

        <div className="grid grid-cols-3 gap-x-10 mx-[10%] mobile:grid-cols-1 gap-y-4 mobile:mx-[5%]">
          <div className="border-pink-500 border-[2px] rounded-md p-4">
            <h6 className="mb-2 text-2xl text-pink-500 font-semibold">
              Ansiedade generalizada
            </h6>
            <p>
              Alguns sintomas incluem preocupação constante, nervosismo,
              dificuldade em se concentrar, tensão muscular, cansaço, problemas
              de sono e desconforto gastrointestinal. É importante procurar
              ajuda de um profissional para diagnóstico e tratamento adequados.
            </p>
          </div>

          <div className="border-pink-500 border-[2px] rounded-md p-4">
            <h6 className="mb-2 text-2xl text-pink-500 font-semibold">
              Fobias
            </h6>
            <p>
              Medo ou ansiedade acentuado em relação a algum objeto ou situação.
              Os sintomas incluem medo extremo, ansiedade antecipatória e
              evitação. Terapia é essencial para superar as fobias.
            </p>
          </div>

          <div className="border-pink-500 border-[2px] rounded-md p-4">
            <h6 className="mb-2 text-2xl text-pink-500 font-semibold">
              Problemas em se relacionar
            </h6>
            <p>
              Dificuldade com a comunicação, o que pode levar a sentimentos de
              tristeza e ansiedade, baixa autoestima, irritabilidade, solidão,
              falta de motivação, distúrbios do sono e dificuldades de
              concentração, dentre outros.
            </p>
          </div>

          <div className="border-pink-500 border-[2px] rounded-md p-4">
            <h6 className="mb-2 text-2xl text-pink-500 font-semibold">
              Vícios
            </h6>
            <p>
              Quando falamos em vício, é importante salientar que há diversos
              tipos de vícios, se você tem tido dificuldade de controle ao
              consumir certas substâncias, jogos de azar e/ou vídeogames é
              importante reconhecer a hora de pedir ajudar.
            </p>
          </div>

          <div className="border-pink-500 border-[2px] rounded-md p-4">
            <h6 className="mb-2 text-2xl text-pink-500 font-semibold">
              Outros
            </h6>
            <p>
              Independente do diagnóstico, o mais importante é que há tratamento
              e técnicas que podem te ajudar a lidar com as situações que
              aparentemente parecem sem solução.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-blue-500 px-[10%] py-[50px] mobile:px-[5%]">
        <h6 className="text-5xl text-white font-bold mb-4 mobile:2 text-center">
          Perguntas frequentes
        </h6>

        <div className="border-b-[2px] border-white pt-4 mb-4">
          <h6
            className={`text-2xl font-semibold flex items-center cursor-pointer pb-4 ${
              questionOne === true ? "text-slate-200" : "text-white"
            }`}
            onClick={() => {
              setQuestionOne(!questionOne);
            }}
          >
            <BiSolidRightArrow
              size={18}
              className={`mr-2 ${
                questionOne === true ? "rotate-90" : "rotate-0"
              } `}
            />{" "}
            Será que meu problema necessita de uma psicóloga?
          </h6>
          <p
            className={`mb-4 text-white ${
              questionOne === true ? "block" : "hidden"
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
            className={`text-2xl font-semibold flex items-center cursor-pointer pb-4 ${
              questionSix === true ? "text-slate-200" : "text-white"
            }`}
            onClick={() => {
              setQuestionSix(!questionSix);
            }}
          >
            <BiSolidRightArrow
              size={18}
              className={`mr-2 ${
                questionSix === true ? "rotate-90" : "rotate-0"
              } `}
            />{" "}
            Meus horarios são corridos, consigo ter consultas ?
          </h6>
          <p
            className={`mb-4 text-white ${
              questionSix === true ? "block" : "hidden"
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
            className={`text-2xl font-semibold flex items-center cursor-pointer pb-4 ${
              questionTwo === true ? "text-slate-200" : "text-white"
            }`}
            onClick={() => {
              setQuestionTwo(!questionTwo);
            }}
          >
            <BiSolidRightArrow
              size={18}
              className={`mr-2 ${
                questionTwo === true ? "rotate-90" : "rotate-0"
              } `}
            />{" "}
            Como funciona os pagamentos pela terapia?
          </h6>
          <p
            className={`mb-4 text-white ${
              questionTwo === true ? "block" : "hidden"
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
            className={`text-2xl font-semibold flex items-center cursor-pointer pb-4 ${
              questionThree === true ? "text-slate-200" : "text-white"
            }`}
            onClick={() => {
              setQuestionThree(!questionThree);
            }}
          >
            <BiSolidRightArrow
              size={18}
              className={`mr-2 ${
                questionThree === true ? "rotate-90" : "rotate-0"
              } `}
            />{" "}
            Como funciona o atendimento online?
          </h6>
          <p
            className={`mb-4 text-white ${
              questionThree === true ? "block" : "hidden"
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
            className={`text-2xl font-semibold flex items-center cursor-pointer pb-4 ${
              questionFour === true ? "text-slate-200" : "text-white"
            }`}
            onClick={() => {
              setQuestionFour(!questionFour);
            }}
          >
            <BiSolidRightArrow
              size={18}
              className={`mr-2 ${
                questionFour === true ? "rotate-90" : "rotate-0"
              } `}
            />{" "}
            Tenho dificuldade com aplicativos de chamada
          </h6>
          <p
            className={`mb-4 text-white ${
              questionFour === true ? "block" : "hidden"
            }`}
          >
            Podemos fornecer a instrução para utilizar o aplicativo escolhido
            até que esteja apto para realizarmos a terapia.
          </p>
        </div>

        <div className="border-b-[2px] border-white pt-4 mb-4">
          <h6
            className={`text-2xl font-semibold flex items-center cursor-pointer pb-4 ${
              questionFive === true ? "text-slate-200" : "text-white"
            }`}
            onClick={() => {
              setQuestionFive(!questionFive);
            }}
          >
            <BiSolidRightArrow
              size={18}
              className={`mr-2 ${
                questionFive === true ? "rotate-90" : "rotate-0"
              } `}
            />{" "}
            O que é necessário para a terapia online?
          </h6>
          <p
            className={`mb-4 text-white ${
              questionFive === true ? "block" : "hidden"
            }`}
          >
            Será preciso ter um aparelho com conexão a internet, e um local onde
            possa ter uma conversa sem distrações ou pessoas que consigam ouvir
            os assuntos conversados.
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

      <Link className="w-full" href="https://wa.me/5511986717169">
        <div className="fixed bottom-4 right-4">
          <Image src={Whatsapp} width={60} height={60} alt="whatsapp" />
        </div>
      </Link>

      <div
        className={`fixed bottom-5 w-full max-w-[90%] mx-[5%] bg-white py-4 px-4 flex justify-between rounded ${
          politics ? "hidden" : "block"
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
