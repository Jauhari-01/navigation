- Basic of `React-Router-dom`
    
    React Router is a popular JavaScript library used in React applications to manage the routing of pages and components. It enables developers to create a single-page web application with multiple views, without the need for a full page refresh.
    
    React Router is needed because it allows for more dynamic and interactive user experiences on a website. It provides a way for users to navigate between different pages or views within a single page application, without the need for a server-side request. This leads to faster load times and a smoother user experience.
    
    In addition, React Router provides a way to manage the URL of a web application, making it easier to share links and bookmarks with others. It also enables developers to add features such as nested routes, route parameters, and URL query parameters.
    
    Overall, React Router is an essential tool for any React developer who wants to create a more robust and interactive web application.
    
    # React Router vs React Router DOM:
    
    React Router and React Router DOM are closely related libraries used in building web applications with React. Here's how they relate to each other:
    
    1. **React Router**: This is the core library for routing in React. It maintains the base routing functionality that's used across different types of projects. However, React Router itself isn't geared towards any specific environment like the web or native mobile. It's essentially an abstraction that can be used in any JavaScript environment.
    2. **React Router DOM**: This is a project that's built specifically for the DOM (web) environment. It imports all the functionality from React Router and then adds on some additional components and behaviors that are specific to the web. For example, it includes components like **`<BrowserRouter>`**, **`<Route>`**, **`<Switch>`**, and **`<Link>`** that are very commonly used in a web application.
    
    In essence, React Router provides the core routing functionality and React Router DOM tailors that functionality for use in web applications. So when you're building a web application with React, you would typically install and use **`react-router-dom`**.
    
    As a rule of thumb, use **`react-router-dom`** for web applications, **`react-router-native`** for React Native applications, and **`react-router`** only if you're building a router for a different environment (or creating a reusable package for an environment that's not yet supported). Note that **`react-router-dom`** and **`react-router-native`** are dependent on **`react-router`**, so if you install one of those, **`react-router`** gets installed automatically.
    
    # Browser Router:
    
    In React applications that use React Router for handling routing, **`<BrowserRouter>`** is a component that wraps the application and provides it with the necessary context to manage and manipulate the browser history.
    
    Here's a simple breakdown:
    
    1. **BrowserRouter**: This is a component from **`react-router-dom`** that uses the HTML5 history API (pushState, replaceState, and the popstate event) to keep your UI in sync with the URL. It creates a history object that manages the browser's history stack, enables navigation, and handles location changes. When using **`<BrowserRouter>`**, you have clean URLs like **`www.mywebsite.com/about`** instead of hash-based URLs like **`www.mywebsite.com/#/about`**.
    2. **Wrapping the App**: In order to make routing work correctly, we need to enclose our main **`<App/>`** component within the **`<BrowserRouter>`** component. This is because React Router works by providing a **`Route`** component that renders some UI when the current location matches the route's **`path`**. The **`<BrowserRouter>`** component provides the context or environment in which the **`<Route>`** component can do its job. By wrapping the entire app in **`<BrowserRouter>`**, we ensure that any component in the app can interact with the router's API if it needs to.
    
    ```jsx
    import React from 'react';
    import ReactDOM from 'react-dom';
    import { BrowserRouter } from 'react-router-dom';
    import App from './App';
    
    ReactDOM.render(
      <React.StrictMode>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </React.StrictMode>,
      document.getElementById('root')
    );
    ```
    
    # Routes, Switch and Route:
    
    1. **Route**: The `Route` component is perhaps the most vital component in React Router. It renders some UI when the location matches the route's path. Essentially, a `Route` says, "When the path looks like this, show this component."
    
    ```jsx
    <Route path="/about" component={About} />
    ```
    
    In the example above, the `About` component would be displayed when the browser's current location matches "/about".
    
    1. **Switch**: The `Switch` component is used to render only the first `Route` or `Redirect` that matches the location. It's mainly used to ensure that only one route is rendered at a time. If you had multiple `Route` components whose `path` props could match the same location, without a `Switch`, all matching routes would render.
    
    ```jsx
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
    </Switch>
    
    ```
    
    In the example above, if the path is "/", only the `Home` component would be rendered because of the `Switch`. Without it, if there are other routes that could also match "/", they would also render.
    
    1. **Routes**: `Routes` is a new component introduced in React Router v6 . The idea is that you use `Routes` to replace `Switch`, and the syntax changes slightly: you pass in `Route` components as children of `Routes`, and instead of using `component={SomeComponent}`, you use `element={<SomeComponent />}`.
    
    Here's an example with `Routes`:
    
    ```jsx
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
    
    ```
    
    Just like `Switch`, `Routes` only renders one route—specifically, the one that matches the current pathname best. This is a significant change in v6 that helps simplify the API and address some issues that were common with `Switch`.
    
    To sum up, `Route` is used to define the mapping between the URL path and the component that should be rendered. `Switch` (in v5 and below) and `Routes` (in v6 and above) are used to ensure that, out of many possible matches, only the first or best matching `Route` is rendered.
    
    React Router v6 replaced `Switch` with `Routes` for a few key reasons:[Legacy]
    
    1. **Predictable rendering**: In React Router v5 and below, `Switch` renders the first `Route` or `Redirect` that matches the current location. However, because this depends on the order of the routes, it could sometimes lead to less predictable behavior, especially in larger apps where routes might be defined in different places. The `Routes` component in v6 instead selects the route that matches the current pathname best, not just the first one that matches. This can make route matching more predictable.
    2. **Relative routes and links**: In React Router v6, all routes are relative by default. This is a change from v5, where routes were absolute by default. Relative routes and links are generally easier to work with and can simplify your code, especially in larger apps. The `Switch` component in v5 didn't support relative routes or links, but the `Routes` component in v6 does.
    3. **Simplification of API**: With `Switch`, you needed to use `exact` prop quite often to prevent unintentional matches. For example, the route path `/` will match all routes, and so without `exact`, navigating to `/about` would also render the component for `/`. By replacing `Switch` with `Routes`, and changing the way routes are matched, React Router v6 makes it so that you don't have to use `exact` nearly as often.
    4. **Simpler nested route configuration**: `Routes` in v6 provides a simpler and more intuitive way to handle nested routes.
    5. **Error handling**: `Routes` can handle errors better. You can now have an `ErrorBoundary` at the top level of your app and it will catch errors from anywhere in the app.
    
    # Navigate from one File to other
    
    In React Router v6, the **`useHistory`** hook was replaced by a few other hooks, primarily **`useNavigate`**. This is part of an effort to make the API easier to use and more intuitive. Here's how you would navigate programmatically in React Router v6:
    
    ```jsx
    import { useNavigate } from "react-router-dom";
    
    function SomeComponent() {
      let navigate = useNavigate();
    
      function handleButtonClick() {
        navigate("/new-location");
      }
    
      return (
        <button type="button" onClick={handleButtonClick}>
          Go to new location
        </button>
      );
    }
    ```
    
    The `navigate` function in React Router v6 can also accept numbers as its argument, allowing you to move forwards or backwards in the history stack, similar to the browser's forward and back buttons.
    
    - `navigate(-1)` is equivalent to clicking the browser's back button. It takes you one step back in the history stack.
    - `navigate(-2)` would take you two steps back in the history stack.
    - `navigate(1)` would take you one step forward in the history stack, akin to clicking the browser's forward button.
    - `navigate(2)` would take you two steps forward in the history stack.
    
    These numerical arguments can be very useful for creating interfaces that need to interact with the browser's built-in navigation buttons, allowing users to go back or forward through their history in your application. However, be cautious when using this approach because the history stack may be different depending on the user's actions, and going back or forward might not always lead to the pages you expect.
    
    The history that's used by the **`navigate`** function is based on the history stack managed by your web browser.
    
    # HTML`anchor Tag` or `Link Component and NavLink Component`
    
    When creating a navbar in a React application using React Router, it's recommended to use the `Link` or `NavLink` component instead of regular `<a>` tags.
    
    Here's why:
    
    1. **Link**: The `Link` component is used to create links in your application that can navigate to different routes. Unlike a standard `<a>` tag, `Link` prevents the browser from making a full page refresh when the link is clicked, and instead it just updates the URL and re-renders the necessary components.
    
    ```jsx
    import { Link } from 'react-router-dom';
    
    // In your component
    <Link to="/about">About</Link>
    
    ```
    
    1. **NavLink**: This component is a special type of `Link` that can apply specific styling or attributes when the link's path matches the current URL. This is especially useful for navigation menus, where you want to highlight the link to the current page.
    
    ```jsx
    import { NavLink } from 'react-router-dom';
    
    // In your component
    <NavLink to="/about" activeClassName="active">About</NavLink>
    
    ```
    
    In this example, the "active" class will be applied to the link when the current path is "/about".
    
    Regular `<a>` tags cause the browser to make a GET request and refresh the page, which isn't typically what you want in a React app, because it leads to unnecessary requests to the server and makes your app feel less smooth. By using `Link` or `NavLink`, you can avoid these issues and take full advantage of React's capabilities.
    
    In summary, for a Navbar in React, `NavLink` would be the best choice because of its feature to highlight the active route.
    
    # No Match Route:
    
    A "No Match" route or a "404" route is a common pattern in web development. It displays a certain component or page when no other routes match the current location.
    
    In React Router v6, it can be achieved using the `useRoutes` hook or the `Routes` component with a `Route` having a path of `'*'`.
    
    Here's an example using the `Routes` and `Route` components:
    
    ```jsx
    import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
    import HomePage from "./HomePage";
    import AboutPage from "./AboutPage";
    import NoMatchPage from "./NoMatchPage";
    
    function App() {
      return (
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="*" element={<NoMatchPage />} />
          </Routes>
        </Router>
      );
    }
    
    ```
    
    In this example, if the current location does not match either "/" or "/about", it will match the `'*'` path, and the `NoMatchPage` component will be rendered.
    
    This approach allows you to provide feedback to users when they attempt to navigate to a page that doesn't exist in your app, improving the user experience.
    
    # Nested Route:
    
    Let's assume you have the following directory structure:
    
    ```
    src/
    |-- components/
    |   |-- Apple.js
    |   |-- Nokia.js
    |   |-- Samsung.js
    |   |-- Products.js
    |-- App.js
    
    ```
    
    And here's how you could use nested routing in this setup:
    
    **App.js**
    
    ```jsx
    import { Routes, Route } from 'react-router-dom';
    import Products from './components/Products';
    import Apple from "./componets/Apple
    import Nokia from "./componets/Nokia
    import Samsung from "./componets/Samsung
    
    function App() {
      return (
      
          
          <Routes>
            <Route path="/products" element={<Products />} >
                <Route path="apple" element={<Apple />}/>
                <Route path="nokia" element={<Nokia />}/>
                <Route path="samsung" element={<Samsung />}/>
            </Route>
          </Routes>
      
      );
    }
    
    export default App;
    
    ```
    
    ```jsx
    import {outlet} from "react-router-dom"
    
    function Products() {
      return (
        <div>
           <h1>This is Product Page </h1>
    
          <Outlet />
        </div>
      );
    }
    
    export default Products;
    ```
    
    The `Outlet` component in React Router v6 is used to render any nested `Route` components.
    
    In your `Products` component, the `Outlet` will render the component of the route that matches the current path, assuming that route is a child of `Products`.
    
    For example, if you navigate to "/products/apple", the `Apple` component will be rendered by the `Outlet` in the `Products` component. Similarly, if you navigate to "/products/samsung", the `Samsung` component will be rendered instead.
    
    This allows you to keep the navigation and any other shared interface elements defined in `Products` visible while changing only the part of the interface that corresponds to the nested route. It's a key part of creating complex interfaces with nested views in React Router.
    
    So in summary, `Outlet` serves as a placeholder for where child routes should render. If no nested route is active, it renders nothing.
    
    # Relative vs Absolute Route:
    
    The difference between `path="/apple"` and `path="apple"` lies in how they match URLs, essentially, it's the difference between absolute paths and relative paths.
    
    1. **Absolute paths (`path="/apple"`):** If you start your path with a "/", it is considered an absolute path, meaning it's directly attached to your base URL. So if your website is `www.example.com`, `path="/apple"` would match `www.example.com/apple`.
    2. **Relative paths (`path="apple"`):** If you do not start your path with a "/", it is considered a relative path, meaning it's attached to the current URL. If you're currently at `www.example.com/products`, `path="apple"` would match `www.example.com/products/apple`.
    
    In the context of React Router and especially when dealing with nested routes, relative paths are often more convenient and make the routing structure more flexible and easier to manage. They allow a component to be moved around in your route configuration without needing to update its `path` prop.
    
    # Index Route:
    
    The concept of an "index route" or "default route" comes into play when you have nested routes in your application, and you want to display a specific component when the parent route's path is matched exactly.
    
    In React Router v6, you define an index route by setting the path of a `Route` to `"/"`. This route will only match when none of the other nested routes match.
    
    ```jsx
    import { Routes, Route } from 'react-router-dom';
    import Products from './components/Products';
    import Apple from "./componets/Apple
    import Nokia from "./componets/Apple
    import Samsung from "./componets/Apple
    
    function App() {
      return (
      
          
          <Routes>
            <Route path="/products" element={<Products />} >
                {/*<Route index element={<Apple />}/>*/}
                <Route path="/" element={<Apple />}/>
                <Route path="apple" element={<Nokia />}/>
                <Route path="apple" element={<Samsung />}/>
            </Route>
          </Routes>
      
      );
    }
    
    export default App;
    ```
    
    Both the below line could be termed as index or default route
    
    ```jsx
       <Route index element={<Apple />}/>
      <Route path="/" element={<Apple />}/>
    ```
    
    In React Router v6, the developers removed the `index` prop from `Route`. Instead of using `index`, you're expected to use `path="/"`, which has a similar effect of designating a default or index route when none of the other nested routes match.
    
    So, this syntax:
    
    ```jsx
    <Route index element={<Apple />} />
    
    ```
    
    is not valid in React Router v6. The equivalent syntax in React Router v6 would be:
    
    ```jsx
    <Route path="/" element={<Apple />} />
    
    ```
    
    Both aim to achieve the same thing: They designate the `Apple` component as the default component to be rendered when none of the other child routes of the parent route match.
    
    This change makes the routing system more consistent by using `path` for all route matching, instead of having a separate `index` prop for this specific case.
