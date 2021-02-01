import Loader from 'react-loader-spinner';

const DotsLoader = () => (
  <div data-testid="loader">
    <Loader type="ThreeDots" color="#17cfb8" height={80} width={80} />
  </div>
);
export default DotsLoader;
