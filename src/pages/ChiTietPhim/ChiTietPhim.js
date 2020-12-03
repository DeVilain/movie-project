import React from 'react'
import MovieDetail from '../../components/MovieDetail/MovieDetail'

const ChiTietPhim = (props) => {
    return (
        <MovieDetail maPhim={props.match.params.maPhim}></MovieDetail>
    )
}

export default ChiTietPhim
