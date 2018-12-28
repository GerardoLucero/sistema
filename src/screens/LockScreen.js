import React from 'react';
import { withStyles, Grid, TextField, Button, Typography, Avatar} from '@material-ui/core'
import { Fingerprint } from '@material-ui/icons'
import avatar from '../images/avatar.jpg'
import Background from '../images/beach.jpg'
import Card from '../components/Card'
import AccountBox from '@material-ui/icons/AccountBox'
import LockOpen from '@material-ui/icons/LockOpen'
import Lock from '@material-ui/icons/Lock'
import CircularProgress from '@material-ui/core/CircularProgress'
import Fab from '@material-ui/core/Fab'
import green from '@material-ui/core/colors/green'


const styles = theme => ({
    margin: {
        margin: theme.spacing.unit * 2,
    },
    iconStyle: {
        backgroundColor:  theme.palette.secondary.main,
    },
    padding: {
        padding: theme.spacing.unit,
        minWidth: "400px",
    },
    icon: {
        color: 'white'
    },
    bannerImagen: {
        flex: 1,
        display: "block",
        flexDirection: "column",
        paddingTop: "7rem",
        height: "85vh",
        backgroundSize: "cover",
        backgroundColor: "#ffffff"
    }, 
    bigAvatar: {
        width: 100,
        height: 100,
    },
    wrapper: {
        margin: theme.spacing.unit,
        position: 'relative',
      },
      buttonUnLock: {
        backgroundColor: "#000",
        '&:hover': {
          backgroundColor: "#455a64",
        },
      },
      buttonSuccess: {
        backgroundColor: green[500],
        '&:hover': {
          backgroundColor: green[700],
        },
      },
      fabProgress: {
        color: green[500],
        position: 'absolute',
        top: -6,
        left: -6,
        zIndex: 1,
      },
      buttonProgress: {
        color: green[500],
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginTop: -12,
        marginLeft: -12,
      },
})

class LockScreen extends React.Component {
    state = {
        loading: false,
        success: false,
      }

    handleButtonClick = () => {
        if (!this.state.loading) {
          this.setState(
            {
              success: false,
              loading: true,
            },
            () => {
              this.timer = setTimeout(() => {
                this.setState({
                  loading: false,
                  success: true,
                })
              }, 3000)
            },
          )
        }
      }

    render() {
        const { classes } = this.props
        return (

            <div 
                className={classes.bannerImagen}
                style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.50),rgba(0, 0, 0, 0.50)),url(${Background})`,
                backgroundRepeat:"no-repeat",
                backgroundPosition: "center"}}>

                <Grid container justify="center" >
                    <Grid item xs={12} sm={2} >
                    <Card
                    title="Iniciar Sesión"
                    icon={ <AccountBox className={classes.icon} /> }
                    contenedorStyle={classes.padding}
                    iconStyle={classes.iconStyle}>
                    <div className={classes.margin}>
                        <Grid container  justify="center"  >
                                <Grid item >
                                    <Avatar alt="Remy Sharp" src={avatar} className={classes.bigAvatar}/>
                                </Grid>
                        </Grid>
                        <Grid container  justify="center" >
                                <Grid item>
                                    <Typography variant="subtitle1">Usuario</Typography>
                                </Grid>
                         </Grid>
                        <Grid container  >
                            <Grid item>
                                <Fingerprint />
                            </Grid>
                            <Grid item md={true} sm={true} xs={true}>
                                <TextField id="username" label="Contraseña" type="password" fullWidth required />
                            </Grid>
                        </Grid>
                        <Grid container  justify="space-between">
                            <Grid item>
                                <Button  disableRipple style={{ textTransform: "none" }} variant="text" color="primary">¿No eres tu?</Button>
                            </Grid>
                        </Grid>
                        <Grid container justify="center" style={{ marginTop: '10px' }}>
                            <div className={classes.wrapper}>
                                <Fab color="primary"  className={this.state.success ?classes.buttonSuccess:classes.buttonUnLock}  onClick={this.handleButtonClick}>
                                    {this.state.success ? <LockOpen /> : <Lock />}
                                </Fab>
                                {this.state.loading && <CircularProgress size={68}   className={classes.fabProgress}/>}
                            </div>
                        </Grid>
                    </div>
                </Card>
                </Grid>
                </Grid>
                </div>
        )
    }
}


export default withStyles(styles)(LockScreen)