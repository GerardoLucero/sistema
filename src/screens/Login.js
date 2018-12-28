import React from 'react'
import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core'
import Background from '../images/beach.jpg'
import LoginForm from '../containers/LoginForm'

const styles = theme => ({
    bannerImagen: {
        flex: 1,
        paddingTop: "7rem",
        height: "85vh",
        backgroundSize: "cover",
        backgroundColor: "#ffffff"
    }
});

class Login extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <div 
                className={classes.bannerImagen}
                style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.50),rgba(0, 0, 0, 0.50)),url(${Background})`,
                backgroundRepeat:"no-repeat",
                backgroundPosition: "center"}}>
                <Grid container justify="center" >
                    <Grid item xs={12} sm={2} >
                        <LoginForm />
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default withStyles(styles)(Login)