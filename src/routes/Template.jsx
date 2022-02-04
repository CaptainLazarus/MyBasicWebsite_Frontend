import React from 'react';
import {Button , FontFace} from 'react-nes-component';
import { CLNavbar } from '../components/CLNavbar/CLNavbar';
// import '../images/myimage.gif';
import {CLFooter} from '../components/CLFooter';

class Template extends React.Component {
    constructor(props) {
        super(props);       
    }

    render() {
        const style = {
            textAlign: 'center',
            marginTop: '20px',
        }
        return (
            <div style={style}>
                <CLNavbar current={this.props.current}/>
                <div style={{height:'100px'}}></div>
                {this.props.element}
                <CLFooter />
            </div>
        )
    }
}

export {Template};