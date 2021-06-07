import { FC } from 'react';
import cn from 'classnames';
import s from './card.module.scss';
import Image from 'next/image';
import Heading from '../../../ui/typo/heading';
import Link from 'next/link';
import { format } from 'date-fns';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Paragraph from '../../../ui/typo/paragraph';
import { useRouter } from 'next/router';

interface Props {
  post: any;
  type?: string;
  cl?: string;
}

const PostCard: FC<Props> = ({ post, type, cl }) => {
  const {
    vnTitle,
    enTitle,
    vnSummary,
    enSummary,
    coverImage,
    date,
    enTags,
    vnTags,
    vnSlug,
    enSlug,
  } = post;
  const formatedDate = format(new Date(date), 'LLLL d, yyyy');
  const router = useRouter();

  return (
    <Link href={`/blogs/${router.locale === 'en' ? enSlug : vnSlug}`}>
      <div
        className={cn('sw-flex sw-rounded-sm sw-cursor-pointer', cl, {
          [s.big]: type === 'big',
          [s.small]: type === 'small',
        })}
      >
        <div
          className={cn({
            [s.imageBig]: type === 'big',
            [s.image]: type === 'small',
          })}
        >
          <Image src={coverImage.url} width={1000} height={522} />
        </div>

        <div
          className={cn({
            [s.contentBig]: type === 'big',
            [s.content]: type !== 'big',
          })}
        >
          <div>
            <div>
              {router.locale === 'vn'
                ? vnTags
                  ? vnTags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="sw-mr-2 sw-text-paragraph sw-capitalize"
                      >
                        {tag}
                        {vnTags.length - 1 === idx ? (
                          ''
                        ) : (
                          <span className="sw-ml-2">|</span>
                        )}
                      </span>
                    ))
                  : null
                : enTags
                ? enTags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="sw-mr-2 sw-text-paragraph sw-capitalize"
                    >
                      {tag}
                      {enTags.length - 1 === idx ? (
                        ''
                      ) : (
                        <span className="sw-ml-2">|</span>
                      )}
                    </span>
                  ))
                : null}
            </div>

            <div
              style={{ minHeight: '4rem' }}
              className="sw-my-2 sw-whitespace-nowrap sw-overflow-ellipsis sw-overflow-hidden"
            >
              <Heading h="h6">
                {router.locale === 'vn' ? vnTitle : enTitle}
              </Heading>
            </div>
            {type === 'big' && (
              <Paragraph cl="sw-py-2">
                {router.locale === 'vn' ? vnSummary : enSummary}
              </Paragraph>
            )}
          </div>
          <div className="sw-text-paragraph">{formatedDate}</div>
        </div>
      </div>
    </Link>
  );
};

export default PostCard;
