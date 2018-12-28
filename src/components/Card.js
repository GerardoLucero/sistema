import React from 'react'
import propTypes from 'prop-types'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
    contenedor: {
        padding: 16,
        marginTop: 40,
        flex: 1
    },
    head: {
        display: 'flex',
        alignItems: 'center'
    },
    headIcon: {
        padding: 16,
        backgroundColor: theme.palette.secondary.main,
        marginTop: -40
    },
    title: {
        marginLeft: 16
    }
})

const Card = ({ classes, title, icon, children, contenedorStyle, iconStyle }) => (
    <Paper className={contenedorStyle?contenedorStyle:classes.contenedor}>
        <div className={classes.head}>
            <Paper className={`${classes.headIcon} ${iconStyle}`}>
                {icon}
            </Paper>
            <Typography variant="h6" className={classes.title}>
                {title}
            </Typography>
        </div>
        <br />
        {children}
    </Paper>
)

Card.propTypes = {
    classes: propTypes.object.isRequired,
    icon: propTypes.node,
    title: propTypes.string,
    contenedorStyle: propTypes.string
}

export default withStyles(styles)(Card)