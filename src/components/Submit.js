import React, {useState} from 'react'
import image from '../assets/icon-star.svg';
import { Link } from 'react-router-dom';
import '../sass/index.css';


function Submit() {
  const [_id, setId] = useState(null);
  
  const changeBack = (e) => {
    const elements = document.getElementsByTagName("li");
    [...elements].forEach(element => element.style.backgroundColor='#292e39');
    e.target.style.backgroundColor = "hsl(216, 12%, 54%)";
    setId(e.target.id);
   
  }


  return (
    <>
    <div className="container" >
        <img className='img1' src={image} alt='image1' />
        <header id="100">How did we do?</header>
        <p> Please let us know how we did with your support request. 
            All feedback is appreciated 
            to help us improve our offering!
        </p>
        <div className="rating">
          
            <div className="reference">
              <li id="1" onClick={(e) => changeBack(e)}>1</li>
              <li id="2" onClick={(e) => changeBack(e)}>2</li>
              <li id="3" onClick={(e) => changeBack(e)}>3</li>
              <li id="4" onClick={(e) => changeBack(e)}>4</li>
              <li id="5" onClick={(e) => changeBack(e)}>5</li>
            </div>
            {_id && <Link className="button" to={`/rating/${_id}`}>Submit</Link>}
          
        </div>
        
    </div>
    </>
  )
}

export default Submit;