# **getEncivInfo API**
This is a thin API to get information from the bpinfo server using a socket.io connection

## Usage

To add this to `package.json`, edit the file and add this to the dependencies:

```
  "dependencies": {
      ...
    "get-enciv-info": "git+https://github.com/EnCiv/get-enciv-info.git"
    ...
  }
```
Two environment variables are required:

```
ENCIV_API_KEY="a long private api key"
ENCIV_API_URL="https://enciv-api-server-name.com"
```

## APIs
### `stage_videos`: Get the candidate conversation viewer urls:

```
const getEncivInfo=require('get-enciv-info');

getEncivInfo("stage_videos","2020",stage_videos=>{
    if(!stage_videos) console.error("error getting stage_videos");
    console.info("getEncivInfo:", stage_videos);
})
```
this output is a list of objects that look like this:
```
 [ { stage: '65520',
    viewer_url:
     'https://undebate-dd.herokuapp.com/country:us/state:il/congress:u-s-house-illinois-district-14/stage:primary/party:republican-party/2020-03-17' },
  { stage: '65521',
    viewer_url:
     'https://undebate-dd.herokuapp.com/country:us/state:il/congress:u-s-house-illinois-district-14/stage:primary/party:democratic-party/2020-03-17' },
     ...
 ]
```
### `candidate_videos`: Get candidate recorder urls:
```
getEncivInfo("candidate_videos","2020",candidate_videos=>{
    if(!candidate_videos) console.error("error getting candidate_videos");
    console.info("getEncivInfo:", candidate_videos);
})
```
this output is a list of objects that look like this:
```
[ { candidate_stage_result: '67248',
    recorder_url:
     'https://undebate-dd.herokuapp.com/country:us/state:il/congress:u-s-house-illinois-district-14/stage:primary/party:republican-party/2020-03-17-recorder-xxxxxxxxxxx',
    recorded: false },
  { candidate_stage_result: '67250',
    recorder_url:
     'https://undebate-dd.herokuapp.com/country:us/state:il/congress:u-s-house-illinois-district-14/stage:primary/party:republican-party/2020-03-17-recorder-xxxxxxxxxxx',
    recorded: false },
    ...
]
```
### `disconnect`: close the connection
The socket.io connection to the server is persistent.  If you ever want to disconnect from the server, for example so the demo program will exit, use the disconnect API
```
getEncivInfo("disconnect")
```

To test this, you can git clone the repo, set the environment variables, and run the demo
```
node demo
```

