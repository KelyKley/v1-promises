import store from './store';

export async function addTodo(){
    const converter = await fetch("data/earth-like-results.json");
    console.log("con",converter);

    const converJson = await converter.json();
    console.log("jsonn",converJson);

    const lista = await addList(converJson.results);
    console.log("lista",lista);
    store.setState({
        todos: lista,
        items : converJson
    });
}

function addList(lista){
    return Promise.all(lista.map(item => fetch(item).then(item => item.json())));
}