var mapTable = [
    {ID: 300, file: "construct", name: "Construct", desc:"Vast quantities of water and other raw materials are consumed in creating even the smallest orbital installations. <br><br>2-8 players."},
    {ID: 330, file: "isolation", name: "Isolation", desc:"Containment protocols are almost impervious to pre-Gravemind infestations. What could possibly go wrong? <br><br>2-10 players."},
    {ID: 350, file: "salvation", name: "Epitaph", desc:"Some believe the Forerunner preferred desolate places. Others suggest that few other sites survived the Flood. <br><br>2-6 players."},
    {ID: 360, file: "snowbound", name: "Snowbound", desc:"Hostile conditions did not prevent the Covenant from seeking salvage on this buried Forerunner construct. <br><br>2-8 players."},
    {ID: 440, file: "docks", name: "Longshore", desc:"Abandoned during the invasion of Earth, the Mombasa Quays are now bereft of commerce, but rife with danger. <br><br>4-12 players."},
    {ID: 470, file: "sidewinder", name: "Avalanche", desc:"Freezing winds scour blasted terrain, and ancient battle scars are a grim reminder that this is a precious prize. <br><br>6-16 players."},
    {ID: 480, file: "warehouse", name: "Foundry", desc:"After the orbital elevator fell, supply warehouses sending munitions to space were soon abandoned. <br><br>4-12 players."},
    {ID: 490, file: "descent", name: "Assembly", desc:"The Covenant war machine continues its march to conquest; even with its head severed it is still dangerous. <br><br>2-8 players."},
    {ID: 500, file: "spacecamp", name: "Orbital", desc:"With a lot of situational awareness, and a little luck, hopefully the only thing you will lose is your luggage. <br><br>4-12 players."},
    {ID: 520, file: "lockout", name: "Blackout", desc:"Bathed in frozen moonlight, this abandoned drilling platform is now a monument to human frailty. <br><br>4-12 players."},
    {ID: 580, file: "armory", name: "Rat's Nest", desc:"Snowmelt from Kilimanjaro feeds reservoirs every bit as vital as the fuel and ammunition stores. <br><br>6-16 players."},
    {ID: 590, file: "ghosttown", name: "Ghost Town", desc:"These fractured remains near Voi remind us that brave souls died here to buy our salvation. <br><br>4-12 players."},
    {ID: 600, file: "chillout", name: "Cold Storage", desc:"Deep in the bowels of Installation 05 things have gotten a little out of hand. I hope you packed extra underwear. <br><br>2-6 players."},
    {ID: 720, file: "midship", name: "Heretic", desc:"Because of its speed and luxury the Pious Inquisitor has become an irresistible prize during these dark times. <br><br>2-8 players."},
    {ID: 730, file: "sandbox", name: "Sandbox", desc:"This endless wasteland still holds many secrets. Some of them are held more deeply than others. <br><br>4-12 players."},
    {ID: 740, file: "fortress", name: "Citadel", desc:"In the heart of this Forerunner structure, far above the troubled surface of the Ark, another battle rages. <br><br>2-6 players."},
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

var controllerMenu;
var index = 0;
var hasGP = false;
var useKB = false;

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
                        $("#switchMapMenu #menuDescription").html($(this).attr('data-desc'));
                        $("#mapImage").attr("src", "images/maps/" + $(this).attr('data-filename')+ ".png");
                        $(this).addClass("selected");
                    }).mouseout(function(){
                        $(this).removeClass("selected");
                    }).click(function(){
                        dew.command('Game.Map ' + $(this).attr('data-filename'), {}).then(function(response){
                            dew.show();  
                        }); 
                    })
                )
            }
        };
        $("#mapList li").sort(asc_sort).appendTo('#mapList');
        $('#switchMapMenu #menuDescription').html($("#mapList li:eq(0)").attr('data-desc'));
        $("#mapImage").attr("src", "images/maps/" + $("#mapList li:eq(0)").attr('data-filename') + ".png");
    });
    
    dew.on("show", function(){
        hideAll();
        dew.getSessionInfo().then(function(e){
            if(e.established){
                controllerMenu = "leftSide";
                index = 0;
                $("#mainmenu").hide();
                $("#lobby").show();
                dew.getGameVariantInfo().then(function(x){
                    if(x.name != "Forge"){
                        $("#gameMode").show();
                        $("#gameMode").text("GAME: "+x.name.toUpperCase());
                        $("#title").text("MULTIPLAYER LOBBY");
                        $("#startGame").text("START GAME");
                        $("#switchMapMenu div:not(#mapDesc)").css('top', '6.5vw');
                        $("#switchMapMenu ul").css('top', '3vw');
                        $("#switchMapMenu #menuDescription").css('top', '18vw');
                        $("#mapImage").css('top', '6.5vw');
                    } else {
                        $("#gameMode").hide();
                        $("#title").text("FORGE LOBBY");
                        $("#startGame").text("START FORGE");
                        $("#switchMapMenu div:not(#mapDesc)").css('top', '4.3vw');
                        $("#switchMapMenu ul").css('top', '0.75vw');
                        $("#switchMapMenu #menuDescription").css('top', '15.75vw');
                        $("#mapImage").css('top', '4.25vw');
                    }
                    $("#varPic").attr("src", "images/gametypes/" + gameType[x.mode] + ".png");
                    dew.getMapVariantInfo().then(function(i){
                        $("#switchMap").text("MAP: "+i.name.toUpperCase());
                        var mapFile = $.grep(mapTable, function(e){ return e.ID == i.mapId; });
                        $("#mapPic").attr("src", "images/maps/" + mapFile[0].file + ".png");
                        if(x.name == "Forge"){ x.name = "Edit Objects"};
                        $("#gameDesc").text(x.name + " on " + i.name);
                        dew.command('Server.ListPlayersJSON', {}).then(function(l){
                            var playerArray = JSON.parse(l);
                            $('#playerList').empty();
                            for(var i=0; i < playerArray.length; i++){
                                var bgColor = playerArray[i].color;
                                if(e.hasTeams){
                                    bgColor = teamArray[playerArray[i].teamIndex].color;
                                }
                                $('#playerList').append(
                                    $('<li>', {
                                        text: playerArray[i].name,
                                        css: {
                                            backgroundColor: hexToRgb(bgColor,cardOpacity)
                                        },
                                        id: playerArray[i].name,
                                        'data-color': bgColor,
                                    }).mouseover(function(){
                                        col = $(this).attr('data-color'),
                                        bright = adjustColor(col, 30);
                                        $(this).css("background-color", hexToRgb(bright, cardOpacity));
                                    }).mouseout(function(){
                                        col = $(this).attr('data-color');
                                        $(this).css("background-color", hexToRgb(col, cardOpacity));
                                    })
                                )
                            }
                            dew.command('Server.Mode', {}).then(function(m){
                                $("#switchNetwork").text("NETWORK: "+serverMode[m].toUpperCase());
                                $("#status").html(networkStatus[m]);
                                if(e.isHost){
                                    var maxPlayers = 2;
                                    if(m = 3){
                                        dew.command('Server.MaxPlayers', {}).then(function(p){
                                            maxPlayers = p;
                                        });
                                    }
                                    $("#playerCount").text(playerArray.length + " Player  (" + maxPlayers + " max)");
                                }
                                dew.command('Server.LobbyType', {}).then(function(t){
                                    //console.log('Lobby Type:' + lobbyType[t]);
                                });
                            });
                        });
                    });
                });
            } else {
                $("#lobby").hide();
                $("#mainmenu").show();
                controllerMenu = "mainmenu";
            }
        });
    });
    
    $("#hostMultiplayer").click(function(){
        dew.command('Server.LobbyType 2', {}).then(function(response){
            dew.show();
        });
    });
    
    $("#hostForge").click(function(){
        dew.command('Server.LobbyType 3', {}).then(function(response){
            dew.show();
        });
    });
    
    $("#switchLobby,#switchNetwork,#switchMap").click(function(e){
        controllerMenu = e.target.id+"Menu";
        $("#blackout").show();
        $("#"+controllerMenu).show();
        index = 0;
        if((hasGP || useKB) && $("#"+controllerMenu).length){
            $(".selectable").removeClass("selected");
            $("#" + controllerMenu + " .selectable:first").addClass("selected");
        };
    });
    
    $("#blackout").click(function(){
        hideAll();
    });
    
    $("#multiLobby").mouseover(function(){
        $("#switchLobbyMenu #menuDescription").text($("#multiLobby").attr('data-desc'));
    }).click(function(){
        dew.command('Server.LobbyType 2', {}).then(function(response){
            dew.show();
        });
    });
    
    $("#forgeLobby").mouseover(function(){
        $("#switchLobbyMenu #menuDescription").text($("#forgeLobby").attr('data-desc'));
    }).click(function(){
        dew.command('Server.LobbyType 3', {}).then(function(response){
            dew.show();
        });
    });
    
    $("#onlineNetwork").mouseover(function(){
        $("#switchNetworkMenu #menuDescription").text($("#onlineNetwork").attr('data-desc'));
    }).click(function(){
        dew.command('Server.Mode 3', {}).then(function(response){
            dew.show();
        });
    });
    
    $("#offlineNetwork").mouseover(function(){
        $("#switchNetworkMenu #menuDescription").text($("#offlineNetwork").attr('data-desc'));
    }).click(function(){
        dew.command('Server.Mode 4', {}).then(function(response){
            dew.show();
        });
    });
    
    $("#startGame").click(function(){
        dew.command('start', {}).then(function(response){
            dew.hide();
        });
    });
    
    $(".selectable").mouseover(function(){
        $(this).addClass("selected");
        var list = $('#' + controllerMenu + ' .selectable:visible');
        index = $.inArray($(this)[0],list);
    }).mouseout(function(e){
        $(this).removeClass("selected");
        useKB = false;
    });
    
    $("#switchTeams").click(function(){
        dew.command('Input.UIButtonPress 4', {}).then(function(){
            setTimeout(function(){
                dew.show();
            },1500);
        });
    });
    
    $("#mainmenu #exitButton").click(function(){
        dew.command('Exit', {}).then(function(){}); 
    });
    
    $("#lobby #exitButton").click(function(){
        dew.command('Exit', {}).then(function(){}); 
    });

    $(document).keydown(function(e){
        useKB = true;
        if(e.keyCode === 27) { //ESC
            if(controllerMenu == "leftSide"){
                dew.command('Input.UIButtonPress 1', {}).then(function(response){
                    dew.show();
                });
            }else{
                hideAll();
            }
        }else if (e.keyCode == 192){ //~
            dew.show("console");
        }else if (e.keyCode == 38){ //Up
            previous();
        }else if (e.keyCode == 40){ //Down
            next();
        }else if (e.keyCode == 13){ //Enter
            $('#' + controllerMenu + ' .selected').click();
        }else{
            console.log(e.keyCode);
        }
    });
    
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
    }
});

function hexToRgb(hex, opacity){
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return "rgba(" + parseInt(result[1], 16) + "," + parseInt(result[2], 16) + "," + parseInt(result[3], 16) + "," + opacity + ")";
}

function adjustColor(color, amount){
    var colorhex = (color.split("#")[1]).match(/.{2}/g);
    for (var i = 0; i < 3; i++){
        var e = parseInt(colorhex[i], 16);
        e += amount;
        if(amount > 0){
            colorhex[i] = ((e > 255) ? 255 : e).toString(16);
        }else{
            colorhex[i] = ((e < 0) ? 0 : e).toString(16);
        }
    }
    return "#" + colorhex[0] + colorhex[1] + colorhex[2];
}

function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
}

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

function previous() {
    var list = $('#' + controllerMenu + ' .selectable:visible').removeClass('selected');
    index = (index - 1) % list.length;
    list.eq(index).addClass('selected');
    updateDescriptions();
}

function next() {
    var list = $('#' + controllerMenu + ' .selectable:visible').removeClass('selected');
    index = (index + 1) % list.length;
    list.eq(index).addClass('selected');
    updateDescriptions();
}

function updateDescriptions(){
    if($('#' + controllerMenu + ' #menuDescription').length){
        $('#' + controllerMenu + ' #menuDescription').html($('#' + controllerMenu + ' .selected').attr('data-desc'));
    }  
    if($('#' + controllerMenu + ' #mapImage').length){  
        $('#' + controllerMenu + ' #mapImage').attr('src', 'images/maps/' + $('#' + controllerMenu + ' .selected').attr('data-filename')+ '.png');
    }    
}

function hideAll(){
    $("#blackout").hide();
    $("#switchLobbyMenu").hide();   
    $("#switchNetworkMenu").hide();
    $("#switchMapMenu").hide();
    if(hasGP || useKB){
        controllerMenu = "leftSide";
        index = 0;
        $(".selectable").removeClass("selected");
        $("#" + controllerMenu + " .selectable:first").addClass("selected");
    }
}