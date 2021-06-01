import Heading from '../../ui/typo/heading';
import { FC } from 'react';
import Image from 'next/image';
import cn from 'classnames';

interface Props {
  title: string;
  imgSrc: string;
  cl?: string;
}

const Clients: FC<Props> = ({ title, imgSrc, cl }) => {
  document.addEventListener('mousemove', parallax);
  function parallax(e) {
    this.querySelectorAll('.image').forEach((layer) => {
      const speed = layer.getAttribute('data-speed');

      const x = (window.innerWidth - e.pageX * speed) / 100;
      const y = (window.innerHeight - e.pageY * speed) / 100;

      layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });
  }

  return (
    <div
      className={cn(
        'sw-flex sw-items-center sw-flex-col sw-items-center sw-justify-center sw-h-full',
        cl
      )}
    >
      <Heading h="h4" cl="sw-text-gradient">
        {title}
      </Heading>
      <Image className="image" src={imgSrc} width={907} height={680} />
    </div>
  );
};

export default Clients;
