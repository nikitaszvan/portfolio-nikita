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
        hexagon_top_color={{borderBottomColor: '#eedece'}}
        hexagon_bottom_color={{borderTopColor: '#eedece'}}
        />
        <Hexagon
        hexagon_top_bp_color={{borderBottomColor: '#C69C9C'}}
        hexagon_bottom_bp_color={{borderTopColor: '#C69C9C'}}
        hexagon_top_bg_color={{borderBottomColor: '#0E1425'}}
        hexagon_bottom_bg_color={{borderTopColor: '#0E1425'}}
        hexagon_top_color={{borderBottomColor: '#eedece'}}
        hexagon_bottom_color={{borderTopColor: '#eedece'}}
        />
        <Hexagon
        hexagon_top_bp_color={{borderBottomColor: '#9D5359'}}
        hexagon_bottom_bp_color={{borderTopColor: '#9D5359'}}
        hexagon_top_bg_color={{borderBottomColor: '#9D5359'}}
        hexagon_bottom_bg_color={{borderTopColor: '#9D5359'}}
        hexagon_top_color={{borderBottomColor: '#eedece'}}
        hexagon_bottom_color={{borderTopColor: '#eedece'}}
        />
    </div>
    <div className="hexagon-gradient"></div>
  </div>

  )
}

export default SecondSection;