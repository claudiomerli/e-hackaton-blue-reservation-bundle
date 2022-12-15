package org.entando.hackaton.utils;


import lombok.extern.slf4j.Slf4j;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Locale;

@Slf4j
public class UtilsDate {

    public static Date convertStringToDate(String dateString) {
        SimpleDateFormat formatter = new SimpleDateFormat("dd-MMM-yyyy", Locale.ENGLISH);
        Date date = new Date();
        try {
            date = formatter.parse(dateString);
        } catch (ParseException parseException){
            log.error("errorParsDate");
        }
        return date;
    }
}
