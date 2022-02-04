import React from 'react';
import {Button , FontFace,Container} from 'react-nes-component';
import {Template} from './Template';
import myimage from '../images/myimage.jpg';

class Home extends React.Component {
    constructor(props) {
        super(props);       
    }

    render() {

        const styles = {
            content: {
                display: 'grid',
                // itemsAlign: 'center',
                // width: '100%',
                gridTemplateColumns: '25% 25% 25% 25%',
                // marginTop: '30px'
            },
            innerContainer : {
                display: 'flex'
            },
            outerContainer : {
                width: '50%',
            },
            image : {
                maxHeight: '500px',
                minHeight: '50px',
            }
        }

        console.log(myimage);
        return (
            <div>
                1
            </div>
        )
    }
}

export {Home};