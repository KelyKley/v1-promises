import store from './store';

//addTodo()
export async function addTodo (){
    const converter = await fetch("data/eart-like-results.json");
    const converJson = await converter.json();
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