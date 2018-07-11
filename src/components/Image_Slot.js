import React,{Component} from 'react';
import logo from '../../images/favicon.ico';

class Imageslot extends Component{

    fileSelectHandler = event => {
      console.log(event);
    }
    
    onclickfunction(){
      console.log("Image clicked");
    }

  render(){
    return(
      <div className="image_Slot">
        <button><img src={logo} alt="logo" onClick={this.onclickfunction} /></button>
      </div>
    );
  }


}

export default Imageslot;
