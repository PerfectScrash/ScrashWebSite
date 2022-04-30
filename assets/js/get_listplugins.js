var ar_id = 0;
var ar_def_name = 1;
var ar_link = 2;
var ar_id_tipo = 3;
var ar_categoria = 4;
var ar_name = 5;
var ar_imagem = 6;
var ar_descricao = 7;

/*===========================
Banco de dados improvisado
===========================*/
// Ultimo ID: 30
let plugins = [
	// Main plugins
	[23, "Dragon Ball Mod", "dbm_official", 1, "pl_main", "Dragon Ball Mod", "Imagens/dbm_banner_site.png", "See this greatest mod for Amx Mod X"],
	[1, "Zombie Plague Special", "zp_special_official", 2, "pl_main", "Zombie Plague Special 4.5", "Imagens/zpsp_banner_site.png", "See the latest version of this Zombie Plague"],

	// Special Class (Human)
	[2, "Antidoter", "Pages/Special_Classes/zpsp_spc_antidoter", 2, "zpsp_sp_h", "[ZPSp] Special Class: Antidoter", "Imagens/antidoter_banner.png", "Cure zombies with vaccine of T-Virus"],
	[3, "Pain/Nagato", "Pages/Special_Classes/zpsp_spc_pain", 2, "zpsp_sp_h", "[ZPSp] Special Class: Pain/Nagato", "Imagens/pain_banner.png", "Use Rinnegan's Skills against Zombies"],
	[4, "Plasma", "Pages/Special_Classes/zpsp_spc_plasma", 2, "zpsp_sp_h", "[ZPSp] Special Class: Plasma", "Imagens/plasma_banner.png", "Give a player a one Plasma Rifle"],
	[5, "Chuck Norris", "Pages/Special_Classes/zpsp_spc_chucknorris", 2, "zpsp_sp_h", "[ZPSp] Special Class: Chuck Norris", "Imagens/banner_site_scrash.gif", "Become a invencible Chuck Norris"],
	[6, "Xiter", "Pages/Special_Classes/zpsp_spc_xiter", 2, "zpsp_sp_h", "[ZPSp] Special Class: Xiter", "Imagens/banner_site_scrash.gif", "Don't use this Xiter :)"],
	[7, "Priest", "Pages/Special_Classes/zpsp_spc_priest", 2, "zpsp_sp_h", "[ZPSp] Special Class: Priest", "Imagens/banner_site_scrash.gif", "Removes a Demon from Zombie with a Holy Grenade"],
	[8, "Grenadier", "Pages/Special_Classes/zpsp_spc_grenadier", 2, "zpsp_sp_h", "[ZPSp] Special Class: Grenadier", "Imagens/banner_site_scrash.gif", "Infinite kill bombs"],

	// Special Class (Zombie)
	[9, "Thanos", "Pages/Special_Classes/zpsp_spc_thanos", 2, "zpsp_sp_z", "[ZPSp] Special Class: Thanos", "Imagens/thanos_Banner.png", "See this greatest gamemod maked for Zombie Plague Special"],
	[10, "Raptor", "Pages/Special_Classes/zpsp_spc_raptor", 2, "zpsp_sp_z", "[ZPSp] Special Class: Raptor", "Imagens/banner_site_scrash.gif", "Very high speed"],
	[11, "Dog", "Pages/Special_Classes/zpsp_spc_dog", 2, "zpsp_sp_z", "[ZPSp] Special Class: Dog", "Imagens/banner_site_scrash.gif", "Turn a furious Dog"],

	// Special Class (Both)
	[12, "Sonic & Shadow", "Pages/Special_Classes/zpsp_spc_sonic_shadow", 2, "zpsp_sp_all", "[ZPSp] Special Class: Sonic & Shadow", "Imagens/sonic_shadow_banner.png", "Play \"Sonic 3D Game\" in CS 1.6 Zombie Plague Mod"],

	// Additions
	[13, "[ZPSp] - XP Level System", "Pages/Addons/zpsp_xp_system", 2, "zpsp_addon", "[ZPSp] Addon: XP Level System", "Imagens/xpsystem_gif.gif", "Turn your Zombie Plague Special 4.5 into Zombie Plague XP"],
	[14, "Lasermine Perfect 4.3", "Pages/Addons/zp_lasermine_perfect", 2, "zpsp_addon", "[ZPSp] Addon: Lasermine Perfect 4.3", "Imagens/lasermine_banner.png", "See the best lasermine for zombie plague"],
	[15, "Custom Player Model", "Pages/Addons/zpsp_addon_cplayer_model", 2, "zpsp_addon", "[ZPSp] Addon: Custom Player Model", "Imagens/banner_site_scrash.gif", "Set a player a custom model"],
	[16, "Thunder Weapons", "Pages/Addons/thunder_weapons", 2, "zpsp_addon", "[ZPSp] Addon: Thunder Weapons", "Imagens/banner_site_scrash.gif", "Can evolute your weapons when you kill a zombie"],
	[24, "First Zombie Helper", "Pages/Addons/zpsp_first_zombie_helper", 2, "zpsp_addon", "[ZPSp] Addon: First Zombie Helper", "Imagens/banner_site_scrash.gif", "Give a first zombie an helper"],

	// Extra itens
	[17, "Uganda Knuckles Gun", "Pages/Extra_Itens/zp_uganda_knuckles_gun", 2, "zpsp_extra_item", "[ZP] Extra: Uganda Knuckles Gun", "Imagens/uganda_banner.png", "Basing in Sonic Games Memes"],
	[18, "Elemental (Fire & Ice)", "Pages/Extra_Itens/zp_elemental", 2, "zpsp_extra_item", "[ZP] Extra: Elemental (Fire & Ice)", "Imagens/elemental_banner.png", "Burn and frost zombies using the dual elemental"],
	[19, "Paintball Gun", "Pages/Extra_Itens/zp_paintball_gun", 2, "zpsp_extra_item", "[ZP] Extra: Paintball Gun", "Imagens/banner_site_scrash.gif", "Gives a Paintball weapon"],
	[20, "[ZPSp] Frost M4A1", "Pages/Extra_Itens/zpsp_frost_m4a1", 2, "zpsp_extra_item", "[ZPSp] Extra: Frost M4A1", "Imagens/frostm4a1_banner.png", "Frost Zombies with this M4A1"],
	
	// Map Script
	[21, "zm_5em1_scrash", "Pages/Addons/map_script_5em1", 2, "map_script", "Map Script: zm_5em1_scrash", "Imagens/banner_site_scrash.gif", "Change map every round without loading"],
	
	// Private Plugins
	[22, "Scrash's Capture the Flag", "Pages/Private/scrash_ctf", 3, "private_main", "Scrash's Capture the Flag", "Imagens/ctf_banner.png", "See the private full addons"],
	
	// Game Mode
	[25, "Cannibal", "Pages/Gamemode/zpsp_gm_cannibal", 2, "zpsp_gamemodes", "[ZPSp] Gamemode: Cannibal", "Imagens/banner_site_scrash.gif", "Zombies vs Zombies"],
	[26, "Tag Mode", "Pages/Gamemode/zpsp_gm_tag", 2, "zpsp_gamemodes", "[ZPSp] Gamemode: Tag Mode", "Imagens/banner_site_scrash.gif", "Tag mode for Zombie Plague Special"],
	[27, "Deathmatch", "Pages/Gamemode/zpsp_gm_deathmatch", 2, "zpsp_gamemodes", "[ZPSp] Gamemode: Deathmathch", "Imagens/banner_site_scrash.gif", "Its Like swarm mode but you can respawn"],
	[28, "Gravity", "Pages/Gamemode/zpsp_gm_gravity", 2, "zpsp_gamemodes", "[ZPSp] Gamemode: Gravity", "Imagens/banner_site_scrash.gif", "Its like swarm mode, but with low gravity"],
	[29, "Nemesis Xtreme", "Pages/Gamemode/zpsp_gm_nem_xtreme", 2, "zpsp_gamemodes", "[ZPSp] Gamemode: Nemesis Xtreme", "Imagens/banner_site_scrash.gif", "X Nemesis vs Other humans"],
	[30, "Hot Potato Mode", "Pages/Gamemode/zpsp_gm_hotpotato", 2, "zpsp_gamemodes", "[ZPSp] Gamemode: Hot Potato Mode", "Imagens/banner_site_scrash.gif", "Hot Potato mode for Zombie Plague Special"],

];

// Le a pagina no GET
function ler_pagina() {

	var qs = (function (a) {
		if (a == "") return {};
		var b = {};
		for (var i = 0; i < a.length; ++i) {
			var p = a[i].split('=', 2);
			if (p.length == 1)
				b[p[0]] = "";
			else
				b[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " "));
		}
		return b;
	})(window.location.search.substr(1).split('&'));

	var varGet1 = qs[0, "pid"];
	if(varGet1 == null || varGet1 == undefined || varGet1 == "" || varGet1 == "home" || varGet1 == 0) {
		document.write("<div data-include='home'></div>")
		document.title = "Home - Scrash's Website";
		return;
	}

	if(varGet1 == "list") {
		document.write("<div data-include='list_plugins'></div>");
		document.title = "Plugin List - Scrash's Website";
		return;
	}
	
	if(isNaN(varGet1) || varGet1 <= 0) {
		document.write("<div data-include='error404'></div>");
		document.title = "Error - Scrash's Website";
		return;
	}
	
	var id_plugin = null
	for (var i = 0; i < plugins.length; i++) {
		if(varGet1 == plugins[i][ar_id]) {
			id_plugin = i;
			break;
		}
	}
	if(id_plugin == null) {
		document.write("<div data-include='error404'></div>");
		document.title = "Error - Scrash's Website";
		return;
	}
	
	document.title = plugins[id_plugin][ar_name] + " - Scrash's Website";
	document.write("<div data-include='" + plugins[id_plugin][ar_link] + "'></div>")
}

function get_listplugins(tipo) {
	for (var i = 0; i < plugins.length; i++) {

		if (tipo == 0) {
			var lista = document.getElementById(plugins[i][ar_categoria]).innerHTML;
			lista = lista + "<li><a class='dropdown-item' href='index.html?pid=" + plugins[i][ar_id] + "'>" + plugins[i][ar_def_name] + "</a></li>";
			document.getElementById(plugins[i][ar_categoria]).innerHTML = lista;
		}
		else {
			var descicao = "";
			if (plugins[i][ar_categoria] == "map_script")
				descicao = "(Map Script) ";

			var elemento = "list_" + plugins[i][ar_categoria] + "_" + plugins[i][ar_id_tipo];
			var lista = document.getElementById(elemento).innerHTML;
			lista = lista + "<li><a class='text-white text-decoration-none' href='index.html?pid=" + plugins[i][ar_id] + "'>" + descicao + plugins[i][ar_def_name] + "</a></li>";
			document.getElementById(elemento).innerHTML = lista;
		}
	}
}

/*----------------------------------------
Carrosel da home
------------------------------------*/
carrossel_home_ids = [
	1,	// Zombie plague special
	13, // ZP XP
	23,	// Dragon ball
	22, // CTF
	9,	// Thanos
	12 // Sonic
]

function Get_Carrosel_Home() {
	var divisoria = document.getElementById("carrosel_home_div").innerHTML;
	var slides = document.getElementById("carrosel_home_slides").innerHTML;
	for (var carrosel = 0; carrosel < carrossel_home_ids.length; carrosel++) {
		for (var i = 0; i < plugins.length; i++) {
			if (plugins[i][ar_id] != carrossel_home_ids[carrosel])
				continue;

			slides += "<button type='button' data-bs-target='#carrosel_primario' data-bs-slide-to='" + (carrosel + 1).toString() + "' aria-label='Slide " + (carrosel + 2).toString() + "'></button>";

			divisoria += "<div class='carousel-item' data-bs-interval='5000'>";
			divisoria += "<a class='text-decoration-none' href='index.html?pid=" + plugins[i][ar_id] + "'><img src='" + plugins[i][ar_imagem] + " ' class='d-block w-100' alt='" + plugins[i][ar_name] + "'>";
			divisoria += "<div class='carousel-caption'>"
			divisoria += "<h5>" + plugins[i][ar_name] + "</h5>";
			divisoria += "<p>" + plugins[i][ar_descricao] + "</p></div></a></div>";
		}
	}

	// Pagina Donate
	divisoria += "<div class='carousel-item'><a class='text-decoration-none' href='https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=A8RJPHR3T8P6Y'><img src='Imagens/banner_site_scrash.gif' class='d-block w-100' alt='Donate'>";
	divisoria += "<div class='carousel-caption'><h5>Donate:</h5><p>Do you like the some plugin and want to encourage my work?</p></div></a></div>";
	slides += "<button type='button' data-bs-target='#carrosel_primario' data-bs-slide-to='" + (carrossel_home_ids.length + 1).toString() + "' aria-label='Slide " + (carrossel_home_ids.length + 2).toString() + "'></button>";

	document.getElementById("carrosel_home_slides").innerHTML = slides;
	document.getElementById("carrosel_home_div").innerHTML = divisoria;
}


/*----------------------------------------
Carrosel da lista de plugins
------------------------------------*/
carrosel_list_plugins = [
	1,	// Zombie plague special
	13, // ZP XP
	23,	// Dragon ball
	22,	// CTF
	9,	// Thanos
	3,	// Pain
	12,	// Sonic & Shadow
	20 // Frost m4a1
]

function Get_Carrosel_ListPlugins() {
	var divisoria = document.getElementById("carrosel_list_plugins_div").innerHTML;
	var slides = document.getElementById("carrosel_list_plugins_slides").innerHTML;
	for (var carrosel = 0; carrosel < carrosel_list_plugins.length; carrosel++) {
		for (var i = 0; i < plugins.length; i++) {
			if (plugins[i][ar_id] != carrosel_list_plugins[carrosel])
				continue;

			slides += "<button type='button' data-bs-target='#plugin_destaque' ";
			if (carrosel == 0) slides += "class='active' ";
			slides += "data-bs-slide-to='" + carrosel + "' aria-label='Slide " + (carrosel + 1).toString() + "'></button>";

			divisoria += "<div class='carousel-item";
			if (carrosel == 0) divisoria += " active";
			divisoria += "' data-bs-interval='5000'><a class='text-decoration-none' href='index.html?pid=" + plugins[i][ar_id] + "'><img src='" + plugins[i][ar_imagem] + " ' class='d-block w-100' alt='" + plugins[i][ar_name] + "'>";
			divisoria += "<div class='carousel-caption'>"
			divisoria += "<h5>" + plugins[i][ar_name] + "</h5>";
			divisoria += "<p>" + plugins[i][ar_descricao] + "</p></div></a></div>";
		}
	}

	document.getElementById("carrosel_list_plugins_div").innerHTML = divisoria;
	document.getElementById("carrosel_list_plugins_slides").innerHTML = slides;
}

/*==============
Cards
===============*/

group_card_ids = [
	["full_mode", "Full Mode"],
	["zp_special_classes", "Best ZPSp Custom Special Classes"],
	["zp_extra_itens", "Extra Itens"],
	["zpsp_additions", "Zombie Plague Additions"],
	["zpsp_game_modes", "Zombie Plague Gamemodes"],
	//["private", "Private Plugins"]
]

cards_plugins = [
	[1, 23],
	[9, 3, 12],
	[18, 17, 20],
	[13, 14, 16],
	[26, 25, 29],
	//[21, 22]
]

function AddCardItens() {
	var div_card, div_principal
	for (var y = 0; y < group_card_ids.length; y++) {
		// Criando grupos
		div_principal = document.getElementById("scrash_cards").innerHTML;
		div_principal += "<hr/><br/><h3>" + group_card_ids[y][1] + "</h3>";
		if(y == 0)
			div_principal += "<div class='card-group card-group-row' id='" + group_card_ids[y][0] + "'></div>";
		else
			div_principal += "<div class='card-group card-group-row mb-5' id='" + group_card_ids[y][0] + "'></div>";
		
		document.getElementById("scrash_cards").innerHTML = div_principal;
		//---------------


		div_card = document.getElementById(group_card_ids[y][0]).innerHTML;
		for (var card = 0; card < cards_plugins[y].length; card++) {
		for (var i = 0; i < plugins.length; i++) {
			if (plugins[i][ar_id] != cards_plugins[y][card] || cards_plugins[y][card] == null)
				continue;

			div_card += "<div class='card text-white bg-dark border border-white mb-3 p-2'>";
			div_card += "<a href='index.html?pid=" + plugins[i][ar_id] + "' class='text-white text-decoration-none'>"
			div_card += "<img src='" + plugins[i][ar_imagem] + "' class='card-img-top' alt='" + plugins[i][ar_name] + "'>";
			div_card += "<div class='card-body'>";
			div_card += "<h5 class='card-title'>" + plugins[i][ar_name] + "</h5>";
			div_card += "<p class='card-text'>" + plugins[i][ar_descricao] + "</p>";
			div_card += "</div></a></div>";

		}}
	
		document.getElementById(group_card_ids[y][0]).innerHTML = div_card;
	}
}