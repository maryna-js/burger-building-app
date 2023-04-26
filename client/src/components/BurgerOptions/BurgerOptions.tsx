import { useEffect, useState } from 'react';
import { IngredientsDataInterface } from '../BurgerApp/BurgerApp';
import './BurgerOptions.css';
import Option from '../Option/Option';

interface BurgerOptionsProps {
  onClick: (ingredient: IngredientsDataInterface) => void;
}

const BurgerOptions = ({ onClick }: BurgerOptionsProps) => {
  const [ingredientsData, setIngredientsData] = useState<
    IngredientsDataInterface[]
  >([]);

  useEffect(() => {
    fetch('/api/ingredients')
      .then(response => response.json())
      .then(data => {
        setIngredientsData(data);
      });
  }, []);

  if (ingredientsData?.length === 0) {
    return <div className="loading-options">Loading</div>;
  }
  return (
    <div className="options-wrapper">
      <h2 className="options-header">Options</h2>
      {ingredientsData?.map(item => {
        return (
          <Option
            key={item.id}
            src={item.src}
            alt={item.name}
            onClick={() => onClick(item)}
            width="100"
            name={item.name}
          />
        );
      })}
    </div>
  );
};

export default BurgerOptions;
