function goodVsEvil(good, evil) {

    var hobbitCount = 0, menCount = 0, elvesCount = 0, dwarvesCount = 0, eaglesCount = 0, wizardsCount = 0
    var orcCount = 0, evilMenCount = 0, wargsCount = 0, goblinCount = 0, urukCount = 0, trollCount = 0, evilWizardCount = 0

    // split the input into arrays
    var goodArray = good.split(' ');
    var evilArray = evil.split(' ');

    // loop through the arrays, parse and assign the counts
    for (var i = 0; i < goodArray.length; i++) {
        var race = parseInt(goodArray[i]);

        switch (i) {
            case 0:
                hobbitCount += race;
                break;
            case 1:
                menCount += race;
                break;
            case 2:
                elvesCount += race;
                break;
            case 3:
                dwarvesCount += race;
                break;
            case 4:
                eaglesCount += race;
                break;
            case 5:
                wizardsCount += race;
                break;
        }
    } // now we have values for the count of each good race

    for (var i = 0; i < evilArray.length; i++) {
        var race = parseInt(evilArray[i]);

        switch (i) {
            case 0:
                orcCount += race;
                break;
            case 1:
                evilMenCount += race;
                break;
            case 2:
                wargsCount += race;
                break;
            case 3:
                goblinCount += race;
                break;
            case 4:
                urukCount += race;
                break;
            case 5:
                trollCount += race;
                break;
            case 6:
                evilWizardCount += race;
                break;
        }
    } // now we have values for the count of each evil race

    //make goodGuys object
    var goodGuys = {
        hobbits: {
            worth: 1,
            count: hobbitCount,
        },
        men: {
            worth: 2,
            count: menCount
        },
        elves: {
            worth: 2,
            count: elvesCount
        },
        dwarves: {
            worth: 3,
            count: dwarvesCount
        },
        eagles: {
            worth: 4,
            count: eaglesCount
        },
        wizards: {
            worth: 10,
            count: wizardsCount
        },
    }

    // make bad guys object
    var badGuys = {
        orcs: {
            worth: 1,
            count: hobbitCount,
        },
        men: {
            worth: 2,
            count: menCount
        },
        wargs: {
            worth: 2,
            count: elvesCount
        },
        goblin: {
            worth: 2,
            count: dwarvesCount
        },
        uruk: {
            worth: 3,
            count: eaglesCount
        },
        troll: {
            worth: 5,
            count: trollCount
        },
        wizards: {
            worth: 10,
            count: wizardsCount
        },
    }

    //find totals
    var totalGood = 0
    var totalBad = 0

    for (race in goodGuys) {
        totalGood += (goodGuys[race].worth * goodGuys[race].count);
    }

    for (race in badGuys) {
        totalBad += (badGuys[race].worth * badGuys[race].count);
    }

    //output result
    var battleResult = ''

    if (totalGood > totalBad) {
        battleResult = 'Good triumphs over Evil'
    }
    else if (totalBad > totalGood) {
        battleResult = `Evil eradicates all trace of Good`
    }
    else if (totalGood == totalBad) {
        battleResult = `No victor on this battle field`
    }

    var resultStatement = `Battle Result: ${battleResult}`

    console.log(resultStatement);
}

// goodVsEvil('45 23 11 56 100 35', `48 100 22 3 44 58 21`)
