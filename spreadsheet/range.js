gapi.load('client', init);

function init() {
    gapi.client.init({
        apiKey: 'AIzaSyCF3CNHKZhaubHNnNzG9ft7hfPjrIj48jw',
        clientId: '50831315172-kktbd0irhpbthmjherpmqr5phfdqhvj4.apps.googleusercontent.com', 
        discoveryDocs: ['https://sheets.googleapis.com/$discovery/rest?version=v4'],
        scope: 'https://www.googleapis.com/auth/spreadsheets',
    }).then(function() {
        console.log('Google Sheets API client is initialized');
        document.getElementById('setRangeButton').addEventListener('click', setRange);
    });
}

//Функція використовує API Google Sheets для оновлення певного діапазону в 
//електронній таблиці (зазначеного «A1») новим значенням («New Value»).

function setRange() {
    gapi.client.sheets.spreadsheets.values.update({
        spreadsheetId: '1H4-9MrS5xprnpTUmV9po7Ih6d6gaYHp5mbAiTD69Xu4', 
        range: 'Hello World', 
        valueInputOption: 'RAW',
        values: [['Hello']], 
    }).then(function(response) {
        console.log('Range set:', response);
    });
}
