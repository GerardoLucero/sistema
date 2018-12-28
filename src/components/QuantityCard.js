import React from 'react'
import propTypes from 'prop-types'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
    container: {
        display: 'flex',
        minHeight: 200,
        flex: 1,
        margin: 8,
        minWidth: 200,
        maxWidth: 350
    },
    left: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minWidth: 100,
        maxWidth: 150,
        padding: 16
    },
    right: {
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16
    }
})

const QuantityCard = ({ classes, icon, color, title, quantity }) => (
    <Paper className={classes.container}>
        <div className={classes.left} style={{backgroundColor: color, color:'white'}}>
            {icon}
        </div>
        <div className={classes.right}>
            <Typography variant="h6" style={{ color: color }} gutterBottom align="center">
                {title}
            </Typography>
            <Typography variant="h6" align="center">
                {quantity}
            </Typography>
        </div>
    </Paper>
)

QuantityCard.propTypes = {
    classes: propTypes.object.isRequired,
    icon: propTypes.node.isRequired,
    color: propTypes.string.isRequired,
    title: propTypes.string.isRequired,
    quantity: propTypes.number.isRequired
}

export default withStyles(styles)(QuantityCard)