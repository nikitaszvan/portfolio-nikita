import React from 'react';

const Hexagon = (props) => {
  return (
    <div className="hexagon">
    <div className="border-part-hexagon-container">
        <div className="hexagon-top-bp" style={props.hexagon_top_bp_color}></div>
        <div className="hexagon-bottom-bp" style={props.hexagon_bottom_bp_color}></div>
    </div>

    <div className="background-hexagon-container">
        <div className="hexagon-top-bg" style={props.hexagon_top_bg_color}></div>
        <div className="hexagon-bottom-bg" style={props.hexagon_bottom_bg_color}></div>
    </div>
    <div className="front-part-hexagon-container">
    <div className="hexagon-top" style={props.hexagon_top_color}></div>
    <div className="hexagon-bottom" style={props.hexagon_bottom_color}></div>
</div>
</div>
  )
}

export default Hexagon;