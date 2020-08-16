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
  background-color: #ccccff;
`

const CardDescription = styled.p`
  text-align: center;
`

const TimelineContainer = styled.div`
  background-color: #ffffff;
`

const MidDiv = styled.div`
  background-color: lightblue
`

const InnerRow1 = styled.div`
  background-image: url("./bg1.jpeg");
`

const InnerRow2 = styled.div`
  background-image: url("./bg2.jpeg");
`

const InnerRow3 = styled.div`
  background-image: url("./bg3.jpeg");
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

    getInnerRow() {
      var str = 'InnerRow';

      if (this.state.key % 3 == 0)
      {
        return (
          <InnerRow1 className="row">
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
          </InnerRow1>
        );
      }
      else if (this.state.key % 3 == 1)
      {
        return (
          <InnerRow2 className="row">
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
          </InnerRow2>
        );
      }
      else
      {
        return (
          <InnerRow3 className="row">
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
          </InnerRow3>
        );
      }
    }
    
    render() {
        return (
          <TimelineContainer className='row'>
            <div className="col-xs-6 col-s-4 col-md-3 col-lg-3" />

            <MidDiv className="col-xs-6 col-s-6 col-md-6 col-lg-6" style={{background: '#ffffff', margin: '10px', padding: '5px'}}>
              {this.getInnerRow()}
            </MidDiv>

            <div className="col-xs-3 col-s-3 col-md-3 col-lg-3" />
          </TimelineContainer>
        );
    }
}
 
export default TimelineCard;