import { BackgroundHome, CertifiedIcon } from "~/assets";
import {
  BackgroundImage,
  BenefitContainer,
  Button,
  Container,
  Icon,
  LeftContainer,
  RightContainer,
  Subtitle,
  Text,
  TextContainer,
  Title,
} from "./styles";
import { home } from "~/translation";
export const Home = () => {
  return (
    <Container>
      <BackgroundImage
        src={BackgroundHome}
        alt="background-image"
        quality={100}
      />
      <LeftContainer>
        <TextContainer>
          <Title>{home.title}</Title>
          <Subtitle>{home.subtitle}</Subtitle>
        </TextContainer>
        <Button>{home.button}</Button>
      </LeftContainer>
      <RightContainer>
        {home.benefits.map((item) => (
          <BenefitContainer key={item}>
            <Icon src={CertifiedIcon} alt='benefit-icon'/>
            <Text>{item}</Text>
          </BenefitContainer>
        ))}
      </RightContainer>
    </Container>
  );
};
