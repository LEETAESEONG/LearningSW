### The Evolution of React

- CSR => SSR => Suspense for SSR
- Suspense for SSR brought us closer to a seamless rendering experience
  **Chalenges**
- Increased bundle sizes leading to excessive downloads for users
- Unnecessary hydration delaying interactivity
- Extensive client-side processing that could result in poor performance

### React Server Componets (RSC)

- React Server Components (RSC) represent a new architecture designed by the React team
- This approach aims to leverage the strengths of both server and client environments, optimizing for efficiency, load times, and interactivity
- The architecture introduces a dual-component model
  - Client Components
  - Server Components
- This distinction is not based on the functionality of the components but rather on where they execute and the specific environments they are designed to interact with

### Client Components

- Client Components are the familliar React components we've been using
- They are typically rendered on the client-side (CSR) but, they can also be rendered to HTML on the server (SSR), allowing users to immediately see the page's HTML content rather than a blank screen
- Components that primarily run on the client but can (and should) also be executed once on the server as an optimization strategy
- Client Components have access to the client environment, such as the browser, allowing them to use state, effects, and event listeners to handle interactivity and also access browser-exculsive APIs like geolocation or localStorage, allowing you to build UI for specific use cases
- In fact, the term "client Component" doesn't signify anything new; it simply helps differentiate these components from the newly introduced Server Components

### Server Components

- Server Components represent a new type of React component specifically designed to operate exclusively on the server
- And unlike client components, their code stays on the server and is never downloaded to the client
- This design choice offers multiple benefits to React applications

### Benefits of Server Components

**1. Reduced Bundle Sizes**

- Server Components do not send code to the client, allowing large dependencies to remain server-side
- This benefits users with slower internet connections or less capable devices by eliminating the need to download, parse, and execute JavaScript for these components
- Additionally, it removes the hydration step, speeding up app loading and interaction

**2. Direct Access to Server-side Resources**

- By having direct access to server-side resources like databases or file systems, Server Components enable efficent data fetching and rendering without needing additional client-side processing
- Leveraging the server's computational power and proximity to data sources, they manage compute-intensive rendering tasks and send only interactive pieces of code to the client

**3. Enhanced Security**

- Server Component's exclusive server-side execution enhances security by keeping sensitive data and logic, including tokens and API keys, away from the client-side

**4. Improved Data Fetching**

- Server Components enhance data fetching efficiency
- Typically, when fetching data on the client-side using useEffect, a child component can not begin loading its data until the parent component has finished loading its own
- This sequential fetching of data often leads to poor performance
- The main issue is not the round trips themselves, but that these round trips are made from the client to the server
- Server Components enable applications to shift these sequential round trips to the server side
- By moving this logic to the server request is reduced, and overall performance is improved, eliminating client-server "waterfalls"

**5. Caching**

- Rendering on the server enables caching of the results, which can be reused in subsequent requests and across different users
- This approach can significantly improve performance and reduce costs by minimizing the amount of rendering and data fetching required for each request

**6. Faster Initial Page Load and First Contentful Paint**

- Sixth, initial Page Load and First Contentful Paint(FCP) are significantly improved with Server Components
- By generating HTML on the server, pages become immediately visible to users without the delay of downloading, parsing, and executing JavaScript

**7. Improved SEO**

- Regarding Search Engine Optimization(SEO), the server-rendered HTML is fully accessible to search engine bots, enhancing the indexability of your pages

**8. Efficient Streaming**

- Server Components allows the rendering process to be divided into manageable chunks, which are then streamed to the client as soon as they are ready
- This approach allows users to start seeing parts of the page eariler, eliminating the need to wait for the entire page to finish rendering on the server

### RSC contd.

- Server Components take charge of data fetching and static rendering, while Client Components are tasked with rendering the interactive elements of the application
- The bottom line is that the RSC architecture enables React applications to leverage the best aspects of both server and client rendering, all while using a single language, a single framework, and a cohesive set of APIs

### RSC Key Takeaways

- RSC introduce a new way of building React apps by separating components into two types: Server Components and Client Components
- Server Components run only on the server, accessing data and preparing content without being sent to the browser, which makes the app faster for users because less information needs to download
- They can't manage clicks or interactions directly
- Client Components, on the other hand, work in the user's browser and handle all the interactive parts of the app, like clicking and typing
- They can also be rendered on the server for a fast initial load of the site. This setup helps make websites faster, more secure, and easier for everyone to use, no matter where they are or what device they're using

### RSC and Next.js

- "This deep dive into the evolution of rendering in React is great, Vishwas, but how exactly does it help understand rendering in Next.js? What's the connection?"
- The App Router in Next.js is build around the RSC architecture
- All the features and benefits we've discussed are already baked into the latest version of Next.js
- By understanding the evolution of React's rendering, you now have the necessary background for the rest of this section which will focus on Next.js
