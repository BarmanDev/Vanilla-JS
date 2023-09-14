const screen = document.querySelector(".screen");
const btn = document.querySelectorAll(".btn");

btn.forEach(btn => {
    btn.addEventListener("click", () =>{
        const btnPress = btn.textContent;

        if (btn.id === "c"){
            screen.textContent = "0";
            return 0;
        }

        if(btn.id === "delete"){
            if(screen.textContent.length === 1 || screen.textContent === "Error!"){
                screen.textContent = 0;
            } else{
            screen.textContent = screen.textContent.slice(0, -1);
            }
            return;
        }

        if (btn.id === "equals") {
            try {
                screen.textContent = eval(screen.textContent);
            } catch {
                screen.textContent = "Error!";
            }
            return;
        }

        if(screen.textContent === "0" || screen.textContent === "Error!"){
            screen.textContent = btnPress;
        }else{
            screen.textContent += btnPress;
        }

    })
})