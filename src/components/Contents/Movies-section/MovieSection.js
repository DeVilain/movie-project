import React, { useReducer, useState } from 'react'
import { useEffect } from 'react';
import { qlPhimService } from '../../../services/QuanLyPhimServices';
import Slide from './Slide'



const MovieSection = () => {
    // state dsPhim
    let [dsPhim, setDsPhim] = useState([]);

    useEffect(() => {
        getDsPhim();
    }, []);

    // lấy data danh sách phim
    const getDsPhim = () => {
        qlPhimService.layDanhSachPhim().then(res => {
            let movieList = res.data;
            let movieListTemp = [];
            let index = 0;
            for (index; index < 15; index++) {
                movieListTemp.push(movieList[index]);
            }
            setDsPhim(movieListTemp);
        }).catch(err => {
            console.log(err.response.data);
        })
    }

    // gán dsPhim cho biến slides để thiết kế slider
    const slides = [...dsPhim];

    const initialState = {
        slideIndex: 0
    };

    const slidesReducer = (state, event) => {
        if (event.type === "NEXT") {
            return {
                ...state,
                slideIndex: (state.slideIndex + 1) % slides.length
            };
        }
        if (event.type === "PREV") {
            return {
                ...state,
                slideIndex: state.slideIndex === 0 ? slides.length - 1 : state.slideIndex - 1
            };
        }
    };

    const [state, dispatch] = useReducer(slidesReducer, initialState);

    return (
        <>
            <div className="slides" id="phim" >
                <button onClick={() => dispatch({ type: "PREV" })}> ‹ </button>
                {[...slides, ...slides, ...slides].map((slide, i) => {
                    let offset = slides.length + (state.slideIndex - i);
                    return <Slide slide={slide}
                        offset={offset}
                        key={i}
                    />;
                })
                }
                <button onClick={() => dispatch({ type: "NEXT" })} > › </button>
            </div >
        </>
    )
}

export default MovieSection