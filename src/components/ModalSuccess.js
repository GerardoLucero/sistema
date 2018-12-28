import React from 'react'
import propTypes from 'prop-types'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogActions from '@material-ui/core/DialogActions'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Slide from '@material-ui/core/Slide'
import { withStyles } from '@material-ui/core/styles'
import CheckCircleIcon from '@material-ui/icons/CheckCircle'
import green from '@material-ui/core/colors/green'

const styles = theme => ({
    header: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: green["500"],
        minHeight: 80,
    },
    icon: {
        fontSize: 60
    },
    actions: {
        margin: 0,
        marginTop: 16
    },
    actionButton: {
        margin: 0,
        borderRadius: 0,
        paddingTop: 16,
        paddingBottom: 16,
        color: 'white',
        backgroundColor: green["500"],
        '&:hover': {
            backgroundColor: green["700"]
        }
    }
})

function Transition(props) {
    return <Slide direction="up" {...props} />;
}

const ModalSuccess = ({ classes, children, open, handleClose, title, size }) => (
    <Dialog 
        open={open}
        onClose={handleClose}
        maxWidth={size}
        fullWidth
        TransitionComponent={Transition}
    >
        <div className={classes.header}>
            <CheckCircleIcon className={classes.icon} />
        </div>
        <DialogTitle disableTypography>
            <Typography variant="h4" align="center">
                {title}
            </Typography>
        </DialogTitle>
        <DialogActions className={classes.actions}>
            <Button 
                classes={{root:classes.actionButton}} 
                color="secondary"
                fullWidth 
                size="large" 
                onClick={handleClose}
            >
                Ok
            </Button>
        </DialogActions>
    </Dialog>
)

ModalSuccess.propTypes = {
    classes: propTypes.object.isRequired,
    open: propTypes.bool.isRequired,
    handleClose: propTypes.func.isRequired,
    title: propTypes.string.isRequired
}

export default withStyles(styles)(ModalSuccess)