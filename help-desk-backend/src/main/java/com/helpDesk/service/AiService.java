package com.helpDesk.service;

import com.helpDesk.tool.TicketDatabaseTool;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.springframework.ai.chat.client.ChatClient;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.Resource;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
@Data
public class AiService {

    private final ChatClient chatClient;
    private final TicketDatabaseTool ticketDatabaseTool;

    @Value("classpath:/helpdesk-system.st")
    private Resource systemPromptResource;

    public String getResponseFromAssistant(String query){
        return this.chatClient
                .prompt()
                // tools infomation
                .tools(ticketDatabaseTool)
                .system(systemPromptResource)
                .user(query)
                .call()
                .content();
    }
}
