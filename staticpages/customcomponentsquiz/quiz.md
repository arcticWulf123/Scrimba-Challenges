1. What is a React component?
- A react component is a bundled up set of codes that can be reused anytime
2. What's wrong with this code?

```
function myComponent() {
    return (
        <small>I'm tiny text!</small>
    )
}
```
- you cannot have a parentless element, the element should be wrapped inside a div, article or whatever element. (wrong, answer was functions should be in pascal case not camelcase)
3. What's wrong with this code?

```
function Header() {
    return (
        <header>
            <img src="./react-logo.png" width="40px" alt="React logo" />
        </header>
    )
}

root.render(Header())
```
-you cannot call the function with () instead use <yourFunctionName />
