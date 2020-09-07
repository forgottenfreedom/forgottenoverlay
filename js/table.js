let encounterDefine = "{title} / Time: {duration} / DPS: {ENCDPS}";
let IsBlur = false;
let dmgpctglobal = 100;

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

    let combatantIndex = 0;
    for (let combatantName in data.Combatant) {

        let combatant = data.Combatant[combatantName];
        let job = parseActFormat("{Job}", combatant);
        let name = parseActFormat ("{name}", combatant);
        let NameRegEx = /^[a-zA-Z-' ]{1,21}/g;
        let death = parseActFormat("{deaths}", combatant);
        let dmgpct = parseActFormat("{damage%}", combatant);
        let dmgnumber = Number(dmgpct.slice(0, dmgpct.indexOf('%')));

        if (combatantIndex == 0) {
            dmgpctglobal = dmgnumber;
        };

        let relativdmgpct = (dmgnumber/dmgpctglobal)*100 + "%";

        if (combatantIndex > 7 ) {
            continue;
        };

        if (job in jobs === false) {
            continue;
        };

        if (NameRegEx.test(name) === false) {
            continue;
        };

        let playername = ChangeName(name);
        let deth = deths(death);



        let divname = document.createElement("div");
        let divdps = document.createElement("div");
        let divstats = document.createElement("div");
        let wrapper =document.createElement("div");
        let bottom = document.createElement("div");
        let dmg = document.createElement("div");
        let stats = parseActFormat ("{crithit%}/{DirectHitPct}/{CritDirectHitPct}", combatant);

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

        if (IsBlur == true) {
            divname.innerHTML = `<img src="${img}" class = job-image>` + 
                                `<span name="blur" class="blur">${playername}</span>` +
                                `<span name="deth" class="deth">${deth}`;
        }
        else if (IsBlur == false) {
            divname.innerHTML = `<img src="${img}" class = job-image>` + 
                                `<span name="blur" class="noblur">${playername}</span>` +
                                `<span name="deth" class="deth">${deth}`;
        }
        else {
            return
        };


        divdps.className = "table-dps";
        divdps.innerHTML = parseActFormat ("{ENCDPS}", combatant);
        divstats.className = "table-stats";
        divstats.innerHTML = stats.replace(/%/g, "");
        wrapper.className = "table";
        wrapper.style = `background-color: ${rolecolor}; border-color: ${jobcolor}`
        bottom.className = "bottom";
        dmg.style = `background-color: ${jobcolor}; width: ${relativdmgpct}; height: 2px`

        bottom.appendChild(divdps);
        bottom.appendChild(divstats);
        wrapper.appendChild(divname);
        wrapper.appendChild(bottom);
        wrapper.appendChild(dmg);
        newdiv.appendChild(wrapper);

        combatantIndex++;
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