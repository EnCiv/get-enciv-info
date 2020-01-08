"use strict";

var getEncivInfo=require('./index');

getEncivInfo("stage_videos","2020",stage_videos=>{
    if(!stage_videos) console.error("error getting stage_videos");
    console.info("getEncivInfo:", stage_videos);
})

getEncivInfo("candidate_videos","2020",candidate_videos=>{
    if(!candidate_videos) console.error("error getting candidate_videos");
    console.info("getEncivInfo:", candidate_videos);
})
