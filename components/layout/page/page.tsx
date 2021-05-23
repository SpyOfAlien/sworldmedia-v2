import { FC, useState } from 'react';
import cn from 'classnames';
import s from './page.module.scss';
import Modal from '../modal/modal';
import { useUI } from '../../../lib/context/ui-context';
import dynamic from 'next/dynamic';

interface Props {
  children: any;
  pageProps: {
    page?: any;
  };
}

const ServiceDetail = dynamic(() => import('../../common/service-detail'));

const Page: FC<Props> = ({ children, pageProps: { ...pageProps } }) => {
  const { closeModal, displayModal, modalView } = useUI();
  const [isActiveHumburger, setIsActiveHumburger] = useState(false);

  const brandCommunication = {
    icon: '/assets/svg/brand-communication.svg',
    name: 'Xây dựng thương hiệu',
    label: 'Xây dựng thương hiệu',
    content:
      'S-World cung cấp giải pháp toàn diện cho thương hiệu khi tư vấn và xây dựng những yếu tố: Câu chuyện thương hiệu, slogan, định vị khách hàng và chiến lược phát triển, để doanh nghiệp đến gần hơn với khách hàng.',
    subService: [
      'Phát triển concept',
      'Thiết kế bộ nhận diện thương hiệu',
      'Chiến lược thương hiệu',
    ],
  };

  return (
    <div className={s.root}>
      <main>{children}</main>

      <Modal open={displayModal} onClose={closeModal}>
        {modalView === '' && <ServiceDetail data={brandCommunication} />}
      </Modal>

      <div
        className={cn(s.hamburger, s.hamburgerSlider, {
          [s.active]: isActiveHumburger,
        })}
        onClick={() => setIsActiveHumburger(!isActiveHumburger)}
      >
        <div className={s.hamburgerBox}>
          <span className={s.hamburgerInner}></span>
        </div>
      </div>
    </div>
  );
};

export default Page;
