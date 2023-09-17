// src/users/usersController.ts
import {
  Body,
  Controller,
  Get,
  Path,
  Post,
  Query,
  Route,
  SuccessResponse,
} from "tsoa";
import { Todo } from "./todo";
import { TodoService, TodoServiceParams } from "./todoService";

@Route("todo")
export class TodoController extends Controller {
  @Get('/')
  public async getAllUsers(): Promise<Todo[]> {
    return new TodoService().get();
  }

  @SuccessResponse("201", "Created") // Custom success response
  @Post()
  public async createTask(
    @Body() requestBody: TodoServiceParams
  ): Promise<Todo> {
    this.setStatus(201); // set return status 201
    const newTask = new TodoService().create(requestBody);
    return newTask;
  }
}
