import * as functions from 'firebase-functions'
import {createRequestHandler as remix} from '@remix-run/express'

exports.remixServer = functions.https.onRequest(remix())
