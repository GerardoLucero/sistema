import React from 'react'
import Grid from '@material-ui/core/Grid'
import Resumen from '../containers/ResumenPrincipal'
import Grafica from '../containers/GraficaDisponibilidad'
import Calendario from '../containers/CalendarioReservaciones'
import Reservaciones from '../containers/ReservacionesProximas'
import Layout from '../containers/MainLayout'
import Pruebas from '../containers/Pruebas'

class Principal extends React.PureComponent {
    data = [20, 12]
    render() {
        return (
            <Layout>
                <Resumen />
                <Grid container spacing={16}>
                    <Grid item md={6}>
                        <Grafica data={this.data} />
                    </Grid>
                    <Grid item md={6}>
                        <Reservaciones />
                    </Grid>
                </Grid>
                <Calendario />
                <Pruebas />
            </Layout>
        )
    }
}

export default Principal