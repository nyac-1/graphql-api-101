const GRAPHQL_URL = 'http://localhost:8080/';

async function fetchGreeting(){
    const response = await fetch(GRAPHQL_URL, {
        method: 'POST',
        headers:{
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            query: `
                query{
                    greeting
                }
            `
        })
    });

    const responseBody = await response.json();
    console.log(responseBody);
    return responseBody.data;
}

fetchGreeting().then((smth)=>{
    document.querySelector('h1').textContent = smth.greeting;
})