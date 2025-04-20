import Link from 'next/link'
import { Cog6ToothIcon } from '@heroicons/react/24/solid'
import Play from './play/page'
import { useState } from 'react'

export default function Home() {
  const [settings, openSettings] = useState(false)
  const [countdown, setCountdown] = useState(true)
  const [timer, setTimer] = useState(30)
  const [category, setCategory] = useState('all')

  return (
    <main className="flex h-screen content-center justify-center">
      <div className="content-center">
        <div className="grid grid-rows-2 gap-4 text-center">
          <div className="text-8xl font-bold tracking-tighter text-[#FFEA00]">guess the emojis</div>
          <div className="relative">
            <div className="absolute -top-8 right-40 -rotate-3 bg-[#52F683] p-3 font-mono text-3xl font-bold text-[#353535]">
              THE BIBLE EDITION
            </div>
          </div>
        </div>
        <div className="grid grid-rows-2 justify-center gap-4 text-center">
          <div className="">
            <button className="w-2xs rounded-full bg-[#A100FF] p-3 text-3xl font-bold text-white hover:bg-[#B83FFF]">
              LET'S PLAY
            </button>
          </div>
          <div className="flex justify-center">
            <Cog6ToothIcon className="size-6 text-white" />
          </div>
        </div>
      </div>
    </main>
  )
}
