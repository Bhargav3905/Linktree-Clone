"use client";

import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useSearchParams } from 'next/navigation';
import 'react-toastify/dist/ReactToastify.css';

const Generate = () => {

    const searchParams = useSearchParams()

    const [links, setLinks] = useState([{ link: "", linktext: "" }])
    const [handle, setHandle] = useState(searchParams.get('handle') || "");
    const [picture, setPicture] = useState("")

    const handleChange = (index, newlink, newlinktext) => {
        setLinks((initialLinks) => {
            return initialLinks.map((item, i) => {
                if (i === index) {
                    return { link: newlink, linktext: newlinktext }
                }
                else {
                    return item;
                }
            })
        })
    }

    const addLink = () => {
        setLinks(links.concat([{ link: "", linktext: "" }]))
    }

    const submitLinks = async () => {
        const raw = JSON.stringify({
            "links": links,
            "handle": handle,
            "picture": picture
        });

        const res = await fetch("/api/add", {
            method: "POST",
            headers: {"Content-Type": 'application/json'},
            body: raw,
        });

        const result = await res.json()

        if (result.success) {
            toast.success(result.message)
            setTimeout(() => {
                window.location.href = `/${handle}`;
            }, 1000);
        }else {
            toast.error(result.message)
        }
    }

    return (
        <div className='bg-gradient-to-r from-blue-700 to-blue-500 min-h-screen grid grid-cols-1 md:grid-cols-2'>

            <div className="flex justify-center items-center flex-col gap-10 px-6 py-12 md:py-20">
                <h1 className="text-white text-3xl font-bold">Create your Bittree</h1>
                <div className='flex flex-col gap-6 w-full max-w-lg items-center bg-white/10 p-8 rounded-2xl shadow-lg'>
                    <h2 className='text-white text-3xl font-semibold'>Step 1: Claim Your Handle</h2>
                    <input
                        type="text"
                        value={handle}
                        onChange={e => { setHandle(e.target.value) }}
                        placeholder='Choose a Handle'
                        className="w-full text-lg bg-white p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300 placeholder-gray-500 shadow-sm"
                    />
                    <h2 className='text-white text-3xl font-semibold'>Step 2: Add Links</h2>
                    {links && links.map((item, index) => {
                        return (
                            <div key={index} className='my-2'>
                                <div className='flex gap-2'>
                                    <input
                                        type="text"
                                        value={item.link || ""}
                                        onChange={e => { handleChange(index, e.target.value, item.linktext) }}
                                        placeholder='Enter link'
                                        className="w-full text-lg bg-white p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300 placeholder-gray-500 shadow-sm"
                                    />
                                    <input
                                        type="text"
                                        value={item.linktext || ""}
                                        onChange={e => { handleChange(index, item.link, e.target.value) }}
                                        placeholder='Enter link text'
                                        className="w-full text-lg bg-white p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300 placeholder-gray-500 shadow-sm"
                                    />
                                </div>
                            </div>
                        )
                    })}

                    <button
                        onClick={() => addLink()}
                        className='w-full text-lg py-3 px-6 bg-blue-500 hover:bg-blue-600 transition-all duration-300 rounded-full text-white font-semibold shadow-md'>
                        + ADD LINKS
                    </button>
                    <h2 className='text-white text-3xl font-semibold'>Step 3: Add Picture and Final</h2>
                    <input
                        type="text"
                        value={picture || ""}
                        onChange={e => { setPicture(e.target.value) }}
                        placeholder='Enter link to your Picture'
                        className="w-full text-lg bg-white p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300 placeholder-gray-500 shadow-sm"
                    />
                    <button
                        onClick={() => { submitLinks() }}
                        disabled={picture == "" || handle == "" || links[0].linktext == ""}
                        className='disabled:bg-blue-200 w-full text-lg py-3 px-6 bg-blue-500 hover:bg-blue-600 transition-all duration-300 rounded-full text-white font-semibold shadow-md'>
                        CREATE YOUR BITLINK
                    </button>
                </div>
            </div>
            <div className="w-full h-screen">
                <img
                    className="w-full h-full object-cover"
                    src="/generate.png"
                    alt="Generate your links"
                />
            </div>
            <ToastContainer />
        </div>
    );
};

export default Generate;
