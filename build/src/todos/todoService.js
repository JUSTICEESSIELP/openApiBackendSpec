"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoService = void 0;
class TodoService {
    get() {
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
    create(todoParams) {
        const pathParams = Object.assign({}, todoParams);
        return Object.assign({ id: Math.floor(Math.random() * 10000) }, pathParams);
    }
}
exports.TodoService = TodoService;
