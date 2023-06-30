import { LogoImage } from "~/assets"
import { Container, Logo } from "./styles"

export const Navbar = () => {

    return (
        <Container>
            <Logo src={LogoImage} alt="logo" />
        </Container>
    )
}