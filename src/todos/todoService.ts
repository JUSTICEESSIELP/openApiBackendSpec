import { Todo } from "./todo";

export type TodoServiceParams = Pick<
  Todo,
  "title" | "description" | "completed"
>;

export class TodoService {
  public get(): Todo[] {
    return [
      {
        id: 1,
        title: "hi first task",
        description: "I am lucky to be doing this as my first task",
        completed: false,
      },
      {
        id: 2,
        title: "Work with Defi Africa",
        description: "I believe its to teach people about the crypto space",
        completed: false,
      },
    ];
  }

  public create(todoParams: TodoServiceParams): Todo {
    const pathParams = { ...todoParams };

    return {
      id: Math.floor(Math.random() * 10000), // Random
      ...pathParams,
    };
  }
}
