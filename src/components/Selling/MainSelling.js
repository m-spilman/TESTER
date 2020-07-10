import React, { Component } from "react";
import Item from "./Item";
import DeliveryType from "./DeliveryType";
import CarTruck from "./CarTruck";
import SecondDeliveryOption from "./SecondDeliveryOption";
import BoxSizes from "./BoxSizes";
import SignIn from "./SignIn";
import Address from "./Address";
import Review from './Review'
import StartConversation from "./StartConversation";
// import Buying_Selling from '../Buying_Selling'


class MainSelling extends Component {
  state = {
    step: 1,
    item: "",
    price: "",
    local: false,
    national: false,
    car: false,
    truck: false,
    boxSize: "",
    address: "",
    password: "",
    deliveryFlagLocal: false,
    deliveryFlagNational: false,
    first: "",
    last: "",
    email: "",
    phone: "",
  };
  nextStepNoSeconardyDelivery = () => {
    const { step } = this.state;
    this.setState({
      step: step + 2,
    });
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
  handleChangeLocal = () => {
    this.setState({ local: true });
  };
  handleChangeNational = () => {
    this.setState({ national: true });
  };
  handleChangeCar = () => {
    this.setState({ car: true });
  };
  handleChangeTruck = () => {
    this.setState({ truck: true });
  };
  handleChangeBox = (size) => {
    this.setState({ boxSize: size });
  };
  handleBackCarTruck = () => {
    this.setState({ local: false });
    this.setState({ national: false });
  };
  handleBackSecondaryDeliveryShowingNational = () => {
    this.setState({ car: false });
    this.setState({ truck: false });
  };
  handleBackSecondaryDeliveryShowingLocal = () => {
    this.setState({ boxSize: "" });
  };
  handleBackBoxes = () => {
    this.setState({ local: false });
    this.setState({ national: false });
  };
  secondaryDeliveryFlagLocal = () => {
    this.setState({ deliveryFlagLocal: true });
  };
  secondaryDeliveryFlagNational = () => {
    this.setState({ deliveryFlagNational: true });
  };

  handleBackItem = () => {
    this.props.backSelling()
  };
  handleBackSignIn = () => {
    const { step } = this.state;
    this.setState({
      step: step - 2,
    });
  };

  showStep = () => {
    const {
      step,
      item,
      price,
      local,
      national,
      deliveryFlagLocal,
      deliveryFlagNational,
      first,
      last,
      phone,
      email,
      address,
      car,
      truck,
      boxSize
    } = this.state;

    // signUp:{first}, signUp:{last}, signUp:{email}, signUp:{phone}
   

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
        <DeliveryType
          handleChangeLocal={this.handleChangeLocal}
          handleChangeNational={this.handleChangeNational}
          nextStep={this.nextStep}
          prevStep={this.prevStep}
        ></DeliveryType>
      );
    }
    if (step === 3 && local === true) {
      return (
        <CarTruck
          handleChangeCar={this.handleChangeCar}
          handleChangeTruck={this.handleChangeTruck}
          nextStep={this.nextStep}
          prevStep={this.prevStep}
          handleBack={this.handleBackCarTruck}
        ></CarTruck>
      );
    }
    if (step === 3 && national === true) {
      return (
        <BoxSizes
          nextStep={this.nextStep}
          prevStep={this.prevStep}
          handleChangeBox={this.handleChangeBox}
          handleBack={this.handleBackBoxes}
        ></BoxSizes>
      );
    }

    if (step === 4) {
      return (
        <SecondDeliveryOption
          nextStep={this.nextStep}
          prevStep={this.prevStep}
          national={national}
          local={local}
          handleChangeLocal={this.handleChangeLocal}
          handleChangeNational={this.handleChangeNational}
          handleBackLocal={this.handleBackSecondaryDeliveryShowingLocal}
          handleBackNational={this.handleBackSecondaryDeliveryShowingNational}
          secondaryLocal={this.secondaryDeliveryFlagLocal}
          secondaryNational={this.secondaryDeliveryFlagNational}
          noSecondary={this.nextStepNoSeconardyDelivery}
        ></SecondDeliveryOption>
      );
    }

    if (step === 5 && deliveryFlagLocal === true) {
      return (
        <CarTruck
          handleChangeCar={this.handleChangeCar}
          handleChangeTruck={this.handleChangeTruck}
          nextStep={this.nextStep}
          prevStep={this.prevStep}
          handleBack={this.handleBackCarTruck}
        ></CarTruck>
      );
    }
    if (step === 5 && deliveryFlagNational === true) {
      return (
        <BoxSizes
          nextStep={this.nextStep}
          prevStep={this.prevStep}
          handleChangeBox={this.handleChangeBox}
          handleBack={this.handleBackBoxes}
        ></BoxSizes>
      );
    }
    if (step === 6) {
      return (
        <SignIn
          handleBack={this.handleBackSignIn}
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
    if (step === 7) {
      return (
        <Address
          handleChange={this.handleChange}
          nextStep={this.nextStep}
          prevStep={this.prevStep}
          address={address}
        ></Address>
      );
    }
    if (step === 8) {
      return (
        <Review
          handleChange={this.handleChange}
          nextStep={this.nextStep}
          local={local}
          national={national}
          car={car}
          truck={truck}
          address={address}
          boxSize={boxSize}
        ></Review>
      );
    }
    if (step === 9) {
      return (
        <StartConversation
        item = {item}
        price = {price}
        national = {national}
        local = {local}
        ></StartConversation>
      );
    }
  };

  render() {
    return <>{this.showStep()}</>;
  }
}

export default MainSelling;
