import React, { Component } from 'react';
import styled from 'styled-components';

const CardImageContainer = styled.div`
  text-align: center;
`

const ImageContainerDiv = styled.div`
  position: relative;
  display: inline-block;
`

const Image = styled.img`
  display: block;
  width: auto;
  max-width:100%;
  max-height:100%;
`

const Caption = styled.span`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  background: #000;
  background: rgba(0,0,0,.5);
`

const CardTitle = styled.h6`
  margin: 10;
  color: rgba(0,0,0,1);
  font-weight: bold;
  text-align: center; 
`

const CardContent = styled.p`
  font-size: 0.85rem;
  font-weight: 500;
  margin: 1em 0 0;
  line-height: 1.6;
  color: rgba(0,0,0,1);
  a {
    font-weight: bold;
    color: rgba(0,0,128,1);
  }  
`

const CardDescription = styled.p`
  text-align: center;
`

class TimelineCard extends Component {
    constructor(props)
    {
      super();
      this.state = {}
      this.state.title = props.title;
      this.state.description = props.description;
      this.state.photoUrl = props.photoUrl;
      this.state.caption = props.caption;
    }
    
    render() { 
        return (
            <div className="row">
                <div className="col-xs-4 col-s-4 col-md-4 col-lg-4"> </div>
                <div className="col-xs-4 col-s-4 col-md-4 col-lg-4">
                <CardTitle>{this.state.title}</CardTitle>
                <CardImageContainer>
                  <ImageContainerDiv>
                      <Image src={this.state.photoUrl} />
                      <Caption>{this.state.caption}</Caption>
                  </ImageContainerDiv>
                </CardImageContainer>
                <CardDescription>{this.state.description}</CardDescription>
                </div>
                <div className="col-xs-4 col-s-4 col-md-4 col-lg-4"> </div>
            </div>
          )
    }
}
 
export default TimelineCard;