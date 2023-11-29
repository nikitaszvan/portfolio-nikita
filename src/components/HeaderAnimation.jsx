import { TypeAnimation } from 'react-type-animation';
import React from 'react';

const HeaderAnimation = () => {

  return (
    <TypeAnimation
    sequence={[
        `A Front-End \n Developer`,
        1000
    ]}
    wrapper="h2"
    speed={25}
    />
  );
};

export default HeaderAnimation;