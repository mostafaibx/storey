import { OrderStatus } from '@/types/types';

const OrderStatusBar = ({ orderStatus }: { orderStatus: OrderStatus }) => {
  const steps: OrderStatus[] = [
    'pending',
    'preparing',
    'delivering',
    'delivered',
  ];
  const colors = ['gray', 'gray', 'gray', 'gray'];

  const progressPoints = steps.map((step, index) => {
    const isActive = step === orderStatus;
    const isPrevious = index < steps.indexOf(orderStatus);

    let color = colors[index];
    if (isActive) {
      color = 'blue';
    } else if (isPrevious) {
      color = 'green';
    }

    return { color, isActive };
  });
  const orderProgress = steps.indexOf(orderStatus) * 33.33;

  return (
    <div className='flex flex-row justify-between relative'>
      {progressPoints.map((point, index) => (
        <span
          key={index}
          className={` left-${index * 25} w-4 h-4 rounded-full z-50 bg-${
            point.color
          }-500 ${point.isActive ? 'bg-yellow-600' : ''}`}
        />
      ))}
      <span
        style={{ width: `${orderProgress}%` }}
        className={` h-4 bg-green-500 rounded-full animate-pulse absolute z-0`}
        aria-valuenow={orderProgress}
        aria-valuemin='0'
        aria-valuemax='100'
        role='progressbar'
      />
    </div>
  );
};

export default OrderStatusBar;
