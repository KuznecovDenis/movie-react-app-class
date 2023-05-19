import React from 'react';

const Header = () => {
	return (
		<header>
			<nav>
				<div className='nav-wrapper indigo accent-2'>
					<a href='/' className='brand-logo'>
						MovieAppReact
					</a>
					<ul id='nav-mobile' className='right hide-on-med-and-down'>
						<li>
							<a href='collapsible.html'>GitHub</a>
						</li>
					</ul>
				</div>
			</nav>
		</header>
	);
};

export default Header;
