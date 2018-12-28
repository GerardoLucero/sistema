import React from 'react'
import propTypes from 'prop-types'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Table from '@material-ui/core/Table'
import TableHead from '@material-ui/core/TableHead'
import TableBody from '@material-ui/core/TableBody'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import { withStyles } from '@material-ui/core/styles'
import 'react-circular-progressbar/dist/styles.css'
import Chip from '@material-ui/core/Chip'
const styles = theme => ({
    container: {
        width: "100%",
        marginBottom: 32
    },
    container2: {
        padding: "16px"
    },
    header: {
        padding: "8px",
        heigth: "20%",
        display: 'flex',
        alignItems: 'center',
        backgroundColor: theme.palette.grey[200]
    },
    title: {
        color: 'black',
        marginRight: 4,
        marginLeft: 4
    },

    avatar: {
        backgroundColor: theme.palette.secondary.main
    },
    responsive: {
        overflow: 'scroll'
    },
    confirmado: {
        backgroundColor: theme.palette.secondary.main,
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
}))(TableCell)

const RoomOcupancy = ({ classes, title, rooms, value, total, theme}) => {

    return ( 
    <Paper className={classes.container}>
        <div className={classes.header}>
            <Typography variant="h6" align="center" className={classes.title}>
                {title} 
            </Typography>
            <Chip
                label={value +"/"+total}
                className={classes.confirmado}
                />
        </div> 
        <div className={classes.responsive}>
            <Table>
                <TableHead>
                    <TableRow>
                        <CustomTableCell>
                            Cliente
                        </CustomTableCell>
                        <CustomTableCell>
                            Check-out
                        </CustomTableCell>
                        <CustomTableCell />
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rooms.map( (reservacion, index ) => (
                        <TableRow key={index}>
                            <TableCell className={classes.td}>
                                {reservacion.cliente}
                            </TableCell>
                            <TableCell className={classes.td}>
                                {reservacion.checkOut}
                            </TableCell>
                        </TableRow>
                    ) )}
                </TableBody>
            </Table>
        </div>
    </Paper>
    )
}

RoomOcupancy.propTypes = {
    classes: propTypes.object.isRequired,
    theme: propTypes.object.isRequired,
}

export default withStyles(styles, {withTheme: true})(RoomOcupancy)