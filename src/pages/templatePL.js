
export default function templatePL() {

  return (
    <>
			<div className="grid w-9/12 grid-cols-3 gap-5 mx-auto my-5">

				{/* CARD */}
				<div className="card">
						
					<h2>ToDo List</h2>
					<p className="my-2">Lista zadań z opcjami edycji i sortowania na podstawie statusu ukończenia.</p>

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
									<td>-</td>
									<td>-</td>
								</tr>
							</tbody>
						</table>
					</div>

					<h4>Udostępnione przez <span className="font-bold">GitHub Pages</span>.</h4>

					<div className="p-1 my-auto border border-indigo-400">
						<h3>Planowane aktualizacje:</h3>
						<ul className="text-sm">
							<li>Magazynowanie zadań w pamięci local storage</li>
							<li>Zaimplementowanie biblioteki Tailwind CSS</li>
						</ul>
					</div>

					<div className="mt-auto">
						<a href="https://hoffmansan.github.io/to-do-list-first-project/" target="_blank" rel="noreferrer">
							<button>Strona</button>
						</a>
						<a href="https://github.com/HoffmanSan/to-do-list-first-project" target="_blank" rel="noreferrer">
							<button>Żródło</button>
						</a>
					</div>   
			
					<small className="mt-2 -mb-2">Ostatnia aktualizacja 11.08.2023</small>
				</div>

				{/* CARD */}
				<div className="card">

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
							<li>Zmiana biblioteki SASS na Tailwind</li>
							<li>Naprawa błędu z okresowym brakiem ładowania panelu płatności</li>
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
					<p className="my-2">Aplikacja typu e-commerce dla działalności zajmującej się dystrybucją. Posiada panel administratora pozwalający na dodawanie/edycję/usuwanie produktów/kategorii/użytkowników. Zbudowana przy użyciu MERN stack - oferuje wbudowaną autoryzację użytkowników i dokonywanie płatności.</p>

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

					{/* <h4>Udostępnione przez <span className="font-bold">Render</span>.</h4> */}

					<div className="p-1 my-2 border border-indigo-400">
						<h3>Praca w toku</h3>
					</div>


					<div className="mt-auto">
						<a href="https://github.com/HoffmanSan/MERN-app" target="_blank" rel="noreferrer">
							<button>Źródło</button>
						</a>
					</div>

					<small className="mt-2 -mb-2">Praca w toku</small>
					
				</div>
			</div>

			{/* CATEGORY ROW */}
			<div className="border-indigo-400 border-y-2">
				<h1>Projekty stworzone w trakcie kursów</h1>
			</div>
			
			<div className="grid w-9/12 grid-cols-3 gap-5 mx-auto my-5">

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
