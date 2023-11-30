import React from 'react';

const Hexagon = () => {
  return (
    <div className="hexagon">
    <div className="border-part-hexagon-container">
        <div className="hexagon-top-bp"></div>
        <div className="hexagon-bottom-bp"></div>
    </div>

    <div className="background-hexagon-container">
        <div className="hexagon-top-bg"></div>
        <div className="hexagon-bottom-bg"></div>
    </div>
    <div className="front-part-hexagon-container">
    <div className="hexagon-top"></div>
    <div className="hexagon-bottom"></div>
</div>
</div>
  )
}

export default Hexagon;