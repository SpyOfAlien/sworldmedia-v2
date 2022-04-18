import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';

const ProjectItem = ({ project }) => {
  const { t } = useTranslation('common');
  const router = useRouter();

  const onReadmore = () => {
    router.locale === 'vn'
      ? router.push(`/vn/blogs/${project.vnSlug}`)
      : router.push(`/en/blogs/${project.enSlug}`);
  };

  return (
    <div
      style={{ minHeight: '450px' }}
      className="sw-glass sw-text-white sw-flex sw-flex-col lg:sw-flex-row sw-p-4 lg:sw-p-12 sw-rounded-md"
    >
      <div className="sw-w-full lg:sw-w-3/5 sw-pr-12">
        <h6 className="sw-text-barlow sw-text-h6 sw-mb-4 sw-font-semibold ">
          {router.locale === 'en' ? project.enName : project.vnName}
        </h6>
        <p className="sw-mb-4 sw-gilroy-thin">
          {router.locale === 'en' ? project.enSummary : project.vnSummary}
        </p>
        <button onClick={onReadmore}>{t('action__findoutmore')}</button>
      </div>
      <div className="sw-w-full lg:sw-w-2/5">
        <div className="sw-w-full sw-mb-4">
          <Image
            src={project.thumbnail.url}
            width={project.thumbnail.width}
            height={project.thumbnail.height}
            layout="responsive"
          />
        </div>
        <p className="sw-text-right">{project.type}</p>
      </div>
    </div>
  );
};

export default ProjectItem;
