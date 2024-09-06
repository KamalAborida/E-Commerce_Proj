# Typo

- Use PascalCase for component file names and component functions.
```
// In Banner.tsx
const Banner = () => { ... }
```

- Use Block-Element-Modifier (BEM) for class names inside your SCSS files.
```
// In _banner.scss
.banner { ... }              // Block
.banner__title { ... }        // Element
.banner--large { ... }        // Modifier
```

- Use camelCase for JavaScript variable and function names.
```
const handleBannerClick = () => { ... }
```

- Use kebab-case or camelCase for SCSS variables and mixins.
```
// _variables.scss
$primary-color: #333;
```

---

- Use functional components and hooks, and avoid unnecessary state when it's not needed. (don't use useState() if not needed)

- Handle errors gracefully, especially in asynchronous code. Always try/catch blocks in async functions and show error messages when necessary.

- Destructure props and state for easier and more readable code.
  - `const Component = ({ title }) => <div>{title}</div>;`

- Use React.memo and hooks like useMemo and useCallback to optimize re-rendering of components when necessary.

- Avoid complex logic inside useEffect: Keep the code inside your hooks clean. If there's too much happening inside useEffect, move the logic into a separate function.