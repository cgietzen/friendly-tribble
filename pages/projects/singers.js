import { useState } from 'react'

import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import projectImage from '../../public/singers_web.jpg'
import Contact from '../../components/contact'

export default function Home() {
    const [isContactOpen, setIsContactOpen] = useState(false)
    const toggleMenu = () => setIsContactOpen(!isContactOpen)

    return (
        <div className="min-h-screen relative">
            <Head>
                <title>Projects | Singers</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <h1 className="sr-only">Singers Project</h1>
            <div className="flex flex-col justify-center min-h-screen">
                <div className="grid grid-cols-12 py-[5vw]">
                    <div className="col-start-1 lg:col-start-2 col-span-12 lg:col-span-10 relative px-[6.5%] pt-[3.5%]">
                        <Image
                            src={projectImage}
                            alt=""
                            // width={500} automatically provided
                            // height={500} automatically provided
                            blurDataURL="data:..."
                            placeholder="blur"
                        />

                        <button
                            onClick={toggleMenu}
                            isContactOpen={false}
                            className="absolute top-[18%] right-[7%] w-1/4 h-[5%]"
                        >
                            <span className="sr-only">Contact Me</span>
                        </button>
                        <a
                            href="https://www.instagram.com/p/CffN4daJTtv/"
                            target="_blank"
                            className="absolute top-[55.5%] left-[12%] w-[26.5%] h-[20%]"
                        >
                            <span className="sr-only">View on instagram</span>
                        </a>
                    </div>
                </div>
            </div>
            {isContactOpen && <Contact isContactOpen={setIsContactOpen} />}
        </div>
    )
}
