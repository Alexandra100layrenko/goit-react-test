import { useEffect, useState } from 'react'
import s from './Users.module.css'

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const data = await fetchUsers();
            setUsers(data);
        }
        getData();
    }, []);

  return (
    <div>
      <h1>Users</h1>
      <ul className='s.list'>
        {users.map(user=>(
            <li key={user.id}>
                <Link to={user.id.toString()}>
                    <p>
                        {user.firstName} &nbsp;
                        {user.lastName}
                    </p>
                </Link>
            </li>
        ))}
      </ul>
    </div>
  )
}

export default Users
