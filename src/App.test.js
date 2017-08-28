import React from 'react';
import { shallow } from 'enzyme'
import App from './App';

describe('App Component', () => {
	it('renders App component properly', () => {
		let component = shallow(<App />)
		expect(component).toHaveLength(1)
	})
	it('displays count', () => {
		let component = shallow(<App/>)
		// console.log(component.find('h2').text())
		expect(component.find('h2').text()).toEqual('Count: 0')
	})

	describe('button', () => {
		it('when clicked, it increases count', () => {
			let component = shallow(<App/>)
			let button = component.find('button')
			button.simulate('click')
			expect(component.state().count).toEqual(1)
		})
	})
})