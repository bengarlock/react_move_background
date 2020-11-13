
import React from 'react';
import "../images/waves.mp4"
import classes from '../Stylesheets/BackgroundVideo.module.css';

class BackgroundVideo extends React.Component {

    render() {
        return (
        <div className={classes.Container} >
            <video autoPlay="autoplay" loop="loop" muted className={classes.Video} >
                <source src="https://www.bengarlock.com/waves.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    )


    }


}

export default BackgroundVideo