import React, { Component } from "react";
import styled from "styled-components";
import Header from "./Header";

const sellingPath = "images/buying_selling/selling.png";
const buyingPath = "images/buying_selling/buying.png";

const CardHeading = styled.div`
  padding: 5px 0px 0px 0px;
  text-align: center;
  font-weight: bold;
  font-size: 16px;
  max-width: 264px;
  margin: 0 auto;
`;
const Card = styled.div`
  width: 264px;
  height: 225px;
  border: none !important;
  text-align: center;
  margin-left: auto !important;
  margin-right: auto !important;
  background-color: white;
  box-shadow: 3px 3px 3px 3px rgba(0, 0, 0, 0.2),
    12px 8px 12px rgba(0, 0, 0, 0.14), 4px 4px 4px rgba(0, 0, 0, 0.12);
`;
const Image = styled.img`
  width: 116px;
  height: 82px;
  padding-bottom: 5px;
  margin-top: 35px;
`;
const CardFooter = styled.div`
  padding: 0px 0px 0px 10px;
  margin: 0 auto;
  font-size: 14px;
  height: 16px;
  text-align: center;
`;
const Spacing = styled.div`
  height: 25px;
`;
const Title = styled.div`
  padding: 65px 0px 0px 0px;
  text-align: center;
  font-weight: bold;
  font-size: 28px;
  width: 286px;
  margin: 0 auto;
`;
const Explanation = styled.div`
  padding: 10px 0px 5px 0px;
  margin: 0 auto;
  max-width: 260px;
  font-size: 18px;
`;

class Buying_Selling extends Component {
  submitContinueSelling = () => {
    this.props.handleChangeSelling();
  };

  submitContinueBuying = () => {
    this.props.handleChangeBuying();
  };

  render() {
    return (
      <div className="wrapper">
        <div className="bodyWrapper">
          <Header></Header>

          <Title>
            <h3>Welcome to POD!</h3>
          </Title>
          <Explanation>
            <p>What would you like to do first?</p>
          </Explanation>

          <Card onClick={this.submitContinueBuying}>
            <Image src={buyingPath} alt="Local Delivery" />
            <CardHeading>I'm buying</CardHeading>

            <CardFooter>Help me win a deal</CardFooter>
          </Card>
          <Spacing></Spacing>
          <Card onClick={this.submitContinueSelling}>
            <Image src={sellingPath} alt="National Delivery" />
            <CardHeading>I'm Selling</CardHeading>

            <CardFooter>Help me make money!</CardFooter>
          </Card>
        </div>
      </div>
    );
  }
}

export default Buying_Selling;
