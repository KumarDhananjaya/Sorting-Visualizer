import React from 'react';
import { ArrayBar, ArrayContainer, GradientBar, RoundedBar } from '../styles/StyledComponents';

interface ArrayDisplayProps {
  array: number[];
}

const ArrayDisplay: React.FC<ArrayDisplayProps> = ({ array }) => {
  return (
    <ArrayContainer>
      {array.map((value, index) => {
        // Alternate between different bar styles based on index
        if (index % 3 === 0) {
          return <GradientBar key={index} height={value} />;
        } else if (index % 3 === 1) {
          return <RoundedBar key={index} height={value} />;
        } else {
          return <ArrayBar key={index} height={value} />;
        }
      })}
    </ArrayContainer>
  );
};

export default ArrayDisplay;
