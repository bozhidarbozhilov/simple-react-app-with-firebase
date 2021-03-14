import storage from "./storage";

const refreshAuthToken = function () {
    const userInfo = JSON.parse(storage.getData('userInfo'));
    const url = `https://securetoken.googleapis.com/v1/token?key=${userInfo.apiKey}`;
    const reqData = {};
    reqData.method = 'POST';
    reqData.headers = {};
    reqData.headers['Content-Type'] = 'application/x-www-form-urlencoded';

    reqData.body=`grant_type=refresh_token&refresh_token=${userInfo.stsTokenManager.refreshToken}`;
    fetch(url,reqData).then(res => res.json()).then(data => storage.saveData('authToken', data.access_token));
}

export default refreshAuthToken;