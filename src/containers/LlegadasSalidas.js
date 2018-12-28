import React from 'react'
import propTypes from 'prop-types'
import Arriving from '../components/ArrivingToday'
import DepartingToday from '../components/DepartingToday'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        marginBottom: 32
    },
    section: {
        flex: 1,
        padding: 8,
        maxWidth: '50%',
        minWidth: '50%'
    }
})

class Reservaciones extends React.PureComponent {
    render() {
        const { classes } = this.props
        return (
            <div className={classes.container}>
                <div className={classes.section}>
                    <Arriving cantidad={2} datos={ [
                        {
                            id: '2018120001',
                            cliente: 'Nombre Apellido',
                            adultos: 2,
                            ninos: 0,
                            checkOut: "05/12/2018",
                            status: "confirmado",
                            rooms:[{nombre:'Estándar'},{nombre:'Estándar Plus'}]
                        }
                    ] } />
                </div>
                <div className={classes.section}>
                    <DepartingToday cantidad={3} datos={[]} />
                </div>
            </div>
        )
    }
}

Reservaciones.propTypes = {
    classes: propTypes.object.isRequired
}

export default withStyles(styles)(Reservaciones)