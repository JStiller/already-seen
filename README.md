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
    prefix: 'prefix-',
    data: 'name'
};
```

### Rules
The config includes rules that discribes the locations that should
be tracked.

The following example tracks everything on a webpage and is set by
default.
```
var config = {
    rules: [
        {
            location: ''
        }
    ];
```

If you only want to track everything within a specific path
```
var config = {
    rules: [
        {
            location: '/path'
        }
    ];
```

If you want to track everything within a specific path
without one or more subdirectories, you can define exceptions.
```
var config = {
    rules: [
        {
            location: '/path',
            exceptions: {
                location: '/path/subdirectory'
            }
        }
    ];
    
    rules: [
        {
            location: '/path',
            exceptions: [
                {
                    location: '/path/subdirectory'
                },
                {
                    location: '/path/anotherSubdirectory'
                }
            ]
        }
    ];
```

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
    prefix: 'visited-',
    data: 'visited'
};

var josestiller = new base.alreadySeen(config);
josestiller.track();
josestiller.check();


## How to style
```
a[data-*] {
    :after {
    content: 'seen'
    }
}
```
OR
```
a[data-name] {
    :after {
    content: 'seen'
    }
}
```
OR
```
a[data-name="true"] {
    :after {
    content: 'seen'
    }
}
```