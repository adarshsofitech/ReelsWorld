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
import insta from '../assets/Instagram.jpeg'
import {Link,useHistory} from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext'

export default function PasswordReset() {
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
    const {reset} = useContext(AuthContext)

    const handleClick = async()=>{
        try{
            setError('');
            setLoading(true)
            let res = await reset(email);
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
            
            <div className="logincard">

                <Card variant="outlined">
                    <div className='instaLogo'>
                        <img src={insta} alt=""/>
                    </div>
                        <CardContent>
                            {error!='' && <Alert severity="error">{error}</Alert>}
                        <Typography className={classes.text1} variant="subtitle1">Enter your email to reset your password
                        </Typography>
                            <TextField id="outlined-basic" label="email" variant="outlined" fullWidth={true} margin='dense' size='small' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                        </CardContent>
                    <CardActions>
                        <Button  color="primary" fullWidth={true} variant='contained' disabled={loading} onClick={handleClick}>
                            Reset password
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