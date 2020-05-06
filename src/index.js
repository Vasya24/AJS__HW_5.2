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


let { special } = obj;

for (let { id, name, icon, description = 'Не определено' } of special) {
  console.log([{id, name, icon, description}])
}


export { obj, special }