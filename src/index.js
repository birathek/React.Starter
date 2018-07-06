import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../style/index.css';
import TopBanner from './components/top_banner';
import VideoDetail from './components/video_detail';
import YTSearch from 'youtube-api-search';

//api key for youtube
const API_KEY='AIzaSyDgTjJToRF0sC39Bt45BD960ru0Ax7j8FE';


class App extends Component {
  constructor(props){
  super(props);
  this.state={
    videos:[],
    selectedVideo: null
   };
   this.videoSearch('tamil movies');
}
  videoSearch(term){
    YTSearch({key: API_KEY,term: term },(videos) =>{
      this.setState({
        videos:videos,
        selectedVideo:videos[0]
      });
      //this.setState({videos:videos});
    });
  }


  render() {
    return <div>
      <TopBanner />
      <VideoDetail video={this.state.selectedVideo} />
      </div>
  }
}

ReactDOM.render(<App />,document.querySelector('.root'));
