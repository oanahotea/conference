package com.conf.conference.repositories;

import com.conf.conference.models.Attendees;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * Created by Oana Hotea on 12/29/2020.
 */
@Repository
public interface AttendeesRepository extends JpaRepository<Attendees,Long> {
}
