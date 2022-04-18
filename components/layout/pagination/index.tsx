import { useEffect, useState } from 'react';
import cn from 'classnames';

const Pagination = ({ pageCount, setPage, activePage }) => {
  const [pages, setPages] = useState([]);

  useEffect(() => {
    setPages([...Array.from(Array(pageCount).keys())]);
  }, []);

  return (
    <div className="sw-flex sw-justify-center sw-my-12">
      {pages.map((item) => (
        <span
          onClick={() => setPage(item + 1)}
          className={cn(
            'sw-flex sw-justify-center sw-w-6 sw-h-6 sw-mr-2 sw-rounded-xs sw-text-white sw-cursor-pointer hover:sw-bg-white hover:sw-text-black',
            activePage === item + 1 && 'sw-glass'
          )}
        >
          {item + 1}
        </span>
      ))}
    </div>
  );
};

export default Pagination;
