import NextLink from 'next/link'
import Image from 'next/image'
import siteLogo from 'public/site-logo-scanned.png'
import contactLogo from 'public/contact-scanned.png'
import { Link } from '@chakra-ui/react'

export default function Navigation({ toggle }) {
    return (
        <nav class="px-[5%] col-start-1 col-span-12 lg:col-span-1  gap-y-4 lg:pt-10 lg:sticky lg:top-10 lg:h-auto">
            <div class=" items-center lg:items-end w-full flex lg:flex-col justify-start">
                <Link
                    className="inline-block mr-[2.5%] lg:mr-0 lg:mb-5"
                    as={NextLink}
                    href="/"
                >
                    <Image
                        className="w-8 lg:w-16 h-auto"
                        src={siteLogo}
                        alt=""
                        // width={500} automatically provided
                        // height={500} automatically provided
                        blurDataURL="data:..."
                        placeholder="blur"
                    />
                </Link>

                <button onClick={toggle}>
                    <Image
                        className="w-8 lg:w-16 h-auto"
                        src={contactLogo}
                        alt=""
                        // width={500} automatically provided
                        // height={500} automatically provided
                        blurDataURL="data:..."
                        placeholder="blur"
                    />
                </button>
            </div>
        </nav>
    )
}
