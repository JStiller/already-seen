var base = base || {};

/**
 * Already Seen
 * 
 * This function should track all articles and mark them as read
 * 
 * @author José Stiller
 * @retun void
 */
base.alreadySeen = function(config) {
    var self = this;
    self.config = config;
    
    if(typeof self.config === 'undefined') {
        self.config = {
            rules: [
                {
                    location: '',
                    exceptions: []
                }
            ],
            prefix: 'visited-'
        };
    }
    
    /**
     * Track
     * 
     * Should track all visited sites that are configurated
     * including the exceptions
     */
    self.track = function () {
        var clientLocation = window.location.pathname;
        
        // iterate trough all defined rules
        for (var i = 0; i < self.config.rules.length; i++) {
            var trackedLocation = self.config.rules[i].location,
                exceptions = self.config.rules[i].exceptions,
                track = true;

            // checks if the rule matches
            if (clientLocation.substr(0, trackedLocation.length) === trackedLocation) {
                // iterate trough all exceptions
                for (var n = 0; n < exceptions.length; n++) {
                    var exceptionsLocation = exceptions[n].location;
                    // check if the exception matches
                    if (clientLocation.substr(0, exceptionsLocation.length) === exceptionsLocation) {
                        track = false;
                    }
                }
                
                // store path if none of the exceptions matched
                if (track === true) {
                    localStorage.setItem(self.config.prefix + window.location.pathname, true);
                }
            }
        }
    };
    
    self.check = function () {
        // grab all links
        var links = document.getElementsByTagName('a');
        
        // iterate trough all links and check if that link was already visited
        for (var i = 0; i < links.length; i++) {
            if (links[i].host == window.location.host && localStorage.getItem(self.config.prefix + links[i].pathname)) {
                links[i].dataset.visited = true;
            }
        };
    };
};

var config = {
    rules: [
        {
            location: '/journal/',
            exceptions: [
                {
                    location: '/journal/archiv'
                }
            ]
        }
    ],
    prefix: 'visited-'
};

var josestiller = new base.alreadySeen(config);
josestiller.track();
josestiller.check();