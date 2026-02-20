import { useState } from "react";
import Button from "./components/Button/Button.jsx";
import Card from "./components/Card/Card.jsx";
import Modal from "./components/Modal/Modal.jsx";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div style={{ padding: "40px" }}>
      <h1>React Components Library Demo</h1>

      <Button variant="primary" onClick={() => setIsModalOpen(true)}>
        Open Modal
      </Button>

      <Card title="Reusable Card">
        <p>This is a reusable card component.</p>
      </Card>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2>Modal Title</h2>
        <p>This is a reusable modal.</p>
      </Modal>
    </div>
  );
}

export default App;