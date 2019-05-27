import React, {Component} from 'react';
import ReactPlayer from 'react-player'
import { hot } from "react-hot-loader/root";


import { Viewer, Entity } from "resium";
import { Cartesian3 } from "cesium";
import {urls} from "./urls"

const position = Cartesian3.fromDegrees(-74.0707383, 40.7117244, 100);
const pointGraphics = { pixelSize: 10 };

class Radioplayer extends Component {
  constructor (props) {
    super(props);
    this.state = {
      url: "http://212.83.185.113/pulsAAC64.mp3",
      coords: position,
      isLoading: false,
      stations: []
    };
  }
  onClick = evt => {
    console.log(evt.target.textContent)
    this.setState({ url: evt.target.textContent })
  }

  componentDidMount() {
    this.setState({ isLoading: true });
  }


  //const App = () => (
    
  //);

render() {
  console.log(this.state)
  return (
    <div className="Radioplayer">
    <ReactPlayer className='react-player' url={this.state.url} controls={true} playing={true}/>
    <Viewer full={true} navigationHelpButton={false} navigationInstructionsInitiallyVisible={false} timeline={false} vrButton={false} animation={false}>
      <Entity position={position} point={pointGraphics}/>
    </Viewer>
    <input type="search" id="site-search" placeholder="Search by name, call sign, genre, city or country" name="q" aria-label="Search through site content"></input>
<button>Search</button>
    <h1>STATIONS FROM API</h1>
      {urls.map(url => <div value = {url.url} onClick = {this.onClick}>{url.url}</div>)}
      {this.state.stations.map(url => <div value = {url.url} onClick = {this.onClick}>{url.url}</div>)}
    </div>
  );
}
}

export default hot(Radioplayer);