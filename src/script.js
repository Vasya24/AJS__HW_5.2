import { obj } from './index'


let { special } = obj;
function main() {
for (let { id, name, icon, description = 'Не определено' } of special) {
  console.log([{id, name, icon, description}])
}
}

export { main, obj }