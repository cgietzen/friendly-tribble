import NextLink from 'next/link'
import Image from 'next/image'
import siteLogo from 'public/site-logo.svg'
import contactLogo from 'public/site-contact.svg'
import { Link } from '@chakra-ui/react'

export default function Navigation() {
    return (
        <div className="grid grid-cols-12 py-4 w-full fixed top-0">
            <div className="lg:col-start-1 lg:col-span-1 p-[3.5%] grid grid-cols-1 gap-y-4 px-4">
                <Link href="/" className="">
                    <Image
                        src={siteLogo}
                        alt=""
                        blurDataURL="data:..."
                        placeholder="blur"
                    />
                </Link>
                <Link href="/" className="">
                    <Image
                        src={siteContact}
                        alt=""
                        blurDataURL="data:..."
                        placeholder="blur"
                    />
                </Link>
            </div>
        </div>
    )
}
