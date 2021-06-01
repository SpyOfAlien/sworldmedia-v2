import { Container } from '../components/layout';
import Heading from '../components/ui/typo/heading';
import { useMediaQuery } from 'react-responsive';

const AboutUs = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 1280px)',
  });

  return (
    <Container cl="sw-flex sw-flex-col sw-items-center">
      <Heading h={isDesktopOrLaptop ? 'h3' : 'h5'}>
        Câu chuyện của chúng tôi
      </Heading>
      <section></section>
      <section></section>
      <section></section>
    </Container>
  );
};

export default AboutUs;
