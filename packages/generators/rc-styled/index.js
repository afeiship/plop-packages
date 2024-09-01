export default function (plop) {
  plop.setGenerator("rc:comp", {
    description: "Create a component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is this component's name?",
      },
      {
        type: "input",
        name: "element",
        message: "HTML element (div is default)",
        default: "div",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/components/{{dashCase name}}/index.tsx",
        templateFile: "./tpl.tsx.hbs",
      },
    ],
  });
}
