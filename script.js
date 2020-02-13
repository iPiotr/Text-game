$(document).ready(function () {

//declaration of general settings
let day = 1;
let expirence = 0;
let starkRep = 0;
let ziboRep = 0;
let arkanRep = 0;

function go() {
    newLine("-------", "yellow");
    newLine("Hi programmer", "yellow");

    if (expirence <= 30){
        newLine("You are not good", "yellow");
    } else if (expirence > 30) {
        newLine("You really good", "yellow");
    }
    
    newLine("-------", "yellow");
    newLine("Commands - 'help'", "yellow");
    newLine("-------", "yellow");

    newLine("");
}

go();

function help() {
    newLine("-------", "yellow");
    newLine("Companies - Check the list of companies", "yellow");
    newLine("Clear - cleans the terminal", "yellow");
    newLine("Start - shows the start message", "yellow");
    newLine("Status - reputation on companies", "yellow");
    newLine("Small - a small project", "yellow");
    newLine("Big - a big project", "yellow");
    newLine("-------", "yellow");

    newLine("");
}

function companies() {
    newLine("-------", "yellow");
    newLine("1. Starks", "yellow");
    newLine("2. Zibo", "yellow");
    newLine("3. Arkan", "yellow");
    newLine("-------", "yellow");

    newLine("");
}

function smallProject() {
    
    starkRep += 2;
    ziboRep += 4;
    day += 2;
    expirence += 2;
    newLine("-------", "yellow");

    newLine("");
}

function bigProject() {
    
    starkRep += 14;
    arkanRep += 4;
    day += 7;
    expirence += 14;
    newLine("-------", "yellow");

    newLine("");
}
function status() {
    newLine("-------", "yellow");
    newLine(`Day: ${day}`, "red");
    newLine("-------", "yellow");
    newLine(`Your expirence is: ${expirence}` , "yellow");
    newLine("-------", "yellow");
    newLine(`Your reputation in Stark: ${starkRep}` , "green");
    newLine("----", "yellow");
    newLine(`Your reputation in Zibo: ${ziboRep}` , "green");
    newLine("----", "yellow");
    newLine(`Your reputation in Arkan: ${arkanRep}` , "green");
    newLine("-------", "yellow");
    
    newLine("");
}

function clear() {
    $("p").remove();
    newLine("");
}

let lastCommand;

function parseCommand(command) {
    lastCommand = command;

    let error = "";
    if (command == "") {
        newLine("No command was entered", "red");
        newLine("");
    } else {

        switch (command.split(" ")[0]) {
            case "HELP":
                help();
                break;
            case "CLEAR":
                clear();
                break;
            case "COMPANIES":
                companies();
                break;
            case "START":
                go();
                break;
            case "SMALL":
                smallProject();
                break;
            case "BIG":
                bigProject();
                break;
            case "STATUS":
                status();
                break;
            default:
                newLine("Command '" + command.split(" ")[0] + "' was not recognised", "red");
                newLine("");
                break;
        }
    }
    return true;
}

function newLine(text, classname) {
    window.setTimeout(function () {
        $(".console").append('<p ' + (typeof classname == undefined ? '' : 'class="' + classname + '"') + '>' + text + '</p>');
        $(".cursor").remove();
        $("p:last").append('<span class="cursor"></span>');

        if ($("p").length > 25) {
            $("p")[0].remove();
        }

        $(".console").animate({ scrollTop: $(document).height() }, "slow");
    }, 150);
    return false;
}

$(window).keyup(function (e) {
    let charCode = e.which;
    if (e.which == 13) {
        parseCommand($("p:last").text());
    } else if (e.which == 43 || e.which == 8) {
        $("p:last").html($("p:last").text().slice(0, -1));
        e.preventDefault();
    } else if (e.which == 38) {
        $("p:last").append(lastCommand);
        lastCommand = "";
    } else {
        $("p:last").append(String.fromCharCode(e.which));
    }
    $(".cursor").remove();
    $("p:last").append('<span class="cursor"></span>');
});

$(document).on('keydown', function (e) {
    const $target = $(e.target || e.srcElement);
    if (e.keyCode == 8 && !$target.is('input,[contenteditable="true"],textarea')) {
        e.preventDefault();
    }
});
});