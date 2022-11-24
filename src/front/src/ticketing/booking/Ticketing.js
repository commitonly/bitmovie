import React, {useEffect, useState} from 'react';
import "./Ticketing.css";
import {useNavigate} from "react-router-dom";
import dateFns from "url";
import Calender from "./Calender";
import MovieList from "./MovieList";
import Location from "./Location";
import TimeTable from "../timetable/TimeTable";
import Swal from "sweetalert2";
import moment from "moment";

function Ticketing(props) {

    const [st,setSt]=useState(false);

    const refresh=()=>{
        window.location.reload();
    }

    const navi = useNavigate();
    const today= moment().format("yyyy-MM-DD");
    const [input,setInput]=useState({
        movie:"",
        calender:today,
        location:""
    });

    const changeData=(e)=>{
        let {name,value}=e.target;
        setInput({
                ...input, //기존의 inputs 객체 복사해서 넣음(펼침 연산자)
                [name]:value //name키에 입력값넣기
            }
        )
        setSt(!st);
    }

    const goSeat = ()=> {
        if (input.movie===''){
            Swal.fire({
                icon:"warning",
                text:"영화선택해"
            })

            return

        }
        if (input.location===''){
            Swal.fire({
                icon:"warning",
                text:"위치선택해"
            })
            return
        }
        if (input.calender===''){
            Swal.fire({
                icon:"warning",
                text:"상영일선택해"
            })
            return
        }
        if (input.time===''){
            Swal.fire({
                icon:"warning",
                text:"상영시간선택해"
            })
            return
        }
        //
        // if (input.length===3)
        // {

            navi("/ticketing/selectseat", {
                state: {
                    input: input
                },

            });

        // }else{
        //         Swal.fire({
        //             icon:"warning",
        //             text:"잘 선택해"
        //         })
        // }


    }


    useEffect(()=>{
        console.log(input);
    },[input]);




    const index = () => {
        return <div>{dateFns.format(new Date(), "yyyy-MM-dd")}</div>;
    };
    return (
        <div className={'whole'}>

            <div className={'tktable'}>
                <div className={'tkbt'}>
                    <button className={'tkmenu'} onClick={()=> navi("/ticketing/timetable")}>상영시간표</button>
                    <button className={'tkmenu2'} onClick={()=>refresh()}>초기화</button>
                </div>
                <div className={'together'}>
                    <div className={'selectmv'}>
                        <MovieList input={input} setInput={setInput} changeData={changeData}/>
                    </div>
                    <div className={"movielocation"}>
                        <Location input={input} setInput={setInput} changeData={changeData} />
                    </div>
                    <div className={'selectday'}><Calender input={input} setInput={setInput} changeData={changeData} /></div>

                    <div className={'selecttime'}><TimeTable input={input} setInput={setInput} changeData={changeData} st={st}/></div>
                </div>
                {/*<button type={"button"} className={'selectseat'} onClick={() => navi("/ticketing/selectseat",{input, setInput})} input={input} setInput={setInput} changeData={changeData} >좌석선택</button>*/}
                <button type={"button"} className={'selectseat'} onClick={goSeat} >좌석선택</button>


            </div>




        </div>
    );
}

export default Ticketing;