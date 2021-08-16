import { Link } from "react-router-dom";

import classes from './Navigation.module.css';
import { useEffect, useRef, useState } from "react";

function Navigation() {
    const [image, setimage] = useState();
const [preview, setpreview] = useState();

    const imageinput = useRef();

    useEffect(() => {
        if(image){
            const reader = new FileReader();

            reader.onloadend=() => {
                setpreview(reader.result);
            };
            reader.readAsDataURL(image);
        }else{
            setpreview(null);
        }

    },[image]);


    return (
        <section>
            <h1>SocialMedia</h1>

            <nav>
                <ul>
                    <li><Link className={classes.link} to='/addmessage'>AddMessage</Link></li>
                    <li><Link className={classes.link2} to='/allmessages'>AllMessages</Link></li>
                </ul>
            </nav>

            <div className={classes.imagechoose}>

                {preview ? <img  src={preview} style={{objectFit:'cover'}} onClick={() => {
                    setimage(null);
                }}/> :
                <button onClick={(event) => {
                    event.preventDefault();
                    imageinput.current.click();
                }}>Add image</button> }

                <input type='file' accept='image/*' style={{ display: "none" }} ref={imageinput} onChange={
                    (event) => {
                        const file = event.target.files[0]; // this is to set the first image sellected.
                        if (file) {
                            setimage(file);
                        } else {
                            setimage(null);
                        }

                    }
                } />


            </div>
        </section>
    );
}
export default Navigation;