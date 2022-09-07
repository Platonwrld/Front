const delay = ms => {
    return new Promise(resolve => setTimeout(() => resolve(), ms))
}

delay(2000).then(() => console.log('2 sec'))

const url = 'https://jsonplaceholder.typicode.com/todos/1'

function fetchToDo() {
    return delay(2000)
    .then(() => fetch(url))
    .then(response => response.json())
}

fetchToDo()
.then(data => {
    console.log('Data:', data)
})
.catch(e => console.error(e))