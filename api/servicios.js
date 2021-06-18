export const fetchMovies= async (pageNumber=1)=>{

    let apiResponse= await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=5eec5adc&s=Love&y=2020&page=${pageNumber}&type=movie`)
      .then((response)=>(response.json()))
      .catch((error)=>({error}))
      return apiResponse;
      
  }