### Drawbacks of SSR - All or Nothing Waterfall

1. Data fetching must be completed before the server can begin rendering HTML
2. The JavaScript required for the components needs to be fully loaded on the client side before the hydration process can start
3. All components have to be hydrated before they become interactive

- These issues contribute to an 'all-or-nothing' waterfall scenario, resulting in inefficiencies, especially if certain parts of your application are slower than others

### Suspense SSR Architecture

- Use the <Suspense> component to unlock two major SSR features:
  1. HTML streaming on the server
  2. Selective hydration on the client

### HTML streaming on the Server

- You don't have to fetch everything before you can show anything
- If a particular section delays the initial HTML, it can be seamlessly integrated into the stream later
- This is the essence of how Suspense facilitates server-side HTML streaming

### The other challenge

- Until the JavaScript for the main section is loaded, client-side app hydration cannot start
- And if the JavaScript bundle for the main section is large, this could significantly delay the process

### Code splitting

- Code splitting allows you to mark specific code segments as not immediately necessary for loading, signalling your bundler to segregate them into separate <script>tags
- Using 'React.lazy' for code splitting enables you to separate the main section's code from the primary JavaScript bundle
- The JavaScript containing React and the code for the entire application, excluding the main section, can now be downloaded independently by the client, without having to wait for the main section's code

### Selective Hydration on the Client

- By wrapping the main section within <Suspense>, you've indicated to React that it should not prevent the rest of the page from not just streaming but also from hydrating
- This feature, called _selective hydration_ allows for the hydration of sections as they become available, before the rest of the HTML and the JavaScript code are fully downloaded
- Thanks to Selective Hydration, a heavy piece of JS doesn't prevent the rest of the page from becoming interactive

### Selective Hydration on the Client contd.

- Selective Hydration offers a solution to the third issue: the necessity to "hydrate everything to interact with anything"
- React begins hydrating as soon as possible, enabling interactions with elements like the header and side naviation without waiting for the main content to be hydrated
- This process is managed automatically by React
- In Scenarios where multiple components are awaiting hydration, React prioritizes hydration based on user interactions

### Drawbacks of Suspense SSR

- First, even though JavaScript code is streamed to the browser asynchronously, eventually, the entire code for a web page must be downloaded by the user
  - As applications add more features, the amount of code users need to download also grows. This leads to an important question:
    - Should users really have to download so much data?
- Second, the current approach requires that all React components undergo hydration on the client-side, irrespective of their actual need for interactivity

  - This process can inefficiently spend resources and extend the loading times and time to interactivity for users, as their devices need to process and render components that might not evne require client-side interaction
  - This leads to another question:
    - Should all components be hydrated, even those that don't need interactivity?

- Third, inspite of server's superior capacity for handling intensive processing tasks, the bulk of JavaScript execution still takes place on the user's device
  - This can slow down the performance, especially on devices that are not very powerful
  - This leads to another important question:
    - Should so much of the work be done on the user's device?
