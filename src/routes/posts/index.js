import { h } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import Style from './style.css';

import { urlPosts } from '../../config';

const Posts = () => {
	const [posts,setPosts] = useState([]);
	const [post,setPost] = useState({
		id: '',
		title: ''
	});

	useEffect(() => {
		get();
	},[]);

	const get = () => {

		fetch(urlPosts)
			.then(res => res.json())
			.then(data => setPosts(data))
			.catch(err => console.error('deu ruim',err));
	};

	const apagar = (id) => {
		
		fetch(`${urlPosts}/${id}`,{ method: 'DELETE' })
			.then(res => get())
			.catch(err => console.error('deu ruim',err));
	
	};
	

	const salvar = () => {
		const headers = {
			Accept: 'application/json',
			'Content-Type': 'application/json'
		};

		const method = (post.id === ''?'POST':'PUT');
		const url = (post.id === ''?urlPosts:`${urlPosts}/${post.id}`);


		fetch(`${url}`,{ method,headers,body: JSON.stringify(post) })
			.then(res => {
				get();
				clear();
			})
			.catch(err => console.error('deu ruim',err));
	};


	const editar = (post) => {
		setPost(post);
	};

	const clear = () => setPost({ id: '',title: '' });
	return (
		<div className={Style.posts}>
			<h1>Posts</h1>
			<form className={Style.form}>
				<fieldset>
					<label>Title</label>
					<input type="text" value={post.title} onInput={(e) => setPost({ ...post,title: e.target.value })} />
					<a onClick={() => salvar()} className="button button-primary">gravar</a>
				</fieldset>
			</form>
			<table className={Style.tableposts}>
				<thead>
					<tr>
						<th>#</th>
						<th>Title</th>
						<th>Ações</th>
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
								<td>
									<a className="button button-outline" onClick={() => editar(post)}><i className="fas fa-edit" /></a>
									<a className="button button-outline" onClick={() => apagar(post.id)} ><i className="fas fa-trash" /></a>
							
								</td>
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