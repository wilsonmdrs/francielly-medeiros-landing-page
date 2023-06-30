/* Styles */
import { Container } from "./styles"

/* Translation */
import { lashLifting } from "~/translation"

interface AboutProps {
    title:string
}

export const About = ({ title } : AboutProps) => {

    return (
        <Container title={title}>
            About
        </Container>
    )
}