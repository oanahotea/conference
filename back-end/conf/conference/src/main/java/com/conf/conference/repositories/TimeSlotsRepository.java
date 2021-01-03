package com.conf.conference.repositories;

import com.conf.conference.models.TimeSlots;
import org.springframework.data.jpa.repository.JpaRepository;


/**
 * Created by Oana Hotea on 12/30/2020.
 */
public interface TimeSlotsRepository extends JpaRepository<TimeSlots,Long> {
}
