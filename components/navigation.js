import NextLink from 'next/link'
import Image from 'next/image'
import siteLogo from 'public/site-logo.svg'
import contactLogo from 'public/site-contact.svg'
import { Link } from '@chakra-ui/react'

export default function Navigation() {
    return (
        <nav class="p-4 items-center fixed w-full top-0 flex justify-between gap-y-4">
            <Link as={NextLink} href="/">
                <Image
                    class="w-20 h-auto"
                    src={siteLogo}
                    alt=""
                    // width={500} automatically provided
                    // height={500} automatically provided
                    blurDataURL="data:..."
                    placeholder="blur"
                />
            </Link>

            <Link as={NextLink} href="/">
                <Image
                    class="w-20 h-auto"
                    src={contactLogo}
                    alt=""
                    // width={500} automatically provided
                    // height={500} automatically provided
                    blurDataURL="data:..."
                    placeholder="blur"
                />
            </Link>
        </nav>
    )
}
