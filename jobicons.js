const jobicons = {
    'Mch' : 'https://xivapi.com/cj/1/machinist.png',
    'Dnc' : 'https://xivapi.com/cj/1/dancer.png',
    'Brd' : 'https://xivapi.com/cj/1/bard.png',
    'Whm' : 'https://xivapi.com/cj/1/whitemage.png',
    'Ast' : 'https://xivapi.com/cj/1/astrologian.png',
    'Sch' : 'https://xivapi.com/cj/1/scholar.png',
    'War' : 'https://xivapi.com/cj/1/warrior.png',
    'Drk' : 'https://xivapi.com/cj/1/darkknight.png',
    'Gnb' : 'https://xivapi.com/cj/1/gunbreaker.png',
    'Pld' : 'https://xivapi.com/cj/1/paladin.png',
    'Blm' : 'https://xivapi.com/cj/1/blackmage.png',
    'Rdm' : 'https://xivapi.com/cj/1/redmage.png',
    'Smn' : 'https://xivapi.com/cj/1/summoner.png',
    'Nin' : 'https://xivapi.com/cj/1/ninja.png',
    'Mnk' : 'https://xivapi.com/cj/1/monk.png',
    'Sam' : 'https://xivapi.com/cj/1/samurai.png',
    'Drg' : 'https://xivapi.com/cj/1/dragoon.png',
    'Blu' : 'https://xivapi.com/cj/1/bluemage.png',
}


const jobs = {
    Mch: {
        jobicon: 'https://xivapi.com/cj/1/machinist.png',
        role: 'dps',
        jobcolor: '#6ee1d6'
    },
    Dnc: {
        jobicon: 'https://xivapi.com/cj/1/dancer.png',
        jobcolor: 'somehex'
    },
    Brd: {
        jobicon: 'https://xivapi.com/cj/1/bard.png',
        jobcolor: 'somehex'
    },
    Whm: {
        jobicon: 'https://xivapi.com/cj/1/whitemage.png',
        jobcolor: 'somehex'
    },
    Ast: {
        jobicon: 'https://xivapi.com/cj/1/astrologian.png',
        jobcolor: 'somehex'
    },
    Sch: {
        jobicon: 'https://xivapi.com/cj/1/scholar.png',
        jobcolor: 'somehex'
    },
    War: {
        jobicon: 'https://xivapi.com/cj/1/warrior.png',
        jobcolor: 'somehex'
    },
    Drk: {
        jobicon: 'https://xivapi.com/cj/1/darkknight.png',
        jobcolor: 'somehex'
    },
    Gnb: {
        jobicon: 'https://xivapi.com/cj/1/gunbreaker.png',
        jobcolor: 'somehex'
    },
    Pld: {
        jobicon: 'https://xivapi.com/cj/1/paladin.png',
        jobcolor: 'somehex'
    },
    Blm: {
        jobicon: 'https://xivapi.com/cj/1/blackmage.png',
        jobcolor: 'somehex'
    },
    Rdm: {
        jobicon: 'https://xivapi.com/cj/1/redmage.png',
        jobcolor: 'somehex'
    },
    Smn: {
        jobicon: 'https://xivapi.com/cj/1/summoner.png',
        jobcolor: 'somehex'
    },
    Nin: {
        jobicon: 'https://xivapi.com/cj/1/ninja.png',
        jobcolor: 'somehex'
    },
    Mnk: {
        jobicon: 'https://xivapi.com/cj/1/monk.png',
        jobcolor: 'somehex'
    },
    Sam: {
        jobicon: 'https://xivapi.com/cj/1/samurai.png',
        jobcolor: 'somehex'
    },
    Drg: {
        jobicon: 'https://xivapi.com/cj/1/dragoon.png',
        jobcolor: 'somehex'
    },
    Blu: {
        jobicon: 'https://xivapi.com/cj/1/bluemage.png',
        jobcolor: 'somehex'
    }
}

function pickrolecolor (role) {
    if (role == 'dps') {
        return '#843131';
    }
    else if (role == 'tank') {
        return '#425ABD';
    }
    else if (role == 'healer') {
        return '#397B18';
    }
}