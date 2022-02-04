import React from 'react';
import {Button , FontFace} from 'react-nes-component';
import { Link } from "react-router-dom";

// Logo imports
import twitterLogo from '../images/twitterLogo.jpg';
import mediumLogo from '../images/mediumLogo.jpg';
import githubLogo from '../images/githubLogo.jpg';
import linkedinLogo from '../images/linkedinLogo.jpg';

class CLFooter extends React.Component {
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
        const style = {
            logo : {
                height: '64px',
                // width: '64px'
            },
            logoContainer: {
                marginLeft: '10px',
                marginRight: '10px',
            },
            socialIcons : {
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center'
            },
            footer : {
                marginTop: '100px',
                // bottom: '0',
                // position: 'fixed',
                display: 'grid',
                gridTemplateColumns: '33% 33% 33%',
            }
        }

        return (
            <div style={style.footer}>
                <div>
                </div>
                <div style={style.socialIcons}>
                <div style={style.logoContainer}>
                    <a href="https://www.linkedin.com/in/adityagudimetla/" target="_blank"><img style={style.logo} src={linkedinLogo}/></a>
                </div>
                <div style={style.logoContainer}>
                    <a href="https://github.com/CaptainLazarus/" target="_blank"><img style={style.logo} src={githubLogo}/></a>
                </div>
                <div style={style.logoContainer}>
                    <a href="https://adityagudimetla.medium.com/" target="_blank"><img style={style.logo} src={mediumLogo}/></a>
                </div>
                </div>
                <div>

                </div>
            </div>
        )
    }
}

export {CLFooter}