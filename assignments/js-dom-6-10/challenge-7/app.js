document.addEventListener('DOMContentLoaded', () => {
    const accordinItems = document.querySelectorAll(".accordion-item");

    accordinItems.forEach(accordin => {
        const accordionButton = accordin.querySelector(".accordion-button");
        const accordionContent = accordin.querySelector(".accordion-content");
        const arrow = accordionButton.querySelector(".arrow");
        let isAnyOpen = false;

        accordionButton.addEventListener('click', () => {

            if (accordionContent.style.maxHeight === "0px" || accordionContent.style.maxHeight === "") {
                
                if (isAnyOpen) {
                    accordionContent.style.maxHeight = "0";
                    accordionContent.style.overflow = "hidden";
                    // accordionButton.classList.remove("active");
                    // arrow.classList.remove("active");
                    isAnyOpen = false;
                }
                
                accordionContent.style.maxHeight = "200px";
                accordionContent.style.overflow = "visible";
                accordionButton.classList.add("active");
                arrow.classList.add("active");
                isAnyOpen = true;
            } else {
                accordionContent.style.maxHeight = "0";
                accordionContent.style.overflow = "hidden";
                accordionButton.classList.remove("active");
                arrow.classList.remove("active");
            }
            
        });


    });
});
