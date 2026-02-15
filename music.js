

        const bgMusic = document.getElementById('bgMusic');
        const musicToggle = document.getElementById('musicToggle');
        const musicIcon = musicToggle.querySelector('i');
        const musicText = musicToggle.querySelector('span');

        // Set volume (30%)
        bgMusic.volume = 0.4;

        // Play on button click
        musicToggle.addEventListener('click', function () {
            if (bgMusic.paused) {
                // Try to play
                bgMusic.play().then(() => {
                    // Success
                    musicIcon.className = 'fas fa-volume-up';
                    musicText.textContent = 'Music ON';
                    this.style.background = 'linear-gradient(45deg, #00ffff, #00ff88)';
                    console.log('🎵 Shiva music playing...');
                }).catch(error => {
                    // Failed - ask user to click anywhere
                    alert('🙏 Please click anywhere on the page first, then click Play Music again');
                    console.log('Autoplay blocked:', error);
                });
            } else {
                // Pause music
                bgMusic.pause();
                musicIcon.className = 'fas fa-volume-mute';
                musicText.textContent = 'Play Music';
                this.style.background = 'linear-gradient(45deg, #8a2be2, #ff00ff)';
            }
        });

        // Optional: Auto-play on first page interaction
        let musicAutoStarted = false;
        document.addEventListener('click', function initAudio() {
            if (!musicAutoStarted) {
                bgMusic.play().catch(e => console.log('Auto-play prevented'));
                musicAutoStarted = true;
            }
        }, { once: true });