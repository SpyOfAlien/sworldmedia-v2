import { Container } from '../../../layout';
import services from '../../../../lib/data/services';
import SmallCard from '../../../ui/cards/small/small';
import { useUI } from '../../../../lib/context/ui-context';

const ServicePage = () => {
  const { openModal, closeModal, setModalView } = useUI();

  const openPopup = (view) => {
    openModal();
    setModalView(view);
  };

  return (
    <Container cl="sw-flex sw-flex-col md:sw-flex-row sw-items-center sw-justify-center sw-h-full sw-w-full">
      <div className="sw-w-full md:sw-w-1/3"></div>
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
    </Container>
  );
};
export default ServicePage;
