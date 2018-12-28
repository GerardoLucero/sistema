import React from 'react'
import Card from '../components/Card'
import TableChartIcon from '@material-ui/icons/TableChart'
import PopOver from '../components/ReservationPopOver'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'
import moment from 'moment'
import Timeline from 'react-calendar-timeline'
// make sure you include the timeline stylesheet or the timeline will not be styled
import '../css/Timeline.css'
import Typography from '@material-ui/core/Typography'

const styles = theme => ({
    icon: {
        color: 'white'
    },
    responsive:{
        width: "100%",
        overflow: 'scroll'
    },
    headText: {
        color: 'white'
    },
    popOverBordeConfirmed: {
        borderColor: 'green'
    },
    popOverConfirmed: {
        backgroundColor: 'green'
    }
})

const groups = [{ id: 1, title: 'group 1' }, { id: 2, title: 'group 2' }, { id: 3, title: 'group 3' }, { id: 4, title: 'group 4' }, { id: 5, title: 'group 5' }]
 
const items = [
  {
    id: 1,
    group: 1,
    title: 'item 1',
    start_time: moment().hour(12),
    end_time: moment().add(1, 'days').hour(15)
  },
  {
    id: 2,
    group: 2,
    title: 'item 2',
    start_time: moment().add(-5, 'days').hour(12),
    end_time: moment().add(5, 'days').hour(15)
  },
  {
    id: 3,
    group: 4,
    title: 'item 3',
    start_time: moment().add(-2, 'days').hour(12),
    end_time: moment().add(3, 'days').hour(15)
  }
]

const reservation = {
    name: "Juan",
    surname: "Pérez",
    status: 1,
    code: "2018120002",
    checkIn: "3/12/2018",
    checkOut: "5/12/2018",
    adultos: 2,
    ninos: 0,
    habitacion: "Estándar",
    total: "$ 1,399.00",
    adeudo: "$ 1,399.00",
    notas: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
}

class CalendarioReservaciones extends React.Component {
    state = {
        minDate: moment(),
        maxDate: moment().add(7,'days'),
        current: moment().month(),
        header: [],
        anchorEl: null
    }
    handleClick = event => {
        this.setState({
            anchorEl: event.currentTarget
        })
    }
    handleClose = () => {
        this.setState({
            anchorEl: null
        })
    }

    render() {
        const { classes } = this.props
        return (
            <Card
                title="Reservaciones"
                icon={ <TableChartIcon className={classes.icon} />}
            >
                <br />
                <div>
                    <Timeline
                        groups={groups}
                        items={items}
                        sidebarWidth={200}
                        sidebarContent={<Typography 
                                            variant="subtitle1" 
                                            align="center"
                                            className={classes.headText}>
                                            Habitaciones
                                        </Typography>}
                        defaultTimeStart={this.state.minDate}
                        defaultTimeEnd={this.state.maxDate}
                        subHeaderLabelFormats={{
                            yearShort: 'YY',
                            yearLong: 'YYYY',
                            monthShort: 'MM',
                            monthMedium: 'MMM',
                            monthLong: 'MMMM',
                            dayShort: 'D',
                            dayMedium: 'dd D',
                            dayMediumLong: 'ddd, D',
                            dayLong: 'dddd, D',
                            hourShort: 'HH',
                            hourLong: 'HH:00',
                            minuteShort: 'mm',
                            minuteLong: 'HH:mm'
                        }}
                    />
                </div>
                <br /><br />
                <Button onClick={this.handleClick}>
                    PopOver example
                </Button>
                <PopOver
                    handleClose={this.handleClose}
                    anchorEl={this.state.anchorEl}
                    reservation={reservation}
                    fondo={classes.popOverConfirmed}
                    borde={classes.popOverBordeConfirmed}
                />
            </Card>
        )
    }

}

export default withStyles(styles)(CalendarioReservaciones)