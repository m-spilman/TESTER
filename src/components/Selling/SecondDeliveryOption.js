import React, { Component } from "react";
import styled from "styled-components";
import HeaderPage2AndOn from "../HeaderPage2AndOn";

const localDeliveryPath = "images/local_national/localSameDayIcon.png";
const nationalDeliveryPath = "images/local_national/nationWide.png";
const arrowPath = "images/nav/backArrow.png";

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
  width: 136px;
  height: 71px;
  padding-bottom: 5px;
`;
const CardFooter = styled.div`
  padding: 0px 0px 0px 10px;
  margin: 0 auto;
  font-size: 14px;
  height: 16px;
  text-align: left;
`;
const NoOrderList = styled.ul`
  text-align: left;
  padding: 10px 0px 5px 0px;
  font-size: 12px;
  margin-left: 25px;
`;
const BackHeader = styled.div`
  display: flex;
  background-color: white;
  padding-top: 28px;
  justify-content: space-evenly;
  width: 375px;
  height: 80px;
`;
const BackButtonImg = styled.img`
  max-width: 74px;
  max-height: 17px;
`;
const BodyWrapper = styled.div`
  background-color: #daf1fe80;
  height: 812px;
  width: 375px;
`;
const Explanation = styled.div`
  padding: 10px 0px 5px 0px;
  margin: 0 auto;
  max-width: 260px;
  font-size: 18px;
`;
const Wrapper = styled.div`
  width: 375px;
  text-align: center;
  margin: 0 auto;
  height: 812px
`;

class SecondDeliveryOption extends Component {

  continueNoSecond = ()=>{
     this.props.noSecondary()
 }
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = () => {
    if (this.props.local === true) {
      this.props.handleBackNational();
      this.props.prevStep();
    }
    if (this.props.national === true) {
      this.props.handleBackLocal();
      this.props.prevStep();
    }
  };

  submitContinueLocal = (e) => {
    this.continue(e);
    this.props.handleChangeLocal();
    this.props.secondaryLocal()
  };

  submitContinueNational = (e) => {
    this.continue(e);
    this.props.handleChangeNational();
    this.props.secondaryNational()
    
  };

  render() {
    if (this.props.local === true) {
      return (
        <Wrapper>
          <BodyWrapper>
            <BackHeader>
              <BackButtonImg
                className="card-img-top arrow"
                src={arrowPath}
                alt="go back"
                onClick={this.back}
              ></BackButtonImg>
              <HeaderPage2AndOn></HeaderPage2AndOn>
            </BackHeader>

            <div className="title">
              <h3>Set Up Nationwide</h3>
            </div>
            <Explanation>
              <p>Attract more buyers! You can accept or reject the offers you want</p>
            </Explanation>
            <Card onClick={this.submitContinueNational}>
              <CardHeading>Nationwide</CardHeading>

              <Image src={nationalDeliveryPath} alt="National Delivery" />

              <CardFooter>Delivered in the USA by FedEx</CardFooter>
              <NoOrderList>
                <li>Box and lable item.</li>
                <li>Drop off at any FedEx location</li>
                <li>Nationwide shipping allows you to reach more buyers!</li>
              </NoOrderList>
            </Card>
          </BodyWrapper>
        </Wrapper>
      );
    }

    if (this.props.national === true) {
      return (
        <Wrapper>
          <BodyWrapper>
            <BackHeader>
              <BackButtonImg
                className="card-img-top arrow"
                src={arrowPath}
                alt="go back"
                onClick={this.back}
              ></BackButtonImg>
              <HeaderPage2AndOn></HeaderPage2AndOn>
            </BackHeader>

            <div className="title">
              <h3>Setup Local</h3>
            </div>
            <Explanation>
              <p>Attract more buyers! You can accept or reject the offers you want</p>
            </Explanation>
            <Card onClick={this.submitContinueLocal}>
              <CardHeading>Local Delivery</CardHeading>

              <Image src={localDeliveryPath} alt="National Delivery" />

              <CardFooter>Delivered in your city by PostMates</CardFooter>
              <NoOrderList>
                <li>No need to box or label your items</li>
                <li>Schedule a pick-up time and location</li>
                <li>Buyers love Same Day speed!</li>
              </NoOrderList>
            </Card>
          </BodyWrapper>
        </Wrapper>
      );
    }

    return <></>;
  }
}

export default SecondDeliveryOption;
