function main(someObj) {
    let { special } = someObj;
for (let { id, name, icon, description = 'Не определено' } of special) {
  console.log([{id, name, icon, description}])
}
}

export { main }