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