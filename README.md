Name of the Project: DevStack

A Little Description: DevStack is a React-based web application that fetches product data from an API and displays it through product cards. Users can explore products and add them to the cart.

Technology That I Used: React, TypeScript, Vite, Tailwind CSS, REST API

3 Features About My Project:

1. Dynamic product data from API.
2. Product cards with detailed information.
3. Add to Cart functionality.


<!-- Extra Questions Answear -->


1. What is JSX, and why is it used in React?
   JSX is a syntax that lets us write HTML-like code inside JavaScript. It makes React UI easier to write and understand.

2. What is the difference between props and state?
   Props are data passed from a parent component to a child component. State is data managed inside a component that can change over time.

3. What does the useState hook do, and where did you use it in this project?
   useState is used to store and update data in a component. I used it to manage the selected technologies/stack in my project.

4. What does the useEffect hook do, and why did you need it to load the JSON data?
   useEffect runs code when a component renders or when something changes. I used it to fetch and load the JSON data when the component started.

5. Why does every item in a .map() list need a unique key prop?
   A unique key helps React identify each item and efficiently update the list when it changes.

6. What is conditional rendering? Show one place you used it.
   Conditional rendering means showing different UI based on a condition. I used it to show an empty stack message when no technology was selected.

7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
   The parent sends data to the child using props. The child can send data back by calling a function passed from the parent as a prop.
