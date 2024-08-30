export const elements = {
  input: "term_input",
  main: "app_main",
};

export const getGlobalElement = (element: keyof typeof elements) => {
  return document.getElementById(elements[element]);
};
