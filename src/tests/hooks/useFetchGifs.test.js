import { renderHook } from "@testing-library/react-hooks";
import { useFetchGifs } from "../../hooks/useFetchGifs"
import '@testing-library/jest-dom';

describe('Hook useFetchGifs test suite', () => {

    test('should return initial state', async () => {

        // Destructuring result field from response
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs('Mandalorian'));
        const { data, loading } = result.current;

        // This is needed to pass next test: ALL test should wait for the update
        await waitForNextUpdate();

        expect(data).toEqual([]);
        expect(loading).toBeTruthy();
    })

    test('should return an array of images and loading with false', async () => {
        
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs('Mandalorian'));
        await waitForNextUpdate();

        const { data, loading } = result.current;

        expect(data.length).toBe(10);
        expect(loading).toBeFalsy();


    })
    

})
