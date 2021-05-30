import Image from 'next/image';
import { FC } from 'react';
import { Container } from '../../layout';
import Medium from '../../ui/cards/medium/medium';

interface Props {
  data: any[];
}

const WhyUs: FC<Props> = ({ data }) => {
  return (
    <Container>
      <div className="sw-grid sw-grid-cols-1 md:sw-grid-cols-3 sw-w-3/4 sw-mx-auto md:sw-w-full sw-h-screen">
        <div className="md:sw-col-start-2 md:sw-row-start-1 md:sw-row-end-3 sw-flex sw-justify-center sw-items-center">
          <div className="sw-w-full">
            <Image
              src="/assets/svg/whyus.svg"
              width={580}
              height={580}
              layout="responsive"
            />
          </div>
        </div>
        {data.map((item, idx) => (
          <div
            key={idx}
            className="sw-flex sw-justify-center sw-items-center sw-my-12 md:sw-my-0"
          >
            <Medium icon={item.icon} content={item.content} />
          </div>
        ))}
      </div>
    </Container>
  );
};

export default WhyUs;
