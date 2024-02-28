document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('profile-infos')
    const displayer = document.getElementById('displayer');
    const coordinates = document.getElementById('coordinates');
    coordinates.style.visibility = 'hidden';

    displayer.addEventListener('mouseenter', function() {
        coordinates.style.visibility = 'visible';
    });

    container.addEventListener('mouseleave', function() {
        coordinates.style.visibility = 'hidden';
    })

});
