# already-seen
This snippet should track all websites and mark them as read
It stores the information by localStorage.

## How to config
Actually you are able to configurate the sites that should be tracked.
Further more you can configurate exceptions by the following object:

```
var config = {
    rules: [
        {
            location: '/path/',
            exceptions: [
                {
                    location: '/path/exception'
                }
            ]
        }
    ],
    prefix: 'prefix-'
};
```