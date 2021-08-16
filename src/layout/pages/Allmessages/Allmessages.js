import  {text} from '../Addmessage/Addmessage';
import classes from './Allmessages.module.css';
import { preview } from '../Addmessage/Addmessage';
import { useEffect, useState } from 'react';

function AllMessages(){

  return (
    <div className={classes.allmessages}>
    
       <p>{text}</p>
    
      <img src={preview}/>
    
    </div>
        );
    }
    export default AllMessages;
    
  // const [loadedmessages,setloadedmessages] = useState([]);
    // let messages;
    // let messagesobj;

// useEffect(() => {
//     fetch('https://socialmedia1-45481-default-rtdb.firebaseio.com/messages.json')
//     .then((response) => {
//         return response.json();
//     }).then((data) => {
//          messages = [];

//         for(const key in data){
//              messagesobj = {
//                 id:key,
//                 he:"hello",
//                 ...data[key]
//             };
//             messages.push(messagesobj)
//         }
//         setloadedmessages(messages);
//     });
// }); this the part for posting the user entered data in firebase

 