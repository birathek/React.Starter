import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../style/index.css';
import TopBanner from './components/top_banner';


class App extends Component {
  render() {
    return <div>
      <TopBanner />
      </div>
  }
}

ReactDOM.render(<App />,document.querySelector('.root'));
