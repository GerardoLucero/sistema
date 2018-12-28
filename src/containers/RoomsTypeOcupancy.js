import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import RoomOcupancy from '../components/RoomOcupancy'
import Typography from '@material-ui/core/Typography'

const styles = theme => ({
    title: {
        marginTop: 32,
        marginBottom: 8
    },
    container: {
        padding: '32px',
        display: 'flex',
        flexWrap: 'wrap'
    },
    part: {
        flex: 1,
        padding: 8
    }
})

let array = [
    {   title: "Estándar",
        value: 10, 
        total: 40,
        rooms:  [
            {
                cliente: 'Nombre Apellido',
                checkOut: "05/12/2018",
            },
            {
                cliente: 'Nombre Apellido',
                checkOut: "05/12/2018",
            },
            {
                cliente: 'Nombre Apellido',
                checkOut: "05/12/2018",
            }
        ] 
    },
    {   title: "Estándar Plus",
        value: 10, 
        total: 40,
        rooms:  [
            {
                cliente: 'Nombre Apellido',
                checkOut: "05/12/2018",
            }, 
            {
                cliente: 'Nombre Apellido',
                checkOut: "05/12/2018",
            }
        ] 
    },
    {   title: "Suite",
        value: 10, 
        total: 40,
        rooms:  [
            {
                cliente: 'Nombre Apellido',
                checkOut: "05/12/2018",
            }, 
            {
                cliente: 'Nombre Apellido',
                checkOut: "05/12/2018",
            }
        ] 
    },
    {   title: "Master Suite",
        value: 10, 
        total: 40,
        rooms:  [
            {
                cliente: 'Nombre Apellido',
                checkOut: "05/12/2018",
            }, 
            {
                cliente: 'Nombre Apellido',
                checkOut: "05/12/2018",

            }, 
            {
                cliente: 'Nombre Apellido',
                checkOut: "05/12/2018",
            }
        ]
    }]

class RoomsTypeOcupancy extends React.Component {

    render() {
        const { classes } = this.props;
        return (
            <React.Fragment >
                <Typography variant="h6" align="center" className={classes.title}>
                    Ocupación por cuartos, HOY 
                </Typography>
                <div className={classes.container}>
                    {array.map((item, index) =>
                        <div className={classes.part} key={index}>
                            <RoomOcupancy 
                                title={item.title}
                                rooms={item.rooms}
                                value={item.value}
                                total={item.total}
                                />
                        </div>
                    )}
                </div>
            </React.Fragment>
        )
    }
}
RoomsTypeOcupancy.propTypes = {
  classes: PropTypes.object,
}
export default withStyles(styles)(RoomsTypeOcupancy)