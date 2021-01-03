package com.conf.conference.models;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.service.spi.InjectService;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToOne;
import java.sql.Date;
import java.sql.Time;
import java.util.List;

/**
 * Created by Oana Hotea on 12/30/2020.
 */
@Entity(name = "time_slots")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class TimeSlots {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long time_slot_id;

    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
    private Date time_slot_date;
    private Time start_time;
    private Time end_time;
    private Boolean is_keynote_time_slot;
    private Boolean deleted;


    @OneToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinTable(
            name = "session_schedule",
            joinColumns = @JoinColumn(name = "time_slot_id"),
            inverseJoinColumns = @JoinColumn(name = "session_id"))
    private Session session;


    public Long getTime_slot_id() {
        return time_slot_id;
    }

    public void setTime_slot_id(Long time_slot_id) {
        this.time_slot_id = time_slot_id;
    }

    public Date getTime_slot_date() {
        return time_slot_date;
    }

    public void setTime_slot_date(Date time_slot_date) {
        this.time_slot_date = time_slot_date;
    }

    public Time getStart_time() {
        return start_time;
    }

    public void setStart_time(Time start_time) {
        this.start_time = start_time;
    }

    public Time getEnd_time() {
        return end_time;
    }

    public void setEnd_time(Time end_time) {
        this.end_time = end_time;
    }

    public Boolean getIs_keynote_time_slot() {
        return is_keynote_time_slot;
    }

    public void setIs_keynote_time_slot(Boolean is_keynote_time_slot) {
        this.is_keynote_time_slot = is_keynote_time_slot;
    }

    public Boolean getDeleted() {
        return deleted;
    }

    public void setDeleted(Boolean deleted) {
        this.deleted = deleted;
    }

    public Session getSession() {
        return session;
    }

    public void setSession(Session session) {
        this.session = session;
    }
}
