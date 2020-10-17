import React from 'react'
import { shallow } from "enzyme";
import '@testing-library/jest-dom';
import { GifGridItems } from "../../components/GifGridItems";

describe('GifGridItems test suite', () => {
    test('should show GifGridItems component properly', () => {
        const data = {
            data: [],
            loading: true
        };
        // const wrapper = shallow(<GifGridItems key={1} {...data} />);
        const wrapper = shallow(<GifGridItems />);

        expect(wrapper).toMatchSnapshot();
    })
    
})
