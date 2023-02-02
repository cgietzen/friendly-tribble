import { useState } from 'react'

import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import projectImage from '../../public/eliqs_v2_web.jpg'
import Contact from '../../components/contact'

export default function Home() {
    const [isContactOpen, setIsContactOpen] = useState(false)
    const toggleMenu = () => setIsContactOpen(!isContactOpen)

    return (
        <div className="min-h-screen relative">
            <Head>
                <title>Projects | Elios</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <h1 className="sr-only">Eliqs Project</h1>
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
                        <Link
                            href="https://www.instagram.com/anton___/"
                            className="absolute top-[12%] right-[33%] w-[2%] h-[1.5%]"
                        >
                            <span className="sr-only">Instagram</span>
                        </Link>
                    </div>
                </div>
            </div>
            {isContactOpen && <Contact isContactOpen={setIsContactOpen} />}
        </div>
    )
}
