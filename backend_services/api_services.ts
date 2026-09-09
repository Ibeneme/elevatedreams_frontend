import { $http } from "./axios";

export const sessionKey = "token";

export const get = async (url: string, params?: any) => {
  var token = validateSession();
  $http.defaults.headers.common["authorization"] = "bearer " + token;

  return new Promise((resolve, reject) => {
    $http
      .get(url, (params = { params }))
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const post = (payload: any) => {
  // var { token } = validateSession();
  // $http.defaults.headers.common['authorization'] = 'bearer ' + token;

  return new Promise((resolve, reject) => {
    $http
      .post(payload.url, payload.req)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const authPost = (payload: any) => {
  var token = validateSession();
  $http.defaults.headers.common["authorization"] = "bearer " + token;

  return new Promise((resolve, reject) => {
    $http
      .post(payload.url, payload.req)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const authUpdate = (payload: any) => {
  var token = validateSession();
  $http.defaults.headers.common["authorization"] = "bearer " + token;

  return new Promise((resolve, reject) => {
    $http
      .put(payload.url, payload.req)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const authPatch = (payload: any) => {
  var token = validateSession();
  $http.defaults.headers.common["authorization"] = "bearer " + token;

  return new Promise((resolve, reject) => {
    $http
      .put(payload.url, payload.req)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const validateSession = () => {
  let val = null;

  let seassionVal = window.sessionStorage.getItem(sessionKey);
  if (seassionVal !== null) {
    let sessionObj = JSON.parse(seassionVal);
    let expiredAt = new Date(sessionObj.expiredAt);
    if (expiredAt > new Date()) {
      // Validate expiry date.
      val = sessionObj.value;
    } else {
      sessionStorage.removeItem(sessionKey);
      sessionStorage.removeItem("user");
    }
  }
  return val;
};
