import React from 'react'
import PropTypes from 'prop-types'
import './Contact.css'


class Contact extends React.Component { 
    constructor(props) {
        super(props)
        this.state = {
            status: props.status
        }
    }
            render() {
                return (
                    <div className= "Contact">
                        <img className= "avatar" src = {this.props.avatar}></img>
                        <div>
                            <h4 className='name'>{this.props.name}</h4>
                            <div className="status" onClick= {event =>{const newStatus = !this.state.status; this.setState({status:newStatus})}}>                    
                                <div className={this.state.status? "status-online" : "status-offline"} ></div>
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