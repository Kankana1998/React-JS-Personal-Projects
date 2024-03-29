import React from 'react'

function Result(props) {
const boxes = props.movies.map(
    (item,index) => {
        return <Box key={index} image={item.poster_path} title={item.original_title} rating={item.vote_average}/>
    }
)
  return (
    <div className='w-full grid md:grid-cols-4 gap-5'>
        {boxes}
    </div>
  )
}


const Box = (props) => {
    const IMGPATH = "https://image.tmdb.org/t/p/w1280";
    return(
    <div className='shadow min-h-[200px] mt-3 pb-1'>
        <img src={IMGPATH + props.image} alt=" No Image"  className='w-full'/>
        <div className='flex justify-between items-center px-2'>
        <span className='text-2xl text-white'>{props.title}</span>
        <span className='text-xl text-white font-bold'>{props.rating}</span>
    </div>
    </div>

    )
}
export default Result