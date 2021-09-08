import React, { Component } from 'react';
import { FileBasedTimelineService } from '../timelineService.js'
import TimelineCard from './timelineCard.jsx'

class Timeline extends Component {
    constructor()
    {
      super();
      this.state = {}
      this.timelineService = new FileBasedTimelineService('content.txt');
      this.state.timelineEvents = [];
    }

    componentDidMount()
    {
      this.timelineService.provideTimelineEvents().then(
        timelineEvents => this.setState({ timelineEvents }));
    }

    render() {
        return (
          <div>
            {this.state.timelineEvents.map((event, index) => 
             <TimelineCard key={index} index={index} title={event.title} description={event.description} photoURL={event.photoURL} caption={event.caption}/> )}
          </div>
        );
    }
}
 
export default Timeline;