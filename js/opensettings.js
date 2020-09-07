window.addEventListener("contextmenu", settings);


function settings () {
    window.open('settings.html' ,'', 'width = 600, height = 300');
}

function ChangeName (name) {

    if (localStorage.getItem("NameSetting") == null) {
        NameSetting = 0;
    }
    else {
        NameSetting = localStorage.getItem("NameSetting");
    };

    let FirstName = name.substr(0, name.indexOf(' '));
    let SecondName = name.substr(name.indexOf(' ') + 1);
    let FirstNameInitial = FirstName.substr(0, 1) + '.';
    let SecondNameInitial = SecondName.substr(0, 1) + '.';

    if (NameSetting == 0) {
        return name
    }
    if (NameSetting == 1) {
        return `${FirstNameInitial} ${SecondNameInitial}`
    }
    if (NameSetting == 2) {
        return `${FirstName} ${SecondNameInitial}`
    }
}

function deths (death) {
    if (death > 0) {
        return death
    }
    else {
        return ' '
    }
}

function getLayout () {
    if (localStorage.getItem("LayoutSetting") == null) {
        LayoutSetting = 0;
    }
    else {
        LayoutSetting = localStorage.getItem("LayoutSetting");
    };

    if (LayoutSetting == 0) {
        return 1300;
    }
    if (LayoutSetting == 1) {
        return 700;
    }
    if (LayoutSetting == 2) {
        return 300;
    }
}