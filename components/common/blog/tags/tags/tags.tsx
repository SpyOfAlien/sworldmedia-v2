import { FC } from 'react';
import Tag from '../tag/tag';

interface Props {
  tags: string[];
}

const Tags: FC<Props> = ({ tags }) => {
  return (
    <div style={{ borderRadius: '59px' }} className="sw-flex sw-flex-wrap">
      {tags.map((tag, idx) => (
        <Tag key={idx} tag={tag} />
      ))}
    </div>
  );
};

export default Tags;
