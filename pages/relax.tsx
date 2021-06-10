import Input from '../components/ui/input/input';
import Tetxarea from '../components/ui/input/textarea';
import Heading from '../components/ui/typo/heading';

const Relax = () => {
  const handleChange = () => {};
  const getRandomValue = () => {
    return 'hehe';
  };

  return (
    <div className="sw-flex sw-justify-center sw-items-center sw-w-full sw-h-full sw-mt-header sw-flex-col">
      <div>
        <Heading h="h3">For Relax</Heading>
      </div>
      {/* Random text */}
      <div>
        <Tetxarea value={getRandomValue()} />
      </div>
      <div>
        <Input onChange={handleChange} />
      </div>
    </div>
  );
};
export default Relax;
