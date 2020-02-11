$(document).ready(function () {

//Start function
function go() {
    const startText = [
        "----------",
        "Hello !",
        "Type 'help' to check the commands",
        "----------"
    ];
    for (let i = 0; i < startText.length; i++) {
        newLine(startText[i], "yellow");
    }
    newLine("");
}

go();

//help function
function help() {
    const commands = [
        "-------",
        "All:",
        "Companies - Check the list of companies",
        "Clear - cleans the terminal",
        "Start - shows the start message",
        
        "-------"
    ];
    for (let i = 0; i < commands.length; i++) {
        newLine(commands[i], "yellow");
    }
    newLine("");
}

function companies() {
    const company = [
        "-------",
        "1. Starks",
        "1. Zibo",
        "1. Arkan",
        "-------"
    ];
    for (let i = 0; i < company.length; i++) {
        newLine(company[i], "yellow");
    }
    newLine("");
}

function newLine(text, classname) {
    window.setTimeout(function () {
        $(".console").append('<p ' + (typeof classname == undefined ? '' : 'class="' + classname + '"') + '>' + text + '</p>');
        $(".cursor").remove();
        $("p:last").append('<span class="cursor"></span>');

        if ($("p").length > 23) {
            $("p")[0].remove();
        }

        $(".console").animate({ scrollTop: $(document).height() }, "slow");
    }, 150);
    return false;
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
            default:
                newLine("Command '" + command.split(" ")[0] + "' was not recognised", "red");
                newLine("");
                break;
        }
    }
    return true;
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