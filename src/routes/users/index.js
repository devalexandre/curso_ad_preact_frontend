import { h } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import Style from './style.css';

const Posts = () => {
	const [users,setUsers] = useState([]);
	const url = 'https://jsonplaceholder.typicode.com/users';

	useEffect(() => {
		get();
	},[]);

	const get = () => {

		fetch(url)
			.then(res => res.json())
			.then(data => setUsers(data))
			.catch(err => console.error('deu ruim',err));
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
					{
						users.map(post => (
                    	<tr>
                    		<td>{ post.id} </td>
                    		<td>{post.name} </td>
                    	</tr>
						))
					}
					
				
				</tbody>
			</table>
		</div>
	)
	;
};

export default Posts;