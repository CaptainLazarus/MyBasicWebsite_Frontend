import React from 'react';
import {Button , FontFace} from 'react-nes-component';
import { Link } from "react-router-dom";

class CLNavbar extends React.Component {
    constructor(props) {
        super(props);   
        // this.state = {
        //     current: 'Home',
        // }
        this.changePrimary = this.changePrimary.bind(this);
    }

    changePrimary(event) {
        this.setState({
            current: event.target.innerHTML
        });
    }

    render() {
        const navList = [
            'Home',
            'About',
            'Blog',
            'Portfolio'
        ];

        return (
            <nav>
                <FontFace />
                {navList.map(url => <Link to={url === 'Home'? "/":("/"+url)} key={url}>
                    <Button type={this.props.current === url ? 'success':'primary'} onClick={this.changePrimary}>
                        {url}
                    </Button>
                </Link>)}
            </nav>
        )
    }
}

export {CLNavbar};