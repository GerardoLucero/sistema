import React from 'react'
import propTypes from 'prop-types'
import classnames from 'classnames'
import Typography from '@material-ui/core/Typography'
import Popover from '@material-ui/core/Popover'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
    paper: {
        minWidth: 500,
        borderColor: theme.palette.secondary.main,
        borderWidth: 1,
        borderStyle: 'solid'
    },
    header:{
        backgroundColor: theme.palette.secondary.main,
        padding: 16
    },
    title: {
        color: 'white'
    },
    contianer: {
        padding: 16,
        display: 'flex',
        alignItems: 'stretch',
    },
    part: {
        flex: 1,
        minWidth: 250,
        maxWidth: 250
    },
    subtitles: {
        fontWeight: 500
    },
    verticalDivider: {
        backgroundColor: 'black',
        width: 1,
        marginLeft: 8,
        marginRight: 8
    }
})

const ReservationPopOver = ({ classes, handleClose, anchorEl, reservation, fondo, borde }) => {
    const open = Boolean(anchorEl)
    return (
        <Popover
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
                vertical: 'center',
                horizontal: 'center'
            }}
            transformOrigin={{
                vertical: 'center',
                horizontal: 'left'
            }}
            classes={{paper:classnames(classes.paper, borde)}}
        >
            <div className={classnames(classes.header, fondo)}>
                <Typography variant="h6" className={classes.title}>{reservation.name + " " + reservation.surname} - {reservation.status}</Typography>
                <Typography variant="subtitle1" className={classes.title}>#{reservation.code}</Typography>
            </div>
            <div className={classes.contianer}>
                <div className={classes.part}>
                    <Typography variant="subtitle1" className={classes.subtitles}>Check-in/Out</Typography>
                    <Typography variant="subtitle1"> {reservation.checkIn} - {reservation.checkOut}</Typography>
                    <br />
                    <Typography variant="subtitle1" className={classes.subtitles}>Huespedes</Typography>
                    <Typography variant="subtitle1">{reservation.adultos + reservation.ninos}</Typography>
                    <br />
                    <Typography variant="subtitle1" className={classes.subtitles}>Habitación</Typography>
                    <Typography variant="subtitle1">{reservation.habitacion}</Typography>
                    <br />
                    <Typography variant="subtitle1" className={classes.subtitles}>Total</Typography>
                    <Typography variant="subtitle1">{reservation.total}</Typography>
                    <br />
                    <Typography variant="subtitle1" className={classes.subtitles}>Saldo adeudado</Typography>
                    <Typography variant="subtitle1">{reservation.adeudo}</Typography>
                </div>
                <div className={classes.verticalDivider} />
                <div className={classes.part}>
                    <Typography variant="subtitle1" className={classes.subtitles}>Notas</Typography>
                    <Typography variant="subtitle1">{reservation.notas}</Typography>
                </div>
            </div>
        </Popover>
    )
}
ReservationPopOver.propTypes = {
    classes: propTypes.object.isRequired,
    handleClose: propTypes.func.isRequired,
    anchorEl: propTypes.any,
    reservation: propTypes.object.isRequired,
    fondo: propTypes.string,
    borde: propTypes.string
};
  
export default withStyles(styles)(ReservationPopOver);