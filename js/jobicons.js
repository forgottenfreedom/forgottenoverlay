const jobs = {
    Mch: {
        jobicon: 'https://xivapi.com/cj/1/machinist.png',
        role: 'dps',
        jobcolor: '#6ee1d6'
    },
    Dnc: {
        jobicon: 'https://xivapi.com/cj/1/dancer.png',
        role: 'dps',
        jobcolor: '#e2b0af'
    },
    Brd: {
        jobicon: 'https://xivapi.com/cj/1/bard.png',
        role: 'dps',
        jobcolor: '#6fba5e'
    },
    Whm: {
        jobicon: 'https://xivapi.com/cj/1/whitemage.png',
        role: 'heal',
        jobcolor: '#f0f0cf'
    },
    Ast: {
        jobicon: 'https://xivapi.com/cj/1/astrologian.png',
        role: 'heal',
        jobcolor: '#ffe74a'
    },
    Sch: {
        jobicon: 'https://xivapi.com/cj/1/scholar.png',
        role: 'heal',
        jobcolor: '#7657f0'
    },
    War: {
        jobicon: 'https://xivapi.com/cj/1/warrior.png',
        role: 'tank',
        jobcolor: '#c21c21'
    },
    Drk: {
        jobicon: 'https://xivapi.com/cj/1/darkknight.png',
        role: 'tank',
        jobcolor: '#ac26cc'
    },
    Gnb: {
        jobicon: 'https://xivapi.com/cj/1/gunbreaker.png',
        role: 'tank',
        jobcolor: '#796d30'
    },
    Pld: {
        jobicon: 'https://xivapi.com/cj/1/paladin.png',
        role: 'tank',
        jobcolor: '#85d2e6'
    },
    Blm: {
        jobicon: 'https://xivapi.com/cj/1/blackmage.png',
        role: 'dps',
        jobcolor: '#8479d6'
    },
    Rdm: {
        jobicon: 'https://xivapi.com/cj/1/redmage.png',
        role: 'dps',
        jobcolor: '#c55657'
    },
    Smn: {
        jobicon: 'https://xivapi.com/cj/1/summoner.png',
        role: 'dps',
        jobcolor: '#127478'
    },
    Nin: {
        jobicon: 'https://xivapi.com/cj/1/ninja.png',
        role: 'dps',
        jobcolor: '#8b1964'
    },
    Mnk: {
        jobicon: 'https://xivapi.com/cj/1/monk.png',
        role: 'dps',
        jobcolor: '#d69c00'
    },
    Sam: {
        jobicon: 'https://xivapi.com/cj/1/samurai.png',
        role: 'dps',
        jobcolor: '#c16d04'
    },
    Drg: {
        jobicon: 'https://xivapi.com/cj/1/dragoon.png',
        role: 'dps',
        jobcolor: '#2d64cd'
    },
    Blu: {
        jobicon: 'https://xivapi.com/cj/1/bluemage.png',
        role: 'dps',
        jobcolor: '#6ee1d6'
    },
    Acn: {
        jobicon: 'https://xivapi.com/cj/1/arcanist.png',
        role: 'dps',
        jobcolor: '#CE5252'
    },
    Arc: {
        jobicon: 'https://xivapi.com/cj/1/archer.png',
        role: 'dps',
        jobcolor: '#CE5252'
    },
    Lnc: {
        jobicon: 'https://xivapi.com/cj/1/lancer.png',
        role: 'dps',
        jobcolor: '#CE5252'
    },
    Pgl: {
        jobicon: 'https://xivapi.com/cj/1/pugilist.png',
        role: 'dps',
        jobcolor: '#CE5252'
    },
    Rog: {
        jobicon: 'https://xivapi.com/cj/1/rogue.png',
        role: 'dps',
        jobcolor: '#CE5252'
    },
    Thm: {
        jobicon: 'https://xivapi.com/cj/1/thaumaturge.png',
        role: 'dps',
        jobcolor: '#CE5252'
    },
    Cnj: {
        jobicon: 'https://xivapi.com/cj/1/conjurer.png',
        role: 'heal',
        jobcolor: '#5AC629'
    },
    Gla: {
        jobicon: 'https://xivapi.com/cj/1/gladiator.png',
        role: 'tank',
        jobcolor: '#6B94E7'
    },
    Mrd: {
        jobicon: 'https://xivapi.com/cj/1/marauder.png',
        role: 'tank',
        jobcolor: '#6B94E7'
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