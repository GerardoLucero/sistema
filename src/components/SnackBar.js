import React from 'react'
import propTypes from 'prop-types'
import classNames from 'classnames'
import CheckCircleIcon from '@material-ui/icons/CheckCircle'
import ErrorIcon from '@material-ui/icons/Error'
import InfoIcon from '@material-ui/icons/Info'
import CloseIcon from '@material-ui/icons/Close'
import WarningIcon from '@material-ui/icons/Warning'
import { withStyles } from '@material-ui/core/styles'
import green from '@material-ui/core/colors/green'
import amber from '@material-ui/core/colors/amber'
import Bar from '@material-ui/core/Snackbar'
import SnackbarContent from '@material-ui/core/SnackbarContent'
import IconButton from '@material-ui/core/IconButton'
import Button from '@material-ui/core/Button'

const variantIcon = {
    success: CheckCircleIcon,
    warning: WarningIcon,
    error: ErrorIcon,
    info: InfoIcon
}

const styles = theme => ({
    success: {
        backgroundColor: green[600],
    },
    error: {
        backgroundColor: theme.palette.error.dark,
    },
    info: {
        backgroundColor: theme.palette.secondary.dark,
    },
    warning: {
        backgroundColor: amber[700],
    },
    icon: {
        fontSize: 20,
    },
    iconVariant: {
        opacity: 0.9,
        marginRight: theme.spacing.unit,
    },
    message: {
        display: 'flex',
        alignItems: 'center',
    },
    button: {
        backgroundColor: "#00000032"
    },  
    buttonText: {
        color: 'white'
    }
})

const SnackBar = ({ classes, className, message, onClose, variant, open, button, onClick, closeIcon }) => {
    const Icon = variantIcon[variant]
    return (
        <Bar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          open={open}
          autoHideDuration={6000}
          onClose={onClose}
        >
            <SnackbarContent
                className={classNames(variant?classes[variant]:"", className)}
                message={
                    <span className={classes.message}>
                        {variant?
                        <Icon className={classNames(classes.icon, classes.iconVariant)} />
                        :null}
                        {message}
                    </span>
                }
                action={[
                    button?
                    <Button key="click" onClick={onClick} className={classes.buttonText} classes={{root:classes.button}}>
                        {button}
                    </Button>:null,
                    closeIcon?
                    <IconButton
                        key="close"
                        aria-label="Close"
                        color="inherit"
                        className={classes.close}
                        onClick={onClose}
                    >
                        <CloseIcon className={classes.icon} />
                    </IconButton>:null
                ]}
            />
        </Bar>
    )
}

SnackBar.propTypes = {
    classes: propTypes.object.isRequired,
    className: propTypes.string,
    message: propTypes.string.isRequired,
    onClose: propTypes.func.isRequired,
    variant: propTypes.oneOf(['success', 'warning', 'error', 'info']),
    open: propTypes.bool.isRequired,
    button: propTypes.string,
    onClick: propTypes.func,
    closeIcon: propTypes.bool
}

export default withStyles(styles)(SnackBar)