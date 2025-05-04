
<script>
    import { getBotResponse } from "./chatbotRules.js";

    let userInput = "";
    let messages = [
        { from: "bot", text: "Hi! I'm your virtual assistant. How can I help?" }
    ];

    function sendMessage() {
        const trimmed = userInput.trim();
        if (!trimmed) return;
        messages = [...messages, { from: "user", text: trimmed }];
        const response = getBotResponse(trimmed);
        messages = [...messages, { from: "bot", text: response }];
        userInput = "";
        // Scroll to bottom (optional enhancement)
        setTimeout(() => {
            const chatWindow = document.getElementById('chat-window');
            if (chatWindow) chatWindow.scrollTop = chatWindow.scrollHeight;
        }, 10);
    }
</script>

<style>
    .chatbot-container {
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 320px;
        background: #fff;
        border-radius: 12px;
        box-shadow: 0 2px 14px rgba(0,0,0,0.2);
        overflow: hidden;
        z-index: 1000;
        display: flex;
        flex-direction: column;
        font-family: Arial, sans-serif;
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

<div class="chatbot-container">
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
