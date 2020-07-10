import React, { Component } from "react";
import styled from "styled-components";
import Header from '../Header'

const Wrapper = styled.div`
  width: 375px;
  text-align: center;
  margin: 0 auto;
  max-height: 812px
`;
const BodyWrapper = styled.div`
  background-color: #daf1fe80;
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

class Address extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };
  render() {
    const { handleChange, address } = this.props;
 

    return (
      <Wrapper>
        <BodyWrapper>
            <Header></Header>
          <Title>
            <h3>Where are we going?</h3>
          </Title>
          <Explanation>
            <p>
              Information needed now for estimating delivery costs.
            </p>
          </Explanation>

          <Card className="mx-auto">
            <CardBody>
              <form id="itemForm">
                <div className="form-group ">
                  <label htmlFor="item">Pick Up Adress</label>
                  <small className="form-text text-muted">
                  We will never show your address to the seller, just the delivery driver.
                  </small>
                  <input
                    type="text"
                    className="form-control"
                    name="address"
                    placeholder="Ex Shoes"
                    value={address}
                    onChange={handleChange("address")}
                  ></input>
                </div>
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

export default Address;
