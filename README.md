- Reusable Button component (multiple variants)
- Flexible Card component
- Accessible Modal component
- Clean folder architecture
- Built with Vite for fast development
- Easy to scale and maintain

---

## 📁 Project Structure

src/
│
├── components/
│   ├── Button/
│   │   ├── Button.jsx
│   │   └── Button.css
│   │
│   ├── Card/
│   │   ├── Card.jsx
│   │   └── Card.css
│   │
│   ├── Modal/
│   │   ├── Modal.jsx
│   │   └── Modal.css
│
├── App.jsx
└── main.jsx

---

## 🧩 Components

### 🔘 Button

Reusable button with variant support.

```jsx
<Button variant="primary">Primary Button</Button>
<Button variant="secondary">Secondary Button</Button>
<Button variant="danger">Danger Button</Button>

Props:

variant (string) — primary | secondary | danger

onClick (function)

children (node)

🃏 Card

Flexible content container.

<Card title="Card Title">
  <p>Card content goes here</p>
</Card>

Props:

title (string)

children (node)

🪟 Modal

Reusable modal component.

<Modal isOpen={isOpen} onClose={handleClose}>
  <h2>Modal Title</h2>
</Modal>

Props:

isOpen (boolean)

onClose (function)

children (node)

⚙️ Installation

Clone the repository:

git clone https://github.com/YOUR-USERNAME/react-component-library.git
cd react-component-library
npm install

Run development server:

npm run dev
🛠 Built With

React

Vite

CSS

📈 Future Improvements

TypeScript support

Storybook integration

Theme provider with Context API

Publish as an npm package

Unit testing with Jest

👤 Author

Muhammad Adnan
Front-End Developer

📄 License

This project is open-source and available under the MIT License.
## 🎥 Project Demo

This video demonstrates:
- Button component usage
- Card component rendering
- Modal interaction

👉 [Watch Full Demo](https://drive.google.com/file/d/19pToLZ6k4cqrhjsBDiqFoY_Msqk1O8yb/view?usp=sharing)
