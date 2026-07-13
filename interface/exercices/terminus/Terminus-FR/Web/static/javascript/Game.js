var state = new GameState();
//read cookie if one exists
var current_room = state.getCurrentRoom();
// var current_room = KernelFiles;
var man_pages = {
    "cd": "La voix du vieil homme résonne dans votre tête comme venant de très loin : \n" +
        "(Choisir la destination) Utilisez \"cd\" pour vous déplacer dans le monde. \n" +
        "Entrée de commande : cd EMPLACEMENT \n" +
        "Souvenez-vous...",
    "mv": "La voix du vieil homme résonne dans votre tête comme venant de très loin : \n" +
        "(Déplacer) \n Utilisez \"mv\" pour déplacer un objet vers un nouvel emplacement. \n" +
        "Entrée de commande : mv OBJET NOUVEAUEMPLACEMENT \n" +
        "Souvenez-vous...",
    "ls": "La voix du vieil homme résonne dans votre tête comme venant de très loin : \n" +
        "(Regarder autour de soi) \n Utilisez \"ls\" pour voir ce qui se trouve dans un certain endroit. " +
        "Soit votre emplacement actuel, soit (rarement) vous pouvez regarder dans un emplacement pour voir " +
        "ce qu’il contient. \n" +
        "Entrée de commande : \n" +
        "ls          (pour l’emplacement actuel) \n" +
        "-OU- \n" +
        "ls EMPLACEMENT     (pour les emplacements où vous ne pouvez pas \"cd\")\n" +
        "Souvenez-vous...",
    "less": "La voix du vieil homme résonne dans votre tête comme venant de très loin : \n" +
        "(Regarder, Examiner ou Parler à quelque chose) \n Utilisez \"less\" pour voir ce qui se trouve dans un " +
        "certain emplacement. Soit votre emplacement actuel, soit (rarement) vous pouvez regarder dans un " +
        "emplacement pour voir ce qu’il contient. \n" +
        "Entrée de commande : less OBJET\n" +
        "Souvenez-vous...",
    "man": "Je suis le vieil homme, bon sang ! Vous ne pouvez pas chercher plus d’informations sur moi. " +
        "Voici toutes les commandes que vous pouvez utiliser avec man : cd, ls, rm, mv, exit, help, man, touch, grep, pwd.",
    "help": "Tapez \"man COMMANDE\" si vous oubliez comment utiliser une commande.",
    "exit": "La voix du vieil homme résonne dans votre tête comme venant de très loin :\n" +
        "(quitter) \n" +
        "Utilisez \"exit\" pour quitter définitivement le jeu. \n" +
        "Entrée de commande : \n" +
        "exit \n" +
        "Souvenez-vous...",
    "cp": "La voix du vieil homme résonne dans votre tête comme venant de très loin :\n" +
        "(Copier)\n" +
        "Utilisez \"cp\" pour dupliquer un objet. \n" +
        "Entrée de commande :\n" +
        "cp OBJET NOUVEAUNOM \n" +
        "Souvenez-vous...",
    "pwd": "La voix du vieil homme résonne dans votre tête comme venant de très loin : \n" +
        "(Afficher où je suis) \n" +
        "Pour vous rappeler où vous vous trouvez actuellement.\n" +
        "Entrée de commande : \n" +
        "pwd \n" +
        "Souvenez-vous...",
    "grep": "La voix du vieil homme résonne dans votre tête comme venant de très loin :\n" +
        "(grep) \n" +
        "Utilisez \"grep\" pour demander à votre serviteur d’aider à rechercher du texte. \n" +
        "Entrée de commande : \n" +
        "grep MOTÀCHERCHER EMPLACEMENTÀCHERCHER \n" +
        "Souvenez-vous...",
    "touch": "La voix du vieil homme résonne dans votre tête comme venant de très loin :\n" +
        "(Toucher) vous donne le toucher de l’artisan pour créer de nouveaux objets.\n" +
        "Utilisez \"touch\" pour créer de nouveaux objets dans le monde.\n" +
        "Entrée de commande :\n" +
        "touch OBJET \n" +
        "Souvenez-vous...",
    "tellme": "La voix du vieil homme résonne dans votre tête comme venant de très loin :\n" +
        "(tellme combo) vous donne la combinaison des salles AthenaCluster au MIT.\n" +
        "Entrée de commande :\n" +
        "tellme combo\n" +
        "Souvenez-vous..."
}

$(document).ready(function () {
    $('#term').terminal(function (input, term) {
        var split = input.split(" ");
        var command = split[0].toString();
        var args = split.splice(1, split.length);
        var exec = true;
        if (current_room.commands.indexOf(command) > -1) { //Could use current_room.hasOwnProperty(command)
            var prev_room_to_test = current_room;
            if (args.length > 0 && args[0].indexOf("/") > 0) {
                var rooms_in_order = args[0].split("/");
                var cur_room_to_test = current_room;
                for (var i = 0; i < rooms_in_order.length; i++) {
                    prev_room_to_test = cur_room_to_test;
                    var room_to_cd = rooms_in_order[i];
                    if (i > 0 && rooms_in_order[i - 1] === "~") {
                        cur_room_to_test = Home.can_cd(room_to_cd)
                    } else if (room_to_cd === "~") {
                        cur_room_to_test = Home;
                    } else {
                        cur_room_to_test = cur_room_to_test.can_cd(room_to_cd);
                    }
                    if ((command === "cd" || command === "ls") && cur_room_to_test === false) {
                        term.echo("Ce n'est pas accessible d'ici.");
                        exec = false;
                    }
                }
                args[0] = cur_room_to_test.room_name;
            }
            if (exec) {
                var text_to_display = prev_room_to_test[command](args);
                if (text_to_display) {
                    term.echo(text_to_display);
                }
                if (command in current_room.cmd_text) {
                    term.echo(current_room.cmd_text[command]);
                }
            }
        }
        else {
            term.echo("Commande '" + command + "' non possible ici : '" + current_room.room_name + "'");
        }
    }, {
        history: true,                     // Keep user's history of commands
        prompt: '>',                        // Text that prefixes terminal entries
        name: 'terminus_terminal',          // Name of terminal
        // Signiture to include at top of terminal
        greetings: "Bienvenue ! Si vous êtes nouveau dans le jeu, voici quelques conseils : \n\n" +
            "Regardez autour de vous avec la commande \"ls\". \n" +
            "Déplacez-vous vers un nouvel emplacement avec la commande \"cd EMPLACEMENT\" \n" +
            "Vous pouvez revenir en arrière avec la commande \"cd ..\". \n" +
            "Interagissez avec les éléments du monde avec la commande \"less OBJET\" \n\n" +
            "Si vous oubliez où vous êtes, tapez \"pwd\" \n\n" +
            "Allez-y, explorez. Nous espérons que vous apprécierez ce que vous trouverez. Faites \"ls\" comme première commande.\n",
        exit: false,                        // Disable 'exit' command
        clear: true,                       // Disable 'clear' command
    });

    // Clear history on page reload
    $("#term").terminal().history().clear();
    //Give term focus (Fixes weird initial draw issue)
    $("#term").click();
    //Tab Completion FOR LAST ARGUMENT
    $(window).keyup(function (event) {
        if (event.keyCode == 9) {
            var command = $("#term").terminal().get_command().replace(/\s+$/, "");
            var split_command = command.split(" ");
            var first_arg = split_command[0]
            var last_arg = split_command.pop();
            //Start in a room, try to move through path, and if we get to the end
            // check whether a room/item could complete our trip

            //Get starting room
            var search_room;
            if (last_arg.substring(0, 1) == "~") {
                search_room = jQuery.extend(true, {}, Home);
            }
            else {
                search_room = jQuery.extend(true, {}, current_room);
            }
            //Iterate through each room
            var path_rooms = last_arg.split("/");
            var new_room;
            var incomplete_room;
            var substring_matches = [];
            for (room_num = 0; room_num < path_rooms.length; room_num++) {
                new_room = search_room.can_cd(path_rooms[room_num]);
                if (new_room) {
                    search_room = new_room;
                }
                else {
                    //We've made it to the final room,
                    // so we should look for things to complete our journey
                    if (room_num == path_rooms.length - 1) {
                        //IF cd, ls, cp, mv, less
                        //Compare to this room's children
                        if (first_arg == "cd" ||
                            first_arg == "ls" ||
                            first_arg == "mv") {
                            for (child_num = 0; child_num < search_room.children.length; child_num++) {
                                if (search_room.children[child_num].room_name.match("^" + path_rooms[room_num])) {
                                    substring_matches.push(search_room.children[child_num].room_name);
                                }
                            }
                        }
                        //IF cp, mv, less, grep, touch
                        //Compare to this room's items
                        if (first_arg == "cp" ||
                            first_arg == "mv" ||
                            first_arg == "less" ||
                            first_arg == "grep" ||
                            first_arg == "touch" ||
                            first_arg == "rm" ||
                            first_arg == "sudo") {
                            for (item_num = 0; item_num < search_room.items.length; item_num++) {
                                if (search_room.items[item_num].itemname.match("^" + path_rooms[room_num])) {
                                    substring_matches.push(search_room.items[item_num].itemname);
                                }
                            }
                        }

                        //If one match exists
                        if (substring_matches.length == 1) {
                            path_rooms.pop();
                            path_rooms.push(substring_matches[0]);
                            split_command.push(path_rooms.join("/"))
                            $("#term").terminal().set_command(split_command.join(" "));
                        }
                        //If multiple matches exist
                        else if (substring_matches.length > 1) {
                            //Search for longest common substring (taken from: http://stackoverflow.com/questions/1837555/ajax-autocomplete-or-autosuggest-with-tab-completion-autofill-similar-to-shell/1897480#1897480)
                            var lCSindex = 0
                            var i, ch, memo
                            do {
                                memo = null
                                for (i = 0; i < substring_matches.length; i++) {
                                    ch = substring_matches[i].charAt(lCSindex)
                                    if (!ch) break
                                    if (!memo) memo = ch
                                    else if (ch != memo) break
                                }
                            } while (i == substring_matches.length && ++lCSindex)

                            var longestCommonSubstring = substring_matches[0].slice(0, lCSindex)
                            //If there is a common substring...
                            if (longestCommonSubstring != "") {
                                //If it already matches the last snippit, then show the options
                                if (path_rooms[room_num] == longestCommonSubstring) {
                                    split_command.push(last_arg)                                                    //Join final argument to split_command
                                    $("#term").terminal().echo(">" + split_command.join(" ").replace(/\s+$/, ""));     //Print what the user entered
                                    $("#term").terminal().echo(substring_matches.join(" "));                        //Print the matches
                                    $("#term").terminal().set_command(split_command.join(" ").replace(/\s+$/, ""));  //Set the text to what the user entered
                                }
                                //Otherwise, fill in the longest common substring
                                else {
                                    path_rooms.pop();                           //Pop final snippit
                                    path_rooms.push(longestCommonSubstring);    //Push longest common substring
                                    split_command.push(path_rooms.join("/"))    //Join room paths
                                    $("#term").terminal().set_command(split_command.join(" ")); //Set the terminal text to this auto-completion
                                }
                            }
                            //Otherwise, there is no common substring.  Show all of the options.
                            else {
                                split_command.push(last_arg)                                                    //Join final argument to split_command
                                $("#term").terminal().echo(">" + split_command.join(" ").replace(/\s+$/, ""));     //Print what the user entered
                                $("#term").terminal().echo(substring_matches.join(" "));                        //Print the matches
                                $("#term").terminal().set_command(split_command.join(" ").replace(/\s+$/, ""));  //Set the text to what the user entered
                            }
                        }
                        //If no match exists
                        else {
                            //DO NOTHING (except remove TAB)
                            $("#term").terminal().set_command(command.replace(/\s+$/, ""));
                        }
                    }
                    else {
                        //DO NOTHING (except remove TAB)
                        $("#term").terminal().set_command(command.replace(/\s+$/, ""));
                    }
                }
            }
        }
    });
});