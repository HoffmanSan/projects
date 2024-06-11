
export default function templatePL() {

  return (
    <>
			<div className="grid w-10/12 grid-cols-3 gap-5 mx-auto my-5">

				{/* CARD */}
				<div className="order-3 card">
						
					<h2>HealThyBody</h2>
					<p className="my-2">Aplikacja do monitorowania dziennego spożycia kalorii i makroelementów.</p>

					<div className="my-auto">
						<h3>Wykorzystane technologie:</h3>
						<table className="mx-auto mt-2">
							<thead>
								<tr>
									<td>Frontend</td>
									<td>Backend</td>
									<td>CSS</td>
									<td>Baza danych</td>
									<td>Inne</td>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>React</td>
									<td>Node</td>
									<td>Vanilla</td>
									<td>PostgreSQL</td>
									<td>EmailJS</td>
								</tr>
							</tbody>
						</table>
					</div>

					<h4>Udostępnione przez <span className="font-bold">Render</span>.</h4>

					<div className="p-1 my-auto border border-indigo-400">
						<h3>Planowane aktualizacje:</h3>
						<ul className="text-sm">
							<li>Magazynowanie koloru motywu wybranego przez użytkownika w pamięci local storage</li>
						</ul>
					</div>

					<div className="mt-auto">
						<a href="https://twogordev-first-app.onrender.com/" target="_blank" rel="noreferrer">
							<button>Strona</button>
						</a>
						<a href="https://github.com/TwoGorDev/TwoGorDev-First-App" target="_blank" rel="noreferrer">
							<button>Żródło</button>
						</a>
					</div>   
			
					<small className="mt-2 -mb-2">Ostatnia aktualizacja 09.05.2024</small>
				</div>

				{/* CARD */}
				<div className="order-2 card">

					<h2>Underhill Hall</h2>
					<p className="my-2">Aplikacja dla przedsiębiorstwa zajmującego się organizacją wydarzeń/imprez masowych. Pozwala na rezerwację miejsc na poszczególne wydarzenia, kontakt mailowy z obsługą, dokonwanie płatności kartą kredytową, metodą BLIK oraz Google Pay.</p>

					<div className="my-2">
						<h3 className="mt-auto text-xl font-bold">Wykorzystane technologie:</h3>
						<table className="mx-auto mt-2">
							<thead>
								<tr>
									<td>Frontend</td>
									<td>Backend</td>
									<td>CSS</td>
									<td>Baza danych</td>
									<td>Inne</td>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>React</td>
									<td>Node, Express</td>
									<td>SASS</td>
									<td>Firebase</td>
									<td>Stripe, EmailJS</td>
								</tr>
							</tbody>
						</table>
					</div>

					<h4>Udostępnione przez <span className="font-bold">Render</span>.</h4>

					<div className="p-1 my-2 border border-indigo-400">
						<h3>Planowane aktualizacje:</h3>
						<ul className="text-sm">
							<li>Dodanie panelu administratora</li>
							<li>Zmiana vanilla CSS na Tailwind</li>
							<li>Dodanie okna ładowania przy oczekiwaniu na panel płatności</li>
						</ul>
					</div>


					<div className="mt-auto">
						<a href="https://underhill-hall.onrender.com/" target="_blank" rel="noreferrer">
							<button>Strona</button>
						</a>
						<a href="https://github.com/HoffmanSan/Underhill-Hall" target="_blank" rel="noreferrer">
							<button>Źródło</button>
						</a>
					</div>
					
					<small className="mt-2 -mb-2">Ostatnia aktualizacja 27.09.2023</small>
				</div>

				{/* CARD */}
				<div className="card">

					<h2>Sklepico</h2>
					<p className="my-2">Aplikacja do prowadzenia działalności e-commerce. Posiada panel administratora pozwalający na dodawanie i edycję produktów i kategorii. Zbudowana przy użyciu MERN stack - zawiera wbudowaną autoryzację użytkowników i system dokonywania płatności.</p>

					<span className="font-bold">Dane administratora:</span>
					<div className="grid grid-cols-2 mx-auto">
						<span >Login:</span>
						<span className="text-left">admin@admin.com</span>
						<span>Hasło:</span>
						<span className="text-left">Test12345!</span>
					</div>

					<div className="my-2">
						<h3 className="mt-auto text-xl font-bold">Wykorzystane technologie:</h3>
						<table className="mx-auto mt-2">
							<thead>
								<tr>
									<td>Frontend</td>
									<td>Backend</td>
									<td>CSS</td>
									<td>Baza danych</td>
									<td>Inne</td>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>React</td>
									<td>Node, Express</td>
									<td>Tailwind</td>
									<td>MongoDB</td>
									<td>Stripe</td>
								</tr>
							</tbody>
						</table>
					</div>

					<h4>Udostępnione przez <span className="font-bold">Render</span>.</h4>

					{/* <div className="p-1 my-2 border border-indigo-400">
						<h3>Praca w toku</h3>
					</div> */}

					<small className="py-1"><span className="font-bold">UWAGA</span> Serwer z danymi jest hostowany na darmowym pakiecie Render.com - z tego powodu potrzebuje ok. 30 sekund na rozkręcenie i rozpoczęcie transferu.</small>

					<div className="mt-auto">
						<a href="https://sklepico.onrender.com/" target="_blank" rel="noreferrer">
							<button>Strona</button>
						</a>
						<a href="https://github.com/HoffmanSan/MERN-app" target="_blank" rel="noreferrer">
							<button>Źródło</button>
						</a>
					</div>

					<small className="mt-2 -mb-2">Ostatnia aktualizacja 10.12.2023</small>
					
				</div>
			</div>

			{/* CATEGORY ROW */}
			<div className="border-indigo-400 border-y-2">
				<h1>Projekty stworzone w trakcie kursów</h1>
			</div>
			
			<div className="grid w-10/12 grid-cols-3 gap-5 mx-auto my-5">

				{/* CARD */}
				<div className="card">
					<h2>Finance Tracker</h2>
					<p className="my-2">Prosta w obsłudze aplikacja do śledzenia wydatków. Autoryzacja użytkowników oraz magazynowanie danych przy użyciu Firebase.</p>

					<div className="my-auto">
						<h3>Wykorzystane technologie:</h3>
						<table className="mx-auto mt-2">
							<thead>
								<tr>
									<td>Frontend</td>
									<td>Backend</td>
									<td>CSS</td>
									<td>Baza danych</td>
									<td>Inne</td>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>React</td>
									<td>-</td>
									<td>Vanilla</td>
									<td>Firebase</td>
									<td>-</td>
								</tr>
							</tbody>
						</table>
					</div>

					<h4 className="mt-5">Udostępnione przez <span className="font-bold">GitHub Pages</span>.</h4>
					
					<div className="mt-5">
						<a href="https://hoffmansan.github.io/finance-tracker-course/" target="_blank" rel="noreferrer">
							<button>Strona</button>
						</a>
						<a href="https://github.com/HoffmanSan/finance-tracker-course" target="_blank" rel="noreferrer">
							<button>Źródło</button>
						</a>  
					</div>

				</div>

				{/* CARD */}
				<div className="card">
					<h2>Project Manager</h2>
					<p className="my-2">Aplikacja do zarządzania projektami. Pozwala tworzyć projekty, przypisywać je do poszczególnych użytkowników, zostawiać komentarze.</p>

					<div className="my-auto">
						<h3>Wykorzystane technologie:</h3>
						<table className="mx-auto mt-2">
							<thead>
								<tr>
									<td>Frontend</td>
									<td>Backend</td>
									<td>CSS</td>
									<td>Baza danych</td>
									<td>Inne</td>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>React</td>
									<td>-</td>
									<td>Vanilla</td>
									<td>Firebase</td>
									<td>-</td>
								</tr>
							</tbody>
						</table>
					</div>

					<h4 className="mt-5">Udostępnione przez <span className="font-bold">GitHub Pages</span>.</h4>

					<div className="mt-5">
						<a href="https://hoffmansan.github.io/Project-Manager/" target="_blank" rel="noreferrer">
							<button>Strona</button>
						</a>
						<a href="https://github.com/HoffmanSan/Project-Manager" target="_blank" rel="noreferrer">
							<button>Źródło</button>
						</a>
					</div>

				</div>

				{/* CARD */}
				<div className="card">
					<h2>Memory Game</h2>
					<p className="my-2">Prosta gra polegająca na łączeniu w pary kart o takiej samej wartości.</p>

					<div className="my-auto">
						<h3>Wykorzystane technologie:</h3>
						<table className="mx-auto mt-2">
							<thead>
								<tr>
									<td>Frontend</td>
									<td>Backend</td>
									<td>CSS</td>
									<td>Baza danych</td>
									<td>Inne</td>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>React</td>
									<td>-</td>
									<td>Vanilla</td>
									<td>Firebase</td>
									<td>-</td>
								</tr>
							</tbody>
						</table>
					</div>

					<h4>Udostępnione przez <span className="font-bold">GitHub Pages</span>.</h4>

					<div className="mt-5">
						<a href="https://hoffmansan.github.io/memory-game-course/" target="_blank" rel="noreferrer">
							<button>Strona</button>
						</a>
						<a href="https://github.com/HoffmanSan/memory-game-course" target="_blank" rel="noreferrer">
							<button>Źródło</button>
						</a>
					</div>	

				</div>

			</div>
    </>
  )
}
