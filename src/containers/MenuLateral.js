import React from 'react'
import propTypes from 'prop-types'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Collapse from '@material-ui/core/Collapse'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import WebIcon from '@material-ui/icons/Web'
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'
import FiberManualRecord from '@material-ui/icons/FiberManualRecord'
import { withStyles } from '@material-ui/core/styles'
import Background from '../images/fondo.jpg'
import { Link } from "react-router-dom"

const styles = theme => ({
    backGround: {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.75),rgba(0, 0, 0, 0.75)),url(${Background})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom",
        height: "100%",
        padding: 16,
    },
    title: {
        color: 'white',
        marginBottom: 16            
    },
    divider: {
        backgroundColor: "#FFFFFF"
    },
    listItemTitle: {
        color: 'white'
    },
    listItemText: {
        color: 'white',
        marginLeft: 16
    },
    item: {
        '&:hover': {
            backgroundColor: '#ffffff32',
        }
    },
    expand: {
        color:"white"
    },
    arrow: {
        color:"white",
        fontSize: 8
    },
    nested: {
        paddingLeft: theme.spacing.unit * 4,
    },
    link: {
        textDecoration: 'none'
    }
})

class MenuLateral extends React.PureComponent {
    state = {
        submenu2: false,
        submenu3: false
    }
    handleClick = (submenu) => {
        this.setState(state => ({ [submenu]: !state[submenu] }));
    }
    render() {
        const { classes } = this.props;
        return(
            <div className={classes.backGround}>
                <Typography variant="h6" className={classes.title}>
                    Logo + nombre
                </Typography>
                <Divider className={classes.divider} />
                <List
                    component="nav"
                >
                    <Link to="/" className={classes.link}>
                        <ListItem button classes={{button: classes.item}}>
                            <ListItemIcon>
                                <WebIcon className={classes.expand} /> 
                            </ListItemIcon>
                            <ListItemText inset primary="Dashboard" classes={{primary: classes.listItemTitle}} />
                        </ListItem>
                    </Link>
                    <Link to="/reservaciones" className={classes.link}>
                        <ListItem button classes={{button: classes.item}}>
                            <ListItemIcon>
                                <WebIcon className={classes.expand} /> 
                            </ListItemIcon>
                            <ListItemText inset primary="Reservaciones" classes={{primary: classes.listItemTitle}} />
                        </ListItem>
                    </Link>
                    <ListItem button onClick={() => this.handleClick("submenu2")} classes={{button: classes.item}}>
                        <ListItemIcon>
                            <WebIcon className={classes.expand} /> 
                        </ListItemIcon>
                        <ListItemText inset primary="Section title 2" classes={{primary: classes.listItemTitle}} />
                        {this.state.submenu2 ? <ExpandLess className={classes.expand} /> : <ExpandMore className={classes.expand} />}
                    </ListItem>
                    <Collapse in={this.state.submenu2} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem button className={classes.nested} classes={{button: classes.item}}>
                                <FiberManualRecord className={classes.arrow} />
                                <ListItemText primary="Item 2" classes={{primary: classes.listItemText}} />
                            </ListItem>
                            <ListItem button className={classes.nested} classes={{button: classes.item}}>
                                <FiberManualRecord className={classes.arrow} />
                                <ListItemText primary="Item 2" classes={{primary: classes.listItemText}} />
                            </ListItem>
                        </List>
                    </Collapse>
                    <ListItem button onClick={() => this.handleClick("submenu3")} classes={{button: classes.item}}>
                        <ListItemIcon>
                            <WebIcon className={classes.expand} /> 
                        </ListItemIcon>
                        <ListItemText inset primary="Section title 3" classes={{primary: classes.listItemTitle}} />
                        {this.state.submenu3 ? <ExpandLess className={classes.expand} /> : <ExpandMore className={classes.expand} />}
                    </ListItem>
                    <Collapse in={this.state.submenu3} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem button className={classes.nested} classes={{button: classes.item}}>
                                <FiberManualRecord className={classes.arrow} />
                                <ListItemText primary="Item 3" classes={{primary: classes.listItemText}} />
                            </ListItem>
                        </List>
                    </Collapse>
                </List>
            </div>
        )
    }
}

MenuLateral.propTypes = {
    classes: propTypes.object.isRequired
}

export default withStyles(styles)(MenuLateral)