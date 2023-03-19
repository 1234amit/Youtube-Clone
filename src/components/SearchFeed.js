import React, { useEffect, useState } from 'react'
import { Typography, Box } from "@mui/material";
import { useParams } from "react-router-dom";

import { fetchFromAPI } from "../utils/fetchFromAPI";
import Videos from './Videos';

const SearchFeed = () => {
  const [videos, setVideos] = useState(null);
  const {searchTerm} = useParams()
  useEffect(()=>{
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
    .then((data) => setVideos(data.items))
}, [searchTerm]);

  return (
    <Box p={2} minHeight="95vh">
      <Typography>
        Search Result for <span style={{color: "#FC1503"}}>{searchTerm}</span>videos
      </Typography>
      <Box display="flex">
        <Box sx={{ mr: { sm: '100px' } }}/>
        {<Videos videos={videos} />}
      </Box>
    </Box>
  )
}

export default SearchFeed