import React from 'react'
import propTypes from 'prop-types'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Avatar from '@material-ui/core/Avatar'
import TextField from '@material-ui/core/TextField'
import InputAdornment from '@material-ui/core/InputAdornment'
import IconButton from '@material-ui/core/IconButton'
import Table from '@material-ui/core/Table'
import TableHead from '@material-ui/core/TableHead'
import TableBody from '@material-ui/core/TableBody'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import Button from '@material-ui/core/Button'
import Chip from '@material-ui/core/Chip'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'
import SearchIcon from '@material-ui/icons/Search'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
    header: {
        backgroundColor: theme.palette.grey[200],
        display: 'flex',
        alignItems: 'center'
    },
    icon:{
        marginLeft:16,
        marginRight:16
    },
    espacio: {
        flexGrow: 1
    },
    title: {
        marginLeft: 4
    },
    avatar: {
        marginLeft: 4,
        backgroundColor: theme.palette.secondary.main
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
    },
    input: {
        padding: 8
    },
    inputroot: {
        backgroundColor: 'white'
    },
    responsive: {
        overflow: 'scroll'
    },
    hospedado: {
        backgroundColor: "#00C853",
        color: 'white',
        textTransform: 'capitalize'
    },
    confirmado: {
        backgroundColor: theme.palette.secondary.main,
        color: 'white',
        textTransform: 'capitalize'
    },
    pendiente: {
        backgroundColor: "#FBC02D",
        color: 'white',
        textTransform: 'capitalize'
    },
    cancelado: {
        backgroundColor: theme.palette.error.main,
        color: 'white',
        textTransform: 'capitalize'
    },
    td: {
        paddingTop: 4,
        paddingRight: 16,
        paddingBottom: 4,
        paddingLeft: 16
    }
})
const CustomTableCell = withStyles(theme => ({
    head: {
        backgroundColor: theme.palette.grey[100],
        color: 'black',
        fontWeight: 500,
        paddingTop: 4,
        paddingRight: 16,
        paddingBottom: 4,
        paddingLeft: 16
    }
}))(TableCell);

const DepartingToday = ({ classes, cantidad, datos }) => (
    <Paper>
        <div className={classes.header}>
            <ArrowForwardIcon className={classes.icon} />
            <Typography variant="h6" className={classes.title}>
                Salen hoy
            </Typography>
            <Avatar className={classes.avatar}>{ cantidad }</Avatar>
            <div className={classes.espacio} />
            <TextField
                className={classes.textField}
                placeholder="Buscar"
                margin="normal"
                variant="outlined"
                InputProps={{
                    endAdornment: (
                    <InputAdornment position="end">
                        <IconButton>
                            <SearchIcon />
                        </IconButton>
                    </InputAdornment>),
                    classes:{input:classes.input},
                    className:classes.inputroot
                }}
            />
        </div>
        <div className={classes.responsive}>
            <Table>
                <TableHead>
                    <TableRow>
                        <CustomTableCell className={classes.th}>
                            ID
                        </CustomTableCell>
                        <CustomTableCell>
                            Cliente
                        </CustomTableCell>
                        <CustomTableCell>
                            Huéspedes
                        </CustomTableCell>
                        <CustomTableCell>
                            Cuartos
                        </CustomTableCell>
                        <CustomTableCell>
                            Check-in
                        </CustomTableCell>
                        <CustomTableCell>
                            Status
                        </CustomTableCell>
                        <CustomTableCell />
                    </TableRow>
                </TableHead>
                <TableBody>
                    {datos.map( (reservacion) => (
                        <TableRow key={reservacion.id}>
                            <TableCell className={classes.td}>
                                #{reservacion.id}
                            </TableCell>
                            <TableCell className={classes.td}>
                                {reservacion.cliente}
                            </TableCell>
                            <TableCell className={classes.td} numeric>
                                {reservacion.adultos + reservacion.ninos}
                            </TableCell>
                            <TableCell className={classes.td}>
                                {reservacion.rooms.map((value, index) => (
                                    <p key={index}>{value.nombre + " "}</p>
                                ))}
                            </TableCell>
                            <TableCell className={classes.td}>
                                {reservacion.checkIn}
                            </TableCell>
                            <TableCell className={classes.td}>
                                <Chip
                                    label={reservacion.status}
                                    className={classes[reservacion.status]}
                                />
                            </TableCell>
                            <TableCell className={classes.td}>
                                <Button variant="contained" color="secondary">
                                    Check-Out
                                </Button>
                            </TableCell>
                        </TableRow>
                    ) )}
                </TableBody>
            </Table>
        </div>
    </Paper>
)

DepartingToday.propTypes = {
    classes: propTypes.object.isRequired,
    cantidad: propTypes.number.isRequired,
    datos: propTypes.array.isRequired
}

export default withStyles(styles)(DepartingToday)