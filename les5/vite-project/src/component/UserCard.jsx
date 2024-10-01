function UserCard(props){
    return(
        <li>
            <p>{props.name}</p>
            <p>{props.phone}</p>
        </li>
    )
}

export default UserCard