import './Value.css'

function Value(props){
    return(
        <div className='value_container'>
            <img src={props.svg} className='img_value'></img>
            <p className="name_value">{props.name_value}</p>
            <p className='discr_value'>{props.discr_value}</p>
        </div>
    )
}

export default Value