import React from 'react'
import { shallow } from 'enzyme';
import { GifGrid } from '../../components/GifGrid';
import '@testing-library/jest-dom';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

describe('GifGrid component test suite', () => {
    
    const category = 'Bob Esponja';

    test('should show GifGrid component properly', () => {
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });

        const wrapper = shallow(<GifGrid category={category}/>);

        expect(wrapper).toMatchSnapshot();
    })

    test('should show items when images are loaded via useFetchGifs', () => {
        // Mock data
        const gifs = [{
            id: 'ABC',
            title: 'Any GIF',
            url: 'http://localhost:3000/anygif.gif'

        }, {
            id: 'ABD',
            title: 'Any JPG',
            url: 'http://localhost:3000/anyjpg.jpg'

        }];

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });

        // Init component
        const wrapper = shallow(<GifGrid category={category}/>);

        // Expects
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifGridItems').length).toBe(gifs.length);

    })

    test('should show items when images are loaded via useFetchGifs without Snapshot', () => {
        // Mock data
        const gifs = [{
            id: 'ABC',
            title: 'Any GIF',
            url: 'http://localhost:3000/anygif.gif'

        }];

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });

        // Init component
        const wrapper = shallow(<GifGrid category={category}/>);

        // Expects
        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifGridItems').length).toBe(gifs.length);

    })
    
})
