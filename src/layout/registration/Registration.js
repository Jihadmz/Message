import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Card from '../../components/card/card';
import classes from './Registration.module.css';

function Registration(){
    const history = useHistory();
    const [bool , setbool] = useState();
  

    
function onclickhandler(e){
    if(bool){
        e.preventDefault();
    }else{
history.replace('/addmessage');
    }

}

    return(
        
<div className={classes.div}>
<Card> 

    <form method='POST' onSubmit={onclickhandler}>
        <div  className={classes.label}>
    <label>Registration</label>
    </div>

    <div className={classes.inputs}>
       <li className={classes.li}>FullName:<input type='text' required/> </li> 
       
       <li className={classes.li}>Email:<input type='email' required onChange={(event) => { // start
         const email = event.target.value.split('@');  // of the email input validation     
         
         if(email[1] != 'gmail.com'){
           setbool(true);
         }else{
             setbool(false);
         }
       }} // end of the validation 
       /> 
       </li> 

        <li className={classes.li}>Password:<input type='password' required/>  </li> 
        </div>

        <div className={classes.btns}>
        <input type='submit'/>
        <input type='reset' />
        </div>
    </form>
    </Card>
</div>


    );
    }


export default Registration;