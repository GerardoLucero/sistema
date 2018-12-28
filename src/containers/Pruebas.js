import React from 'react'
import propTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import MouseIcon from '@material-ui/icons/Mouse'
import WarningIcon from '@material-ui/icons/Warning'
import AccountCircle from '@material-ui/icons/AccountCircle'
import DateRangeIcon from '@material-ui/icons/DateRange'
import EmailIcon from '@material-ui/icons/Email'
import Card from '../components/Card'
import QuantityCard from '../components/QuantityCard'
import Slider from '../components/Slider'
import Reservaciones from '../containers/TablaReservaciones'
import ModalInfo from '../components/ModalInfo'
import ModalDelete from '../components/ModalDelete'
import ModalSuccess from '../components/ModalSuccess'
import ModalForm from '../components/ModalForm'
import Form from '../components/FormLayout'
import SnackBar from '../components/SnackBar'
import Input from '../components/Input'
import Activity from '../components/Activity'
import ExternalDataCard from '../components/ExternalDataCard'
import StepperForm from '../components/Stepper'
import ImageIcon from '@material-ui/icons/Image'
import { withStyles } from '@material-ui/core/styles'
import Subject from '@material-ui/icons/Subject'

const contentSlider =  [
    {
        label: 'Imagen de prueba 1',
        img: require('../images/barco.jpg')
    },
    {
        label: 'Imagen de prueba 2',
        img: require('../images/sur.jpg')
    }
]

const array =  [
    {
        title: 'Imagen de prueba 1',
        description: 'example 1',
        image: require('../images/barco.jpg')
    },
    {
        title: 'Imagen de prueba 2',
        description: 'example 2',
        icon: <ImageIcon/>
    },
    {
        title: 'Imagen de prueba 3',
        description: 'example 3',
        image: require('../images/beach.jpg')
    },
    {
        title: 'Imagen de prueba 4',
        description: 'example 4',
        icon: <ImageIcon/>
    },
    {
        title: 'Imagen de prueba 5',
        description: 'example 5',
        image: require('../images/avatar.jpg')
    }
]

const styles = theme => ({
    container: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: 16,
        marginBottom: 16
    },
    icon: {
        fontSize: 40
    },
    icon2: {
        color: 'white'
    },
    two: {
        display: 'flex',
        flexWrap: 'wrap'
    },
    part: {
        flex: 1,
        padding: 8,
        minWidth: '50%',
        maxWidth: '50%',
        display: 'flex'
    },
    part2: {
        flex: 1,
        padding: 8,
    },
    flexbox: {
        display: 'flex',
        flexWrap: 'wrap'
    }
})

class Pruebas extends React.PureComponent {
    state = {
        openInfo: false,
        openBorrar: false,
        openSuccess: false,
        openForm: false,
        openSS: false,
        openSE: false,
        openSW: false,
        openSI: false,
        openSN: false,
        itext: ""
    }
    handleClickOpen = (open) => {
        this.setState({ [open]: true })
    }
    handleClose = (open) => {
        this.setState({ [open]: false })
    }
    handleChange = ({ target }) => {
        const name = target.name
        const value = target.value
        this.setState({
            [name]: value
        })
    }
    render() {
        const { classes } = this.props
        return (
            <React.Fragment>
                <div className={classes.container}>
                    <QuantityCard 
                        icon={<MouseIcon className={classes.icon} />}
                        color="#0277BD"
                        title="Reservaciones Nacionales"
                        quantity={276}
                    />
                    <QuantityCard 
                        icon={<MouseIcon className={classes.icon} />}
                        color="#7402ee"
                        title="Reservaciones Internacionales"
                        quantity={309}
                    />
                </div>
                <div className={classes.container}>
                    <Slider content={contentSlider} />
                </div>
                <Card
                    title="Tabla de reservaciones"
                    icon={ <DateRangeIcon className={classes.icon2} /> }
                >
                    <Reservaciones />
                </Card>
                <div className={classes.two}>
                    <div className={classes.part}>
                        <Card
                            title="Ejemplo Modal"
                            icon={ <WarningIcon className={classes.icon2} /> }
                        >
                            <br />
                            <Button variant="contained" color="secondary" onClick={() => this.handleClickOpen('openInfo')}>
                                Modal Info
                            </Button>
                            <br /><br />
                            <Button variant="contained" color="secondary" onClick={() => this.handleClickOpen('openBorrar')}>
                                Modal Borrar
                            </Button>
                            <br /><br />
                            <Button variant="contained" color="secondary" onClick={() => this.handleClickOpen('openSuccess')}>
                                Modal Success
                            </Button>
                            <br /><br />
                            <Button variant="contained" color="secondary" onClick={() => this.handleClickOpen('openForm')}>
                                Modal Form
                            </Button>
                        </Card>
                        <ModalInfo 
                            handleClose={() => this.handleClose('openInfo')} 
                            open={this.state.openInfo} 
                            title="Titulo" 
                            size="sm"
                        >
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </ModalInfo>
                        <ModalDelete 
                            handleClose={() => this.handleClose('openBorrar')} 
                            handleDelete={() => this.handleClose('openBorrar')} 
                            open={this.state.openBorrar} 
                            title="¿Desea borrar este archivo?" 
                            info="Al borrar este archivo los datos se perderan permanentemente"
                            size="sm"
                        />
                        <ModalSuccess 
                            handleClose={() => this.handleClose('openSuccess')} 
                            handleDelete={() => this.handleClose('openSuccess')} 
                            open={this.state.openSuccess} 
                            title="Accion hecha con exito"
                            size="sm"
                        />
                        <ModalForm
                            handleClose={() => this.handleClose('openForm')} 
                            handleAction={() => this.handleClose('openForm')} 
                            open={this.state.openForm} 
                            title="Modal formulario"
                            buttonText="Confirmar"
                            size="sm"
                        >
                            <br /><br /><br /><br />
                            <h3><center>Formulario</center></h3>
                            <br /><br /><br /><br />
                        </ModalForm>
                    </div>
                   
                    <div className={classes.part}>
                        <Activity
                            array={array}
                        />
                    </div>
                    <div className={classes.part}>
                        <Form 
                            title="Form Layout"
                        >
                            <br />
                            <Input 
                                value={this.state.itext}
                                label="Text input"
                                onChange={this.handleChange}
                                name="itext"
                                icon={<AccountCircle />}
                            />
                            <br /><br /><br /><br />
                        </Form>
                    </div>
                    <div className={classes.part}>
                        <Card
                            title="SnackBars"
                            icon={ <WarningIcon className={classes.icon2} /> }
                        >
                            <br />
                            <Button variant="contained" color="secondary" onClick={() => this.handleClickOpen('openSN')}>
                                SnackBar Normal
                            </Button>
                            <br /><br />
                            <Button variant="contained" color="secondary" onClick={() => this.handleClickOpen('openSS')}>
                                SnackBar Success
                            </Button>
                            <br /><br />
                            <Button variant="contained" color="secondary" onClick={() => this.handleClickOpen('openSI')}>
                                SnackBar Info
                            </Button>
                            <br /><br />
                            <Button variant="contained" color="secondary" onClick={() => this.handleClickOpen('openSW')}>
                                SnackBar Warning
                            </Button>
                            <br /><br />
                            <Button variant="contained" color="secondary" onClick={() => this.handleClickOpen('openSE')}>
                                SnackBar Error
                            </Button>
                            <SnackBar 
                                message={"Action success."}
                                onClose={() => this.handleClose('openSS')}
                                variant="success"
                                open={this.state.openSS}
                            />
                            <SnackBar
                                message={"Lorem Ipsum is simply dummy text."}
                                onClose={() => this.handleClose('openSI')}
                                variant="info"
                                open={this.state.openSI}
                            />
                            <SnackBar 
                                message={"Lorem Ipsum is simply dummy text."}
                                onClose={() => this.handleClose('openSW')}
                                variant="warning"
                                open={this.state.openSW}
                                closeIcon
                            />
                            <SnackBar 
                                message={"Lorem Ipsum is simply dummy text."}
                                onClose={() => this.handleClose('openSE')}
                                variant="error"
                                open={this.state.openSE}
                                button="Reintentar"
                                onClick={() => alert("Reintentando accion..")}
                            />
                            <SnackBar 
                                message={"Normal snackbar."}
                                onClose={() => this.handleClose('openSN')}
                                open={this.state.openSN}
                            />
                        </Card>
                    </div>
                    <div className={classes.part}>
                        <ExternalDataCard
                            quantity="8,612"
                            units="Suscriptores"
                            subtitle="Enviales información"
                            button="Administrar"
                            color={"#f00"}
                            icon={<EmailIcon style={{fontSize: 52}} />}
                        />
                        <ExternalDataCard
                            quantity="8,612"
                            units="Follows"
                            subtitle="450 Tweets"
                            button="Administar"
                            color={"#00aced"}
                            image={require('../images/twitter.png')}
                        />
                    </div>

                </div>
                <div className={classes.part}>
                    <Card
                        title="Form"
                        icon={ <Subject className={classes.icon2} /> }>
                        <StepperForm  
                        title={"Form"}/>
                    </Card>
                </div>
            </React.Fragment>
        )
    }
}

Pruebas.propTypes = {
    classes: propTypes.object.isRequired
}

export default withStyles(styles)(Pruebas)