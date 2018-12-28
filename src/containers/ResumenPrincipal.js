import React from 'react'
import propTypes from 'prop-types'
import moment from 'moment'
import 'moment/locale/es'
import Typography from '@material-ui/core/Typography'
import HotelIcon from '@material-ui/icons/Hotel'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import WorkIcon from '@material-ui/icons/Work'
import SummaryCard from '../components/SummaryCard'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
    title: {
        textTransform: 'capitalize',
        marginBottom: 16
    },
    icon: {
        color: 'white',
        fontSize: 40,
    },
    resumen: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center'
    }
})

class ResumenPrincipal extends React.PureComponent {
    render() {
        const { classes } = this.props
        return (
            <React.Fragment>
                <Typography variant="h2" className={classes.title} align="center">
                    {moment().locale('es').format('dddd, DD [de] MMMM ')}
                </Typography>
                <div className={classes.resumen}>
                    <SummaryCard
                        color="#0277BD"
                        title="CHECK-INS"
                        icon={<ArrowForwardIcon className={classes.icon} />}
                        current={8}
                        max={12}
                        units="check-ins"
                    />
                    <SummaryCard
                        color="#7402ee"
                        title="CHECK-OUTS"
                        icon={<ArrowBackIcon className={classes.icon} />}
                        current={7}
                        max={9}
                        units="check-outs"
                    />
                    <SummaryCard
                        color="#ee027c"
                        title="OCUPACIÓN"
                        icon={<HotelIcon className={classes.icon} />}
                        current={20}
                        max={32}
                        units="habitaciones"
                    />
                    <SummaryCard
                        color="#ee7402"
                        title="RESERVACIONES"
                        icon={<WorkIcon className={classes.icon} />}
                        current={7}
                    />
                </div>
            </React.Fragment>
        )
    }
}

ResumenPrincipal.propTypes = {
    classes: propTypes.object.isRequired,
}

export default withStyles(styles)(ResumenPrincipal)