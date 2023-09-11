import React, { useState, useEffect } from "react";
import {marked} from 'marked';

export default function Markdown(){
  const [text, setText] = useState('');

  useEffect(() => {
    // Parse Markdown text using marked and update the preview
    const preview = document.getElementById('preview');
    if (preview) {
      preview.innerHTML = marked(text);
    }
  }, [text]);

  return (
    <div>
      <textarea
        id="editor"
        onChange={(e) => setText(e.target.value)}
        value={text}
        placeholder="Enter GitHub flavored markdown..."
      />
      <div id="preview"></div>
    </div>
  );
}