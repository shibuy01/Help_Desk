package com.helpDesk.tool;

import com.helpDesk.dto.CreateTicketRequest;
import com.helpDesk.entity.Priority;
import com.helpDesk.entity.Ticket;
import com.helpDesk.service.TicketService;
import lombok.RequiredArgsConstructor;
import org.springframework.ai.tool.annotation.Tool;
import org.springframework.ai.tool.annotation.ToolParam;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class TicketDatabaseTool {

    private final TicketService ticketService;

    // Create ticket tool
    @Tool(description = "Create a new ticket in the database.")
    public Ticket createTicketTool(
            @ToolParam(description = "Information required to create a new ticket")
            CreateTicketRequest request) {

        Ticket ticket = new Ticket();

        ticket.setSummary(request.summary());
        ticket.setDescription(request.description());
        ticket.setEmail(request.email());
        ticket.setCategory(request.category());

        if (request.priority() != null) {
            ticket.setPriority(
                    Priority.valueOf(request.priority().toUpperCase())
            );
        }

        return ticketService.addTicket(ticket);
    }

    // get ticket using email
    @Tool(description = "This tool helps to get ticket by email.")
    public Ticket getTicketByEmail(@ToolParam(description = "email whose ticket is required") String email){
        return ticketService.getTicketByEmail(email);
    }

    // update ticket
    @Tool(description = "This tool helps to update ticket")
    public Ticket updateTicket(@ToolParam(description = "new ticket details with ticket id")  Ticket ticket){
        return ticketService.updateTicket(ticket);
    }
    
    // get current date and time
    @Tool(description = "Get the current date and time.")
    public String getDateAndTime() {
        return java.time.LocalDateTime.now().toString();
    }
}
