import axios from 'axios';

export async function getTodo() {
    const res = await axios.get(
        'http://127.0.0.1:8000/api/'
    );
    return res.data;
}

export async function postTodo(data) {
    const res = await axios.post(
        'http://127.0.0.1:8000/api/',{text:data}
    );
    return res.data;
}

export async function delTodo(id) {
    const res = await axios.delete(
        'http://127.0.0.1:8000/api/'+id+'/'
    );
    return res.data;
}




export async function patchTodo(id, data) {
    
    const res = await axios.patch(
        'http://127.0.0.1:8000/api/'+id+'/', {done:data=!data}
    );
    return res.data;
}