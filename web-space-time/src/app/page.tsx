import { User } from 'lucide-react'
import nlwLogo from '../assets/nlw-spacetime-logo.svg'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="grid min-h-screen grid-cols-2">
      {/* Left */}
      <div className="relative flex flex-col items-start justify-between overflow-hidden border-r border-white/10 bg-[url(../assets/bg-stars.svg)] bg-cover px-28 py-16">
        {/* Blur */}
        <div className="absolute right-0 top-1/2 h-[288px] w-[526px] -translate-y-1/2 translate-x-1/2 rounded-full bg-purple-700 blur-full" />

        {/* Stripes */}
        <div className="absolute bottom-0 right-2 top-0 w-2 bg-stripes" />

        {/* SignIn */}
        <a
          href=""
          className="flex items-center gap-3 text-left transition-colors hover:text-gray-50"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-400">
            <User className="h-5 w-5 text-gray-500" />
          </div>
          <p className="max-w-[140px] text-sm leading-snug">
            <span className="underline">Crie sua conta</span> e salve suas
            memórias!
          </p>
        </a>

        {/* Hero */}
        <div className="flex flex-col gap-8">
          <Image src={nlwLogo} alt="Nlw SpaceTime" />
          <div>
            <h1 className="text-5xl font-bold leading-tight text-gray-50">
              Sua cápsula do tempo
            </h1>
            <p className="mt-1 w-[420px] text-lg leading-relaxed text-gray-100">
              Colecione momentos marcantes da sua jornada e compartilhe (se
              quiser) com o mundo!
            </p>
          </div>
          <a
            href=""
            className="w-[214px] rounded-full bg-green-500 px-5 py-3 font-alt text-sm leading-none text-black transition-colors hover:bg-green-400"
          >
            CADASTRAR LEMBRANÇA
          </a>
        </div>

        {/* Copyright */}
        <div className="text-sm leading-relaxed text-gray-200">
          Feito com 💜 no NLW da{' '}
          <a
            target="_blank"
            rel="noreferrer"
            className="underline hover:text-gray-100"
            href="https://rocketseat.com.br"
          >
            Rocketseat
          </a>
        </div>
      </div>

      {/* Right */}
      <div className="flex flex-col bg-[url(../assets/bg-stars.svg)] bg-cover p-16">
        <div className="flex flex-1 items-center justify-center">
          <p className="w-[360px] text-center leading-relaxed">
            Você ainda não registrou nenhuma lembrança, comece a{' '}
            <a className="underline hover:text-gray-50" href="">
              criar agora!
            </a>
          </p>
        </div>
      </div>
    </main>
  )
}
