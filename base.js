var base = base || {};

base.alreadySeen = function (config) {
    'use strict'

    var self = this;
    self.config = config || {
        rules: [
            {
                location: '',
                exceptions: []
            }
        ],
        prefix: 'visited-',
        data: 'visited'
    };

    self.track = function (client) {
        self.config.rules.forEach(function (track) {
            var permission = true;

            if (client.substr(0, track.location.length) === track.location) {
                if (typeof track.exceptions === 'object' && !Array.isArray(track.exceptions)) {
                    track.exceptions = [track.exceptions];
                }

                track.exceptions.forEach(function (exception) {
                    if (client.substr(0, exception.location.length) === exception.location) {
                        permission = false;
                    }
                });

                if (permission === true) {
                    localStorage.setItem(self.config.prefix + window.location.pathname, 'true');
                }
            }
        });
    };

    self.check = function (links) {
        if (typeof links === 'object' && !Array.isArray(links)) {
            links = Object.keys(links).map(function (key) { return links[key] });
        }

        links.forEach(function (link) {
            if (link.host == window.location.host && localStorage.getItem(self.config.prefix + link.pathname)) {
                link.dataset[self.config.data] = true;
            }
        });
    };
};