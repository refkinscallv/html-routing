# HTML Routing

## Overview

HTML Routing is a lightweight HTML JavaScript routing library designed to simplify the creation of web applications with clean and user-friendly URLs.

## Features

- **Clean URL**: Utilizes clean and user-friendly URLs for better readability and SEO.
- **Dynamic Routing**: Facilitates navigation between different pages without reloading the entire webpage.
- **Simple Integration**: Easy-to-implement script for handling routing logic directly within HTML files.
- **No Backend Required**: Purely frontend implementation; no server-side code or backend required.

## How To Use

1. **Download Source**: Begin by downloading the source code of HTML Routing **[Here](https://github.com/refkinscallv/html-routing/archive/refs/heads/master.zip)**.
2. **Fill in route.json Data**: Populate the route.json file located in the `data/route.json` folder with the necessary routing data.

### route.json Format

```json
[
    {
        "path": "/",
        "file": "name_file.html"
    },
    {
        "path": "/other-path",
        "file": "folder/name_file.html"
    },
]
````

Ensure that the route.json file follows the specified format to define the routing paths and corresponding HTML files.