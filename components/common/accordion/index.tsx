import { FC, useState } from 'react';
import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion';
import Expand from '../../icons/expand';
import cn from 'classnames';

interface QA {
  question: string;
  answer: string;
}

interface Props {
  data: QA[];
  size?: string;
}

const Accordion: FC<Props> = ({ data, size = 'h5' }) => {
  return (
    <AnimateSharedLayout>
      <motion.ul layout>
        {data.map((item, idx) => (
          <AccordionItem
            key={idx}
            question={item.question}
            answer={item.answer}
            size={size}
          />
        ))}
      </motion.ul>
    </AnimateSharedLayout>
  );
};

const AccordionContent = ({ answer, size }) => {
  return (
    <motion.p
      className={cn(
        'sw-text-sm sw-text-dark-grey sw-whitespace-pre-line sw-gilroy-thin '
      )}
      layout
      initial={{ opacity: 0, height: 0, marginTop: 0 }}
      animate={{
        opacity: 1,
        height: 'auto',
        marginTop: size === 'sm' ? '20px' : '24px',
        transition: { duration: 0.4 },
      }}
      exit={{
        opacity: 0,
        height: 0,
        marginTop: 0,
        transition: { duration: 0.3 },
      }}
    >
      {answer}
    </motion.p>
  );
};

const AccordionItem: FC<any> = ({ question, answer, size }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <motion.li
      className={cn(
        'sw-border-solid sw-border-dark-grey ',
        size === 'sm'
          ? 'sw-py-2 sw-mb-6 sw-border-b'
          : 'sw-py-6 sw-mb-4 sw-border-b-2'
      )}
      layout
      onClick={toggleOpen}
    >
      <motion.div className="sw-flex sw-justify-between sw-items-center">
        <p
          className={cn(
            'sw-text-dark-grey sw-font-semibold sw-cursor-pointer',
            `sw-text-${size}`
          )}
        >
          {question}
        </p>
        <span
          style={
            isOpen
              ? { transform: 'rotate(90deg)', transition: '.4s' }
              : { transition: '.4s' }
          }
        >
          <Expand />
        </span>
      </motion.div>
      <AnimatePresence>
        {isOpen && <AccordionContent size={size} answer={answer} />}
      </AnimatePresence>
    </motion.li>
  );
};

export default Accordion;
