async function getAIResponse() {
    const apiKey = ""; // Replace with your actual API key
    const userCode = document.getElementById("codeInput").value;

    const requestBody = {
        model: "gemini-pro",
        messages: [{ role: "user", content: "Improve this Python code: " + userCode }],
    };

    try {
        const response = await fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=" + apiKey, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(requestBody)
        });

        const result = await response.json();
        document.getElementById("aiResponse").innerText = result.candidates?.[0]?.content ?? "No response from AI.";
    } catch (error) {
        console.error("Error fetching AI response:", error);
        document.getElementById("aiResponse").innerText = "Error fetching AI response.";
    }
}
