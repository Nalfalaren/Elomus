import Button from '@/components/base/Button';
import Input from '@/components/base/Input';
import Radio from '@/components/base/Radio';
import Tag from '@/components/base/Tag';
import Textarea from '@/components/base/Textarea';

const Home = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '32px',
        backgroundColor: 'white',
        padding: 24,
        borderRadius: '6px',
      }}
    >
      <div style={{ display: 'flex', columnGap: '32px' }}>
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
      <div style={{ display: 'flex', columnGap: '32px' }}>
        <Input placeholder="Your email" />
        <Textarea placeholder="Your email" rows={5} />
      </div>
      <div style={{ display: 'flex', columnGap: '32px' }}>
        <Radio name="radio" label="Radio 1" />
        <Radio name="radio" label="Radio 2" />
      </div>
      <div style={{ display: 'flex', columnGap: '32px' }}>
        <Tag label="Default" />
        <Tag label="Success" type="success" />
        <Tag label="Warning" type="warning" />
        <Tag label="Error" type="error" />
      </div>
    </div>
  );
};
export default Home;
