
/**
 * Enhanced rule-based chatbot engine.
 * Now with personalization, better pattern coverage, and random/generic responses.
 */

let userName = null;

function randomFrom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

const greetings = [
    "Hello! How can I assist you today?",
    "Hi there! What can I do for you?",
    "Hey! Need any help?",
    "Greetings! How may I help?"
];

const thanksResponses = [
    "You're welcome!",
    "No problem! Anything else?",
    "Glad I could help!",
    "Don't mention it!"
];

// Add more question/answer rules here
const rules = [
    // Name handling
    {
        pattern: /(my name is (\w+))/i,
        respond: (msg, match) => {
            userName = match[2];
            return `Nice to meet you, ${userName}! How can I help you today?`;
        }
    },
    {
        pattern: /(what is my name)/i,
        respond: () => userName ? `Your name is ${userName}.` : "I don't know your name yet! What's your name?"
    },

    // Basic greetings
    {
        pattern: /\b(hello|hi|hey|greetings)\b/i,
        respond: () => randomFrom(greetings)
    },
    // Thank you
    {
        pattern: /(thank you|thanks)/i,
        respond: () => randomFrom(thanksResponses)
    },
    // Who are you
    {
        pattern: /(who are you|what are you)/i,
        respond: () => "I'm a friendly chatbot, here to assist you with your questions!"
    },
    // Contact
    {
        pattern: /(contact|reach (you|us|out))/i,
        respond: () => "You can reach out via the Contact section on the website."
    },
    // Help/about
    {
        pattern: /\b(help|support)\b/i,
        respond: () => "Sure, let me know what you need help with! You can ask about the site, contacting me, or general questions."
    },
    // Simple math
    {
        pattern: /\bwhat is (\d+)\s*[\+\-\*\/]\s*(\d+)\b/i,
        respond: (msg, match) => {
            let expr = match[0].match(/(\d+)\s*([\+\-\*\/])\s*(\d+)/);
            if (expr) {
                const a = parseInt(expr[1]);
                const op = expr[2];
                const b = parseInt(expr[3]);
                let res = null;
                switch (op) {
                    case "+": res = a + b; break;
                    case "-": res = a - b; break;
                    case "*": res = a * b; break;
                    case "/": res = b !== 0 ? a / b : "undefined (div by zero)"; break;
                }
                return `The answer is ${res}.`;
            }
            return "Sorry, I couldn't parse the calculation.";
        }
    },
    // Fallback small talk
    {
        pattern: /(how are you)/i,
        respond: () => "I'm doing well, thank you! How about you?"
    },
    {
        pattern: /(what can you do|features)/i,
        respond: () => "I can answer simple questions, remember your name, do basic math, and offer information about the site!"
    },
];

export function getBotResponse(message) {
    const msg = message.toLowerCase().trim();

    for (const rule of rules) {
        const match = msg.match(rule.pattern);
        if (match) {
            return typeof rule.respond === "function" ? rule.respond(msg, match) : rule.respond;
        }
    }

    // Try to handle questions ending with "?" which do not match known patterns
    if (msg.endsWith("?")) {
        return "That's an interesting question! I may not know the answer yet, but I'm learning.";
    }

    // Default fallback
    return "Sorry, I don't understand. Try rephrasing your question or ask about features!";
}
