import { Component } from 'react'

import './search-panel.css'

class SearchPanel extends Component {
	constructor(props) {
		super(props);
		this.state = {
			tern: '',
		}
	}
	onUpdateSearch = (e) => {
		const tern = e.target.value;
		this.setState({tern});
		this.props.onUpdateSearch(tern)
	}
	render() {
		return (
			<input
				type="text"
				className='form-control search-input'
				placeholder='Найти сотрудника'
				value={this.state.tern}
				onChange={this.onUpdateSearch} />
		);
	}
	
}

export default SearchPanel;