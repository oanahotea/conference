package com.conf.conference.services.speakers;

import com.conf.conference.models.Speaker;
import com.conf.conference.repositories.SpeakerRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by Oana Hotea on 12/29/2020.
 */
@Service
public class SpeakerServiceImpl implements SpeakerService {

    @Autowired
    private SpeakerRepository speakerRepository;


    /**
     * get a list in database
     *
     * @return
     */
    @Override
    public List<Speaker> listAll() {
        return speakerRepository.findAll();
    }

    /**
     * Finds entity by ID
     *
     * @param id - unique object's ID
     * @return Optional<T>
     */
    @Override
    public Speaker getOne(Long id) {
        return speakerRepository.getOne(id);
    }

    /**
     * Save a new entry
     *
     * @param domainObject
     * @return
     */
    @Override
    public Speaker save(Speaker domainObject) {
        return speakerRepository.saveAndFlush(domainObject);
    }

    /**
     * Update the entity
     *
     * @param id
     * @param domainObject
     * @return
     */
    @Override
    public Speaker update(Long id, Speaker domainObject) {
        Speaker existingSpeaker = speakerRepository.getOne(id);
        BeanUtils.copyProperties(domainObject, existingSpeaker, "session_id");
        return speakerRepository.saveAndFlush(existingSpeaker);
    }

    /**
     * Delete an entity by id
     *
     * @param id
     */
    @Override
    public void delete(Long id) {

        Speaker speakerToBeDeleted = speakerRepository.getOne(id);
        speakerToBeDeleted.setDeleted(true);
        speakerRepository.saveAndFlush(speakerToBeDeleted);

    }
}
