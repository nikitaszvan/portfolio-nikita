import { TypeAnimation } from 'react-type-animation';
import React from 'react';

const HeaderAnimation = () => {

  return (
    <TypeAnimation
    sequence={[
        `I'm a Front-End \n Developer`,
        1000
    ]}
    wrapper="h2"
    speed={50}
    style={{ fontSize: '50px'}}
    />
  );
};

export default HeaderAnimation;