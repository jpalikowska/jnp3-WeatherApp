import { MapIconWrapper } from './MapIconWrapper';

import { default as nice } from '../../../img/nice.png';
import { default as passable } from '../../../img/passable.png';
import { default as not_nice } from '../../../img/not_nice.png';

function Emoji({niceness}) {
    switch(niceness) {
        case 2:
          return (<img className="image" src={nice} />);
        case 1:
          return (<img className="image" src={passable} />);
        case 0:
          return (<img className="image" src={not_nice} />);
        default:
          return ""
      }
}

function MapIcon({city}) {
    return (
      <MapIconWrapper>
        <div className="divimage"><img className="image" src={city.icon}/></div>
        <div className="divimage"><Emoji niceness={city.niceness}/></div>
      </MapIconWrapper>
    )
  }

export default MapIcon;