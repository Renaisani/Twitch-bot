const axios = require('axios');
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
function onMessageHandler (channel, user, msg, self) {
  if (self) { return; } // Ignore messages from the bot

  // Remove whitespace from chat message
  const commandName = msg.trim();

  // Get the username of the message sender
  const senderName = user.username;

  // if (commandName.length >= 1) {
  //   console.log(user)
  // }

  // If the command is known, let's execute it
  if (commandName === '!dice') {
    const num = rollDice();
    client.say(channel, `You rolled a ${num}`);
    console.log(`* Executed ${commandName} command`);
  } 
  // HYPE Command
  if (commandName === '!hype') {
    client.say(channel, "renais9Hype renais9Hype renais9Hype renais9Hype renais9Hype HYPE IN CHAT!!! renais9Hype renais9Hype renais9Hype renais9Hype renais9Hype renais9Hype renais9Hype renais9Hype renais9Hype renais9Hype HYPE IN CHAT!!! renais9Hype renais9Hype renais9Hype renais9Hype renais9Hype renais9Hype renais9Hype");
    console.log(`* Executed ${commandName} command`);
  } 

  // BREAK Command
  if (commandName === '!break') {
    client.say(channel, "Everyone get up and stretch, hydrate, and any other relief you need! peepoPooPoo");
    console.log(`* Executed ${commandName} command`);
  }

  // RAID Command
  if (commandName === '!raid') {
    client.say(channel, ":D <3 :D RENAISANI RAID :D <3 :D RENAISANI RAID :D <3 :D RENAISANI RAID :D <3 :D RENAISANI RAID :D <3 :D RENAISANI RAID :D <3 :D RENAISANI RAID");
    console.log(`* Executed ${commandName} command`);
  }

  // CHAIR Command
  if (commandName === '!chair') {
    client.say(channel, "imani is currently contemplating life so he'll be right back pepeMeltdown");
    console.log(`* Executed ${commandName} command`);
  }

  // SOCIALS Command
  if (commandName === '!socials') {
    client.say(channel, "Follow the Renaisani story on social media! Instagram: https://www.instagram.com/renaisani/ Youtube: https://www.youtube.com/channel/UCCuGDNMxZ7m_C4fpxM5xqfQ/ Twitter: https://twitter.com/renaisani");
    console.log(`* Executed ${commandName} command`);
  }

  // UPTIME Command
  if (commandName === '!uptime') {

    // Replace 'YOUR_API_ENDPOINT' with the actual Twitch API endpoint you want to call
    const endpoint = 'https://beta.decapi.me/twitch/uptime/renaisani';

    // Make a GET request
    axios.get(endpoint)
    .then(response => {
      // Handle the response data here
      client.say(channel, response.data);
      console.log(`* Executed ${commandName} command`);
    })
    .catch(error => {
      // Handle errors here
      console.error('Axios error:', error);
    });
  }

  // LURK Command
  if (commandName === '!lurk') {
    client.say(channel, senderName + " is now watching this adventure from afar while they are on their own adventure!");
    console.log(`* Executed ${commandName} command`);
  }

  if (commandName === 'what time is it?') {
    client.say(channel, "ADVENTURE TIME!!!");
  }

  if (commandName === 'how old are you?') {
    client.say(channel, "I am 27!");
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