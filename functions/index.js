const functions = require('firebase-functions');
const admin = require('firebase-admin')
var serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://fir-test-a9b42.firebaseio.com"
});


const scraping = require('./scraping');

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

exports.helloWorld = functions.https.onRequest((request, response) => {
    response.send("Hello from Firebase!");
});

exports.getExchangeRate = functions.https.onRequest((request, response) => {
    response.send(scraping);
});

exports.sendRealDB = functions.https.onRequest((req, res) => {
    // Get a database reference to our blog
    var db = admin.database();
    var ref = db.ref("scraping");

    var currentTime = new Date().getTime();

    var scrapingRef = ref.child(currentTime);
    scrapingRef.set({
        value: "123"
    });

    res.send("Insert Database!")
})
