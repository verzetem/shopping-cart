import React from 'react';

const CartFooter = ({ copyright, year }) => {
	
    return (
      <div>
        <nav className="navbar navbar-dark bg-dark">
	  			<a className="navbar-brand" href="https://google.com">{copyright} {year}</a>
				</nav>
      </div>
    );
}


export default CartFooter;