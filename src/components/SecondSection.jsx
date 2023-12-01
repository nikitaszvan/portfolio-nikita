import React from 'react'
import Hexagon from './Hexagon.jsx';

const SecondSection = () => {
  return (
    <div className="second-section">

 <div className="hexagon-container">
        <Hexagon 
        hexagon_top_bp_color={{borderBottomColor: '#9b6469'}}
        hexagon_bottom_bp_color={{borderTopColor: '#6C7981'}}
        hexagon_top_bg_color={{borderBottomColor: '#0E1425'}}
        hexagon_bottom_bg_color={{borderTopColor: '#0E1425'}}
        hexagon_top_color={{borderBottomColor: '#FFFFFF'}}
        hexagon_bottom_color={{borderTopColor: '#FFFFFF'}}
        />
        <Hexagon
        hexagon_top_bp_color={{borderBottomColor: '#C69C9C'}}
        hexagon_bottom_bp_color={{borderTopColor: '#C69C9C'}}
        hexagon_top_bg_color={{borderBottomColor: '#0E1425'}}
        hexagon_bottom_bg_color={{borderTopColor: '#0E1425'}}
        hexagon_top_color={{borderBottomColor: '#FFFFFF'}}
        hexagon_bottom_color={{borderTopColor: '#FFFFFF'}}
        />
        <Hexagon
        hexagon_top_bp_color={{borderBottomColor: '#9D5359'}}
        hexagon_bottom_bp_color={{borderTopColor: '#9D5359'}}
        hexagon_top_bg_color={{borderBottomColor: '#9D5359'}}
        hexagon_bottom_bg_color={{borderTopColor: '#9D5359'}}
        hexagon_top_color={{borderBottomColor: '#FFFFFF'}}
        hexagon_bottom_color={{borderTopColor: '#FFFFFF'}}
        />
    </div>
    <div className="hexagon-gradient-back"></div>
    <div className="hexagon-gradient-front"></div>
    <div className="hexagon-images">
      <img src="images/react.png" alt="react logo"/>
      <img src="images/workflow.png" alt="workflow icon"/>
      <img src="images/computer.png" alt="responsive-app"/>
    </div>
  </div>

  )
}

export default SecondSection;