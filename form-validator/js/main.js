class Validator {
  hasErroes = false;
  invalidElements = [];

  definedRules = {
    required: (input) => {
      // console.log(input);
      if (input.value.trim() !== "") {
        return true;
      }
      this.hasErroes = true;
      this.invalidElements.unshift({
        input,
        message: "requierd field",
      });
    },
    min: (input, value) => {
      if (input.value.length >= parseInt(value)) {
        return true;
      }
      this.hasErroes = true;
      this.invalidElements.unshift({
        input,
        message: "min length is " + value,
      });
    },
    digits: (input) => {
      // console.log(input);
      const age = document.querySelector("#age").value;
      // console.log(age);
      if (!isNaN(age)) {
        return true;
      }
      this.hasErroes = true;
      this.invalidElements.unshift({
        input,
        message: "Enter numbers",
      });
    },
  };

  constructor(form) {
    form = document.querySelector(form);
    this.form = form;

    form.onsubmit = (e) => {
      e.preventDefault();

      this.hasErroes = false;
      this.invalidElements = [];
      this.removeErrors();

      const inputs = form.querySelectorAll("[data-rules]");

      for (const input of inputs) {
        const givenRules = input.getAttribute("data-rules").split("|");

        for (const givenRule of givenRules) {
          let rule = givenRule;
          let args = null;
          let fld = null;
          if (givenRule.indexOf(":") > -1) {
            const splitedRule = givenRule.split(":");
            rule = splitedRule[0];
            args = splitedRule[1];
          }
          if (this.definedRules.hasOwnProperty(rule)) {
            // console.log(input, args);
            this.definedRules[rule](input, args);
            // console.log(input);
          }
        }
      }
      if (this.hasErroes) {
        e.preventDefault();
        for (const erroe of this.invalidElements) {
          const message = document.createElement("p");
          message.classList.add("validator-err");
          message.innerHTML = erroe.message;
          //add an element after another element
          const input = erroe.input;
          input.parentNode.insertBefore(message, input.nextSibling);
        }
      }
    };
  }

  //remove prev error messages
  removeErrors() {
    const errors = this.form.querySelectorAll("p.validator-err");
    errors.forEach((error) => {
      error.remove();
    });
  }
}

new Validator("#my-form");
