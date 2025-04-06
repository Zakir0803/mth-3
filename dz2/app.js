function makeLight(index){
    const light = document.createElement("div");
    light.classList.add("fa-light");
    light.dataset.index = index;
    return light;
}

const lights = document.querySelector(".traffic-light");
const infoText = document.querySelector(".info");

for (let i=0; i < 3; i++) {
 const light = makeLight(i+1);
 lights.appendChild(light);  
}

const lightIcons = document.querySelectorAll(".fa-light");

for(const lightIcon of lightIcons){
    lightIcon.onclick = function () {

        const lightIndex = Number (lightIcon.dataset.index);

        for (const li of lightIcons) {
            li.classList.remove("red", "yellow", "green");
        }

        switch (lightIndex) {
            case 1:
                lightIcon.classList.add("red");
                infoText.dataset.value = "stop";
                break;
            case 2:
                lightIcon.classList.add("yellow");
                infoText.dataset.value = "wait";
                break;
            case 3:
                lightIcon.classList.add("green");
                infoText.dataset.value = "go";
                break;
        }
    };
}