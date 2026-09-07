package com.helpDesk.repository;

import com.helpDesk.entity.Ticket;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TicketRepository extends JpaRepository<Ticket,Long> {

//    Ticket findById(long id);
    Ticket findByEmail(String email);
}
