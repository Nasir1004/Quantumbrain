import React, { ReactElement } from 'react';

interface StyledIconProps {
  icon: ReactElement;
  className?: string;
}

export const StyledIcon: React.FC<StyledIconProps> = ({ icon, className }) => {
  const IconComponent = React.cloneElement(icon, { className });

  return <div>{IconComponent}</div>
};

export default StyledIcon;