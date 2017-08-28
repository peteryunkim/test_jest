import React from 'react';
import { shallow } from 'enzyme'
import App from './App';

describe('App Component', () => {
	it('renders App component properly', () => {
		let aComponent = shallow(<App />)
		expect(aComponent).toHaveLength(1)
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