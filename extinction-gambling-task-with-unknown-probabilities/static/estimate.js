document.addEventListener("DOMContentLoaded", function () {
    console.log("DOMContentLoaded executed");

    // Function to map slider position to logarithmic scale
    function logslider(position) {
        // position will be between 0 and 100
        const minp = 1;
        const maxp = 1000;

        // The result should be between 100 and 10,000,000
        const minv = Math.log(1);
        const maxv = Math.log(999.9);

        // Calculate adjustment factor
        const scale = (maxv - minv) / (maxp - minp);

        return Math.exp(minv + scale * (position - minp));
    }

    function updateOutput() {
        console.log("updateOutput triggered");

        // Update slider 1
        const slider1 = document.getElementById("slider1");
        const output1 = document.getElementById("output1");
        if (slider1 && output1) {
            output1.textContent = slider1.value + "%";
        }

        // Update slider 2
        const slider2 = document.getElementById("slider2");
        const output2 = document.getElementById("output2");
        if (slider2 && output2) {
            output2.textContent = slider2.value + " times";
        }

        // Update slider 3
        const slider3 = document.getElementById("slider3");
        const output3 = document.getElementById("output3");
        if (slider3 && output3) {
            const position = parseInt(slider3.value, 10); // Slider value (position)
            console.log("Slider 3 position:", position); // Debugging

            const mappedValue = logslider(position);
            console.log("Mapped value:", mappedValue); // Debugging

            output3.textContent = mappedValue.toFixed(1); // Display rounded value
        }
    }

    // Attach event listeners to sliders
    const sliders = document.querySelectorAll('input[type="range"]');
    sliders.forEach((slider) => {
        slider.addEventListener("input", updateOutput);
    });

    // Initialize outputs
    updateOutput();
});



