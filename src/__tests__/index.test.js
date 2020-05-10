import { obj } from '../index';
import { main } from '../script'


test('Does it works?', () => {
    expect(Object.entries(obj).length).toBeGreaterThan(2)
})

// test('If it works', () => {
//     expect(typeof obj.special[0].description != 'undefined').toBe(true)
// })