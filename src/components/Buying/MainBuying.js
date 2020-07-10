import React, { Component } from "react";
import Item from "./Item";
import SignIn from "./SignIn";
import Address from "./Address";
import CreditCard from './CreditCard'


class MainBuying extends Component {
  state = {
    step: 1,
    item: "",
    price: "",
    address: "",
    email: "",
    first: "",
    last: "",
    phone: "",
  };

  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };

  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };

  //handleChanges takes input and event

  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };

  handleBackItem = () => {
    this.props.backBuying()
  };

  showStep = () => {
    const {
      step,
      item,
      price,
      first,
      last,
      phone,
      email,
      address,
    } = this.state;

   
    if (step === 1) {
      return (
        <Item
          handleChange={this.handleChange}
          nextStep={this.nextStep}
          item={item}
          price={price}
          back={this.handleBackItem}
        ></Item>
      );
    }
    if (step === 2) {
        return (
            <SignIn
              handleBack={this.prevStep}
              nextStep={this.nextStep}
              handleChange={this.handleChange}
              first={first}
              last={last}
              email={email}
              phone={phone}
              item={item}
            ></SignIn>
          );
    }
    if (step === 3) {
      return (
            <Address
              handleChange={this.handleChange}
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              address={address}
            ></Address>
          );
    }

    if (step === 4) {
      return (
      <CreditCard
      handleBack ={this.prevStep}
      ></CreditCard>
      );
    }
  };

  render() {
    return <>{this.showStep()}</>;
  }
}

export default MainBuying;
