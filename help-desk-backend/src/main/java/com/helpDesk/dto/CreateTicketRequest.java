package com.helpDesk.dto;

public record CreateTicketRequest(
        String summary,
        String description,
        String email,
        String category,
        String priority
) {
}