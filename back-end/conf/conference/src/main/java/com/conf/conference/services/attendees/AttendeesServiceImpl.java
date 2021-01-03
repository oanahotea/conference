package com.conf.conference.services.attendees;

import com.conf.conference.models.Attendees;
import com.conf.conference.repositories.AttendeesRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by Oana Hotea on 12/29/2020.
 */
@Service
public class AttendeesServiceImpl implements AttendeesService {

    @Autowired
    private AttendeesRepository attendeesRepository;


    /**
     * get a list in database
     *
     * @return
     */
    @Override
    public List<Attendees> listAll() {
        return attendeesRepository.findAll();
    }

    /**
     * Finds entity by ID
     *
     * @param id - unique object's ID
     * @return Optional<T>
     */
    @Override
    public Attendees getOne(Long id) {
        return attendeesRepository.getOne(id);
    }

    /**
     * Save a new entry
     *
     * @param domainObject
     * @return
     */
    @Override
    public Attendees save(Attendees domainObject) {
        return attendeesRepository.saveAndFlush(domainObject);
    }

    /**
     * Update the entity
     *
     * @param id
     * @param domainObject
     * @return
     */
    @Override
    public Attendees update(Long id, Attendees domainObject) {
        Attendees existingAttendee = attendeesRepository.getOne(id);
        BeanUtils.copyProperties(domainObject, existingAttendee, "attendee_id");
        return attendeesRepository.saveAndFlush(existingAttendee);
    }

    /**
     * Delete an entity by id
     *
     * @param id
     */
    @Override
    public void delete(Long id) {
            Attendees attendeeToBeDeleted = attendeesRepository.getOne(id);
            attendeeToBeDeleted.setDeleted(true);
            attendeesRepository.saveAndFlush(attendeeToBeDeleted);
    }
}
