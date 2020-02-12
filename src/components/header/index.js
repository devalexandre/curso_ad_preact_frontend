import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.css';

const Header = () => (
	<header class={style.header}>
		<h1>Indev Web App <i class="fab fa-dev" /></h1>
		<nav>
			<Link activeClassName={style.active} href="/">Posts</Link>
			<Link activeClassName={style.active} href="/users">Users</Link>
		</nav>
	</header>
);

export default Header;
