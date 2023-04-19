// mode = prod , dev,
const mode = "dev";

var apiUrl = "";
var serverUrl = "";

if (mode == "dev") {
    apiUrl = "http://localhost:4444/api";
    serverUrl = "http://localhost:4444/";
} else if (mode == "prod") {
    apiUrl = "";
    serverUrl = "";
}

const firebaseConfig = {
    "apiKey": "AIzaSyCxwCKhjiAtsHKFw_evDFC1Rk9L4Fy7090",
    "authDomain": "repairscard-dc511.firebaseapp.com",
    "projectId": "repairscard-dc511",
    "storageBucket": "repairscard-dc511.appspot.com",
    "messagingSenderId": "73503752671",
    "appId": "1:73503752671:web:ab0f6361417d4d7434c46a",
    "measurementId": "G-63RV6LH5DS"
};

var configObject = {
    apiUrl,
    serverUrl,
    firebaseConfig
};

export default configObject;  