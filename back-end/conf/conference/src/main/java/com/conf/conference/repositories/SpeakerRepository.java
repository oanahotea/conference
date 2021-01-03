package com.conf.conference.repositories;

import com.conf.conference.models.Speaker;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * Created by Oana Hotea on 12/21/2020.
 */
@Repository
public interface SpeakerRepository extends JpaRepository<Speaker,Long> {
}
