import Header from '@/components/home/Header';
import Quote from '@/components/home/quote/Quote';


const Home = () => {
  return (
    <>
      <Header canStick={true} />
      <Quote />
    </>
  );
};

export default Home;
