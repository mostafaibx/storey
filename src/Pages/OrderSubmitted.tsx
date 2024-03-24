import { useParams } from 'react-router-dom';

const OrderSubmitted = () => {
  const { id } = useParams();

  return <div> Order # {id} Submitted </div>;
};

export default OrderSubmitted;
