document.addEventListener("DOMContentLoaded", function() {
    new fullpage('#fullpage', {
        autoScrolling: true,
        navigation: true,
        anchors: ['start', 'about', 'contact'],
        navigationTooltips: ['Start', 'O mnie', 'Kontakt'],
        showActiveTooltip: true,
    });
});
