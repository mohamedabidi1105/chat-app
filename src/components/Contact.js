import React from 'react'
import './Contact.css'


function Contact() {
    const name = 'Mohamed ABIDI'
    const avatar = 'https://images.daznservices.com/di/library/GOAL/53/3f/jose-mourinho-manchester-united-2018-19_f3vjxuxkhgni1hh3wykuze1if.jpg?t=-235386098&quality=100'
    const status = true
    
    return (
            <div className= "Contact">
                <img className= "avatar" src = {avatar}></img>
                <div>
                    <h4 className='name'>{name}</h4>
                    <div className="status">                    
                    <div className="status-online"></div>
                    <p className="status-text">{status ? 'online' : 'offline'}</p>
                    </div>
                </div>

            </div>

)
}
export default Contact