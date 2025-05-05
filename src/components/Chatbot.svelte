
<script>
    import { getBotResponse } from "./chatbotRules.js";
    let userInput = "";
    let messages = [
        { from: "bot", text: "Hi! I'm your virtual assistant. How can I help?" }
    ];
    let isOpen = false;

    function sendMessage() {
        const trimmed = userInput.trim();
        if (!trimmed) return;
        messages = [...messages, { from: "user", text: trimmed }];
        const response = getBotResponse(trimmed);
        messages = [...messages, { from: "bot", text: response }];
        userInput = "";
        setTimeout(() => {
            const chatWindow = document.getElementById('chat-window');
            if (chatWindow) chatWindow.scrollTop = chatWindow.scrollHeight;
        }, 10);
    }

    function openChat() {
        isOpen = true;
        setTimeout(() => {
            // Focus input field when opening the chat
            const input = document.querySelector('.chatbot-container input');
            if (input) input.focus();
        }, 100);
    }
    function closeChat() {
        isOpen = false;
    }
</script>

<style>
    .chatbot-fab {
        position: fixed;
        bottom: 30px;
        right: 30px;
        background: #3678e5;
        color: #fff;
        border: none;
        width: 56px;
        height: 56px;
        border-radius: 50%;
        box-shadow: 0 2px 8px rgba(0,0,0,0.20);
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 2rem;
        z-index: 1001;
        transition: background 0.2s;
    }
    .chatbot-fab:hover {
        background: #285a9c;
    }
    .chatbot-container {
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 320px;
        background: #fff;
        border-radius: 12px;
        box-shadow: 0 2px 14px rgba(0,0,0,0.2);
        overflow: hidden;
        z-index: 1002;
        display: flex;
        flex-direction: column;
        font-family: Arial, sans-serif;
        opacity: 1;
        animation: fadeInChat 0.18s;
    }
    @keyframes fadeInChat {
        0% { opacity: 0; transform: scale(0.96);}
        100% { opacity: 1; transform: scale(1);}
    }
    .chatbot-header {
        background: #3678e5;
        color: #fff;
        padding: 12px 16px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 1rem;
        font-weight: 500;
    }
    .chatbot-close {
        cursor: pointer;
        font-size: 1.3rem;
        border: none;
        background: transparent;
        color: #fff;
        margin-left: 12px;
        padding: 0;
        line-height: 1;
        transition: color 0.18s;
    }
    .chatbot-close:hover {
        color: #f8d1d1;
    }
    #chat-window {
        height: 280px;
        overflow-y: auto;
        padding: 16px;
        background: #f8f8f8;
        flex: 1 1 auto;
    }
    .message {
        margin-bottom: 12px;
        max-width: 90%;
    }
    .bot { color: #333; }
    .user { text-align: right; color: #3678e5; }
    .input-row {
        display: flex;
        padding: 8px;
        background: #eee;
    }
    .input-row input {
        flex: 1; padding: 8px; border: none; border-radius: 6px;
    }
    .input-row button {
        margin-left: 6px; padding: 8px 12px; background: #3678e5; color: #fff; border: none; border-radius: 6px; cursor: pointer;
    }
</style>

{#if !isOpen}
    <!-- Floating Action Button to trigger chat modal -->
    <button class="chatbot-fab" aria-label="Open chatbot" on:click={openChat}>
        💬
    </button>
{/if}

{#if isOpen}
    <div class="chatbot-container">
        <div class="chatbot-header">
            Chatbot
            <button class="chatbot-close" aria-label="Close chatbot" on:click={closeChat} title="Close">&times;</button>
        </div>
        <div id="chat-window">
            {#each messages as m}
                <div class="message {m.from}">
                    <strong>{m.from === 'bot' ? 'Bot:' : 'You:'}</strong> {m.text}
                </div>
            {/each}
        </div>
        <form class="input-row" on:submit|preventDefault={sendMessage}>
            <input
                    placeholder="Type your message..."
                    bind:value={userInput}
                    on:keydown={(e) => e.key === 'Enter' && sendMessage()}
                    autocomplete="off"
            />
            <button type="submit">Send</button>
        </form>
    </div>
{/if}
