import React from 'react'
import propTypes from 'prop-types'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import DialogActions from '@material-ui/core/DialogActions'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Slide from '@material-ui/core/Slide'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
    paper: {
        overflow: 'visible',
        marginTop: 40
    },
    header: {
        backgroundColor: theme.palette.secondary.main,
        padding: 16,
        marginTop: -40,
        margin: 16
    },
    title: {
        color: 'white'
    },
    icon: {
        fontSize: 60
    },
    actions: {
        display: 'flex',
        margin: 0,
        marginTop: 16
    },
    button: {
        flex: 1,
        margin: 0,
        borderRadius: 0,
        paddingTop: 16,
        paddingBottom: 16
    },
    buttonConfirm: {
        color: 'white',
        backgroundColor: theme.palette.secondary.main,
        '&:hover': {
            backgroundColor: theme.palette.secondary.dark
        }
    }
})

function Transition(props) {
    return <Slide direction="up" {...props} />;
}

const ModalForm = ({ classes, open, handleClose, handleAction, title, size, children, buttonText }) => (
    <Dialog 
        open={open}
        onClose={handleClose}
        maxWidth={size}
        fullWidth
        TransitionComponent={Transition}
        classes={{paper:classes.paper}}
    >
        <Paper className={classes.header}>
            <Typography variant="h6" className={classes.title}>
                {title}
            </Typography>
        </Paper>
        <DialogContent>
            {children}
        </DialogContent>
        <DialogActions className={classes.actions}>
            <Button 
                variant="contained"
                classes={{root:classes.button}}
                size="large" 
                color="default"
                onClick={handleClose}
            >
                Cerrar
            </Button>
            <Button 
                variant="contained" 
                classes={{root:`${classes.button} ${classes.buttonConfirm}`}}
                size="large"
                onClick={handleAction}
            >
                {buttonText}
            </Button>
        </DialogActions>
    </Dialog>
)

ModalForm.propTypes = {
    classes: propTypes.object.isRequired,
    open: propTypes.bool.isRequired,
    handleClose: propTypes.func.isRequired,
    handleAction: propTypes.func.isRequired,
    title: propTypes.string.isRequired,
}

export default withStyles(styles)(ModalForm)