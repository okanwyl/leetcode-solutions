
function roundUp(hour: number, minute: number) {
    if (minute === 0) return { hour: hour, slot: 0 };
    if (minute <= 15) return { hour: hour, slot: 1 };
    if (minute <= 30) return { hour: hour, slot: 2 };
    if (minute <= 45) return { hour: hour, slot: 3 };

    return { hour: (hour + 1) % 24, slot: 0 };
}

function roundDown(hour: number, minute: number) {
    if (minute <= 14) return { hour: hour, slot: 0 };
    if (minute <= 29) return { hour: hour, slot: 1 };
    if (minute <= 44) return { hour: hour, slot: 2 };
    if (minute <= 59) return { hour: hour, slot: 3 };
}

function numberOfRounds(loginTime: string, logoutTime: string): number {

    var [hour1, minute1] = loginTime.split(':').map(function(x) { return Number(x); });
    var [hour2, minute2] = logoutTime.split(':').map(function(x) { return Number(x); });

    if (hour1 === hour2 && minute2 - minute1 < 15 && minute2 - minute1 >= 0) { return 0; }

    var roundedLoginTime = roundUp(hour1, minute1);
    var roundedLogoutTime = roundDown(hour2, minute2);

    var count = 0;
    // @ts-ignore
    while (roundedLoginTime.hour !== roundedLogoutTime.hour || roundedLoginTime.slot !== roundedLogoutTime.slot) {
        roundedLoginTime.slot += 1
        if (roundedLoginTime.slot === 4) {
            roundedLoginTime.slot = 0;
            roundedLoginTime.hour = (roundedLoginTime.hour + 1) % 24
        }
        count += 1;
    }
    return count;
};
