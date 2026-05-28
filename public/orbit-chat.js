/**
 * Orbit Agent Chat Widget
 * A premium, self-contained, drop-in floating chatbot widget.
 * 
 * Features:
 * - Beautiful glassmorphism, glowing accents, and high-fidelity micro-animations.
 * - Dynamic stylesheet injection (Vanilla CSS - zero dependencies).
 * - Automatic session persistence (using localStorage).
 * - Bouncing dot typing indicator.
 * - Dynamic quick-reply chips.
 * - Seamless FastAPI backend integration with robust error state reporting.
 */

(function () {
  // --- CONFIGURATION ---
  // IMPORTANT: When you restart Ngrok, update this placeholder with your active Ngrok URL!
  // Example: "https://1234-abcd.ngrok-free.app/api/chat"
  const API_URL = "https://almost-radiated-footsie.ngrok-free.dev/api/chat";
  
  // Storage key for saving conversation history
  const STORAGE_KEY = "orbit_agent_chat_history";
  
  // Welcome message shown on the first launch
  const WELCOME_MESSAGE = "Hello! I am Orbit Agent, your local, privacy-first AI companion. How can I help you automate your tasks today?";
  
  // Quick-reply suggestions
  const QUICK_REPLIES = [
    "What is Orbit Agent?",
    "Is my data fully private?",
    "Show me a demo",
    "How does local AI work?"
  ];

  // --- CSS STYLE INJECTION ---
  const styleElement = document.createElement("style");
  styleElement.textContent = `
    /* CSS Variables for Premium Theming */
    :root {
      --orbit-bg: rgba(10, 10, 15, 0.85);
      --orbit-bg-solid: #0a0a0f;
      --orbit-border: rgba(255, 255, 255, 0.08);
      --orbit-glow-cyan: rgba(6, 182, 212, 0.15);
      --orbit-glow-indigo: rgba(99, 102, 241, 0.15);
      
      --orbit-text-primary: #f8fafc;
      --orbit-text-secondary: #94a3b8;
      --orbit-text-muted: #64748b;
      
      --orbit-accent-gradient: linear-gradient(135deg, #6366f1 0%, #06b6d4 100%);
      --orbit-accent-glow: 0 0 20px rgba(99, 102, 241, 0.4);
      --orbit-glass-glow: 0 8px 32px 0 rgba(0, 0, 0, 0.5),
                          inset 0 1px 1px rgba(255, 255, 255, 0.1),
                          inset 0 -1px 1px rgba(255, 255, 255, 0.05);
      
      --orbit-font: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    }

    /* Floating Widget Container */
    #orbit-widget-root {
      position: fixed;
      bottom: 24px;
      right: 24px;
      z-index: 999999;
      font-family: var(--orbit-font);
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      pointer-events: none; /* Let clicks pass through empty spaces */
    }
    
    #orbit-widget-root * {
      box-sizing: border-box;
      pointer-events: auto; /* Re-enable pointer events for elements */
    }

    /* Launcher Button */
    .orbit-launcher {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      background: var(--orbit-accent-gradient);
      box-shadow: var(--orbit-accent-glow), 0 4px 12px rgba(0,0,0,0.3);
      border: 1px solid rgba(255, 255, 255, 0.2);
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      position: relative;
      overflow: hidden;
    }

    .orbit-launcher:hover {
      transform: scale(1.08) translateY(-2px);
      box-shadow: 0 0 25px rgba(99, 102, 241, 0.6), 0 6px 16px rgba(0,0,0,0.4);
    }
    
    .orbit-launcher:active {
      transform: scale(0.95);
    }

    /* Pulsing Outer Rings on Launcher */
    .orbit-launcher::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      border: 1px solid rgba(6, 182, 212, 0.4);
      animation: orbit-pulse 2s infinite ease-out;
      pointer-events: none;
    }

    @keyframes orbit-pulse {
      0% { transform: scale(1); opacity: 1; }
      100% { transform: scale(1.5); opacity: 0; }
    }

    /* SVG Icon Morphing States */
    .orbit-launcher svg {
      transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
      stroke: #ffffff;
      fill: none;
    }

    .orbit-launcher.active svg.chat-icon {
      transform: scale(0) rotate(-90deg);
      display: none;
    }

    .orbit-launcher svg.close-icon {
      display: none;
      transform: scale(0) rotate(90deg);
    }

    .orbit-launcher.active svg.close-icon {
      display: block;
      transform: scale(1) rotate(0);
    }

    /* Chat Window Layout */
    .orbit-chat-window {
      width: 380px;
      height: 580px;
      max-height: calc(100vh - 120px);
      max-width: calc(100vw - 48px);
      background: var(--orbit-bg);
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
      border: 1px solid var(--orbit-border);
      border-radius: 20px;
      box-shadow: var(--orbit-glass-glow);
      display: flex;
      flex-direction: column;
      overflow: hidden;
      margin-bottom: 20px;
      transform: translateY(20px) scale(0.92);
      opacity: 0;
      transform-origin: bottom right;
      transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
      visibility: hidden;
      pointer-events: none;
      position: relative;
    }

    /* Top and Bottom decorative glows */
    .orbit-chat-window::before {
      content: '';
      position: absolute;
      top: -100px;
      left: -100px;
      width: 250px;
      height: 250px;
      background: radial-gradient(circle, var(--orbit-glow-indigo) 0%, transparent 70%);
      pointer-events: none;
    }

    .orbit-chat-window::after {
      content: '';
      position: absolute;
      bottom: -100px;
      right: -100px;
      width: 250px;
      height: 250px;
      background: radial-gradient(circle, var(--orbit-glow-cyan) 0%, transparent 70%);
      pointer-events: none;
    }

    .orbit-chat-window.active {
      transform: translateY(0) scale(1);
      opacity: 1;
      visibility: visible;
      pointer-events: auto;
    }

    /* Header Container */
    .orbit-header {
      padding: 16px 20px;
      background: rgba(10, 10, 15, 0.6);
      border-bottom: 1px solid var(--orbit-border);
      display: flex;
      align-items: center;
      justify-content: space-between;
      z-index: 10;
    }

    .orbit-header-profile {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .orbit-header-avatar {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      background: var(--orbit-accent-gradient);
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      border: 1px solid rgba(255,255,255,0.1);
    }
    
    .orbit-header-avatar::after {
      content: '';
      position: absolute;
      bottom: 0;
      right: 0;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: #10b981;
      border: 2px solid var(--orbit-bg-solid);
    }

    .orbit-header-info h4 {
      margin: 0;
      font-size: 0.95rem;
      font-weight: 600;
      color: var(--orbit-text-primary);
      letter-spacing: -0.01em;
    }

    .orbit-header-info span {
      font-size: 0.72rem;
      color: var(--orbit-text-secondary);
      font-weight: 500;
      display: flex;
      align-items: center;
      gap: 4px;
    }

    .orbit-header-close {
      cursor: pointer;
      color: var(--orbit-text-secondary);
      transition: color 0.2s;
      background: none;
      border: none;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 6px;
      border-radius: 50%;
    }

    .orbit-header-close:hover {
      color: var(--orbit-text-primary);
      background: rgba(255,255,255,0.06);
    }

    /* Message Stream Scrollport */
    .orbit-messages {
      flex: 1;
      padding: 20px;
      overflow-y: auto;
      display: flex;
      flex-direction: column;
      gap: 16px;
      z-index: 1;
      
      /* Scrollbar style standard */
      --scrollbar-thumb: rgba(99, 102, 241, 0.25);
      --scrollbar-track: rgba(10, 10, 15, 0.1);
      scrollbar-color: var(--scrollbar-thumb) var(--scrollbar-track);
      scrollbar-width: thin;
    }

    /* Custom WebKit Scrollbar Fallbacks */
    @supports not (scrollbar-color: auto) {
      .orbit-messages::-webkit-scrollbar {
        width: 6px;
      }
      .orbit-messages::-webkit-scrollbar-thumb {
        background: var(--scrollbar-thumb);
        border-radius: 3px;
      }
      .orbit-messages::-webkit-scrollbar-track {
        background: var(--scrollbar-track);
      }
    }

    /* Message Bubbles styling */
    .orbit-message-row {
      display: flex;
      flex-direction: column;
      width: 100%;
      animation: message-pop-in 0.3s cubic-bezier(0.215, 0.610, 0.355, 1) forwards;
    }

    @keyframes message-pop-in {
      0% { transform: scale(0.96) translateY(8px); opacity: 0; }
      100% { transform: scale(1) translateY(0); opacity: 1; }
    }

    .orbit-message-bubble {
      max-width: 80%;
      padding: 12px 16px;
      font-size: 0.88rem;
      line-height: 1.45;
      border-radius: 16px;
      word-break: break-word;
    }

    /* User Message row (right-aligned) */
    .orbit-message-row.user {
      align-items: flex-end;
    }

    .orbit-message-row.user .orbit-message-bubble {
      background: var(--orbit-accent-gradient);
      color: #ffffff;
      border-bottom-right-radius: 4px;
      box-shadow: 0 4px 12px rgba(99, 102, 241, 0.15);
    }

    /* Agent Message row (left-aligned) */
    .orbit-message-row.agent {
      align-items: flex-start;
    }

    .orbit-message-row.agent .orbit-message-bubble {
      background: rgba(255, 255, 255, 0.05);
      color: var(--orbit-text-primary);
      border: 1px solid var(--orbit-border);
      border-bottom-left-radius: 4px;
    }
    
    /* Error / System messages */
    .orbit-message-row.system {
      align-items: center;
      margin: 4px 0;
    }

    .orbit-message-row.system .orbit-message-bubble {
      background: rgba(239, 68, 68, 0.1);
      color: #ef4444;
      border: 1px solid rgba(239, 68, 68, 0.2);
      font-size: 0.8rem;
      padding: 8px 12px;
      max-width: 90%;
      border-radius: 10px;
      text-align: center;
    }

    .orbit-message-time {
      font-size: 0.65rem;
      color: var(--orbit-text-muted);
      margin-top: 4px;
      padding: 0 4px;
    }

    /* Suggestion Chips Container */
    .orbit-suggestions-container {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      padding: 8px 20px;
      background: rgba(10, 10, 15, 0.4);
      border-top: 1px solid rgba(255, 255, 255, 0.04);
      z-index: 2;
    }

    .orbit-suggestion-chip {
      background: rgba(255, 255, 255, 0.04);
      border: 1px solid var(--orbit-border);
      color: var(--orbit-text-secondary);
      border-radius: 20px;
      padding: 6px 12px;
      font-size: 0.75rem;
      cursor: pointer;
      transition: all 0.2s ease;
      white-space: nowrap;
      user-select: none;
    }

    .orbit-suggestion-chip:hover {
      background: rgba(255, 255, 255, 0.08);
      border-color: rgba(6, 182, 212, 0.3);
      color: var(--orbit-text-primary);
      transform: translateY(-1px);
    }
    
    .orbit-suggestion-chip:active {
      transform: translateY(0);
    }

    /* Input Footer Container */
    .orbit-footer-input {
      padding: 16px 20px;
      background: rgba(10, 10, 15, 0.7);
      border-top: 1px solid var(--orbit-border);
      display: flex;
      gap: 10px;
      align-items: center;
      z-index: 10;
    }

    .orbit-input-wrapper {
      flex: 1;
      position: relative;
    }

    .orbit-text-input {
      width: 100%;
      background: rgba(255, 255, 255, 0.04);
      border: 1px solid var(--orbit-border);
      border-radius: 12px;
      padding: 12px 16px;
      color: var(--orbit-text-primary);
      font-size: 0.88rem;
      font-family: inherit;
      outline: none;
      transition: all 0.2s ease;
    }

    .orbit-text-input:focus {
      border-color: rgba(99, 102, 241, 0.5);
      background: rgba(255, 255, 255, 0.07);
      box-shadow: 0 0 10px rgba(99, 102, 241, 0.1);
    }

    .orbit-text-input::placeholder {
      color: var(--orbit-text-muted);
    }

    .orbit-send-btn {
      width: 42px;
      height: 42px;
      border-radius: 10px;
      background: var(--orbit-accent-gradient);
      border: 1px solid rgba(255, 255, 255, 0.1);
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.2s ease;
      color: #ffffff;
    }

    .orbit-send-btn:hover {
      box-shadow: var(--orbit-accent-glow);
      transform: scale(1.04);
    }

    .orbit-send-btn:active {
      transform: scale(0.96);
    }
    
    .orbit-send-btn:disabled {
      background: rgba(255,255,255,0.05);
      border-color: var(--orbit-border);
      color: var(--orbit-text-muted);
      cursor: not-allowed;
      box-shadow: none;
      transform: none;
    }

    /* Bouncing Typing Animation Dots */
    .orbit-typing-indicator {
      display: flex;
      align-items: center;
      gap: 5px;
      padding: 6px 4px;
    }

    .orbit-typing-dot {
      width: 7px;
      height: 7px;
      background-color: var(--orbit-text-secondary);
      border-radius: 50%;
      display: inline-block;
      animation: orbit-bounce 1.4s infinite ease-in-out both;
    }

    .orbit-typing-dot:nth-child(1) { animation-delay: -0.32s; }
    .orbit-typing-dot:nth-child(2) { animation-delay: -0.16s; }

    @keyframes orbit-bounce {
      0%, 80%, 100% { transform: scale(0); }
      40% { transform: scale(1); }
    }

    /* Responsive Mobile styling */
    @media (max-width: 480px) {
      #orbit-widget-root {
        bottom: 16px;
        right: 16px;
      }
      .orbit-chat-window {
        width: calc(100vw - 32px);
        height: calc(100vh - 100px);
        right: 0;
        bottom: 0;
      }
      .orbit-launcher {
        width: 54px;
        height: 54px;
      }
    }
  `;
  document.head.appendChild(styleElement);

  // --- INITIALIZE DOM ELEMENTS ---
  const widgetContainer = document.createElement("div");
  widgetContainer.id = "orbit-widget-root";

  widgetContainer.innerHTML = `
    <!-- Chat Window -->
    <div class="orbit-chat-window" id="orbit-chat-window">
      <!-- Header -->
      <div class="orbit-header">
        <div class="orbit-header-profile">
          <div class="orbit-header-avatar">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="color: white; transform: rotate(15deg);">
              <circle cx="12" cy="12" r="8"/>
              <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>
            </svg>
          </div>
          <div class="orbit-header-info">
            <h4>Orbit Assistant</h4>
            <span>
              <span style="display:inline-block; width:6px; height:6px; background:#10b981; border-radius:50%;"></span>
              Online & Local
            </span>
          </div>
        </div>
        <button class="orbit-header-close" id="orbit-close-btn" aria-label="Close chat">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>

      <!-- Messages Stream -->
      <div class="orbit-messages" id="orbit-messages-container"></div>

      <!-- Quick Reply Container -->
      <div class="orbit-suggestions-container" id="orbit-suggestions-container"></div>

      <!-- Input Bar -->
      <div class="orbit-footer-input">
        <div class="orbit-input-wrapper">
          <input type="text" class="orbit-text-input" id="orbit-chat-input" placeholder="Type a message..." autocomplete="off">
        </div>
        <button class="orbit-send-btn" id="orbit-send-btn" aria-label="Send message" disabled>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <line x1="22" y1="2" x2="11" y2="13"></line>
            <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
          </svg>
        </button>
      </div>
    </div>

    <!-- Floating Action Launcher -->
    <button class="orbit-launcher" id="orbit-launcher" aria-label="Open support chat">
      <!-- Chat Bubble Icon -->
      <svg class="chat-icon" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
      </svg>
      <!-- Morph Close "X" Icon -->
      <svg class="close-icon" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
      </svg>
    </button>
  `;

  document.body.appendChild(widgetContainer);

  // --- STATE AND ELEMENTS ---
  const launcher = document.getElementById("orbit-launcher");
  const chatWindow = document.getElementById("orbit-chat-window");
  const closeBtn = document.getElementById("orbit-close-btn");
  const messagesContainer = document.getElementById("orbit-messages-container");
  const textInput = document.getElementById("orbit-chat-input");
  const sendBtn = document.getElementById("orbit-send-btn");
  const suggestionsContainer = document.getElementById("orbit-suggestions-container");

  let chatHistory = [];
  let isAgentTyping = false;

  // --- PERSISTENCE LOADER ---
  function loadSession() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        chatHistory = JSON.parse(saved);
        chatHistory.forEach(msg => appendMessageUI(msg.sender, msg.text, msg.timestamp, false));
      } else {
        // First-time initialize with welcome message
        const welcomeMsgObj = {
          sender: "agent",
          text: WELCOME_MESSAGE,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
        chatHistory.push(welcomeMsgObj);
        saveSession();
        appendMessageUI(welcomeMsgObj.sender, welcomeMsgObj.text, welcomeMsgObj.timestamp, false);
      }
    } catch (e) {
      console.error("Orbit chat widget localstorage load failure", e);
    }
  }

  function saveSession() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(chatHistory));
    } catch (e) {
      console.error("Orbit chat widget localstorage save failure", e);
    }
  }

  // --- INTERACTION LIFECYCLE ---
  
  // Toggle Open/Close
  function toggleChat() {
    const isActive = chatWindow.classList.toggle("active");
    launcher.classList.toggle("active", isActive);
    
    if (isActive) {
      textInput.focus();
      scrollToBottom();
      renderSuggestions();
    }
  }

  launcher.addEventListener("click", toggleChat);
  closeBtn.addEventListener("click", toggleChat);

  // Input enable/disable validation
  textInput.addEventListener("input", () => {
    sendBtn.disabled = textInput.value.trim().length === 0;
  });

  // Enter Key Handler
  textInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && !sendBtn.disabled && !isAgentTyping) {
      handleUserSubmit(textInput.value.trim());
    }
  });

  // Click Send Button
  sendBtn.addEventListener("click", () => {
    if (!sendBtn.disabled && !isAgentTyping) {
      handleUserSubmit(textInput.value.trim());
    }
  });

  // Scroll to Bottom
  function scrollToBottom() {
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }

  // Append Message Bubble to UI
  function appendMessageUI(sender, text, timestamp = null, animate = true) {
    const timeStr = timestamp || new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const row = document.createElement("div");
    row.className = `orbit-message-row ${sender}`;
    if (!animate) {
      row.style.animation = "none";
    }

    row.innerHTML = `
      <div class="orbit-message-bubble">
        ${escapeHTML(text)}
      </div>
      <div class="orbit-message-time">${timeStr}</div>
    `;

    messagesContainer.appendChild(row);
    scrollToBottom();
  }

  // HTML Sanitizer
  function escapeHTML(str) {
    return str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;")
      .replace(/\n/g, "<br>"); // Allow line breaks
  }

  // Render Suggestion Chips
  function renderSuggestions() {
    suggestionsContainer.innerHTML = "";
    
    // Hide suggestions if chat has active messages and agent is typing
    if (isAgentTyping) return;
    
    QUICK_REPLIES.forEach(prompt => {
      const chip = document.createElement("button");
      chip.className = "orbit-suggestion-chip";
      chip.textContent = prompt;
      chip.addEventListener("click", () => {
        handleUserSubmit(prompt);
      });
      suggestionsContainer.appendChild(chip);
    });
  }

  // Show Typing Indicator
  function showTypingIndicator() {
    isAgentTyping = true;
    renderSuggestions(); // Hide chips
    
    const row = document.createElement("div");
    row.className = "orbit-message-row agent"
    row.id = "orbit-typing-row";
    row.innerHTML = `
      <div class="orbit-message-bubble" style="padding: 10px 14px;">
        <div class="orbit-typing-indicator">
          <span class="orbit-typing-dot"></span>
          <span class="orbit-typing-dot"></span>
          <span class="orbit-typing-dot"></span>
        </div>
      </div>
    `;
    
    messagesContainer.appendChild(row);
    scrollToBottom();
  }

  // Remove Typing Indicator
  function removeTypingIndicator() {
    isAgentTyping = false;
    const typingRow = document.getElementById("orbit-typing-row");
    if (typingRow) {
      typingRow.remove();
    }
  }

  // Render System Error Message
  function appendSystemError(text) {
    const row = document.createElement("div");
    row.className = "orbit-message-row system";
    row.innerHTML = `
      <div class="orbit-message-bubble">
        ${text}
      </div>
    `;
    messagesContainer.appendChild(row);
    scrollToBottom();
  }

  // --- SUBMIT TRANSACTION HANDLING ---
  function handleUserSubmit(messageText) {
    if (!messageText) return;

    // 1. Add message to UI
    const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    appendMessageUI("user", messageText, timestamp);
    
    // 2. Clear inputs
    textInput.value = "";
    sendBtn.disabled = true;

    // 3. Save to history
    chatHistory.push({ sender: "user", text: messageText, timestamp });
    saveSession();

    // 4. Show loading state
    showTypingIndicator();

    // 5. Send POST request
    fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "ngrok-skip-browser-warning": "true"
      },
      body: JSON.stringify({ message: messageText }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        removeTypingIndicator();
        
        const agentResponseText = data.response || "No response received.";
        const agentTimestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        
        appendMessageUI("agent", agentResponseText, agentTimestamp);
        
        chatHistory.push({ sender: "agent", text: agentResponseText, timestamp: agentTimestamp });
        saveSession();
        
        renderSuggestions(); // Re-render suggestion chips
      })
      .catch((error) => {
        console.error("Orbit chat widget backend fetch failure", error);
        removeTypingIndicator();
        
        // Detailed guidance on missing CORS or invalid URL
        let errorMsg = "Unable to reach the Agent. Check your network connection.";
        if (API_URL.includes("YOUR_NGROK_URL_HERE")) {
          errorMsg = "💡 Initial setup needed: Please open the <code>orbit-chat.js</code> file and replace <code>YOUR_NGROK_URL_HERE</code> with your live Ngrok URL.";
        } else {
          errorMsg = `⚠️ Connection to <code>${escapeHTML(API_URL)}</code> failed.<br><br>Please verify:<br>1. Your local FastAPI server is running.<br>2. Ngrok is exposing it on the correct port.<br>3. CORSMiddleware is active in main.py.`;
        }
        
        appendSystemError(errorMsg);
        renderSuggestions();
      });
  }

  // --- STARTUP LOAD ---
  // Load previous messages when window opens
  loadSession();

})();
