import { h } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import Style from '../posts/style.css';

const Users = () => {
	const [ users , setUsers] = useState([]);
	const url = 'https://jsonplaceholder.typicode.com/users';
	useEffect(() => {
		get();
	},[]);

	const get = () => {
		fetch(url)
			.then(res => res.json())
			.then(data => setUsers(data))
			.catch(err => console.error(err));
	};
	return (
		<div className={Style.posts}>
			<h1>Users</h1>
			<table className={Style.tableposts}>
				<thead>
					<tr>
						<th>#</th>
						<th>Name</th>
                
					</tr>
				</thead>
				<tbody>
					{users.length === 0 ?
						<h1>Carregando....</h1>
						:
						users.map(user => (
							<tr>
								<td>{ user.id} </td>
								<td>{user.name} </td>
							</tr>
						))
					}
                
            
				</tbody>
			</table>
		</div>
	)
	;
};

export default Users;