import React from 'react'
import propTypes from 'prop-types'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
    card: {
        flex: 1,
        margin: 8,
        display: 'flex',
        flexDirection: 'column',
        minWidth: 200,
        maxWidth: 350
    },
    header: {
        padding: 8,
        backgroundColor: "#ffffff32"
    },
    title: {
        color: 'white'
    },
    body: {
        textAlign: 'center',
        flexGrow: 1,
    },
    icon: {
        position: 'absolute',
        padding: 16
    },
    current: {
        paddingTop: 16,
        color: 'white'
    },
    units: {
        color: 'white',
        paddingBottom: 16,
    },
    footer: {
        backgroundColor: "#00000032"
    },
    button: {
        margin: theme.spacing.unit,
        color: theme.palette.grey[200]
    }
})

const SummaryCard = ({ classes, color, title, icon, current, max, units }) => (
    <Paper style={{backgroundColor: color,}} className={classes.card}>
        <div className={classes.header}>
            <Typography variant="h6" className={classes.title}>
                {title}
            </Typography>
        </div>
        <div className={classes.body}>
            <div className={classes.icon}>
                {icon}
            </div>
            <Typography variant="h2" className={classes.current}>
                {current}
            </Typography>
            {max?
            <Typography variant="subtitle1" className={classes.units}>
                /{max} {units}
            </Typography>:null}
            
        </div>
        <div className={classes.footer}>
            <Button className={classes.button}>Ver todos</Button>
        </div>
    </Paper>
)

SummaryCard.propTypes = {
    classes: propTypes.object.isRequired,
    color: propTypes.string.isRequired,
    title: propTypes.string.isRequired,
    icon: propTypes.node.isRequired,
    current: propTypes.number.isRequired,
    max: propTypes.number,
    units: propTypes.string,
    redirect: propTypes.string
}

export default withStyles(styles)(SummaryCard)