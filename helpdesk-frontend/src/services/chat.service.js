import axios from "axios";

const baseURL = "http://localhost:8080/api/v1";

export const sendMessagesToServer = async (
    message,
    conversationId
) => {
    return await axios.post(
        `${baseURL}/helpdesk`,
        message,
        {
            headers: {
                "Content-Type": "text/plain",
                ConversationId: conversationId,
            },
        }
    );
};