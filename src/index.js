import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../style/index.css';
import YTSearch from 'youtube-api-search';
import TopBanner from './components/top_banner';
import VideoDetail from './components/video_detail';
import Imageslot from './components/Image_Slot';
import VideoList from './components/video_list'
import SearchBar from './components/search_bar';
import _ from 'lodash';
import {Router,Route, browserHistory} from 'react-router';


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
    const videoSearch = _.debounce((term) => {this.videoSearch(term)},300);
    return <div>
      <section className="wrapper">
      <div ><Imageslot /></div>
      <div ><TopBanner /></div>
      </section>
      <SearchBar onSearchTermChange={videoSearch}/>
      <VideoDetail video={this.state.selectedVideo} />
      <VideoList
        onVideoSelect={selectedVideo => this.setState({selectedVideo})}
        videos={this.state.videos} />
      </div>
  }
}

ReactDOM.render(<App />,document.querySelector('.root'));
