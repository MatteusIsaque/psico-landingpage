import Link from "next/link";



export default function Footer(){

  return(
    <footer className="text-center">
      <p className="text-white">Todos os direitos reservados aos criadores</p>
      <p className="text-white"><Link href="https://isaquesestudios.com/">Site criado pela isaques estúdios</Link></p>
    </footer>
  )
}