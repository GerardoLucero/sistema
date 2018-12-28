import React from 'react'
import propTypes from 'prop-types'
import Card from '../components/Card'
import PieChartIcon from '@material-ui/icons/PieChart'
import {Pie} from 'react-chartjs-2'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
    card: {
        padding: 16,
        height: 350,
        marginTop: 40
    },
    icon: {
        color: 'white'
    }
})

class GraficaDisponibilidad extends React.PureComponent {
    data  = {
        labels: [
            'Ocupadas',
            'Disponibles'
        ],
        datasets: [{
            label: 'Disponibilidad',
            data: this.props.data,
            backgroundColor: [
                '#ee7402',
                '#00abae'
            ],
            hoverBackgroundColor: [
                '#e55b00',
                '#007166'
            ]
        }]
    }
    render() {
        const { classes } = this.props
        return (
            <Card
                title="Disponibilidad de habitaciones"
                icon={ <PieChartIcon className={classes.icon} /> }
                contenedorStyle={classes.card}>
                <Pie data={this.data} height={90} />
            </Card>
        )
    }
}

GraficaDisponibilidad.propTypes = {
    classes: propTypes.object.isRequired,
    data: propTypes.array.isRequired
}

export default withStyles(styles)(GraficaDisponibilidad)