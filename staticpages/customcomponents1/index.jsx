import { createRoot } from "react-dom/client";
const root = createRoot(document.getElementById("root"));

/**
 * Challenge (part 1):
 * Create a custom "Page" component
 *
 * It should return an ordered list with the reasons why you're
 * excited to be learning React :)
 *
 * Render the Page component.
 */

root.render(
    <CustomPage />
);

function CustomPage() {
    return (
        <ol>
            <li>React is the most popular Javascript library</li>
            <li>React has a cool logo</li>
            <li>I can use this to bolster my hireability</li>
        </ol>
    )
}
