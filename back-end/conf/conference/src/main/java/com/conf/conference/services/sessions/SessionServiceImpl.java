package com.conf.conference.services.sessions;

import com.conf.conference.models.Session;
import com.conf.conference.repositories.SessionRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;
import java.util.List;
import java.util.Optional;

/**
 * Created by Oana Hotea on 12/28/2020.
 */
@Service
public class SessionServiceImpl implements SessionService {

    @Autowired
    private SessionRepository sessionRepository;


    /**
     * get a list in database
     *
     * @return
     */
    @Override
    public List listAll() {
        return sessionRepository.findAll();
    }

    /**
     * Finds entity by ID
     *
     * @param id - unique object's ID
     * @return Optional<T>
     */
    @Override
    public Session getOne(Long id) {
        return sessionRepository.getOne(id);
    }

    /**
     * Save a new entry
     *
     * @param domainObject
     * @return
     */
    @Override
    public Session save(Session domainObject) {
        return sessionRepository.saveAndFlush(domainObject);
    }

    /**
     * Update the entity
     *
     * @param id
     * @param domainObject
     * @return
     */
    @Override
    public Session update(Long id, Session domainObject) {
        Session existingSession = sessionRepository.getOne(id);
        BeanUtils.copyProperties(domainObject, existingSession, "session_id");
        return sessionRepository.saveAndFlush(existingSession);
    }

    /**
     * Delete an entity by id
     *
     * @param id
     */
    @Override
    public void delete(Long id) {
        Session sessionToBeDeleted = sessionRepository.getOne(id);
        sessionToBeDeleted.setDeleted(true);
        sessionRepository.saveAndFlush(sessionToBeDeleted);
    }
}
