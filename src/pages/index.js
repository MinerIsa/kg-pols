import React from 'react';
import { FaBorderNone } from 'react-icons/fa';
import '/Users/abc/Desktop/WebDev/kg-pols/node_modules/bootstrap/dist/css/bootstrap.min.css';
import Card from '../components/Cards/Card';
import Cards from '../components/Cards/Cards';
import styles from './index.css';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import Girl from '../components/Cards/assets/girl.jpg';
import Programmer from '../components/Cards/assets/Programmer.svg';
import Devs from '../components/Cards/assets/Devs.svg';



const Home = () => {
    return (
        <div className="cover-container d-flex h-100 p-3 mx-auto flex-column">
            <div className="row px-3" style={{textAlign: 'left', margin: '0rem 0'}}>
                <div className="col-lg-8" style={{padding: '4rem 0'}}>
                    <h1 style={{fontSize: "2.5rem"}}>Welcome to Nomad Academy</h1>
                    <p className="lead" style={{fontSize:"2rem"}}>A space to learn Programming.</p>
                    <p className="lead">
                    <a href="#" class="btn btn-lg btn-outline-light fw-bold">Learn more</a>
                    </p>
                </div>
                <div className="col-lg-4" style={{padding: '0rem 0'}}>
                    <img src={Programmer} style={{height: '45%',width: 'auto', objectFit: 'contain'}}/>
                </div>
            </div>
            <div className="row px-3" style={{textAlign: 'left', margin: '5rem 0'}}>
                <div className="col-lg-4" style={{padding: '2rem 0'}}>
                    <img src={Devs} style={{width: '100%', objectFit: 'contain'}}/>
                </div> 
                <div className="col-lg-8" style={{padding: '3rem 0'}}>
                    <p className="lead" style={{fontSize:"2rem"}}>Here's what you can do.</p>
                    <p>Expedita voluptas omnis cupiditate totam eveniet nobis sint iste. Dolores est repellat corrupti reprehenderit.</p>
                </div>
            </div>
        </div>

    );
};

export default Home;