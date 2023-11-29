import { getApiUtility } from "./utils/apiUtility";
import { TodoRepository } from "./todoRepository";

const apiUtility = getApiUtility(import.meta.env.DEV);

export const todoRepository = new TodoRepository(apiUtility);