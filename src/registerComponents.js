let components = [];

components.push(import.meta.globEager("./components/layout/*.vue"));
components.push(import.meta.globEager("./components/ui/*.vue"));
components.push(import.meta.globEager("./assets/icons/*.vue"));

export default {
  install(app) {
    components.forEach((el) =>
      Object.entries(el).forEach(([path, m]) => {
        const componentName = path
          .split("/")
          .pop()
          .replace(/\.\w+$/, "")
          .replace(/(^|-)(\w)/g, (_, __, char) => char.toUpperCase());

        app.component(`${componentName}`, m.default);
      })
    );
  },
};
