import { main } from '../script'


test('Does it works?', () => {
    const obj = {
        name: 'Лучник',
        type: 'Bowman',
        health: 50,
        level: 3,
        attack: 40,
        defence: 10,
        special: [
          {
            id: 8,
            name: 'Двойной выстрел',
            icon: 'http://...',
            description: 'Двойной выстрел наносит двойной урон'
          }, 
          {
            id: 9,
            name: 'Нокаутирующий удар',
            icon: 'http://...'
          },
          {
            id: 10,
            name: 'Фаербол',
            icon: 'http://...'
          }
        ]	
      }

    main(obj)
    expect(Object.entries(obj).length).toBeGreaterThan(2)
})