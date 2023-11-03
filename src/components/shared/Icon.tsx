// Icon component to replace FontAwesomeIcon component.

import { cn } from "@/lib/utils";
import { IconProp, SizeProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface IIcon {
  className?: string;
  icon: IconProp;
  color?: string;
  type?: string;
  size?: SizeProp;
  width?: number;
  onClick?: () => void;
}

const Icon = ({
  className,
  type,
  icon,
  color,
  size,
  width,
  onClick,
}: IIcon) => {
  return (
    <FontAwesomeIcon
      color={color}
      size={size ? size : "1x"}
      className={cn("pb-[2px]", className ? className : null)}
      icon={icon}
      width={width ? width : 14}
      type={type ? type : undefined}
      onClick={onClick}
    />
  );
};

export default Icon;
