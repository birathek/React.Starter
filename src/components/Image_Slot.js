import React,{Component} from 'react';
import logo from '../../images/favicon.ico';

class Imageslot extends Component{

    fileSelectHandler = event => {
      console.log(event);
    }

  render(){
    return(
      <div className="Image-Slot">
        <img src={logo} alt="logo" />
        <input type="file" onChange={this.fileSelectHandler}/>
      </div>
    );
  }


}

export default Imageslot;
