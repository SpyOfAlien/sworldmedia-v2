import Image from 'next/image';
import { useTranslation } from 'next-i18next';

const ProjectItem = ({ project }) => {
  const { t } = useTranslation('common');

  return (
    <div className="sw-glass sw-text-white sw-flex sw-p-12 sw-rounded-md">
      <div className="sw-w-3/5 sw-pr-12">
        <h6 className="sw-text-barlow">{project.name}</h6>
        <p>{project.summary}</p>
        <button>{t('action__findoutmore')}</button>
      </div>
      <div className="sw-w-2/5">
        <div className="sw-w-full sw-mb-4">
          <Image
            src={project.imgUrl}
            width={381}
            height={411}
            layout="responsive"
          />
        </div>
        <p className="sw-text-right">{project.type}</p>
      </div>
    </div>
  );
};

export default ProjectItem;
