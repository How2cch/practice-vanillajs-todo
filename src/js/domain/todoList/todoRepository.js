import { apiMiddleware } from "./middleware/apiUtility";

export class TodoRepository {
  constructor(apiUtility) {
    this._apiUtility = apiUtility;
  }

  async getData() {
    const response = await apiMiddleware(
      async () => await this._apiUtility.getData()
    );
    return response;
  }

  async save(payload) {
    const response = await apiMiddleware(
      async () => await this._apiUtility.save(payload)
    );
    return response;
  }
}
