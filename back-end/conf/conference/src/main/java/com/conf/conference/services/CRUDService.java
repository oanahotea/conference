package com.conf.conference.services;

import java.util.List;
import java.util.Optional;

/**
 * Created by Oana Hotea on 12/29/2020.
 */
public interface CRUDService<T> {
    /**
     * Get a list in database
     * @return
     */
    List<T> listAll();

    /**
     * Finds entity by ID
     *
     * @param id - unique object's ID
     * @return Optional<T>
     */
    T getOne(Long id);

    /**
     * Save a new entry
     * @param domainObject
     * @return
     */
    T save(T domainObject);

    /**
     * Update the entity
     * @param id
     * @param domainObject
     * @return
     */
    T update(Long id, T domainObject);

    /**
     * Delete an entity by id
     * @param id
     */
    void delete(Long id);
}
