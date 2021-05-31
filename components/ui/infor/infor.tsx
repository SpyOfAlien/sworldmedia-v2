import SubscribeForm from '../../common/subscribe/subscribe';
import Gmail from '../../icons/gmail';
import Location from '../../icons/location';
import Phone from '../../icons/phone';
import Heading from '../typo/heading';
import Paragraph from '../typo/paragraph';

const Infor = () => {
  return (
    <div>
      <Heading h="h6" cl="sw-text-paragraph sw-mb-xsm">
        Thông tin liên hệ
      </Heading>
      <span className="sw-flex sw-mb-sm">
        <span className="sw-block">
          <Phone />
        </span>
        <Paragraph cl="sw-ml-4 sw-font-normal">(+84) 817 701 604</Paragraph>
      </span>
      <span className="sw-flex sw-mb-sm">
        <span className="sw-block">
          <Gmail />
        </span>
        <Paragraph cl="sw-ml-4 sw-font-normal">info@s-worldmedia.com</Paragraph>
      </span>
      <span className="sw-flex sw-mb-sm">
        <span className="sw-block">
          <Location />
        </span>
        <Paragraph cl="sw-ml-4 sw-font-normal">
          31.OT.09, Landmark 81, Vinhomes Central Park, 720A Điện Biên Phủ,
          Phường 22, Quận Bình Thạnh, TP.HCM
        </Paragraph>
      </span>
    </div>
  );
};

export default Infor;
