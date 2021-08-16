import classes from './Addmessage.module.css';
import Card from '../../../components/card/card'
import { useHistory } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';


export let text;


export let preview;
let setpreview;

   // copmonent
 function Addmessage(){

  const [image,setimage] = useState();
 [preview,setpreview] = useState();

const history = useHistory();




function onsubmithandler(e){
e.preventDefault();
    const Messages = {
        usertext:text,
        userimage:preview
    };



fetch('https://socialmedia1-45481-default-rtdb.firebaseio.com/messages.json',
{
    method:'POST',
    body:JSON.stringify(Messages),
    headers:{
        'Content-Type':'application/json'
    }
}).then(() => {
    history.replace('/allmessages');
});
}

// getting user text input
   function getdata(e){
    text = e.target.value;
    console.log(text);
}


// extracting user image input; 
useEffect(() => {
if(image){
const reader = new FileReader();
reader.onloadend = () => {
setpreview(reader.result);
}
reader.readAsDataURL(image);
}
else{
    setpreview(null);
}
},[image])



// rendering content
    return(
<div className={classes.addmessage}>
    <Card>
    <div className={classes.header}>
        <h1>Add NewMessage</h1>
    </div>

    <div className={classes.form}>

        <form onSubmit={onsubmithandler}>

            <div className={classes.inputs}>

            <textarea placeholder="Enter Your Message" onChange={getdata} ></textarea>

            <input type='file' accept='image/*'  onChange={(event) => {
             const file = event.target.files[0];
             if(file){
                 setimage(file);
             }else{
                 setimage(null);
             }
            }}/>

            </div>

            <div className={classes.btns}>
            <input type='submit' value='Send'/>
            <input type='reset' value='Clear' />
            </div>
        </form>
    </div>
    </Card>
</div>
    );
}
export default Addmessage;
