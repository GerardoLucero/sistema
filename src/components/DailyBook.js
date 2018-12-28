import React from 'react'
import propTypes from 'prop-types'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
import CircularProgressbar from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

const styles = theme => ({
    container: {
        width: "100%"
    },
    container2: {
        padding: "16px"
    },
    header: {
        heigth: "20%",
        backgroundColor: theme.palette.grey[200],
        padding: 8
    },
    title: {
        color: 'black',
        fontWeight: 500
    },
    text: {
        position: 'absolute', 
        textAlign: 'center'
    }
})

const DailyBook = ({ classes, date, value, total, theme}) => {

    const circular = {
        // Customize the root svg element
        root: {},
        // Customize the path, i.e. the part that's "complete"
        path: {
          // Tweak path color:
          stroke: theme.palette.secondary.main,
          // Tweak path to use flat or rounded ends:
          strokeLinecap: 'butt',
          // Tweak transition animation:
          transition: 'stroke-dashoffset 0.5s ease 0s',
        },
        // Customize the circle behind the path
        trail: {
          // Tweak the trail color:
          stroke: theme.palette.grey[200],
        },
        // Customize the text
        text: {
          // Tweak text color:
          fill: theme.palette.secondary.main,
          // Tweak text size:
          fontSize: '30px',
        },
    
    }
    return ( 
    <Paper className={classes.container}>
        <div className={classes.header}>
            <Typography variant="subtitle1" align="center" className={classes.title}>
                {date}
            </Typography>
        </div> 
        <div className={classes.container2}>
            <CircularProgressbar 
                percentage={(value/total*100)} 
                text={`${value}/${total}`} 
                styles={circular}
            />
        </div>
    </Paper>
    )
}

DailyBook.propTypes = {
    classes: propTypes.object.isRequired,
    theme: propTypes.object.isRequired,
}

export default withStyles(styles, {withTheme: true})(DailyBook)