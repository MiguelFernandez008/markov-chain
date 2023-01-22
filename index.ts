(function () {
  const orden: number = 6;
  const ngramas: { [key: string]: Array<string> } = {};
  const mForm: HTMLElement = document.getElementById("generate");
  const results: HTMLElement = document.getElementById("generated");

  const loadNgrama = (): void => {
    const seed = document.getElementById("seed") as HTMLInputElement;
    for (let i = 0; i < seed.value.length - orden; i++) {
      const ngrama = seed.value.substring(i, i + orden);
      if (!ngramas[ngrama]) {
        ngramas[ngrama] = [];
      }
      ngramas[ngrama].push(seed.value.charAt(i + orden));
    }
    console.log(ngramas);
  };

  const doMArkov = (): void => {
    results.innerText = ""
  }

  const submitForm = (e: SubmitEvent): void => {
    e.preventDefault();
    loadNgrama();
    doMArkov();
  };

  mForm.addEventListener("submit", submitForm);
})();
