import React, {Component} from 'react';
import Card from './Card'
import Boy from './assets/boy.jpg';
import Horsemen from './assets/horsemen.jpeg';
import University from './assets/university.jpeg';
import Grandma from './assets/grandma.jpg';

const Cards = () => {
    return(
                <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">             
                    <div className="col-lg-3 col-md-6 col-sm-12 d-flex justify-content-center">
                        <Card 
                            imgsrc={Boy}
                            title="HTML & CSS"
                            text="Learn to build and style the basic structure of the website."
                        />
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 d-flex justify-content-center">
                        <Card 
                            imgsrc={Grandma}
                            title="Bootstrap"
                            text="Learn to design websites faster and easier."
                        />
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 d-flex justify-content-center">  
                        <Card 
                            imgsrc={Horsemen}
                            title="JavaScript"
                            text="Learn to set the logic of your website to make it perform tasks."
                        />
                    </div>
                        
                    <div className="col-lg-3 col-md-6 col-sm-12 d-flex justify-content-center">
                        <Card 
                            imgsrc={University}
                            title="React"
                            text="Learn to create large web applications that can change data without reloading the page."
                        />
                    </div>

                    <div className="col-lg-3 col-md-6 col-sm-12 d-flex justify-content-center">
                        <Card 
                            imgsrc={Boy}
                            title="HTML & CSS"
                            text="Learn to build and style the basic structure of the website."
                        />
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 d-flex justify-content-center">
                        <Card 
                            imgsrc={Grandma}
                            title="Bootstrap"
                            text="Learn to design websites faster and easier."
                        />
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 d-flex justify-content-center">  
                        <Card 
                            imgsrc={Horsemen}
                            title="JavaScript"
                            text="Learn to set the logic of your website to make it perform tasks."
                        />
                    </div>
                        
                    <div className="col-lg-3 col-md-6 col-sm-12 d-flex justify-content-center">
                        <Card 
                            imgsrc={University}
                            title="React"
                            text="Learn to create large web applications that can change data without reloading the page."
                        />
                    </div>

                    <div className="col-lg-3 col-md-6 col-sm-12 d-flex justify-content-center">
                        <Card 
                            imgsrc={Boy}
                            title="HTML & CSS"
                            text="Learn to build and style the basic structure of the website."
                        />
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 d-flex justify-content-center">
                        <Card 
                            imgsrc={Grandma}
                            title="Bootstrap"
                            text="Learn to design websites faster and easier."
                        />
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 d-flex justify-content-center">  
                        <Card 
                            imgsrc={Horsemen}
                            title="JavaScript"
                            text="Learn to set the logic of your website to make it perform tasks."
                        />
                    </div>
                        
                    <div className="col-lg-3 col-md-6 col-sm-12 d-flex justify-content-center">
                        <Card 
                            imgsrc={University}
                            title="React"
                            text="Learn to create large web applications that can change data without reloading the page."
                        />
                    </div>

                    <div className="col-lg-3 col-md-6 col-sm-12 d-flex justify-content-center">
                        <Card 
                            imgsrc={Boy}
                            title="HTML & CSS"
                            text="Learn to build and style the basic structure of the website."
                        />
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 d-flex justify-content-center">
                        <Card 
                            imgsrc={Grandma}
                            title="Bootstrap"
                            text="Learn to design websites faster and easier."
                        />
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 d-flex justify-content-center">  
                        <Card 
                            imgsrc={Horsemen}
                            title="JavaScript"
                            text="Learn to set the logic of your website to make it perform tasks."
                        />
                    </div>
                        
                    <div className="col-lg-3 col-md-6 col-sm-12 d-flex justify-content-center">
                        <Card 
                            imgsrc={University}
                            title="React"
                            text="Learn to create large web applications that can change data without reloading the page."
                        />
                    </div>

                    <div className="col-lg-3 col-md-6 col-sm-12 d-flex justify-content-center">
                        <Card 
                            imgsrc={Boy}
                            title="HTML & CSS"
                            text="Learn to build and style the basic structure of the website."
                        />
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 d-flex justify-content-center">
                        <Card 
                            imgsrc={Grandma}
                            title="Bootstrap"
                            text="Learn to design websites faster and easier."
                        />
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 d-flex justify-content-center">  
                        <Card 
                            imgsrc={Horsemen}
                            title="JavaScript"
                            text="Learn to set the logic of your website to make it perform tasks."
                        />
                    </div>
                        
                    <div className="col-lg-3 col-md-6 col-sm-12 d-flex justify-content-center">
                        <Card 
                            imgsrc={University}
                            title="React"
                            text="Learn to create large web applications that can change data without reloading the page."
                        />
                    </div>           
                </div> 
    )
}

export default Cards;