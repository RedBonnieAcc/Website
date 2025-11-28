const container = document.querySelector('.container');
const totalDoors = 24; // 4 columns x 6 rows

const today = new Date();
//const currentDay = today.getDate();
//const currentMonth = today.getMonth();

const currentDay = 7;  // Values change if neeed be
const currentMonth = 11; // Values change if neeed be
 
// Example: content for each door
// Each door can either have a video or a link
const doorContent = {
    1: { type: 'link', src: 'https://youtu.be/BVMAw2EH-cA' },
    2: { type: 'link', src: 'https://www.youtube.com/watch?v=S4Y48wUaRoA' },
    3: { type: 'link', src: 'https://youtu.be/fl2uKmio8lQ' },
    4: { type: 'link', src: 'https://youtu.be/bgzcctgbT-I' },
    5: { type: 'link', src: 'https://youtu.be/qO1rGpQpl_o' },
    6: { type: 'link', src: 'https://youtu.be/tV-JaXnH-qY' },
    7: { type: 'link', src: 'https://youtu.be/iI9vYl10PlM' },
    // ...add more doors as needed
};
// Create a display area below the calendar for videos
const display = document.createElement('div');
display.classList.add('display-area');
display.style.marginTop = '20px';
display.style.textAlign = 'center';
container.insertAdjacentElement('afterend', display);



if (currentMonth === 11) { // December
      for (let i = 1; i <= totalDoors; i++) {
        const door = document.createElement('div');
        door.classList.add('door');
        door.textContent = i;

        if (i <= currentDay) {
            door.addEventListener('click', () => {
                if (!door.classList.contains('opened')) {
                    door.classList.add('opened');

                    const content = doorContent[i];

                    if (content) {
                        if (content.type === 'video') {
                            display.innerHTML = ''; // clear old content
                            const video = document.createElement('video');
                            video.src = content.src;
                            video.controls = true;
                            video.autoplay = true;
                            video.style.width = '70%';
                            display.appendChild(video);
                        } else if (content.type === 'link') {
                            window.open(content.src, '_blank'); // open in new tab
                        }
                    }
                }
            });
        } else {
            door.style.cursor = 'not-allowed';
            door.style.opacity = 0.5;
        }

        container.appendChild(door);
    }
} else { // Not December
    const message = document.createElement('div');
    message.textContent = "Reveniți în decembrie să deschidem ușile!";
    message.style.fontSize = "24px";
    message.style.fontWeight = "bold";
    message.style.textAlign = "center";
    message.style.padding = "50px";
    message.style.color = "white";
    container.appendChild(message);

    // Optional: change container background and center message
    container.style.background = "black";
    container.style.display = "flex";
    container.style.justifyContent = "center";
    container.style.alignItems = "center";
}




