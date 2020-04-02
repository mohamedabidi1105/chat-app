import React from 'react'
import PropTypes from 'prop-types'
import './Contact.css'


function Contact(props) { 
        return (
            <div className= "Contact">
                <img className= "avatar" src = {props.avatar}></img>
                <div>
                    <h4 className='name'>{props.name}</h4>
                    <div className="status">                    
                        <div className={props.status ? "status-online" : "status-offline"}></div>
                        <div className="status-text">{props.status ? 'online' : 'offline'}</div>
                    </div>
                </div>

            </div>
        )
}

Contact.propTypes = {
    name: PropTypes.string,
    avatar: PropTypes.string,
    status: PropTypes.bool,

}
export default Contact