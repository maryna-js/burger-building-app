import { useState } from 'react';
import BurgerOptions from '../BurgerOptions/BurgerOptions';
import BurgerImage from '../BurgerImage/BurgerImage';
import './BurgerApp.css';

export interface IngredientsDataInterface {
  id: number;
  name: string;
  src: string;
}

const BurgerApp = () => {
  const [ingredientsData, setIngredientsData] = useState<
    IngredientsDataInterface[]
  >([]);
  const handleClickOption = (option: IngredientsDataInterface) => {
    setIngredientsData(prevState => [...prevState, option]);
  };

  const handleRemoveIngredient = (idx: number) => {
    const data = ingredientsData.filter((_, i) => i !== idx);
    setIngredientsData(data);
  };
  return (
    <div className="burger-wrapper">
      <div className="burger-container">
        <div>
          <BurgerImage src="bun_top.png" width="250" />
          {ingredientsData.map((item, idx) => {
            return (
              <BurgerImage
                key={idx}
                onClick={() => handleRemoveIngredient(idx)}
                src={item?.src}
                alt={item?.name}
                className="burger-image"
                width="250"
              />
            );
          })}
          <BurgerImage src="bun_bottom.png" alt="bun bottom" width="250" />
        </div>
        <BurgerOptions onClick={handleClickOption} />
      </div>
    </div>
  );
};

export default BurgerApp;
