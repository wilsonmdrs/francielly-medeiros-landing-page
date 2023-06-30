import { Tab } from "~/components/Tab"
import { Container, Title } from "./styles"
import { lashLifting } from "~/translation"
import { About } from "./components/About"
import { Module } from "./components/Module"
import { Deposition } from "./components/Depositions"

export const LashLifting = () => {

    return (
        <Container>
            <Title>{lashLifting.title}</Title>
            <Tab>
                <About title={lashLifting.about.title}/>
                <Module title={lashLifting.module.title}/>
                <Deposition title={lashLifting.depositions.title}/>
            </Tab>
        </Container>
    )
}