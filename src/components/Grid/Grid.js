import React from 'react';
import {FontFace , Button} from 'react-nes-component';
import makeStyles from '@material-ui/core/styles'
var eightBit = require('8bit');

class Grid extends React.PureComponent {
    
    constructor(props) {
        super(props);
        this.state = {}
    }
    
    render() {
        const styles = makeStyles({
            wrapper: {
                display:'flex' ,
                flexDirection: "column",
                alignItems: "center",
                padding: "0em 5rem 0em 5rem"
            },
            items: {
                padding: "1rem"
            }
        });
        const classes = styles(); 
        return (
            <div className={classes.wrapper}>
                <div className={classes.item}>{icon}</div>
                <Typography className={classes.item} variant="h5">{title}</Typography>
                <div className={classes.item}>
                    <CustomBtn  txt={btnTitle}/>
                </div>
            </div>
        )
    }
    
}