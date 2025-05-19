// js/ui.js
import { toggleDirectionalLightShadow } from './lights.js';
import { toggleObjectsShadowProperties } from './objects.js';
import { toggleRendererShadows } from './renderer.js';

let shadowsEnabled = true; // State awal, harus sinkron dengan state di main.js

function setupShadowToggle(scene) {
    const toggleButton = document.getElementById('toggleShadowBtn');
    if (!toggleButton) {
        console.error("Shadow toggle button not found!");
        return;
    }

    // Update teks tombol berdasarkan state awal
    updateButtonText();

    toggleButton.addEventListener('click', () => {
        shadowsEnabled = !shadowsEnabled;

        // 1. Toggle shadow casting pada sumber cahaya
        toggleDirectionalLightShadow(shadowsEnabled);

        // 2. Toggle castShadow/receiveShadow pada objek
        toggleObjectsShadowProperties(shadowsEnabled);

        // 3. Toggle shadow map pada renderer dan update material
        toggleRendererShadows(shadowsEnabled, scene);

        // 4. Update teks tombol
        updateButtonText();

        console.log(`Shadows ${shadowsEnabled ? 'Enabled' : 'Disabled'}`);
    });

    function updateButtonText() {
        if (shadowsEnabled) {
            toggleButton.textContent = 'Toggle Shadows (ON)';
            toggleButton.classList.add('active');
        } else {
            toggleButton.textContent = 'Toggle Shadows (OFF)';
            toggleButton.classList.remove('active');
        }
    }
    // Set initial state for button (in case this module is loaded after main)
    // shadowsEnabled is already set from main.js or its default
    updateButtonText(shadowsEnabled);
}

// Fungsi untuk menyetel state bayangan awal dari main.js
function setInitialShadowState(isEnabled) {
    shadowsEnabled = isEnabled;
}

export { setupShadowToggle, setInitialShadowState };