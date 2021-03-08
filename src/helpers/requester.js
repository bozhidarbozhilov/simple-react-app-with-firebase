import firebase from "firebase/app";
import constants from "./constants";
import firebaseAuth from "./firebase-auth";
import storage from "./storage";

const makeRequest = async function (method, collection, data) {
    const authToken = JSON.parse(storage.getData('userInfo')).stsTokenManager.accessToken;

    if(authToken){
        const reqData = {
            method: method,
        }
        reqData.headers = {};
        if(data) {
            reqData.headers['Content-Type'] = 'application/json';
            reqData.body = JSON.stringify(data);
        }
        let url = constants.BASE_URL.replace('%s', collection).replace('%s',authToken);
        console.log(url);
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


