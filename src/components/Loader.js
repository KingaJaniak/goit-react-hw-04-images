import { Circles } from 'react-loader-spinner';
import { LoaderWrapper } from './App.styled';

const Loader = () => {
  return (
    <LoaderWrapper>
      <Circles
        height="80"
        width="80"
        color="lightcoral"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        visible={true}
      />
    </LoaderWrapper>
  );
};

export default Loader;
