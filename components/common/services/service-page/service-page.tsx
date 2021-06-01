import { FC } from 'react';
import services from '../../../../lib/data/services';
import SmallCard from '../../../ui/cards/small/small';
import { useUI } from '../../../../lib/context/ui-context';
import Image from 'next/image';
import cn from 'classnames';

interface Props {
  cl?: string;
}

const ServicePage: FC<Props> = ({ cl }) => {
  const { openModal, closeModal, setModalView } = useUI();

  const openPopup = (view) => {
    openModal();
    setModalView(view);
  };

  return (
    <div
      className={cn(
        'sw-flex sw-flex-col md:sw-flex-row sw-items-center sw-justify-center sw-h-full sw-w-full',
        cl
      )}
    >
      <div className="sw-w-full md:sw-w-1/3">
        <Image
          src="/assets/svg/aboutus.svg"
          width={580}
          height={580}
          layout="responsive"
        />
      </div>
      <div className="sw-w-full md:sw-w-2/3">
        {services.map((item, idx) => (
          <SmallCard
            key={idx}
            cl="md:sw-w-2/3 sw-ml-auto sw-mb-4  sw-cursor-pointer"
            content={item.name}
            icon={item.icon}
            onClick={() => openPopup(item.modal)}
          />
        ))}
      </div>
    </div>
  );
};
export default ServicePage;
