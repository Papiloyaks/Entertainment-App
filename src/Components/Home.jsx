import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'




const Home = () => {
  const [movie, setMovie] = useState([])
  const [serie,setSerie] = useState([])
  const [discover, setdiscover] = useState([])
  const imgBaseUrl = "https://image.tmdb.org/t/p";
  const [select, setselect] = useState('day')
  const [search,setSearch] = useState([])
  // const [searchResults,setSearchResults] = useState([])
  const [searchMovie,setSearchMovie] = useState([])
  const [empty,setEmpty] = useState("")
  const navigate = useNavigate()
  
  


  const key = 'b249921a021c0884b29f0b43939b7db5'
  let endpoint = `https://api.themoviedb.org/3/trending/movie/day?language=en-US&api_key=${key}`
    let endpoint2 =  `https://api.themoviedb.org/3/trending/movie/week?language=en-US&api_key=${key}`
    let endpoint3 = `https://api.themoviedb.org/3/trending/tv/day?language=en-US&api_key=${key}`
    let endpoint4 = `https://api.themoviedb.org/3/trending/tv/week?language=en-US&api_key=${key}`
    let endpoint5 = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&api_key=${key}`
    let endpoint6 = `https://api.themoviedb.org/3/search/multi?query=${searchMovie}&include_adult=false&language=en-US&page=1&api_key=${key}`

    

    useEffect(() => {
      if(select !== 'day'){
          axios.get(endpoint4)
          .then((response)=>{
              setMovie(response.data.results);
              // setMyLoader(false)
              // console.log(movies);
          })
          .catch((error)=>{
              // console.log(error);
          })
          axios.get(endpoint4)
          .then((response)=>{
              setSerie(response.data.results);
          })
          .catch((error)=>{
              // console.log(error);
          })
      }else{
          axios.get(endpoint)
          .then((response)=>{
              setMovie(response.data.results);
              // setMyLoader(false)
          })
          .catch((error)=>{
              // console.log(error);
          })
          axios.get(endpoint3)
          .then((response)=>{
              setSerie(response.data.results);
              // setMyLoader(false)
              // console.log(response.data.results);
              })
              .catch((error)=>{
                  // console.log(error);
              })
      }
      axios.get(endpoint5)
      .then((response)=>{
          setdiscover(response.data.results)
          // setMyLoader(false)
      })
      .catch((error)=>{
          // console.log(error);
      })
  
      axios.get(endpoint)
      .then((result)=>{
        // console.log(result.data.results);
        setMovie(result.data.results);
        // console.log(movie);
    
      })
      .catch((error)=>{
        // console.log(error)
    
      })
    
      axios.get(endpoint3)
      .then((result)=>{
        // console.log(result.data.results);
        setSerie(result.data.results);
        // console.log(movie);
    
      })
      .catch((error)=>{
        // console.log(error)
    
      })
    
      axios.get(endpoint5)
      .then((result)=>{
        // console.log(result.data.results);
        setdiscover(result.data.results);
        // console.log(discover);
    
      })
      .catch((error)=>{
        // console.log(error)
    
      })
  }, [])
  



    const Search = () => {
      // alert('here')
      if (searchMovie === ""){
        setEmpty('field is empty!!!')
      }else {
        axios.get(endpoint6)
        .then((result)=>{
          if(result.data.results.length === 0){
            setEmpty('movie or series not found.')

          }
          else {
            console.log(result.data.results); 
            // setresult('Results')//
            setSearch(result.data.results)
            setEmpty('')
            // console.log(result.data.results);
          }
        })

        .catch((error) => {
          console.error('Error fetching data:', error);
          // Handle the error, e.g., set an error state
        });
      }
    }

    const detailsPage = (e,mediaType,index) => {
      if (mediaType=='tv') {
          localStorage.setItem('myId',JSON.stringify({e,mediaType}))
          navigate('/details')
      }else if (mediaType=='person') {
          localStorage.setItem('myId',JSON.stringify({e,mediaType}))
          localStorage.setItem('actors',JSON.stringify({people}))
          console.log(index);
      }
      else {
          localStorage.setItem('myId',JSON.stringify(e))
          navigate('/details')
          // console.log(e)
      }
    }
      


    
    

   
    
  return (
    <>
      <div>
      <div className='p-20 -ms-10'>
      <input type="text"  onChange={(e) => setSearchMovie(e.target.value)} placeholder='search movies or Tv series' className='w-80 h-10 rounded border' /> <button onClick={Search} className='rounded-lg bg-red-700 text-white w-40 h-10 hover:bg-white hover:text-black'>Search</button>
      </div>
      <small className='text-red-700 font-bold'>{empty}</small>

      <div className='flex'>
        <h1 className='ms-10 text-xl text-white'>Trending Today</h1>
         <select className='ms-5 text-white rounded-md bg-red-700' name="" id="" onChange={(e)=>setselect(e.target.value)} value={select.day}>
          <option value="day">Day</option>
          <option value="week">Week</option>
        </select>
        
      </div>
      <div>
           <div className='grid lg:grid-cols-7 grid-cols-3 gap-3 p-10'>
          {
              search.map((item, index) =>(
             <div onClick={()=>detailsPage(item.id, item.media_type)}  key={index}>
               <img className='w-full h-[100px] rounded-lg' src={`${imgBaseUrl}/original/${item.poster_path}`} alt="" />
              <div className='text-center text-white p-2'>{item.title}</div>
             </div>
            ))
          }
        </div>
        <h1 className='text-amber-300 text-xl ms-10 mt-10'>Movies:</h1>
        <div className='grid lg:grid-cols-7 grid-cols-3 gap-3 p-10'>
          {
            movie && movie.map((item, index) =>(
             <div onClick={()=>detailsPage(item.id, item.media_type)}  key={index}>
               <img className='w-full h-[100px] rounded-lg scale-x-95' src={`${imgBaseUrl}/original/${item.poster_path}`} alt="" />
              <div className='text-center text-white p-2'>{item.title}</div>
             </div>
            ))
          }
        </div>
      </div>
      </div>
      <div>
        <h1 className='text-amber-300 text-xl ms-10 p-2'>Series:</h1>
        <div className='grid lg:grid-cols-7 grid-cols-3 gap-3 p-10'>
          {
            serie && serie.map((item, index) =>(
             <div onClick={()=>detailsPage(item.id, item.media_type)}  key={index}>
               <img className='w-full h-[100px] rounded-lg' src={`${imgBaseUrl}/original/${item.poster_path}`} alt="" />
              <div className='text-center text-white p-2'>{item.name}</div>
             </div>
            ))
          }
        </div>
        <div>
        <h1 className='text-amber-300 text-xl ms-10 p-2'>Discover:</h1>
          <div className='grid lg:grid-cols-7 grid-cols-3 gap-3 p-10'>
          {
            discover && discover.map((item, index) =>(
             <div onClick={()=>detailsPage(item.id, item.media_type)}  key={index}>
               <img className='w-full h-[100px] rounded-lg' src={`${imgBaseUrl}/original/${item.poster_path}`} alt="" />
              <div className='text-center text-white p-2'>{item.title}</div>
             </div>
            ))
          }
        </div>
        </div>
      </div>
    </>
  )
}

export default Home