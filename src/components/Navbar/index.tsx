import { Button, Container, NavItem, NavItemContainer } from "./styles"

export const Navbar = () => {

    return (
        <Container>
            <NavItemContainer>
                <NavItem>Home</NavItem>
                <NavItem>Lash Lifting</NavItem>
                <NavItem>Starter</NavItem>
                <NavItem>Pro</NavItem>
                <NavItem>Buy</NavItem>
            </NavItemContainer>
            <Button>Comprar</Button>
        </Container>
    )
}