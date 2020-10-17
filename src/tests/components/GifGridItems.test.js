import React from 'react'
import { shallow } from "enzyme";
import '@testing-library/jest-dom';
import { GifGridItems } from "../../components/GifGridItems";

describe('GifGridItems test suite', () => {

    const title = 'Panda ball!';
    const url = 'https://media1.giphy.com/media/lcySndwSDLxC4eOU86/giphy.gif?cid=5af68a6akfrj0nvj652tera4juc697ktqhgu1oqp9znd2rkt&rid=giphy.gif';
    
    const wrapper = shallow(<GifGridItems key={1} { ...{ title, url }} />);

    test('should show GifGridItems component properly', () => {

        expect(wrapper).toMatchSnapshot();
    })

    test('should have the title text', () => {
        
        const p = wrapper.find('p');
        
        expect(p.text().trim()).toBe(title);
    })

    test('should have the image url and the alt in props', () => {
        
        const img = wrapper.find('img');
        
        expect(img.props().src).toBe(url);
        expect(img.prop('alt')).toBe(title);
    })
    
    test('should have animate__fadeIn', () => {
        
        const div = wrapper.find('div');
        
        expect(div.hasClass('animate__fadeIn')).toBe(true);
    })
    
    
    
    
})
