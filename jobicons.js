const jobs = {
    Mch: {
        jobicon: 'https://xivapi.com/cj/1/machinist.png',
        role: 'dps',
        jobcolor: '#6ee1d6'
    },
    Dnc: {
        jobicon: 'https://xivapi.com/cj/1/dancer.png',
        role: 'dps',
        jobcolor: '#6ee1d6'
    },
    Brd: {
        jobicon: 'https://xivapi.com/cj/1/bard.png',
        role: 'dps',
        jobcolor: '#6ee1d6'
    },
    Whm: {
        jobicon: 'https://xivapi.com/cj/1/whitemage.png',
        role: 'heal',
        jobcolor: '#6ee1d6'
    },
    Ast: {
        jobicon: 'https://xivapi.com/cj/1/astrologian.png',
        role: 'heal',
        jobcolor: '#6ee1d6'
    },
    Sch: {
        jobicon: 'https://xivapi.com/cj/1/scholar.png',
        role: 'heal',
        jobcolor: '#6ee1d6'
    },
    War: {
        jobicon: 'https://xivapi.com/cj/1/warrior.png',
        role: 'tank',
        jobcolor: '#6ee1d6'
    },
    Drk: {
        jobicon: 'https://xivapi.com/cj/1/darkknight.png',
        role: 'tank',
        jobcolor: '#6ee1d6'
    },
    Gnb: {
        jobicon: 'https://xivapi.com/cj/1/gunbreaker.png',
        role: 'tank',
        jobcolor: '#6ee1d6'
    },
    Pld: {
        jobicon: 'https://xivapi.com/cj/1/paladin.png',
        role: 'tank',
        jobcolor: '#6ee1d6'
    },
    Blm: {
        jobicon: 'https://xivapi.com/cj/1/blackmage.png',
        role: 'dps',
        jobcolor: '#6ee1d6'
    },
    Rdm: {
        jobicon: 'https://xivapi.com/cj/1/redmage.png',
        role: 'dps',
        jobcolor: '#6ee1d6'
    },
    Smn: {
        jobicon: 'https://xivapi.com/cj/1/summoner.png',
        role: 'dps',
        jobcolor: '#6ee1d6'
    },
    Nin: {
        jobicon: 'https://xivapi.com/cj/1/ninja.png',
        role: 'dps',
        jobcolor: '#6ee1d6'
    },
    Mnk: {
        jobicon: 'https://xivapi.com/cj/1/monk.png',
        role: 'dps',
        jobcolor: '#6ee1d6'
    },
    Sam: {
        jobicon: 'https://xivapi.com/cj/1/samurai.png',
        role: 'dps',
        jobcolor: '#6ee1d6'
    },
    Drg: {
        jobicon: 'https://xivapi.com/cj/1/dragoon.png',
        role: 'dps',
        jobcolor: '#6ee1d6'
    },
    Blu: {
        jobicon: 'https://xivapi.com/cj/1/bluemage.png',
        role: 'dps',
        jobcolor: '#6ee1d6'
    }
}

function pickrolecolor (role) {
    if (role == 'dps') {
        return '#843131';
    }
    else if (role == 'tank') {
        return '#425ABD';
    }
    else if (role == 'heal') {
        return '#397B18';
    }
}

let encounterDefine = "{title} / Time: {duration} / DPS: {ENCDPS}";

let useHTMLEncounterDefine = false;
//        document.addEventListener("onOverlayStateUpdate", function (e) {
//            if (!e.detail.isLocked) {
//                displayResizeHandle();
//            } else {
//                hideResizeHandle();
//            }
//        });
//
//        function displayResizeHandle() {
//            document.documentElement.classList.add("resizeHandle");
//        }
//
//        function hideResizeHandle() {
//            document.documentElement.classList.remove("resizeHandle");
//        }
addOverlayListener("CombatData", (e) => update(e));
startOverlayEvents();

function update(data) {
    updateEncounter(data);
    if (document.getElementById("combatantTableHeader") == null) {
        updateCombatantListHeader();
    }
    updateCombatantList(data);
}

function updateEncounter(data) {
    var encounterElem = document.getElementById('encounter');

    var elementText;
    if (typeof encounterDefine === 'function') {
        elementText = encounterDefine(data.Encounter);
        if (typeof elementText !== 'string') {
            console.log("updateEncounter: 'encounterDefine' is declared as function but not returns a value as string.");
            return;
        }
    } else if (typeof encounterDefine === 'string') {
        elementText = parseActFormat(encounterDefine, data.Encounter);
    } else {
        console.log("updateEncounter: 'encounterDefine' should be string or function that returns string.");
        return;
    }

    if (!useHTMLEncounterDefine) {
        encounterElem.innerText = parseActFormat(elementText, data.Encounter);
    } else {
        encounterElem.innerHTML = parseActFormat(elementText, data.Encounter);
    }
}

function updateCombatantListHeader() {

}

function updateCombatantList(data) {

    let div = document.getElementById("combatants");
    let olddiv = document.getElementById("combatantdiv");
    let newdiv = document.createElement("div");
    newdiv.id = "combatantdiv";
    newdiv.className = "wrapper";

//     let combatantIndex = 0;
    for (let combatantName in data.Combatant) {
        let combatant = data.Combatant[combatantName];
        let divname = document.createElement("div");
        let divdps = document.createElement("div");
        let divstats = document.createElement("div");
        let wrapper =document.createElement("div");
        let job = parseActFormat("{Job}", combatant);
        let name = parseActFormat ("{name}", combatant);
        let dmgpct = parseActFormat("{damage%}", combatant);
        let bottom = document.createElement("div");
        let dmg = document.createElement("div");

        if (jobs[job] !== undefined) {
            img = jobs[job].jobicon;
            role = jobs[job].role;
            rolecolor = pickrolecolor (role);
            jobcolor = jobs[job].jobcolor;
        }
        else { 
            img = 'https://xivapi.com/img-misc/lodestone/status.png';
            role = null;
            rolecolor = '#000'
            jobcolor = '#fff'
        };

        divname.className = "table-name";
        divname.innerHTML = `<img src="${img}" class = job-image>` + name;
        divdps.className = "table-dps";
        divdps.innerHTML = parseActFormat ("{encdps}", combatant);
        divstats.className = "table-stats";
        divstats.innerHTML = parseActFormat ("{crithit%}/{DirectHitPct}/{CritDirectHitPct}", combatant);
        wrapper.className = "table";
        wrapper.style = `background-color: ${rolecolor}`
        bottom.className = "bottom";
        dmg.style = `background-color: ${jobcolor}; width: ${dmgpct}; height: 2px`

        bottom.appendChild(divdps);
        bottom.appendChild(divstats);
        wrapper.appendChild(divname);
        wrapper.appendChild(bottom);
        wrapper.appendChild(dmg);
        newdiv.appendChild(wrapper);

        // combatantIndex++;
    }
    
    if (olddiv != void(0)) {
        div.replaceChild(newdiv, olddiv);
    }
    else {
        div.appendChild(newdiv);
    }
}

function parseActFormat(str, dictionary) {
    var result = "";
    var currentIndex = 0;
    do {
        var openBraceIndex = str.indexOf('{', currentIndex);
        if (openBraceIndex < 0) {
            result += str.slice(currentIndex);
            break;
        }
        else {
            result += str.slice(currentIndex, openBraceIndex);
            var closeBraceIndex = str.indexOf('}', openBraceIndex);
            if (closeBraceIndex < 0) {
                // parse error!
                console.log("parseActFormat: Parse error: missing close-brace for " + openBraceIndex.toString() + ".");
                return "ERROR";
            }
            else {
                var tag = str.slice(openBraceIndex + 1, closeBraceIndex);
                if (typeof dictionary[tag] !== 'undefined') {
                    result += dictionary[tag];
                } else {
                    console.log("parseActFormat: Unknown tag: " + tag);
                    result += "ERROR";
                }
                currentIndex = closeBraceIndex + 1;
            }
        }
    } while (currentIndex < str.length);
    return result;
}