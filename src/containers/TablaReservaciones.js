import React from 'react'
import propTypes from 'prop-types'
import Table from '@material-ui/core/Table'
import TableHead from '@material-ui/core/TableHead'
import TableBody from '@material-ui/core/TableBody'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import Chip from '@material-ui/core/Chip'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import { Paper } from '@material-ui/core';

const styles = theme => ({
    root: {
        marginTop: 32,
        flex: 1,
        overflow: 'scroll',
        marginBottom: 16
    },
    tableHead: {
        fontWeight: 600,
        color: theme.palette.primary.dark
    },
    hospedado: {
        backgroundColor: "#00C853",
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
    }
})

const reservaciones = [
    {
        id: 2018110001,
        cliente: "Emmy Hoover",
        checkIn: "29/11/2018",
        checkOut: "1/12/2018",
        status: "hospedado",
        huespedes: 2,
        noches: 2,
        habitacion: "Estándar",
        total: "$ 2798.00"
    },
    {
        id: 2018110002,
        cliente: "Klay Huff",
        checkIn: "2/12/2018",
        checkOut: "3/12/2018",
        status: "cancelado",
        huespedes: 1,
        noches: 1,
        habitacion: "Estándar",
        total: "$ 1399.00"
    },
    {
        id: 2018110003,
        cliente: "Arron Nelson",
        checkIn: "10/12/2018",
        checkOut: "14/12/2018",
        status: "pendiente",
        huespedes: 3,
        noches: 4,
        habitacion: "Estándar",
        total: "$ 6196.00"
    }
]

class TablaReservaciones extends React.PureComponent {
    render() {
        const { classes } = this.props
        return (
            <Paper className={classes.root}>
                <Typography variant="h6" align="center" >
                    Proximas reservaciones
                </Typography>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell classes={{head:classes.tableHead}}>
                                (#)Id
                            </TableCell>
                            <TableCell classes={{head:classes.tableHead}}>
                                Cliente
                            </TableCell>
                            <TableCell classes={{head:classes.tableHead}}>
                                Check-in
                            </TableCell>
                            <TableCell classes={{head:classes.tableHead}}>
                                Check-out
                            </TableCell>
                            <TableCell classes={{head:classes.tableHead}}>
                                Status
                            </TableCell>
                            <TableCell classes={{head:classes.tableHead}} numeric>
                                Huespedes
                            </TableCell>
                            <TableCell classes={{head:classes.tableHead}} numeric>
                                Noches
                            </TableCell>
                            <TableCell classes={{head:classes.tableHead}}>
                                Habitación
                            </TableCell>
                            <TableCell classes={{head:classes.tableHead}} numeric>
                                Total
                            </TableCell>
                            <TableCell>
                                
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {reservaciones.map((rev) => (
                            <TableRow key={rev.id} hover>
                                <TableCell>
                                    {rev.id}
                                </TableCell>
                                <TableCell>
                                    {rev.cliente}
                                </TableCell>
                                <TableCell>
                                    {rev.checkIn}
                                </TableCell>
                                <TableCell>
                                    {rev.checkOut}
                                </TableCell>
                                <TableCell>
                                    <Chip
                                        label={rev.status}
                                        className={classes[rev.status]}
                                    />
                                </TableCell>
                                <TableCell numeric>
                                    {rev.huespedes}
                                </TableCell>
                                <TableCell numeric>
                                    {rev.noches}
                                </TableCell>
                                <TableCell>
                                    {rev.habitacion}
                                </TableCell>
                                <TableCell numeric>
                                    {rev.total}
                                </TableCell>
                                <TableCell>
                                    {rev.status === 'pendiente'?
                                    <Button size="small" variant="contained" color="secondary">
                                        Editar
                                    </Button>:
                                    null}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Paper>
        )
    }
}

TablaReservaciones.propTypes = {
    classes: propTypes.object.isRequired
}

export default withStyles(styles)(TablaReservaciones)