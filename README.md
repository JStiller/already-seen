# already-seen
This snippet should track all websites and mark them as read
It stores the information by localStorage.

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