/*
 * Here are the parameters and values:
 * mvBoulder -- 1 means DankRoom and Tunnel are connected. Also means that the 
 			Boulder is in the SmallHole
 * pullLever -- Library and BackRoom are connected
 * AthenaComboEntered -- currently in Athena cluster
 * rmLargeBoulder -- RockyPath and Farm are connected. Also means that the LargeBoulder
 			has been removed
 * HouseMade -- Clearing and House are connected (user has made a House)
 * rmBrambles -- Clearing and OminousLookingPath are connected. Also means that 
 			ThornyBrambles have been removed
 * openSlide -- CaveOfDisgtruntledTrolls and Slide are connected. Also means that the
 			UglyTroll has been rm'ed or mv'ed
 * touchGear -- Gear was made in ArtisanShop, Artisan text changed
 * FiveGearsCopied -- five Gears copied in ArtisanShop, Artisan text changed
 * CornCopied -- corn copied in Farm
 * touchPlank -- Plank made in BrokenBridge
 * sudoComplete -- entered paradise (current location is paradise)
 */

function GameState(){
	//game starts at home unless loaded from cookie
	this.currentRoom = Home; 
	this.params = {};
};

/* Registre explicite des rooms */
const ROOMS = {
	Home,
	DankRoom,
	Tunnel,
	Library,
	BackRoom,
	RockyPath,
	Farm,
	Clearing,
	OminousLookingPath,
	CaveOfDisgruntledTrolls,
	Slide,
	AthenaCluster,
	MIT,
	KernelFiles,
	Paradise,
	MagicLocker,
	SmallHole,
	BrokenBridge,
	ArtisanShop
};

//this function reads from a cookie if one exists
GameState.prototype.getCurrentRoom = function() {

	//by default the new room is just the current room
	var newRoomToSet=this.currentRoom;

	//if there is a cookie, the newRoomToSet is read from the cookie
	var cookieval=this.readCookie();

	if (cookieval){

		//parse the cookie. right now it is only the current room name
		var cookieargs = cookieval.split("=");

		var room_name_to_set = cookieargs.shift();

		var cookie_params = cookieargs;

		for (var i = 0; i < cookie_params.length; i++){

			if (!cookie_params[i]) continue;

			var param_pair = cookie_params[i].split(":");

			if (param_pair.length < 2) continue;

			this.params[param_pair[0]] = param_pair[1];

			this.applyState(param_pair[0], true);
		}

		/* remplacement de window[...] */
		if (ROOMS[room_name_to_set]){
			newRoomToSet = ROOMS[room_name_to_set];
		}else{
			console.warn("Room inconnue :", room_name_to_set);
			newRoomToSet = Home;
		}
	}

	//call setCurrentRoom to reset the expiration date on the cookie
	this.setCurrentRoom(newRoomToSet);

	return this.currentRoom;
};

GameState.prototype.setCurrentRoom = function(newRoom){

	/* évite les crashes undefined */
	if (!newRoom){
		console.error("newRoom undefined");
		newRoom = Home;
	}

	this.currentRoom=newRoom;

	//when you call this function, set the cookie in the browser
	var date = new Date();

	//by default, cookies active for a week
	date.setTime(date.getTime()+(7*24*60*60*1000));

	document.cookie =
		"terminuscookie="
		+ this.getState()
		+ "; expires="
		+ date.toGMTString()
		+ "; path=/";

	//document.cookie = "terminuscookie=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
};

GameState.prototype.getState = function(){

	//for anything in the state, if it is not written in the cookie explicitly, it's value is 0
	var param_string = "";

	for (var key in this.params){

		if (this.params.hasOwnProperty(key)){

			param_string += key + ":" + this.params[key] + "=";
		}
	}

	/* évite undefined.toString */
	if (!this.currentRoom){

		console.error("currentRoom undefined");

		return "Home=" + param_string;
	}

	return (
		(this.currentRoom.name || this.currentRoom.toString())
		+ "="
		+ param_string
	);
};

GameState.prototype.update = function(name_prop, val){
	this.params[name_prop] = val;
};

GameState.prototype.readCookie = function(){
	var nameCookie = "terminuscookie";
	var ca = document.cookie.split(';');

	for(var i=0;i < ca.length;i++) {

		var c = ca[i];

		while (c.charAt(0)==' ')
			c = c.substring(1,c.length);

		if (c.indexOf(nameCookie) == 0)
			return c.substring(nameCookie.length + 1,c.length);
	}

	return null;
};

GameState.prototype.applyState = function(param_name, replay){
	var re = (typeof replay === 'undefined') ? false : replay;

	state.update(param_name, "1");

	switch(param_name){

		case "mvBoulder": 

			link_rooms(DankRoom, Tunnel);

			SmallHole.addItem(Boulder);

			if (re)
				DankRoom.removeItem("Rocher");

			break;

		case "pullLever":

			link_rooms(Library, BackRoom);

    		break;

    	case "rmLargeBoulder":

    		link_rooms(RockyPath, Farm);

    		if (re)
    			RockyPath.removeItem("GrosRocher");

    		break;

    	case "touchGear":

    		Artisan.addCmdText("less", "Eh bien, c’est charmant, merci, mais tu ne peux pas t’attendre à ce que je fabrique quoi que ce soit avec un seul engrenage ! Ne peux-tu pas le copier ?\n...\n*soupir* Je vois que tu vas avoir besoin de beaucoup d'entraînement. Dis simplement “cp [OBJET] [NOUVEAU_OBJET]”. [OBJET] est le nom de l'objet que tu veux copier, et [NOUVEAU_OBJET] est le nouveau nom de la copie, compris ? Ensuite, pouf ! Tu auras un nouvel objet brillant. J’ai besoin de cinq autres engrenages, donc tu ferais mieux de commencer ! Appelle-les gear1, gear2, gear3, gear4 et gear5, s’il te plaît.");

    		ArtisanShop.addCommand("cp");

    		if (re)
    			ArtisanShop.addItem(new Item("Engrenage", "C'est un engrenage","item_gear.gif"));

    		else
    			ArtisanShop.getItemFromName("Engrenage").changePicName("item_gear.gif");

    		break;

    	case "FiveGearsCopied":

    		Artisan.addCmdText("less", "Ha, déjà fini ? Je suppose que tu apprends vite. Eh bien, merci pour ton aide.");

    		if (re){

	    		ArtisanShop.addItem(new Item("gear1", "C'est un engrenage","item_gear.gif"));
	    		ArtisanShop.addItem(new Item("gear2", "C'est un engrenage","item_gear.gif"));
	    		ArtisanShop.addItem(new Item("gear3", "C'est un engrenage","item_gear.gif"));
	    		ArtisanShop.addItem(new Item("gear4", "C'est un engrenage","item_gear.gif"));
	    		ArtisanShop.addItem(new Item("gear5", "C'est un engrenage","item_gear.gif"));
    		}

    		break;

    	case "CornCopied":

    	    Farmer.addCmdText("less", "C’est un miracle ! Merci, ami. Que l’Admin te bénisse.");

    	    if (re)
    	    	Farm.addItem(new Item("AnotherEarOfCorn", "This is AnotherEarOfCorn"));

    	    break;

    	case "HouseMade":

    		if (re)
    			Clearing.addChild(new Room("Maison", "C'est une Maison"));

    		Clearing.getChildFromName("Maison").addCmdText("cd", "Vous entrez dans la maison que vous avez construite.");

  	 		Clearing.getChildFromName("Maison").addCmdText("ls", "Vous avez construit cette maison pour l’homme. Comme c’est attentionné de votre part !");

  		  	Clearing.removeCmdText("cd");

    		Clearing.changeIntroText("Il y a une petite clairière herbeuse ici, avec un homme assis sur une pierre, en train de pleurer. Derrière lui se trouve un tas de décombres et une petite maison blanche.");

    		CryingMan.addCmdText("less", "Merci de m’avoir construit cette maison ! Pourquoi est-ce que je pleure encore ? Ce sont des larmes de joie. Un homme ne peut-il pas exprimer ses émotions ouvertement ?");

    		break;

    	case "touchPlank":

    		Clearing.addCommand("cd");

    		Clearing.removeCmdText("cd");

    		BrokenBridge.removeCmdText("cd");

    		BrokenBridge.changeIntroText("Un pont de corde grinçant s'étend à travers un gouffre.");

    		if (re)
    			BrokenBridge.addItem(new Item("Planche","C'est une planche.","item_plank.gif"));

    		else
    			BrokenBridge.getItemFromName("Planche").changePicName("item_plank.gif");

    		break;

    	case "rmBrambles":

    		link_rooms(OminousLookingPath, CaveOfDisgruntledTrolls);

    		if (re)
    			OminousLookingPath.removeItem("ThornyBrambles");

    		break;

    	case "sudoComplete":

    		KernelFiles.removeCommand("IHTFP");

    		KernelFiles.removeCmdText("IHTFP");

    		link_rooms(KernelFiles, Paradise);

    		enterRoom(Paradise);

    		break;

    	case "openSlide":

    		Slide.addCommand("cd");

    		Slide.addCmdText("cd", "C’est juste un toboggan. Continuez. Vous êtes presque arrivés aux FichiersNoyau.");

    		if (re)
    			CaveOfDisgruntledTrolls.removeItem("UglyTroll");

    		break;

    	case "AthenaComboEntered":

    		AthenaCluster.addCommand("ls");

    		AthenaCluster.removeCmdText("ls");

		    AthenaCluster.addCommand("cd");

		    // AthenaCluster.addCmdText("cd", "You have correctly entered the cluster combo. You may enter.");

		    enterRoom(AthenaCluster);

		    MIT.removeCommand("terminus");

		    MIT.removeCmdText("terminus");

		    break;

		case "addMagicLocker": 

			link_rooms(Home, MagicLocker);

			break;

		default: 

			break;
	};
};