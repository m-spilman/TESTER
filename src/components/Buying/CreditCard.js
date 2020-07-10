import React, { Component } from "react";
import styled from "styled-components";
import HeaderPage2AndOn from "../HeaderPage2AndOn";

const arrowPath = "images/nav/backArrow.png";

const Wrapper = styled.div`
  width: 375px;
  text-align: center;
  margin: 0 auto;
  max-height: 812px
`;
const BodyWrapper = styled.div`
  background-color: #4FEF4F40;
  height: 812px;
  margin 0 !importnat;
`;

const Title = styled.div`
  padding: 45px 0px 0px 0px;
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
const Card = styled.div`
  border: none !important;
  max-width: 264px;
  text-align: center;
  margin-left: auto !important;
  margin-right: auto !important;
  width: 18rem;
  padding-bottom: 30px;
  `;
const CardBody = styled.div`
  padding: 0px 0px 0px 0px;
  box-shadow: 3px 3px 3px 3px rgba(0, 0, 0, 0.2),
  12px 8px 12px rgba(0, 0, 0, 0.14), 4px 4px 4px rgba(0, 0, 0, 0.12);
  text-align: left;
  height: 384px;
  background-color: white;
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
const DateCVV = styled.div `
display: flex;
flex-direction: row;
justify-content: space-between

`

const Date = styled.div `
flex: 5;
`
const CVV = styled.div `
flex: 3;
`
const Spacing = styled.div`
  width: 15px;
`;
const Check = styled.div `
height: 25px;
display: flex;
flex-direction: row;
margin-left 10px;
margin-top: 5px;
`
const Label = styled.label `
padding-top: 20px !important;

`

class CreditCard extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.handleBack();
  };
  render() {
    // const { handleChange, price, item } = this.props;
 

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
          <Title>
            <h3>Verification</h3>
          </Title>
          <Explanation>
            <p>
              You will not be charged. We are verifying your offer is serious.
            </p>
          </Explanation>

          <Card className="mx-auto">
            <CardBody>
              <form id="itemForm">
                <div className="form-group ">
                  <Label htmlFor="item">Payment Method</Label>
                  <small className="form-text text-muted">
                    Pay after you receive your item and are satisfied.
                  </small>

                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    placeholder="Name on Card"
                  ></input>
                 
                  <input
                    type="number"
                    className="form-control"
                    name="ccNumber"
                    placeholder="Credit/Debit Card Number"
                  ></input>
<DateCVV>
    <Date>
                   <input
                    type="number"
                    className="form-control"
                    name="expirationDate"
                    placeholder="Exp. MM/YY"
                  ></input>
                   
                  </Date>
                  <Spacing></Spacing>
                  <CVV>
                  <input
                    type="number"
                    className="form-control"
                    name="cVV"
                    placeholder="CVV"
                  ></input>
                  </CVV>
</DateCVV>
                   <Label htmlFor="item">Payment Address</Label>
                   <input
                    type="text"
                    className="form-control"
                    name="billingAddress"
                    placeholder="12345 Street, City, ST, Zip"
                  ></input>

                </div>
                <Check class="form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <div>Same as Delivery Address</div>
  </Check>

              </form>

            </CardBody>
          </Card>
          <button className="btn-round btn-dark" onClick={this.continue}>
            Continue
          </button>
        </BodyWrapper>
      </Wrapper>
    );
  }
}

export default CreditCard;
