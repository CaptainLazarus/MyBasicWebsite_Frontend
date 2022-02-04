import React from 'react';
import {Button , FontFace} from 'react-nes-component';
import {Template} from './Template';

class Blog extends React.Component {
    constructor(props) {
        super(props);       
    }

    render() {
        return (
            <div>
                {/* <Template current="Blog"/> */}
                <p>Blog</p>
            </div>
        )
    }
}

export {Blog};