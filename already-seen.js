var jstiller = jstiller || {};
jstiller.modules = jstiller.modules || {};

jstiller.modules.alreadySeen = (function (dependency) {
  var estimatedSettings,
    defaultSettings = {
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
   * sets custom settings
   * 
   * @param {object} deliveredSettings
   * @return {object}
   */
  function settings(deliveredSettings) {
    estimatedSettings = dependency.window.Object.assign(defaultSettings, deliveredSettings);

    return this;
  }

  /**
   * tracks the delivered url
   * 
   * @param {string} deliveredClient URL
   * @return {object}
   */
  function track(deliveredClient) {
    estimatedSettings.rules.forEach(function (receivedTrack) {
      var estimatedPermission = true;

      if (deliveredClient.substr(0, receivedTrack.location.length) === receivedTrack.location) {
        if (typeof receivedTrack.exceptions === 'object' && !dependency.window.Array.isArray(receivedTrack.exceptions)) {
          receivedTrack.exceptions = [receivedTrack.exceptions];
        }

        receivedTrack.exceptions.forEach(function (receivedException) {
          if (deliveredClient.substr(0, receivedException.location.length) === receivedException.location) {
            estimatedPermission = false;
          }
        });

        if (estimatedPermission === true) {
          dependency.window.localStorage.setItem(estimatedSettings.prefix + dependency.window.location.pathname, 'true');
        }
      }
    });

    return this;
  };

  /**
   * 
   * @param {string} deliveredLinks
   * @return {object}
   */
  function check(deliveredLinks) {
    if (typeof deliveredLinks === 'object' && !dependency.window.Array.isArray(deliveredLinks)) {
      deliveredLinks = dependency.window.Object.keys(deliveredLinks).map(function (key) {
        return deliveredLinks[key]
      });
    }

    deliveredLinks.forEach(function (receivedLink) {
      if (receivedLink.host == dependency.window.location.host && dependency.window.localStorage.getItem(estimatedSettings.prefix + receivedLink.pathname)) {
        receivedLink.dataset[estimatedSettings.data] = true;
      }
    });

    return this;
  };
  
  return {
    settings: settings,
    track: track,
    check: check,
  };
}({
  window: window,
}));
