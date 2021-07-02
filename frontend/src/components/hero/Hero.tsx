import Container from '../helpers/container/Container';
import ButtonPrimary from '../ui/ButtonPrimary';

import { HeroContainer } from './Hero.styles';

const Hero: React.FC = () => {
  return (
    <HeroContainer>
      <Container>
        <div className="hero-image"></div>
        <article>
          <h6 className="overline">new product</h6>
          <h1>XX99 Mark II Headphones</h1>
          <p>
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <ButtonPrimary>see product</ButtonPrimary>
        </article>
      </Container>
    </HeroContainer>
  );
};

export default Hero;
