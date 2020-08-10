import React, { Component } from 'react';
import { FileBasedTimelineService } from '../timelineService.js'
import TimelineCard from './timelineCard.jsx'

class Timeline extends Component {
    constructor()
    {
      super();
      this.state = {}
      this.timelineService = new FileBasedTimelineService('./content.txt');
      this.state.timelineEvents = [];
    }

    componentDidMount()
    {
      var timelineEvents = [];
      this.timelineService.provideTimelineEvents().then(
        timelineEvents => this.setState({ timelineEvents }));
    }

    render() {
        return (
        this.state.timelineEvents.map((event, index) => 
        { return <TimelineCard key={index} title={event.title} description={event.description} photoURL={event.photoURL} caption={event.caption}/> })
          );
    }
}
 
export default Timeline;