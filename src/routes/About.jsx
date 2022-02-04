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
                <div style={styles.content}>
                    <FontFace />
                    <div></div>

                    <div style={styles.myImageContainer}>
                        <img src={myimage} style={styles.myImage} />
                    </div>
                    <div style={styles.outerContainer}>
                        <Container isRounded title="About Me" >
                            <div style={styles.innerContainer}>
                                <div>
                                    <Container title="I prefer">
                                        <div style={{ display: 'flex', flexDirection: 'row', maxWidth: '100%' , justifyContent: 'space-around' }}>
                                            <div style={styles.logoContainer}>
                                                <img src={jslogo} style={styles.logo}></img>
                                            </div>
                                            <div style={styles.logoContainer}>
                                                <img src={pythonlogo} style={styles.logo}></img>
                                            </div>
                                        </div>
                                    </Container>
                                </div>
                                <Container title="I can speak">
                                    English, తెలుగు, हिन्दि, Le Français
                                </Container>
                                <Container title="In short">
                                    <p>My name is Aditya, though I prefer Captain Lazarus. I do stuff occasionally, so check me out on my social media.</p>
                                </Container>
                            </div>

                        </Container>
                    </div>
                    <div></div>
                </div>
            </div>
        )
    }
}

export { About };