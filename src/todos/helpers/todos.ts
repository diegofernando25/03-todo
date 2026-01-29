import {Todo} from '@/generated/prisma/client';

export const updateTodo = async( id: string, complete: boolean ) : Promise<Todo> =>{
    
    
    const body = { complete };
    const todo = await fetch (`/api/todos/${ id }`,{
        method: 'PUT',
        body: JSON.stringify( body ),
        headers:{
            'Content-Type': 'aplication/json'
        }}).then ( res => res.json() );

    return todo;
     
}

export const createTodo = async( description: boolean ) : Promise<Todo> =>{
    
    
    const body = { description };

    const todo = await fetch (`/api/todos`,{
        method: 'POST',
        body: JSON.stringify( body ),
        headers:{
            'Content-Type': 'aplication/json'
        }}).then ( res => res.json() );

    return todo;
     
}

export const deleteTodo = async( ) : Promise<boolean> =>{
    
    const todo = await fetch (`/api/todos`,{
        method: 'DELETE',
        headers:{
            'Content-Type': 'aplication/json'
        }}).then ( res => res.json() );

    return true;
     
}