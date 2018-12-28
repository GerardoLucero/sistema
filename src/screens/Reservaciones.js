import React from 'react'
import Layout from '../containers/MainLayout'
import LlegadasSalidas from '../containers/LlegadasSalidas'
import Divider from '@material-ui/core/Divider'
import WeekBook from '../containers/WeekBook'
import RoomsTypeOcupancy from '../containers/RoomsTypeOcupancy'
import TablaReservaciones from '../containers/TablaReservaciones'

class Reservaciones extends React.PureComponent {
    render() {
        return (
            <Layout>
                <LlegadasSalidas />
                <Divider />
                <WeekBook />
                <Divider />
                <RoomsTypeOcupancy />
                <Divider />
                <TablaReservaciones />
            </Layout>
        )
    }
}

export default Reservaciones