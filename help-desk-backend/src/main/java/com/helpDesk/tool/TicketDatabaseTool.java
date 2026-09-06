package com.helpDesk.tool;

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
    @Tool(description = "This tool help to create new ticket in database.")
    public Ticket createTicketTool(@ToolParam(description = "Ticket details") Ticket ticket) {
        return ticketService.addTicket(ticket);
    }

    // get ticket using username
    @Tool(description = "This tool helps to get ticket by username.")
    public Ticket getTicketByUsername(@ToolParam(description = "username whoose ticket is required") String username){
        return ticketService.getTicketByUsername(username);
    }

    // update ticket
    @Tool(description = "This tool helps to update ticket")
    public Ticket updateTicket(@ToolParam(description = "new ticket details with ticket id")  Ticket ticket){
        return ticketService.updateTicket(ticket);
    }
    
    // get current date and time
    @Tool(description = "This tool helps to get current system time.")
    public String getDateAndTime(){
        return String.valueOf(System.currentTimeMillis());
    }
}
