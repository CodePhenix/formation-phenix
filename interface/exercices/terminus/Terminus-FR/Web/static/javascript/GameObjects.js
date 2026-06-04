/**
* Objects used to build levels
*/

/**
* ROOMS
* Players can cd between rooms
*
* API: Room(roomname, introtext, img){
*/

//HOME
var Home = new Room("Foyer",
    "Vous êtes dans le confort de votre propre maison.",
    "loc_farm.gif");
Home.addItem(new Item("LettreBienvenue", "Bienvenue ! Si vous êtes nouveau dans le jeu, voici quelques conseils : \n\n" +
        "Observez votre environnement avec la commande \"ls\". \n" +
        "Déplacez-vous vers un nouvel endroit avec la commande \"cd EMPLACEMENT\" \n" +
        "Vous pouvez revenir en arrière avec la commande \"cd ..\". \n" +
        "Interagissez avec les éléments du monde avec la commande \"less OBJET\" \n\n" +
        "Si vous oubliez où vous êtes, tapez \"pwd\" \n\n" + 
        "Allez-y, explorez. Nous espérons que vous apprécierez ce que vous trouverez. Faites ls comme première commande.\n"));

//WESTERN FOREST
var WesternForest = new Room("ForetOuest",
    "Vous avancez profondément dans la forêt. \
Le chemin mène à une clairière au sein de laquelle un bâtiment immense se dresse. Une pancarte \
indique : Académie de Lanceur de Sorts : L’École d’Élite de la Magie.",
    "loc_forest.gif");
WesternForest.addItem(new Item("Panneau",
    "Académie de Lanceur de Sorts : L’École d’Élite de la Magie \
Aujourd’hui : Leçons d’introduction gratuites ! Apprentis bienvenus !",
    "loc_forest.gif"));
WesternForest.addItem(new Item("PanneauArriere",
    "Si vous souhaitez retourner directement au Foyer, tapez simplement 'cd ~' ou juste `cd` \
et vous reviendrez au Foyer. Revenir ici risque d’être plus difficile cependant.",
    "loc_forest.gif"));

//SPELL CASTING ACADEMY
var SpellCastingAcademy = new Room("AcademieMagie", 
    "Les couloirs sont remplis de l’agitation des étudiants qui se précipitent vers leurs cours. \
L’intérieur de l’académie est aussi impressionnant que l’extérieur : avec ses hauts plafonds et ses arches gothiques, \
elle semble encore plus grande à l’intérieur.", 
    "loc_academy.gif");
var HurryingStudent = new Item("EtudiantPresse", 
    "Vous parlez à un étudiant pressé. \
L’étudiant vous bouscule et tombe au sol. \
Il se relève rapidement, \
s’excuse et vous demande si tout va bien. Vous êtes plus robuste que vous n’en avez l’air et n’êtes pas blessé. \
« Je suis vraiment désolé, j’étais tellement pressé que je ne vous ai pas vu... \
Dites, je ne vous ai jamais vu ici. Vous êtes nouveau, hein ? » L’étudiant vous fait un clin d’œil. \
« Ne vous inquiétez pas, il y a plein de débutants aujourd’hui. Pourquoi ne pas aller assister à l’une des leçons gratuites ? \
J’aimerais vous montrer où aller, mais je dois filer en cours. Dirigez-vous dans le couloir des salles de classe, \
quelqu’un pourra vous aider. À plus tard ! » \
L’étudiant s’enfuit en courant. Vous remarquez qu’il a probablement votre âge. \
Malheureusement, il disparaît au détour d’un couloir avant que vous puissiez demander son nom.", 
    "item_student.gif")
SpellCastingAcademy.addItem(HurryingStudent);

//PRACTICE ROOM
var PracticeRoom = new Room("SalleEntrainement", 
    "La pièce est remplie de mannequins \
sur lesquels les étudiants s’entraînent à lancer leurs nouveaux sorts.",
    "loc_practiceroom.gif");
PracticeRoom.addItem(new Item("Instructions", 
    "Bienvenue dans la Salle d’Entraînement. Ici, \
vous trouverez des mannequins pour tester vos nouveaux sorts. Allez-y, essayez ! \
Si vous ne connaissez pas encore de sorts, retournez assister aux Cours.", 
    "item_manuscript.gif"));
PracticeRoom.addItem(new Item("MannequinEntrainement1", "C’est un mannequin d’entraînement.", "item_dummy.gif"));
PracticeRoom.addItem(new Item("MannequinEntrainement2", "C’est un mannequin d’entraînement.", "item_dummy.gif"));
PracticeRoom.addItem(new Item("MannequinEntrainement3", "C’est un mannequin d’entraînement.", "item_dummy.gif"));
PracticeRoom.addItem(new Item("MannequinEntrainement4", "C’est un mannequin d’entraînement.", "item_dummy.gif"));
PracticeRoom.addItem(new Item("MannequinEntrainement5", "C’est un mannequin d’entraînement.", "item_dummy.gif"));
PracticeRoom.addCommand("mv");

//BOX
var Box = new Room("Boite", "Cette boîte est trop petite pour que vous puissiez y entrer.", "item_box.gif");
Box.removeCommand("cd");
Box.addCmdText("cd", "Vous êtes trop grand pour entrer dans la boîte.");

//NORTHERN MEADOW
var NorthernMeadow = new Room("PrairieNord", 
    "C’est une belle prairie verdoyante. Un poney dodu mais majestueux gambade joyeusement.",
    "loc_meadow.gif");
NorthernMeadow.addItem(new Item("Poney", 
    "Vous vous approchez du poney et tentez de monter sur lui. \
Il obéit et vous tournez en rond un moment, sur son dos. Puis, las de vous porter, il vous désarçonne. \
Il regarde ensuite vers l’est, comme s’il vous suggérait d’aller dans cette direction.", 
    "item_fatpony.gif"));

//EASTERN MOUNTAINS
var EasternMountains = new Room("MontagneEst", 
    "Vous avancez sur un chemin de montagne \
qui finit par mener à l’entrée d’une grotte. Juste devant la grotte est assis un vieil homme.", 
    "loc_mountains.gif");
EasternMountains.addItem(new Item("VieilHomme", 
    "Vous parlez avec le vieil homme. Il vous salue \
chaleureusement, comme si vous étiez de vieux amis. Vous vous sentez étrangement à l’aise. \n\
« Bonjour aventurier ! Une belle journée à vous ! Vous semblez jeune et plein d’énergie. \
Si vous êtes assez courageux, votre destinée vous attend dans cette grotte. \
Cette destinée se manifestera sous la forme d’un portail. Entrez dans ce portail et commencez le prochain chapitre de votre vie. »\n\
Le vieil homme voit la surprise sur votre visage et vous sourit d’un air rassurant : \
« Je ne suis qu’un vieillard fragile et ne peux pas vous accompagner dans la grotte, \
mais je peux vous fournir quelques vieux manuscrits contenant des sorts simples \
qui vous aideront dans votre voyage. Lisez-les et essayez ces sorts. »", 
    "item_mysteryman.gif"));
EasternMountains.addItem(new Item("VieuxManuscrits", 
    "Si vous oubliez un sort, utilisez simplement \
\"help\" et une liste des sorts disponibles apparaîtra. Si vous avez besoin de détails \
sur l’utilisation d’un sort précis, utilisez 'man' suivi du nom du sort. Par exemple, \
pour obtenir des détails sur l’utilisation du sort « mv », vous taperiez : \
man mv",
    "item_manuscript.gif"));

//LESSONS
var Lessons = new Room("Cours", 
    "Vous entrez dans le couloir des salles de classe, prêt et enthousiaste. \
L'ambiance y est beaucoup plus calme, car la plupart des cours ont déjà commencé. \
On vous conduit rapidement au Cours d’Introduction, déjà entamé. \
Vous commencez le cours sur le « Sort de Déplacement ».",
    "loc_classroom.gif");
Lessons.addItem(new Item("Professeur", 
    "Le professeur est difficile à comprendre, mais vous saisissez suffisamment pour retenir trois choses : \
\n\
1. Vous pouvez utiliser 'mv' pour déplacer des objets dans le monde \n\
2. Vous devez indiquer l’objet et le nouvel emplacement (c.-à-d. : mv OBJET NOUVELENDROIT) \n\
3. Ce sort ne fonctionne que sur certains objets, par exemple les MannequinEntrainement dans la SalleEntrainement \n\
\n\
Vous n’avez pas assez prêté attention pour savoir quels types d’objets sont non déplaçables. \
Tant pis, expérimenter a toujours été davantage votre style. Mais restez prudent !", 
    "item_professor.gif"));

//CAVE
var Cave = new Room("Grotte", "C’est une grotte typique : sombre et humide.", "loc_cave.gif");
		
//DARK CORRIDOR
var DarkCorridor = new Room("CouloirSombre", 
    "Vous traversez le couloir sombre et débouchez sur une petite pièce humide au bout.", 
    "loc_corridor.gif");

//STAIRCASE
var Staircase = new Room("Escalier", 
    "L’escalier rocheux vous mène à une impasse, indiqué par une pancarte.", 
    "loc_stair.gif");
Staircase.addItem(new Item("Sign", "CUL-DE-SAC", "item_sign.gif"));

//DANK ROOM
var DankRoom = new Room("PieceHumide", 
    "C’est une pièce humide et poussiéreuse. Un gros rocher rond est posé sur la droite.",
    "loc_darkroom.gif");
var Boulder = new Item("Rocher",
    "Vous sentez un léger courant d’air provenant de derrière le rocher. \
Peut-être devriez-vous le déplacer ?",
    "item_boulder.gif")
DankRoom.addItem(Boulder);
DankRoom.addCommand("mv");

//SMALL HOLE
var SmallHole = new Room("PetitTrou", 
    "Il n’y a rien d’intéressant dans le petit trou, et c’est assez sale. \
Vous n’avez vraiment aucune raison d’y entrer.",
    "none.gif");
SmallHole.addCmdText("cd", 
    "Il n’y a rien d’intéressant dans le petit trou, et c’est vraiment sale. Je vous conseille de ressortir.");
//add event handler to the "addItem" method of SmallHole to cause the rest of the level to be connected
DankRoom.ev.addListener("mvBoulder", function(){
	// link_rooms(DankRoom, Tunnel);
    state.applyState("mvBoulder");
});

//TUNNEL
var Tunnel = new Room("Tunnel", 
    "C’est assez humide ici. \
    Vous remarquez un petit mouvement poilu dans le coin de votre vision. \
C’est probablement un rat. Un très gros rat. Peut-être une mangouste. \
Au bout du tunnel, vous trouvez une large pièce recouverte de murs en pierre.",
    "loc_tunnel.gif");
Tunnel.addItem(new Item("Rat", 
    "En y regardant de plus près, vous déterminez que la présence poilue \
est en réalité un rat… de la taille d’un petit chien. Il vous mord. \
Vous êtes très contrarié.",
    "item_rat.gif"));

//STONE CHAMBER
var StoneChamber = new Room("PieceEnPierre", 
    "Toute la pièce est baignée d'une faible lumière verte. \
La source de cette lumière est un portail au centre de la salle. \
C’est évidemment le portail dont parlait le vieil homme.", 
    "loc_portalroom.gif");

//PORTAL (to bring you to the next level)
var Portal = new Room("Portail", 
    "Vous avez été transporté à travers le temps...", 
    "item_portal.gif");
//---------------END LEVEL 1-----------------


//---------------LEVEL 2---------------------
//TOWN SQUARE
var TownSquare = new Room("PlaceVillage", 
    "Vous êtes sur une place ensoleillée et spacieuse. \
Au centre du rond-point pavé se trouve un socle, mais aucune statue dessus. \
L’architecture est charmante, mais tout le monde semble nerveux pour une raison inconnue.",
    "loc_square.gif");
TownSquare.addItem(new Item("CitoyenLambda1", 
    "« Excusez-moi », commencez-vous. L’homme se retourne, surpris. \
« Oh, bonjour ! Bienvenue à Terminus. Veuillez m’excuser, mais nous sommes tous un peu tendus \
ces temps-ci, avec le Sorcier Sombre qui répand sa corruption le long de la côte. \
Vous devriez être prudent ! »",
    "item_citizen1.gif"));
TownSquare.addItem(new Item("CitoyenLambda2", 
    "L’homme lève les yeux de son journal lorsqu’il vous voit regarder. \
« Avez-vous lu ceci ? » s’exclame-t-il, secouant la dernière édition du « Dernier Mot » \
devant vous. « Il est écrit ici que la corruption du sorcier s’est étendue jusqu’à \
Oston au sud, et que New Console est complètement irrécupérable ! Des temps dangereux… », \
grogne-t-il en retournant à sa lecture.",
    "item_citizen2.gif"));
TownSquare.addItem(new Item("DemoiselleEnDetresse", 
    "La femme sanglote de manière incontrôlable, la tête dans les mains. \
« Mon bébé », pleure-t-elle, « Ils ont enlevé mon bébé ! Je suis sûre que ce sorcier \
y est pour quelque chose. »",
    "item_lady.gif"));

//MARKETPLACE
var Marketplace = new Room("Marche", 
    "Des vendeurs et leurs marchandises bordent les rues.",
    "loc_market.gif");
var Vendor = new Item("Vendeur", 
    "« Salut. » Le vendeur vous sourit d’un air désagréable, \
révélant une bouche pleine de dents en or. « Alors ? Qu’est-ce que vous cherchez ? »",
    "item_merchant.gif");
Vendor.addCmdText("rm", 
    "« Ha ! Ce sort ne fonctionne pas sur tout, vous savez. J’ai peut-être oublié \
de le mentionner avant de vous le vendre… »");
Marketplace.addItem(Vendor);

var RmSpell = new Item("rmSortilege", 
    "« Ah, oui, le sortilège rm », marmonne le vendeur. « Il suffit de dire “rm” suivi \
du nom d’un objet ou d’une personne, et ils disparaîtront de ce plan... pour toujours. \
Avez-vous le courage de l’utiliser, je me demande ? »",
    "item_manuscript.gif");

Marketplace.addItem(RmSpell);

var MkdirSpell = new Item("mkdirSortilege",
    "« Transformez les rêves en réalité. Dites simplement “mkdir” suivi de n’importe quel nom qui vous plaît, \
et vous pouvez créer un nouvel endroit qui n’existait pas auparavant. Un peu capricieux, ceci dit... » marmonne le vendeur.",
    "item_manuscript.gif");

Marketplace.addItem(MkdirSpell);

//LIBRARY
var Library = new Room("Bibliotheque", 
    "La bibliothèque est faiblement éclairée et sent la moisissure. \
Malgré tout, il y fait chaud, et la douce moquette verte la rend plutôt accueillante.",
    "loc_library.gif");
Library.addItem(new Item("LivreDeSortsTotalementGenial",
    "Les légendes parlent d’un grand mot de pouvoir permettant à celui qui le prononce \
d’accomplir n’importe quelle action sur n’importe quel objet. « Sudo », comme l’appelaient les anciens, \
offrait une maîtrise totale sur les éléments. \
Malheureusement — ou heureusement — le mot de passe mystique a été perdu \
au fil du temps.",
    "item_radspellbook.gif"));
Library.addItem(new Item("RomanDePoche", 
    "Vous ouvrez le roman de poche à une page au hasard. \
« Oh, Horatio, ne t’en fais pas mon amour ! Je te sauverai ! » s’exclama Antonia en \
brandissant son épée et en transperçant habilement le dragon. Horatio, stupéfait de ne pas avoir fini en carbonade, \
s’effondra au sol en sanglotant et… — Vous refermez le livre, peu intéressé, \
et le remettez sur l’étagère.",
    "item_romancenovel.gif"));
Library.addItem(new Item("HistoireTerminus", 
    "Cela semble être un livre intéressant, mais il est bien trop long et les caractères trop petits. \
En voici un extrait :\n \
SorcierSombre', '...de vieux récits parlent d’un Sorcier Sombre qui fragmentera le monde...\n \
...seul le faiseur-de-mondes pourra arrêter le virus du Sorcier Sombre...\n\
...et que le pouvoir de « sudo » serait peut-être la seule faiblesse du Sorcier Sombre...\n",
    "item_historybook.gif"));
Library.addItem(new Item("NostalgieDuFoyer", 
    "Si vous avez un coup de nostalgie pour votre Foyer, tapez simplement 'cd ~' et vous y retournerez. \
Mais souvenez-vous : revenir ici sera plus difficile.",
    "item_historybook.gif"));

Library.addItem(new Item("LevierDiscret", 
   "Vous repérez un levier caché derrière les étagères. Par curiosité, vous le tirez, \
et un panneau coulisse pour révéler une pièce secrète.",
   "item_lever.gif"));
Library.addCommand("grep");
Library.ev.addListener("pullLever", function(){
    state.applyState("pullLever");
});

//BACK ROOM
var BackRoom = new Room("ArriereBoutique", 
    "Vous découvrez une pièce secrète. Vous y trouvez un bibliothécaire \
seul avec un petit elfe. Vous espérez ne rien interrompre.",
    "loc_backroom.gif");
BackRoom.addItem(new Item("Grep", 
    "L’elfe, particulièrement laid, se tourne vers vous avec une expression aigre. \
« Greeeeeep », dit-il avec mauvaise humeur.",
    "grep.gif"));
BackRoom.addItem(new Item("BouquinEntrainement", 
    "Un chasseur sachant chasser\nsans son chien\nest un bon\n\
chasseur"));

var Librarian = new Item("Bibliothecaire", 
    "« Hm ? Oh, bonjour. Je m’excuse pour le désordre, mais je suis très occupé \
à faire des recherches sur le Sorcier Sombre. Pourriez-vous me rendre un service ? \
Allez consulter toutes les références au SorcierSombre dans l’Histoire de Terminus. Mon assistant Grep \
peut vous aider. » \
Grep vous fixe avec hostilité. « Greeepp. » « Pour chercher dans le contenu d’un livre, tapez simplement \
\"grep PHRASE ITEM\", où PHRASE est la phrase à rechercher, \
et ITEM le nom du livre. Essayez avec le BouquinEntrainement ici — \
voyez si vous pouvez trouver la ligne contenant le mot 'chien'. »",
    "item_librarian.gif");
BackRoom.addItem(Librarian);
BackRoom.addCommand("grep");

//ROCKY PATH
var RockyPath = new Room("CheminRocailleux",
    "Le chemin envahi de mauvaises herbes mène vers les champs.",
    "loc_rockypath.gif");
var LargeBoulder = new Item("GrosRocher", "Un énorme rocher bloque votre passage. Il est beaucoup trop gros pour être déplacé.", "item_boulder.gif");
LargeBoulder.addCmdText("rm", "Le rocher disparaît dans un petit ‘pop’. ");
RockyPath.addItem(LargeBoulder);
RockyPath.addCommand("rm");
LargeBoulder.addValidCmd("rm");
RockyPath.ev.addListener("rmLargeBoulder", function(){
    state.applyState("rmLargeBoulder");
});

//ARTISAN'S SHOP
var ArtisanShop = new Room("Atelier", 
    "Les murs de l’atelier sont couverts d’horloges, \
toutes légèrement désynchronisées. À l’établi, une femme portant d’énormes lunettes \
manie un chalumeau avec un enthousiasme inquiétant.",
    "loc_artisanshop.gif");

var StrangeTrinket = new Item("BibelotEtrange", 
    "Cela ressemble à un cristal de quelque sorte. Il est très beau.",
    "item_trinket.gif");
StrangeTrinket.addCmdText("rm", 
    "Votre mère ne vous a jamais appris qu’il est impoli d’effacer les objets \
des autres de leur plan d’existence ?");
StrangeTrinket.addCmdText("mv", 
    "Vous ne pouvez pas prendre ça, ce n’est pas à vous !");
ArtisanShop.addItem(StrangeTrinket);

var ClockworkDragon = new Item("DragonMecanique",
    "Un dragon de la taille d’un petit chien gambade joyeusement dans la pièce. \
Vous pourriez croire qu’il est réel s’il n’y avait pas la clé de remontage dans son dos.",
    "item_clockdragon.gif");
ClockworkDragon.addCmdText("rm",  
    "Votre mère ne vous a jamais appris qu’il est impoli d’effacer les objets \
des autres de leur plan d’existence ?");
ClockworkDragon.addCmdText("mv", 
    "Vous ne pouvez pas prendre ça, ce n’est pas à vous !");
ArtisanShop.addItem(ClockworkDragon);

var Artisan = new Item("Artisan", 
    "L’artisan relève ses lunettes et vous regarde \
avec surprise. « Vous êtes le nouvel assistant ? Vous êtes en retard ! … \
\n\
Vous dites que vous n’êtes pas mon assistant ? \
Eh bien, cela ne veut pas dire que vous ne pouvez pas être utile. J’ai besoin d’engrenages, rapidement ! \
\n\
… \
\n\
Vous ne savez même pas comment fabriquer des choses ? Hmph. Certains assistants, vraiment… \
Dites simplement “touch ITEM”, d’accord ? Où ITEM est le nom de la chose que vous voulez créer. \
Maintenant, fabriquez-moi un Engrenage ! Puis revenez me voir. »",
    "item_artisan.gif");
ArtisanShop.addItem(Artisan);

ArtisanShop.addCommand("touch");
ArtisanShop.ev.addListener("touchGear", function(){
    state.applyState("touchGear");
});
ArtisanShop.ev.addListener("FiveGearsCopied", function(){
    state.applyState("FiveGearsCopied");
});

//FARM
var Farm = new Room("Ferme",
    "Il y avait autrefois une ferme ici, mais désormais les champs \
sont brûlés et brunis par le soleil.",
    "loc_farm.gif");
var EarOfCorn = new Item("EpiDeMais",
    "Le maïs a l’air triste et flétri.",
    "item_corn.gif");
EarOfCorn.addCmdText("rm",
    "Pourquoi détruire l’unique nourriture d’un homme affamé ?");
Farm.addItem(EarOfCorn);

var Farmer = new Item("Fermier", 
    "« Ruiné ! Je suis ruiné ! Regardez ces récoltes… il ne reste presque rien ! \
Les sbires du sorcier sont passés ici la semaine dernière… ils ont tout détruit. Comment vais-je nourrir \
mes trois enfants avec un seul épi de maïs ? J’aurais vraiment besoin d’un AutreEpiDeMais ! »",
    "item_farmer.gif");
Farm.addItem(Farmer);

Farm.addCommand("cp");
Farm.ev.addListener("CornCopied", function(){
    state.applyState("CornCopied");
});

//CLEARING
var Clearing = new Room("Clairiere", 
    "Il y a une petite clairière herbeuse ici, avec un homme assis \
sur une pierre, en train de pleurer. Derrière lui se trouve un tas de décombres.",
    "loc_clearing.gif");
var CryingMan = new Item("HommeEnPleurs", 
    "« Vous ! Vous êtes un utilisateur de magie ! Je le vois, vous avez cette tête-là. \
Vous venez achever le travail, hein ? Eh bien allez-y, faites de votre pire, il ne me reste plus rien \
à perdre. Pas depuis que les vôtres sont venus il y a quelques jours. » \
\n\n\
« Qu’est-ce qui s’est passé ? Vous OSEZ demander — vous savez très bien ce qui s’est passé. \
Vos amis, les sbires du sorcier, ont détruit ma maison et kidnappé ma pauvre fille, \
voilà ce qui s’est passé ! Ma femme est même partie en ville chercher de l’aide, \
et je n’ai plus eu de nouvelles ! » \
\n\n\
« Hm ? Bon, c’est vrai que vous ne ressemblez pas vraiment à un sbire du sorcier. \
Mais je ne fais pas confiance aux gens de magie. Si vous êtes vraiment qui vous prétendez être, \
prouvez vos bonnes intentions en me fabriquant une nouvelle Maison ! »",
    "item_man.gif");
Clearing.addItem(CryingMan);

Clearing.removeCommand("cd");
Clearing.addCmdText("cd", "Vous ne pouvez pas traverser le pont tant que vous n’avez pas remplacé la Planche manquante.");
Clearing.addCommand("mkdir");
Clearing.ev.addListener("HouseMade", function(){
    state.applyState("HouseMade");    
});

//BROKEN BRIDGE
var BrokenBridge = new Room("PontCasse",
    "Un pont en bois grinçant s’étend au-dessus d’un ravin. Mais il manque \
une Planche, et le trou est trop large pour sauter.",
    "loc_bridge.gif");

BrokenBridge.addCommand("touch");
BrokenBridge.ev.addListener("touchPlank", function(){
    state.applyState("touchPlank");
});

//OMINOUS-LOOKING PATH
var OminousLookingPath = new Room("SentierSinistre", 
    "Le chemin mène vers une grotte sombre. C’est un simple chemin de pavés, mais pour \
une raison obscure il vous remplit d’un profond sentiment de malaise.",
    "loc_path.gif");

var ThornyBrambles = new Item("RoncesEpineuses", 
    "Ce fourré de ronces est couvert d’épines terrifiantes. Vous \
ne pouvez pas le contourner, et il est absolument hors de question de passer au travers. \
Et pourtant, quelque chose vous dit que vous en avez vraiment envie.",
    "item_brambles.gif");

ThornyBrambles.addCmdText("mv",
    "Vous ne pouvez pas les toucher : elles sont couvertes d’épines. Aïe !");
ThornyBrambles.addCmdText("rm", 
    "Vous prononcez les mots du sort de Disparition et les ronces scintillent \
d’un bleu profond. Après quelques crépitements, elles disparaissent dans un nuage de fumée.");
ThornyBrambles.addValidCmd("rm");
OminousLookingPath.addItem(ThornyBrambles);
OminousLookingPath.addCommand("rm");

OminousLookingPath.ev.addListener("rmBrambles", function(){
    state.applyState("rmBrambles");
});

//SLIDE
var Slide = new Room("Toboggan",
    "Le toboggan est long. Au bout, vous apercevez les FichiersNoyau.");
Slide.removeCommand("cd");
Slide.addCmdText("cd", "Vous devez d’abord passer devant le TrollMoche.");

//KERNEL FILES
var KernelFiles = new Room("FichiersNoyau",
    "Les FichiersNoyau contiennent le sudo-secret (non, pas un \
pseudo). Vous feriez mieux de lire les Instructions.");

var Certificate = new Item("Certificat",
    "Vous devez lire le Certificat avec le mot de passe sudo.");
KernelFiles.addItem(Certificate);

var Instructions = new Item("Instructions",
    "Je vois que vous avez appris à utiliser votre ami grep. \
Si ce n’est pas le cas, il serait sage de retourner à la Bibliothèque pour réviser un peu. \
Car ici, vous aurez besoin de lui. Voici votre tâche : \n\
Il y a beaucoup d’objets dans la salle contenant plus de fichiers noyau et l’un d’eux contient le mot de passe sudo. Ce \
mot de passe est extrêmement puissant : il vous permet de faire absolument ce que vous voulez dans le monde. \
Il vous permet de lancer un sort sur n’importe quel objet protégé d’une quelconque manière. Vous savez que le mot de passe \
se trouve dans l’un de ces fichiers .txt. Vous savez aussi qu’il apparaît \
sur une ligne contenant le mot : 'password='. Vous devriez le trouver grâce à grep. \
Ensuite, vous devrez utiliser le sort sudo pour trouver le Paradis. Pour cela, il vous suffit \
de taper 'sudo' avant la commande que vous voulez exécuter, comme ceci : \
'sudo cp ITEM_A ITEM_B'. Vous serez alors invité à entrer le mot de passe sudo. \
Tapez le mot de passe, et le sort suivant sudo sera lancé. Si vous ouvrez \
le Certificat dans le Paradis avec sudo, vous aurez véritablement trouvé le Paradis.");

var L_txt = new Item("L_txt", "Alice commençait à se lasser d’être assise près de sa \n\
sœur au bord de la rivière, sans rien avoir à faire : une ou deux fois, elle avait jeté un œil au \n\
livre que sa sœur lisait, mais il n’y avait ni images ni dialogues, « et à quoi peut bien servir \n\
un livre, pensait Alice, sans images ni dialogues ? » \n\n\
Elle se demandait donc (aussi bien qu’elle le pouvait, car la chaleur de la journée \n\
la rendait très somnolente et stupide) si le plaisir de fabriquer une \n\
guirlande de marguerites valait la peine de se lever et d’aller cueillir des fleurs, \n\
lorsqu’un Lapin Blanc aux yeux roses passa tout près d’elle en courant.\n\n\
Cela n’avait rien de très remarquable ; et Alice ne trouva pas non plus très étrange d’entendre le Lapin se dire à lui-même : \n\
« Oh là là ! Oh là là ! Je vais être en retard ! » (Quand elle y repensa plus tard, \n\
il lui sembla qu’elle aurait dû s’en étonner, mais sur le moment, tout lui parut parfaitement naturel.) \n\
Mais lorsque le Lapin sortit VRAIMENT UNE MONTRE \n\
DE LA POCHE DE SON GILET et la regarda avant de se précipiter plus loin, \n\
Alice bondit sur ses pieds, car soudain il lui traversa l’esprit qu’elle n’avait jamais vu \n\
de lapin avec une poche de gilet ni une montre à sortir de celle-ci. Brûlant de curiosité, \n\
elle traversa le champ en courant derrière lui, et arriva juste à temps pour le voir \n\
disparaître dans un large terrier au pied d’une haie. \n\n\
L’instant d’après, Alice se glissa à sa suite, sans prendre une seule seconde pour se demander \n\
comment elle ferait pour remonter. \n\n\
Le terrier ressemblait d’abord à un long tunnel droit, puis il plongeait \n\
soudainement, si soudainement qu’Alice n’eut pas une seconde pour penser à s’arrêter \n\
avant de se retrouver en train de tomber dans un puits très profond.\n\n\
Soit le puits était très profond, soit elle tombait très lentement, car elle eut \n\
tout le temps de regarder autour d’elle et de se demander ce qui allait se passer ensuite. \n\
Tout d’abord, elle essaya de regarder en bas pour voir où elle allait atterrir, \n\
mais il faisait trop sombre pour distinguer quoi que ce soit ; ensuite, elle observa \n\
les parois du puits, qui étaient garnies d’étagères et de placards ; ici et là, \n\
des cartes et des tableaux étaient accrochés à des chevilles. Elle prit un bocal d’une étagère \n\
au passage ; il portait l’étiquette \n\
« CONFITURE D’ORANGE », mais à sa grande déception, il était vide ; elle ne voulut pas \n\
le lâcher par peur de blesser quelqu’un, et réussit donc à le remettre dans un placard \n\
en passant devant. \n\n\
« Eh bien ! » pensa Alice, « après une chute pareille, les escaliers ne me feront plus peur ! \n\
Tous me trouveront tellement courageuse à la maison ! Je ne dirais même rien, \n\
même si je tombais du toit ! » (Ce qui était sans doute vrai.)\n\n\
En bas, en bas, en bas. La chute allait-elle donc finir un jour ? « Je me demande combien \n\
de kilomètres j’ai parcouru jusqu’ici », dit-elle à voix haute. « Je dois être près du centre de la Terre. \n\
Voyons : cela ferait bien quatre mille kilomètres de profondeur, je crois… » \n\
(Car, voyez-vous, Alice avait appris des tas de choses de ce genre à l’école, et même si \n\
ce n’était pas le meilleur moment pour exhiber son savoir, puisqu’il n’y avait personne pour l’écouter, \n\
c’était toujours une bonne occasion de s’entraîner.) \n\
« Oui, cela doit être à peu près la bonne distance… mais alors, à quelle \n\
latitude et quelle longitude je me trouve ? » (Alice n’avait aucune idée de ce qu’est la latitude, \n\
ni la longitude, mais trouvait simplement que ces mots sonnaient bien.)\n\n\
Bientôt, elle reprit : « Je me demande si je vais traverser la Terre \n\
tout entière ! Comme ce serait drôle d’arriver parmi des gens qui marchent la tête en bas ! \n\
Les Antipathiques, je crois… » (Elle fut plutôt soulagée qu’il n’y ait personne pour \n\
l’entendre cette fois-ci, car ce n’était absolument pas le bon mot.) \n\
« Mais je devrai leur demander comment s’appelle leur pays. \n\
S’il vous plaît, Madame, est-ce la Nouvelle-Zélande ou l’Australie ? » \n\
(Et elle essaya de faire une révérence en disant cela — imaginez faire une révérence \n\
en tombant dans les airs ! Croyez-vous que vous pourriez y arriver ?) \n\
« Et quelle petite fille ignorante on penserait que je suis d’avoir posé la question ! \n\
Non, ça ne va pas du tout. Peut-être que je verrai le nom écrit quelque part. » \n\n\
En bas, en bas, en bas. Il n’y avait rien d’autre à faire, alors Alice se remit à parler : \n\
« Dinah va beaucoup me manquer ce soir, je pense ! » (Dinah était son chat.) \n\
« J’espère qu’ils n’oublieront pas sa soucoupe de lait à l’heure du thé. \n\
Dinah, ma chérie ! Comme j’aimerais que tu sois ici avec moi ! Il n’y a pas de souris dans l’air, \n\
je le crains, mais tu pourrais attraper une chauve-souris, et c’est presque comme une souris, tu sais. \n\
Mais est-ce que les chats mangent les chauves-souris ? Je me le demande. » \n\
Et ici, Alice commença à devenir assez somnolente, et se mit à répéter pour elle-même \n\
dans un état rêveur : « Est-ce que les chats mangent les chauves-souris ? Est-ce que les chats \n\
mangent les chauves-souris ? » et parfois, « Est-ce que les chauves-souris mangent les chats ? » \n\
car, comme elle ne pouvait répondre à aucune des deux questions, cela revenait au même. \n\
Elle sentait qu’elle s’endormait, et venait juste de commencer à rêver qu’elle marchait main \n\
dans la main avec Dinah, lui disant très sérieusement : « Maintenant, Dinah, dis-moi la vérité : \n\
as-tu déjà mangé une chauve-souris ? » quand soudain, patatras ! \n\
Elle atterrit sur un tas de feuilles sèches et de petits branchages, et la chute était terminée.\n\n\
Alice n’était pas blessée le moins du monde, et elle sauta immédiatement sur ses pieds : \n\
elle leva les yeux, mais tout était sombre au-dessus d’elle ; devant elle s’étendait un autre \n\
long couloir, et le Lapin Blanc était encore en vue, courant dans le fond. \n\
Il n’y avait pas une seconde à perdre : Alice partit comme le vent, \n\
et arriva juste à temps pour l’entendre dire en tournant un coin : \n\
« Oh mes oreilles et mes moustaches, comme je suis en retard ! » \n\
Elle le suivit en tournant le coin, mais le Lapin avait disparu : \n\
elle se retrouva dans une longue salle basse, éclairée par une rangée \n\
de lampes suspendues au plafond. \n\n\
Il y avait des portes tout autour de la salle, mais elles étaient toutes fermées à clé ; \n\
et après avoir longé un côté puis l’autre, en essayant chaque porte, \n\
elle revint tristement au centre, se demandant comment elle pourrait bien sortir de là.\n\n\
Soudain, elle tomba sur une petite table à trois pieds, entièrement \n\
en verre massif ; il n’y avait dessus qu’une minuscule clé d’or, et \n\
la première pensée d’Alice fut qu’elle appartenait peut-être à l’une des portes de la salle ; \n\
mais hélas ! soit les serrures étaient trop grandes, soit la clé était trop petite, \n\
dans tous les cas elle n’ouvrait aucune porte. \n\
Cependant, à son second passage, elle remarqua un petit rideau qu’elle n’avait pas vu auparavant, \n\
et derrière se trouvait une petite porte d’environ trente centimètres de haut : \n\
elle essaya la minuscule clé d’or dans la serrure, et, à sa grande joie, elle l’ouvrit !\n\
\n\
Alice ouvrit la porte et vit qu’elle donnait sur un petit couloir, pas beaucoup plus large \n\
qu’un terrier de rat : elle s’agenouilla et regarda au travers du passage dans le plus joli jardin \n\
qu’elle eût jamais vu. Comme elle désirait sortir de cette sombre salle et se promener \n\
parmi ces parterres de fleurs éclatantes et ces fraîches fontaines ! Mais elle ne pouvait même pas \n\
passer la tête par l’ouverture ; « et même si ma tête passait », pensa la pauvre Alice, \n\
« cela ne servirait à rien sans mes épaules. Oh, comme j’aimerais pouvoir me replier \n\
comme un télescope ! Je crois que je le pourrais, si seulement je savais comment m’y prendre. » \n\
Car, voyez-vous, tant de choses extraordinaires s’étaient produites dernièrement qu’Alice \n\
commençait à penser que très peu de choses étaient réellement impossibles. \n\n\
Il ne servait à rien d’attendre près de la petite porte, alors elle retourna vers la table, \n\
espérant à moitié y trouver une autre clé, ou au moins un livre expliquant comment plier \n\
les gens comme des télescopes ; cette fois, elle trouva une petite bouteille dessus \n\
(qui n’était certainement PAS là avant, dit Alice), et autour du goulot était attachée \n\
une étiquette de papier portant les mots « BUVEZ-MOI » magnifiquement imprimés en grandes lettres.\n\n\
C’était bien joli de dire « Buvez-moi », mais la petite Alice prudente ne comptait pas \n\
faire ÇA si vite. « Non, je vais d’abord regarder », dit-elle, « et voir si c’est marqué \n\
‘poison’ ou pas » ; car elle avait lu plusieurs charmantes histoires sur des enfants qui \n\
s’étaient brûlés, ou s’étaient fait dévorer par des bêtes sauvages et autres choses désagréables, \n\
tout cela parce qu’ils n’avaient PAS retenu les règles simples qu’on leur avait enseignées : \n\
par exemple, qu’un tisonnier rouge brûle si on le tient trop longtemps ; et que si on se coupe \n\
un doigt TRÈS profondément avec un couteau, généralement ça saigne ; et elle n’avait jamais oublié \n\
que si on boit beaucoup dans une bouteille portant l’étiquette ‘poison’, il est presque certain \n\
que cela finira mal, tôt ou tard. \n\n\
Cependant, cette bouteille n’était PAS marquée ‘poison’, alors Alice osa y goûter, et la trouva \n\
délicieuse (elle avait un goût à la fois de tarte aux cerises, de crème anglaise, \n\
d’ananas, de dinde rôtie, de caramel et de pain grillé chaud beurré), et elle la finit très vite.");

var M_txt = new Item("M_txt", "Alice commençait à se lasser d’être assise près de sa \n\
sœur au bord de la rivière, sans rien avoir à faire : une ou deux fois, elle avait jeté un œil au \n\
livre que sa sœur lisait, mais il n’y avait ni images ni dialogues, « et à quoi peut bien servir \n\
un livre, pensait Alice, sans images ni dialogues ? » \n\n\
Elle se demandait donc (aussi bien qu’elle le pouvait, car la chaleur de la journée \n\
la rendait très somnolente et stupide) si le plaisir de fabriquer une \n\
guirlande de marguerites valait la peine de se lever et d’aller cueillir des fleurs, \n\
lorsqu’un Lapin Blanc aux yeux roses passa tout près d’elle en courant.\n\n\
Cela n’avait rien de très remarquable ; et Alice ne trouva pas non plus très étrange d’entendre le Lapin se dire à lui-même : \n\
« Oh là là ! Oh là là ! Je vais être en retard ! » (Quand elle y repensa plus tard, \n\
il lui sembla qu’elle aurait dû s’en étonner, mais sur le moment, tout lui parut parfaitement naturel.) \n\
Mais lorsque le Lapin sortit VRAIMENT UNE MONTRE \n\
DE LA POCHE DE SON GILET et la regarda avant de se précipiter plus loin, \n\
Alice bondit sur ses pieds, car soudain il lui traversa l’esprit qu’elle n’avait jamais vu \n\
de lapin avec une poche de gilet ni une montre à sortir de celle-ci. Brûlant de curiosité, \n\
elle traversa le champ en courant derrière lui, et arriva juste à temps pour le voir \n\
disparaître dans un large terrier au pied d’une haie. \n\n\
L’instant d’après, Alice se glissa à sa suite, sans prendre une seule seconde pour se demander \n\
comment elle ferait pour remonter. \n\n\
Le terrier ressemblait d’abord à un long tunnel droit, puis il plongeait \n\
soudainement, si soudainement qu’Alice n’eut pas une seconde pour penser à s’arrêter \n\
avant de se retrouver en train de tomber dans un puits très profond.\n\n\
Soit le puits était très profond, soit elle tombait très lentement, car elle eut \n\
tout le temps de regarder autour d’elle et de se demander ce qui allait se passer ensuite. \n\
Tout d’abord, elle essaya de regarder en bas pour voir où elle allait atterrir, \n\
mais il faisait trop sombre pour distinguer quoi que ce soit ; ensuite, elle observa \n\
les parois du puits, qui étaient garnies d’étagères et de placards ; ici et là, \n\
des cartes et des tableaux étaient accrochés à des chevilles. Elle prit un bocal d’une étagère \n\
au passage ; il portait l’étiquette \n\
« CONFITURE D’ORANGE », mais à sa grande déception, il était vide ; elle ne voulut pas \n\
le lâcher par peur de blesser quelqu’un, et réussit donc à le remettre dans un placard \n\
en passant devant. \n\n\
« Eh bien ! » pensa Alice, « après une chute pareille, les escaliers ne me feront plus peur ! \n\
Tous me trouveront tellement courageuse à la maison ! Je ne dirais même rien, \n\
même si je tombais du toit ! » (Ce qui était sans doute vrai.)\n\n\
En bas, en bas, en bas. La chute allait-elle donc finir un jour ? « Je me demande combien \n\
de kilomètres j’ai parcouru jusqu’ici », dit-elle à voix haute. « Je dois être près du centre de la Terre. \n\
Voyons : cela ferait bien quatre mille kilomètres de profondeur, je crois… » \n\
(Car, voyez-vous, Alice avait appris des tas de choses de ce genre à l’école, et même si \n\
ce n’était pas le meilleur moment pour exhiber son savoir, puisqu’il n’y avait personne pour l’écouter, \n\
c’était toujours une bonne occasion de s’entraîner.) \n\
« Oui, cela doit être à peu près la bonne distance… mais alors, à quelle \n\
latitude et quelle longitude je me trouve ? » (Alice n’avait aucune idée de ce qu’est la latitude, \n\
ni la longitude, mais trouvait simplement que ces mots sonnaient bien.)\n\n\
Bientôt, elle reprit : « Je me demande si je vais traverser la Terre \n\
tout entière ! Comme ce serait drôle d’arriver parmi des gens qui marchent la tête en bas ! \n\
Les Antipathiques, je crois… » (Elle fut plutôt soulagée qu’il n’y ait personne pour \n\
l’entendre cette fois-ci, car ce n’était absolument pas le bon mot.) \n\
« Mais je devrai leur demander comment s’appelle leur pays. \n\
S’il vous plaît, Madame, est-ce la Nouvelle-Zélande ou l’Australie ? » \n\
(Et elle essaya de faire une révérence en disant cela — imaginez faire une révérence \n\
en tombant dans les airs ! Croyez-vous que vous pourriez y arriver ?) \n\
« Et quelle petite fille ignorante on penserait que je suis d’avoir posé la question ! \n\
Non, ça ne va pas du tout. Peut-être que je verrai le nom écrit quelque part. » \n\n\
En bas, en bas, en bas. Il n’y avait rien d’autre à faire, alors Alice se remit à parler : \n\
« Dinah va beaucoup me manquer ce soir, je pense ! » (Dinah était son chat.) \n\
« J’espère qu’ils n’oublieront pas sa soucoupe de lait à l’heure du thé. \n\
Dinah, ma chérie ! Comme j’aimerais que tu sois ici avec moi ! Il n’y a pas de souris dans l’air, \n\
je le crains, mais tu pourrais attraper une chauve-souris, et c’est presque comme une souris, tu sais. \n\
Mais est-ce que les chats mangent les chauves-souris ? Je me le demande. » \n\
Et ici, Alice commença à devenir assez somnolente, et se mit à répéter pour elle-même \n\
dans un état rêveur : « Est-ce que les chats mangent les chauves-souris ? Est-ce que les chats \n\
mangent les chauves-souris ? » et parfois, « Est-ce que les chauves-souris mangent les chats ? » \n\
car, comme elle ne pouvait répondre à aucune des deux questions, cela revenait au même. \n\
Elle sentait qu’elle s’endormait, et venait juste de commencer à rêver qu’elle marchait main \n\
dans la main avec Dinah, lui disant très sérieusement : « Maintenant, Dinah, dis-moi la vérité : \n\
as-tu déjà mangé une chauve-souris ? » quand soudain, patatras ! \n\
Elle atterrit sur un tas de feuilles sèches et de petits branchages, et la chute était terminée.\n\n\
Alice n’était pas blessée le moins du monde, et elle sauta immédiatement sur ses pieds : \n\
elle leva les yeux, mais tout était sombre au-dessus d’elle ; devant elle s’étendait un autre \n\
long couloir, et le Lapin Blanc était encore en vue, courant dans le fond. \n\
Il n’y avait pas une seconde à perdre : Alice partit comme le vent, \n\
et arriva juste à temps pour l’entendre dire en tournant un coin : \n\
« Oh mes oreilles et mes moustaches, comme je suis en retard ! » \n\
Elle le suivit en tournant le coin, mais le Lapin avait disparu : \n\
elle se retrouva dans une longue salle basse, éclairée par une rangée \n\
de lampes suspendues au plafond. \n\n\
Il y avait des portes tout autour de la salle, mais elles étaient toutes fermées à clé ; \n\
et après avoir longé un côté puis l’autre, en essayant chaque porte, \n\
elle revint tristement au centre, se demandant comment elle pourrait bien sortir de là.\n\n\
Soudain, elle tomba sur une petite table à trois pieds, entièrement \n\
en verre massif ; il n’y avait dessus qu’une minuscule clé d’or, et \n\
la première pensée d’Alice fut qu’elle appartenait peut-être à l’une des portes de la salle ; \n\
mais hélas ! soit les serrures étaient trop grandes, soit la clé était trop petite, \n\
dans tous les cas elle n’ouvrait aucune porte. \n\
Cependant, à son second passage, elle remarqua un petit rideau qu’elle n’avait pas vu auparavant, \n\
et derrière se trouvait une petite porte d’environ trente centimètres de haut : \n\
elle essaya la minuscule clé d’or dans la serrure, et, à sa grande joie, elle l’ouvrit !\n\
\n\
Alice ouvrit la porte et vit qu’elle donnait sur un petit couloir, pas beaucoup plus large \n\
qu’un terrier de rat : elle s’agenouilla et regarda au travers du passage dans le plus joli jardin \n\
qu’elle eût jamais vu. Comme elle désirait sortir de cette sombre salle et se promener \n\
parmi ces parterres de fleurs éclatantes et ces fraîches fontaines ! Mais elle ne pouvait même pas \n\
passer la tête par l’ouverture ; « et même si ma tête passait », pensa la pauvre Alice, \n\
« cela ne servirait à rien sans mes épaules. Oh, comme j’aimerais pouvoir me replier \n\
comme un télescope ! Je crois que je le pourrais, si seulement je savais comment m’y prendre. » \n\
Car, voyez-vous, tant de choses extraordinaires s’étaient produites dernièrement qu’Alice \n\
commençait à penser que très peu de choses étaient réellement impossibles. \n\n\
Il ne servait à rien d’attendre près de la petite porte, alors elle retourna vers la table, \n\
espérant à moitié y trouver une autre clé, ou au moins un livre expliquant comment plier \n\
les gens comme des télescopes ; cette fois, elle trouva une petite bouteille dessus \n\
(qui n’était certainement PAS là avant, dit Alice), et autour du goulot était attachée \n\
une étiquette de papier portant les mots « BUVEZ-MOI » magnifiquement imprimés en grandes lettres.\n\n\
C’était bien joli de dire « Buvez-moi », mais la petite Alice prudente ne comptait pas \n\
faire ÇA si vite. « Non, je vais d’abord regarder », dit-elle, « et voir si c’est marqué \n\
‘poison’ ou pas » ; car elle avait lu plusieurs charmantes histoires sur des enfants qui \n\
s’étaient brûlés, ou s’étaient fait dévorer par des bêtes sauvages et autres choses désagréables, \n\
tout cela parce qu’ils n’avaient PAS retenu les règles simples qu’on leur avait enseignées : \n\
par exemple, qu’un tisonnier rouge brûle si on le tient trop longtemps ; et que si on se coupe \n\
un doigt TRÈS profondément avec un couteau, généralement ça saigne ; et elle n’avait jamais oublié \n\
que si on boit beaucoup dans une bouteille portant l’étiquette ‘poison’, il est presque certain \n\
que cela finira mal, tôt ou tard. \n\n\
Cependant, cette bouteille n’était PAS marquée ‘poison’, alors Alice osa y goûter, et la trouva \n\
délicieuse (elle avait un goût à la fois de tarte aux cerises, de crème anglaise, \n\
d’ananas, de dinde rôtie, de caramel et de pain grillé chaud beurré), et elle la finit très vite.");

var N_txt = new Item("N_txt", "Alice commençait à se lasser d’être assise près de sa \n\
sœur au bord de la rivière, sans rien avoir à faire : une ou deux fois, elle avait jeté un œil au \n\
livre que sa sœur lisait, mais il n’y avait ni images ni dialogues, « et à quoi peut bien servir \n\
un livre, pensait Alice, sans images ni dialogues ? » \n\n\
Elle se demandait donc (aussi bien qu’elle le pouvait, car la chaleur de la journée \n\
la rendait très somnolente et stupide) si le plaisir de fabriquer une \n\
guirlande de marguerites valait la peine de se lever et d’aller cueillir des fleurs, \n\
lorsqu’un Lapin Blanc aux yeux roses passa tout près d’elle en courant.\n\n\
Cela n’avait rien de très remarquable ; et Alice ne trouva pas non plus très étrange d’entendre le Lapin se dire à lui-même : \n\
« Oh là là ! Oh là là ! Je vais être en retard ! » (Quand elle y repensa plus tard, \n\
il lui sembla qu’elle aurait dû s’en étonner, mais sur le moment, tout lui parut parfaitement naturel.) \n\
Mais lorsque le Lapin sortit VRAIMENT UNE MONTRE \n\
DE LA POCHE DE SON GILET et la regarda avant de se précipiter plus loin, \n\
Alice bondit sur ses pieds, car soudain il lui traversa l’esprit qu’elle n’avait jamais vu \n\
de lapin avec une poche de gilet ni une montre à sortir de celle-ci. Brûlant de curiosité, \n\
elle traversa le champ en courant derrière lui, et arriva juste à temps pour le voir \n\
disparaître dans un large terrier au pied d’une haie. \n\n\
L’instant d’après, Alice se glissa à sa suite, sans prendre une seule seconde pour se demander \n\
comment elle ferait pour remonter. \n\n\
Le terrier ressemblait d’abord à un long tunnel droit, puis il plongeait \n\
soudainement, si soudainement qu’Alice n’eut pas une seconde pour penser à s’arrêter \n\
avant de se retrouver en train de tomber dans un puits très profond.\n\n\
Soit le puits était très profond, soit elle tombait très lentement, car elle eut \n\
tout le temps de regarder autour d’elle et de se demander ce qui allait se passer ensuite. \n\
Tout d’abord, elle essaya de regarder en bas pour voir où elle allait atterrir, \n\
mais il faisait trop sombre pour distinguer quoi que ce soit ; ensuite, elle observa \n\
les parois du puits, qui étaient garnies d’étagères et de placards ; ici et là, \n\
des cartes et des tableaux étaient accrochés à des chevilles. Elle prit un bocal d’une étagère \n\
au passage ; il portait l’étiquette \n\
« CONFITURE D’ORANGE », mais à sa grande déception, il était vide ; elle ne voulut pas \n\
le lâcher par peur de blesser quelqu’un, et réussit donc à le remettre dans un placard \n\
en passant devant. \n\n\
« Eh bien ! » pensa Alice, « après une chute pareille, les escaliers ne me feront plus peur ! \n\
Tous me trouveront tellement courageuse à la maison ! Je ne dirais même rien, \n\
même si je tombais du toit ! » (Ce qui était sans doute vrai.)\n\n\
En bas, en bas, en bas. La chute allait-elle donc finir un jour ? « Je me demande combien \n\
de kilomètres j’ai parcouru jusqu’ici », dit-elle à voix haute. « Je dois être près du centre de la Terre. \n\
Voyons : cela ferait bien quatre mille kilomètres de profondeur, je crois… » \n\
(Car, voyez-vous, Alice avait appris des tas de choses de ce genre à l’école, et même si \n\
ce n’était pas le meilleur moment pour exhiber son savoir, puisqu’il n’y avait personne pour l’écouter, \n\
c’était toujours une bonne occasion de s’entraîner.) \n\
« Oui, cela doit être à peu près la bonne distance… mais alors, à quelle \n\
latitude et quelle longitude je me trouve ? » (Alice n’avait aucune idée de ce qu’est la latitude, \n\
ni la longitude, mais trouvait simplement que ces mots sonnaient bien.)\n\n\
Bientôt, elle reprit : « Je me demande si je vais traverser la Terre \n\
tout entière ! Comme ce serait drôle d’arriver parmi des gens qui marchent la tête en bas ! \n\
Les Antipathiques, je crois… » (Elle fut plutôt soulagée qu’il n’y ait personne pour \n\
l’entendre cette fois-ci, car ce n’était absolument pas le bon mot.) \n\
« Mais je devrai leur demander comment s’appelle leur pays. \n\
S’il vous plaît, Madame, est-ce la Nouvelle-Zélande ou l’Australie ? » \n\
(Et elle essaya de faire une révérence en disant cela — imaginez faire une révérence \n\
en tombant dans les airs ! Croyez-vous que vous pourriez y arriver ?) \n\
« Et quelle petite fille ignorante on penserait que je suis d’avoir posé la question ! \n\
Non, ça ne va pas du tout. Peut-être que je verrai le nom écrit quelque part. » \n\n\
En bas, en bas, en bas. Il n’y avait rien d’autre à faire, alors Alice se remit à parler : \n\
« Dinah va beaucoup me manquer ce soir, je pense ! » (Dinah était son chat.) \n\
« J’espère qu’ils n’oublieront pas sa soucoupe de lait à l’heure du thé. \n\
Dinah, ma chérie ! Comme j’aimerais que tu sois ici avec moi ! Il n’y a pas de souris dans l’air, \n\
je le crains, mais tu pourrais attraper une chauve-souris, et c’est presque comme une souris, tu sais. \n\
Mais est-ce que les chats mangent les chauves-souris ? Je me le demande. » \n\
Et ici, Alice commença à devenir assez somnolente, et se mit à répéter pour elle-même \n\
dans un état rêveur : « Est-ce que les chats mangent les chauves-souris ? Est-ce que les chats \n\
mangent les chauves-souris ? » et parfois, « Est-ce que les chauves-souris mangent les chats ? » \n\
car, comme elle ne pouvait répondre à aucune des deux questions, cela revenait au même. \n\
Elle sentait qu’elle s’endormait, et venait juste de commencer à rêver qu’elle marchait main \n\
dans la main avec Dinah, lui disant très sérieusement : « Maintenant, Dinah, dis-moi la vérité : \n\
as-tu déjà mangé une chauve-souris ? » quand soudain, patatras ! \n\
Elle atterrit sur un tas de feuilles sèches et de petits branchages, et la chute était terminée.\n\n\
Alice n’était pas blessée le moins du monde, et elle sauta immédiatement sur ses pieds : \n\
elle leva les yeux, mais tout était sombre au-dessus d’elle ; devant elle s’étendait un autre \n\
long couloir, et le Lapin Blanc était encore en vue, courant dans le fond. \n\
Il n’y avait pas une seconde à perdre : Alice partit comme le vent, \n\
et arriva juste à temps pour l’entendre dire en tournant un coin : \n\
« Oh mes oreilles et mes moustaches, comme je suis en retard ! » \n\
Elle le suivit en tournant le coin, mais le Lapin avait disparu : \n\
elle se retrouva dans une longue salle basse, éclairée par une rangée \n\
de lampes suspendues au plafond. \n\n\
Il y avait des portes tout autour de la salle, mais elles étaient toutes fermées à clé ; \n\
et après avoir longé un côté puis l’autre, en essayant chaque porte, \n\
elle revint tristement au centre, se demandant comment elle pourrait bien sortir de là.\n\n\
Soudain, elle tomba sur une petite table à trois pieds, entièrement \n\
en verre massif ; il n’y avait dessus qu’une minuscule clé d’or, et \n\
la première pensée d’Alice fut qu’elle appartenait peut-être à l’une des portes de la salle ; \n\
mais hélas ! soit les serrures étaient trop grandes, soit la clé était trop petite, \n\
dans tous les cas elle n’ouvrait aucune porte. \n\
Cependant, à son second passage, elle remarqua un petit rideau qu’elle n’avait pas vu auparavant, \n\
et derrière se trouvait une petite porte d’environ trente centimètres de haut : \n\
elle essaya la minuscule clé d’or dans la serrure, et, à sa grande joie, elle l’ouvrit !\n\
\n\
Alice ouvrit la porte et vit qu’elle donnait sur un petit couloir, pas beaucoup plus large \n\
qu’un terrier de rat : elle s’agenouilla et regarda au travers du passage dans le plus joli jardin \n\
qu’elle eût jamais vu. Comme elle désirait sortir de cette sombre salle et se promener \n\
parmi ces parterres de fleurs éclatantes et ces fraîches fontaines ! Mais elle ne pouvait même pas \n\
passer la tête par l’ouverture ; « et même si ma tête passait », pensa la pauvre Alice, \n\
« cela ne servirait à rien sans mes épaules. Oh, comme j’aimerais pouvoir me replier \n\
comme un télescope ! Je crois que je le pourrais, si seulement je savais comment m’y prendre. » \n\
Car, voyez-vous, tant de choses extraordinaires s’étaient produites dernièrement qu’Alice \n\
commençait à penser que très peu de choses étaient réellement impossibles. \n\n\
Il ne servait à rien d’attendre près de la petite porte, alors elle retourna vers la table, \n\
espérant à moitié y trouver une autre clé, ou au moins un livre expliquant comment plier \n\
les gens comme des télescopes ; cette fois, elle trouva une petite bouteille dessus \n\
(qui n’était certainement PAS là avant, dit Alice), et autour du goulot était attachée \n\
une étiquette de papier portant les mots « BUVEZ-MOI » magnifiquement imprimés en grandes lettres.\n\n\
C’était bien joli de dire « Buvez-moi », mais la petite Alice prudente ne comptait pas \n\
faire ÇA si vite. « Non, je vais d’abord regarder », dit-elle, « et voir si c’est marqué \n\
‘poison’ ou pas » ; car elle avait lu plusieurs charmantes histoires sur des enfants qui \n\
s’étaient brûlés, ou s’étaient fait dévorer par des bêtes sauvages et autres choses désagréables, \n\
tout cela parce qu’ils n’avaient PAS retenu les règles simples qu’on leur avait enseignées : \n\
par exemple, qu’un tisonnier rouge brûle si on le tient trop longtemps ; et que si on se coupe \n\
un doigt TRÈS profondément avec un couteau, généralement ça saigne ; et elle n’avait jamais oublié \n\
que si on boit beaucoup dans une bouteille portant l’étiquette ‘poison’, il est presque certain \n\
que cela finira mal, tôt ou tard. \n\n\
Cependant, cette bouteille n’était PAS marquée ‘poison’, alors Alice osa y goûter, et la trouva \n\
délicieuse (elle avait un goût à la fois de tarte aux cerises, de crème anglaise, \n\
d’ananas, de dinde rôtie, de caramel et de pain grillé chaud beurré), et elle la finit très vite.");

var O_txt = new Item("O_txt", "Alice commençait à se lasser d’être assise près de sa \n\
sœur au bord de la rivière, sans rien avoir à faire : une ou deux fois, elle avait jeté un œil au \n\
livre que sa sœur lisait, mais il n’y avait ni images ni dialogues, « et à quoi peut bien servir \n\
un livre, pensait Alice, sans images ni dialogues ? » \n\n\
Elle se demandait donc (aussi bien qu’elle le pouvait, car la chaleur de la journée \n\
la rendait très somnolente et stupide) si le plaisir de fabriquer une \n\
guirlande de marguerites valait la peine de se lever et d’aller cueillir des fleurs, \n\
lorsqu’un Lapin Blanc aux yeux roses passa tout près d’elle en courant.\n\n\
Cela n’avait rien de très remarquable ; et Alice ne trouva pas non plus très étrange d’entendre le Lapin se dire à lui-même : \n\
« Oh là là ! Oh là là ! Je vais être en retard ! » (Quand elle y repensa plus tard, \n\
il lui sembla qu’elle aurait dû s’en étonner, mais sur le moment, tout lui parut parfaitement naturel.) \n\
Mais lorsque le Lapin sortit VRAIMENT UNE MONTRE \n\
DE LA POCHE DE SON GILET et la regarda avant de se précipiter plus loin, \n\
Alice bondit sur ses pieds, car soudain il lui traversa l’esprit qu’elle n’avait jamais vu \n\
de lapin avec une poche de gilet ni une montre à sortir de celle-ci. Brûlant de curiosité, \n\
elle traversa le champ en courant derrière lui, et arriva juste à temps pour le voir \n\
disparaître dans un large terrier au pied d’une haie. \n\n\
L’instant d’après, Alice se glissa à sa suite, sans prendre une seule seconde pour se demander \n\
comment elle ferait pour remonter. \n\n\
Le terrier ressemblait d’abord à un long tunnel droit, puis il plongeait \n\
soudainement, si soudainement qu’Alice n’eut pas une seconde pour penser à s’arrêter \n\
avant de se retrouver en train de tomber dans un puits très profond.\n\n\
Soit le puits était très profond, soit elle tombait très lentement, car elle eut \n\
tout le temps de regarder autour d’elle et de se demander ce qui allait se passer ensuite. \n\
Tout d’abord, elle essaya de regarder en bas pour voir où elle allait atterrir, \n\
mais il faisait trop sombre pour distinguer quoi que ce soit ; ensuite, elle observa \n\
les parois du puits, qui étaient garnies d’étagères et de placards ; ici et là, \n\
des cartes et des tableaux étaient accrochés à des chevilles. Elle prit un bocal d’une étagère \n\
au passage ; il portait l’étiquette \n\
« CONFITURE D’ORANGE », mais à sa grande déception, il était vide ; elle ne voulut pas \n\
le lâcher par peur de blesser quelqu’un, et réussit donc à le remettre dans un placard \n\
en passant devant. \n\n\
« Eh bien ! » pensa Alice, « après une chute pareille, les escaliers ne me feront plus peur ! \n\
Tous me trouveront tellement courageuse à la maison ! Je ne dirais même rien, \n\
même si je tombais du toit ! » (Ce qui était sans doute vrai.)\n\n\
En bas, en bas, en bas. La chute allait-elle donc finir un jour ? « Je me demande combien \n\
de kilomètres j’ai parcouru jusqu’ici », dit-elle à voix haute. « Je dois être près du centre de la Terre. \n\
Voyons : cela ferait bien quatre mille kilomètres de profondeur, je crois… » \n\
(Car, voyez-vous, Alice avait appris des tas de choses de ce genre à l’école, et même si \n\
ce n’était pas le meilleur moment pour exhiber son savoir, puisqu’il n’y avait personne pour l’écouter, \n\
c’était toujours une bonne occasion de s’entraîner.) \n\
« Oui, cela doit être à peu près la bonne distance… mais alors, à quelle \n\
latitude et quelle longitude je me trouve ? » (Alice n’avait aucune idée de ce qu’est la latitude, \n\
ni la longitude, mais trouvait simplement que ces mots sonnaient bien.)\n\n\
Bientôt, elle reprit : « Je me demande si je vais traverser la Terre \n\
tout entière ! Comme ce serait drôle d’arriver parmi des gens qui marchent la tête en bas ! \n\
Les Antipathiques, je crois… » (Elle fut plutôt soulagée qu’il n’y ait personne pour \n\
l’entendre cette fois-ci, car ce n’était absolument pas le bon mot.) \n\
« Mais je devrai leur demander comment s’appelle leur pays. \n\
S’il vous plaît, Madame, est-ce la Nouvelle-Zélande ou l’Australie ? » \n\
(Et elle essaya de faire une révérence en disant cela — imaginez faire une révérence \n\
en tombant dans les airs ! Croyez-vous que vous pourriez y arriver ?) \n\
« Et quelle petite fille ignorante on penserait que je suis d’avoir posé la question ! \n\
Non, ça ne va pas du tout. Peut-être que je verrai le nom écrit quelque part. » \n\n\
En bas, en bas, en bas. Il n’y avait rien d’autre à faire, alors Alice se remit à parler : \n\
« Dinah va beaucoup me manquer ce soir, je pense ! » (Dinah était son chat.) \n\
« J’espère qu’ils n’oublieront pas sa soucoupe de lait à l’heure du thé. \n\
Dinah, ma chérie ! Comme j’aimerais que tu sois ici avec moi ! Il n’y a pas de souris dans l’air, \n\
je le crains, mais tu pourrais attraper une chauve-souris, et c’est presque comme une souris, tu sais. \n\
Mais est-ce que les chats mangent les chauves-souris ? Je me le demande. » \n\
Et ici, Alice commença à devenir assez somnolente, et se mit à répéter pour elle-même \n\
dans un état rêveur : « Est-ce que les chats mangent les chauves-souris ? Est-ce que les chats \n\
mangent les chauves-souris ? » et parfois, « Est-ce que les chauves-souris mangent les chats ? » \n\
car, comme elle ne pouvait répondre à aucune des deux questions, cela revenait au même. \n\
Elle sentait qu’elle s’endormait, et venait juste de commencer à rêver qu’elle marchait main \n\
dans la main avec Dinah, lui disant très sérieusement : « Maintenant, Dinah, dis-moi la vérité : \n\
as-tu déjà mangé une chauve-souris ? » quand soudain, patatras ! \n\
Elle atterrit sur un tas de feuilles sèches et de petits branchages, et la chute était terminée.\n\n\
Alice n’était pas blessée le moins du monde, et elle sauta immédiatement sur ses pieds : \n\
elle leva les yeux, mais tout était sombre au-dessus d’elle ; devant elle s’étendait un autre \n\
long couloir, et le Lapin Blanc était encore en vue, courant dans le fond. \n\
Il n’y avait pas une seconde à perdre : Alice partit comme le vent, \n\
et arriva juste à temps pour l’entendre dire en tournant un coin : \n\
« Oh mes oreilles et mes moustaches, comme je suis en retard ! » \n\
Elle le suivit en tournant le coin, mais le Lapin avait disparu : \n\
elle se retrouva dans une longue salle basse, éclairée par une rangée \n\
de lampes suspendues au plafond. \n\n\
Il y avait des portes tout autour de la salle, mais elles étaient toutes fermées à clé ; \n\
et après avoir longé un côté puis l’autre, en essayant chaque porte, \n\
elle revint tristement au centre, se demandant comment elle pourrait bien sortir de là.\n\n\
Soudain, elle tomba sur une petite table à trois pieds, entièrement \n\
en verre massif ; il n’y avait dessus qu’une minuscule clé d’or, et \n\
la première pensée d’Alice fut qu’elle appartenait peut-être à l’une des portes de la salle ; \n\
mais hélas ! soit les serrures étaient trop grandes, soit la clé était trop petite, \n\
dans tous les cas elle n’ouvrait aucune porte. \n\
Cependant, à son second passage, elle remarqua un petit rideau qu’elle n’avait pas vu auparavant, \n\
et derrière se trouvait une petite porte d’environ trente centimètres de haut : \n\
elle essaya la minuscule clé d’or dans la serrure, et, à sa grande joie, elle l’ouvrit !\n\
\n\
Alice ouvrit la porte et vit qu’elle donnait sur un petit couloir, pas beaucoup plus large \n\
qu’un terrier de rat : elle s’agenouilla et regarda au travers du passage dans le plus joli jardin \n\
qu’elle eût jamais vu. Comme elle désirait sortir de cette sombre salle et se promener \n\
parmi ces parterres de fleurs éclatantes et ces fraîches fontaines ! Mais elle ne pouvait même pas \n\
passer la tête par l’ouverture ; « et même si ma tête passait », pensa la pauvre Alice, \n\
« cela ne servirait à rien sans mes épaules. Oh, comme j’aimerais pouvoir me replier \n\
comme un télescope ! Je crois que je le pourrais, si seulement je savais comment m’y prendre. » \n\
Car, voyez-vous, tant de choses extraordinaires s’étaient produites dernièrement qu’Alice \n\
commençait à penser que très peu de choses étaient réellement impossibles. \n\n\
Il ne servait à rien d’attendre près de la petite porte, alors elle retourna vers la table, \n\
espérant à moitié y trouver une autre clé, ou au moins un livre expliquant comment plier \n\
les gens comme des télescopes ; cette fois, elle trouva une petite bouteille dessus \n\
(qui n’était certainement PAS là avant, dit Alice), et autour du goulot était attachée \n\
une étiquette de papier portant les mots « BUVEZ-MOI » magnifiquement imprimés en grandes lettres.\n\n\
C’était bien joli de dire « Buvez-moi », mais la petite Alice prudente ne comptait pas \n\
faire ÇA si vite. « Non, je vais d’abord regarder », dit-elle, « et voir si c’est marqué \n\
‘poison’ ou pas » ; car elle avait lu plusieurs charmantes histoires sur des enfants qui \n\
s’étaient brûlés, ou s’étaient fait dévorer par des bêtes sauvages et autres choses désagréables, \n\
tout cela parce qu’ils n’avaient PAS retenu les règles simples qu’on leur avait enseignées : \n\
par exemple, qu’un tisonnier rouge brûle si on le tient trop longtemps ; et que si on se coupe \n\
un doigt TRÈS profondément avec un couteau, généralement ça saigne ; et elle n’avait jamais oublié \n\
que si on boit beaucoup dans une bouteille portant l’étiquette ‘poison’, il est presque certain \n\
que cela finira mal, tôt ou tard. \n\n\
Cependant, cette bouteille n’était PAS marquée ‘poison’, alors Alice osa y goûter, et la trouva \n\
délicieuse (elle avait un goût à la fois de tarte aux cerises, de crème anglaise, \n\
d’ananas, de dinde rôtie, de caramel et de pain grillé chaud beurré), et elle la finit très vite.");

var P_txt = new Item("P_txt", "Alice commençait à se lasser d’être assise près de sa \n\
sœur au bord de la rivière, sans rien avoir à faire : une ou deux fois, elle avait jeté un œil au \n\
livre que sa sœur lisait, mais il n’y avait ni images ni dialogues, « et à quoi peut bien servir \n\
un livre, pensait Alice, sans images ni dialogues ? » \n\n\
Elle se demandait donc (aussi bien qu’elle le pouvait, car la chaleur de la journée \n\
la rendait très somnolente et stupide) si le plaisir de fabriquer une \n\
guirlande de marguerites valait la peine de se lever et d’aller cueillir des fleurs, \n\
lorsqu’un Lapin Blanc aux yeux roses passa tout près d’elle en courant.\n\n\
Cela n’avait rien de très remarquable ; et Alice ne trouva pas non plus très étrange d’entendre le Lapin se dire à lui-même : \n\
« Oh là là ! Oh là là ! Je vais être en retard ! » (Quand elle y repensa plus tard, \n\
il lui sembla qu’elle aurait dû s’en étonner, mais sur le moment, tout lui parut parfaitement naturel.) \n\
Mais lorsque le Lapin sortit VRAIMENT UNE MONTRE \n\
DE LA POCHE DE SON GILET et la regarda avant de se précipiter plus loin, \n\
Alice bondit sur ses pieds, car soudain il lui traversa l’esprit qu’elle n’avait jamais vu \n\
de lapin avec une poche de gilet ni une montre à sortir de celle-ci. Brûlant de curiosité, \n\
elle traversa le champ en courant derrière lui, et arriva juste à temps pour le voir \n\
disparaître dans un large terrier au pied d’une haie. \n\n\
L’instant d’après, Alice se glissa à sa suite, sans prendre une seule seconde pour se demander \n\
comment elle ferait pour remonter. \n\n\
Le terrier ressemblait d’abord à un long tunnel droit, puis il plongeait \n\
soudainement, si soudainement qu’Alice n’eut pas une seconde pour penser à s’arrêter \n\
avant de se retrouver en train de tomber dans un puits très profond.\n\n\
Soit le puits était très profond, soit elle tombait très lentement, car elle eut \n\
tout le temps de regarder autour d’elle et de se demander ce qui allait se passer ensuite. \n\
Tout d’abord, elle essaya de regarder en bas pour voir où elle allait atterrir, \n\
mais il faisait trop sombre pour distinguer quoi que ce soit ; ensuite, elle observa \n\
les parois du puits, qui étaient garnies d’étagères et de placards ; ici et là, \n\
des cartes et des tableaux étaient accrochés à des chevilles. Elle prit un bocal d’une étagère \n\
au passage ; il portait l’étiquette \n\
« CONFITURE D’ORANGE », mais à sa grande déception, il était vide ; elle ne voulut pas \n\
le lâcher par peur de blesser quelqu’un, et réussit donc à le remettre dans un placard \n\
en passant devant. \n\n\
« Eh bien ! » pensa Alice, « après une chute pareille, les escaliers ne me feront plus peur ! \n\
Tous me trouveront tellement courageuse à la maison ! Je ne dirais même rien, \n\
même si je tombais du toit ! » (Ce qui était sans doute vrai.)\n\n\
En bas, en bas, en bas. La chute allait-elle donc finir un jour ? « Je me demande combien \n\
de kilomètres j’ai parcouru jusqu’ici », dit-elle à voix haute. « Je dois être près du centre de la Terre. \n\
Voyons : cela ferait bien quatre mille kilomètres de profondeur, je crois… » \n\
(Car, voyez-vous, Alice avait appris des tas de choses de ce genre à l’école, et même si \n\
ce n’était pas le meilleur moment pour exhiber son savoir, puisqu’il n’y avait personne pour l’écouter, \n\
c’était toujours une bonne occasion de s’entraîner.) \n\
« Oui, cela doit être à peu près la bonne distance… mais alors, à quelle \n\
latitude et quelle longitude je me trouve ? » (Alice n’avait aucune idée de ce qu’est la latitude, \n\
ni la longitude, mais trouvait simplement que ces mots sonnaient bien.)\n\n\
Bientôt, elle reprit : « Je me demande si je vais traverser la Terre \n\
tout entière ! Comme ce serait drôle d’arriver parmi des gens qui marchent la tête en bas ! \n\
Les Antipathiques, je crois… » (Elle fut plutôt soulagée qu’il n’y ait personne pour \n\
l’entendre cette fois-ci, car ce n’était absolument pas le bon mot.) \n\
« Mais je devrai leur demander comment s’appelle leur pays. \n\
S’il vous plaît, Madame, est-ce la Nouvelle-Zélande ou l’Australie ? » \n\
(Et elle essaya de faire une révérence en disant cela — imaginez faire une révérence \n\
en tombant dans les airs ! Croyez-vous que vous pourriez y arriver ?) \n\
« Et quelle petite fille ignorante on penserait que je suis d’avoir posé la question ! \n\
Non, ça ne va pas du tout. Peut-être que je verrai le nom écrit quelque part. » \n\n\
En bas, en bas, en bas. Il n’y avait rien d’autre à faire, alors Alice se remit à parler : \n\
« Dinah va beaucoup me manquer ce soir, je pense ! » (Dinah était son chat.) \n\
« J’espère qu’ils n’oublieront pas sa soucoupe de lait à l’heure du thé. \n\
Dinah, ma chérie ! Comme j’aimerais que tu sois ici avec moi ! Il n’y a pas de souris dans l’air, \n\
je le crains, mais tu pourrais attraper une chauve-souris, et c’est presque comme une souris, tu sais. \n\
Mais est-ce que les chats mangent les chauves-souris ? Je me le demande. » \n\
Et ici, Alice commença à devenir assez somnolente, et se mit à répéter pour elle-même \n\
dans un état rêveur : « Est-ce que les chats mangent les chauves-souris ? Est-ce que les chats \n\
mangent les chauves-souris ? » et parfois, « Est-ce que les chauves-souris mangent les chats ? » \n\
car, comme elle ne pouvait répondre à aucune des deux questions, cela revenait au même. \n\
Elle sentait qu’elle s’endormait, et venait juste de commencer à rêver qu’elle marchait main \n\
dans la main avec Dinah, lui disant très sérieusement : « Maintenant, Dinah, dis-moi la vérité : \n\
as-tu déjà mangé une chauve-souris ? » quand soudain, patatras ! \n\
Elle atterrit sur un tas de feuilles sèches et de petits branchages, et la chute était terminée.\n\n\
Alice n’était pas blessée le moins du monde, et elle sauta immédiatement sur ses pieds : \n\
elle leva les yeux, mais tout était sombre au-dessus d’elle ; devant elle s’étendait un autre \n\
long couloir, et le Lapin Blanc était encore en vue, courant dans le fond. \n\
Il n’y avait pas une seconde à perdre : Alice partit comme le vent, \n\
et arriva juste à temps pour l’entendre dire en tournant un coin : \n\
« Oh mes oreilles et mes moustaches, comme je suis en retard ! » \n\
Elle le suivit en tournant le coin, mais le Lapin avait disparu : \n\
elle se retrouva dans une longue salle basse, éclairée par une rangée \n\
de lampes suspendues au plafond. \n\n\
Il y avait des portes tout autour de la salle, mais elles étaient toutes fermées à clé ; \n\
et après avoir longé un côté puis l’autre, en essayant chaque porte, \n\
elle revint tristement au centre, se demandant comment elle pourrait bien sortir de là.\n\n\
Soudain, elle tomba sur une petite table à trois pieds, entièrement \n\
en verre massif ; il n’y avait dessus qu’une minuscule clé d’or, et \n\
la première pensée d’Alice fut qu’elle appartenait peut-être à l’une des portes de la salle ; \n\
mais hélas ! soit les serrures étaient trop grandes, soit la clé était trop petite, \n\
dans tous les cas elle n’ouvrait aucune porte. \n\
Cependant, à son second passage, elle remarqua un petit rideau qu’elle n’avait pas vu auparavant, \n\
et derrière se trouvait une petite porte d’environ trente centimètres de haut : \n\
elle essaya la minuscule clé d’or dans la serrure, et, à sa grande joie, elle l’ouvrit !\n\
\n\
Alice ouvrit la porte et vit qu’elle donnait sur un petit couloir, pas beaucoup plus large \n\
qu’un terrier de rat : elle s’agenouilla et regarda au travers du passage dans le plus joli jardin \n\
qu’elle eût jamais vu. Comme elle désirait sortir de cette sombre salle et se promener \n\
parmi ces parterres de fleurs éclatantes et ces fraîches fontaines ! Mais elle ne pouvait même pas \n\
passer la tête par l’ouverture ; « et même si ma tête passait », pensa la pauvre Alice, \n\
« cela ne servirait à rien sans mes épaules. Oh, comme j’aimerais pouvoir me replier \n\
comme un télescope ! Je crois que je le pourrais, si seulement je savais comment m’y prendre. » \n\
Car, voyez-vous, tant de choses extraordinaires s’étaient produites dernièrement qu’Alice \n\
commençait à penser que très peu de choses étaient réellement impossibles. \n\n\
Il ne servait à rien d’attendre près de la petite porte, alors elle retourna vers la table, \n\
espérant à moitié y trouver une autre clé, ou au moins un livre expliquant comment plier \n\
les gens comme des télescopes ; cette fois, elle trouva une petite bouteille dessus \n\
(qui n’était certainement PAS là avant, dit Alice), et autour du goulot était attachée \n\
une étiquette de papier portant les mots « BUVEZ-MOI » magnifiquement imprimés en grandes lettres.\n\n\
C’était bien joli de dire « Buvez-moi », mais la petite Alice prudente ne comptait pas \n\
faire ÇA si vite. « Non, je vais d’abord regarder », dit-elle, « et voir si c’est marqué \n\
‘poison’ ou pas » ; car elle avait lu plusieurs charmantes histoires sur des enfants qui \n\
s’étaient brûlés, ou s’étaient fait dévorer par des bêtes sauvages et autres choses désagréables, \n\
tout cela parce qu’ils n’avaient PAS retenu les règles simples qu’on leur avait enseignées : \n\
par exemple, qu’un tisonnier rouge brûle si on le tient trop longtemps ; et que si on se coupe \n\
un doigt TRÈS profondément avec un couteau, généralement ça saigne ; et elle n’avait jamais oublié \n\
que si on boit beaucoup dans une bouteille portant l’étiquette ‘poison’, il est presque certain \n\
que cela finira mal, tôt ou tard. \n\n\
Cependant, cette bouteille n’était PAS marquée ‘poison’, alors Alice osa y goûter, et la trouva \n\
délicieuse (elle avait un goût à la fois de tarte aux cerises, de crème anglaise, \n\
d’ananas, de dinde rôtie, de caramel et de pain grillé chaud beurré), et elle la finit très vite.");

var Q_txt = new Item("Q_txt", "Alice commençait à se lasser d’être assise près de sa \n\
sœur au bord de la rivière, sans rien avoir à faire : une ou deux fois, elle avait jeté un œil au \n\
livre que sa sœur lisait, mais il n’y avait ni images ni dialogues, « et à quoi peut bien servir \n\
un livre, pensait Alice, sans images ni dialogues ? » \n\n\
Elle se demandait donc (aussi bien qu’elle le pouvait, car la chaleur de la journée \n\
la rendait très somnolente et stupide) si le plaisir de fabriquer une \n\
guirlande de marguerites valait la peine de se lever et d’aller cueillir des fleurs, \n\
lorsqu’un Lapin Blanc aux yeux roses passa tout près d’elle en courant.\n\n\
Cela n’avait rien de très remarquable ; et Alice ne trouva pas non plus très étrange d’entendre le Lapin se dire à lui-même : \n\
« Oh là là ! Oh là là ! Je vais être en retard ! » (Quand elle y repensa plus tard, \n\
il lui sembla qu’elle aurait dû s’en étonner, mais sur le moment, tout lui parut parfaitement naturel.) \n\
Mais lorsque le Lapin sortit VRAIMENT UNE MONTRE \n\
DE LA POCHE DE SON GILET et la regarda avant de se précipiter plus loin, \n\
Alice bondit sur ses pieds, car soudain il lui traversa l’esprit qu’elle n’avait jamais vu \n\
de lapin avec une poche de gilet ni une montre à sortir de celle-ci. Brûlant de curiosité, \n\
elle traversa le champ en courant derrière lui, et arriva juste à temps pour le voir \n\
disparaître dans un large terrier au pied d’une haie. \n\n\
L’instant d’après, Alice se glissa à sa suite, sans prendre une seule seconde pour se demander \n\
comment elle ferait pour remonter. \n\n\
Le terrier ressemblait d’abord à un long tunnel droit, puis il plongeait \n\
soudainement, si soudainement qu’Alice n’eut pas une seconde pour penser à s’arrêter \n\
avant de se retrouver en train de tomber dans un puits très profond.\n\n\
Soit le puits était très profond, soit elle tombait très lentement, car elle eut \n\
tout le temps de regarder autour d’elle et de se demander ce qui allait se passer ensuite. \n\
Tout d’abord, elle essaya de regarder en bas pour voir où elle allait atterrir, \n\
mais il faisait trop sombre pour distinguer quoi que ce soit ; ensuite, elle observa \n\
les parois du puits, qui étaient garnies d’étagères et de placards ; ici et là, \n\
des cartes et des tableaux étaient accrochés à des chevilles. Elle prit un bocal d’une étagère \n\
au passage ; il portait l’étiquette \n\
« CONFITURE D’ORANGE », mais à sa grande déception, il était vide ; elle ne voulut pas \n\
le lâcher par peur de blesser quelqu’un, et réussit donc à le remettre dans un placard \n\
en passant devant. \n\n\
« Eh bien ! » pensa Alice, « après une chute pareille, les escaliers ne me feront plus peur ! \n\
Tous me trouveront tellement courageuse à la maison ! Je ne dirais même rien, \n\
même si je tombais du toit ! » (Ce qui était sans doute vrai.)\n\n\
En bas, en bas, en bas. La chute allait-elle donc finir un jour ? « Je me demande combien \n\
de kilomètres j’ai parcouru jusqu’ici », dit-elle à voix haute. « Je dois être près du centre de la Terre. \n\
Voyons : cela ferait bien quatre mille kilomètres de profondeur, je crois… » \n\
(Car, voyez-vous, Alice avait appris des tas de choses de ce genre à l’école, et même si \n\
ce n’était pas le meilleur moment pour exhiber son savoir, puisqu’il n’y avait personne pour l’écouter, \n\
c’était toujours une bonne occasion de s’entraîner.) \n\
« Oui, cela doit être à peu près la bonne distance… mais alors, à quelle \n\
latitude et quelle longitude je me trouve ? » (Alice n’avait aucune idée de ce qu’est la latitude, \n\
ni la longitude, mais trouvait simplement que ces mots sonnaient bien.)\n\n\
Bientôt, elle reprit : « Je me demande si je vais traverser la Terre \n\
tout entière ! Comme ce serait drôle d’arriver parmi des gens qui marchent la tête en bas ! \n\
Les Antipathiques, je crois… » (Elle fut plutôt soulagée qu’il n’y ait personne pour \n\
l’entendre cette fois-ci, car ce n’était absolument pas le bon mot.) \n\
« Mais je devrai leur demander comment s’appelle leur pays. \n\
S’il vous plaît, Madame, est-ce la Nouvelle-Zélande ou l’Australie ? » \n\
(Et elle essaya de faire une révérence en disant cela — imaginez faire une révérence \n\
en tombant dans les airs ! Croyez-vous que vous pourriez y arriver ?) \n\
« Et quelle petite fille ignorante on penserait que je suis d’avoir posé la question ! \n\
Non, ça ne va pas du tout. Peut-être que je verrai le nom écrit quelque part. » \n\n\
En bas, en bas, en bas. Il n’y avait rien d’autre à faire, alors Alice se remit à parler : \n\
« Dinah va beaucoup me manquer ce soir, je pense ! » (Dinah était son chat.) \n\
« J’espère qu’ils n’oublieront pas sa soucoupe de lait à l’heure du thé. \n\
Dinah, ma chérie ! Comme j’aimerais que tu sois ici avec moi ! Il n’y a pas de souris dans l’air, \n\
je le crains, mais tu pourrais attraper une chauve-souris, et c’est presque comme une souris, tu sais. \n\
Mais est-ce que les chats mangent les chauves-souris ? Je me le demande. » \n\
Et ici, Alice commença à devenir assez somnolente, et se mit à répéter pour elle-même \n\
dans un état rêveur : « Est-ce que les chats mangent les chauves-souris ? Est-ce que les chats \n\
mangent les chauves-souris ? » et parfois, « Est-ce que les chauves-souris mangent les chats ? » \n\
car, comme elle ne pouvait répondre à aucune des deux questions, cela revenait au même. \n\
Elle sentait qu’elle s’endormait, et venait juste de commencer à rêver qu’elle marchait main \n\
dans la main avec Dinah, lui disant très sérieusement : « Maintenant, Dinah, dis-moi la vérité : \n\
as-tu déjà mangé une chauve-souris ? » quand soudain, patatras ! \n\
Elle atterrit sur un tas de feuilles sèches et de petits branchages, et la chute était terminée.\n\n\
Alice n’était pas blessée le moins du monde, et elle sauta immédiatement sur ses pieds : \n\
elle leva les yeux, mais tout était sombre au-dessus d’elle ; devant elle s’étendait un autre \n\
long couloir, et le Lapin Blanc était encore en vue, courant dans le fond. \n\
Il n’y avait pas une seconde à perdre : Alice partit comme le vent, \n\
et arriva juste à temps pour l’entendre dire en tournant un coin : \n\
« Oh mes oreilles et mes moustaches, comme je suis en retard ! » \n\
Elle le suivit en tournant le coin, mais le Lapin avait disparu : \n\
elle se retrouva dans une longue salle basse, éclairée par une rangée \n\
de lampes suspendues au plafond. \n\n\
Il y avait des portes tout autour de la salle, mais elles étaient toutes fermées à clé ; \n\
et après avoir longé un côté puis l’autre, en essayant chaque porte, \n\
elle revint tristement au centre, se demandant comment elle pourrait bien sortir de là.\n\n\
Soudain, elle tomba sur une petite table à trois pieds, entièrement \n\
en verre massif ; il n’y avait dessus qu’une minuscule clé d’or, et \n\
la première pensée d’Alice fut qu’elle appartenait peut-être à l’une des portes de la salle ; \n\
mais hélas ! soit les serrures étaient trop grandes, soit la clé était trop petite, \n\
dans tous les cas elle n’ouvrait aucune porte. \n\
Cependant, à son second passage, elle remarqua un petit rideau qu’elle n’avait pas vu auparavant, \n\
et derrière se trouvait une petite porte d’environ trente centimètres de haut : \n\
elle essaya la minuscule clé d’or dans la serrure, et, à sa grande joie, elle l’ouvrit !\n\
\n\
Alice ouvrit la porte et vit qu’elle donnait sur un petit couloir, pas beaucoup plus large \n\
qu’un terrier de rat : elle s’agenouilla et regarda au travers du passage dans le plus joli jardin \n\
qu’elle eût jamais vu. Comme elle désirait sortir de cette sombre salle et se promener \n\
parmi ces parterres de fleurs éclatantes et ces fraîches fontaines ! Mais elle ne pouvait même pas \n\
passer la tête par l’ouverture ; « et même si ma tête passait », pensa la pauvre Alice, \n\
« cela ne servirait à rien sans mes épaules. Oh, comme j’aimerais pouvoir me replier \n\
comme un télescope ! Je crois que je le pourrais, si seulement je savais comment m’y prendre. » \n\
Car, voyez-vous, tant de choses extraordinaires s’étaient produites dernièrement qu’Alice \n\
commençait à penser que très peu de choses étaient réellement impossibles. \n\n\
Il ne servait à rien d’attendre près de la petite porte, alors elle retourna vers la table, \n\
espérant à moitié y trouver une autre clé, ou au moins un livre expliquant comment plier \n\
les gens comme des télescopes ; cette fois, elle trouva une petite bouteille dessus \n\
(qui n’était certainement PAS là avant, dit Alice), et autour du goulot était attachée \n\
une étiquette de papier portant les mots « BUVEZ-MOI » magnifiquement imprimés en grandes lettres.\n\n\
C’était bien joli de dire « Buvez-moi », mais la petite Alice prudente ne comptait pas \n\
faire ÇA si vite. « Non, je vais d’abord regarder », dit-elle, « et voir si c’est marqué \n\
‘poison’ ou pas » ; car elle avait lu plusieurs charmantes histoires sur des enfants qui \n\
s’étaient brûlés, ou s’étaient fait dévorer par des bêtes sauvages et autres choses désagréables, \n\
tout cela parce qu’ils n’avaient PAS retenu les règles simples qu’on leur avait enseignées : \n\
par exemple, qu’un tisonnier rouge brûle si on le tient trop longtemps ; et que si on se coupe \n\
un doigt TRÈS profondément avec un couteau, généralement ça saigne ; et elle n’avait jamais oublié \n\
que si on boit beaucoup dans une bouteille portant l’étiquette ‘poison’, il est presque certain \n\
que cela finira mal, tôt ou tard. \n\n\
Cependant, cette bouteille n’était PAS marquée ‘poison’, alors Alice osa y goûter, et la trouva \n\
délicieuse (elle avait un goût à la fois de tarte aux cerises, de crème anglaise, \n\
d’ananas, de dinde rôtie, de caramel et de pain grillé chaud beurré), et elle la finit très vite.");

var R_txt = new Item("R_txt", "Alice commençait à se lasser d’être assise près de sa \n\
sœur au bord de la rivière, sans rien avoir à faire : une ou deux fois, elle avait jeté un œil au \n\
livre que sa sœur lisait, mais il n’y avait ni images ni dialogues, « et à quoi peut bien servir \n\
un livre, pensait Alice, sans images ni dialogues ? » \n\n\
Elle se demandait donc (aussi bien qu’elle le pouvait, car la chaleur de la journée \n\
la rendait très somnolente et stupide) si le plaisir de fabriquer une \n\
guirlande de marguerites valait la peine de se lever et d’aller cueillir des fleurs, \n\
lorsqu’un Lapin Blanc aux yeux roses passa tout près d’elle en courant.\n\n\
Cela n’avait rien de très remarquable ; et Alice ne trouva pas non plus très étrange d’entendre le Lapin se dire à lui-même : \n\
« Oh là là ! Oh là là ! Je vais être en retard ! » (Quand elle y repensa plus tard, \n\
il lui sembla qu’elle aurait dû s’en étonner, mais sur le moment, tout lui parut parfaitement naturel.) \n\
Mais lorsque le Lapin sortit VRAIMENT UNE MONTRE \n\
DE LA POCHE DE SON GILET et la regarda avant de se précipiter plus loin, \n\
Alice bondit sur ses pieds, car soudain il lui traversa l’esprit qu’elle n’avait jamais vu \n\
de lapin avec une poche de gilet ni une montre à sortir de celle-ci. Brûlant de curiosité, \n\
elle traversa le champ en courant derrière lui, et arriva juste à temps pour le voir \n\
disparaître dans un large terrier au pied d’une haie. \n\n\
L’instant d’après, Alice se glissa à sa suite, sans prendre une seule seconde pour se demander \n\
comment elle ferait pour remonter. \n\n\
Le terrier ressemblait d’abord à un long tunnel droit, puis il plongeait \n\
soudainement, si soudainement qu’Alice n’eut pas une seconde pour penser à s’arrêter \n\
avant de se retrouver en train de tomber dans un puits très profond.\n\n\
Soit le puits était très profond, soit elle tombait très lentement, car elle eut \n\
tout le temps de regarder autour d’elle et de se demander ce qui allait se passer ensuite. \n\
Tout d’abord, elle essaya de regarder en bas pour voir où elle allait atterrir, \n\
mais il faisait trop sombre pour distinguer quoi que ce soit ; ensuite, elle observa \n\
les parois du puits, qui étaient garnies d’étagères et de placards ; ici et là, \n\
des cartes et des tableaux étaient accrochés à des chevilles. Elle prit un bocal d’une étagère \n\
au passage ; il portait l’étiquette \n\
« CONFITURE D’ORANGE », mais à sa grande déception, il était vide ; elle ne voulut pas \n\
le lâcher par peur de blesser quelqu’un, et réussit donc à le remettre dans un placard \n\
en passant devant. \n\n\
« Eh bien ! » pensa Alice, « après une chute pareille, les escaliers ne me feront plus peur ! \n\
Tous me trouveront tellement courageuse à la maison ! Je ne dirais même rien, \n\
même si je tombais du toit ! » (Ce qui était sans doute vrai.)\n\n\
En bas, en bas, en bas. La chute allait-elle donc finir un jour ? « Je me demande combien \n\
de kilomètres j’ai parcouru jusqu’ici », dit-elle à voix haute. « Je dois être près du centre de la Terre. \n\
Voyons : cela ferait bien quatre mille kilomètres de profondeur, je crois… » \n\
(Car, voyez-vous, Alice avait appris des tas de choses de ce genre à l’école, et même si \n\
ce n’était pas le meilleur moment pour exhiber son savoir, puisqu’il n’y avait personne pour l’écouter, \n\
c’était toujours une bonne occasion de s’entraîner.) \n\
« Oui, cela doit être à peu près la bonne distance… mais alors, à quelle \n\
latitude et quelle longitude je me trouve ? » (Alice n’avait aucune idée de ce qu’est la latitude, \n\
ni la longitude, mais trouvait simplement que ces mots sonnaient bien.)\n\n\
Bientôt, elle reprit : « Je me demande si je vais traverser la Terre \n\
tout entière ! Comme ce serait drôle d’arriver parmi des gens qui marchent la tête en bas ! \n\
Les Antipathiques, je crois… » (Elle fut plutôt soulagée qu’il n’y ait personne pour \n\
l’entendre cette fois-ci, car ce n’était absolument pas le bon mot.) \n\
« Mais je devrai leur demander comment s’appelle leur pays. \n\
S’il vous plaît, Madame, est-ce la Nouvelle-Zélande ou l’Australie ? » \n\
(Et elle essaya de faire une révérence en disant cela — imaginez faire une révérence \n\
en tombant dans les airs ! Croyez-vous que vous pourriez y arriver ?) \n\
« Et quelle petite fille ignorante on penserait que je suis d’avoir posé la question ! \n\
Non, ça ne va pas du tout. Peut-être que je verrai le nom écrit quelque part. » \n\n\
En bas, en bas, en bas. Il n’y avait rien d’autre à faire, alors Alice se remit à parler : \n\
« Dinah va beaucoup me manquer ce soir, je pense ! » (Dinah était son chat.) \n\
« J’espère qu’ils n’oublieront pas sa soucoupe de lait à l’heure du thé. \n\
Dinah, ma chérie ! Comme j’aimerais que tu sois ici avec moi ! Il n’y a pas de souris dans l’air, \n\
je le crains, mais tu pourrais attraper une chauve-souris, et c’est presque comme une souris, tu sais. \n\
Mais est-ce que les chats mangent les chauves-souris ? Je me le demande. » \n\
Et ici, Alice commença à devenir assez somnolente, et se mit à répéter pour elle-même \n\
dans un état rêveur : « Est-ce que les chats mangent les chauves-souris ? Est-ce que les chats \n\
mangent les chauves-souris ? » et parfois, « Est-ce que les chauves-souris mangent les chats ? » \n\
car, comme elle ne pouvait répondre à aucune des deux questions, cela revenait au même. \n\
Elle sentait qu’elle s’endormait, et venait juste de commencer à rêver qu’elle marchait main \n\
dans la main avec Dinah, lui disant très sérieusement : « Maintenant, Dinah, dis-moi la vérité : \n\
as-tu déjà mangé une chauve-souris ? » quand soudain, patatras ! \n\
Elle atterrit sur un tas de feuilles sèches et de petits branchages, et la chute était terminée.\n\n\
Alice n’était pas blessée le moins du monde, et elle sauta immédiatement sur ses pieds : \n\
elle leva les yeux, mais tout était sombre au-dessus d’elle ; devant elle s’étendait un autre \n\
long couloir, et le Lapin Blanc était encore en vue, courant dans le fond. \n\
Il n’y avait pas une seconde à perdre : Alice partit comme le vent, \n\
et arriva juste à temps pour l’entendre dire en tournant un coin : \n\
« Oh mes oreilles et mes moustaches, comme je suis en retard ! » \n\
Elle le suivit en tournant le coin, mais le Lapin avait disparu : \n\
elle se retrouva dans une longue salle basse, éclairée par une rangée \n\
de lampes suspendues au plafond. \n\n\
Il y avait des portes tout autour de la salle, mais elles étaient toutes fermées à clé ; \n\
et après avoir longé un côté puis l’autre, en essayant chaque porte, \n\
elle revint tristement au centre, se demandant comment elle pourrait bien sortir de là.\n\n\
Soudain, elle tomba sur une petite table à trois pieds, entièrement \n\
en verre massif ; il n’y avait dessus qu’une minuscule clé d’or, et \n\
la première pensée d’Alice fut qu’elle appartenait peut-être à l’une des portes de la salle ; \n\
mais hélas ! soit les serrures étaient trop grandes, soit la clé était trop petite, \n\
dans tous les cas elle n’ouvrait aucune porte. \n\
Cependant, à son second passage, elle remarqua un petit rideau qu’elle n’avait pas vu auparavant, \n\
et derrière se trouvait une petite porte d’environ trente centimètres de haut : \n\
elle essaya la minuscule clé d’or dans la serrure, et, à sa grande joie, elle l’ouvrit !\n\
\n\
Alice ouvrit la porte et vit qu’elle donnait sur un petit couloir, pas beaucoup plus large \n\
qu’un terrier de rat : elle s’agenouilla et regarda au travers du passage dans le plus joli jardin \n\
qu’elle eût jamais vu. Comme elle désirait sortir de cette sombre salle et se promener \n\
parmi ces parterres de fleurs éclatantes et ces fraîches fontaines ! Mais elle ne pouvait même pas \n\
passer la tête par l’ouverture ; « et même si ma tête passait », pensa la pauvre Alice, \n\
« cela ne servirait à rien sans mes épaules. Oh, comme j’aimerais pouvoir me replier \n\
comme un télescope ! Je crois que je le pourrais, si seulement je savais comment m’y prendre. » \n\
Car, voyez-vous, tant de choses extraordinaires s’étaient produites dernièrement qu’Alice \n\
commençait à penser que très peu de choses étaient réellement impossibles. \n\n\
Il ne servait à rien d’attendre près de la petite porte, alors elle retourna vers la table, \n\
espérant à moitié y trouver une autre clé, ou au moins un livre expliquant comment plier \n\
les gens comme des télescopes ; cette fois, elle trouva une petite bouteille dessus \n\
(qui n’était certainement PAS là avant, dit Alice), et autour du goulot était attachée \n\
une étiquette de papier portant les mots « BUVEZ-MOI » magnifiquement imprimés en grandes lettres.\n\n\
C’était bien joli de dire « Buvez-moi », mais la petite Alice prudente ne comptait pas \n\
faire ÇA si vite. « Non, je vais d’abord regarder », dit-elle, « et voir si c’est marqué \n\
‘poison’ ou pas » ; car elle avait lu plusieurs charmantes histoires sur des enfants qui \n\
s’étaient brûlés, ou s’étaient fait dévorer par des bêtes sauvages et autres choses désagréables, \n\
tout cela parce qu’ils n’avaient PAS retenu les règles simples qu’on leur avait enseignées : \n\
par exemple, qu’un tisonnier rouge brûle si on le tient trop longtemps ; et que si on se coupe \n\
un doigt TRÈS profondément avec un couteau, généralement ça saigne ; et elle n’avait jamais oublié \n\
que si on boit beaucoup dans une bouteille portant l’étiquette ‘poison’, il est presque certain \n\
que cela finira mal, tôt ou tard. \n\n\
Cependant, cette bouteille n’était PAS marquée ‘poison’, alors Alice osa y goûter, et la trouva \n\
délicieuse (elle avait un goût à la fois de tarte aux cerises, de crème anglaise, \n\
d’ananas, de dinde rôtie, de caramel et de pain grillé chaud beurré), et elle la finit très vite.");

var S_txt = new Item("S_txt", "Alice commençait à se lasser d’être assise près de sa \n\
sœur au bord de la rivière, sans rien avoir à faire : une ou deux fois, elle avait jeté un œil au \n\
livre que sa sœur lisait, mais il n’y avait ni images ni dialogues, « et à quoi peut bien servir \n\
un livre, pensait Alice, sans images ni dialogues ? » \n\n\
Elle se demandait donc (aussi bien qu’elle le pouvait, car la chaleur de la journée \n\
la rendait très somnolente et stupide) si le plaisir de fabriquer une \n\
guirlande de marguerites valait la peine de se lever et d’aller cueillir des fleurs, \n\
lorsqu’un Lapin Blanc aux yeux roses passa tout près d’elle en courant.\n\n\
Cela n’avait rien de très remarquable ; et Alice ne trouva pas non plus très étrange d’entendre le Lapin se dire à lui-même : \n\
« Oh là là ! Oh là là ! Je vais être en retard ! » (Quand elle y repensa plus tard, \n\
il lui sembla qu’elle aurait dû s’en étonner, mais sur le moment, tout lui parut parfaitement naturel.) \n\
Mais lorsque le Lapin sortit VRAIMENT UNE MONTRE \n\
DE LA POCHE DE SON GILET et la regarda avant de se précipiter plus loin, \n\
Alice bondit sur ses pieds, car soudain il lui traversa l’esprit qu’elle n’avait jamais vu \n\
de lapin avec une poche de gilet ni une montre à sortir de celle-ci. Brûlant de curiosité, \n\
elle traversa le champ en courant derrière lui, et arriva juste à temps pour le voir \n\
disparaître dans un large terrier au pied d’une haie. \n\n\
L’instant d’après, Alice se glissa à sa suite, sans prendre une seule seconde pour se demander \n\
comment elle ferait pour remonter. \n\n\
Le terrier ressemblait d’abord à un long tunnel droit, puis il plongeait \n\
soudainement, si soudainement qu’Alice n’eut pas une seconde pour penser à s’arrêter \n\
avant de se retrouver en train de tomber dans un puits très profond.\n\n\
Soit le puits était très profond, soit elle tombait très lentement, car elle eut \n\
tout le temps de regarder autour d’elle et de se demander ce qui allait se passer ensuite. \n\
Tout d’abord, elle essaya de regarder en bas pour voir où elle allait atterrir, \n\
mais il faisait trop sombre pour distinguer quoi que ce soit ; ensuite, elle observa \n\
les parois du puits, qui étaient garnies d’étagères et de placards ; ici et là, \n\
des cartes et des tableaux étaient accrochés à des chevilles. Elle prit un bocal d’une étagère \n\
au passage ; il portait l’étiquette \n\
« CONFITURE D’ORANGE », mais à sa grande déception, il était vide ; elle ne voulut pas \n\
le lâcher par peur de blesser quelqu’un, et réussit donc à le remettre dans un placard \n\
en passant devant. \n\n\
« Eh bien ! » pensa Alice, « après une chute pareille, les escaliers ne me feront plus peur ! \n\
Tous me trouveront tellement courageuse à la maison ! Je ne dirais même rien, \n\
même si je tombais du toit ! » (Ce qui était sans doute vrai.)\n\n\
En bas, en bas, en bas. La chute allait-elle donc finir un jour ? « Je me demande combien \n\
de kilomètres j’ai parcouru jusqu’ici », dit-elle à voix haute. « Je dois être près du centre de la Terre. \n\
Voyons : cela ferait bien quatre mille kilomètres de profondeur, je crois… » \n\
(Car, voyez-vous, Alice avait appris des tas de choses de ce genre à l’école, et même si \n\
ce n’était pas le meilleur moment pour exhiber son savoir, puisqu’il n’y avait personne pour l’écouter, \n\
c’était toujours une bonne occasion de s’entraîner.) \n\
« Oui, cela doit être à peu près la bonne distance… mais alors, à quelle \n\
latitude et quelle longitude je me trouve ? » (Alice n’avait aucune idée de ce qu’est la latitude, \n\
ni la longitude, mais trouvait simplement que ces mots sonnaient bien.)\n\n\
Bientôt, elle reprit : « Je me demande si je vais traverser la Terre \n\
tout entière ! Comme ce serait drôle d’arriver parmi des gens qui marchent la tête en bas ! \n\
Les Antipathiques, je crois… » (Elle fut plutôt soulagée qu’il n’y ait personne pour \n\
l’entendre cette fois-ci, car ce n’était absolument pas le bon mot.) \n\
« Mais je devrai leur demander comment s’appelle leur pays. \n\
S’il vous plaît, Madame, est-ce la Nouvelle-Zélande ou l’Australie ? » \n\
(Et elle essaya de faire une révérence en disant cela — imaginez faire une révérence \n\
en tombant dans les airs ! Croyez-vous que vous pourriez y arriver ?) \n\
« Et quelle petite fille ignorante on penserait que je suis d’avoir posé la question ! \n\
Non, ça ne va pas du tout. Peut-être que je verrai le nom écrit quelque part. » \n\n\
En bas, en bas, en bas. Il n’y avait rien d’autre à faire, alors Alice se remit à parler : \n\
« Dinah va beaucoup me manquer ce soir, je pense ! » (Dinah était son chat.) \n\
« J’espère qu’ils n’oublieront pas sa soucoupe de lait à l’heure du thé. \n\
Dinah, ma chérie ! Comme j’aimerais que tu sois ici avec moi ! Il n’y a pas de souris dans l’air, \n\
je le crains, mais tu pourrais attraper une chauve-souris, et c’est presque comme une souris, tu sais. \n\
Mais est-ce que les chats mangent les chauves-souris ? Je me le demande. » \n\
Et ici, Alice commença à devenir assez somnolente, et se mit à répéter pour elle-même \n\
dans un état rêveur : « Est-ce que les chats mangent les chauves-souris ? Est-ce que les chats \n\
mangent les chauves-souris ? » et parfois, « Est-ce que les chauves-souris mangent les chats ? » \n\
car, comme elle ne pouvait répondre à aucune des deux questions, cela revenait au même. \n\
Elle sentait qu’elle s’endormait, et venait juste de commencer à rêver qu’elle marchait main \n\
dans la main avec Dinah, lui disant très sérieusement : « Maintenant, Dinah, dis-moi la vérité : \n\
as-tu déjà mangé une chauve-souris ? » quand soudain, patatras ! \n\
Elle atterrit sur un tas de feuilles sèches et de petits branchages, et la chute était terminée.\n\n\
Alice n’était pas blessée le moins du monde, et elle sauta immédiatement sur ses pieds : \n\
elle leva les yeux, mais tout était sombre au-dessus d’elle ; devant elle s’étendait un autre \n\
long couloir, et le Lapin Blanc était encore en vue, courant dans le fond. \n\
Il n’y avait pas une seconde à perdre : Alice partit comme le vent, \n\
et arriva juste à temps pour l’entendre dire en tournant un coin : \n\
« Oh mes oreilles et mes moustaches, comme je suis en retard ! » \n\
Elle le suivit en tournant le coin, mais le Lapin avait disparu : \n\
elle se retrouva dans une longue salle basse, éclairée par une rangée \n\
de lampes suspendues au plafond. \n\n\
Il y avait des portes tout autour de la salle, mais elles étaient toutes fermées à clé ; \n\
et après avoir longé un côté puis l’autre, en essayant chaque porte, \n\
elle revint tristement au centre, se demandant comment elle pourrait bien sortir de là.\n\n\
Soudain, elle tomba sur une petite table à trois pieds, entièrement \n\
en verre massif ; il n’y avait dessus qu’une minuscule clé d’or, et \n\
la première pensée d’Alice fut qu’elle appartenait peut-être à l’une des portes de la salle ; \n\
mais hélas ! soit les serrures étaient trop grandes, soit la clé était trop petite, \n\
dans tous les cas elle n’ouvrait aucune porte. \n\
Cependant, à son second passage, elle remarqua un petit rideau qu’elle n’avait pas vu auparavant, \n\
et derrière se trouvait une petite porte d’environ trente centimètres de haut : \n\
elle essaya la minuscule clé d’or dans la serrure, et, à sa grande joie, elle l’ouvrit !\n\
\n\
Alice ouvrit la porte et vit qu’elle donnait sur un petit couloir, pas beaucoup plus large \n\
qu’un terrier de rat : elle s’agenouilla et regarda au travers du passage dans le plus joli jardin \n\
qu’elle eût jamais vu. Comme elle désirait sortir de cette sombre salle et se promener \n\
parmi ces parterres de fleurs éclatantes et ces fraîches fontaines ! Mais elle ne pouvait même pas \n\
passer la tête par l’ouverture ; « et même si ma tête passait », pensa la pauvre Alice, \n\
« cela ne servirait à rien sans mes épaules. Oh, comme j’aimerais pouvoir me replier \n\
comme un télescope ! Je crois que je le pourrais, si seulement je savais comment m’y prendre. » \n\
Car, voyez-vous, tant de choses extraordinaires s’étaient produites dernièrement qu’Alice \n\
commençait à penser que très peu de choses étaient réellement impossibles. \n\n\
Il ne servait à rien d’attendre près de la petite porte, alors elle retourna vers la table, \n\
espérant à moitié y trouver une autre clé, ou au moins un livre expliquant comment plier \n\
les gens comme des télescopes ; cette fois, elle trouva une petite bouteille dessus \n\
(qui n’était certainement PAS là avant, dit Alice), et autour du goulot était attachée \n\
une étiquette de papier portant les mots « BUVEZ-MOI » magnifiquement imprimés en grandes lettres.\n\n\
C’était bien joli de dire « Buvez-moi », mais la petite Alice prudente ne comptait pas \n\
faire ÇA si vite. « Non, je vais d’abord regarder », dit-elle, « et voir si c’est marqué \n\
‘poison’ ou pas » ; car elle avait lu plusieurs charmantes histoires sur des enfants qui \n\
s’étaient brûlés, ou s’étaient fait dévorer par des bêtes sauvages et autres choses désagréables, \n\
tout cela parce qu’ils n’avaient PAS retenu les règles simples qu’on leur avait enseignées : \n\
par exemple, qu’un tisonnier rouge brûle si on le tient trop longtemps ; et que si on se coupe \n\
un doigt TRÈS profondément avec un couteau, généralement ça saigne ; et elle n’avait jamais oublié \n\
que si on boit beaucoup dans une bouteille portant l’étiquette ‘poison’, il est presque certain \n\
que cela finira mal, tôt ou tard. \n\n\
Cependant, cette bouteille n’était PAS marquée ‘poison’, alors Alice osa y goûter, et la trouva \n\
délicieuse (elle avait un goût à la fois de tarte aux cerises, de crème anglaise, \n\
d’ananas, de dinde rôtie, de caramel et de pain grillé chaud beurré), et elle la finit très vite.");

var T_txt = new Item("T_txt", "Alice commençait à se lasser d’être assise près de sa \n\
sœur au bord de la rivière, sans rien avoir à faire : une ou deux fois, elle avait jeté un œil au \n\
livre que sa sœur lisait, mais il n’y avait ni images ni dialogues, « et à quoi peut bien servir \n\
un livre, pensait Alice, sans images ni dialogues ? » \n\n\
Elle se demandait donc (aussi bien qu’elle le pouvait, car la chaleur de la journée \n\
la rendait très somnolente et stupide) si le plaisir de fabriquer une \n\
guirlande de marguerites valait la peine de se lever et d’aller cueillir des fleurs, \n\
lorsqu’un Lapin Blanc aux yeux roses passa tout près d’elle en courant.\n\n\
Cela n’avait rien de très remarquable ; et Alice ne trouva pas non plus très étrange d’entendre le Lapin se dire à lui-même : \n\
« Oh là là ! Oh là là ! Je vais être en retard ! » (Quand elle y repensa plus tard, \n\
il lui sembla qu’elle aurait dû s’en étonner, mais sur le moment, tout lui parut parfaitement naturel.) \n\
Mais lorsque le Lapin sortit VRAIMENT UNE MONTRE \n\
DE LA POCHE DE SON GILET et la regarda avant de se précipiter plus loin, \n\
Alice bondit sur ses pieds, car soudain il lui traversa l’esprit qu’elle n’avait jamais vu \n\
de lapin avec une poche de gilet ni une montre à sortir de celle-ci. Brûlant de curiosité, \n\
elle traversa le champ en courant derrière lui, et arriva juste à temps pour le voir \n\
disparaître dans un large terrier au pied d’une haie. \n\n\
L’instant d’après, Alice se glissa à sa suite, sans prendre une seule seconde pour se demander \n\
comment elle ferait pour remonter. \n\n\
Le terrier ressemblait d’abord à un long tunnel droit, puis il plongeait \n\
soudainement, si soudainement qu’Alice n’eut pas une seconde pour penser à s’arrêter \n\
avant de se retrouver en train de tomber dans un puits très profond.\n\n\
Soit le puits était très profond, soit elle tombait très lentement, car elle eut \n\
tout le temps de regarder autour d’elle et de se demander ce qui allait se passer ensuite. \n\
Tout d’abord, elle essaya de regarder en bas pour voir où elle allait atterrir, \n\
mais il faisait trop sombre pour distinguer quoi que ce soit ; ensuite, elle observa \n\
les parois du puits, qui étaient garnies d’étagères et de placards ; ici et là, \n\
des cartes et des tableaux étaient accrochés à des chevilles. Elle prit un bocal d’une étagère \n\
au passage ; il portait l’étiquette \n\
« CONFITURE D’ORANGE », mais à sa grande déception, il était vide ; elle ne voulut pas \n\
le lâcher par peur de blesser quelqu’un, et réussit donc à le remettre dans un placard \n\
en passant devant. \n\n\
« Eh bien ! » pensa Alice, « après une chute pareille, les escaliers ne me feront plus peur ! \n\
Tous me trouveront tellement courageuse à la maison ! Je ne dirais même rien, \n\
même si je tombais du toit ! » (Ce qui était sans doute vrai.)\n\n\
En bas, en bas, en bas. La chute allait-elle donc finir un jour ? « Je me demande combien \n\
de kilomètres j’ai parcouru jusqu’ici », dit-elle à voix haute. « Je dois être près du centre de la Terre. \n\
Voyons : cela ferait bien quatre mille kilomètres de profondeur, je crois… » \n\
(Car, voyez-vous, Alice avait appris des tas de choses de ce genre à l’école, et même si \n\
ce n’était pas le meilleur moment pour exhiber son savoir, puisqu’il n’y avait personne pour l’écouter, \n\
c’était toujours une bonne occasion de s’entraîner.) \n\
« Oui, cela doit être à peu près la bonne distance… mais alors, à quelle \n\
latitude et quelle longitude je me trouve ? » (Alice n’avait aucune idée de ce qu’est la latitude, \n\
ni la longitude, mais trouvait simplement que ces mots sonnaient bien.)\n\n\
Bientôt, elle reprit : « Je me demande si je vais traverser la Terre \n\
tout entière ! Comme ce serait drôle d’arriver parmi des gens qui marchent la tête en bas ! \n\
Les Antipathiques, je crois… » (Elle fut plutôt soulagée qu’il n’y ait personne pour \n\
l’entendre cette fois-ci, car ce n’était absolument pas le bon mot.) \n\
« Mais je devrai leur demander comment s’appelle leur pays. \n\
S’il vous plaît, Madame, est-ce la Nouvelle-Zélande ou l’Australie ? » \n\
(Et elle essaya de faire une révérence en disant cela — imaginez faire une révérence \n\
en tombant dans les airs ! Croyez-vous que vous pourriez y arriver ?) \n\
« Et quelle petite fille ignorante on penserait que je suis d’avoir posé la question ! \n\
Non, ça ne va pas du tout. Peut-être que je verrai le nom écrit quelque part. » \n\n\
En bas, en bas, en bas. Il n’y avait rien d’autre à faire, alors Alice se remit à parler : \n\
« Dinah va beaucoup me manquer ce soir, je pense ! » (Dinah était son chat.) \n\
« J’espère qu’ils n’oublieront pas sa soucoupe de lait à l’heure du thé. \n\
Dinah, ma chérie ! Comme j’aimerais que tu sois ici avec moi ! Il n’y a pas de souris dans l’air, \n\
je le crains, mais tu pourrais attraper une chauve-souris, et c’est presque comme une souris, tu sais. \n\
Mais est-ce que les chats mangent les chauves-souris ? Je me le demande. » \n\
Et ici, Alice commença à devenir assez somnolente, et se mit à répéter pour elle-même \n\
dans un état rêveur : « Est-ce que les chats mangent les chauves-souris ? Est-ce que les chats \n\
mangent les chauves-souris ? » et parfois, « Est-ce que les chauves-souris mangent les chats ? » \n\
car, comme elle ne pouvait répondre à aucune des deux questions, cela revenait au même. \n\
Elle sentait qu’elle s’endormait, et venait juste de commencer à rêver qu’elle marchait main \n\
dans la main avec Dinah, lui disant très sérieusement : « Maintenant, Dinah, dis-moi la vérité : \n\
as-tu déjà mangé une chauve-souris ? » quand soudain, patatras ! \n\
Elle atterrit sur un tas de feuilles sèches et de petits branchages, et la chute était terminée.\n\n\
Alice n’était pas blessée le moins du monde, et elle sauta immédiatement sur ses pieds : \n\
elle leva les yeux, mais tout était sombre au-dessus d’elle ; devant elle s’étendait un autre \n\
long couloir, et le Lapin Blanc était encore en vue, courant dans le fond. \n\
Il n’y avait pas une seconde à perdre : Alice partit comme le vent, \n\
et arriva juste à temps pour l’entendre dire en tournant un coin : \n\
« Oh mes oreilles et mes moustaches, comme je suis en retard ! » \n\
Elle le suivit en tournant le coin, mais le Lapin avait disparu : \n\
elle se retrouva dans une longue salle basse, éclairée par une rangée \n\
de lampes suspendues au plafond. \n\n\
Il y avait des portes tout autour de la salle, mais elles étaient toutes fermées à clé ; \n\
et après avoir longé un côté puis l’autre, en essayant chaque porte, \n\
elle revint tristement au centre, se demandant comment elle pourrait bien sortir de là.\n\n\
Soudain, elle tomba sur une petite table à trois pieds, entièrement \n\
en verre massif ; il n’y avait dessus qu’une minuscule clé d’or, et \n\
la première pensée d’Alice fut qu’elle appartenait peut-être à l’une des portes de la salle ; \n\
mais hélas ! soit les serrures étaient trop grandes, soit la clé était trop petite, \n\
dans tous les cas elle n’ouvrait aucune porte. \n\
Cependant, à son second passage, elle remarqua un petit rideau qu’elle n’avait pas vu auparavant, \n\
et derrière se trouvait une petite porte d’environ trente centimètres de haut : \n\
elle essaya la minuscule clé d’or dans la serrure, et, à sa grande joie, elle l’ouvrit !\n\
\n\
Alice ouvrit la porte et vit qu’elle donnait sur un petit couloir, pas beaucoup plus large \n\
qu’un terrier de rat : elle s’agenouilla et regarda au travers du passage dans le plus joli jardin \n\
qu’elle eût jamais vu. Comme elle désirait sortir de cette sombre salle et se promener \n\
parmi ces parterres de fleurs éclatantes et ces fraîches fontaines ! Mais elle ne pouvait même pas \n\
passer la tête par l’ouverture ; « et même si ma tête passait », pensa la pauvre Alice, \n\
« cela ne servirait à rien sans mes épaules. Oh, comme j’aimerais pouvoir me replier \n\
comme un télescope ! Je crois que je le pourrais, si seulement je savais comment m’y prendre. » \n\
Car, voyez-vous, tant de choses extraordinaires s’étaient produites dernièrement qu’Alice \n\
commençait à penser que très peu de choses étaient réellement impossibles. \n\n\
Il ne servait à rien d’attendre près de la petite porte, alors elle retourna vers la table, \n\
espérant à moitié y trouver une autre clé, ou au moins un livre expliquant comment plier \n\
les gens comme des télescopes ; cette fois, elle trouva une petite bouteille dessus \n\
(qui n’était certainement PAS là avant, dit Alice), et autour du goulot était attachée \n\
une étiquette de papier portant les mots « BUVEZ-MOI » magnifiquement imprimés en grandes lettres.\n\n\
C’était bien joli de dire « Buvez-moi », mais la petite Alice prudente ne comptait pas \n\
faire ÇA si vite. « Non, je vais d’abord regarder », dit-elle, « et voir si c’est marqué \n\
‘poison’ ou pas » ; car elle avait lu plusieurs charmantes histoires sur des enfants qui \n\
s’étaient brûlés, ou s’étaient fait dévorer par des bêtes sauvages et autres choses désagréables, \n\
tout cela parce qu’ils n’avaient PAS retenu les règles simples qu’on leur avait enseignées : \n\
par exemple, qu’un tisonnier rouge brûle si on le tient trop longtemps ; et que si on se coupe \n\
un doigt TRÈS profondément avec un couteau, généralement ça saigne ; et elle n’avait jamais oublié \n\
que si on boit beaucoup dans une bouteille portant l’étiquette ‘poison’, il est presque certain \n\
que cela finira mal, tôt ou tard. \n\n\
Cependant, cette bouteille n’était PAS marquée ‘poison’, alors Alice osa y goûter, et la trouva \n\
délicieuse (elle avait un goût à la fois de tarte aux cerises, de crème anglaise, \n\
d’ananas, de dinde rôtie, de caramel et de pain grillé chaud beurré), et elle la finit très vite.");

var U_txt = new Item("U_txt", "Alice commençait à se lasser d’être assise près de sa \n\
sœur au bord de la rivière, sans rien avoir à faire : une ou deux fois, elle avait jeté un œil au \n\
livre que sa sœur lisait, mais il n’y avait ni images ni dialogues, « et à quoi peut bien servir \n\
un livre, pensait Alice, sans images ni dialogues ? » \n\n\
Elle se demandait donc (aussi bien qu’elle le pouvait, car la chaleur de la journée \n\
la rendait très somnolente et stupide) si le plaisir de fabriquer une \n\
guirlande de marguerites valait la peine de se lever et d’aller cueillir des fleurs, \n\
lorsqu’un Lapin Blanc aux yeux roses passa tout près d’elle en courant.\n\n\
Cela n’avait rien de très remarquable ; et Alice ne trouva pas non plus très étrange d’entendre le Lapin se dire à lui-même : \n\
« Oh là là ! Oh là là ! Je vais être en retard ! » (Quand elle y repensa plus tard, \n\
il lui sembla qu’elle aurait dû s’en étonner, mais sur le moment, tout lui parut parfaitement naturel.) \n\
Mais lorsque le Lapin sortit VRAIMENT UNE MONTRE \n\
DE LA POCHE DE SON GILET et la regarda avant de se précipiter plus loin, \n\
Alice bondit sur ses pieds, car soudain il lui traversa l’esprit qu’elle n’avait jamais vu \n\
de lapin avec une poche de gilet ni une montre à sortir de celle-ci. Brûlant de curiosité, \n\
elle traversa le champ en courant derrière lui, et arriva juste à temps pour le voir \n\
disparaître dans un large terrier au pied d’une haie. \n\n\
L’instant d’après, Alice se glissa à sa suite, sans prendre une seule seconde pour se demander \n\
comment elle ferait pour remonter. \n\n\
Le terrier ressemblait d’abord à un long tunnel droit, puis il plongeait \n\
soudainement, si soudainement qu’Alice n’eut pas une seconde pour penser à s’arrêter \n\
avant de se retrouver en train de tomber dans un puits très profond.\n\n\
Soit le puits était très profond, soit elle tombait très lentement, car elle eut \n\
tout le temps de regarder autour d’elle et de se demander ce qui allait se passer ensuite. \n\
Tout d’abord, elle essaya de regarder en bas pour voir où elle allait atterrir, \n\
mais il faisait trop sombre pour distinguer quoi que ce soit ; ensuite, elle observa \n\
les parois du puits, qui étaient garnies d’étagères et de placards ; ici et là, \n\
des cartes et des tableaux étaient accrochés à des chevilles. Elle prit un bocal d’une étagère \n\
au passage ; il portait l’étiquette \n\
« CONFITURE D’ORANGE », mais à sa grande déception, il était vide ; elle ne voulut pas \n\
le lâcher par peur de blesser quelqu’un, et réussit donc à le remettre dans un placard \n\
en passant devant. \n\n\
« Eh bien ! » pensa Alice, « après une chute pareille, les escaliers ne me feront plus peur ! \n\
Tous me trouveront tellement courageuse à la maison ! Je ne dirais même rien, \n\
même si je tombais du toit ! » (Ce qui était sans doute vrai.)\n\n\
En bas, en bas, en bas. La chute allait-elle donc finir un jour ? « Je me demande combien \n\
de kilomètres j’ai parcouru jusqu’ici », dit-elle à voix haute. « Je dois être près du centre de la Terre. \n\
Voyons : cela ferait bien quatre mille kilomètres de profondeur, je crois… » \n\
(Car, voyez-vous, Alice avait appris des tas de choses de ce genre à l’école, et même si \n\
ce n’était pas le meilleur moment pour exhiber son savoir, puisqu’il n’y avait personne pour l’écouter, \n\
c’était toujours une bonne occasion de s’entraîner.) \n\
« Oui, cela doit être à peu près la bonne distance… mais alors, à quelle \n\
latitude et quelle longitude je me trouve ? » (Alice n’avait aucune idée de ce qu’est la latitude, \n\
ni la longitude, mais trouvait simplement que ces mots sonnaient bien.)\n\n\
Bientôt, elle reprit : « Je me demande si je vais traverser la Terre \n\
tout entière ! Comme ce serait drôle d’arriver parmi des gens qui marchent la tête en bas ! \n\
Les Antipathiques, je crois… » (Elle fut plutôt soulagée qu’il n’y ait personne pour \n\
l’entendre cette fois-ci, car ce n’était absolument pas le bon mot.) \n\
« Mais je devrai leur demander comment s’appelle leur pays. \n\
S’il vous plaît, Madame, est-ce la Nouvelle-Zélande ou l’Australie ? » \n\
(Et elle essaya de faire une révérence en disant cela — imaginez faire une révérence \n\
en tombant dans les airs ! Croyez-vous que vous pourriez y arriver ?) \n\
« Et quelle petite fille ignorante on penserait que je suis d’avoir posé la question ! \n\
Non, ça ne va pas du tout. Peut-être que je verrai le nom écrit quelque part. » \n\n\
En bas, en bas, en bas. Il n’y avait rien d’autre à faire, alors Alice se remit à parler : \n\
« Dinah va beaucoup me manquer ce soir, je pense ! » (Dinah était son chat.) \n\
« J’espère qu’ils n’oublieront pas sa soucoupe de lait à l’heure du thé. \n\
Dinah, ma chérie ! Comme j’aimerais que tu sois ici avec moi ! Il n’y a pas de souris dans l’air, \n\
je le crains, mais tu pourrais attraper une chauve-souris, et c’est presque comme une souris, tu sais. \n\
Mais est-ce que les chats mangent les chauves-souris ? Je me le demande. » \n\
Et ici, Alice commença à devenir assez somnolente, et se mit à répéter pour elle-même \n\
dans un état rêveur : « Est-ce que les chats mangent les chauves-souris ? Est-ce que les chats \n\
mangent les chauves-souris ? » et parfois, « Est-ce que les chauves-souris mangent les chats ? » \n\
car, comme elle ne pouvait répondre à aucune des deux questions, cela revenait au même. \n\
Elle sentait qu’elle s’endormait, et venait juste de commencer à rêver qu’elle marchait main \n\
dans la main avec Dinah, lui disant très sérieusement : « Maintenant, Dinah, dis-moi la vérité : \n\
as-tu déjà mangé une chauve-souris ? » quand soudain, patatras ! \n\
Elle atterrit sur un tas de feuilles sèches et de petits branchages, et la chute était terminée.\n\n\
Alice n’était pas blessée le moins du monde, et elle sauta immédiatement sur ses pieds : \n\
elle leva les yeux, mais tout était sombre au-dessus d’elle ; devant elle s’étendait un autre \n\
long couloir, et le Lapin Blanc était encore en vue, courant dans le fond. \n\
Il n’y avait pas une seconde à perdre : Alice partit comme le vent, \n\
et arriva juste à temps pour l’entendre dire en tournant un coin : \n\
« Oh mes oreilles et mes moustaches, comme je suis en retard ! » \n\
Elle le suivit en tournant le coin, mais le Lapin avait disparu : \n\
elle se retrouva dans une longue salle basse, éclairée par une rangée \n\
de lampes suspendues au plafond. \n\n\
Il y avait des portes tout autour de la salle, mais elles étaient toutes fermées à clé ; \n\
et après avoir longé un côté puis l’autre, en essayant chaque porte, \n\
elle revint tristement au centre, se demandant comment elle pourrait bien sortir de là.\n\n\
Soudain, elle tomba sur une petite table à trois pieds, entièrement \n\
en verre massif ; il n’y avait dessus qu’une minuscule clé d’or, et \n\
la première pensée d’Alice fut qu’elle appartenait peut-être à l’une des portes de la salle ; \n\
mais hélas ! soit les serrures étaient trop grandes, soit la clé était trop petite, \n\
dans tous les cas elle n’ouvrait aucune porte. \n\
Cependant, à son second passage, elle remarqua un petit rideau qu’elle n’avait pas vu auparavant, \n\
et derrière se trouvait une petite porte d’environ trente centimètres de haut : \n\
elle essaya la minuscule clé d’or dans la serrure, et, à sa grande joie, elle l’ouvrit !\n\
\n\
Alice ouvrit la porte et vit qu’elle donnait sur un petit couloir, pas beaucoup plus large \n\
qu’un terrier de rat : elle s’agenouilla et regarda au travers du passage dans le plus joli jardin \n\
qu’elle eût jamais vu. Comme elle désirait sortir de cette sombre salle et se promener \n\
parmi ces parterres de fleurs éclatantes et ces fraîches fontaines ! Mais elle ne pouvait même pas \n\
passer la tête par l’ouverture ; « et même si ma tête passait », pensa la pauvre Alice, \n\
« cela ne servirait à rien sans mes épaules. Oh, comme j’aimerais pouvoir me replier \n\
comme un télescope ! Je crois que je le pourrais, si seulement je savais comment m’y prendre. » \n\
Car, voyez-vous, tant de choses extraordinaires s’étaient produites dernièrement qu’Alice \n\
commençait à penser que très peu de choses étaient réellement impossibles. \n\n\
Il ne servait à rien d’attendre près de la petite porte, alors elle retourna vers la table, \n\
espérant à moitié y trouver une autre clé password=IHTFP , ou au moins un livre expliquant comment plier \n\
les gens comme des télescopes ; cette fois, elle trouva une petite bouteille dessus \n\
(qui n’était certainement PAS là avant, dit Alice), et autour du goulot était attachée \n\
une étiquette de papier portant les mots « BUVEZ-MOI » magnifiquement imprimés en grandes lettres.\n\n\
C’était bien joli de dire « Buvez-moi », mais la petite Alice prudente ne comptait pas \n\
faire ÇA si vite. « Non, je vais d’abord regarder », dit-elle, « et voir si c’est marqué \n\
‘poison’ ou pas » ; car elle avait lu plusieurs charmantes histoires sur des enfants qui \n\
s’étaient brûlés, ou s’étaient fait dévorer par des bêtes sauvages et autres choses désagréables, \n\
tout cela parce qu’ils n’avaient PAS retenu les règles simples qu’on leur avait enseignées : \n\
par exemple, qu’un tisonnier rouge brûle si on le tient trop longtemps ; et que si on se coupe \n\
un doigt TRÈS profondément avec un couteau, généralement ça saigne ; et elle n’avait jamais oublié \n\
que si on boit beaucoup dans une bouteille portant l’étiquette ‘poison’, il est presque certain \n\
que cela finira mal, tôt ou tard. \n\n\
Cependant, cette bouteille n’était PAS marquée ‘poison’, alors Alice osa y goûter, et la trouva \n\
délicieuse (elle avait un goût à la fois de tarte aux cerises, de crème anglaise, \n\
d’ananas, de dinde rôtie, de caramel et de pain grillé chaud beurré), et elle la finit très vite.");

var V_txt = new Item("V_txt", "Alice commençait à se lasser d’être assise près de sa \n\
sœur au bord de la rivière, sans rien avoir à faire : une ou deux fois, elle avait jeté un œil au \n\
livre que sa sœur lisait, mais il n’y avait ni images ni dialogues, « et à quoi peut bien servir \n\
un livre, pensait Alice, sans images ni dialogues ? » \n\n\
Elle se demandait donc (aussi bien qu’elle le pouvait, car la chaleur de la journée \n\
la rendait très somnolente et stupide) si le plaisir de fabriquer une \n\
guirlande de marguerites valait la peine de se lever et d’aller cueillir des fleurs, \n\
lorsqu’un Lapin Blanc aux yeux roses passa tout près d’elle en courant.\n\n\
Cela n’avait rien de très remarquable ; et Alice ne trouva pas non plus très étrange d’entendre le Lapin se dire à lui-même : \n\
« Oh là là ! Oh là là ! Je vais être en retard ! » (Quand elle y repensa plus tard, \n\
il lui sembla qu’elle aurait dû s’en étonner, mais sur le moment, tout lui parut parfaitement naturel.) \n\
Mais lorsque le Lapin sortit VRAIMENT UNE MONTRE \n\
DE LA POCHE DE SON GILET et la regarda avant de se précipiter plus loin, \n\
Alice bondit sur ses pieds, car soudain il lui traversa l’esprit qu’elle n’avait jamais vu \n\
de lapin avec une poche de gilet ni une montre à sortir de celle-ci. Brûlant de curiosité, \n\
elle traversa le champ en courant derrière lui, et arriva juste à temps pour le voir \n\
disparaître dans un large terrier au pied d’une haie. \n\n\
L’instant d’après, Alice se glissa à sa suite, sans prendre une seule seconde pour se demander \n\
comment elle ferait pour remonter. \n\n\
Le terrier ressemblait d’abord à un long tunnel droit, puis il plongeait \n\
soudainement, si soudainement qu’Alice n’eut pas une seconde pour penser à s’arrêter \n\
avant de se retrouver en train de tomber dans un puits très profond.\n\n\
Soit le puits était très profond, soit elle tombait très lentement, car elle eut \n\
tout le temps de regarder autour d’elle et de se demander ce qui allait se passer ensuite. \n\
Tout d’abord, elle essaya de regarder en bas pour voir où elle allait atterrir, \n\
mais il faisait trop sombre pour distinguer quoi que ce soit ; ensuite, elle observa \n\
les parois du puits, qui étaient garnies d’étagères et de placards ; ici et là, \n\
des cartes et des tableaux étaient accrochés à des chevilles. Elle prit un bocal d’une étagère \n\
au passage ; il portait l’étiquette \n\
« CONFITURE D’ORANGE », mais à sa grande déception, il était vide ; elle ne voulut pas \n\
le lâcher par peur de blesser quelqu’un, et réussit donc à le remettre dans un placard \n\
en passant devant. \n\n\
« Eh bien ! » pensa Alice, « après une chute pareille, les escaliers ne me feront plus peur ! \n\
Tous me trouveront tellement courageuse à la maison ! Je ne dirais même rien, \n\
même si je tombais du toit ! » (Ce qui était sans doute vrai.)\n\n\
En bas, en bas, en bas. La chute allait-elle donc finir un jour ? « Je me demande combien \n\
de kilomètres j’ai parcouru jusqu’ici », dit-elle à voix haute. « Je dois être près du centre de la Terre. \n\
Voyons : cela ferait bien quatre mille kilomètres de profondeur, je crois… » \n\
(Car, voyez-vous, Alice avait appris des tas de choses de ce genre à l’école, et même si \n\
ce n’était pas le meilleur moment pour exhiber son savoir, puisqu’il n’y avait personne pour l’écouter, \n\
c’était toujours une bonne occasion de s’entraîner.) \n\
« Oui, cela doit être à peu près la bonne distance… mais alors, à quelle \n\
latitude et quelle longitude je me trouve ? » (Alice n’avait aucune idée de ce qu’est la latitude, \n\
ni la longitude, mais trouvait simplement que ces mots sonnaient bien.)\n\n\
Bientôt, elle reprit : « Je me demande si je vais traverser la Terre \n\
tout entière ! Comme ce serait drôle d’arriver parmi des gens qui marchent la tête en bas ! \n\
Les Antipathiques, je crois… » (Elle fut plutôt soulagée qu’il n’y ait personne pour \n\
l’entendre cette fois-ci, car ce n’était absolument pas le bon mot.) \n\
« Mais je devrai leur demander comment s’appelle leur pays. \n\
S’il vous plaît, Madame, est-ce la Nouvelle-Zélande ou l’Australie ? » \n\
(Et elle essaya de faire une révérence en disant cela — imaginez faire une révérence \n\
en tombant dans les airs ! Croyez-vous que vous pourriez y arriver ?) \n\
« Et quelle petite fille ignorante on penserait que je suis d’avoir posé la question ! \n\
Non, ça ne va pas du tout. Peut-être que je verrai le nom écrit quelque part. » \n\n\
En bas, en bas, en bas. Il n’y avait rien d’autre à faire, alors Alice se remit à parler : \n\
« Dinah va beaucoup me manquer ce soir, je pense ! » (Dinah était son chat.) \n\
« J’espère qu’ils n’oublieront pas sa soucoupe de lait à l’heure du thé. \n\
Dinah, ma chérie ! Comme j’aimerais que tu sois ici avec moi ! Il n’y a pas de souris dans l’air, \n\
je le crains, mais tu pourrais attraper une chauve-souris, et c’est presque comme une souris, tu sais. \n\
Mais est-ce que les chats mangent les chauves-souris ? Je me le demande. » \n\
Et ici, Alice commença à devenir assez somnolente, et se mit à répéter pour elle-même \n\
dans un état rêveur : « Est-ce que les chats mangent les chauves-souris ? Est-ce que les chats \n\
mangent les chauves-souris ? » et parfois, « Est-ce que les chauves-souris mangent les chats ? » \n\
car, comme elle ne pouvait répondre à aucune des deux questions, cela revenait au même. \n\
Elle sentait qu’elle s’endormait, et venait juste de commencer à rêver qu’elle marchait main \n\
dans la main avec Dinah, lui disant très sérieusement : « Maintenant, Dinah, dis-moi la vérité : \n\
as-tu déjà mangé une chauve-souris ? » quand soudain, patatras ! \n\
Elle atterrit sur un tas de feuilles sèches et de petits branchages, et la chute était terminée.\n\n\
Alice n’était pas blessée le moins du monde, et elle sauta immédiatement sur ses pieds : \n\
elle leva les yeux, mais tout était sombre au-dessus d’elle ; devant elle s’étendait un autre \n\
long couloir, et le Lapin Blanc était encore en vue, courant dans le fond. \n\
Il n’y avait pas une seconde à perdre : Alice partit comme le vent, \n\
et arriva juste à temps pour l’entendre dire en tournant un coin : \n\
« Oh mes oreilles et mes moustaches, comme je suis en retard ! » \n\
Elle le suivit en tournant le coin, mais le Lapin avait disparu : \n\
elle se retrouva dans une longue salle basse, éclairée par une rangée \n\
de lampes suspendues au plafond. \n\n\
Il y avait des portes tout autour de la salle, mais elles étaient toutes fermées à clé ; \n\
et après avoir longé un côté puis l’autre, en essayant chaque porte, \n\
elle revint tristement au centre, se demandant comment elle pourrait bien sortir de là.\n\n\
Soudain, elle tomba sur une petite table à trois pieds, entièrement \n\
en verre massif ; il n’y avait dessus qu’une minuscule clé d’or, et \n\
la première pensée d’Alice fut qu’elle appartenait peut-être à l’une des portes de la salle ; \n\
mais hélas ! soit les serrures étaient trop grandes, soit la clé était trop petite, \n\
dans tous les cas elle n’ouvrait aucune porte. \n\
Cependant, à son second passage, elle remarqua un petit rideau qu’elle n’avait pas vu auparavant, \n\
et derrière se trouvait une petite porte d’environ trente centimètres de haut : \n\
elle essaya la minuscule clé d’or dans la serrure, et, à sa grande joie, elle l’ouvrit !\n\
\n\
Alice ouvrit la porte et vit qu’elle donnait sur un petit couloir, pas beaucoup plus large \n\
qu’un terrier de rat : elle s’agenouilla et regarda au travers du passage dans le plus joli jardin \n\
qu’elle eût jamais vu. Comme elle désirait sortir de cette sombre salle et se promener \n\
parmi ces parterres de fleurs éclatantes et ces fraîches fontaines ! Mais elle ne pouvait même pas \n\
passer la tête par l’ouverture ; « et même si ma tête passait », pensa la pauvre Alice, \n\
« cela ne servirait à rien sans mes épaules. Oh, comme j’aimerais pouvoir me replier \n\
comme un télescope ! Je crois que je le pourrais, si seulement je savais comment m’y prendre. » \n\
Car, voyez-vous, tant de choses extraordinaires s’étaient produites dernièrement qu’Alice \n\
commençait à penser que très peu de choses étaient réellement impossibles. \n\n\
Il ne servait à rien d’attendre près de la petite porte, alors elle retourna vers la table, \n\
espérant à moitié y trouver une autre clé, ou au moins un livre expliquant comment plier \n\
les gens comme des télescopes ; cette fois, elle trouva une petite bouteille dessus \n\
(qui n’était certainement PAS là avant, dit Alice), et autour du goulot était attachée \n\
une étiquette de papier portant les mots « BUVEZ-MOI » magnifiquement imprimés en grandes lettres.\n\n\
C’était bien joli de dire « Buvez-moi », mais la petite Alice prudente ne comptait pas \n\
faire ÇA si vite. « Non, je vais d’abord regarder », dit-elle, « et voir si c’est marqué \n\
‘poison’ ou pas » ; car elle avait lu plusieurs charmantes histoires sur des enfants qui \n\
s’étaient brûlés, ou s’étaient fait dévorer par des bêtes sauvages et autres choses désagréables, \n\
tout cela parce qu’ils n’avaient PAS retenu les règles simples qu’on leur avait enseignées : \n\
par exemple, qu’un tisonnier rouge brûle si on le tient trop longtemps ; et que si on se coupe \n\
un doigt TRÈS profondément avec un couteau, généralement ça saigne ; et elle n’avait jamais oublié \n\
que si on boit beaucoup dans une bouteille portant l’étiquette ‘poison’, il est presque certain \n\
que cela finira mal, tôt ou tard. \n\n\
Cependant, cette bouteille n’était PAS marquée ‘poison’, alors Alice osa y goûter, et la trouva \n\
délicieuse (elle avait un goût à la fois de tarte aux cerises, de crème anglaise, \n\
d’ananas, de dinde rôtie, de caramel et de pain grillé chaud beurré), et elle la finit très vite.");

var W_txt = new Item("W_txt", "Alice commençait à se lasser d’être assise près de sa \n\
sœur au bord de la rivière, sans rien avoir à faire : une ou deux fois, elle avait jeté un œil au \n\
livre que sa sœur lisait, mais il n’y avait ni images ni dialogues, « et à quoi peut bien servir \n\
un livre, pensait Alice, sans images ni dialogues ? » \n\n\
Elle se demandait donc (aussi bien qu’elle le pouvait, car la chaleur de la journée \n\
la rendait très somnolente et stupide) si le plaisir de fabriquer une \n\
guirlande de marguerites valait la peine de se lever et d’aller cueillir des fleurs, \n\
lorsqu’un Lapin Blanc aux yeux roses passa tout près d’elle en courant.\n\n\
Cela n’avait rien de très remarquable ; et Alice ne trouva pas non plus très étrange d’entendre le Lapin se dire à lui-même : \n\
« Oh là là ! Oh là là ! Je vais être en retard ! » (Quand elle y repensa plus tard, \n\
il lui sembla qu’elle aurait dû s’en étonner, mais sur le moment, tout lui parut parfaitement naturel.) \n\
Mais lorsque le Lapin sortit VRAIMENT UNE MONTRE \n\
DE LA POCHE DE SON GILET et la regarda avant de se précipiter plus loin, \n\
Alice bondit sur ses pieds, car soudain il lui traversa l’esprit qu’elle n’avait jamais vu \n\
de lapin avec une poche de gilet ni une montre à sortir de celle-ci. Brûlant de curiosité, \n\
elle traversa le champ en courant derrière lui, et arriva juste à temps pour le voir \n\
disparaître dans un large terrier au pied d’une haie. \n\n\
L’instant d’après, Alice se glissa à sa suite, sans prendre une seule seconde pour se demander \n\
comment elle ferait pour remonter. \n\n\
Le terrier ressemblait d’abord à un long tunnel droit, puis il plongeait \n\
soudainement, si soudainement qu’Alice n’eut pas une seconde pour penser à s’arrêter \n\
avant de se retrouver en train de tomber dans un puits très profond.\n\n\
Soit le puits était très profond, soit elle tombait très lentement, car elle eut \n\
tout le temps de regarder autour d’elle et de se demander ce qui allait se passer ensuite. \n\
Tout d’abord, elle essaya de regarder en bas pour voir où elle allait atterrir, \n\
mais il faisait trop sombre pour distinguer quoi que ce soit ; ensuite, elle observa \n\
les parois du puits, qui étaient garnies d’étagères et de placards ; ici et là, \n\
des cartes et des tableaux étaient accrochés à des chevilles. Elle prit un bocal d’une étagère \n\
au passage ; il portait l’étiquette \n\
« CONFITURE D’ORANGE », mais à sa grande déception, il était vide ; elle ne voulut pas \n\
le lâcher par peur de blesser quelqu’un, et réussit donc à le remettre dans un placard \n\
en passant devant. \n\n\
« Eh bien ! » pensa Alice, « après une chute pareille, les escaliers ne me feront plus peur ! \n\
Tous me trouveront tellement courageuse à la maison ! Je ne dirais même rien, \n\
même si je tombais du toit ! » (Ce qui était sans doute vrai.)\n\n\
En bas, en bas, en bas. La chute allait-elle donc finir un jour ? « Je me demande combien \n\
de kilomètres j’ai parcouru jusqu’ici », dit-elle à voix haute. « Je dois être près du centre de la Terre. \n\
Voyons : cela ferait bien quatre mille kilomètres de profondeur, je crois… » \n\
(Car, voyez-vous, Alice avait appris des tas de choses de ce genre à l’école, et même si \n\
ce n’était pas le meilleur moment pour exhiber son savoir, puisqu’il n’y avait personne pour l’écouter, \n\
c’était toujours une bonne occasion de s’entraîner.) \n\
« Oui, cela doit être à peu près la bonne distance… mais alors, à quelle \n\
latitude et quelle longitude je me trouve ? » (Alice n’avait aucune idée de ce qu’est la latitude, \n\
ni la longitude, mais trouvait simplement que ces mots sonnaient bien.)\n\n\
Bientôt, elle reprit : « Je me demande si je vais traverser la Terre \n\
tout entière ! Comme ce serait drôle d’arriver parmi des gens qui marchent la tête en bas ! \n\
Les Antipathiques, je crois… » (Elle fut plutôt soulagée qu’il n’y ait personne pour \n\
l’entendre cette fois-ci, car ce n’était absolument pas le bon mot.) \n\
« Mais je devrai leur demander comment s’appelle leur pays. \n\
S’il vous plaît, Madame, est-ce la Nouvelle-Zélande ou l’Australie ? » \n\
(Et elle essaya de faire une révérence en disant cela — imaginez faire une révérence \n\
en tombant dans les airs ! Croyez-vous que vous pourriez y arriver ?) \n\
« Et quelle petite fille ignorante on penserait que je suis d’avoir posé la question ! \n\
Non, ça ne va pas du tout. Peut-être que je verrai le nom écrit quelque part. » \n\n\
En bas, en bas, en bas. Il n’y avait rien d’autre à faire, alors Alice se remit à parler : \n\
« Dinah va beaucoup me manquer ce soir, je pense ! » (Dinah était son chat.) \n\
« J’espère qu’ils n’oublieront pas sa soucoupe de lait à l’heure du thé. \n\
Dinah, ma chérie ! Comme j’aimerais que tu sois ici avec moi ! Il n’y a pas de souris dans l’air, \n\
je le crains, mais tu pourrais attraper une chauve-souris, et c’est presque comme une souris, tu sais. \n\
Mais est-ce que les chats mangent les chauves-souris ? Je me le demande. » \n\
Et ici, Alice commença à devenir assez somnolente, et se mit à répéter pour elle-même \n\
dans un état rêveur : « Est-ce que les chats mangent les chauves-souris ? Est-ce que les chats \n\
mangent les chauves-souris ? » et parfois, « Est-ce que les chauves-souris mangent les chats ? » \n\
car, comme elle ne pouvait répondre à aucune des deux questions, cela revenait au même. \n\
Elle sentait qu’elle s’endormait, et venait juste de commencer à rêver qu’elle marchait main \n\
dans la main avec Dinah, lui disant très sérieusement : « Maintenant, Dinah, dis-moi la vérité : \n\
as-tu déjà mangé une chauve-souris ? » quand soudain, patatras ! \n\
Elle atterrit sur un tas de feuilles sèches et de petits branchages, et la chute était terminée.\n\n\
Alice n’était pas blessée le moins du monde, et elle sauta immédiatement sur ses pieds : \n\
elle leva les yeux, mais tout était sombre au-dessus d’elle ; devant elle s’étendait un autre \n\
long couloir, et le Lapin Blanc était encore en vue, courant dans le fond. \n\
Il n’y avait pas une seconde à perdre : Alice partit comme le vent, \n\
et arriva juste à temps pour l’entendre dire en tournant un coin : \n\
« Oh mes oreilles et mes moustaches, comme je suis en retard ! » \n\
Elle le suivit en tournant le coin, mais le Lapin avait disparu : \n\
elle se retrouva dans une longue salle basse, éclairée par une rangée \n\
de lampes suspendues au plafond. \n\n\
Il y avait des portes tout autour de la salle, mais elles étaient toutes fermées à clé ; \n\
et après avoir longé un côté puis l’autre, en essayant chaque porte, \n\
elle revint tristement au centre, se demandant comment elle pourrait bien sortir de là.\n\n\
Soudain, elle tomba sur une petite table à trois pieds, entièrement \n\
en verre massif ; il n’y avait dessus qu’une minuscule clé d’or, et \n\
la première pensée d’Alice fut qu’elle appartenait peut-être à l’une des portes de la salle ; \n\
mais hélas ! soit les serrures étaient trop grandes, soit la clé était trop petite, \n\
dans tous les cas elle n’ouvrait aucune porte. \n\
Cependant, à son second passage, elle remarqua un petit rideau qu’elle n’avait pas vu auparavant, \n\
et derrière se trouvait une petite porte d’environ trente centimètres de haut : \n\
elle essaya la minuscule clé d’or dans la serrure, et, à sa grande joie, elle l’ouvrit !\n\
\n\
Alice ouvrit la porte et vit qu’elle donnait sur un petit couloir, pas beaucoup plus large \n\
qu’un terrier de rat : elle s’agenouilla et regarda au travers du passage dans le plus joli jardin \n\
qu’elle eût jamais vu. Comme elle désirait sortir de cette sombre salle et se promener \n\
parmi ces parterres de fleurs éclatantes et ces fraîches fontaines ! Mais elle ne pouvait même pas \n\
passer la tête par l’ouverture ; « et même si ma tête passait », pensa la pauvre Alice, \n\
« cela ne servirait à rien sans mes épaules. Oh, comme j’aimerais pouvoir me replier \n\
comme un télescope ! Je crois que je le pourrais, si seulement je savais comment m’y prendre. » \n\
Car, voyez-vous, tant de choses extraordinaires s’étaient produites dernièrement qu’Alice \n\
commençait à penser que très peu de choses étaient réellement impossibles. \n\n\
Il ne servait à rien d’attendre près de la petite porte, alors elle retourna vers la table, \n\
espérant à moitié y trouver une autre clé, ou au moins un livre expliquant comment plier \n\
les gens comme des télescopes ; cette fois, elle trouva une petite bouteille dessus \n\
(qui n’était certainement PAS là avant, dit Alice), et autour du goulot était attachée \n\
une étiquette de papier portant les mots « BUVEZ-MOI » magnifiquement imprimés en grandes lettres.\n\n\
C’était bien joli de dire « Buvez-moi », mais la petite Alice prudente ne comptait pas \n\
faire ÇA si vite. « Non, je vais d’abord regarder », dit-elle, « et voir si c’est marqué \n\
‘poison’ ou pas » ; car elle avait lu plusieurs charmantes histoires sur des enfants qui \n\
s’étaient brûlés, ou s’étaient fait dévorer par des bêtes sauvages et autres choses désagréables, \n\
tout cela parce qu’ils n’avaient PAS retenu les règles simples qu’on leur avait enseignées : \n\
par exemple, qu’un tisonnier rouge brûle si on le tient trop longtemps ; et que si on se coupe \n\
un doigt TRÈS profondément avec un couteau, généralement ça saigne ; et elle n’avait jamais oublié \n\
que si on boit beaucoup dans une bouteille portant l’étiquette ‘poison’, il est presque certain \n\
que cela finira mal, tôt ou tard. \n\n\
Cependant, cette bouteille n’était PAS marquée ‘poison’, alors Alice osa y goûter, et la trouva \n\
délicieuse (elle avait un goût à la fois de tarte aux cerises, de crème anglaise, \n\
d’ananas, de dinde rôtie, de caramel et de pain grillé chaud beurré), et elle la finit très vite.");

// var X_txt = new Item("X_txt", "INSERT SOME LONG TEXT");
// var Y_txt = new Item("Y_txt", "INSERT SOME LONG TEXT");
// var Z_txt = new Item("Z_txt", "INSERT SOME LONG TEXT");
// var AA_txt = new Item("AA_txt", "INSERT SOME LONG TEXT");
// var BB_txt = new Item("BB_txt", "INSERT SOME LONG TEXT");
// var CC_txt = new Item("CC_txt", "INSERT SOME LONG TEXT");
// var DD_txt = new Item("DD_txt", "INSERT SOME LONG TEXT");
// var EE_txt = new Item("EE_txt", "INSERT SOME LONG TEXT");
// var FF_txt = new Item("FF_txt", "INSERT SOME LONG TEXT");
var MoreKernelFiles = new Room("PlusDeFichiersNoyau", "Il y a tellement de fichiers ici !");
MoreKernelFiles.addItem(L_txt);
MoreKernelFiles.addItem(M_txt);
// MoreKernelFiles.addItem(N_txt);
// MoreKernelFiles.addItem(O_txt);
// MoreKernelFiles.addItem(P_txt);
MoreKernelFiles.addItem(Q_txt);
MoreKernelFiles.addItem(R_txt);
MoreKernelFiles.addItem(S_txt);
MoreKernelFiles.addItem(T_txt);
MoreKernelFiles.addItem(U_txt);
MoreKernelFiles.addItem(V_txt);
MoreKernelFiles.addItem(W_txt);
// MoreKernelFiles.addItem(X_txt);
// MoreKernelFiles.addItem(Y_txt);
// MoreKernelFiles.addItem(Z_txt);
// MoreKernelFiles.addItem(AA_txt);
// MoreKernelFiles.addItem(BB_txt);
// MoreKernelFiles.addItem(CC_txt);
// MoreKernelFiles.addItem(DD_txt);
// MoreKernelFiles.addItem(EE_txt);
// MoreKernelFiles.addItem(FF_txt);
KernelFiles.addItem(Instructions);
KernelFiles.addCommand("sudo");
KernelFiles.addCmdText("sudo", "Mot de passe :");
MoreKernelFiles.addCommand("grep");
KernelFiles.ev.addListener("tryEnterSudo", function(){
    KernelFiles.addCommand("IHTFP");
    KernelFiles.addCmdText("IHTFP", "Vous avez correctement entré le mot de passe. Vous êtes maintenant au Paradis. \
Jetez un œil autour de vous, et félicitations.");
});
KernelFiles.ev.addListener("sudoComplete", function(){
    state.applyState("sudoComplete");
});

//PARADISE (end game screen)
var Paradise = new Room("Paradis", "Vous avez réellement trouvé le Paradis grâce au mot de passe sudo. \
Félicitations.", "loc_theend.gif");
Paradise.addCmdText("ls", "Il n’y a vraiment rien d’intéressant au Paradis.");

//CAVE
//Room beforeCave = new Room("CaveOfDisgruntledTrolls", "A patch of thorny brambles is growing at the mouth of the cave, blocking your way.", "loc_cave");
var CaveOfDisgruntledTrolls = new Room("GrotteDesTrollsMecontents", 
    "La grotte est sombre et sent… les pieds ? Ah, oui, probablement à cause des trolls. \
Il y a un enfant apeuré dans une cage, contre le mur du fond.",
    "loc_cave.gif");

var UglyTroll = new Item("TrollMoche", 
    "Il a l’air en colère, et vraiment très moche.",
    "item_troll1.gif");

UglyTroll.addCmdText("rm",
    "Le troll semble brièvement surpris, puis disparaît dans un bruit humide et dégoûtant.");

UglyTroll.addValidCmd("rm");
UglyTroll.addValidCmd("mv");

UglyTroll.addCmdText("mv", "Le troll semble brièvement surpris, puis il s’écarte. De toute façon, \
il est surtout inoffensif.");

UglyTroll.addValidCmd("cp");

UglyTroll.addCmdText("cp", "Ils se multiplient !");
CaveOfDisgruntledTrolls.addItem(UglyTroll);

//beforeCave.addItem(uglyTroll);

var UglierTroll = new Item("TrollEncorePlusMoche", 
"Il a l’air en colère, et vraiment, vraiment très moche. \
Mais il veut te dire quelque chose. Entre deux grognements incompréhensibles, \
vous arrivez à comprendre ceci : \
Tu peux lancer des sorts sur des objets que tu ne vois pas actuellement. Par exemple, si tu veux \
copier un objet de cette pièce vers SentierSinistre, d’où tu es venu, tu peux taper : \
cp [OBJET_A_COPIER] ../[NOUVEAU_NOM_OBJET]. Tu peux faire cela avec la plupart des sorts et \
dans la plupart des pièces. Utilise bien cette connaissance. Souviens-toi… \
tu ne peux pas annuler un sort ‘rm’.",
"item_troll2.gif");

UglierTroll.addValidCmd("rm");

UglierTroll.addCmdText("rm",
    "Le troll semble brièvement surpris, puis disparaît dans un bruit humide et dégoûtant.");

CaveOfDisgruntledTrolls.addItem(UglierTroll);
//beforeCave.addItem(uglierTroll);
/*hideousTroll = new MoveableItem("AbsolutelyHideousTroll", "You probably don't want to look at this guy. Oops, too late. \n", "item_supertroll");
hideousTroll.setRMText("The troll belches spectacularly, and you could swear he actually smirks. \n" +
		"You won't get rid of him that easily, not without admin privileges.\n");
hideousTroll.setMVText("If you move him out of the cave, he'll terrorize \n" +
		"the countryside. Also he will probably eat you. \n");*/

var HideousTroll = new Item("TrollAbsolumentHideux", 
    "Vous n’avez probablement pas envie de regarder ce troll dans les yeux. Oups, trop tard.",
    "item_supertroll.gif");

HideousTroll.addCmdText("rm", 
    "Le troll rote de manière spectaculaire, et vous pourriez jurer qu’il esquisse un sourire. \
Vous ne vous débarrasserez pas de lui aussi facilement, pas sans le ‘mot de passe sudo’. Ce n’est \
pas ‘pseudo’, c’est ‘sudo’. Vous trouverez cela dans les FichiersNoyau. Mais avant, vous devez \
passer devant le TrollMoche pour atteindre le toboggan.");

HideousTroll.addCmdText("mv", 
    "Si vous le déplacez hors de la grotte, il terrorisera \
la campagne. Et il vous mangera probablement.");

CaveOfDisgruntledTrolls.addItem(HideousTroll);

//beforeCave.addItem(hideousTroll);

CaveOfDisgruntledTrolls.addCommand("rm");
CaveOfDisgruntledTrolls.addCommand("mv");
CaveOfDisgruntledTrolls.addCommand("cp");

CaveOfDisgruntledTrolls.ev.addListener("openSlide", function(){
    state.applyState("openSlide");
});
//CAGE
var Cage = new Room("Cage", 
    "Il y a un enfant qui a l’air terrorisé, là-dedans.",
    "item_cage.gif");

var KidnappedChild = new Item("EnfantEnCage",
    "Vous savez que c’est un peu méchant, mais vous ne pouvez pas vous empêcher de penser que cet enfant \
a vraiment une drôle de tête.",
    "item_cagedboy.gif");

Cage.removeCommand("cd");

Cage.addCmdText("cd", "Vous ne pouvez pas vous faufiler entre les barreaux. Et puis, à quoi bon ? \
Pourquoi voudriez-vous entrer dans une cage ?");

KidnappedChild.addCmdText("mv", 
    "L’enfant regarde autour de lui, étourdi, surpris de se retrouver hors de la cage. \
Vous lui souriez et lui parlez d’une voix douce : 'Tu devrais probablement rentrer chez toi, \
petit garçon. Quelqu’un t’attend là-bas.' \
'Je suis une fille,' dit la petite fille d’un ton vif. Puis elle file devant vous, sort de la grotte et \
remonte le chemin inquiétant vers sa maison.");

Cage.addItem(KidnappedChild);

//Athena cluster
var AthenaCluster = new Room("ProjetAthena", "Nul ne passera sans la combinaison. Vous \
avez une seule chance d’entrer la combinaison. Entrez le mot de passe :",
"loc_cluster.gif");

var Workstation = new Item("PosteTravail", "Le poste de travail possède des ressources \
que vous pouvez utiliser pour accéder aux fichiers d’un casier Athena partagé. Elle ajoute \
de nouvelles pièces (quand elles sont dans votre Foyer on les appelle des casiers) à votre \
Foyer, et vous pouvez les ajouter à votre collection de casiers si vous en avez la permission. \
Si vous savez ce que vous voulez ajouter à votre Foyer (le nom du casier, bien entendu), \
il suffit de taper 'add NOMDUCASIER'. Cela vous donne des sorts supplémentaires (si vous \
les apprenez) et vous donne plus de pièces à explorer.",
"item_workstation.gif");

AthenaCluster.addItem(Workstation);

AthenaCluster.removeCommand("ls");

AthenaCluster.addCmdText("ls", "Vous devez d’abord entrer la combinaison du projet Athena.");

AthenaCluster.removeCommand("cd");

AthenaCluster.addCmdText("cd", "Nul ne passera sans la combinaison. Vous \
avez une seule chance d’entrer la combinaison. Entrez le mot de passe :");

AthenaCluster.ev.addListener("AthenaClusterExited", function(){
    AthenaCluster.removeCommand("cd");
});

AthenaCluster.addCommand("tellme");
AthenaCluster.addCommand("add");

var add_locker_func = function(){
    state.applyState("addMagicLocker");
};

AthenaCluster.ev.addListener("addMagicLocker", add_locker_func);
//MIT
var MIT = new Room("MIT", "Vous êtes arrivé au MIT sur un tapis volant magique !", "loc_MIT.gif");

var AdmissionLetter = new Item("LettreAdmission", "Félicitations pour votre admission au MIT ! \
Ici, vous apprendrez des sorts spéciaux que vous ne pouvez utiliser qu’au MIT. Profitez-en !",
"item_manuscript.gif");

MIT.addItem(AdmissionLetter);

MIT.ev.addListener("tryEnterAthenaCluster", function(){
    MIT.addCommand("terminus");
    MIT.addCmdText("terminus", "Vous avez correctement entré la combinaison du projet Athena. \
Entrez dans le laboratoire informatique du projet Athena.");
    AthenaCluster.removeCommand("ls");
    AthenaCluster.addCmdText("ls", "Vous devez d’abord entrer la combinaison du projet Athena.");
    // AthenaCluster.removeCommand("cd");
    // AthenaCluster.addCmdText("cd", "None shall pass without the combination. You\
    // have one chance to enter the combination. Enter password:");
});

MIT.ev.addListener("AthenaComboEntered", function(){
    state.applyState("AthenaComboEntered");
});

MIT.addCommand("tellme");
MIT.addCommand("add");

MIT.ev.addListener("addMagicLocker", add_locker_func);
//StataCenter
var StataCenter = new Room("StataCenter",
"Le centre de la recherche en informatique et en intelligence artificielle au MIT. Beaucoup \
de magie s’y produit, avec des assistants d’enseignement, des étudiants diplômés, etc.",
"loc_stata.gif");

var WaryEyeOfGradStudent = new Item("OeilMefiantEtudiantDiplome", "Si vous le souhaitez, vous pouvez ajouter \
un nouveau CasierMagique en dehors de votre Foyer. Dans ce CasierMagique, vous trouverez des outils \
qui pourront vous être utiles durant votre séjour au MIT (et au-delà). Vous y trouverez des portails \
vers d’autres lieux, vous pourrez y écrire des notes, et vous pourrez y stocker divers objets que vous \
collecterez au cours de vos voyages dans le CasierMagique. Mais vous devez d’abord vous rendre au \
ProjetAthena pour apprendre comment faire.",
"item_grad.gif");

StataCenter.addItem(WaryEyeOfGradStudent);

var HelpfulTA = new Item("AssistantEnseignementServiable", "Ah, bienvenue dans la merveilleuse contrée de Stata. \
Il y a ici une pièce pour laquelle vous aurez besoin de la combinaison. Tout ce que vous avez à faire, \
c’est demander :\n \
'tellme combo'.",
"item_TA.gif");

StataCenter.addItem(HelpfulTA);

StataCenter.addCommand("tellme");
StataCenter.addCommand("add");

StataCenter.ev.addListener("addMagicLocker", add_locker_func);
//Magic locker
var MagicLocker = new Room("CasierMagique", "Celui-ci contient des objets et des sorts qui peuvent être utilisés \
n’importe où dans le monde après que vous ayez ajouté le casier. D’autres choses arrivent.", "item_locker.gif");

var MoreComing = new Item("PlusAVenir", "Le CasierMagique contient des objets qui peuvent être \
utilisés (et des sorts qui peuvent être utilisés) partout ailleurs dans le jeu une fois que vous avez \
ajouté le casier. Le MIT met constamment à jour le casier, donc revenez vérifier fréquemment.",
"item_comingsoon.gif");

MagicLocker.addItem(MoreComing);

/**
* LINKS BETWEEN ROOMS
* Fulfill parent/child relationships between rooms
*
* API: link(parentRoom, childRoom) 
*/
function link_rooms(parentRoom, childRoom){
    if (!(childRoom in parentRoom.children)){
        parentRoom.addChild(childRoom);
    }
    if (!(parentRoom in childRoom.parents)){
        childRoom.addParent(parentRoom);
    }
};
// LEVEL 1 LINKS
link_rooms(Home, WesternForest);
link_rooms(WesternForest, SpellCastingAcademy);
link_rooms(SpellCastingAcademy, PracticeRoom);
link_rooms(PracticeRoom, Box);
link_rooms(Home, NorthernMeadow);
link_rooms(NorthernMeadow, EasternMountains);
link_rooms(SpellCastingAcademy, Lessons);
link_rooms(EasternMountains, Cave);
link_rooms(Cave, DarkCorridor);
link_rooms(Cave, Staircase);
link_rooms(DarkCorridor, DankRoom);
link_rooms(DankRoom, SmallHole);
link_rooms(Tunnel, StoneChamber);
link_rooms(StoneChamber, Portal);

//level 1 -> level 2
link_rooms(Portal, TownSquare);

//LEVEL 2 LINKS
link_rooms(TownSquare, Marketplace);
link_rooms(TownSquare, Library);
link_rooms(TownSquare, RockyPath);
link_rooms(TownSquare, ArtisanShop);
link_rooms(TownSquare, BrokenBridge);
//link(library, backRoom); 
// link_rooms(RockyPath, Farm);
link_rooms(BrokenBridge, Clearing);
link_rooms(Clearing, OminousLookingPath);
// link_rooms(OminousLookingPath, CaveOfDisgruntledTrolls) ;
link_rooms(CaveOfDisgruntledTrolls, Cage);
link_rooms(Slide, KernelFiles);
link_rooms(CaveOfDisgruntledTrolls, Slide);
link_rooms(KernelFiles, MoreKernelFiles);

//MIT level links
link_rooms(Home, MIT);
link_rooms(MIT, StataCenter);
link_rooms(MIT, AthenaCluster);
