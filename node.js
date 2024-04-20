const fs = require('fs');
const readline = require('readline');
const { google } = require('googleapis');

const TOKEN_PATH = 'token.json';
const SHEET_ID = '<YOUR_SHEET_ID>';

fs.readFile('credentials.json', (err, content) => {
    if (err) return console.log('Error loading client secret file:', err);

    authorize(JSON.parse(content), writeData);
});

function authorize(credentials, callback) {
    const { client_secret, client_id, redirect_uris } = credentials.installed;
    const oAuth2Client = new google.auth.OAuth2(client_id, client_secret, redirect_uris[0]);

    fs.readFile(TOKEN_PATH, (err, token) => {
        if (err) return getNewToken(oAuth2Client, callback);
        oAuth2Client.setCredentials(JSON.parse(token));
        callback(oAuth2Client);
    });
}

function getNewToken(oAuth2Client, callback) {
    const authUrl = oAuth2Client.generateAuthUrl({
        access_type: 'offline',
        scope: ['https://www.googleapis.com/auth/spreadsheets'],
    });
    console.log('Authorize this app by visiting this url:', authUrl);

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    rl.question('Enter the code from that page here: ', (code) => {
        rl.close();
        oAuth2Client.getToken(code, (err, token) => {
            if (err) return console.error('Error retrieving access token', err);
            oAuth2Client.setCredentials(token);
            fs.writeFile(TOKEN_PATH, JSON.stringify(token), (err) => {
                if (err) return console.error(err);
                console.log('Token stored to', TOKEN_PATH);
            });
            callback(oAuth2Client);
        });
    });
}

function writeData(auth) {
    const sheets = google.sheets({ version: 'v4', auth });
    const values = [['User', 'Spin Result', 'Prize']];

    const resource = {
        values,
    };

    sheets.spreadsheets.values.append({
        spreadsheetId: SHEET_ID,
        range: 'Sheet1!A1',
        valueInputOption: 'RAW',
        resource,
    }, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            console.log('%d cells appended.', result.data.updates.updatedCells);
        }
    });
}
