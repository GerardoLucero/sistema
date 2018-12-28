import React from 'react'
import propTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import Badge from '@material-ui/core/Badge'
import Menu from '@material-ui/core/Menu'
import MenuIcon from '@material-ui/icons/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import MailIcon from '@material-ui/icons/Mail'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import PersonIcon from '@material-ui/icons/Person'
import NotificationsIcon from '@material-ui/icons/Notifications'
import AccountCircle from '@material-ui/icons/AccountCircle'
import { withStyles } from '@material-ui/core/styles'
import { Link } from "react-router-dom"
const styles = theme => ({
    menuButton: {
        marginRight: 20,
        /*[theme.breakpoints.up('sm')]: {
            display: 'none',
        },*/
    },
    grow: {
        flexGrow: 1,
    },
    section: {
        display: 'flex'
    },
    link: {
        textDecoration: 'none'
    }
})

class AppBarContent extends React.PureComponent {
    state = {
        anchorEl: null,
    }
    handleClick = event => {
        this.setState({ anchorEl: event.currentTarget });
    }
    handleClose = () => {
        this.setState({ anchorEl: null });
    }
    renderMenu = (classes) => {
        const { anchorEl } = this.state
        return (
            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={this.handleClose}
            >
                <MenuItem onClick={this.handleClose}>
                    <ListItemIcon>
                        <PersonIcon />
                    </ListItemIcon>
                    <ListItemText inset primary="Perfil" />
                </MenuItem>
                <Link to={'/login'} className={classes.link}>
                    <MenuItem onClick={this.handleClose}>
                        <ListItemIcon>
                            <ExitToAppIcon />
                        </ListItemIcon>
                        <ListItemText inset primary="Cerrar Sesión" />
                    </MenuItem>
                </Link>
            </Menu>
        )
    }
    render() {
        const { classes } = this.props
        const { anchorEl } = this.state
        return (
            <React.Fragment>
                <IconButton
                    color="inherit"
                    aria-label="Open drawer"
                    onClick={this.props.handleDrawerToggle}
                    className={classes.menuButton}
                    >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" noWrap color="inherit">
                    Administración HBlue
                </Typography>
                <div className={classes.grow} />
                <div className={classes.section}>
                    <IconButton color="inherit">
                        <Badge badgeContent={4} color="error">
                            <MailIcon />
                        </Badge>
                    </IconButton>
                    <IconButton color="inherit">
                        <Badge badgeContent={17} color="error">
                            <NotificationsIcon />
                        </Badge>
                    </IconButton>
                    <IconButton
                        color="inherit"
                        aria-owns={anchorEl ? 'simple-menu' : undefined}
                        aria-haspopup="true"
                        onClick={this.handleClick}>
                        <AccountCircle />
                    </IconButton>
                </div>
                {this.renderMenu(classes)}
            </React.Fragment>
        )
    }
}

AppBarContent.propTypes = {
    classes: propTypes.object.isRequired,
    handleDrawerToggle: propTypes.func.isRequired
}

export default withStyles(styles)(AppBarContent)