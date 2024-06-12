
export default function templateEN() {
  return (
    <>
    <div className="grid w-10/12 grid-cols-3 gap-5 mx-auto my-5">
    	{/* CARD */}
				<div className="order-3 w-1/3 card">
						
						<h2>HealThyBody</h2>
						<p className="my-2">An application for managing daily calorie and macronutriens intake.</p>
	
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
										<td>Node</td>
										<td>Vanilla</td>
										<td>PostgreSQL</td>
										<td>EmailJS</td>
									</tr>
								</tbody>
							</table>
						</div>
	
						<h4>Hosted with <span className="font-bold">Render</span>.</h4>
	
						<div className="p-1 my-auto border border-indigo-400">
							<h3>Planned updates:</h3>
							<ul className="text-sm">
								<li>Saving user theme color in local storage</li>
							</ul>
						</div>
	
						<div className="mt-auto">
							<a href="https://twogordev-first-app.onrender.com/" target="_blank" rel="noreferrer">
								<button>Visit</button>
							</a>
							<a href="https://github.com/TwoGorDev/TwoGorDev-First-App" target="_blank" rel="noreferrer">
								<button>Source</button>
							</a>
						</div>   
				
						<small className="mt-2 -mb-2">Last update 09.05.2024</small>
					</div>

      {/* CARD */}
			<div className="order-2 card">

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
				<p className="my-2">An e-commerce application for a goods-distribution enterprise. Includes admin panel allowing to add/edit products and categories. Built with MERN stack - contains custom user authentication functionality and payment options.</p>

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

				<h4>Hosted with <span className="font-bold">Render</span>.</h4>

				{/* <div className="p-1 my-2 border border-indigo-400">
					<h3>Work in progress</h3>
				</div> */}

				<small className="py-1"><span className="font-bold">NOTE</span> Backend server is hosted with a free web service package on Render.com which is why it may take up to 30 seconds to start the data transfer.</small>

				<div className="mt-auto">
				<a href="https://sklepico.onrender.com/" target="_blank" rel="noreferrer">
						<button>Visit</button>
					</a>
					<a href="https://github.com/HoffmanSan/MERN-app" target="_blank" rel="noreferrer">
						<button>Source</button>
					</a>
				</div>

				<small className="mt-2 -mb-2">Last update 10.12.2023</small>

			</div>
    </div>

		
		{/* CATEGORY ROW */}
    <div className="border-indigo-400 border-y-2">
			<h1>Projects made during courses </h1>
    </div>
		
    <div className="grid w-10/12 grid-cols-3 gap-5 mx-auto my-5">

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
