import Input from '@/components/base/Input';

const InputComponent = () => {
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
      <Input placeholder="Your email" />
      <Input placeholder="Your email" disabled />
    </div>
  );
};
export default InputComponent;
