import Button from '@/components/base/Button';

const ButtonComponent = () => {
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
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outlined">Outlined</Button>
      <Button variant="primary" shape="circle">
        Primary Circle
      </Button>
      <Button variant="secondary" shape="circle">
        Secondary Circle
      </Button>
      <Button variant="outlined" shape="circle">
        Outlined Circle
      </Button>
    </div>
  );
};
export default ButtonComponent;
