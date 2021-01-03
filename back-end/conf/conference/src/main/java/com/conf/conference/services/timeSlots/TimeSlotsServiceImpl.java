package com.conf.conference.services.timeSlots;

import com.conf.conference.models.TimeSlots;
import com.conf.conference.repositories.TimeSlotsRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by Oana Hotea on 12/30/2020.
 */
@Service
public class TimeSlotsServiceImpl implements TimeSlotsService {

    @Autowired
    private TimeSlotsRepository timeSlotsRepository;

    /**
     * Get a list in database
     *
     * @return
     */
    @Override
    public List<TimeSlots> listAll() {
        return timeSlotsRepository.findAll();
    }

    /**
     * Finds entity by ID
     *
     * @param id - unique object's ID
     * @return Optional<T>
     */
    @Override
    public TimeSlots getOne(Long id) {
        return timeSlotsRepository.getOne(id);
    }

    /**
     * Save a new entry
     *
     * @param domainObject
     * @return
     */
    @Override
    public TimeSlots save(TimeSlots domainObject) {
        return timeSlotsRepository.saveAndFlush(domainObject);
    }

    /**
     * Update the entity
     *
     * @param id
     * @param domainObject
     * @return
     */
    @Override
    public TimeSlots update(Long id, TimeSlots domainObject) {
        TimeSlots existingTimeSlots = timeSlotsRepository.getOne(id);
        BeanUtils.copyProperties(domainObject, existingTimeSlots, "schedule_id");
        return timeSlotsRepository.saveAndFlush(existingTimeSlots);
    }

    /**
     * Delete an entity by id
     *
     * @param id
     */
    @Override
    public void delete(Long id) {
        TimeSlots timeSlotToBeDeleted = timeSlotsRepository.getOne(id);
        timeSlotToBeDeleted.setDeleted(true);
        timeSlotsRepository.saveAndFlush(timeSlotToBeDeleted);
    }
}
