import './Project.css'

function Project (props){
    return(
        <div className='project_container'>
            <img src={props.img} className='project_img'></img>
            <div className='project_text'>
                <p className='project_article'>{props.article}</p>
                <p className='project_disc'>{props.disc}</p>
            </div>
        </div>
    )
}

export default Project