const Discord = require('discord.js');
const client = new Discord.Client();
client.commands = new Discord.Collection();
const
 {
    prefix,
    token,
    bot_age,
    bot_info
} = require('./config.json');

client.login(token);

client.on('ready', () => 
{
    console.log(bot_info);
    channel = client.channels.cache.get('799415463884357676');

    var bossClass = new Array('Slayer1', 'slayer2', 'Wilderness1', 'Wilderness2', 'Wilderness3', 'Skilling', 'Raids', 'Minigame', 'Other1', 'Other2', 'God Wars Dungeon', 'Money', 'Aids')

    bossClass[0] = ['Grotesque Guardians', ' Abyssal Sire', ' Cerberus'];
    bossClass[1] = ['Thermonuclear Smoke Devil', ' Alchemical Hydra', ' Kraken'];
    bossClass[2] = ['Chaos Fanatic', ' Crazy Archaeologist', ' Scorpia'];
    bossClass[3] = ['King Black Dragon', ' Chaos Elemental', " Vet'ion"];
    bossClass[4] = ['Venenatis', ' Callisto'];
    bossClass[5] = ['zalcano', ' Windertodt'];
    bossClass[6] = ['Chambers of Xeric', ' Theatre of Blood'];
    bossClass[7] = ['Barrows'];
    bossClass[8] = ['Giant Mole', ' Dagannoth Kings', ' The Gauntlet'];
    bossClass[9] = ['Deranged Archaeologist', ' Sarachnis', ' Kalphite Queen'];
    bossClass[10] = ["Kree'arra", ' Commander Zilyana', " K'ril Tsutsaroth", ' General Graardor'];
    bossClass[11] = ['Zulrah', ' Vorkath'];
    bossClass[12] = ['Corporal Beast', ' Nightmare'];

    var i = 1;
    function myLoop(){
        setTimeout(function() {
            i++;
            if(i<Infinity) {
                myLoop();
                let random = bossClass[Math.floor(Math.random() * bossClass.length)];
                
                channel.send('The boss of the week is: ' + random);
            }
        },5000)
    }
    myLoop(); 

});

