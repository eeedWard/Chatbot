'use strict';
 
const functions = require('firebase-functions');
const {WebhookClient} = require('dialogflow-fulfillment');
const {Card, Suggestion} = require('dialogflow-fulfillment');
 
process.env.DEBUG = 'dialogflow:debug'; // enables lib debugging statements
 
exports.dialogflowFirebaseFulfillment = functions.https.onRequest((request, response) => {
  const agent = new WebhookClient({ request, response });
  console.log('Dialogflow Request headers: ' + JSON.stringify(request.headers));
  console.log('Dialogflow Request body: ' + JSON.stringify(request.body));
 
  function welcome(agent) {
    agent.add(`Welcome to my agent!`);
  }
 
  function fallback(agent) {
    agent.add(`I didn't understand`);
    agent.add(`I'm sorry, can you try again?`);
  }


  function ReqHandler(agent) {

    const degree_type = agent.parameters.degree;
    const endingSentence = `\nAnyway, good luck with your ${degree_type} application!!`

    if (degree_type == "Master") {
      agent.add("Our Master degrees are very competitive. You need good grades, reference letters and a strong application" + endingSentence);
    }

    if (degree_type == "Bachelor") {
      agent.add("You just need an HighSchool diploma to be admitted to a Bachelor course" + endingSentence);
    }

    if (degree_type == "PhD") {
      agent.add("For PhD admission, we suggest to directly get in contact with the Professor of reference" + endingSentence);
    }
  }

  let intentMap = new Map();
  intentMap.set('Default Welcome Intent', welcome);
  intentMap.set('Default Fallback Intent', fallback);
  intentMap.set('Requirements', ReqHandler);
  agent.handleRequest(intentMap);
});