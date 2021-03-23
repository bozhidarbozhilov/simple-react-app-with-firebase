import storage from "./storage";

const refreshAuthToken = async function () {
    const userInfo = JSON.parse(storage.getData('userInfo'));
    const url = `https://securetoken.googleapis.com/v1/token?key=${userInfo.apiKey}`;
    const reqData = {};
    reqData.method = 'POST';
    reqData.headers = {};
    reqData.headers['Content-Type'] = 'application/x-www-form-urlencoded';

    reqData.body=`grant_type=refresh_token&refresh_token=${userInfo.stsTokenManager.refreshToken}`;

    const response = await fetch(url,reqData);
    const resJson = await response.json();
    const token = await resJson.access_token;
    return token;
}

export default refreshAuthToken;