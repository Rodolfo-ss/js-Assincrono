const getTodos = (url, callback) => {
    const request = new XMLHttpRequest()

    request.addEventListener('readystatechange', () => {
        const isRequestOk = request.readyState === 4 && request.status === 200
        const requestNotOk = request.readyState === 4

        if (isRequestOk) {
            const data = JSON.parse(request.responseText)
            callback(null, data)
            return
        }

        if (requestNotOk) {
            console.log('Nao foi possivel obter os dados', null);
        }
    })


    request.open('GET', url)
    request.send()

}


getTodos('./json/todos.json', (error, data) => {
    console.log(data)
    getTodos('./json/todos-02.json', (error, data) => {
        console.log(data)
        getTodos('./json/todos-02.json', (error, data) => {
            console.log(data)
        })
    })
})