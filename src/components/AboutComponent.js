import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader } from 'reactstrap';
import { Link } from 'react-router-dom';

function About(props) {

   

    return(
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>About Us</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>About Us</h3>
                    <hr />
                </div>                
            </div>
            <div className="row row-content">
                <div className="col-12 col-md-6">
                    <h2>Our History</h2>
                    <p>Started in 2010,MatrimonyVerse quickly established itself as a best icon par excellence in United States.You believe in soulmates, so do we.

Connect with your perfect one here.While you do so, we take utmost care of your Privacy & Security.

We ensure 100% Screening of profiles, Verified Stamp on those

we've met in person.Featuring  the best matches made in the world, you will find the right one for you.</p>
                    
                                           <p>Our website is one of the pioneers of online matrimony service. It is regarded as the most trusted matrimony website by Brand Trust Report. We have also been featured in Limca Book of records for having Record number of documented marriages online. Our purpose is to build a better lives through happy marriages.</p><br/>


                    
                    <p>MatrimonyVerse is one of the India’s well known and most successful online matchmaking service, has been trusted my the people all over the world to help them find your soulmate. Today, we are serving Indians worldwide. Thousands of people have met there life partner through our revolutionary matchmaking services. Our promise is to provide people with ultimate matchmaking experience by expanding the opportunities available to meet potential life partner and build a happy life. Whether you are never married, divorced, separated or widowed, we believe in providing a secure and convenient matchmaking experience.</p>

                    <p>The matrimony helps you find the  <em>person of your dreams</em>, and help you bulid your life.Wish you all the luck by our CEO, Mr. Duffin.</p>
                </div>
                <div className="col-12 col-md-5">
                    <Card>
                        <CardHeader className="bg-primary text-white">Facts At a Glance</CardHeader>
                        <CardBody>
                            <dl className="row p-1">
                                <dt className="col-6">Started</dt>
                                <dd className="col-6">3 Feb. 2013</dd>
                                <dt className="col-6">Last Year's Turnover</dt>
                                <dd className="col-6">$1,250,375</dd>
                                <dt className="col-6">Employees</dt>
                                <dd className="col-6">40</dd>
                                <dt className="col-6">Marriages Done</dt>
                                <dd className="col-6">8500+</dd>

                            </dl>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-12">
                    <Card>
                        <CardBody className="bg-faded">
                            <blockquote className="blockquote">
                                <p className="mb-0">Marriage is not a noun; it's a verb. It isn't something you get. It's something you do. It's the way you love your partner every day.</p>
                                <footer className="blockquote-footer">Yogi Berra,
                                <cite title="Source Title">Barbara De Angelis</cite>
                                </footer>
                            </blockquote>
                        </CardBody>
                    </Card>
                </div>
            </div>
            
        </div>
    );
}

export default About; 