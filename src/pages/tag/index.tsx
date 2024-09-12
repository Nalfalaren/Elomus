import Tag from '@/components/base/Tag';

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
      <Tag label="Default" />
      <Tag label="Success" type="success" />
      <Tag label="Warning" type="warning" />
      <Tag label="Error" type="error" />
    </div>
  );
};
export default Home;
