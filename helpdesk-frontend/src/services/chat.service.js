import axios from "axios";

const baseURL = import.meta.env.VITE_API_URL;

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
