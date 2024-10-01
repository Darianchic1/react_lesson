import './Lines.css'

function Line(props){
    return(
        <div>
            <p className='number'>{props.number}</p>
            <hr className='line'></hr>
        </div>
    )
}

export default Line