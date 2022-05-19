import React from 'react';
import { Button, FontFace, Container } from 'react-nes-component';
import { Template } from './Template';
import myimage from '../images/myimage.jpg';
import jslogo from '../images/jslogo.jpg';
import pythonlogo from '../images/pythonlogo.png';

class About extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        const styles = {
            content: {
                display: 'grid',
                gridTemplateColumns: '25% 25% 25% 25%',
                marginTop: '30px'
            },
            innerContainer: {
                display: 'flex',
                flexDirection: 'column'
            },
            outerContainer: {
                width: '100%',

            },
            myImage: {
                maxWidth: '100%',
                height: 'auto'
            },
            logoContainer : {
                maxWidth: '100px',
                flex:'1',
                padding: '10px'
            },
            logo : {
                maxWidth: '100%',
                height: 'auto'
            },
            myImageContainer : {
                maxWidth: '400px'
            }
        }

        console.log(myimage);
        return (
            <div>
                About?
            </div>
        )
    }
}

export { About };