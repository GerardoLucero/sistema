import React from 'react'
import propTypes from 'prop-types'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({    
    margin: {
        margin: theme.spacing.unit,
    },
    input: {
        flexGrow: 1,
    }
})

const Input = ({ classes, children, label, value, name, icon, onChange }) => (
    <div className={classes.margin}>
        <Grid container spacing={8} alignItems="flex-end">
            <Grid item>
                {icon}
            </Grid>
            <Grid item className={classes.input}>
                <TextField
                    id="outlined-bare"
                    className={classes.textField}
                    value={value}
                    label={label}
                    name={name}
                    onChange={onChange}
                    fullWidth
                />
            </Grid>
        </Grid>
    </div>
)

Input.propTypes = {
    classes: propTypes.object.isRequired,
    label: propTypes.string,
    value: propTypes.string.isRequired,
    icon: propTypes.node,
    onChange: propTypes.func.isRequired,
    name: propTypes.string.isRequired
}

export default withStyles(styles)(Input)