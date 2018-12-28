import React from 'react'
import propTypes from 'prop-types'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
    container: {
        padding: 16,
        marginTop: 40,
        flex: 1
    },
    header: {
        backgroundColor: theme.palette.secondary.main,
        padding: 16,
        marginTop: -40
    },
    title: {
        color: 'white'
    }
})

const FormLayout = ({ classes, children, title }) => (
    <Paper className={classes.container}>
        <Paper className={classes.header}>
            <Typography variant="h6" className={classes.title}>
                {title}
            </Typography>
        </Paper>
        <br />
        {children}
    </Paper>
)

FormLayout.propTypes = {
    classes: propTypes.object.isRequired,
}

export default withStyles(styles)(FormLayout)