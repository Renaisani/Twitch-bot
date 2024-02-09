const tmi = require('tmi.js');
require('dotenv').config();

const oauthToken = process.env.OAUTH_TOKEN;

// Define configuration options
const opts = {
  identity: {
    username: 'Renaisani',
    password: oauthToken
  },
  channels: [
    'Renaisani'
  ]
};

// Create a client with our options
const client = new tmi.client(opts);

// Register our event handlers (defined below)
client.on('message', onMessageHandler);
client.on('connected', onConnectedHandler);

// Connect to Twitch:
client.connect();

// Called every time a message comes in
function onMessageHandler (target, context, msg, self) {
  if (self) { return; } // Ignore messages from the bot

  // Remove whitespace from chat message
  const commandName = msg.trim();

  // If the command is known, let's execute it
  if (commandName === '!dice') {
    const num = rollDice();
    client.say(target, `You rolled a ${num}`);
    console.log(`* Executed ${commandName} command`);
  } 
  // HYPE Command
  if (commandName === '!hype') {
    client.say(target, "renais9Hype renais9Hype renais9Hype renais9Hype renais9Hype HYPE IN CHAT!!! renais9Hype renais9Hype renais9Hype renais9Hype renais9Hype renais9Hype renais9Hype renais9Hype renais9Hype renais9Hype HYPE IN CHAT!!! renais9Hype renais9Hype renais9Hype renais9Hype renais9Hype renais9Hype renais9Hype");
    console.log(`* Executed ${commandName} command`);
  } 

  // BREAK Command
  if (commandName === '!break') {
    client.say(target, "Everyone get up and stretch, hydrate, and any other relief you need! peepoPooPoo");
    console.log(`* Executed ${commandName} command`);
  }

  // RAID Command
  if (commandName === '!raid') {
    client.say(target, ":D <3 :D RENAISANI RAID :D <3 :D RENAISANI RAID :D <3 :D RENAISANI RAID :D <3 :D RENAISANI RAID :D <3 :D RENAISANI RAID :D <3 :D RENAISANI RAID");
    console.log(`* Executed ${commandName} command`);
  }

  // CHAIR Command
  if (commandName === '!chair') {
    client.say(target, "imani is currently contemplating life so he'll be right back pepeMeltdown");
    console.log(`* Executed ${commandName} command`);
  }

  if (commandName === 'what time is it?') {
    client.say(target, "ADVENTURE TIME!!!");
  }

  if (commandName === 'how old are you?') {
    client.say(target, "I am 27!");
  }
}

// Function called when the "dice" command is issued
function rollDice () {
  const sides = 6;
  return Math.floor(Math.random() * sides) + 1;
}

// Called every time the bot connects to Twitch chat
function onConnectedHandler (addr, port) {
  console.log(`* Connected to ${addr}:${port}`);
}