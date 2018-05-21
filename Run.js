const Discord = require('discord.js');
const bot = new Discord.Client();
const GoogleImages = require('google-images');
const client = new GoogleImages('003811769180029091279:wzvaj2fip4m', 'AIzaSyDbdq3k8N2GqXpB2FvACeMZcxb0SzODojg');

var lionkingg;
var lionking = ["Scar","Simba","Mufasa","Nala","Shenzi","Sarabi","Rafiki","Timon","Zazu","Ed","Shenzi clan","Banzai","Great Kings of the past","Pumbaa","Sarafina","Pride Landers","Simba Pride","Mole","Kovu","Kiara","Zira","Vitani","Nuka","Outsiders","Kion","Fuli","Askari","Bunga","Ono","Beshte","Uncle Max","Ma","Timon colony","Iron Joe","Army of Scar","Sumu","Janja","Ushari","Makucha","Kiburi","Reirei","Shupavu","Nduli","Dogo","Mzingo","The Zimwi","Makucha leap","Nne","Cheezi","Chungu","Njano","Goigoi","Dogo brothers","Tamka","Mapigano","Mpishi","Mwoga","Mzingo's parliament","Tano","Nyeusi","Uroho","Mwevi","Mwizi","Kopa","Mohatu","Lion Guard","Kopa","Jasiri","Makini","Furaha","Dhahabu","Mzaha","Mtoto","Hadari","Badili","Kifaru","Herman","Ona",];


bot.login(process.env.TOKEN);

bot.on('message', async function (message){
    if(message.author.bot) return;
    switch(message.content.toLowerCase()){
        case "pong" : pong(message);
            break;

        case "f!fuli" : await sleep(500 + random(500,0)); 
                      message.channel.send('Ugh, baboons');
                      await sleep(1000 + random(500,0));
                      message.channel.send('Seriously?');
                      await sleep(1500 + random(500,0));
                      message.channel.send('Nowhere to run that I cannot run faster');
                      await sleep(1000 + random(500,0));
                      message.channel.send('Huwezi', {file: "https://cdn.discordapp.com/attachments/355274540248596480/356537450190995458/Fuli-eyes.gif"});
            break;
        
        case "f!foolishm" : message.channel.send('MacGuy has 100% foolishness');
            break;
	
	case "f!bothair" : message.channel.send('Oh bothair.');
            break;
		    
	case "f!ballast" : message.channel.send('Oh ballast.');
            break;
		    
	case "f!blast" : message.channel.send('How repetitive.');
            break;
	
		case "f!help" : message.channel.send({embed: {
			    color: 15255856,
			    author: {
			      name: bot.user.username,
			      icon_url: bot.user.avatarURL
			    },
			    title: "FuliBot Help commands",

			    description: "Type these commands to get some help on how to use FuliBot",
			    fields: [{
				name: "f!how are you",
				value: "respond : How Foolish smth is"
			      },
			      {
				name: "f!foolish",
				value: "respond : rate the foolishness of smth"
			      },
			      {
				name: "f!fuli f!beshte f!kion f!bunga f!ono",
				value: "say a sentence of the characters with delay and a gif"
			      },
			      {
				name: "pong",
				value: "respond with ping"
			      },
			      {
				name: "f!birthdaymac",
				value: "wish a happy birthday to Mac Guy"
			      },
			      {
				name: "f!say",
				value: "make the bot talk"
			      },
			      {
				name: "f!random lion king",
				value: "say a random name from the Lion king and Lion guard"
			      },
			      {
				name: "f!bothair",
				value: "says Oh bothair."
			      },
			      {
				name: "f!ballast",
				value: "says Oh ballast."
			      },
			      {
				name: "f!blast",
				value: "says How repetitive."
			      },
			      {
				name: "f!search smth",
				value: "google images random search smth"
			      },
			    ],
			    timestamp: new Date(),
			    footer: {
			      icon_url: bot.user.avatarURL,
			      text: "© FuliBot"
			    }
			  }
			});
	    break;
        
        
	case "f!kion" : await sleep(500 + random(500,0));
                        message.channel.send('Hevi Kabesa');
                        await sleep(500 + random(500,0));                   
                        message.channel.send('Till the Pridelands end...');
                        await sleep(500 + random(500,0));                    
                        message.channel.send('ROAR');
                        await sleep(500 + random(500,0));                    
                        message.channel.send('I dont want to end up like Scar.', {file: "https://cdn.discordapp.com/attachments/355274540248596480/356530551143792662/49dc73b2bf47bdacafc40f402b2781df7f4aead9_hq.gif"});
            break;
		    
        case "f!bunga" : await sleep(500 + random(500,0));
                         message.channel.send('Zuka Zama');
                         await sleep(500 + random(500,0));
                         message.channel.send('Unbungalievible');
                         await sleep(500 + random(500,0));
                         message.channel.send('Big B');
                         await sleep(500 + random(500,0));
                         message.channel.send('Galleallegoes', {file: "https://cdn.discordapp.com/attachments/355274540248596480/356530469266915330/Bunga-hand.gif"});
            break;
		    
        case "f!ono" :  await sleep(500 + random(500,0));
                        message.channel.send('Kinda common knolege really');
                        await sleep(500 + random(500,0));
                        message.channel.send('Hapana!');
                        await sleep(500 + random(500,0));
                        message.channel.send('Everyone, everyone.');
                        await sleep(500 + random(500,0));
                        message.channel.send('Affirmitive!', {file: "https://cdn.discordapp.com/attachments/355274540248596480/356530809525633025/tumblr_o527fcWzvB1v9ez4qo1_1280.gif"});
            break;
        case "f!beshte" : await sleep(500 + random(500,0));
                          message.channel.send('Twindke Kiboko');
                          await sleep(500 + random(500,0));
                          message.channel.send('Pua');
                          await sleep(500 + random(500,0));
                          message.channel.send('Little B', {file: "https://cdn.discordapp.com/attachments/355274540248596480/356530695637565440/Beshte-jump.gif"});
            break;
            
            
            
        case "f!birthdaymac" : message.channel.send('**HAPPY FOOLISH BIRTHDAY Mac Guy !!!!!!!**' , {file: "https://vignette2.wikia.nocookie.net/lionguard/images/5/5b/Fuli-splash.gif"});
            break;
		    
	case "f!random lion king" : lionkingg = Math.floor(Math.random() * (lionking.length - 0) + 0);  
		        message.channel.send(lionking[lionkingg]);
            break;
            
        }
	
	if (message.content.startsWith("f!kick") && ( message.member.roles.find("name", "Lion Guard"))) {
		// Easy way to get member object though mentions.
		var member= message.mentions.members.first();
		if(!(member.roles.find("name", "Lion Guard"))){
			// Kick
			member.kick().then((member) => {
			    // Successmessage
			    message.channel.send(":wave: " + member.displayName + " has been successfully kicked ");
			}).catch(() => {
			     // Failmessage
			    message.channel.send("I have no Admin perms");
			});
		} else {
			message.channel.send("Cannot kick an admin!");
		}
			
	}
        
	if (message.content.toLowerCase().startsWith('f!how are you ')){
            
            var reason = message.content.substring(14, message.content.length);
            message.channel.send('How Foolish ' + reason + ' is ?');
            
	}
        if (message.content.toLowerCase().startsWith('f!foolish ')){
            
            var reason = message.content.substring(10, message.content.length);
            message.channel.send(  reason + ' has ' +  Math.floor(random(100,0)) + '% foolishness'); 
            
	}
	if (message.content.toLowerCase().startsWith('f!search ')){
            
            var reason = message.content.substring(9, message.content.length);
	    const images = await client.search(reason);
	    message.channel.send(images[Math.floor(random(images.length,0))].url);
	}
	if(message.content.toLowerCase().startsWith('f!say')) {
	    var reason = message.content.substring(5, message.content.length);
	    message.delete(); 
	    message.channel.send(reason);
	}
      
       
			
});


function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
function pong(message){
    message.channel.send('ping');
}
function random(max,min) {
    return Math.random() * ( max - min );
}
