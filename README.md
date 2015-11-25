# already-seen
This snippet should track all websites and mark them as read
It stores the information by localStorage.

## Supported Browser
The following Browser are supported. These compatibility informations are based on used the methods and their browser support as mentioned on caniuse.com.

* IE 9-11
* Edge 12-14
* Firefox 3.5-45
* Chrome 4-49
* Safari 4-9
* Opera 12.1-35
* iOS Safari 5.1-9.1
* Android Browser 2.3-44
* Blackberry Browser 7-10
* Opera Mobile 12.1-33
* Chrome for Android 46
* Firefox for Android 42
* IE Mobile 10-11
* UC Brwoser for Android 9.9

If you need higher backwards compatibility, you should replace the localStorage with document.cookie.
For IE8 support you need to implement a fallback for "map" and "forEach".

### Sources
* http://www.caniuse.com
* http://kangax.github.io/compat-table/es5/


### Notes

If you need to access the collected information on server side, you should also replace localStorage with document.cookie.

## How to config
Actually you are able to configurate the sites that should be tracked.
Further more you can configurate exceptions by the following object:

```javascript
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
```javascript
var config = {
    rules: [
        {
            location: ''
        }
    ];
```

If you only want to track everything within a specific path
```javascript
var config = {
    rules: [
        {
            location: '/path'
        }
    ];
```

If you want to track everything within a specific path
without one or more subdirectories, you can define exceptions.
```javascript
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

## How to style
```css
a[data-*] {
    :after {
    content: 'seen'
    }
}
```
OR
```css
a[data-name] {
    :after {
    content: 'seen'
    }
}
```
OR
```css
a[data-name="true"] {
    :after {
    content: 'seen'
    }
}
```