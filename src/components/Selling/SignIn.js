import React, { Component } from "react";
import styled from "styled-components";
import HeaderPage2AndOn from "../HeaderPage2AndOn";

const arrowPath = "images/nav/backArrow.png";

const Wrapper = styled.div`
  width: 375px;
  text-align: center;
  margin: 0 auto;
  max-height: 812px;
`;
const BodyWrapper = styled.div`
  background-color: #4FEF4F40;
  height: 812px;
  margin 0 !importnat;
`;

const Title = styled.div`
  text-align: center;
  font-weight: bold;
  font-size: 28px;
  width: 286px;
  margin: 0 auto;
  height: 28px;
`;
const Explanation = styled.div`
  padding: 10px 0px 5px 0px !important;
  margin: 0 auto;
  max-width: 260px;
  height: 73px;
  font-size: 18px;
  margin-bottom: 15px
`;
const Card = styled.div`
  border: none !important;
  width: 264px;
  height:296px;
  text-align: center;
  margin-left: auto !important;
  margin-right: auto !important;
  margin-bottom:15px;
  margin-top: 5px;

`;
const CardBody = styled.div`
  padding: 0px 0px 0px 0px;
  box-shadow: 3px 3px 3px 3px rgba(0, 0, 0, 0.2),
  12px 8px 12px rgba(0, 0, 0, 0.14), 4px 4px 4px rgba(0, 0, 0, 0.12);
  text-align: left;
  width:264px;
  height: 296px;
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
const Button = styled.button `

width: 75%;
height: 54px;
margin-bttom: 3px;
`
const Label = styled.label `
  padding-left: 5px;
  padding-top: 4px;
  font-weight: bold;
  font-size: 18px;
  margin-top 2px

`
const Spacing = styled.div`
  height: 5px;
`;
const Input = styled.input `

height: 25px
`
const Medium = styled.div `
font-weight: 14
`
class SignIn extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };
  

  
  render() {
    const { handleChange, first, last, email, phone, handleBack } = this.props;
   

    return (
      <Wrapper>
        <BodyWrapper>
          <BackHeader>
            <BackButtonImg
              className="card-img-top arrow"
              src={arrowPath}
              alt="go back"
              onClick={handleBack}
            ></BackButtonImg>
            <HeaderPage2AndOn></HeaderPage2AndOn>
          </BackHeader>

          <Title>
            <h3>Lets Be Friends</h3>
          </Title>
          <Explanation>
            <div>Everyone using POD is verified to help protect transactions.</div>
          </Explanation>
          <Button className="btn-dark"> Facebook </Button>
          <Spacing></Spacing>
          <Button className="btn-dark"> Gmail </Button>
          <Medium className="form-text text-muted">
            Or submit the following form:
          </Medium>

          <Card className="mx-auto">
            <CardBody>
              <form id="itemForm">
                <div className="form-group ">
                  <Label htmlFor="item">First Name</Label>
                  <Input
                    type="text"
                    className="form-control"
                    name="first"
                    placeholder="Jane"
                    value={first}
                    onChange={handleChange("first")}
                  ></Input>

                  <Label htmlFor="price">Last Name</Label>
                  <Input
                    type="text"
                    className="form-control"
                    name="last"
                    placeholder="Smith"
                    value={last}
                    onChange={handleChange("last")}
                  ></Input>
                  
                  <Label htmlFor="price">Email</Label>
                  <Input
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder="jane.smith@gmail.com"
                    value={email}
                    onChange={handleChange("email")}
                  ></Input>
                  
                  <Label htmlFor="price">Phone Number</Label>
                  <Input
                    type="number"
                    className="form-control"
                    name="phone"
                    placeholder="555-444-3333"
                    value={phone}
                    onChange={handleChange("phone")}
                  ></Input>
                </div>
              </form>
            </CardBody>
          </Card>
          <button  className="btn-round btn-dark" onClick={this.continue}>
            Continue
          </button>
        </BodyWrapper>
      </Wrapper>
    );
  }
}

export default SignIn;
