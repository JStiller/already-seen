var base = base || {};

/**
 * Already Seen
 * 
 * This function should track all websites and mark them as seen
 * 
 * @author José Stiller
 * @email info@josestiller.de
 * @retun void
 */
base.alreadySeen = function(config) {
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
    
    /**
     * Track
     * 
     * Should track all visited sites that are configurated
     * excluding the exceptions
     */
    self.track = function (client) {
        // iterate trough all defined rules
        self.config.rules.forEach(function(track) {
            var ytrack = true;

            // checks if the rule matches
            if (client.substr(0, track.location.length) === track.location) {
                // iterate trough all exceptions
                if(typeof track.exceptions === "object") {
                    track.exceptions = [track.exceptions];
                }
                
                track.exceptions.forEach(function(exception) {
                    // check if the exception matches
                    if (client.substr(0, exception.location.length) === exception.location) {
                        ytrack = false;
                    }
                });
                
                // store path if none of the exceptions matched
                if (ytrack === true) {
                    localStorage.setItem(self.config.prefix + window.location.pathname, true);
                }
            }
        });
    };
    
    self.check = function (links) {
        if(!Array.isArray(links)) {
            links = Object.keys(links).map(function (key) {return links[key]});
        }
        
        // iterate trough all links and check if it was already visited
        // for (var i = 0; i < links.length; i++) {
        //     if (links[i].host == window.location.host && localStorage.getItem(self.config.prefix + links[i].pathname)) {
        //         links[i].dataset.visited = true;
        //     }
        // };
        
        links.forEach(function(link) {
            if (link.host == window.location.host && localStorage.getItem(self.config.prefix + link.pathname)) {
                link.dataset[self.config.data] = true;
            } 
        });
    };
};