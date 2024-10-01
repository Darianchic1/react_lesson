function UserCard(props){
    return(
        <li>
            <h1>{props.task}</h1>
            <p>{props.disc}</p>
            <p>{props.status}</p>
        </li>
    )
}

export default UserCard