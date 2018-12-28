import React from 'react'
import propTypes from 'prop-types'
import classnames from 'classnames'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
    container: {
        padding: 16,
        flex: 1,
        minHeight: 200,
        minWidth: 200,
        maxWidth: 350,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    },
    text: {
        display: 'flex',
    },
    image: {
        width: 52,
        height: 52
    }
})

const ExternalDataCard = ({ classes, icon, image, quantity, units, subtitle, button, color }) => (
    <Paper className={classes.container}>
        <div style={{color: color}}>
            {icon?icon:<img src={image} className={classes.image} alt="" />}
        </div>
        <div className={classes.text}>
            <Typography variant="h6" style={{color: color}}>
                {quantity}
            </Typography>
            <Typography variant="h6" style={{marginLeft: 4}}>
                {units}
            </Typography>
        </div>
        <Typography variant="subtitle1" align="center">
            {subtitle}
        </Typography>
        <Button variant="contained" className={classnames(classes.root)} style={{backgroundColor: color, color: 'white'}}>
            {button}
        </Button>
    </Paper>
)

ExternalDataCard.propTypes = {
    classes: propTypes.object.isRequired,
    icon: propTypes.node,
    image: propTypes.any,
    quantity: propTypes.string.isRequired,
    units: propTypes.string.isRequired,
    subtitle: propTypes.string.isRequired,
    button: propTypes.string.isRequired
}

export default withStyles(styles)(ExternalDataCard)