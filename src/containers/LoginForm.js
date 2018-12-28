import React from 'react';
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import PermIdentityIcon from '@material-ui/icons/PermIdentity'
import FingerprintIcon from '@material-ui/icons/Fingerprint'
import { withStyles } from '@material-ui/core'

import Card from '../components/Card'
import AccountBoxIcon from '@material-ui/icons/AccountBox'
import Input from '../components/Input'

const styles = theme => ({
    icon: {
        color: 'white'
    }
})

class LoginForm extends React.Component {
    state = {
        usuario: "",
        password: ""
    }
    onChange = ({target}) => {
        const name = target.name
        const value = target.value
        this.setState({
            [name]: value
        })
    }
    render() {
        const { classes } = this.props;
        return (
            <Card
                title="Iniciar Sesión"
                icon={ <AccountBoxIcon className={classes.icon} /> }>
                <div className={classes.margin}>
                    <Input 
                        icon={<PermIdentityIcon />}
                        label="Usuario"
                        value={this.state.usuario}
                        name="usuario"
                        onChange={this.onChange}
                    />
                    <Input 
                        icon={<FingerprintIcon />}
                        label="Contraseña"
                        value={this.state.password}
                        name="password"
                        onChange={this.onChange}
                    />
                    <Grid container alignItems="center" justify="space-between">
                        <Grid item>
                            <FormControlLabel control={
                                <Checkbox
                                    color="primary"
                                />
                            } label="Remember me" />
                        </Grid>
                        <Grid item>
                            <Button disableFocusRipple disableRipple style={{ textTransform: "none" }} variant="text" color="primary">Forgot password ?</Button>
                        </Grid>
                    </Grid>
                    <Grid container justify="center" style={{ marginTop: '10px' }}>
                        <Button variant="outlined" color="primary" style={{ textTransform: "none" }}>Login</Button>
                    </Grid>
                </div>
            </Card>
        )
    }
}

export default withStyles(styles)(LoginForm)