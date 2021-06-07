import { useTranslation } from 'react-i18next';
import { useUI } from '../../../lib/context/ui-context';
import Button from '../../ui/button/button';
import Heading from '../../ui/typo/heading';
import Paragraph from '../../ui/typo/paragraph';

const Notification = () => {
  const { closeSubModal, setConfirmData, confirm } = useUI();
  const handleConfirm = () => {
    setConfirmData({});
    closeSubModal();
  };
  const { t } = useTranslation('common');

  return (
    <div className="sw-p-8 sw-relative">
      <Heading cl="sw-mb-4" h="h6">
        {t(confirm.title)}
      </Heading>
      <Paragraph>{t(confirm.message)}</Paragraph>
      <div className="sw-flex sw-justify-end">
        <Button
          onclick={handleConfirm}
          text="OK"
          type="gradient"
          cl="sw-w-24 sw-h-8 sw-mt-4"
        ></Button>
      </div>
    </div>
  );
};
export default Notification;
