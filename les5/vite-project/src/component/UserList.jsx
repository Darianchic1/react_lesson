import UserCard from "./UserCard";
import {useState} from 'react'

function UserList(){
    const [users, setUsers] = useState([
        {
            name: 'Dasha',
            phone: '89212305015'
        },
        {
            name: 'Gelya',
            phone: '89005443409'
        }
    ]);

    return(
        <ul>
            {users.map((el, index)=>(
                <UserCard name={el.name} phone={el.phone} key={index}/>
            ))}
        </ul>
    )
}

export default UserList