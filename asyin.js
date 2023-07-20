fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => {
        SharedWorker(data)
    })
function SharedWorker(data){
    for (let index = 0; index < data.length; index++) {
        const element = data[index];
        const {name,email,id,website} = element
        console.log(name,email,id,website)
        
    }
}
