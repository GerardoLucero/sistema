import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import moment from 'moment'
import DailyBook from '../components/DailyBook'
import Typography from '@material-ui/core/Typography'

const styles = theme => ({
    title: {
        marginTop: 32,
        marginBottom: 8
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        marginBottom: 32
    },
    part: {
        flex: 1,
        padding: 8
    }
})

let array = [
    {   date: moment(),
        value: 5,
        total: 23,  },
    {   date: moment().add(1, 'days'),
        value: 5,
        total: 23,  },
    {   date: moment().add(2, 'days'),
        value: 4,
        total: 23,  },
    {   date: moment().add(3, 'days'),
        value: 8,
        total: 23,  },
    {   date: moment().add(4, 'days'),
        value: 6,
        total: 23,  },
    { date: moment().add(5, 'days'),
        value: 8,
        total: 23,  },
    { date: moment().add(6, 'days'),
        value: 10,
        total: 23,  }]

class WeekBook extends React.Component {
    capitalize = (date) => {
        return date.replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase() })
    }
    formatDate(date, today){
        const s = today?'Hoy ':''
        return s + this.capitalize(date.format('dddd DD'))
    }

    render() {
        const { classes } = this.props;
        return (
            <React.Fragment >
                <Typography variant="h6" align="center" className={classes.title}>
                    Ocupación semanal
                </Typography>
                <div className={classes.container}>
                    {array.map((item, index) =>
                        <div className={classes.part} key={index}>
                            <DailyBook 
                                date={this.formatDate(item.date, (index===0)?true:false)}
                                value={item.value}
                                total={item.total}
                                >
                            </DailyBook>
                        </div>
                    )}
                </div>
            </React.Fragment>
        )
    }
}

WeekBook.propTypes = {
  classes: PropTypes.object,
}

export default withStyles(styles)(WeekBook)