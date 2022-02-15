import { FC } from 'react';
import PostCard from '../card/post-card';
import cn from 'classnames';

interface Props {
  posts: any;
}

const PostList: FC<Props> = ({ posts }) => {
  return (
    <div className="sw-flex sw-justify-between sw-w-full sw-flex-wrap">
      {posts &&
        posts.map((post, idx) => (
          <div
            key={idx}
            className={cn(
              `sw-w-full sw-mb-16 md:sw-w-48 lg:sw-w-31 sw-flex ${
                (idx + 1) % 2 === 0 ? 'sw-justify-end' : ''
              }`
            )}
          >
            <PostCard type="small" post={post} />
          </div>
        ))}
    </div>
  );
};

export default PostList;
