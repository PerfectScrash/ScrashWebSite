let plugins = [
	// Main plugins
	["Dragon Ball Mod", "index.html?pag_dir=dbm_official", 1, "pl_main"],
	["Zombie Plague Special", "index.html?pag_dir=zp_special_official", 2, "pl_main"],

	// Special Class (Human)
	["Antidoter", "index.html?pag_dir=Pages/Special_Classes/zpsp_spc_antidoter", 2, "zpsp_sp_h"],
	["Pain/Nagato", "index.html?pag_dir=Pages/Special_Classes/zpsp_spc_pain", 2, "zpsp_sp_h"],
	["Plasma", "index.html?pag_dir=Pages/Special_Classes/zpsp_spc_plasma", 2, "zpsp_sp_h"],
	["Chuck Norris", "index.html?pag_dir=Pages/Special_Classes/zpsp_spc_chucknorris", 2, "zpsp_sp_h"],
	["Xiter", "index.html?pag_dir=Pages/Special_Classes/zpsp_spc_xiter", 2, "zpsp_sp_h"],
	["Priest", "index.html?pag_dir=Pages/Special_Classes/zpsp_spc_priest", 2, "zpsp_sp_h"],
	["Grenadier", "index.html?pag_dir=Pages/Special_Classes/zpsp_spc_grenadier", 2, "zpsp_sp_h"],

	// Special Class (Zombie)
	["Thanos", "index.html?pag_dir=Pages/Special_Classes/zpsp_spc_thanos", 2, "zpsp_sp_z"],
	["Raptor", "index.html?pag_dir=Pages/Special_Classes/zpsp_spc_raptor", 2, "zpsp_sp_z"],
	["Dog", "index.html?pag_dir=Pages/Special_Classes/zpsp_spc_dog", 2, "zpsp_sp_z"],

	// Special Class (Both)
	["Sonic & Shadow", "index.html?pag_dir=Pages/Special_Classes/zpsp_spc_sonic_shadow", 2, "zpsp_sp_all"],

	// Additions
	["[ZPSp] - XP Level System", "index.html?pag_dir=Pages/Addons/zpsp_xp_system", 2, "zpsp_addon"],
	["Lasermine Perfect 4.3", "index.html?pag_dir=Pages/Addons/zp_lasermine_perfect", 2, "zpsp_addon"],
	["Custom Player Model", "index.html?pag_dir=Pages/Addons/zpsp_addon_cplayer_model", 2, "zpsp_addon"],
	["Thunder Weapons", "index.html?pag_dir=Pages/Addons/thunder_weapons", 2, "zpsp_addon"],

	// Extra itens
	["Uganda Knuckles Gun", "index.html?pag_dir=Pages/Extra_Itens/zp_uganda_knuckles_gun", 2, "zpsp_extra_item"],
	["Elemental (Fire & Ice)", "index.html?pag_dir=Pages/Extra_Itens/zp_elemental", 2, "zpsp_extra_item"],
	["Paintball Gun", "index.html?pag_dir=Pages/Extra_Itens/zp_paintball_gun", 2, "zpsp_extra_item"],
	["[ZPSp] Frost M4A1", "index.html?pag_dir=Pages/Extra_Itens/zpsp_frost_m4a1", 2, "zpsp_extra_item"],

	// Map Script
	["zm_5em1_scrash", "index.html?pag_dir=Pages/Addons/map_script_5em1", 2, "map_script"],
	
	// Private Plugins
	["Scrash's Capture the Flag", "index.html?pag_dir=Pages/Private/scrash_ctf", 3, "private_main"]
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

	var varGet1 = qs["pag_dir"];
	if (varGet1 != "" && varGet1 != " " && varGet1 != null && varGet1 != undefined) {
		document.write("<div data-include='" + varGet1 + "'></div>")
	}
	else document.write("<div data-include='home'></div>")
}

function get_listplugins(tipo) {
	for (var i = 0; i < plugins.length; i++) {
		
		if (tipo == 0) {
			var lista = document.getElementById(plugins[i][3]).innerHTML;
			lista = lista + "<li><a class='dropdown-item' href='" + plugins[i][1] + "'>" + plugins[i][0] + "</a></li>";
			document.getElementById(plugins[i][3]).innerHTML = lista;
		}
		else {
			var descicao = "";
			if (plugins[i][3] == "map_script")
				descicao = "(Map Script) ";
			
			var elemento = "list_" + plugins[i][3] + "_" + plugins[i][2];
			var lista = document.getElementById(elemento).innerHTML;
			lista = lista + "<li><a class='text-white text-decoration-none' href='" + plugins[i][1] + "'>" + descicao + plugins[i][0] + "</a></li>";
			document.getElementById(elemento).innerHTML = lista;
		} 
	}
}