import { obj } from './index'

function main() {
let { special } = obj;

for (let { id, name, icon, description = 'Не определено' } of special) {
  console.log([{id, name, icon, description}])
}
}

export { main }