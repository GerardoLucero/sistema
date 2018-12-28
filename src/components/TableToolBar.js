import React from 'react'
import propTypes from 'prop-types'
import ToolBar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Tooltip from '@material-ui/core/Tooltip'
import IconButton from '@material-ui/core/IconButton'
import FilterListIcon from '@material-ui/icons/FilterList'
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft'
import ArrowRightIcon from '@material-ui/icons/ArrowRight'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
    root: {
        paddingRight: theme.spacing.unit,
    },
    title: {
        flex: '0 0 auto'
    },
    spacer: {
        flex: '1 1 100%',
    },
    actions: {
        color: theme.palette.text.secondary,
    }
})

const TableToolBar = ({ classes }) => (
    <ToolBar className={classes.root}>
        <IconButton>
            <ArrowLeftIcon />
        </IconButton>
        <div className={classes.title}>
            <Typography variant="h6">
                28/11/2018 - 04/12/2018
            </Typography>
        </div>
        <IconButton>
            <ArrowRightIcon />
        </IconButton>
        <div className={classes.spacer} />
        <div className={classes.actions}>
            <Tooltip title="Filtrar">
                <IconButton aria-label="Lista de filtros">
                    <FilterListIcon />
                </IconButton>
            </Tooltip>
        </div>
    </ToolBar>
)

TableToolBar.propTypes = {
    classes: propTypes.object.isRequired
}

export default withStyles(styles)(TableToolBar)