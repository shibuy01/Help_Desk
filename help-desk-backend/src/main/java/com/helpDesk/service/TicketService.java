package com.helpDesk.service;

import com.helpDesk.entity.Ticket;

import java.util.List;

public interface TicketService {

    Ticket  addTicket(Ticket ticket);

    Ticket findById(long id);

    Void deleteById(long id);

    List<Ticket> findAll();

    Ticket updateTicket(Ticket ticket);
}
