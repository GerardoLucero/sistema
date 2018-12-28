import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import AppBar from '@material-ui/core/AppBar'
import MenuLateral from '../containers/MenuLateral'
import AppBarContent from '../containers/AppBarContent'
//import Hidden from '@material-ui/core/Hidden'
import Drawer from '@material-ui/core/Drawer'
import Toolbar from '@material-ui/core/Toolbar'
import { withStyles } from '@material-ui/core/styles'

const drawerWidth = 300
const styles = theme => ({
    root: {
        display: 'flex',
    },
    appBar: {
        marginLeft: drawerWidth,
        /*[theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${drawerWidth}px)`,
        },*/
    },
    drawer: {
        /*[theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },*/
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
    },
    content: {
        /*[theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${drawerWidth}px)`,
        },*/
        padding: theme.spacing.unit * 3,
        width: '100%',
        [theme.breakpoints.up('lg')]: {
            paddingLeft: 64,
            paddingRight: 64
        }
    }
})

class MainLayout extends React.Component {
    state = {
        mobileOpen: false,
    }
    handleDrawerToggle = () => {
        this.setState(state => ({ mobileOpen: !state.mobileOpen }));
    }
    render() {
        const { classes, theme } = this.props
        return (
            <div className={classes.root}>
                <CssBaseline />
                <AppBar position="fixed" className={classes.appBar} color="primary">
                    <Toolbar>
                        <AppBarContent handleDrawerToggle={this.handleDrawerToggle} />
                    </Toolbar>
                </AppBar>
                <nav className={classes.drawer}>
                    {/*<Hidden smUp implementation="css">*/}
                        <Drawer
                            container={this.props.container}
                            variant="temporary"
                            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                            open={this.state.mobileOpen}
                            onClose={this.handleDrawerToggle}
                            classes={{
                                paper: classes.drawerPaper,
                            }}
                            ModalProps={{
                                keepMounted: true, // Better open performance on mobile.
                            }}>
                            <MenuLateral />
                        </Drawer>
                    {/*</Hidden>*/}
                    {/*<Hidden xsDown implementation="css">
                        <Drawer
                            classes={{
                                paper: classes.drawerPaper,
                            }}
                            variant="permanent"
                            open>
                            <MenuLateral />
                        </Drawer>
                    </Hidden>*/}
                </nav>
                <main className={classes.content}>
                    <div className={classes.toolbar} />
                    {this.props.children}
                </main>
            </div>
        )
    }
}

export default withStyles(styles, { withTheme: true })(MainLayout)