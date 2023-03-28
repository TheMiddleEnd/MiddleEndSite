//Using typed.js to create typewriter effect

const retype1 = new Typed('#retype1', {
    strings: ['teachers', 'researchers^4000', 'businesses^4000', 'clients'],
    typeSpeed: 50,
    startDelay: 2000,
    backSpeed: 35,
});

const retype2 = new Typed('#retype2', {
    strings: ['students', 'thinkers^4000', 'innovators^4000', 'developers'],
    typeSpeed: 50,
    startDelay: 3400,
    backSpeed: 50,
});

const retype3 = new Typed('#retype3', {
    strings: ['tools', 'results^4000', 'solutions^4000', 'the future'],
    typeSpeed: 50,
    startDelay: 4800,
    backSpeed: 50,
});

setTimeout(() => {
    $("#retype3").addClass("underlineThickR");
}, 17350);

let count = 0;

setInterval(() => {
    $("#missionTitle").fadeTo(200, 0, () => {
        if(count % 2) {
            $("#missionTitle").html('A simpler way for developers to volunteer and make <span class="underlineG">real world impacts.</span>');
        } else {
            $("#missionTitle").html('A better way for clients to get solutions - <span class="underlineG">at no cost.</span>');
        }
    
        $("#missionTitle").fadeTo(750, 1);
    });
    count++;
}, 4000);