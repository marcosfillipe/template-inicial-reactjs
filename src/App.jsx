import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Pagina1 } from "./pages/Pagina1";
import { Pagina2 } from "./pages/Pagina2";
import { Pagina3 } from "./pages/Pagina3";
import { Layout } from "./Layout";
import { NotFound } from "./pages/NotFound";
import { GlobalStyles } from "./utils/globalStyles";

function App() {
	return (
		<>
			<BrowserRouter>
				<GlobalStyles />
				<Routes>
					<Route path="/" element={<Layout />}>
						<Route index element={<Home />} />
						<Route path="pagina1" element={<Pagina1 />} />
						<Route path="pagina2" element={<Pagina2 />} />
						<Route path="pagina3" element={<Pagina3 />} />
						<Route path="*" element={<NotFound />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
