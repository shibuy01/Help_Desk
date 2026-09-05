package com.helpDesk.service;

import com.helpDesk.entity.Ticket;
import com.helpDesk.repository.TicketRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class TicketServiceImpl implements TicketService {

    private final TicketRepository ticketRepository;

    @Override
    public Ticket addTicket(Ticket ticket) {
        return this.ticketRepository.save(ticket);
    }

    @Override
    public Ticket findById(long id) {
        return this.ticketRepository.findById(id).orElseThrow(()-> new RuntimeException("Ticket not Foound"));;
    }

    @Override
    public Void deleteById(long id) {
        this.ticketRepository.deleteById(id);
        return null;
    }

    @Override
    public List<Ticket> findAll() {
        return this.ticketRepository.findAll();
    }

    @Override
    public Ticket updateTicket(Ticket ticket) {
        return this.ticketRepository.save(ticket);
    }
}
