
export default function templateEN() {
  return (
    <>
    <div className="grid w-9/12 grid-cols-3 gap-5 mx-auto my-5">
    	{/* CARD */}
				<div className="card">
						
						<h2>ToDo List</h2>
						<p className="my-2">Simple to-do list with a sorting option based on task's completion status.</p>
	
						<div className="my-auto">
							<h3>Implemented technologies:</h3>
							<table className="mx-auto mt-2">
								<thead>
									<tr>
										<td>Frontend</td>
										<td>Backend</td>
										<td>CSS</td>
										<td>Database</td>
										<td>Other</td>
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
	
						<h4>Hosted with <span className="font-bold">GitHub Pages</span>.</h4>
	
						<div className="p-1 my-auto border border-indigo-400">
							<h3>Planned updates:</h3>
							<ul className="text-sm">
								<li>Save tasks in local storage</li>
								<li>Change vanilla CSS to Tailwind</li>
							</ul>
						</div>
	
						<div className="mt-auto">
							<a href="https://hoffmansan.github.io/to-do-list-first-project/" target="_blank" rel="noreferrer">
								<button>Visit</button>
							</a>
							<a href="https://github.com/HoffmanSan/to-do-list-first-project" target="_blank" rel="noreferrer">
								<button>Source</button>
							</a>
						</div>   
				
						<small className="mt-2 -mb-2">Last update 11.08.2023</small>
					</div>

      {/* CARD */}
			<div className="card">

				<h2>Underhill Hall</h2>
				<p className="my-2">Web application for an event hosting enterprise. Includes seat booking functionality and payment options such as credit card, GooglePay and BLIK.</p>

				<div className="my-2">
					<h3 className="mt-auto text-xl font-bold">Implemented technologies:</h3>
					<table className="mx-auto mt-2">
						<thead>
							<tr>
								<td>Frontend</td>
								<td>Backend</td>
								<td>CSS</td>
								<td>Database</td>
								<td>Other</td>
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

				<h4>Hosted with <span className="font-bold">Render</span>.</h4>

				<div className="p-1 my-2 border border-indigo-400">
					<h3>Planned updates:</h3>
					<ul className="text-sm">
						<li>Admin panel addition</li>
						<li>Switching from SASS to Tailwind</li>
						<li>Fixing the occasional payment panel loading error</li>
					</ul>
				</div>


				<div className="mt-auto">
					<a href="https://underhill-hall.onrender.com/" target="_blank" rel="noreferrer">
						<button>Visit</button>
					</a>
					<a href="https://github.com/HoffmanSan/Underhill-Hall" target="_blank" rel="noreferrer">
						<button>Source</button>
					</a>
				</div>

				<small className="mt-2 -mb-2">Last update 27.09.2023</small>
			</div>

			{/* CARD */}
			<div className="card">

				<h2>Sklepico</h2>
				<p className="my-2">An e-commerce application for a distribution-based enterprise. Includes admin panel allowing to add/edit/delete products/categories/users. Built with MERN stack - contains custom user authentication functionality and payment options.</p>

				<div className="my-2">
					<h3 className="mt-auto text-xl font-bold">Implemented technologies:</h3>
					<table className="mx-auto mt-2">
						<thead>
							<tr>
								<td>Frontend</td>
								<td>Backend</td>
								<td>CSS</td>
								<td>Database</td>
								<td>Other</td>
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
					<h3>Work in progress</h3>
				</div>


				<div className="mt-auto">
					<a href="https://github.com/HoffmanSan/MERN-app" target="_blank" rel="noreferrer">
						<button>Source</button>
					</a>
				</div>

				<small className="mt-2 -mb-2">Work in progress</small>

			</div>
    </div>

		
		{/* CATEGORY ROW */}
    <div className="border-indigo-400 border-y-2">
			<h1>Projects made during courses </h1>
    </div>
		
    <div className="grid w-9/12 grid-cols-3 gap-5 mx-auto my-5">

				{/* CARD */}
        <div className="card">
					<h2>Finance Tracker</h2>
					<p className="my-2">Simple application for financial expenses monitoring. User authentication and data storage with Firebase.</p>
					
					<div className="my-auto">
						<h3>Implemented technologies:</h3>
						<table className="mx-auto mt-2">
							<thead>
								<tr>
									<td>Frontend</td>
									<td>Backend</td>
									<td>CSS</td>
									<td>Database</td>
									<td>Other</td>
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

					<h4 className="mt-5">Hosted with <span className="font-bold">GitHub Pages</span>.</h4>

					<div className="mt-5">
						<a href="https://hoffmansan.github.io/finance-tracker-course/" target="_blank" rel="noreferrer">
							<button>Visit</button>
						</a>
						<a href="https://github.com/HoffmanSan/finance-tracker-course" target="_blank" rel="noreferrer">
							<button>Code</button>
						</a>  
					</div>

        </div>

				{/* CARD */}
        <div className="card">
            <h2>Project Manager</h2>
            <p className="my-2">Web application for easier team projects management. It lets the user create new projects, assign them to others and append comments.</p>

						<div className="my-auto">
						<h3>Implemented technologies:</h3>
						<table className="mx-auto mt-2">
							<thead>
								<tr>
									<td>Frontend</td>
									<td>Backend</td>
									<td>CSS</td>
									<td>Database</td>
									<td>Other</td>
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

					<h4 className="mt-5">Hosted with <span className="font-bold">GitHub Pages</span>.</h4>

					<div className="mt-5">
						<a href="https://hoffmansan.github.io/Project-Manager/" target="_blank" rel="noreferrer">
							<button>Visit</button>
						</a>
						<a href="https://github.com/HoffmanSan/Project-Manager" target="_blank" rel="noreferrer">
							<button>Code</button>
						</a>
					</div> 

        </div>

				{/* CARD */}
        <div className="card">
            <h2>Memory Game</h2>
            <p className="my-2">Simple memory game based on matching same value cards.</p>

						<div className="my-auto">
						<h3>Implemented technologies:</h3>
						<table className="mx-auto mt-2">
							<thead>
								<tr>
									<td>Frontend</td>
									<td>Backend</td>
									<td>CSS</td>
									<td>Database</td>
									<td>Other</td>
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

					<h4>Hosted with <span className="font-bold">GitHub Pages</span>.</h4>

					<div className="mt-5">
						<a href="https://hoffmansan.github.io/memory-game-course/" target="_blank" rel="noreferrer">
							<button>Visit</button>
						</a>
						<a href="https://github.com/HoffmanSan/memory-game-course" target="_blank" rel="noreferrer">
							<button>Code</button>
						</a>
					</div>
            
        </div>
				
    </div>
    </>
  )
}
