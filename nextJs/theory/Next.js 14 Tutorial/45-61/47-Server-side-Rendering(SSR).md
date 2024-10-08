### Recollecting Drawbacks of CSR

- Reilance on JavaScript for rendering content on the client side can significantly hurt SEO, as search engines might struggle to index the content properly
- The user experience can suffer from slow load times, as the browser has to download, parse, and execute JavaScript before the user sees any meaningful content on the page

### Server-side Solutions

- It significantly improves SEO because search engines can easily index the server-rendered content
- Users can immediately see the page HTML content, instead of a blank screen or loading spinner

### Hydration

- During hydration, React takes control in the browser, reconstructing the component tree in memory based on the static HTML that was served
- It carefully plans the placement of interactive elements within this tree. Then, React proceeds to bind the necessary JavaScript logic to these elements
- This involves initializing the application state, attaching event handles for actions such as clicks and mouseovers and setting up any other dynamic functionalities required for a fully interactive user experience

### Server-side Solutions

1. Static Site Generation (SSG)
2. Server-Side Rendering (SSR)

- SSG occurs at build time, when the application is deployed on the server. This results in pages that are already rendered and ready to serve. It is ideal for content that doesn't chnage often, like blog posts
- SSR, on the other hand, renders pages on-demand in response to user requests. It is suitable for personalized content like social media feeds, where the HTML depends on the logged-in user
- Server-Side Rendering (SSR) was a significant improvement over Client-Side Rendering (CSR), providing faster initial page loads and better SEO

### Drawbacks of SSR

1. You have to fetch everything before you can show anything
   - Components cannot start rendering and then pause or "wait" while data is still being loaded
   - If a component needs to fetch data from a database or another source (like an API), this fetching must be completed before the server can begin rendering the page
   - This can delay the server's response time to the browser, as the serve must finish collecting all necessary data before any part of the page can be sent to the client
2. You have to load everything before you can hydrate anything
   - For successful hydration, where React adds interactivity to the server-rendered HTML, the component tree in the browser must exactly match the server-generated component tree
   - This means that all the JavaScript for the components must be loaded on the client before you can start hydrating any of them
3. You have to hydrate everything before you can interact with anything
   - React hydrates the component tree in a single pass, meaning once it starts hydrating, it won't stop until it's finished with the entire tree
   - As a consequence, all components must be hydrated before you can interact with any of them.

## Summary

### Drawbacks of SSR - All or Nothing Waterfall

1. having to load the data for the entire page
2. load the JavaScript for the entire page, and
3. hydrate the entire page

- create an "all or nothing" waterfall problem that spans from the server to the client, where each issue must be resolved before moving to the next one
- This is inefficient if some parts of your app are slower than others, as is often the case in real-world apps
