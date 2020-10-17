import {getGifs} from '../../helpers/GetGif';

describe('Fetch getGifs test suite', () => {

    test('should fetch 10 elements', async () => {
        const gifs = await getGifs('One Punch');

        expect(gifs.length).toBe(10);
    })

    test('should fetch 0 elements if category is empty', async () => {
        const gifs = await getGifs('');

        expect(gifs.length).toBe(0);
    })
    
})