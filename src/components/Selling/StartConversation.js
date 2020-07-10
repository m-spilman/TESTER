import React, { Component } from "react";
import styled from "styled-components";
import Header from '../Header'


const Card = styled.div`
  width: 260px;
  height: 225px;
  border: none !important;
  text-align: center;
  margin-left: auto !important;
  margin-right: auto !important;
  background-color: white;
  box-shadow: 3px 3px 3px 3px rgba(0, 0, 0, 0.2),
    12px 8px 12px rgba(0, 0, 0, 0.14), 4px 4px 4px rgba(0, 0, 0, 0.12);
`;

const Title = styled.div`
  padding: 65px 0px 0px 0px;
  text-align: center;
  font-weight: bold;
  font-size: 28px;
  width: 302px;
  margin: 0 auto;
`;
const Explanation = styled.div`
  padding: 10px 0px 5px 0px;
  margin: 0 auto;
  margin-bottom: 10px;
  max-width: 260px;
  font-size: 18px;
`;
const CardBody = styled.div`
  text-align: left;
`;
const Item = styled.div`
  margin-top: 20px;
  margin-left: 15px;
  font-weight: bold;
  font-size: 18px

`;
const Spacing = styled.div`
  height: 5px;
`;
const Button1 = styled.button `
margin-top 25px !important;
background-color: #6118F2;
color: white;
width: 264px
`
const BodyWrapper = styled.div`
background-color:#FEF97F;
height: 812px;
width: 375px;
`
const Wrapper = styled.div`
  width: 375px;
  text-align: center;
  margin: 0 auto;
  height: 812px
`;

class StartConversation extends Component {



  back = (e) => {
    e.preventDefault();
    this.props.handleBack();
    this.props.prevStep();
  };


  render() {
    const {price, item } = this.props;
    return (
        <Wrapper>
          <BodyWrapper>
          <Header></Header>
            <Title>
              <h3>Start the Conversation</h3>
            </Title>
            <Explanation>
              
               Post your link on any marketplace or social media. Send it directly in a chat.
              
            </Explanation>
            <Card>
              <CardBody>
                 <Spacing></Spacing> 
                <Item> You are selling: {' '}
                 {item}
                </Item>
               <Item> For: {' '}
                  ${price}
               </Item>
                <Item>
                <a href="url">I will be a link</a>
                </Item>
                
              </CardBody>
            </Card>
            <Button1 className="btn-round">
              Copy Check-out Link
            </Button1>
          </BodyWrapper>
        </Wrapper>
      );
    }
}
export default StartConversation