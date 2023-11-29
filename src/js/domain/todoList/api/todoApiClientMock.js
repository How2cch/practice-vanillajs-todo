import { getRandomInt } from "../../../utils/helper";

const mockApiResponse = {
  getData: {
    error: {
      response: {
        status: 500,
        massage: 'Internal Server Error',
      }
    }
  },
  save: {
    error: {
      response: {
        status: 500,
        massage: 'Internal Server Error',
      }
    }
  }
}

export const apiClientMock = {
  getData: () => {
    return new Promise(async (resolve, reject) => {
      await apiDelayTimeMock();
      if (apiStatusMock()) {
        const data = JSON.parse(window.localStorage.getItem('todoList'));
        return data ? resolve({ data }) : resolve([]);
      }else {
        reject(mockApiResponse.getData.error);
      }
    });
  },
  save: (data) => {
    return new Promise(async (resolve, reject) => {
      await apiDelayTimeMock();
      if (apiStatusMock()) {
        window.localStorage.setItem('todoList', JSON.stringify(data));
        return resolve();
      }else {
        reject(mockApiResponse.save.error);
      }
    });
  },
} 

const apiDelayTimeMock = () => {
  return new Promise(async (resolve) => {
    const delayTime = getRandomInt(100, 500);
    await delay(delayTime);
    resolve();
  });
}

const apiStatusMock = () => {
    const probability = getRandomInt(0, 100);
    const status = probability < 20 ? false : true;
    return status ? 'success' : 'error';
}