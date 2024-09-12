import Radio from '@/components/base/Radio';

const RadioComponent = () => {
  return (
    <div
      style={{
        display: 'flex',
        columnGap: '32px',
        backgroundColor: 'white',
        padding: 24,
        borderRadius: '6px',
      }}
    >
      <Radio name="radio" label="Radio 1" />
      <Radio name="radio" label="Radio 2" />
      <Radio name="radio" label="Radio 3" disabled />
    </div>
  );
};
export default RadioComponent;
