// making box5 appear after 5 seconds or so

window.addEventListener('load', () => {
    setTimeout(() => {
        const box = document.getElementById('box5');
        box.style.opacity = 1;
    }, 4000);
});

// interacting with box5 creates a bsod simulation

document.getElementById('bsod-link').addEventListener('click', function (e) {
    e.preventDefault(); 

    document.body.className = 'bsod';

    function typeWriter(element, text, speed) {
      let i = 0;
      const interval = setInterval(function() {
        element.innerHTML += text.charAt(i);
        i++;
        if (i > text.length - 1) {
          clearInterval(interval); 
        }
      }, speed);
    }

    const text = `A problem has been detected, and Windows has been shut down to prevent damage to your computer.
    
If this is the first time you've seen this stop error screen, restart your computer. If this screen appears again, follow these steps:
    
Check to make sure any new hardware or software is properly installed. If this is a new installation, ask your hardware or software manufacturer for any Windows updates you might need.
    
Technical Information:
    
*** STOP: 0x0000007B (0xFFFFF880009A9928, 0xFFFFFFFFC0000034, 0x0000000000000000, 0x0000000000000000)
    
*** Collecting crash dump data...`;

    document.body.innerHTML = '';    

    const body = document.getElementById('fpbody');
    typeWriter(body, text, 10);
  });