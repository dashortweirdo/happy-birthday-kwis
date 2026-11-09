const CORRECT_PASSWORD = "2026"; 
let currentInput = "";
let isAnimating = false;

function pressKey(num) {
    if (isAnimating) return;
    if (currentInput.length < 4) {
        currentInput += num;
        updateDisplay();
        
        if (currentInput.length === 4) {
            isAnimating = true;
            setTimeout(() => {
                if (currentInput === CORRECT_PASSWORD) {
                    // Triggers multi-page cross-document navigation layout
                    window.location.href = "landing.html";
                } else {
                    triggerWrongAnimation();
                }
            }, 200);
        }
    }
}

function triggerWrongAnimation() {
    const lockModule = document.getElementById("lock-module");
    const slotsWrapper = document.getElementById("slots-wrapper");
    
    slotsWrapper.classList.add("error");
    lockModule.classList.add("shake-active");
    
    setTimeout(() => {
        lockModule.classList.remove("shake-active");
        slotsWrapper.classList.remove("error");
        clearKeys();
        isAnimating = false;
    }, 400);
}

function clearKeys() {
    if (isAnimating) return;
    currentInput = "";
    updateDisplay();
}

function updateDisplay() {
    for (let i = 0; i < 4; i++) {
        const slot = document.getElementById(`slot-${i}`);
        if (slot) {
            slot.innerText = i < currentInput.length ? "⭐" : "";
        }
    }
}



