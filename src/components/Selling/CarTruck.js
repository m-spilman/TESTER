import React, { Component } from "react";
import styled from "styled-components";
import HeaderPage2AndOn from "../HeaderPage2AndOn";

const carPath = "images/car_truck/car.png";
const truckPath = "images/car_truck/truck.png";
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
const Title = styled.div `
padding: 65px 0px 0px 0px;
text-align: center;
font-weight: bold;
font-size: 28px;
width: 286px;
margin: 0 auto;
`
const Explanation = styled.div`
  padding: 10px 0px 5px 0px;
  margin: 0 auto;
  max-width: 260px;
  font-size: 18px;
`;

class CarTruck extends Component {

  

  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.handleBack()
    this.props.prevStep();
  };

  submitContinueCar = (e) => {
    this.continue(e)
    this.props.handleChangeCar()
}

  submitContinueTruck = (e) => {
    this.continue(e)
    this.props.handleChangeTruck()
    }
    

  render() {
    
    
    return (
      <div className="wrapper">
        <div className="bodyWrapper">
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
            <h3>Local Same Day</h3>
          </Title>
          <Explanation>
            <p>
              Select the approximate size of your item
            </p>
          </Explanation>

          <Card onClick={this.submitContinueCar}> 
            
       
              <Image src={carPath} alt="Local Delivery"  />
              <CardHeading>Fits in the back of a car</CardHeading>
            
            <CardFooter>Ex. Up to 60 inch TV</CardFooter>
           
          </Card>
           <Spacing></Spacing>
          <Card onClick={this.submitContinueTruck}>
           
           
              <Image src={truckPath} alt="National Delivery" />
              <CardHeading>Requires a truck</CardHeading>
          
            <CardFooter>Ex. Couch</CardFooter>
           
          </Card>
        </div>
      </div>
    );
  }
}

export default CarTruck;
