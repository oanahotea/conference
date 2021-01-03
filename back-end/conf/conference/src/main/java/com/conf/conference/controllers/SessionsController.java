package com.conf.conference.controllers;

import com.conf.conference.dto.SessionDto;
import com.conf.conference.models.Session;
import com.conf.conference.services.sessions.SessionService;
import com.conf.conference.services.speakers.SpeakerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * Created by Oana Hotea on 12/22/2020.
 */
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/api/sessions")
public class SessionsController {

    @Autowired
    private SessionService sessionService;

    @Autowired
    private SpeakerService speakerService;

    @GetMapping
    public List<Session> list(){
        return sessionService.listAll();
    }

    @GetMapping
    @RequestMapping("{id}")
    public Session get(@PathVariable Long id)  {
        return sessionService.getOne(id);
    }

    @PostMapping
    public Session create(@RequestBody final Session session) {

//        Session session = new Session();
//        session.setSession_name(sessionDto.getSession_name());
//        session.setSession_description(sessionDto.getSession_description());
//        session.setSession_length(sessionDto.getSession_length());
//        session.setSpeaker(speakerService.getOne(sessionDto.getSpeaker_id()));
        return sessionService.save(session);
    }

    @RequestMapping(value = "{id}", method = RequestMethod.DELETE)
    public void delete(@PathVariable Long id) {
        sessionService.delete(id);
    }

    @RequestMapping(value = "{id}", method = RequestMethod.PUT)
    public Session update(@PathVariable Long id, @RequestBody Session session) {

        return sessionService.update(id, session);


    }

}
