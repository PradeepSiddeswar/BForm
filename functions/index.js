/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const fuctions = require('firebase-functions');
const express = require("express")

const app = express()
app.get("/", (req, res) => {
    res.status(200).send({ data:"Form Api"})
})
exports.app = fuctions.https.onRequest(app)
