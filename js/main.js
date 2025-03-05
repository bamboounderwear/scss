import loader from '@monaco-editor/loader';

// Configure Monaco loader
loader.config({ paths: { vs: 'https://cdn.jsdelivr.net/npm/monaco-editor@0.47.0/min/vs' } });

// Example starter code
const starterHTML = `<div class="container p-4">
  <h1 class="text-center mb-4">CSS Framework Demo</h1>
  <div class="bg-blue p-4 rounded-md shadow-md">
    <p class="text-white">This is a demo of our CSS framework!</p>
  </div>
  <div class="grid gap-4 mt-4" style="grid-template-columns: repeat(3, 1fr);">
    <div class="bg-red-light p-4 rounded-md text-white">
      <h3 class="mb-2">Card 1</h3>
      <p>Testing colors and spacing</p>
    </div>
    <div class="bg-green-light p-4 rounded-md text-white">
      <h3 class="mb-2">Card 2</h3>
      <p>With grid layout</p>
    </div>
    <div class="bg-purple-light p-4 rounded-md text-white">
      <h3 class="mb-2">Card 3</h3>
      <p>And rounded corners</p>
    </div>
  </div>
</div>`;

const starterCSS = `/* Add your custom CSS here */
.container {
  max-width: 1200px;
  margin: 0 auto;
}

h1 {
  color: #333;
}`;

// Create preview shadow root
const previewContainer = document.getElementById('preview');
const shadow = previewContainer.attachShadow({ mode: 'open' });

// Load Monaco Editor
loader.init().then(monaco => {
  const editor = {
    html: monaco.editor.create(document.getElementById('html-editor'), {
      value: starterHTML,
      language: 'html',
      theme: 'vs-dark',
      minimap: { enabled: false },
      fontSize: 14,
      lineNumbers: 'on',
      roundedSelection: true,
      scrollBeyondLastLine: false,
      automaticLayout: true,
      padding: { top: 10 }
    }),
    
    css: monaco.editor.create(document.getElementById('css-editor'), {
      value: starterCSS,
      language: 'css',
      theme: 'vs-dark',
      minimap: { enabled: false },
      fontSize: 14,
      lineNumbers: 'on',
      roundedSelection: true,
      scrollBeyondLastLine: false,
      automaticLayout: true,
      padding: { top: 10 }
    })
  };

  function updatePreview() {
    const htmlContent = editor.html.getValue();
    const cssContent = editor.css.getValue();
    
    // Clear previous content
    while (shadow.firstChild) {
      shadow.removeChild(shadow.firstChild);
    }
    
    // Add framework CSS link
    const frameworkLink = document.createElement('link');
    frameworkLink.rel = 'stylesheet';
    frameworkLink.href = '/styles/main.css';
    shadow.appendChild(frameworkLink);
    
    // Add custom CSS
    const style = document.createElement('style');
    style.textContent = cssContent;
    shadow.appendChild(style);
    
    // Add HTML content
    const wrapper = document.createElement('div');
    wrapper.innerHTML = htmlContent;
    shadow.appendChild(wrapper);
  }

  // Update preview on change
  editor.html.onDidChangeModelContent(() => updatePreview());
  editor.css.onDidChangeModelContent(() => updatePreview());

  // Initial preview
  updatePreview();
});