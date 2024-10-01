import './Contact.css'

function Contact(props){
    return ( 
    <div className='contact_container'>
        <img className='icon_contact' src={props.svg}/>
        <div className='contact_text'>
            <p className='action'>{props.action}</p>
            <p className='adress'>{props.where}</p>
        </div>
    </div>
    )
}

export default Contact