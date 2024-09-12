import Textarea from '@/components/base/Textarea';

const Home = () => {
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
      <Textarea placeholder="Your email" rows={5} />
    </div>
  );
};
export default Home;
