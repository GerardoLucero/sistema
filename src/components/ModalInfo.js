import React from 'react'
import propTypes from 'prop-types'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import DialogActions from '@material-ui/core/DialogActions'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Slide from '@material-ui/core/Slide'
import { withStyles } from '@material-ui/core/styles'
import InfoIcon from '@material-ui/icons/Info'

const styles = theme => ({
    header: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color:theme.palette.secondary.main,
        minHeight: 80,
    },
    icon: {
        fontSize: 60
    },
    actions: {
        margin: 0
    },
    actionButton: {
        margin: 0,
        borderRadius: 0,
        paddingTop: 16,
        paddingBottom: 16
    }
})

function Transition(props) {
    return <Slide direction="up" {...props} />;
}

const ModalInformativo = ({ classes, children, open, handleClose, title, size }) => (
    <Dialog 
        open={open}
        onClose={handleClose}
        maxWidth={size}
        fullWidth
        TransitionComponent={Transition}
    >
        <div className={classes.header}>
            <InfoIcon className={classes.icon} />
        </div>
        <DialogTitle disableTypography>
            <Typography variant="h4" align="center">
                {title}
            </Typography>
        </DialogTitle>
        <DialogContent>
            {children}
        </DialogContent>
        <DialogActions className={classes.actions}>
            <Button 
                classes={{root:classes.actionButton}} 
                color="secondary" 
                variant="contained" 
                fullWidth 
                size="large" 
                onClick={handleClose}
            >
                Cerrar
            </Button>
        </DialogActions>
    </Dialog>
)

ModalInformativo.propTypes = {
    classes: propTypes.object.isRequired,
    open: propTypes.bool.isRequired,
    handleClose: propTypes.func.isRequired,
    title: propTypes.string.isRequired
}

export default withStyles(styles)(ModalInformativo)