import { OptionItemInterface } from '../Option/Option';

const BurgerImage = ({
  src,
  alt,
  className,
  onClick,
  width,
  height,
}: OptionItemInterface) => {
  return (
    <div>
      <img
        onClick={onClick}
        src={`https://xm-crm-react-exercise-server.herokuapp.com/img/${src}`}
        alt={alt}
        className={className}
        width={width}
        height={height}
      />
    </div>
  );
};

export default BurgerImage;
