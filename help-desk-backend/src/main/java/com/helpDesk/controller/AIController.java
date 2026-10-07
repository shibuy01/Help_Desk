package com.helpDesk.controller;

import com.helpDesk.service.AiService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Flux;

@RestController
@RequestMapping("/api/v1/helpdesk")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:5173")
public class AIController {

    private final AiService aiService;

    @PostMapping
    public ResponseEntity<String> getResponse(
            @RequestBody String query,
            @RequestHeader("ConversationId") String conversationId) {

        return ResponseEntity.ok(
                aiService.getResponseFromAssistant(query, conversationId)
        );
    }

    @PostMapping("/stream")
    public Flux<String> streamResponse(
            @RequestBody String query,
            @RequestHeader("ConversationId") String conversationId) {

        return aiService.streamResponseFromAssistant(query, conversationId);
    }
}