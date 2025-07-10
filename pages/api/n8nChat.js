import { useEffect } from 'react';

export default function N8nChat() {
  useEffect(() => {
    // Dynamically inject the n8n Chat script and styles
    const script = document.createElement('script');
    script.type = 'module';
    script.innerHTML = `
      import { createChat } from 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js';
      createChat({
        webhookUrl: 'http://localhost:5678/webhook/a889d2ae-2159-402f-b326-5f61e90f602e/chat',
        onLoad: () => console.log('Chat widget loaded!'),
          onMessageSent: (data) => console.log('Message sent:', data),
          onMessageReceived: (data) => console.log('Message received:', data),
          onError: (err) => console.error('Chat error:', err),
        theme: 'light',
        title: 'Support Chat',
      });
    `;

    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/style.css';

    document.head.appendChild(link);
    document.body.appendChild(script);

    return () => {
      // Cleanup on component unmount
      document.head.removeChild(link);
      document.body.removeChild(script);
    };
  }, []);

  return null; // No JSX needed (widget injects its own DOM)
}