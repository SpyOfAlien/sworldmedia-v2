import { FC } from 'react';
import cn from 'classnames';
import s from './card.module.scss';
import Image from 'next/image';
import Heading from '../../../ui/typo/heading';
import Link from 'next/link';
import { format } from 'date-fns';
import { useRouter } from 'next/router';

interface Props {
  post: any;
  type?: string;
  cl?: string;
}

const PostCard: FC<Props> = ({ post, type, cl }) => {
  const { coverImage, title, tags, slug, date } = post;

  const formatedDate = format(new Date(date), 'LLLL d, yyyy');

  return (
    <Link href={`/blogs/${slug}`}>
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
          <div className="sw-my-2">
            <div>
              {' '}
              {tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="sw-mr-2 sw-text-paragraph sw-capitalize"
                >
                  {tag} {tags.length - 1 === idx ? '' : '|'}
                </span>
              ))}{' '}
            </div>

            <div
              style={{ minHeight: '4rem' }}
              className="sw-my-2 sw-whitespace-nowrap sw-overflow-ellipsis sw-overflow-hidden"
            >
              <Heading h="h6">{title}</Heading>
            </div>
          </div>

          <div className="sw-text-paragraph">{formatedDate}</div>
        </div>
      </div>
    </Link>
  );
};

export default PostCard;
