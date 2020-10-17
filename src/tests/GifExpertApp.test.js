import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import GifExpertApp from '../GifExpertApp'; // without {} becauseof 'export default'


describe('GifExpertApp component test suite', () => {
    
    test('should show GifExpertApp properly', () => {
    
        const wrapper = shallow(<GifExpertApp />);
        expect(wrapper).toMatchSnapshot();
    })

    test('should show GifExpertApp with custo categories properly', () => {

        const categories = ['Mandalorian', 'Death Star']
    
        const wrapper = shallow(<GifExpertApp defaultCategories={categories}/>);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(categories.length);
    })
    
})
