package com.conf.conference.controllers;

import com.conf.conference.models.Attendees;
import com.conf.conference.services.attendees.AttendeesService;
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
 * Created by Oana Hotea on 12/29/2020.
 */
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/api/attendees")
public class AttendeesController {
    @Autowired
    private AttendeesService attendeesService;

    @GetMapping
    public List<Attendees> list() {
        return attendeesService.listAll();
    }

    @GetMapping
    @RequestMapping("{id}")
    public Attendees get(@PathVariable Long id) {
        return attendeesService.getOne(id);
    }

    @PostMapping
    public Attendees create(@RequestBody final Attendees attendees) {
        return attendeesService.save(attendees);
    }

    @RequestMapping(value = "{id}", method = RequestMethod.DELETE)
    public void delete(@PathVariable Long id) {
        attendeesService.delete(id);
    }

    @RequestMapping(value = "{id}", method = RequestMethod.PUT)
    public Attendees update(@PathVariable Long id, @RequestBody Attendees attendees) {

        return attendeesService.update(id, attendees);


    }
}
