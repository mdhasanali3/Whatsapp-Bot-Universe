import {
    Configuration,
    OpenAIApi
} from "openai";
import axios from "axios";
// import fs from 'fs';
// import path from 'path';
// const docprocess = require('../frm');
// const translateMessage = require('../translate');

var config = require('./config');

const configuration = new Configuration(
    {apiKey: process.env.OPENAI_API_KEY,});

const openAI = new OpenAIApi(configuration);
  
export default async function handler(req, res) {
    const MessagingResponse = require('twilio').twiml.MessagingResponse;
    var messageResponse = new MessagingResponse();
    const sentMessage = req.body.Body || '';
    
    var to = req.body.From; //phone number, eg: whatsapp:+8801521428707
    console.log(to,"  ####### number")
    to = to.replace("whatsapp:+","")
    
    console.log(to,"replaced to ",req.body.Body,"i am request #####")
    try {
    let replyToBeSent = "";
    const response = await axios.post(`${config.bot_api}`, {
        prompt: req.body.Body
    })
    let replyToBeSen = response.data.medibot//.output
    // console.log(slot_name, slot_value)
    replyToBeSent= String(replyToBeSen)
    console.log(replyToBeSent, "##### replyToBeSent  string",replyToBeSen)//,response)


    messageResponse.message(replyToBeSent);//(translatedReply);
    // send response
    res.writeHead(200, {
        'Content-Type': 'text/xml'
    });
    res.end(messageResponse.toString());
} catch (error) {
        console.error('Error:', error.message);
      }
}