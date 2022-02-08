import { extend } from "vee-validate";
import { required, alpha, between, min  } from "vee-validate/dist/rules";

extend("required", {
  ...required,
  message: "{_field_} jest wymagane"
});

extend("between", {
    ...between,
    message: "{_field_} sd"
  });

extend("min", {
  ...min,
  message: "{_field_} musi zawirac więcje {_length_}"
});

extend("alpha", {
    ...alpha,
    message: "{_field_} musi sie składać ze znaków"
  });

extend("decimal", {
    validate: (value, { decimals = '*', separator = '.' } = {}) => {
      if (value === null || value === undefined || value === '') {
        return {
          valid: false
        };
      }
      if (Number(decimals) === 0) {
        return {
          valid: /^-?\d*$/.test(value),
        };
      }
      const regexPart = decimals === '*' ? '+' : `{1,${decimals}}`;
      const regex = new RegExp(`^[-+]?\\d*(\\${separator}\\d${regexPart})?([eE]{1}[-]?\\d+)?$`);
  
      return {
        valid: regex.test(value),
      };
    },
    message: 'Pole {_field_} musi byc liczbą'
  })