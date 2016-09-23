var team = {
    name: 'Sports Team',
    league: 'International Confederation',
    city: 'Murica City',
    coach: 'Coach Joe',
    winFive: '1',
    lossFive: '199',
    winSix: '198',
    lossSix: '0',
    bigBowl: '14',
    bestPlayer: 'Ball Catcher'
};

function printObject(p) {
    var story = "  The worst ball team last year had to be " + p.name +
        ", they just couldn't catch a break.\n They're in the  " + p.league +
        " and had the worst record in that league.\n They won only " + p.winFive +
        " game and lost " + p.lossFive + " games. This year has been an" +
        "incredible comeback with\n them winning " + p.winSix + " and losing " +
        p.lossSix + " games so far this year!. Hopefully they can win the "
        + "Big\n Trophy Game since they've lost it " + p.bigBowl +
        " times in a ROW! This years Big Trophy Game will be\n in " + p.city +
        " which is where " + p.coach + " and the young player " + p.bestPlayer +
        "is from.";
    return story;
};

var show = printObject(team);

console.log(show);
