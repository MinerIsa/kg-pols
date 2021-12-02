import React from 'react';
import { FaBorderNone } from 'react-icons/fa';
import '/Users/abc/Desktop/WebDev/kg-pols/node_modules/bootstrap/dist/css/bootstrap.min.css';
import Card from '../components/Cards/Card';
import Cards from '../components/Cards/Cards';
import styles from './index.css';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import Girl from '../components/Cards/assets/girl.jpg';



const Home = () => {
    return (
        <div className="cover-container d-flex h-100 p-3 mx-auto flex-column">
            <main class="px-3">
                <h1>Welcome to Nomad Academy</h1>
                <p class="lead">A space to learn Programming.</p>
                <p class="lead">
                <a href="#" class="btn btn-lg btn-secondary fw-bold border-white bg-white">Learn more</a>
                </p>
            </main>
            <div className="row">
                <div className="col-lg-6">
                    <Card
                        imgsrc={Girl}
                        title="JavaScript"
                        text="Learn to set the logic of your website to make it perform tasks."
                    />
                </div>
                <div className="col-lg-6">
                    <Card
                        imgsrc={Girl}
                        title="JavaScript"
                        text="Learn to set the logic of your website to make it perform tasks."
                    />
                </div>
                <div className="col-lg-6">
                    <Card
                        imgsrc={Girl}
                        title="JavaScript"
                        text="Learn to set the logic of your website to make it perform tasks."
                    />
                </div>
                <div className="col-lg-6">
                    <Card
                        imgsrc={Girl}
                        title="JavaScript"
                        text="Learn to set the logic of your website to make it perform tasks."
                    />
                </div>
                

                
            </div>
           
        </div>

    );
};

export default Home;