import { shallow } from 'enzyme'
import React from 'react'
import { AddCategory } from '../../components/AddCategory'
import '@testing-library/jest-dom';

describe('AddCategory component test suit', () => {
    
    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories={setCategories}/>);
    
    beforeEach( () => {
        jest.clearAllMocks(); 
        // Initialize wrapper, e.g. to clean inputValue after text box test
        wrapper = shallow(<AddCategory setCategories={setCategories}/>);

    })

    test('should show AddCategory component properly', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('should change text box', () => {
        const input = wrapper.find('input');
        const value ='Hello world!';
        const paragraphPrefix = 'GifExpertApp: ';

        input.simulate('change', {target: {value}});

        expect(wrapper.find('p').text().trim()).toBe(paragraphPrefix+value);
    })
    
    test('should NOT post the form on submit', () => {
        wrapper.find('form').simulate('submit', {
            preventDefault(){}
        });

        expect(setCategories).not.toHaveBeenCalled();
    })

    test('should call setCategories and clean text box', () => {
        const value = 'Hello world!';

        wrapper.find('input').simulate('change', {target: {value}});

        wrapper.find('form').simulate('submit', {
            preventDefault(){}
        });

        expect(setCategories).toHaveBeenCalledTimes(1);
        expect(setCategories).toHaveBeenLastCalledWith(expect.any(Function));
        expect(wrapper.find('input').text().trim()).toBe('');
    })
    
    
})
