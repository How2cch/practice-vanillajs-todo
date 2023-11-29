import { returnCodeType } from "../../constant/returnCodeType";

export const apiMiddleware = (action) => {
  return new Promise(async (resolve) => {
    try {
      const { data } = await action();
      resolve({
        data,
        returnCode: returnCodeType.SUCCESS,
        message: "Success",
      });
    } catch (error) {
      let returnCode;
      if (error.response.status === 401) returnCode = returnCodeType.INPUT_ERROR;
      if (error.response.status === 403) returnCode = returnCodeType.UNAUTHORIZED;
      returnCode = returnCodeType.SERVER_ERROR;
      resolve({
        returnCode,
        message: error.message,
      });
    }
  });
};
