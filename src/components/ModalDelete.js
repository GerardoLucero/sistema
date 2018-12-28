import React from 'react'
import propTypes from 'prop-types'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContentText from '@material-ui/core/DialogContentText'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Slide from '@material-ui/core/Slide'
import { withStyles } from '@material-ui/core/styles'
import DeleteIcon from '@material-ui/icons/Warning'

const styles = theme => ({
    header: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color:theme.palette.error.main,
        minHeight: 80,
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
        backgroundColor: theme.palette.error.main,
        '&:hover': {
            backgroundColor: theme.palette.error.dark
        }
    }
})

function Transition(props) {
    return <Slide direction="up" {...props} />;
}

const ModalDelete = ({ classes, open, handleClose, handleDelete, title, size, info }) => (
    <Dialog 
        open={open}
        onClose={handleClose}
        maxWidth={size}
        fullWidth
        TransitionComponent={Transition}
    >
        <div className={classes.header}>
            <DeleteIcon className={classes.icon} />
        </div>
        <DialogTitle disableTypography>
            <Typography variant="h4" align="center">
                {title}
            </Typography> 
        </DialogTitle>
        <DialogContent>
            <DialogContentText align="center">
                {info}
            </DialogContentText>
        </DialogContent>
        <DialogActions className={classes.actions}>
            <Button 
                variant="contained"
                classes={{root:classes.button}}
                size="large" 
                color="default"
                onClick={handleClose}
            >
                Cancelar
            </Button>
            <Button 
                variant="contained" 
                classes={{root:`${classes.button} ${classes.buttonConfirm}`}}
                size="large"
                onClick={handleDelete}
            >
                Confirmar
            </Button>
        </DialogActions>
    </Dialog>
)

ModalDelete.propTypes = {
    classes: propTypes.object.isRequired,
    open: propTypes.bool.isRequired,
    handleClose: propTypes.func.isRequired,
    handleDelete: propTypes.func.isRequired,
    title: propTypes.string.isRequired,
    info: propTypes.string.isRequired,
    size: propTypes.oneOf(['xs','sm', 'md','lg'])
}

export default withStyles(styles)(ModalDelete)