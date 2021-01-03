package com.conf.conference.controllers;

import com.conf.conference.models.TimeSlots;
import com.conf.conference.services.timeSlots.TimeSlotsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * Created by Oana Hotea on 12/30/2020.
 */
@RestController
@RequestMapping("/api/time_slots")
public class TimeSlotsController {

    @Autowired
    private TimeSlotsService timeSlotsService;

    @GetMapping
    public List<TimeSlots> list() {
        return timeSlotsService.listAll();
    }

    @GetMapping
    @RequestMapping("/{id}")
    public TimeSlots getById(Long id) {
        return timeSlotsService.getOne(id);
    }

    @PostMapping
    public TimeSlots create(@RequestBody final TimeSlots timeSlots) {
        return timeSlotsService.save(timeSlots);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public void delete(@PathVariable Long id) {
        timeSlotsService.delete(id);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.PUT)
    public TimeSlots update(@PathVariable Long id, @RequestBody TimeSlots timeSlots) {
        return timeSlotsService.update(id,timeSlots);
    }
}
