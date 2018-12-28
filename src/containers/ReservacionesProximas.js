import React from 'react'
import propTypes from 'prop-types'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import DateRangeIcon from '@material-ui/icons/DateRange'
import Card from '../components/Card'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
    card: {
        padding: 16,
        height: 350,
        marginTop: 40
    },
    icon: {
        color: 'white'
    },
    table: {
        maxHeight: 220,
        overflow: 'scroll'
    },
    row: {
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: theme.palette.grey[100]
        }
    },
    tableHead: {
        fontWeight: 600,
        color: theme.palette.primary.dark
    }
})

class ReservacionesProximas extends React.PureComponent {
    render() {
        const { classes } = this.props
        return(
            <Card
                title="Proximas reservaciones"
                icon={ <DateRangeIcon className={classes.icon} /> }
                contenedorStyle={classes.card}>
                <div className={classes.table}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell classes={{head:classes.tableHead}}>
                                    # Reservación
                                </TableCell>
                                <TableCell classes={{head:classes.tableHead}}>
                                    Nombre
                                </TableCell>
                                <TableCell classes={{head:classes.tableHead}}>
                                    Reservado en
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow className={classes.row}>
                                <TableCell>
                                    2018110001
                                </TableCell>
                                <TableCell>
                                    Lorem Ipsum
                                </TableCell>
                                <TableCell>
                                    HBlue Web
                                </TableCell>
                            </TableRow>
                            <TableRow className={classes.row}>
                                <TableCell>
                                    2018110002
                                </TableCell>
                                <TableCell>
                                    Lorem Ipsum
                                </TableCell>
                                <TableCell>
                                    Booking
                                </TableCell>
                            </TableRow>
                            <TableRow className={classes.row}>
                                <TableCell>
                                    2018110003
                                </TableCell>
                                <TableCell>
                                    Lorem Ipsum
                                </TableCell>
                                <TableCell>
                                    Expedia
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </div>
            </Card>
        )
    }
}

ReservacionesProximas.propTypes = {
    classes: propTypes.object.isRequired
}

export default withStyles(styles)(ReservacionesProximas)