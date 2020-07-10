import React, { Component } from "react";
import styled from "styled-components";
import Header from '../Header'


const CardHeading = styled.div`
  padding: 5px 0px 0px 0px;
  text-align: center;
  font-weight: bold;
  font-size: 16px;
  max-width: 264px;
  margin: 0 auto;
`;
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

const Spacing = styled.div`
  height: 25px;
`;
const Title = styled.div`
  padding: 15px 0px 0px 0px;
  text-align: center;
  font-weight: bold;
  font-size: 28px;
  width: 302px;
  margin: 0 auto;
`;
const Explanation = styled.div`
  padding: 10px 0px 5px 0px;
  margin: 0 auto;
  max-width: 260px;
  font-size: 18px;
`;
const CardBody = styled.div`
  text-align: left;
`;
const Delivery = styled.div`
  margin-top: 20px;
  margin-left: 15px;
`;
const Size = styled.div`
  margin-top: 20px;
  margin-left: 15px;
`;
const Address = styled.div`
  margin-top: 20px;
  margin-left: 15px;
  display: inline-block;
`;
const Label = styled.div`
  display: inline-block;
  text-align: left;
  margin-right: 5px;
  font-weight: bold;
`;

class Review extends Component {

  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    var size;
    var both;
    var localVar;
    var nationalVar;

    const { car, address, handleChange, local, national, boxSize } = this.props;

    if (car === true) {
      size = "car";
    } else {
      size = "truck";
    }

    if (local === true && national === true) {
      both = true;
    } else if (local === true) {
      localVar = true;
    } else {
      nationalVar = true;
    }
    if (both) {
      return (
        <div className="wrapper">
          <div className="bodyWrapper">
          <Header></Header>
            <Title>
              <h3>Review Deilvery Options</h3>
            </Title>
            <Explanation>
              <p>
                Congrants! you got options
              </p>
            </Explanation>
            <Card>
              <CardHeading>Local Same Day</CardHeading>
              <CardBody>
                <Delivery>
                  <Label>Delivery: </Label>
                  by PostMates
                </Delivery>
                <Size>
                  <Label>Size: </Label>Fits in {' '}
                  {size}
                </Size>
                <Address>
                  <Label>Address: </Label>
                  <input
                    type="text"
                    className="form-control"
                    name="address"
                    value={address}
                    onChange={handleChange("address")}
                  ></input>
                </Address>
              </CardBody>
            </Card>
            <Spacing></Spacing>
            <Card>
              <CardHeading>Nationwide</CardHeading>
              <CardBody>
                <Delivery>
                  <Label>Delivery: </Label>
                  by FedEx
                </Delivery>
                <Size>
                  <Label>Size: </Label>
                  {boxSize}
                </Size>
                <Address>
                  <Label>Address: </Label>
                  <input
                    type="text"
                    className="form-control"
                    name="address"
                    value={address}
                    onChange={handleChange("address")}
                  ></input>
                </Address>
              </CardBody>
            </Card>
            <button className="btn-round btn-dark" onClick={this.continue}>
            Continue
          </button>
          </div>
        </div>
      );
    }
    if (localVar) {
      return (
        <div className="wrapper">
          <div className="bodyWrapper">
          <Header></Header>
            <Title>
              <h3>Review Deilvery Options</h3>
            </Title>
            <Explanation>
              <p>
                Congrants! you got options
              </p>
            </Explanation>
            <Card>
              <CardHeading>Local Same Day</CardHeading>
              <CardBody>
                <Delivery>
                  <Label>Delivery: </Label>
                  by PostMates
                </Delivery>
                <Size>
                  <Label>Size: </Label>Fits in {' '}
                  {size}
                </Size>
                <Address>
                  <Label>Address: </Label>
                  <input
                    type="text"
                    className="form-control"
                    name="address"
                    value={address}
                    onChange={handleChange("address")}
                  ></input>
                </Address>
              </CardBody>
            </Card>
            <button className="btn-round btn-dark" onClick={this.continue}>
            Continue
          </button>
          </div>
        </div>
      );
    }

    if (nationalVar) {
      return (
        <div className="wrapper">
          <div className="bodyWrapper">
          <Header></Header>
            <Title>
              <h3>Review Deilvery Options</h3>
            </Title>
            <Explanation>
              <p>
                Congrants! you got options
              </p>
            </Explanation>
            <Card>
              <CardHeading>Nationwide</CardHeading>
              <CardBody>
                <Delivery>
                  <Label>Delivery: </Label>
                  by FedEx
                </Delivery>

                <Size>
                  <Label>Size:</Label>
                  {boxSize}
                </Size>
                <Address>
                  <Label>Address: </Label>
                  <input
                    type="text"
                    className="form-control"
                    name="address"
                    value={address}
                    onChange={handleChange("address")}
                  ></input>
                </Address>
              </CardBody>
            </Card>
            <button className="btn-round btn-dark" onClick={this.continue}>
            Continue
          </button>
          </div>
        </div>
      );
    }
  }
}

export default Review;
