import firebase from "firebase/app";
import constants from "./constants";
import storage from "./storage";

const makeRequest = async function (method, collection, data) {
    const userInfo = JSON.parse(storage.getData('userInfo'))
    const authToken = userInfo.stsTokenManager.accessToken;

    if(authToken){
        const reqData = {
            method: method,
        }
        reqData.headers = {};
        if(data) {
            reqData.headers['Content-Type'] = 'application/json';
            data.created=new Date();
            data.author = userInfo.displayName;
            data.authorId = userInfo.uid;
            reqData.body = JSON.stringify(data);
        }
        let url = constants.BASE_URL.replace('%s', collection).replace('%s',authToken);
        return fetch(url, reqData);
    }

}
const requester = {
    get:function (collection, data) {
        return makeRequest('GET', collection, data);
    },
    update: function (collection, data){
        return makeRequest('PATCH', collection, data)
    },
    create: function (collection, data) {
        return makeRequest('POST',collection, data);
    }
}
export default requester;


