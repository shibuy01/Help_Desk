package com.helpDesk.controller;

import com.helpDesk.service.AiService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/v1/ai")
@RequiredArgsConstructor
public class AIController {

    private final AiService aiService;

    @PostMapping
    public ResponseEntity<String> getResponse(@RequestBody String query) {
        return ResponseEntity.ok(aiService.getResponseFromAssistant(query));
    }
}
