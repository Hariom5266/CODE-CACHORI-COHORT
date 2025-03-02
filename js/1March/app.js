document.addEventListener('DOMContentLoaded', () => {
    const colorPicker = document.getElementById('colorPicker');
    const createBtn = document.getElementById('createBtn');
    const div = document.querySelector('.container');

    function dynamicColorBtn() {
        return function () {
            const newBtn = document.createElement("button");
            const selectedColor = colorPicker.value;

            newBtn.style.backgroundColor = selectedColor;
            newBtn.textContent = selectedColor;

            const luminance = getLuminance(selectedColor);

            if (luminance > 0.5) {
                newBtn.style.color = "#000000";
            } else {
                newBtn.style.color = "#ffffff";
            }

            newBtn.addEventListener('click', () => {
                document.body.style.backgroundColor = newBtn.style.backgroundColor;
            });

            div.appendChild(newBtn);
        };
    }

    createBtn.addEventListener('click', dynamicColorBtn());

    // luminance formula
    function getLuminance(color) {
        let r, g, b;

        if (color[0] === '#') {
            r = parseInt(color.substr(1, 2), 16);
            g = parseInt(color.substr(3, 2), 16);
            b = parseInt(color.substr(5, 2), 16);
        } else if (color.startsWith('rgb')) {
            const rgbValues = color.match(/\d+/g);
            r = parseInt(rgbValues[0]);
            g = parseInt(rgbValues[1]);
            b = parseInt(rgbValues[2]);
        }

        r /= 255;
        g /= 255;
        b /= 255;

        const a = [r, g, b].map(function (v) {
            return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
        });

        const luminance = 0.2126 * a[0] + 0.7152 * a[1] + 0.0722 * a[2];

        return luminance;
    }
});
