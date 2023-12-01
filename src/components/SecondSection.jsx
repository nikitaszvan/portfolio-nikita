import React from 'react'
import Hexagon from './Hexagon.jsx';

const SecondSection = () => {
  return (
    <div className="second-section">

 <div className="hexagon-container">
        <Hexagon 
        hexagon_top_bp_color={{borderBottomColor: '#535F6E'}}
        hexagon_bottom_bp_color={{borderTopColor: '#72636C'}}
        hexagon_top_bg_color={{borderBottomColor: '#0E1425'}}
        hexagon_bottom_bg_color={{borderTopColor: '#0E1425'}}
        hexagon_top_color={{borderBottomColor: '#D5D3D0'}}
        hexagon_bottom_color={{borderTopColor: '#D5D3D0'}}
        />
        <Hexagon
        hexagon_top_bp_color={{borderBottomColor: '#C59A98'}}
        hexagon_bottom_bp_color={{borderTopColor: '#C59A98'}}
        hexagon_top_bg_color={{borderBottomColor: '#0E1425'}}
        hexagon_bottom_bg_color={{borderTopColor: '#0E1425'}}
        hexagon_top_color={{borderBottomColor: '#D5D3D0'}}
        hexagon_bottom_color={{borderTopColor: '#D5D3D0'}}
        />
        <Hexagon
        hexagon_top_bp_color={{borderBottomColor: '#9D5359'}}
        hexagon_bottom_bp_color={{borderTopColor: '#9D5359'}}
        hexagon_top_bg_color={{borderBottomColor: '#0E1425'}}
        hexagon_bottom_bg_color={{borderTopColor: '#0E1425'}}
        hexagon_top_color={{borderBottomColor: '#D5D3D0'}}
        hexagon_bottom_color={{borderTopColor: '#D5D3D0'}}
        />
    </div>
  </div>

  )
}

export default SecondSection;