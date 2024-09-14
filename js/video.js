import {createDiv} from './main.js';
import {createButton} from './main.js';
import {bodyLock} from './main.js';
import {unlockBody} from './main.js';

const iframe = document.createElement('iframe');
iframe.setAttribute('src', 'https://www.youtube.com/embed/KCJ4pdavu-g?si=7-45REOXKm-ncZ5w');
iframe.setAttribute('title', 'YouTube video player');
iframe.setAttribute('frameborder', '0');
iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share');
iframe.setAttribute('referrerpolicy', 'strict-origin-when-cross-origin');
iframe.setAttribute('allowfullscreen', '');

window.addEventListener('DOMContentLoaded', function() {
    const play = document.querySelector('.play');

    play.addEventListener('click', function() {
        const backdrop = createDiv('backdrop');
        const videoContainer = createDiv('video-container');
        const video = createDiv('video');
        const cross = createButton('modalCross', 'X');
        
        document.body.append(backdrop);
        document.body.append(videoContainer);
        videoContainer.append(video);
        video.append(cross)
        video.append(iframe);
        bodyLock();

        videoContainer.addEventListener('click', () => {
                videoContainer.remove();
                backdrop.remove();
                unlockBody();
        });
    
        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape') {
                videoContainer.remove();
                backdrop.remove();
                unlockBody();
            }
        });
    });
});
