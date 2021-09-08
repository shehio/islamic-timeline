import React, { Component } from 'react';
import styled from 'styled-components';
import Markdown from 'react-markdown';

const Card = styled.div`
  height: 120vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.2);
  object-fit: contain;
  margin-bottom: 10px;
  overflow-x: hidden !important;
`

const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height:100%;
  z-index: -1;
`

const Title = styled.h1`
  color: #fff;
  font-size: 30px;
  margin-top: -550px;
  font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  text-align: center;
`

const Description = styled.p`
  margin-top: 8px;
  text-align: center;
  color: #fff;
  font-size: 21px; 
  font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  background-color: rgba(56, 56, 56, 0.5);
  margin-left: 10%;
  margin-right: 10%;
`

class TimelineCard extends Component {
    constructor(props)
    {
      super()
      this.state = {}
      this.state.key = props.index;
      this.state.title = props.title;
      this.state.description = props.description;
      this.state.photoURL = props.photoURL;
      this.state.caption = props.caption;
    }
    
    render() {
        return (
          <Card>
                <Image src={this.state.photoURL} />
                <Title>{this.state.title}</Title>
                <Description><Markdown>{this.state.description}</Markdown></Description>
          </Card>
        );
    }
}

export default TimelineCard;