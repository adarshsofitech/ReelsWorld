import React,{useState,useEffect} from 'react'
import { CircularProgress } from '@mui/material';
import { Avatar } from '@mui/material';
import { database } from '../firebase';
function Comments({postData}) {
    const [comments,setComments] = useState(null);
    useEffect(async() => {
        let arr = []
        for(let i=0;i<postData.comments.length;i++){
            let data = await database.comments.doc(postData.comments[i]).get()
            arr.push(data.data());
        }
        setComments(arr);
    }, [postData])
    return (
        <div>
            {
                comments==null?<CircularProgress/> :
                <>
                {
                    comments.map((comment,index)=>(
                        <div style={{display:"flex"}}>
                            <Avatar src={comment.uProfileImage}/>
                            <p>&nbsp;<span style={{fontWeight:"bold"}}>{comment.uName}</span>&nbsp; {comment.text}</p>
                        </div>
                    ))
                }
                </>
            }
        </div>
    )
}

export default Comments
