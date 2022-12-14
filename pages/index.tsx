import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import indexImage from '../public/index-image.png'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Head>
        <title>Allan Khorsheed | Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <h1 className="sr-only">Allan Khorsheed</h1>
        <div className="flex flex-col justify-center min-h-screen">
        <div className="grid grid-cols-12 py-[5vw]">
            <div className="col-start-1 lg:col-start-2 col-span-12 lg:col-span-10 relative">
                 <Image
                    src={indexImage}
                    alt=""
                    // width={500} automatically provided
                    // height={500} automatically provided
                    blurDataURL="data:..."
                    placeholder="blur"
                />
                <Link href="mailto:allan.khorsheed@gmail.com" className="absolute top-[18%] right-[7%] w-1/4 h-[5%]">
                    <span className="sr-only">Contact Me</span>
                </Link>
                <Link href="https://www.instagram.com/anton___/" className="absolute top-[12%] right-[33%] w-[2%] h-[1.5%]">
                    <span className="sr-only">Instagram</span>
                </Link>
            </div>
        </div>
        </div>
    </div>
  )
}
