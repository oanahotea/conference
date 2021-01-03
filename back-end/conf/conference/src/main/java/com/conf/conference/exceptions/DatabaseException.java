package com.conf.conference.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

/**
 * Created by Oana Hotea on 12/28/2020.
 */
@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class DatabaseException extends RuntimeException{
    private static final long serialVersionUID = 1L;


    public DatabaseException(String message) {
        super(message);
    }



}
