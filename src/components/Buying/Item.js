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
  background-color: #FF404040;
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

class Item extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.back();
  };
  render() {
    const { handleChange, price, item } = this.props;
 

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
            <h3>What are you Buying?</h3>
          </Title>
          <Explanation>
            <p>
              You are creating an offer link to send to sellers.
            </p>
          </Explanation>

          <Card className="mx-auto">
            <CardBody>
              <form id="itemForm">
                <div className="form-group ">
                  <label htmlFor="item">Item Name</label>
                  <small className="form-text text-muted">
                    Short and easy to understand. Does not need to match 
                    listing title.
                  </small>

                  <input
                    type="text"
                    className="form-control"
                    name="item"
                    placeholder="Ex Shoes"
                    value={item}
                    onChange={handleChange("item")}
                  ></input>

                  <label htmlFor="price">Offer Price $</label>
                  <small className="form-text text-muted">
                    You can always adjust your offer later. Delivery not included.
                  </small>
                  <input
                    type="text"
                    className="form-control"
                    name="price"
                    placeholder="Ex 55"
                    value={price}
                    onChange={handleChange("price")}
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

export default Item;
