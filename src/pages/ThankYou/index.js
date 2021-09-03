import React, { useEffect } from 'react';
import ReactGA from 'react-ga';

const ThankYou = (props) => {

    useEffect(() => {
        ReactGA.initialize('UA-178679189-1');
        ReactGA.pageview('/welcome');
       
    }, [])

    return (
        <div className="row text-alignment">
            <div className="col-lg-12">
                <h1>Thank You for subscribing with us</h1>
            </div>
        </div>
    );
}

export default ThankYou;