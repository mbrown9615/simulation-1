//37E-1

import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Home extends Component {

//36F
    render(){
        return(

            //36G
            //42G
            //42E
            <div className='Home'>
                <Link className='shelf' to='/A'><h1>Shelf A</h1></Link>
                <Link className='shelf' to='/B'><h1>Shelf B</h1></Link>
                <Link className='shelf' to='/C'><h1>Shelf C</h1></Link>
                <Link className='shelf' to='/D'><h1>Shelf D</h1></Link>
            </div>
        )
    }

}
//37E-2
export default Home;