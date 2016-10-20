import React from 'react';

export const getCookie = (cname) => {
    let name = cname + "=";
    let cookie = document.cookie ? document.cookie : undefined ;
    if (cookie === undefined) return "";

    let ca = cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
};