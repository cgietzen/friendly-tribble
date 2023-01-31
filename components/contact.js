import Image from 'next/image'
import formHeader from '../public/form-header.png'
import thankYou from '../public/thankyou.png'
import { sendContactForm } from '../lib/api'
import {
    FormControl,
    FormLabel,
    Textarea,
    Input,
    Button,
    VStack,
    Text,
    Center,
    Collapse,
} from '@chakra-ui/react'
import { useState } from 'react'

const initValues = { email: '', message: '' }
const initState = { values: initValues }

export default function Contact({ toggle }) {
    const [state, setState] = useState(initState)
    const [success, setSuccess] = useState(false)
    const { values, isLoading, error } = state

    const handleChange = ({ target }) =>
        setState((prev) => ({
            ...prev,
            values: {
                ...prev.values,
                [target.name]: target.value,
            },
        }))

    const onSubmit = async () => {
        setState((prev) => ({
            ...prev,
            isLoading: true,
        }))
        try {
            await sendContactForm(values)
            setSuccess(true)
            setState(initState)
        } catch (error) {
            setState((prev) => ({
                ...prev,
                isLoading: false,
                error: error.message,
            }))
        }
    }

    return (
        <div
            sx={{ '--black': '#000000' }}
            className="w-full last:absolute top-1/2 transform -translate-y-1/2 md:-translate-y-[48vw] grid grid-cols-12"
        >
            <div className="col-start-1 col-span-12 lg:col-start-4 lg:col-span-6 px-8 pb-8 pt-12 shadow-lg bg-white relative">
                <button
                    onClick={toggle}
                    className="absolute top-0 right-0 mt-2 mr-2"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-7 h-7"
                    >
                        <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                    </svg>
                </button>

                <Collapse in={!success} animateOpacity>
                    <VStack spacing="2rem">
                        <Image src={formHeader} alt="Picture of the author" />
                        {error && (
                            <Text color="red.300" my={4} fontSize="xl">
                                {error}
                            </Text>
                        )}
                        <FormControl isRequired>
                            <FormLabel className="uppercase">
                                Email Address
                            </FormLabel>
                            <Input
                                type="email"
                                name="email"
                                value={values.email}
                                onChange={handleChange}
                            />
                        </FormControl>
                        <FormControl isRequired>
                            <FormLabel className="uppercase">Message</FormLabel>
                            <Textarea
                                name="message"
                                value={values.message}
                                onChange={handleChange}
                                rows={5}
                            />
                        </FormControl>
                        <Button
                            colorScheme="yellow"
                            isLoading={isLoading}
                            disabled={!values.email || !values.message}
                            onClick={onSubmit}
                        >
                            Submit
                        </Button>
                    </VStack>
                </Collapse>
                <Collapse in={success} animateOpacity>
                    <Center>
                        <Image src={thankYou} alt="Thank you!" width={250} />
                    </Center>
                </Collapse>
            </div>
        </div>
    )
}
