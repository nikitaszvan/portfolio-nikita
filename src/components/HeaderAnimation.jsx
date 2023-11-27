import { TypeAnimation } from 'react-type-animation';
import React from 'react';

const HeaderAnimation = () => {

  return (
    <TypeAnimation
    sequence={[
        "I'm a Front-End Developer",
        1000
    ]}
    wrapper="span"
    speed={50}
    style={{ fontSize: '40px'}}
    />
  );
};

export default HeaderAnimation;