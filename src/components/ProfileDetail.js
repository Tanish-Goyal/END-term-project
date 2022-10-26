import React, {Component} from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import {Link} from 'react-router-dom';
import {Breadcrumb,BreadcrumbItem} from 'reactstrap';
class ProfileDetail extends Component{



renderProfile(dish) {
   
        return(
            <div className="col-12 col-md-5 m-1" >
            <Card style={{boxShadow: "inset 0 -3em 3em rgba(0, 0, 0, 0.1), 0 0 0 2px rgb(255, 255, 255),0.3em 0.3em 1em rgba(0, 0, 0, 0.3)",marginBottom:"20px"}}>
                <CardImg top src={dish.image} alt={dish.name} style={{width: '100%', height: '50vh'}}/>
                <CardBody>
                  <CardTitle >{dish.name}</CardTitle>
                  <CardText>{dish.description}</CardText>
                  <CardText>Age : {dish.age}</CardText>
                  <CardText>Height : {dish.height}</CardText>
                  <CardText>Weight : {dish.weight}</CardText>
                  <CardText>Location : {dish.location}</CardText>
                </CardBody>
            </Card>
            </div>
        );
  
}
render(){
    if(this.props.profile!=null)
    return(
        <div class = "container">
        <div className="row">
          <Breadcrumb>
            
             <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
             <BreadcrumbItem active>{this.props.profile.name}</BreadcrumbItem>
           </Breadcrumb>
           <div className="col-12">
              <h3>{this.props.profile.name}</h3>
              <hr/>
              </div>
           </div>
        <div class="row">
        {this.renderProfile(this.props.profile)}
        </div>
            </div>
    );
    else
    return(
        <div>
            </div>
    );
}
}

export default ProfileDetail;