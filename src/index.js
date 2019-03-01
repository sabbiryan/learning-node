"use strict"

import { ApiClient } from "./api-client";


var apiClinet = new ApiClient();

apiClinet.getTasks()
    .then(data => {
        console.log(`I got back ${data.length} rows`);
    })
    .catch(error => {
        console.log(`Something went horribly wrong: ${error}`);
    })