import { Button } from '../Button/Button';
import { Ingredients } from '../Ingredients/Ingredients';
import { useCount } from '../../hooks/useCount';

const MAX_DISH_COUNT = 6;

export const Dish = ({ dish }) => {
  const { count, increment, decrement } = useCount({
    max: MAX_DISH_COUNT,
  });

  if (!dish) {
    return null;
  }

  const { name, ingredients } = dish;

  return (
    <div>
      {name}
      <div>
        <Button onClick={decrement}>-</Button>
        {count}
        <Button onClick={increment}>+</Button>
      </div>
      {count > 0 && ingredients?.length > 0 && (
        <Ingredients ingredients={ingredients} />
      )}
    </div>
  );
};
