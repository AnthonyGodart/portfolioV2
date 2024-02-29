document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('profile-infos');
    const displayer = document.getElementById('displayer');
    const coordinates = document.getElementById('coordinates');
    coordinates.style.height = '0';
    coordinates.style.overflow ='hidden';
    let isOpen = false;
    let isAnimating = false; 

    displayer.addEventListener('mouseenter', function() {
        
        if (!isOpen && !isAnimating) {
            isAnimating = true; 
            isOpen = true;
            let height = 0;
            const maxHeight = coordinates.scrollHeight;
            const animationDuration = 500; 
            const intervalDuration = 10; 
            
            const intervalId = setInterval(function() {
                
                height += maxHeight / (animationDuration / intervalDuration);
                coordinates.style.height = (height + 3) + 'px';
                                
                if (height >= maxHeight) {
                    clearInterval(intervalId);
                    isAnimating = false; 
                }
            }, intervalDuration);
        }
    });

    container.addEventListener('mouseleave', function() {
        
        if (isOpen && !isAnimating) {
            isAnimating = true;
            isOpen = false;
            let height = coordinates.scrollHeight;
            const animationDuration = 500;
            const intervalDuration = 10;
            
            const intervalId = setInterval(function() {
                
                height -= coordinates.scrollHeight / (animationDuration / intervalDuration);
                coordinates.style.height = height + 'px';
                                
                if (height <= 0) {
                    clearInterval(intervalId);
                    coordinates.style.height = '0';
                    isAnimating = false;
                }
            }, intervalDuration);
        }
    });
});
