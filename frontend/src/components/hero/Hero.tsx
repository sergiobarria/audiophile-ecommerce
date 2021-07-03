import Container from '../helpers/container/Container';
import ButtonOne from '../ui/button-one/ButtonOne';

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
          <ButtonOne>see product</ButtonOne>
        </article>
      </Container>
    </HeroContainer>
  );
};

export default Hero;
