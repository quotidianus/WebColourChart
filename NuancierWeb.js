/*variables compteurs pour boucles*/
var i=0;
var j=0;
var k=0;
/*variables Menus par défaut*/
var vTextMenu="Menu ";
var nMenu=5;
var nSMenu=9;
var nSSMenu=4;
var vMenuDefaut="";
/*variables Menus Couleur*/
var vTextMenuCouleurTexte="Couleur texte";
var vTextMenuCouleurFond="Couleur fond";
var vTextMenuCouleurAlerte="Choisir une partie à colorer !";
var tCouleurs=[];
var vMenuCouleurFond="";
var vMenuCouleurTexte="";
var vUserCouleurs="";
/*variables Menu Choisir partie*/
var vTextMenuElements="Choisir partie";
var tElements=[];
var vElements="";
var vElementSel="";
/*variables Menu Modèles*/
var vTextModeles="Modèles";
var vTextModelesNew="Enregistrer";
var vTextModelesChoice="Choisir";
var vTextModelesDelete="Effacer";
var vTextModelesDeleteCook="Réinitialiser";
var vTextUtModele="Créer un nouveau modèle"
var tModeles=[];
var vModeles="";
var vListeModeles="";
var vModelSerial="";
var utModele="Sans titre";
var nRemp=0;
var bRemp=false;
/*variables Menu Historique*/
var vTextMenuHistorique="Annuler couleur";
var vTextMenuAnnuler="Annuler";
var vTextMenuRetablir="Rétablir";
var vHistorique="";
var tHistorique=[];
var h=0; //compteur annuler-rétablir
/*variables Cookies*/
var nomCookie="userModeles";
var cookDoc="";
var vModelesCook="";

/*création des menus par défaut*/
vMenuDefaut+="<ul>";
for (i=1;i<=nMenu;i++) {
	vMenuDefaut+="<li id='m"+i+"' class='menu'>"+vTextMenu+i+"<ul>";
	for (j=1;j<=nSMenu;j++) {
		vMenuDefaut+="<li class='menu'>"+vTextMenu+i+"."+j+"<ul>";
		for (k=1;k<=nSSMenu;k++) {
			vMenuDefaut+="<li class='menu'>"+vTextMenu+i+"."+j+"."+k+"</li>";
		}
		vMenuDefaut+='</ul></li>';
	}
	vMenuDefaut+='</ul></li>';
}
vMenuDefaut+="</ul>";
/*insertion des menus par défaut*/
function fMenuDefaut(){
	$("nav").html(vMenuDefaut);
}
fMenuDefaut();


/*création des menus Couleur*/
tCouleurs=[ // en cas de modification, attention aux virgules !!
	["Grey Colors",
		["Black","#000000","rgb(0, 0, 0)"],
		["DarkSlateGray","#2F4F4F","rgb(47, 79, 79)"],
		["SlateGray","#708090","rgb(112, 128, 144)"],
		["LightSlateGray","#778899","rgb(119, 136, 153)"],
		["DimGray","#696969","rgb(105, 105, 105)"],
		["Gray","#808080","rgb(128, 128, 128)"],
		["DarkGray","#A9A9A9","rgb(169, 169, 169)"],
		["Silver","#C0C0C0","rgb(192, 192, 192)"],
		["LightGray","#D3D3D3","rgb(211, 211, 211)"],
		["Gainsboro","#DCDCDC","rgb(220, 220, 220)"]
	],
	["White Colors",
		["White","#FFFFFF","rgb(255, 255, 255)"],
		["Snow","#FFFAFA","rgb(255, 250, 250)"],
		["HoneyDew","#F0FFF0","rgb(240, 255, 240)"],
		["MintCream","#F5FFFA","rgb(245, 255, 250)"],
		["Azure","#F0FFFF","rgb(240, 255, 255)"],
		["AliceBlue","#F0F8FF","rgb(240, 248, 255)"],
		["GhostWhite","#F8F8FF","rgb(248, 248, 255)"],
		["WhiteSmoke","#F5F5F5","rgb(245, 245, 245)"],
		["SeaShell","#FFF5EE","rgb(255, 245, 238)"],
		["Beige","#F5F5DC","rgb(245, 245, 220)"],
		["OldLace","#FDF5E6","rgb(253, 245, 230)"],
		["FloralWhite","#FFFAF0","rgb(255, 250, 240)"],
		["Ivory","#FFFFF0","rgb(255, 255, 240)"],
		["AntiqueWhite","#FAEBD7","rgb(250, 235, 215)"],
		["Linen","#FAF0E6","rgb(250, 240, 230)"],
		["LavenderBlush","#FFF0F5","rgb(255, 240, 245)"],
		["MistyRose","#FFE4E1","rgb(255, 228, 225)"]
	],
	["Yellow Colors",
		["LightYellow","#FFFFE0","rgb(255, 255, 224)"],
		["LemonChiffon","#FFFACD","rgb(255, 250, 205)"],
		["LightGoldenRodYellow","#FAFAD2","rgb(250, 250, 210)"],
		["PapayaWhip","#FFEFD5","rgb(255, 239, 213)"],
		["Moccasin","#FFE4B5","rgb(255, 228, 181)"],
		["PeachPuff","#FFDAB9","rgb(255, 218, 185)"],
		["PaleGoldenRod","#EEE8AA","rgb(238, 232, 170)"],
		["Khaki","#F0E68C","rgb(240, 230, 140)"],
		["Yellow","#FFFF00","rgb(255, 255, 0)"],
		["Gold","#FFD700","rgb(255, 215, 0)"]
	],
	["Light Green Colors",
		["GreenYellow","#ADFF2F","rgb(173, 255, 47)"],
		["Chartreuse","#7FFF00","rgb(127, 255, 0)"],
		["LawnGreen","#7CFC00","rgb(124, 252, 0)"],
		["Lime","#00FF00","rgb(0, 255, 0)"],
		["PaleGreen","#98FB98","rgb(152, 251, 152)"],
		["LightGreen","#90EE90","rgb(144, 238, 144)"],
		["MediumSpringGreen","#00FA9A","rgb(0, 250, 154)"],
		["SpringGreen","#00FF7F","rgb(0, 255, 127)"]
	],
	["Green Colors",
		["DarkKhaki","#BDB76B","rgb(189, 183, 107)"],
		["YellowGreen","#9ACD32","rgb(154, 205, 50)"],
		["LimeGreen","#32CD32","rgb(50, 205, 50)"],
		["MediumAquaMarine","#66CDAA","rgb(102, 205, 170)"],
		["DarkSeaGreen","#8FBC8F","rgb(143, 188, 143)"],
		["LightSeaGreen","#20B2AA","rgb(32, 178, 170)"],
		["MediumSeaGreen","#3CB371","rgb(60, 179, 113)"],
		["SeaGreen","#2E8B57","rgb(46, 139, 87)"],
		["ForestGreen","#228B22","rgb(34, 139, 34)"],
		["Green","#008000","rgb(0, 128, 0)"],
		["DarkGreen","#006400","rgb(0, 100, 0)"],
		["Olive","#808000","rgb(128, 128, 0)"],
		["OliveDrab","#6B8E23","rgb(107, 142, 35)"],
		["DarkOliveGreen","#556B2F","rgb(85, 107, 47)"]
	],
	["Light Blue Colors",
		["Aqua","#00FFFF","rgb(0, 255, 255)"],
		["LightCyan","#E0FFFF","rgb(224, 255, 255)"],
		["PaleTurquoise","#AFEEEE","rgb(175, 238, 238)"],
		["Aquamarine","#7FFFD4","rgb(127, 255, 212)"],
		["Turquoise","#40E0D0","rgb(64, 224, 208)"],
		["MediumTurquoise","#48D1CC","rgb(72, 209, 204)"],
		["DarkTurquoise","#00CED1","rgb(0, 206, 209)"],
		["LightSteelBlue","#B0C4DE","rgb(176, 196, 222)"],
		["LightBlue","#ADD8E6","rgb(173, 216, 230)"],
		["PowderBlue","#B0E0E6","rgb(176, 224, 230)"],
		["LightSkyBlue","#87CEFA","rgb(135, 206, 250)"],
		["SkyBlue","#87CEEB","rgb(135, 206, 235)"],
		["DeepSkyBlue","#00BFFF","rgb(0, 191, 255)"]
	],
	["Blue Colors",
		["DarkCyan","#008B8B","rgb(0, 139, 139)"],
		["Teal","#008080","rgb(0, 128, 128)"],
		["CadetBlue","#5F9EA0","rgb(95, 158, 160)"],
		["SteelBlue","#4682B4","rgb(70, 130, 180)"],
		["CornflowerBlue","#6495ED","rgb(100, 149, 237)"],
		["DodgerBlue","#1E90FF","rgb(30, 144, 255)"],
		["RoyalBlue","#4169E1","rgb(65, 105, 225)"],
		["Blue","#0000FF","rgb(0, 0, 255)"],
		["MediumBlue","#0000CD","rgb(0, 0, 205)"],
		["DarkBlue","#00008B","rgb(0, 0, 139)"],
		["Navy","#000080","rgb(0, 0, 128)"],
		["MidnightBlue","#191970","rgb(25, 25, 112)"]
	],
	["Light Brown Colors",
		["Cornsilk","#FFF8DC","rgb(255, 248, 220)"],
		["BlanchedAlmond","#FFEBCD","rgb(255, 235, 205)"],
		["Bisque","#FFE4C4","rgb(255, 228, 196)"],
		["NavajoWhite","#FFDEAD","rgb(255, 222, 173)"],
		["Wheat","#F5DEB3","rgb(245, 222, 179)"],
		["BurlyWood","#DEB887","rgb(222, 184, 135)"],
		["Tan","#D2B48C","rgb(210, 180, 140)"]
	],
	["Brown Colors",
		["SandyBrown","#F4A460","rgb(244, 164, 96)"],
		["GoldenRod","#DAA520","rgb(218, 165, 32)"],
		["DarkGoldenRod","#B8860B","rgb(184, 134, 11)"],
		["Peru","#CD853F","rgb(205, 133, 63)"],
		["Chocolate","#D2691E","rgb(210, 105, 30)"],
		["RosyBrown","#BC8F8F","rgb(188, 143, 143)"],
		["Sienna","#A0522D","rgb(160, 82, 45)"],
		["Brown","#A52A2A","rgb(165, 42, 42)"],
		["SaddleBrown","#8B4513","rgb(139, 69, 19)"],
		["Maroon","#800000","rgb(128, 0, 0)"]
	],
	["Pink Colors",
		["Pink","#FFC0CB","rgb(255, 192, 203)"],
		["LightPink","#FFB6C1","rgb(255, 182, 193)"],
		["HotPink","#FF69B4","rgb(255, 105, 180)"],
		["DeepPink","#FF1493","rgb(255, 20, 147)"],
		["Fuchsia","#FF00FF","rgb(255, 0, 255)"],
		["PaleVioletRed","#DB7093","rgb(219, 112, 147)"],
		["MediumVioletRed","#C71585","rgb(199, 21, 133)"]
	],
	["Light Purple Colors",
		["Lavender","#E6E6FA","rgb(230, 230, 250)"],
		["Thistle","#D8BFD8","rgb(216, 191, 216)"],
		["Plum","#DDA0DD","rgb(221, 160, 221)"],
		["Violet","#EE82EE","rgb(238, 130, 238)"],
		["Orchid","#DA70D6","rgb(218, 112, 214)"],
		["MediumPurple","#9370DB","rgb(147, 112, 219)"],
		["MediumSlateBlue","#7B68EE","rgb(123, 104, 238)"],
		["SlateBlue","#6A5ACD","rgb(106, 90, 205)"]
	],
	["Purple Colors",
		["MediumOrchid","#BA55D3","rgb(186, 85, 211)"],
		["DarkOrchid","#9932CC","rgb(153, 50, 204)"],
		["DarkViolet","#9400D3","rgb(148, 0, 211)"],
		["BlueViolet","#8A2BE2","rgb(138, 43, 226)"],
		["DarkMagenta","#8B008B","rgb(139, 0, 139)"],
		["Purple","#800080","rgb(128, 0, 128)"],
		["DarkSlateBlue","#483D8B","rgb(72, 61, 139)"],
		["RebeccaPurple","#663399","rgb(102, 51, 153)"],
		["Indigo ","#4B0082","rgb(75, 0, 130)"]
	],
	["Red Colors",
		["LightSalmon","#FFA07A","rgb(255, 160, 122)"],
		["Salmon","#FA8072","rgb(250, 128, 114)"],
		["DarkSalmon","#E9967A","rgb(233, 150, 122)"],
		["LightCoral","#F08080","rgb(240, 128, 128)"],
		["IndianRed ","#CD5C5C","rgb(205, 92, 92)"],
		["Crimson","#DC143C","rgb(220, 20, 60)"],
		["Red","#FF0000","rgb(255, 0, 0)"],
		["FireBrick","#B22222","rgb(178, 34, 34)"],
		["DarkRed","#8B0000","rgb(139, 0, 0)"]
	],
	["Orange Colors",
		["Orange","#FFA500","rgb(255, 165, 0)"],
		["DarkOrange","#FF8C00","rgb(255, 140, 0)"],
		["Coral","#FF7F50","rgb(255, 127, 80)"],
		["Tomato","#FF6347","rgb(255, 99, 71)"],
		["OrangeRed","#FF4500","rgb(255, 69, 0)"]
	]
];
/*menu Couleur Fond*/
vMenuCouleurFond+="<ul>";
for (i=0;i<tCouleurs.length;i++) {
	vMenuCouleurFond+="<li class='menu'>"+tCouleurs[i][0]+"<ul>";
	for (j=1;j<tCouleurs[i].length;j++) {
		vMenuCouleurFond+="<li style='background-color:"+tCouleurs[i][j][0]+";' class='liFond' onclick='fChangeColorBG(this)'>"+tCouleurs[i][j][0]+"</li>";
	}
	vMenuCouleurFond+="</ul></li>";
}
vMenuCouleurFond+="</ul>";
/*insertion du menu Couleur Fond*/
$("#m3").html("<span id='titM3'>"+vTextMenuCouleurFond+"</span>"+vMenuCouleurFond);
/*menu Couleur Texte*/
vMenuCouleurTexte+="<ul>";
for (i=0;i<tCouleurs.length;i++) {
	vMenuCouleurTexte+="<li class='menu'>"+tCouleurs[i][0]+"<ul>";
	for (j=1;j<tCouleurs[i].length;j++) {
		vMenuCouleurTexte+="<li style='color:"+tCouleurs[i][j][0]+";' class='liTxt' onclick='fChangeColorTXT(this)' >"+tCouleurs[i][j][0]+"</li>";
	}
	vMenuCouleurTexte+="</ul></li>";
}
vMenuCouleurTexte+="</ul>";
/*insertion du menu Couleur Texte*/
$("#m4").html("<span id='titM4'>"+vTextMenuCouleurTexte+"</span>"+vMenuCouleurTexte);


/*création du menu des éléments*/
tElements=["header","h1","aside","main","footer","#menu","body"];
/*insertion du menu des éléments*/
for (i=0;i<tElements.length;i++) {
	vElements+="<ul>";
	vElements+="<li class='menu' onclick='fChoixElement(this)'>"+tElements[i]+"</li>";
	vElements+="</ul>";
}
$("#m2").html("<span id='titM2'>"+vTextMenuElements+"</span>"+vElements);
function fCreerDivMenu(){
	$("<div>",{id:"menu"}).appendTo("head");
}
fCreerDivMenu();
function fAppliquerCoulMenu(){
	$(".menu").css("background-color",$("#menu").css("background-color"));
	$(".menu").css("color",$("#menu").css("color"));
}


/*recherche le nom d'une couleur à partir de sa valeur rgb*/
function fChercheNomCouleur(rgb) {
	for (i=0;i<tCouleurs.length;i++) {
		for (j=1;j<tCouleurs[i].length;j++) {
			if (rgb==tCouleurs[i][j][2]) {
				return "<a href='http://www.w3schools.com/colors/colors_picker.asp?colorhex="+tCouleurs[i][j][1].replace('#','')+"' title='"+tCouleurs[i][j][1]+" "+tCouleurs[i][j][2]+"'>"+tCouleurs[i][j][0]+"</a>";
			}
		}
	}	
}
/*affichage des couleurs utilisées dans l'<aside>*/
function fAfficheCouleurs() {
	vUserCouleurs="<strong>Couleurs actuelles :</strong><br>";
	for (k=0;k<tElements.length;k++) {
		bgEl=fChercheNomCouleur($(tElements[k]).css("background-color"));
		txtEl=fChercheNomCouleur($(tElements[k]).css("color"));
		vUserCouleurs+="<strong>&lt;"+tElements[k]+"&gt;</strong><br><em>fond :</em> "+bgEl+"<br><em>texte</em> : "+txtEl+"<br>";
	}
	$("#userCol").html(vUserCouleurs);
}
fAfficheCouleurs();


/*création du menu Historique*/
vHistorique+="<ul id='mHist'>";
	vHistorique+="<li id='mAnnul' class='menu' onclick='fAppliquerHistorique(-1)'>"+vTextMenuAnnuler+"</li>";
	vHistorique+="<li id='mRetab' class='menu' onclick='fAppliquerHistorique(1)'>"+vTextMenuRetablir+"</li>";
vHistorique+="</ul>";
/*insertion du menu Historique*/
function fMenuHistorique() {
	$("#m5").html("<span id='titM5'>"+vTextMenuHistorique+"</span>"+vHistorique);
}
fMenuHistorique()


/*manipulation des couleurs*/
function fChoixElement(param){
	vElementSel=$(param).text();
	$("#titM2").html("<span style='font-weight:bold;' onmouseover='fChangeTitMenuElements()'>"+vElementSel.toUpperCase()+"</span>");
	fChangeColorLiSel();
}
function fChangeTitMenuElements(){
	$("#titM2").html(vTextMenuElements);
	vElementSel="#menu"; /*pour avoir les menus couleurs comme nav, lorsqu'aucune partie est sélectionnée*/
	fChangeColorLiSel();
	vElementSel=""; /*pour obliger de nouveau à sélectionner une partie avant de changer de couleur*/
}
function fChangeColorBG(param){
	if (vElementSel=="") {
		alert(vTextMenuCouleurAlerte);
	} else {
		if (vElementSel=="h1"){
			vElementSel="header";
		}
		var colBG=$(param).css("background-color");
		$(vElementSel).css("background-color",colBG);
		$("h1").css("background-color","inherit"); // à placer peut-être encore ailleurs
		fAfficheCouleurs();
		fChangeColorLiSel();
		fAppliquerCoulMenu();
		fCreerHistorique();
	}
}
function fChangeColorTXT(param){
	if (vElementSel=="") {
		alert(vTextMenuCouleurAlerte);
	} else {
		if (vElementSel=="body"){
			alert("Sélectionner une autre partie pour changer le texte");
		} else {
		var colTXT=$(param).css("color");
		$(vElementSel).css("color",colTXT);
		fAfficheCouleurs();
		fChangeColorLiSel();
		fAppliquerCoulMenu();
		fCreerHistorique();
		}
	}
}
function fChangeColorLiSel(){
	$(".liTxt").css("background-color",$(vElementSel).css("background-color"));
	$(".liFond").css("color",$(vElementSel).css("color"));
}


/*manipulation de l'historique*/
function fActDesactHistorique(){ //empêche d'incrémenter ou de décrementer inutilement la variable "h"
	if (h==0) {
		$("#mAnnul").remove();
		$("#mHist").prepend("<li id='mAnnul' class='menu, lidesact'>"+vTextMenuAnnuler+"</li>");
	} else {
		$("#mAnnul").remove();
		$("#mHist").prepend("<li id='mAnnul' class='menu' onclick='fAppliquerHistorique(-1)'>"+vTextMenuAnnuler+"</li>");
	}
	if (h==tHistorique.length-1) {
		$("#mRetab").remove();
		$("#mHist").append("<li id='mRetab' class='menu, lidesact'>"+vTextMenuRetablir+"</li>");
	} else {
		$("#mRetab").remove();
		$("#mHist").append("<li id='mRetab' class='menu' onclick='fAppliquerHistorique(1)'>"+vTextMenuRetablir+"</li>");
	}
} 
function fResetRetablir(){ //si l'on crée un nouvel historique après avoir annuler une ou plusieurs fois, il faut supprimer tous les "rétablir" qui suivent 
	if (h+1<tHistorique.length) {
		tHistorique.splice(h+1,tHistorique.length-h-1);
	}
}
function fCreerHistorique(){ // la fonction est lancée une première fois après la récupération du cookie (voir tout en bas)
	fResetRetablir();
	h=tHistorique.length;
	tHistorique[h]=[];
	tHistorique[h][0]=Date();
	for (j=0;j<tElements.length;j++) {
		tHistorique[h][j+1]=[tElements[j],$(tElements[j]).css("background-color"),$(tElements[j]).css("color")];
	}
	fActDesactHistorique();
}
function fAppliquerHistorique(param){
	h+=param;
	for(j=1;j<=tElements.length;j++) {
		$(tHistorique[h][j][0]).css("background-color",tHistorique[h][j][1]).css("color",tHistorique[h][j][2]);
	}
	fActDesactHistorique();
	fAppliquerCoulMenu();
	fAfficheCouleurs();
	if(vElementSel=="") {
		vElementSel="#menu"; /*pour avoir les menus couleurs comme nav, lorsqu'aucune partie est sélectionnée*/
		fChangeColorLiSel();
		vElementSel=""; /*pour obliger de nouveau à sélectionner une partie avant de changer de couleur*/
	} else {
		fChangeColorLiSel();		
	}
}


/*création du menu Modèles*/
vModeles+="<ul>";
	vModeles+="<li class='menu' onclick='fDemanderModele(this)'>"+vTextModelesNew+"</li>";
	vModeles+="<li id='menChoice' class='menu'>"+vTextModelesChoice+"</li>";
	vModeles+="<li id='menDelete' class='menu'>"+vTextModelesDelete+"</li>";
	vModeles+="<li id='menDeleteCook' onclick='fReinitialiserModeles()' class='menu'>"+vTextModelesDeleteCook+"</li>";
vModeles+="</ul>";
/*insertion du menu Modèles*/
$("#m1").html("<span>"+vTextModeles+"</span>"+vModeles);
/*création et insertion des sous-menus Modèles*/
function fCreerTableauModeles(){
	tModeles=[
		["Modèle 1",
			["body","Gray",""],
			["header","NavajoWhite","FireBrick"],
			["aside","NavajoWhite","Black"],
			["main","BlanchedAlmond","Black"],
			["footer","BurlyWood","DarkSlateGray"],
			["h1","","FireBrick"],
			["#menu","BurlyWood","DarkSlateGray"]
		],
		["Modèle 2",
			["body","Thistle",""],
			["header","CornflowerBlue","AliceBlue"],
			["aside","LightSteelBlue","MediumBlue"],
			["main","FloralWhite","Black"],
			["footer","CornflowerBlue","AliceBlue"],
			["h1","","DarkRed"],
			["#menu","DarkRed","AliceBlue"]
		],
		["Modèle 3",
			["body","Gray",""],
			["header","CadetBlue","DarkSlateGray"],
			["aside","CadetBlue","DarkSlateGray"],
			["main","HoneyDew","Black"],
			["footer","LightSteelBlue","Sienna"],
			["h1","","HoneyDew"],
			["#menu","LightSteelBlue","Sienna"]
		],
		["Modèle 4",
			["body","Gray",""],
			["header","Orchid","White"],
			["aside","MediumOrchid","Black"],
			["main","Pink","Black"],
			["footer","Orchid","White"],
			["h1","","Navy"],
			["#menu","DeepPink","White"]
		],
		["Modèle 5",
			["body","LemonChiffon",""],
			["header","PaleGoldenRod","DarkGreen"],
			["aside","PaleGoldenRod","DarkGreen"],
			["main","Ivory","Black"],
			["footer","DarkSeaGreen","Black"],
			["h1","","SeaGreen"],
			["#menu","DarkKhaki","DimGray"]
		],
		["Modèle 6",
			["body","LightSalmon",""],
			["header","PeachPuff","Chocolate"],
			["aside","PapayaWhip","Chocolate"],
			["main","SeaShell","Black"],
			["footer","PeachPuff","Tomato"],
			["h1","PeachPuff","Brown"],
			["#menu","PeachPuff","OrangeRed"]
		]
	]
}
fCreerTableauModeles()
function fSousMenuModeles(){
	vListeModeles="";
	for (i=0;i<tModeles.length;i++) {
		vListeModeles+="<ul>";
			vListeModeles+="<li onclick='fAppliquerEffacerModele(this)' class='menu'>"+tModeles[i][0]+"</li>";
		vListeModeles+="</ul>";
	}
	$("#menChoice").html(vTextModelesChoice+vListeModeles);
	$("#menDelete").html(vTextModelesDelete+vListeModeles);
}
fSousMenuModeles();


/*manipulation des modèles*/
function fCreerModele(param) {
	i=tModeles.length;
	tModeles[i]=[];
	tModeles[i][0]=param;
	for (j=0;j<tElements.length;j++) {
		tModeles[i][j+1]=[tElements[j],$(tElements[j]).css("background-color"),$(tElements[j]).css("color")];
	}
	fCreerCookie();
}
function fDemanderModele(param) {
	utModele=prompt(vTextUtModele);
	if (utModele=="") {
		utModele="Sans titre";
	}
	for (i=0;i<tModeles.length;i++) {
		if (tModeles[i][0]==utModele) {
			nRemp=i;
			bRemp=confirm("Il existe déjà « "+utModele+" ». Voulez-vous le remplacer ?");
			break;
		}
	}
	if (bRemp){
		fCreerModele(utModele);
		tModeles[nRemp]=tModeles[tModeles.length-1];
		tModeles.splice(tModeles.length-1,1);
		fCreerCookie();
		fSousMenuModeles();
	}
	if (nRemp==0) {
		fCreerModele(utModele);
		fSousMenuModeles();
	}
	nRemp=0;
	fHoverSurMenu();
}
function fAppliquerModele(param) {
	var vTitreModele=$(param).text();
	for (i=0;i<tModeles.length;i++) {
		if (tModeles[i][0]==vTitreModele) {
			for(j=1;j<=tElements.length;j++) {
				$(tModeles[i][j][0]).css("background-color",tModeles[i][j][1]).css("color",tModeles[i][j][2]);
			}
			break;
		}
	}
}
function fEffacerModele(param) {
	var vTitreModele=$(param).text();
	var bDel=confirm("Voulez-vous effacer « "+vTitreModele+" » ?\n(Cette action ne peut pas s'annuler)");
	if (bDel){
		for (i=0;i<tModeles.length;i++) {
			if (tModeles[i][0]==vTitreModele) {
				j=i;
			}
		}
		tModeles.splice(j,1);
		fCreerCookie();
	}
}
function fAppliquerEffacerModele(param) {
	if ($(param).parent().parent().attr("id")=="menChoice") {
		fAppliquerModele(param);
		fHoverSurMenu();
		fAfficheCouleurs();
		fChangeTitMenuElements();
		fCreerHistorique();
	} else {
 		fEffacerModele(param);
		fSousMenuModeles();
		fHoverSurMenu();
		fAfficheCouleurs();
 	}
}
/*gestion du cookie*/
function fCreerCookie() {
	vModelSerial=JSON.stringify(tModeles);
	document.cookie=nomCookie+"="+vModelSerial;
}
function fRecupCookie() {
	if (document.cookie!="") {
		cookDoc=document.cookie;
		vModelesCook=cookDoc.substring(nomCookie.length+1, cookDoc.length);
		tModeles=JSON.parse(vModelesCook);
		fSousMenuModeles();
	}
}
function fReinitialiserModeles(){
	var bDel=confirm("Voulez-vous réinitialiser les modèles ?");
	if (bDel){
		fCreerTableauModeles();
		fSousMenuModeles();
		fCreerCookie();
//		fAppliquerCoulMenu();  //dans fAppliquerEffets()
		fHoverSurMenu();
	}
}
fRecupCookie();
fCreerHistorique(); //mise à zéro avec l'affichage par défaut comme premier historique


/*effets hover et autres*/
function fHoverSurMenu() {
	$(".menu").hover(
		function() {
			$(this).css("background-color","Silver").css("color","White");
		}, 
		function() {
			fAppliquerCoulMenu();
		}
	);  
}
fHoverSurMenu();
function fEffetsAutres() {
	$(".liFond, .liTxt").hover(
		function() {
			$(this).animate({
				fontSize:"17px"
    			});
		},
		function() {
			$(this).animate({
				fontSize:"13px"
    			});
    		}
	);
	$("#m1").click(
		function() {
			$("#m1>ul>li").slideDown("medium");
		}
	);
	$("#m2").click(
		function() {
			$("#m2>ul>li").slideToggle("medium");
		}
	);
	$("#m3").click(
		function() {
			$("#m3>ul>li").slideDown("medium");
		}
	);
	$("#m4").click(
		function() {
			$("#m4>ul>li").slideDown("medium");
		}
	);
 
	$("#m5").click(
		function() {
			$("#m5>ul>li").slideDown("medium");
		}
	);

	$("#m2, #m3, #m4, #m5, header, aside, main, footer").hover(
		function() { 
			$("#m1>ul>li").slideUp("medium");
		}
	);
	$("#m1, #m3, #m4, #m5, header, aside, main, footer").hover(
		function() { 
			$("#m2>ul>li").slideUp("medium");
		}
	);
	$("#m1, #m2, #m4, #m5, header, aside, main, footer").hover(
		function() { 
			$("#m3>ul>li").slideUp("medium");
		}
	);
	$("#m1, #m2, #m3, #m5, header, aside, main, footer").hover(
		function() { 
			$("#m4>ul>li").slideUp("medium");
		}
	);
 
	$("#m1, #m2, #m3, #m4, header, aside, footer").hover(
		function() { 
			$("#m5>ul>li").slideUp("medium");
		}
	);

}
fEffetsAutres();

// mettre tout l'ensemble dans une fonction anonyme pour ne pas avoir de conflit avec les variables

// recherche html entities javascript pour cookie







