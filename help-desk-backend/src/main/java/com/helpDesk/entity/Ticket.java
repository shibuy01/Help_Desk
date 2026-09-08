package com.helpDesk.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.time.LocalDateTime;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Ticket {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Lob
    private String summary;

    @Enumerated(EnumType.STRING)
    private Priority priority;

    private String category;

    @Column(length = 1000)
    private String description;

    @Column(unique = true)
    private String email;

    @CreationTimestamp
    private LocalDateTime createdOn;
    @UpdateTimestamp
    private LocalDateTime updatedOn;

    @Enumerated(EnumType.STRING)
    private Status status;

    @PrePersist
    void preSave(){
        if(createdOn == null){
            createdOn = LocalDateTime.now();
        }
    }

    @PreUpdate
    void  update(){
        if(updatedOn == null){
            updatedOn = LocalDateTime.now();
        }
    }
}
