import { Todo } from "./todo";

export type TodoServiceParams  = Pick<Todo, 'title'|'description'>
export const todoService = (params:TodoServiceParams) => {
    
};
