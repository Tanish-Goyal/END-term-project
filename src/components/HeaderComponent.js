import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, 
    Button, Modal, ModalHeader, ModalBody,
    Form, FormGroup, Input, Label } from "reactstrap"
import './HeaderComponent.css'
import {NavLink} from 'react-router-dom';
class Header extends Component {
    constructor(props){
        super(props);
        this.state={
            isNavOpen: false,
            isModalOpen: false
        };
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }
    toggleNav(){
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }
    toggleModal() {
        this.setState({
          isModalOpen: !this.state.isModalOpen
        });
      }

      handleLogin(event) {
        this.toggleModal();
        alert("Username: " + this.username.value + " Password: " + this.password.value
            + " Remember: " + this.remember.checked);
        event.preventDefault();

    }

  render() {
    return(
    <React.Fragment>
      <Navbar dark expand="md">
        <div className="container">
        <NavbarToggler onClick={this.toggleNav}/>
           <NavbarBrand className="mr-auto" href="/">
            {/* <img src="" height="30" width="40" alt="Match Matrimony"/> */}
            <h1>MatrimonyVerse</h1>
            </NavbarBrand>
           <Collapse isOpen={this.state.isNavOpen} navbar>
           <Nav navbar>
           <NavItem>
               <NavLink className="nav-link" to="/home">
                <span className="fa fa-home fa-lg"></span>Home
               </NavLink>
               </NavItem>
               <NavItem>
               <NavLink className="nav-link" to="/aboutus">
                <span className="fa fa-info fa-lg"></span>About Us
               </NavLink>
               </NavItem>
               <NavItem>
               <NavLink className="nav-link" to="/menu">
                <span className="fa fa-list fa-lg"></span>Profiles
               </NavLink>
               </NavItem>
               <NavItem>
               <NavLink className="nav-link" to="/contactus">
                <span className="fa fa-address-card fa-lg"></span>Contact Us
               </NavLink>
               </NavItem>
           </Nav>
           <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <Button outline onClick={this.toggleModal}><span className="fa fa-sign-in fa-lg"></span> Login</Button>
                                </NavItem>
                            </Nav>
       </Collapse>
       
        </div>
      </Navbar>
      
      <div className='jumbotron' style={{backgroundImage: "url(https://snmsmatrimony.com/slider_files/banner_new1.jpg)",backgroundSize: "cover"}}>
           <div className="container">
               <div className="row row-header">
                   <div className="col-12 col-sm-10" style={{color: "black",fontSize: "1.2rem",background: "rgba(255, 255, 255, 0.7)"}}>
                       <h1>MatrimonyVerse</h1>
                        <p>MatrimonyVerse is one of the India’s well known and most successful online matchmaking service, has been trusted my the people all over the world to help them find your soulmate. Today, we are serving Indians worldwide. Thousands of people have met there life partner through our revolutionary matchmaking services. Our promise is to provide people with ultimate matchmaking experience by expanding the opportunities available to meet potential life partner and build a happy life. Whether you are never married, divorced, separated or widowed, we believe in providing a secure and convenient matchmaking experience. 
                       </p>
                       <h3>Why Register with MatrimonyVerse ? </h3>
                       <ul>
                            <li>Thousands of 100% verified profiles.</li>
                            <li>Receive daily matches via E-mail and SMS.</li>
                            <li>Chat free with your prospects.</li>
                            <li>1000’s of success stories.</li>
                       </ul>
                   </div>
               </div>
           </div>
       </div>

       <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                    <ModalBody>
                       
                    <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label htmlFor="username">Username</Label>
                                <Input type="text" id="username" name="username"
                                    innerRef={(input) => this.username = input} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" id="password" name="password"
                                    innerRef={(input) => this.password = input}  />
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" name="remember"
                                    innerRef={(input) => this.remember = input}  />
                                    Remember me
                                </Label>
                            </FormGroup>
                            <Button type="submit" value="submit" color="primary">Login</Button>
                        </Form>
                    </ModalBody>
                </Modal>
    </React.Fragment>
    );
  }
}

export default Header;