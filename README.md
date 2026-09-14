
# 🚀 Tech Stack Builder

A responsive React application where users can explore different technologies and build their preferred technology stack.

Users can add technologies, view selected items, delete a single technology, or remove all technologies from the stack.

## 🛠️ Technologies Used

- **React**
- **TypeScript**
- **Tailwind CSS**
- **React Toastify**
- **JSON**
- **Vite**

## ✨ Key Features

1. **Explore Technologies**  
   Users can view technology cards containing names, categories, descriptions, ratings, difficulty levels, badges, and icons.

2. **Build a Custom Stack**  
   Users can add technologies to their stack. The same technology cannot be added more than once.

3. **Manage the Stack**  
   Users can delete a single technology using the `X` button or delete all selected technologies using the `Remove All` button.

---

# 📘 React Questions and Answers

## 1. What is JSX, and why is it used in React?

**JSX** is a syntax that allows us to write HTML-like code inside JavaScript or TypeScript.

It is used in React because it makes user interfaces and components easier to create, understand, and maintain.

```tsx
const heading = <h1>Hello React</h1>;
```

---

## 2. What is the difference between props and state?

**Props** are used to pass data from a parent component to a child component.

**State** is data managed inside a component, and it can change over time.

```tsx
<TechCard tech={tech} />
```

Here, `tech` is passed to `TechCard` as a prop.

```tsx
const [Stack, setStack] = useState<TechTypeProps[]>([]);
```

Here, `Stack` is state.

---

## 3. What does the `useState` hook do, and where did you use it in this project?

The `useState` hook stores and updates data inside a React component.

In this project, it is used to store the selected technologies and the total number of selected technologies.

```tsx
const [Stack, setStack] = useState<TechTypeProps[]>([]);
const [TechNumber, setTechNumber] = useState<number>(0);
```

When a user adds or deletes a technology, these states are updated.

---

## 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

The `useEffect` hook performs side effects after a component renders.

It can be used to fetch JSON data when the component loads and save the received data in state.

```tsx
useEffect(() => {
  fetch("/technologies.json")
    .then((response) => response.json())
    .then((data) => setTechnologies(data));
}, []);
```

The empty dependency array `[]` makes the effect run only once after the component loads.

> **Note:** In this project, the JSON promise is currently handled using React’s `use()` API instead of `useEffect`.

```tsx
const technologies = use(techPromise);
```

---

## 5. Why does every item in a `.map()` list need a unique `key` prop?

A unique `key` helps React identify which list item has been added, removed, or updated.

This allows React to update the list correctly and efficiently.

```tsx
technologies.map((tech) => (
  <TechCard
    key={tech.id}
    tech={tech}
  />
));
```

Here, `tech.id` is used as the unique key.

---

## 6. What is conditional rendering? Show one place you used it.

**Conditional rendering** means displaying different elements based on a condition.

In this project, `StackEmptyComponent` appears when the stack is empty. Otherwise, `StackComponent` appears.

```tsx
{Stack.length === 0 ? (
  <StackEmptyComponent />
) : (
  <StackComponent
    Stack={Stack}
    setStack={setStack}
    TechNumber={TechNumber}
    setTechNumber={setTechNumber}
  />
)}
```

---

## 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent component passes data to a child component using **props**.

```tsx
<TechCard
  tech={tech}
  Stack={Stack}
  setStack={setStack}
  setTechNumber={setTechNumber}
/>
```

Here, the parent passes `tech`, `Stack`, `setStack`, and `setTechNumber` to the child.

A child component sends data back or updates the parent by calling a function received through props.

```tsx
setStack((previousStack) => [
  ...previousStack,
  tech,
]);
```

Here, the child calls `setStack` to update the state stored in the parent component.

---

## ▶️ Run the Project Locally

Clone the repository and install its dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

---

## 👨‍💻 Author

Developed as a **React, TypeScript, and Tailwind CSS** project.