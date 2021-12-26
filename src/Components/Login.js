import * as React from 'react';
import { useContext,useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';
import TextField from '@mui/material/TextField';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { makeStyles } from '@mui/styles';
import CloudUploadIcon from '@material-ui/icons/CloudUpload'
import './Login.css'
import { CarouselProvider, Slider, Slide,Image } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import insta from '../assets/Instagram.jpeg'
import background from '../assets/background.png'
import {Link,useHistory} from 'react-router-dom';
import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.jpg'
import img4 from '../assets/img4.jpg'
import img5 from '../assets/img5.jpg'
import { AuthContext } from '../Context/AuthContext'

export default function Login() {
    const store = useContext(AuthContext)
    console.log(store);
    const useStyles = makeStyles({
        text1:{
            color:'grey',
            textAlign:'center'
        },
        text2:{
            textAlign:'center',
        },
        card2:{
            height:'5vh',
            marginTop:'3%',
        }
    })
    const classes = useStyles();
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [error,setError] = useState('')
    const [loading,setLoading] = useState(false)
    const history = useHistory()
    const {login} = useContext(AuthContext)

    const handleClick = async()=>{
        try{
            setError('');
            setLoading(true)
            let res = await login(email,password);
            setLoading(false);
            history.push('/')
        }catch(err){
            setError(err);
            setTimeout(()=>{
                setError('')
            },2000);
            setLoading(false)
        }
    }
    return (
        <div className="loginWrapper">
            <div className='imgcar' style={{backgroundImage:'url('+background+')',backgroundSize:"cover"}}>
                <div className='car'>
                <CarouselProvider
                    visibleSlides={1}
                    totalSlides={5}
                    naturalSlideWidth={241}
                    naturalSlideHeight={423}
                    hasMasterSpinner
                    isPlaying={true}
                    infinite={true}
                    dragEnabled={false}
                    touchEnabled={false}
                >
                    <Slider>
                    <Slide index={0}><Image src={img1}/></Slide>
                    <Slide index={1}><Image src={img2}/></Slide>
                    <Slide index={2}><Image src={img3}/></Slide>
                    <Slide index={3}><Image src={img4}/></Slide>
                    <Slide index={4}><Image src={img5}/></Slide>
                    </Slider>
                </CarouselProvider>
                </div>
            </div>
            <div className="logincard">

                <Card variant="outlined">
                    <div className='instaLogo'>
                        <img src={insta} alt=""/>
                    </div>
                        <CardContent>
                            {error!='' && <Alert severity="error">{error}</Alert>}
                            <TextField id="outlined-basic" label="email" variant="outlined" fullWidth={true} margin='dense' size='small' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                            <TextField id="outlined-basic" label="password" variant="outlined" fullWidth={true} margin='dense' size='small' value={password} onChange={(e)=>setPassword(e.target.value)}/>
                        <Typography className={classes.text2} color="primary" variant="subtitle1">
                            <Link to="/passwordReset" style={{textDecoration:"none"}}>Forgotten your password ?</Link>
                        </Typography>
                        </CardContent>
                    <CardActions>
                        <Button  color="primary" fullWidth={true} variant='contained' disabled={loading} onClick={handleClick}>
                            Login
                        </Button>
                    </CardActions>
                </Card>
                <Card variant="outlined" className={classes.card2}>
                <CardContent>
                <Typography className={classes.text1} variant="subtitle1" >
                        Don't have an account ?<Link to="/signUp" style={{textDecoration:"none"}}>Sign up</Link>
                    </Typography>
                </CardContent>
                </Card>
            </div>
        </div>

        
        

    );
}