import { h } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import Style from './style.css';

const Posts = () => {
	const [posts,setPosts] = useState([]);
	const url = 'https://jsonplaceholder.typicode.com/posts';

	useEffect(() => {
		get();
	},[]);

	const get = () => {

		fetch(url)
			.then(res => res.json())
			.then(data => setPosts(data))
			.catch(err => console.error('deu ruim',err));
	};

	return (
		<div className={Style.posts}>
			<h1>Posts</h1>
			<table className={Style.tableposts}>
				<thead>
					<tr>
						<th>#</th>
						<th>Title</th>
					
					</tr>
				</thead>
				<tbody>
					{posts.length === 0 ?
						<h1>Carregando....</h1>
						:
						posts.map(post => (
                    	<tr>
                    		<td>{ post.id} </td>
                    		<td>{post.title} </td>

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