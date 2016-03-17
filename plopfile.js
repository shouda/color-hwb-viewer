module.exports = (plop) => {
  plop.setGenerator('component', {
    description: 'Generate a new component',
    prompts: [
      {
        type: 'input',
        name: 'componentName',
        message: 'What is the name of the new component?',
        validate: (value) => {
          if (/.+/.test(value.trim())) { return true; }
          return 'Component name is required.';
        },
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/components/{{componentName}}.jsx',
        templateFile: 'tpl/component.jsx.hbs',
        abortOnFail: true,
      },
      // {
      //   type: 'add',
      //   path: 'src/css/components/{{componentName}}/style.css',
      //   templateFile: 'tpl/component.css.hbs',
      //   abortOnFail: true,
      // },
    ],
  });
  plop.setGenerator('stateless', {
    description: 'Generate a new stateless component',
    prompts: [
      {
        type: 'input',
        name: 'componentName',
        message: 'What is the name of the new stateless component?',
        validate: (value) => {
          if (/.+/.test(value.trim())) { return true; }
          return 'Component name is required.';
        },
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/components/{{componentName}}.jsx',
        templateFile: 'tpl/stateless.jsx.hbs',
        abortOnFail: true,
      },
      // {
      //   type: 'add',
      //   path: 'src/css/components/{{componentName}}/style.css',
      //   templateFile: 'tpl/component.css.hbs',
      //   abortOnFail: true,
      // },
    ],
  });
};
