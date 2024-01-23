import axios from 'axios'
import { FormEvent, useState } from 'react'

export default function Form() {
  const [name, setName] = useState<string>()
  const [number, setNumber] = useState<string>()
  const [email, setEmail] = useState<string>()
  const [select, setSelect] = useState<string>()
  const [message, setMessage] = useState<string>()

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()

    console.log(select)

    const data = {
      domain: 'www.gabrielepsicologa.com.br',
      emailTo: ['gabrieleolipsi@gmail.com'],
      title: 'Formulário de contato',
      name,
      email,
      number,
      message

    }

    try {
      await axios.post(`https://main-form.herokuapp.com/form/simcompany`, data)
    } catch (error) {

    }
  }

  return (
    <form className='pt-4 max-w-[96%] m-auto' onSubmit={handleSubmit}>
      <h2 className='text-center text-2xl text-white font-semibold pb-4'>Se preferir deixe suas informações</h2>
      <p className='text-white'>Nome:</p>
      <input className='w-full mb-2 rounded-' style={{ paddingTop: "2px", paddingBottom: "2px", paddingLeft: "4px" }} type="text" placeholder='Nome' onChange={(e) => { setName(e.target.value) }} />
      <p className='text-white'>Numero:</p>
      <input className='w-full mb-2' style={{ paddingTop: "2px", paddingBottom: "2px", paddingLeft: "4px" }} type="text" placeholder='Numero' onChange={(e) => { setNumber(e.target.value) }} />
      <p className='text-white'>Email:</p>
      <input className='w-full mb-2' style={{ paddingTop: "2px", paddingBottom: "2px", paddingLeft: "4px" }} type="email" placeholder='Email' onChange={(e) => { setEmail(e.target.value) }} />
      {/* <p className='text-white pt-4'>Por onde devo te responder?</p> */}
      {/* <div className='flex justify-between pb-4'>
        <div className='flex'>
          <input type="checkbox" size={30} onClick={(e) => { console.log("clicou") }} />
          <p className='text-white text-sm'>Whatsapp</p>
        </div>
        <div className='flex'>
          <input type="checkbox" onClick={(e) => { console.log("clicou") }} />
          <p className='text-white text-sm'>Ligação</p>
        </div>
        <div className='flex'>
          <input type="checkbox" onClick={(e) => { console.log("clicou") }} />
          <p className='text-white text-sm'>Email</p>
        </div>
      </div> */}
      <p className='text-white'>Mensagem:</p>
      <textarea className='w-full mb-2' style={{ paddingTop: "2px", paddingBottom: "2px", paddingLeft: "4px", height: "100px" }} placeholder='Mensagem' onChange={(e) => { setMessage(e.target.value) }} />

      <button type="submit" className='bg-pink-500 w-full py-4 text-white font-semibold text-xl rounded-md'>Enviar formulário</button>
    </form>
  )
}