function YYYYMMDDhhmmss(){
    var date = new Date();
    var year = date.getFullYear().toString();

    var month = date.getMonth() + 1;
    month = month < 10 ? '0' + month.toString() : month.toString();

    var day = date.getDate();
    day = day < 10 ? '0' + day.toString() : day.toString();

    var hour = date.getHours();
    hour = hour < 10 ? '0' + hour.toString() : hour.toString();

    var minites = date.getMinutes();
    minites = minites < 10 ? '0' + minites.toString() : minites.toString();

    var seconds = date.getSeconds();
    seconds = seconds < 10 ? '0' + seconds.toString() : seconds.toString();

    return year + month + day + hour + minites + seconds;
}

function YYYYMMDD(){
    var date = new Date();
    var year = date.getFullYear().toString();

    var month = date.getMonth() + 1;
    month = month < 10 ? '0' + month.toString() : month.toString();

    var day = date.getDate();
    day = day < 10 ? '0' + day.toString() : day.toString();

    return year + month + day;
}

function hhmmss(){
    var date = new Date();

    var hour = date.getHours();
    hour = hour < 10 ? '0' + hour.toString() : hour.toString();

    var minites = date.getMinutes();
    minites = minites < 10 ? '0' + minites.toString() : minites.toString();

    var seconds = date.getSeconds();
    seconds = seconds < 10 ? '0' + seconds.toString() : seconds.toString();

    return hour + minites + seconds;
}

function YYYY(){
    var date = new Date();

    var year = date.getFullYear().toString();

    return year;
}

function MM(){
    var date = new Date();

    var month = date.getMonth() + 1;
    month = month < 10 ? '0' + month.toString() : month.toString();

    return month;
}

function DD(){
    var date = new Date();

    var day = date.getDate();
    day = day < 10 ? '0' + day.toString() : day.toString();

    return day;
}

function hh(){
    var date = new Date();

    var hour = date.getHours();
    hour = hour < 10 ? '0' + hour.toString() : hour.toString();

    return hour;
}

function mm(){
    var date = new Date();

    var minites = date.getMinutes();
    minites = minites < 10 ? '0' + minites.toString() : minites.toString();

    return minites;
}

function ss(){
    var date = new Date();

    var seconds = date.getSeconds();
    seconds = seconds < 10 ? '0' + seconds.toString() : seconds.toString();

    return seconds;
}

module.exports = {
    YYYYMMDDhhmmss,
    YYYYMMDD,
    hhmmss,
    YYYY,
    MM,
    DD,
    hh,
    mm,
    ss
}