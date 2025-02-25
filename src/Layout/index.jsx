import { Link, Outlet } from "react-router-dom";

export const Layout = () => {
	return (
		<>
			<header>
				<nav>
					<ul>
						<li>
							<Link to={"/"}>Home</Link>
						</li>
						<li>
							<Link to={"/pagina1"}>Pagina1</Link>
						</li>
						<li>
							<Link to={"/pagina2"}>Pagina2</Link>
						</li>
						<li>
							<Link to={"/pagina3"}>Pagina3</Link>
						</li>
					</ul>
				</nav>
			</header>
			<main>
				<Outlet />
			</main>
			<footer>
				<p>Direitos Reservados</p>
			</footer>
		</>
	);
};
