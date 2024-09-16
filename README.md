# Sorting-Visualizer
A dynamic and interactive sorting visualizer built with React, TypeScript, and styled-components. This project allows users to visualize various sorting algorithms through a captivating and educational interface.

## View the Deployed App

You can view the deployed app by scanning the QR code below:

Alternatively, you can click [here]([https://your-deployed-app-url.com](https://bit.ly/3XpZJJv)) to open the app directly.

QR Code to view Deployed site


![bit ly_3XpZJJv](https://github.com/user-attachments/assets/80ce9732-77aa-4c08-92fb-c5246de5b351)



## Features

- **Algorithm Visualization:** View real-time visualizations of popular sorting algorithms as they process data.
- **Interactive Controls:** Start, pause, and reset sorting processes with intuitive controls.
- **Speed Adjustment:** Adjust the speed of sorting to observe different algorithms in detail.
- **Algorithm Information:** Get detailed explanations, time and space complexities, and code implementations for each sorting algorithm.
- **Beautiful UI:** Experience an engaging user interface with smooth animations and a dark-themed background for better focus.

## Supported Sorting Algorithms

- **Bubble Sort**
- **Selection Sort**
- **Insertion Sort**
- **Merge Sort**
- **Quick Sort**
- **Heap Sort**
- **Counting Sort**
- **Radix Sort**

## Getting Started

To get a local copy of the project up and running follow these simple steps:

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/yourusername/sorting-visualizer.git
   ```
2. **Install Dependencies:**
   
   Navigate to the project directory and install the necessary dependencies:
   ```bash
   cd sorting-visualizer
   npm install
   ```
3. **Start the Development Server:**
   
    Run the following command to start the development server:
   ```bash
    npm run dev
   ```
4. **Open in Your Browser:**
   Navigate to http://localhost:5173 to view the visualizer.
   


# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
