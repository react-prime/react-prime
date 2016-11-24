import React from 'react';

const App = ({ children }) => (
	<main>
		{children}
	</main>
);

App.propTypes = {
	children: React.PropTypes.object.isRequired,
};

export default App;
