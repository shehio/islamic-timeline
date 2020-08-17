import React, { Component } from 'react';
import styled from 'styled-components';
import Markdown from 'react-markdown';

const CardImageContainer = styled.div`
  text-align: center;
  background-color: '#FCF1ED';
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
  border-radius: 2px;
  max-height: 278px;
`

const Caption = styled.span`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  background: rgba(0,0,0,.5);
`

const CardTitle = styled.h6`
  margin: 10;
  font-weight: bold;
  text-align: center;
  color: #b97f68;
`

const CardDescription = styled.p`
  text-align: center;
  color: #b97f68;
`

const TimelineItemContainer = styled.div`
`
const MidDiv = styled.div`
  background: #FCF1ED;
  margin: 10px;
  padding: 5px;
`

const TextItems1 = styled.div`
  background-image: url("./bg1.jpeg");
  min-height: 278px;
  max-height: 278px;
`
const TextItems2 = styled.div`
  background-image: url("./bg2.jpeg");
  min-height: 278px;
  max-height: 278px;
`
const TextItems3 = styled.div`
  background-image: url("./bg3.jpeg");
  min-height: 278px;
  max-height: 278px;
`

const InnerRow = styled.div`
`

const CenteringDiv = styled.div`
  min-height: 278px;
  max-height: 278px;
  display: flex;
  align-items: center;
  justify-content: center;
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
        return (
          <TimelineItemContainer>
            <MidDiv>
              {this.getInnerRow()}
            </MidDiv>
          </TimelineItemContainer>
        );
    }

    getInnerRow() {
      return (
        <InnerRow className="row"> 
          <div className="col-xs-1 col-s-1 col-md-1 col-lg-1"></div>
          {this.getImageContainer()}
          {this.getTextItems()}
          <div className="col-xs-1 col-s-1 col-md-1 col-lg-1"></div>
        </InnerRow>
        );
    }

  getImageContainer()
  {
    return (
      <CardImageContainer className="col-xs-5 col-s-5 col-md-5 col-lg-5">
        <ImageContainerDiv>
            <Image src={this.state.photoURL} />
            {/* <Caption><Markdown>{this.state.caption}</Markdown></Caption> */}
        </ImageContainerDiv>
      </CardImageContainer>
    );
  }

  getTextItems() {
    if (this.state.key % 3 == 0) {
      return (
        <TextItems1 className="col-xs-5 col-s-5 col-md-5 col-lg-5">
          <CardTitle>{this.state.title}</CardTitle>
          <CenteringDiv><CardDescription><Markdown>{this.state.description}</Markdown></CardDescription></CenteringDiv>
        </TextItems1>
      );
    }
    else if (this.state.key % 3 == 1) {
      return (
        <TextItems2 className="col-xs-5 col-s-5 col-md-5 col-lg-5">
          <CardTitle>{this.state.title}</CardTitle>
          <CenteringDiv><CardDescription><Markdown>{this.state.description}</Markdown></CardDescription></CenteringDiv>
        </TextItems2>
      );
    }
    else {
      return (
        <TextItems3 className="col-xs-5 col-s-5 col-md-5 col-lg-5">
          <CardTitle>{this.state.title}</CardTitle>
          <CenteringDiv><CardDescription><Markdown>{this.state.description}</Markdown></CardDescription></CenteringDiv>
        </TextItems3>
      );
    }
  }
}
 
export default TimelineCard;