import React, {useEffect} from 'react';
import Aos from 'aos'
import "aos/dist/aos.css";

function Post(props) {
    useEffect(()=>{
        Aos.init({duration: 3000});
    }, [])
    return (
        <>
            <div className="card" data-aos="fade-up">
                <img src={props.img}></img>
                <div className="card-body">
                    <h5>{props.title}</h5>
                    <p>{props.comment}</p>
                    <a href="#">Go somewhere</a>
                </div>
            </div>
        </>
    )
}

export default Post;