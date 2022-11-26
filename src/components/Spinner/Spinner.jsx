import { FallingLines } from 'react-loader-spinner';
import { Loader } from '../Spinner/Spinner.styled';

export const Spinner = () => {
  return (
    <Loader>
      <FallingLines
        color="#000"
        width="100"
        visible={true}
        ariaLabel="falling-lines-loading"
      />
    </Loader>
  );
};
