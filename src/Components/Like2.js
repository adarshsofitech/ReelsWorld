import React, { useEffect,useState } from 'react'
import { makeStyles } from '@mui/styles';
import FavoriteIcon from '@material-ui/icons/Favorite';
import './Post.css'
import { database } from '../firebase' 

function Like({userData,postData}) {
    const [like,setLike] = useState(null);
    useEffect(()=>{
        let check = postData.likes.includes(userData.userId)?true:false
        setLike(check)
    },[postData])
    const handleLike = ()=>{
        if(like==true){
            let narr = postData.likes.filter((e)=>e!=userData.userId);
            database.posts.doc(postData.postId).update({
                likes:narr
            })
        }
        else{
            let narr = [...postData.likes,userData.userId]
            database.posts.doc(postData.postId).update({
                likes:narr
            })
        }
    }
    return (
        <div>
            {
                like!=null?
                <>
                {
                    like==true ? <FavoriteIcon style={{padding:'1rem',paddingTop:'1rem'}} className={`like`} onClick={handleLike}/> : <FavoriteIcon style={{padding:'1rem',paddingTop:'1rem'}} className={`unlike2`} onClick={handleLike}/>
                        // <Button color="secondary" margin="dense" startIcon={<FavoriteIcon/>} component='label'>
                }
                </>:
                <>
                </>
            }
        </div>
    )
}

export default Like
