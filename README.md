# Backend for JSON data project

Backend is a [Sails.js](http://sailsjs.org) application without frontend. 

## Installation
First of all you have to install npm, node.js / io.js and sails to your box. Installation instructions can be 
found [here](http://sailsjs.org/get-started).

After that make sure that you have all necessary components installed by running following commands in your shell:

```
npm --version
node --version
sails --version
```

And after that you can run actual backend install by following command in source root folder:

```
npm install
```

## Application start
You can start this backend application as the same way as any sails / node application. This can be done by following
commands:

```
sails lift
```
OR
```
node app.js
```

This will start sails.js server on defined port. By default this is accessible from http://localhost:1337 url. If you 
try that with your browser you should only see page that contains ```Not Found message``` on it. This means that 
everything is ok.

## Possible failures
Below is small list of possible failures that can occur while trying this.

<ol>
    <li>Sails won't lift and you get error message like: <code>Fatal error: watch ENOSPC</code>
        <ul>
            <li>http://stackoverflow.com/questions/16748737/grunt-watch-error-waiting-fatal-error-watch-enospc</li>
            <li>tl;dr just run <code>npm dedupe</code> 
        </ul>
    </li>
</ol>


## License
The MIT License (MIT)
