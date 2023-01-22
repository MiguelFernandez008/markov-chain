(function () {
    const orden = 6;
    const ngramas = {};
    const mForm = document.getElementById("generate");
    const results = document.getElementById("generated");
    const loadNgrama = () => {
        const seed = document.getElementById("seed");
        for (let i = 0; i < seed.value.length - orden; i++) {
            const ngrama = seed.value.substring(i, i + orden);
            if (!ngramas[ngrama]) {
                ngramas[ngrama] = [];
            }
            ngramas[ngrama].push(seed.value.charAt(i + orden));
        }
        console.log(ngramas);
    };
    const doMArkov = () => {
        results.innerText = "";
    };
    const submitForm = (e) => {
        e.preventDefault();
        loadNgrama();
        doMArkov();
    };
    mForm.addEventListener("submit", submitForm);
})();
