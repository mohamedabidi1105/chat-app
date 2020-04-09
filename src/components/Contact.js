import React from 'react'
import PropTypes from 'prop-types'
import './Contact.css'
import { render } from '@testing-library/react'


class Contact extends React.Component { 
    constructor(props) {
        super(props)
        this.state = {
            status: false
        }
    }
            render() {
                return (
                    <div className= "Contact">
                        <img className= "avatar" src = {props.avatar}></img>
                        <div>
                            <h4 className='name'>{props.name}</h4>
                            <div className="status">                    
                                <div className={this.state.status ? "status-online" : "status-offline"} onClick= {event =>{const newStatus = !this.state.status; this.setState({status:newStatus})}}></div>
                                <div className="status-text">{this.state.status ? 'online' : 'offline'}</div>
                            </div>
                        </div>

                    </div>
                )
                } 
}

Contact.propTypes = {
    name: PropTypes.string,
    avatar: PropTypes.string,
    status: PropTypes.bool,

}
export default Contact