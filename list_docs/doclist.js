const CLIENT_ID = '50831315172-kktbd0irhpbthmjherpmqr5phfdqhvj4.apps.googleusercontent.com'; 
const API_KEY = 'AIzaSyCF3CNHKZhaubHNnNzG9ft7hfPjrIj48jw'; 
const DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/drive/v3/rest"];
const SCOPES = 'https://www.googleapis.com/auth/drive.file';

let authorizeButton = document.getElementById('authorizeButton');
let fileList = document.getElementById('fileList');

//Функція завантажує клієнт Google API і налаштовує аутентифікацію
function handleClientLoad() {
    gapi.load('client:auth2', initClient);
}

function initClient() {
    gapi.client.init({
        apiKey: API_KEY,
        clientId: CLIENT_ID,
        discoveryDocs: DISCOVERY_DOCS,
        scope: SCOPES
    }).then(function () {
        authorizeButton.onclick = handleAuthClick;
    });
}

//Функція ініціює процес входу в Google
function handleAuthClick() {
    gapi.auth2.getAuthInstance().signIn().then(listFiles);
}

function listFiles() {
    //Функція надсилає запит до Google Drive API із зазначенням ідентифікатора папки
    //та полів для отримання (у цьому випадку ідентифікатора та назви документа);

    gapi.client.drive.files.list({
        //шукає файли, для яких указана папка є батьківською;
        'q': "1hFd4XI2qV9cPm2OH5Okx_MIgX9tSWTgP", 
        'fields': 'files(id, name)'
    }).then(function(response) {

        //files бере масив файлових об’єктів із відповіді API
        let files = response.result.files;
        fileList.innerHTML = '';
        
        //Ця умова перевіряє наявність у масиві файлів
        if (files && files.length > 0) {
            files.forEach(function(file) {
                let listItem = document.createElement('li');
                listItem.textContent = file.name;
                fileList.appendChild(listItem);
            });
        } else {
            fileList.innerHTML = '<p>No files found in the folder.</p>';
        }
    });
}

gapi.load('client:auth2', handleClientLoad);

