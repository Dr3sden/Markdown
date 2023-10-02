import React, { useState, useEffect } from "react";
import {marked} from 'marked';
import './App.css';

const defaultMarkdownText = `
# Título (H1)
## Subtítulo (H2)
Un [enlace](https://www.example.com/)
Texto con \`código en línea\`
\`\`\`
// Bloque de código
function ejemplo() {
  return "Hola, mundo!";
}
\`\`\`
- Elemento de lista 1
- Elemento de lista 2
> Esto es una cita (blockquote)
![Texto alternativo de una imagen](https://www.example.com/image.jpg)
**Texto en negrita**
`;

export default function App() {
  const [text, setText] = useState(defaultMarkdownText);

  useEffect(() => {
    // Parse Markdown text using marked and update the preview
    const preview = document.getElementById('preview');
    if (preview) {
      preview.innerHTML = marked(text);
    }
  }, [text]);

  return (
    <div className="markdown-container">
      <textarea
        id="editor"
        className="markdown-textarea"
        onChange={(e) => setText(e.target.value)}
        value={text}
        placeholder="Enter GitHub flavored markdown..."
      />
      <div id="preview" className="markdown-preview"></div>
    </div>
  );
};