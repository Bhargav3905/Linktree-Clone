"use client"
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {

  const router = useRouter()
  const createTree = () => {
    router.push(`/generate?handle=${text}`)
  }
  const [text, setText] = useState("")

  return (
    <main>
      <section className="bg-[#254f1a] min-h-[100vh] grid grid-cols-2">
        <div className="flex flex-col justify-center ml-[5vw] gap-3">
          <p className="text-yellow-300 font-bold text-7xl">Everything you</p>
          <p className="text-yellow-300 font-bold text-7xl">are. In one,</p>
          <p className="text-yellow-300 font-bold text-7xl my-4">simple link in bio.</p>

          <p className="text-white">Join 70M+ people using Linktree for their link in bio. One link to help you share
            everything you create, curate and sell from your Instagram, TikTok, Twitter,
            YouTube and other social media profiles.</p>
          <div className="input flex gap-2">
            <input value={text} onChange={(e)=> setText(e.target.value)}className="bg-white px-2 py-2 focus:outline-green-800 rounded-md" 
            type="text" placeholder="Enter Your Handle" />
            <button onClick={() => createTree()} className="bg-pink-300 rounded-full px-4 py-4 font-semibold">
              Claim your Bittree</button>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center mr-[5vw]">
          <img className="h-150" src="/home.png" alt="homepage image" />
        </div>
      </section>
      <section className="bg-red-200 min-h-[100vh]">

      </section>
    </main>
  );
}
