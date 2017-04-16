var mapTable = [
    {ID: 300, file: "construct", name: "construct", desc:"construct"},
    {ID: 330, file: "isolation", name: "isolation", desc:"isolation"},
    {ID: 350, file: "salvation", name: "salvation", desc:"salvation"},
    {ID: 360, file: "snowbound", name: "snowbound", desc:"snowbound"},
    {ID: 440, file: "docks", name: "docks", desc:"docks"},
    {ID: 470, file: "sidewinder", name: "sidewinder", desc:"sidewinder"},
    {ID: 480, file: "warehouse", name: "warehouse", desc:"warehouse"},
    {ID: 490, file: "descent", name: "descent", desc:"descent"},
    {ID: 500, file: "spacecamp", name: "spacecamp", desc:"spacecamp"},
    {ID: 520, file: "lockout", name: "lockout", desc:"lockout"},
    {ID: 580, file: "armory", name: "armory", desc:"armory"},
    {ID: 590, file: "ghosttown", name: "ghosttown", desc:"ghosttown"},
    {ID: 600, file: "chillout", name: "chillout", desc:"chillout"},
    {ID: 720, file: "midship", name: "midship", desc:"midship"},
    {ID: 730, file: "sandbox", name: "sandbox", desc:"sandbox"},
    {ID: 740, file: "fortress", name: "fortress", desc:"fortress"},
    {ID: 410, file: "bunkerworld", name: "Standoff", desc: "Once, nearby telescopes listened for a message from the stars. Now, these silos contain our prepared response. <br><br>4-12 players."},
    {ID: 380, file: "chill", name: "Narrows", desc: "Without cooling systems such as these, excess heat from the Ark's forges would render the construct uninhabitable. <br><br>2-8 players."},
    {ID: 390, file: "cyberdyne", name: "The Pit", desc: "Software simulations are held in contempt by the veteran instructors who run these training facilities. <br><br>4-10 players."},
    {ID: 310, file: "deadlock", name: "High Ground", desc: "A relic of older conflicts, this base was reactivated after the New Mombasa Slipspace Event. <br><br>4-12 players."},
    {ID: 320, file: "guardian", name: "Guardian", desc: "Millennia of tending has produced trees as ancient as the Forerunner structures they have grown around. <br><br>2-6 players."},
    {ID: 340, file: "riverworld", name: "Valhalla", desc: "The crew of V-398 barely survived their unplanned landing in this gorge...this curious gorge. <br><br>6-16 players."},
    {ID: 400, file: "shrine", name: "Sandtrap", desc: "Although the Brute occupiers have been driven from this ancient structure, they left plenty to remember them by. <br><br>6-16 players"},
    {ID: 30, file: "zanzibar", name: "Last Resort", desc: "Remote industrial sites like this one are routinely requisitioned and used as part of Spartan training exercises. <br><br>4-12 players."},
    {ID: 703, file: "s3d_edge", name: "Edge", desc: "The remote frontier world of Partition has provided this ancient databank with the safety of seclusion. <br><br>6-16 players."},
    {ID: 705, file: "s3d_avalanche", name: "Diamondback", desc: "Hot winds blow over what should be a dead moon. A reminder of the power Forerunners once wielded. <br><br>6-16 players."},
    {ID: 700, file: "s3d_reactor", name: "Reactor", desc: "Being constructed just prior to the Invasion, its builders had to evacuate before it was completed. <br><br>6-16 players."},
    {ID: 31, file: "s3d_turf", name: "Icebox", desc: "Downtown Tyumen's Precinct 13 offers an ideal context for urban combat training. <br><br>4-10 players."},
    {ID: 3005, file: "005_intro", name: "005_intro", desc:"005_intro"},
    {ID: 3010, file: "010_jungle", name: "010_jungle", desc:"010_jungle"},
    {ID: 3020, file: "020_base", name: "020_base", desc:"020_base"},
    {ID: 3030, file: "030_outskirts", name: "030_outskirts", desc:"030_outskirts"},
    {ID: 3040, file: "040_voi", name: "040_voi", desc:"040_voi"},
    {ID: 3050, file: "050_floodvoi", name: "050_floodvoi", desc:"050_floodvoi"},
    {ID: 3070, file: "070_waste", name: "070_waste", desc:"070_waste"},
    {ID: 3100, file: "100_citadel", name: "100_citadel", desc:"100_citadel"},
    {ID: 3110, file: "110_hc", name: "110_hc", desc:"110_hc"},
    {ID: 3120, file: "120_halo", name: "120_halo", desc:"120_halo"},
    {ID: 3130, file: "130_epilogue", name: "", desc:""},
    {ID: 4100, file: "c100", name: "c100", desc:"c100"},
    {ID: 4200, file: "c200", name: "c200", desc:"c200"},
    {ID: 5000, file: "h100", name: "h100", desc:"h100"},
    {ID: 5200, file: "l200", name: "l200", desc:"l200"},
    {ID: 5300, file: "l300", name: "l300", desc:"l300"},
    {ID: 6100, file: "sc100", name: "sc100", desc:"sc100"},
    {ID: 6110, file: "sc110", name: "sc110", desc:"sc110"},
    {ID: 6120, file: "sc120", name: "sc120", desc:"sc120"},
    {ID: 6130, file: "sc130", name: "sc130", desc:"sc130"},
    {ID: 6140, file: "sc140", name: "sc140", desc:"sc140"},
    {ID: 6150, file: "sc150", name: "sc150", desc:"sc150"}
];
var gameType = {1:"ctf",2:"slayer",3:"oddball",4:"koth",5:"forge",6:"vip",7:"juggernaut",8:"territories",9:"assault",10:"infection"};
var lobbyType = { 0 : "Campaign", 1 : "Matchmaking", 2 : "Multiplayer", 3 : "Forge", 4 : "Theater"};
var serverMode = {0 : "Xbox Live (Open Party)", 1 : "Xbox Live (Friends Only)", 2 : "Xbox Live (Invite Only)", 3 : "Online", 4 : "Offline"};
var teamArray = [
    {name: 'red', color: '#620B0B'},
    {name: 'blue', color: '#0B2362'},
    {name: 'green', color: '#1F3602'},
    {name: 'orange', color: '#BC4D00'},
    {name: 'purple', color: '#1D1052'},
    {name: 'gold', color: '#A77708'},   
    {name: 'brown', color: '#1C0D02'}, 
    {name: 'pink', color: '#FF4D8A'}, 
    {name: 'white', color: '#D8D8D8'}, 
    {name: 'black', color: '#0B0B0B'}           
];
var cardOpacity = 0.9;
var networkStatus = {0 : "Xbox Live (Open Party)", 1 : "Xbox Live (Friends Only)", 2 : "Xbox Live (Invite Only)", 3 : "Ready.<br>This party is open for others to join.", 4 : "Ready.<br>This party is local to your PC. To play with others, select Network and the choose Online."};
var lobbyDesc = { 0 : "Campaign", 1 : "Matchmaking", 2 : "Take your party to combat and objective-based missions that you select and design. Your rules, your maps, your game.", 3 : "Take your party to collaborate in real time to edit and play variations of your favorite maps, form the subtle to the insane.", 4 : "Theater"};
var networkDesc = {0 : "Xbox Live (Open Party)", 1 : "Xbox Live (Friends Only)", 2 : "Xbox Live (Invite Only)", 3 : "Play with others over your local area network, VPN or Online.", 4 : "Play only on this PC."};

$(window).load(function(){
    dew.command('Game.ListMaps', {}).then(function(response){
        var temp = response.split(",");
        $('#mapList').empty();
        for(var i=0; i < temp.length; i++){ 
            if(temp[i] != "mainmenu"){
                var result = $.grep(mapTable, function(e){ return e.file == temp[i]; });
                $('#mapList').append(
                    $('<li>', {
                        text: result[0].name.toUpperCase(),
                        id: result[0].id,
                        class: "selectable",
                        'data-filename': result[0].file,
                        'data-desc':result[0].desc
                    }).mouseover(function(){
                        $("#mapDesc").html($(this).attr('data-desc'));
                        $("#mapImage").attr("src", "images/maps/" + $(this).attr('data-filename')+ ".png");
                    }).click(function(){
                        dew.command('Game.Map ' + $(this).attr('data-filename'), {}).then(function(response){
                            dew.show();  
                        }); 
                    })
                )
            }
        };
        $("#mapList li").sort(asc_sort).appendTo('#mapList');
        $('#mapDesc').html($("#mapList li:eq(0)").attr('data-desc'));
        $("#mapImage").attr("src", "images/maps/" + $("#mapList li:eq(0)").attr('data-filename') + ".png");
    });        dew.on("show", function(){        hideAll();        dew.getSessionInfo().then(function(e){            if(e.established){                $("#mainmenu").hide();                $("#lobby").show();                dew.getGameVariantInfo().then(function(x){                    if(x.name != "Forge"){                        $("#gameMode").show();                        $("#gameMode").text("GAME: "+x.name.toUpperCase());                        $("#title").text("MULTIPLAYER LOBBY");                        $("#startGame").text("START GAME");
                        $("#switchMapMenu div:not(#mapDesc)").css('top', '6.5vw');
                        $("#switchMapMenu ul").css('top', '3vw');
                        $("#mapDesc").css('top', '18vw');
                        $("#mapImage").css('top', '6.5vw');                    } else {                        $("#gameMode").hide();                        $("#title").text("FORGE LOBBY");                        $("#startGame").text("START FORGE");
                        $("#switchMapMenu div:not(#mapDesc)").css('top', '4.3vw');
                        $("#switchMapMenu ul").css('top', '0.75vw');
                        $("#mapDesc").css('top', '15.75vw');
                        $("#mapImage").css('top', '4.25vw');                    }                    $("#varPic").attr("src", "images/gametypes/" + gameType[x.mode] + ".png");                    dew.getMapVariantInfo().then(function(i){                        $("#switchMap").text("MAP: "+i.name.toUpperCase());
                        var mapFile = $.grep(mapTable, function(e){ return e.ID == i.mapId; });                        $("#mapPic").attr("src", "images/maps/" + mapFile[0].file + ".png");                        if(x.name == "Forge"){ x.name = "Edit Objects"};                        $("#gameDesc").text(x.name + " on " + i.name);                        dew.command('Server.ListPlayersJSON', {}).then(function(l){                            var playerArray = JSON.parse(l);                            $('#playerList').empty();                            for(var i=0; i < playerArray.length; i++){                                var bgColor = playerArray[i].color;                                if(e.hasTeams){                                    bgColor = teamArray[playerArray[i].teamIndex].color;                                }                                $('#playerList').append(                                    $('<li>', {                                        text: playerArray[i].name,                                        css: {                                            backgroundColor: hexToRgb(bgColor,cardOpacity)                                        },                                        id: playerArray[i].name,                                        'data-color': bgColor,                                    }).mouseover(function(){                                        col = $(this).attr('data-color'),                                        bright = adjustColor(col, 30);                                        $(this).css("background-color", hexToRgb(bright, cardOpacity));                                    }).mouseout(function(){                                        col = $(this).attr('data-color');                                        $(this).css("background-color", hexToRgb(col, cardOpacity));                                    })                                )                            }                            dew.command('Server.Mode', {}).then(function(m){                                $("#switchNetwork").text("NETWORK: "+serverMode[m].toUpperCase());                                $("#status").html(networkStatus[m]);                                if(e.isHost){                                    var maxPlayers = 2;                                    if(m = 3){                                        dew.command('Server.MaxPlayers', {}).then(function(p){                                            maxPlayers = p;                                        });                                    }                                    //console.log('Max Players:' + maxPlayers);                                    $("#playerCount").text(playerArray.length + " Player  (" + maxPlayers + " max)");                                }                                dew.command('Server.LobbyType', {}).then(function(t){                                    //console.log('Lobby Type:' + lobbyType[t]);                                });                            });                        });                    });                });            } else {                $("#lobby").hide();                $("#mainmenu").show();            }        });    });        $("#hostMultiplayer").click(function(){        dew.command('Server.LobbyType 2', {}).then(function(response){            dew.show();          });    });       $("#hostForge").click(function(){        dew.command('Server.LobbyType 3', {}).then(function(response){            dew.show();          });      });             $("#switchLobby,#switchNetwork,#switchMap").click(function(e){
        controllerMenu = e.target.id+"Menu"        $("#blackout").show();        $("#"+controllerMenu).show();
        if($("#"+controllerMenu).length){
            index = 0;
            $(".selectable").removeClass("selected");
            $("#" + controllerMenu + " .selectable:first").addClass("selected");
        };    });        $("#blackout").click(function(){        hideAll();    });    $("#multiLobby").mouseover(function(){        $("#lobbyDesc").text(lobbyDesc[2]);    }).click(function(){        dew.command('Server.LobbyType 2', {}).then(function(response){            dew.show();          });        });    $("#forgeLobby").mouseover(function(){        $("#lobbyDesc").text(lobbyDesc[3]);    }).click(function(){        dew.command('Server.LobbyType 3', {}).then(function(response){            dew.show();          });        });        $("#onlineNetwork").mouseover(function(){        $("#networkDesc").text(networkDesc[3]);    }).click(function(){        dew.command('Server.Mode 3', {}).then(function(response){            dew.show();          });        });    $("#offlineNetwork").mouseover(function(){        $("#networkDesc").text(networkDesc[4]);    }).click(function(){        dew.command('Server.Mode 4', {}).then(function(response){            dew.show();          });        });    $("#startGame").click(function(){        dew.command('start', {}).then(function(response){            dew.hide();        });        });        $("#switchTeams").click(function(){        dew.command('Input.UIButtonPress 4', {}).then(function(){            setTimeout(function(){                dew.show();            },1500);        });     });
    
    $("#mainmenu #exitButton").click(function(){
        dew.command('Exit', {}).then(function(){}); 
    });
    
    $("#lobby #exitButton").click(function(){
        dew.command('Exit', {}).then(function(){}); 
    });    $(document).keydown(function(e){        if(e.keyCode === 27) { //ESC            dew.command('Input.UIButtonPress 1', {}).then(function(response){                dew.show();            });          }else if (e.keyCode == 192){ //~            dew.show("console");        }    });
    
    setInterval( CheckPageFocus, 200 );
    if(controllerSupport()){
        $(window).on("gamepadconnected", function(){
            hasGP = true;
            console.log("Gamepad connected");
            $("#" + controllerMenu + " .selectable:first").addClass("selected");
            repGP = window.setInterval(checkGamepad,100);
        });
        $(window).on("gamepaddisconnected", function(){
            hasGP = false;
            console.log("Gamepad disconnected");
            window.clearInterval(repGP);
        });
        var checkGP = window.setInterval(function(){
            if(navigator.getGamepads()[0]){
                if(!hasGP) $(window).trigger("gamepadconnected");
                window.clearInterval(checkGP);
            }
        }, 500);
    }});
function hexToRgb(hex, opacity){    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);    return "rgba(" + parseInt(result[1], 16) + "," + parseInt(result[2], 16) + "," + parseInt(result[3], 16) + "," + opacity + ")";}

function adjustColor(color, amount){    var colorhex = (color.split("#")[1]).match(/.{2}/g);    for (var i = 0; i < 3; i++){        var e = parseInt(colorhex[i], 16);        e += amount;        if(amount > 0){            colorhex[i] = ((e > 255) ? 255 : e).toString(16);        }else{            colorhex[i] = ((e < 0) ? 0 : e).toString(16);                   }    }    return "#" + colorhex[0] + colorhex[1] + colorhex[2];}

function getKeyByValue(object, value) {  return Object.keys(object).find(key => object[key] === value);}

function asc_sort(a, b){
    return ($(b).text()) < ($(a).text()) ? 1 : -1;    
}

function CheckPageFocus() {
    if ( document.hasFocus() ) {
        pageFocus = true;
    } else {
        pageFocus = false;
    }
}

function controllerSupport(){
    return "getGamepads" in navigator;
}

var pageFocus = false;
var hasGP = false;
var repGP;
var timestamp; 
var lastButtons = [];
function checkGamepad(){
    var gamepad = navigator.getGamepads()[0];
    if(gamepad.timestamp != timestamp){
        if(pageFocus){
            for( var i = 0; i < gamepad.buttons.length; i++ ) {
                currentState = gamepad.buttons[i].pressed
                var prevState = lastButtons[i];
                if( !prevState && currentState ){ //Button i Pressed    
                    buttonAction(i);                
                }else if( prevState && !currentState ){//Button i Released
                }
                lastButtons[i] = currentState;
            }
        }
        timestamp = gamepad.timestamp;
    }
}

function buttonAction(i){
    //console.log(i);
    switch (i) {
        case 0: // A
            $('#' + controllerMenu + ' .selected').click();
            break;
        case 1: // B
            hideAll();
            break;
        case 12: // Up
            previous();
            break;
        case 13: // Down
            next();
            break;
        default:
            console.log("nothing associated with " + i);
    }  
}

var index = 0;
var controllerMenu = "leftSide";

function previous() {
   var list = $('#' + controllerMenu + ' .selectable:visible').removeClass('selected');
   index = (index - 1) % list.length;
   list.eq(index).addClass('selected');
}

function next() {
   var list = $('#' + controllerMenu + ' .selectable:visible').removeClass('selected');
   index = (index + 1) % list.length;
   list.eq(index).addClass('selected');
}

function hideAll(){
    $("#blackout").hide();
    $("#switchLobbyMenu").hide();   
    $("#switchNetworkMenu").hide();
    $("#switchMapMenu").hide();
    if(hasGP){
        controllerMenu = "leftSide";
        index = 0;
        $(".selectable").removeClass("selected");
        $("#" + controllerMenu + " .selectable:first").addClass("selected");
    }
}