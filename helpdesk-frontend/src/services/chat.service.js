import axios from "axios"

const baseURL = 'http://localhost:8080/api/v1'

export const sendMessagesToServer = async(messages, conversationId) => {

    const response = await axios.post(`${baseURL}/helpdesk`, messages,{
        headers:{
            conversationId:conversationId
        },
    })

    return response;
}