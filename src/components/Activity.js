import React from 'react'
import propTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Avatar from '@material-ui/core/Avatar'
import History from '@material-ui/icons/History'
import Card from '../components/Card'

const styles = theme => ({
    title: {
        color: 'white'
    },
    icon: {
        color: 'white'
    },
    root: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
    list: {
        paddingTop: "0px",
        paddingBottom: "0px"
    },

    vertical:{
        borderLeft:'1.5px solid lightgrey',
        height:'3em',
        marginLeft:'2.6em',
      }
})


const Activity = ({ classes, array}) => (
    <Card title={"Activity Feed"}  icon={ <History className={classes.icon} /> }>
    <List className={classes.root}>
        {array.map((item, index) =>
            <React.Fragment key={index}>
                <ListItem className={classes.list}>
                    <Avatar src={item.image?item.image:null} >
                        {item.icon?item.icon:null}
                    </Avatar>
                    <ListItemText  primary={item.title} secondary={item.description}/>
                </ListItem>
                {index === (array.length -1)?null:<div className={classes.vertical}/>}
            </React.Fragment>
        )}
    </List>
    </Card>
)

Activity.propTypes = {
    classes: propTypes.object.isRequired,
    array: propTypes.array.isRequired
}

export default withStyles(styles)(Activity)