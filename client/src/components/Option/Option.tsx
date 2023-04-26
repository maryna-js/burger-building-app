import BurgerImage from '../BurgerImage/BurgerImage';
import './Option.css';

export interface OptionItemInterface {
  src: string;
  alt?: string;
  className?: string;
  onClick?: () => void;
  width?: string;
  height?: string;
  name?: string;
}

const Option = ({
  src,
  alt,
  className,
  onClick,
  width,
  height,
  name,
}: OptionItemInterface) => {
  return (
    <button type="button" onClick={onClick} className="button-wrapper">
      {name && <span className="button-name">{name}...</span>}
      <BurgerImage
        src={src}
        alt={alt}
        className={className}
        width={width}
        height={height}
      />
    </button>
  );
};

export default Option;
