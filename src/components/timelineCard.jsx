import React, { Component } from 'react';
import styled from 'styled-components';
import Markdown from 'react-markdown';

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

const CardDescription = styled.p`
  text-align: center;
`

class TimelineCard extends Component {
    constructor(props)
    {
      super();
      this.state = {}
      this.state.key = props.index;
      this.state.title = props.title;
      this.state.description = props.description;
      this.state.photoURL = props.photoURL;
      this.state.caption = props.caption;
    }
    
    render() {
      if (this.state.key % 2 == 0){
        return (
          <div className="row" >
            <div className="col-xs-6 col-s-4 col-md-3 col-lg-3" />

            <div className="col-xs-6 col-s-6 col-md-6 col-lg-6" style={{background: '#ffffff', margin: '10px', padding: '5px'}}>
              <div className="row">
                <div className="col-xs-6 col-s-6 col-md-6 col-lg-6">
                  <CardImageContainer>
                    <ImageContainerDiv>
                        <Image src={this.state.photoURL} />
                        <Caption><Markdown>{this.state.caption}</Markdown></Caption>
                    </ImageContainerDiv>
                  </CardImageContainer>
                </div>
              
                <div className="col-xs-6 col-s-6 col-md-6 col-lg-6">
                  <CardTitle>{this.state.title}</CardTitle>
                  <CardDescription><Markdown>{this.state.description}</Markdown></CardDescription>
                </div>
              </div>
            </div>

            <div className="col-xs-3 col-s-3 col-md-3 col-lg-3" />
          </div>
        );
      }
      else {
        return (
          <div className="row">
            <div className="col-xs-3 col-s-3 col-md-3 col-lg-3" />

            <div className="col-xs-6 col-s-6 col-md-6 col-lg-6" style={{background: '#ffffff', margin: '10px', padding: '5px'}}>
              <div className="row">
                        
                <div className="col-xs-6 col-s-6 col-md-6 col-lg-6">
                  <CardTitle>{this.state.title}</CardTitle>
                  <CardDescription><Markdown>{this.state.description}</Markdown></CardDescription>
                </div>

                <div className="col-xs-6 col-s-6 col-md-6 col-lg-6">
                  <CardImageContainer>
                    <ImageContainerDiv>
                        <Image src={this.state.photoURL} />
                        <Caption><Markdown>{this.state.caption}</Markdown></Caption>
                    </ImageContainerDiv>
                  </CardImageContainer>
                </div>
              </div>
            </div>

            <div className="col-xs-3 col-s-3 col-md-3 col-lg-3" />
          </div>
        );
      }
    }
}
 
export default TimelineCard;