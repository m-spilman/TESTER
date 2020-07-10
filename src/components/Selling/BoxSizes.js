import React, { Component } from "react";
import styled from "styled-components";
import HeaderPage2AndOn from "../HeaderPage2AndOn";

const arrowPath = "images/nav/backArrow.png";
const xsmallPath = "images/boxes/XSmall.png";
const smallPath = "images/boxes/Small.png";
const mediumPath = "images/boxes/Medium.png";
const largePath = "images/boxes/Large.png";
const xlargePath = "images/boxes/XLarge.png";

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
  height: 200px;
  border: none !important;
  text-align: center;
  margin-left: auto !important;
  margin-right: auto !important;
  background-color: white;
  box-shadow: 3px 3px 3px 3px rgba(0, 0, 0, 0.2),
    12px 8px 12px rgba(0, 0, 0, 0.14), 4px 4px 4px rgba(0, 0, 0, 0.12);
`;
const ImgXSmall = styled.img`
  width: 126px;
  height: 51px;
  margin-top: 35px;
  margin-bottom: 47px;
`;

const ImgSmall = styled.img`
  width: 147px;
  height: 81px;
  margin-top: 35px;
  margin-bottom: 19px

`;
const ImgMedium = styled.img`
  width: 82px;
  height: 85px;
  margin-top: 35px;
  margin-bottom: 13px

`;
const ImgLarge = styled.img`
  width: 96px;
  height: 142px;
  margin-top: 2px;
`;

const ImgXlarge = styled.img`
  width: 62px;
  height: 126px;
  padding-bottom: 5px;
  margin-top: 15px;
`;

const CardFooter = styled.div`
  padding: 0px 0px 0px 10px;
  margin: 0 auto;
  font-size: 14px;
  height: 16px;
  text-align: center;
`;
const Spacing = styled.div`
  height: 10px;
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
const BodyWrapper = styled.div`
background-color:#DAF1FE80;
height: 1369px;
width: 375px;
`

class BoxSizes extends Component {
  

  back = (e) => {
    e.preventDefault();
    this.props.handleBack()
    this.props.prevStep();
  };

  submitContinue = (value) => {
    this.props.handleChangeBox(value)
    this.props.nextStep();
  };


  render() {
  
    return (
       
      <div className="wrapper">
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

          <Title>
            <h3>Setup Nationwide</h3>
          </Title>
          <Explanation>
            <p>
              Help us estimate shipping costs paid by the buyer. Select Size.
            </p>
          </Explanation>

          <Card onClick={() => this.submitContinue('XSmall')}>
            <CardHeading>XSmall</CardHeading>
            <ImgXSmall src={xsmallPath} alt="Xsmall Box" />

            <CardFooter>Ex. Phone, Headphones, Jewelry</CardFooter>
          </Card>
          <Spacing></Spacing>
          <Card onClick={() => this.submitContinue('Small')}>
            <CardHeading>Small</CardHeading>
            <ImgSmall src={smallPath} alt="small Box" />

            <CardFooter>Ex. Shoes, Purse, Camera, Laptop 16"</CardFooter>
          </Card>
          <Spacing></Spacing>
          <Card onClick={() => this.submitContinue('Medium')}>
            <CardHeading>Medium</CardHeading>
            <ImgMedium src={mediumPath} alt="Medium Box" />

            <CardFooter>Ex. Handbag, Toaster, Basketball</CardFooter>
          </Card>
          <Spacing></Spacing>
          <Card onClick={() => this.submitContinue('Large')}>
            <CardHeading>Large</CardHeading>
            <ImgLarge src={largePath} alt="Large Box" />

            <CardFooter>Ex. Bedding, Microwave, TV 60"</CardFooter>
          </Card>
          <Spacing></Spacing>
          <Card onClick={() => this.submitContinue('XLarge')}>
         
            <CardHeading>XLarge</CardHeading>
            <ImgXlarge src={xlargePath} alt="XLarge Box" />

            <CardFooter>Ex. Chair, Golf Clubs</CardFooter>
          </Card>
          <Spacing></Spacing>
        </BodyWrapper>
      </div>
    );
  }
}

export default BoxSizes;


