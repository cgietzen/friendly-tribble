import { useState } from 'react'

import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Navigation from '../../components/navigation'
import projectImage from '../../public/verywarm_web.png'
import Contact from '../../components/contact'

export default function Home() {
    const [toggle, setToggle] = useState(false)
    const handleToggle = () => {
        setToggle(!toggle)
    }

    return (
        <div className="min-h-screen relative">
            <Head>
                <title>Projects | The Very Warm</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <h1 className="sr-only">The Very Warm Project</h1>
            <div className="flex flex-col justify-center min-h-screen">
                <div className="grid grid-cols-12 py-5 lg:py-10 relative">
                    <Navigation toggle={handleToggle} />
                    <div className="col-start-1 lg:col-start-2 col-span-12 lg:col-span-10 relative px-[5%] pt-5 lg:pt-10">
                        <Image
                            src={projectImage}
                            alt=""
                            // width={500} automatically provided
                            // height={500} automatically provided
                            blurDataURL="data:..."
                            placeholder="blur"
                        />
                        <a
                            href="https://www.instagram.com/p/Ck_-WtMpZ73/"
                            target="_blank"
                            className="absolute top-[63%] left-[19.5%] w-[18.5%] h-[18.5%]"
                        >
                            <span className="sr-only">View on instagram</span>
                        </a>
                        <a
                            href="https://www.instagram.com/p/Cm-COGBOv-f/"
                            target="_blank"
                            className="absolute top-[63%] right-[19.5%] w-[18.5%] h-[18.5%]"
                        >
                            <span className="sr-only">View on instagram</span>
                        </a>
                    </div>
                </div>
            </div>
            {toggle && <Contact toggle={handleToggle} />}
        </div>
    )
}
