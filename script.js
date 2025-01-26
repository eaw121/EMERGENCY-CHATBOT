// Store chat history in an array
let chatHistory = [];

// Predefined emergency advice for police encounters
const advice = {
    "start": "Hello! If you're being stopped by the police, it's important to stay calm and polite. How can I assist you?",
    "rights": "You have the right to remain silent. You do not need to answer questions without a lawyer present. Do you need more information?",
    "ask_for_id": "You can politely ask for the officer's name and badge number. It's your right to know who you're dealing with.",
    "ask_for_warrant": "If you're being searched or detained, you can politely ask if they have a warrant. You have the right to ask for a copy.",
    "remain_silent": "Remember, it's okay to remain silent. You don't have to answer questions without your attorney present."
};

// Function to add messages to the chat
function addMessage(sender, message) {
    const chatHistoryElement = document.getElementById('chat-history');
    const messageElement = document.createElement('div');
    messageElement.textContent = `${sender}: ${message}`;
    chatHistoryElement.appendChild(messageElement);
    chatHistoryElement.scrollTop = chatHistoryElement.scrollHeight; // Scroll to the bottom
}

// Function to handle user input and bot responses
function sendMessage() {
    const userInput = document.getElementById('user-input').value.trim().toLowerCase();
    if (userInput === "") return;

    // Add user message
    addMessage("You", userInput);

    // Add bot's response
    let botResponse = "";
    if (userInput.includes("rights")) {
        botResponse = advice.rights;
    } else if (userInput.includes("id") || userInput.includes("name") || userInput.includes("badge")) {
        botResponse = advice.ask_for_id;
    } else if (userInput.includes("warrant") || userInput.includes("search") || userInput.includes("detained")) {
        botResponse = advice.ask_for_warrant;
    } else if (userInput.includes("silent") || userInput.includes("remain silent")) {
        botResponse = advice.remain_silent;
    } else {
        botResponse = advice.start;
    }

    addMessage("Bot", botResponse);

    // Clear input field after sending message
    document.getElementById('user-input').value = '';
}

// Initialize with a welcome message
window.onload = function() {
    addMessage("Bot", advice.start);
};
