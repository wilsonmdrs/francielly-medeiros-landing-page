/* Styles */
import { Container } from "./styles"

/* Translation */
import { lashLifting } from "~/translation"

interface DepositionProps {
    title:string
}

export const Deposition = ({ title } : DepositionProps) => {

    return (
        <Container title={title}>
            Modules
        </Container>
    )
}