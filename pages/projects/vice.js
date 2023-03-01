import { useState } from 'react'

import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import projectImage from '../../public/vice_web.jpg'
import Contact from '../../components/contact'
import Navigation from '../../components/navigation'

export default function Home() {
    const [toggle, setToggle] = useState(false)
    const handleToggle = () => {
        setToggle(!toggle)
    }

    return (
        <div className="min-h-screen relative">
            <Head>
                <title>Projects | Vice</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <h1 className="sr-only">Singers Project</h1>
            <div className="flex flex-col justify-start lg:justify-center min-h-screen">
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
                    </div>
                </div>
            </div>
            {toggle && <Contact toggle={handleToggle} />}
        </div>
    )
}
