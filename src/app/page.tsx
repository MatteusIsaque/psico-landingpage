"use client";
import Image from "next/image";
import Footer from "../../components/footer";
import { FaWhatsapp } from "react-icons/fa";
import { BiSolidRightArrow } from "react-icons/bi";
import Logo from "./gabriele-logo.png";
import Whatsapp from "./icons8-whatsapp-96.png";
import { useState } from "react";

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

      <div className="grid grid-cols-2 max-w-[80%] min-h-[75vh] m-auto tablet:max-w-[90%] mobile:grid-cols-1">
        <div className="h-full flex justify-center flex-col">
          <h1 className="mb-2 text-4xl font-semibold text-white">
            Algumas <span className="font-bold">conversas</span> não podem
            esperar, cuide de quem você mais ama!
          </h1>
          <p className="text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, quae
            eaque! Eos similique ea qui dicta, aut, voluptatibus quibusdam
            corrupti quam amet ipsam illum temporibus in ratione explicabo modi
            velit?
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
        <div></div>
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
              timidez, sentimento de inferioridade e pensamentos negativos podem
              afastá-las de buscar ajuda. No entanto, ao conversar comigo, você
              encontrará uma profissional disposta a ouvi-la, compreendê-la e
              auxiliá-la na cicatrização de suas feridas.
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
              nós. No entanto, é importante entender que esses sentimentos não
              precisam comprometer nosso bem-estar nem mudar a forma como
              vivemos. Aqui, você encontrará apoio para lidar com eles.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-5 min-h-[500px] items-center py-4 px-[10%] tablet:py-10 mobile:px-[5%] mobile:grid-cols-">
        <div className="col-span-2 mobile:h-[300px]"></div>
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
          Atendo principalmente:
        </h6>

        <div className="grid grid-cols-3 gap-x-10 mx-[10%] mobile:grid-cols-1 gap-y-4 mobile:mx-[5%]">
          <div className="border-pink-500 border-[2px] rounded-md p-4">
            <h6 className="mb-2 text-2xl text-pink-500 font-semibold">
              Ansiedade generalizada
            </h6>
            <p>
              sintomas incluem preocupação constante, nervosismo, dificuldade em
              se concentrar, tensão muscular, cansaço, problemas de sono e
              desconforto gastrointestinal. É importante procurar ajuda de um
              profissional para diagnóstico e tratamento adequados.
            </p>
          </div>

          <div className="border-pink-500 border-[2px] rounded-md p-4">
            <h6 className="mb-2 text-2xl text-pink-500 font-semibold">
              Fobias
            </h6>
            <p>
              Fobias são medos intensos e irracionais em relação a objetos,
              situações ou atividades específicas. Os sintomas incluem medo
              extremo, ansiedade antecipatória e evitação. Terapia é essencial
              para superar as fobias.
            </p>
          </div>

          <div className="border-pink-500 border-[2px] rounded-md p-4">
            <h6 className="mb-2 text-2xl text-pink-500 font-semibold">
              Problemas em relacionamento
            </h6>
            <p>
              Sintomas comuns incluem tristeza, ansiedade, baixa autoestima,
              irritabilidade, solidão, falta de motivação, distúrbios do sono e
              dificuldades de concentração.
            </p>
          </div>

          <div className="border-pink-500 border-[2px] rounded-md p-4">
            <h6 className="mb-2 text-2xl text-pink-500 font-semibold">
              violência doméstica
            </h6>
            <p>
              Sinais de violência doméstica incluem lesões inexplicáveis,
              mudanças de comportamento, controle excessivo, isolamento social,
              comportamento dominador/agressivo, medo do parceiro, mudanças no
              estilo de vida e declínio na saúde.
            </p>
          </div>

          <div className="border-pink-500 border-[2px] rounded-md p-4">
            <h6 className="mb-2 text-2xl text-pink-500 font-semibold">
              Vícios
            </h6>
            <p>
              Os vícios incluem cravings, perda de controle, alterações de
              humor, isolamento social, negligência de responsabilidades,
              preocupação constante, problemas de sono, baixa autoestima,
              mudanças no apetite e ansiedade/depressão. Buscar ajuda
              profissional é essencial para receber diagnóstico adequado e
              suporte na recuperação do vício.
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
        <h6 className="text-3xl text-white font-bold mb-4 mobile:2">
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
            Se você tem sentido algum dos sintomas mencionados anteriormente,
            estou aqui para oferecer apoio e ajudar a compreender e encontrar
            soluções para o que tem afetado o seu bem-estar. Podemos trabalhar
            juntos para explorar sua maneira de pensar e enfrentar seus
            pensamentos e problemas, buscando melhorar sua qualidade de vida e
            proporcionar mais conforto. Estou disponível para ajudá-la nesse
            processo de maneira acolhedora e comprometida.
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
            Ao entrar em contato comigo, podemos informar sobre os valores, por
            questão de ética, o CRP não permite que eu faça anuncio de valores
            diretamente na página, mas podemos por whatsapp planejar pagamentos
            por atendimento ou planos mensaias.
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
