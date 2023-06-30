/* Styles */
import { Container } from "./styles"

/* Translation */
import { lashLifting } from "~/translation"

interface ModuleProps {
    title:string
}

export const Module = ({ title } : ModuleProps) => {

    return (
        <Container title={title}>
            Deposition
        </Container>
    )
}