import { obj, special } from '../index'


test('If it works', () => {
    expect(typeof obj.special[0].description != 'undefined').toBe(true)
})