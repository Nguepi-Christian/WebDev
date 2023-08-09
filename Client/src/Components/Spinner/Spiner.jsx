import React from "react";
import ReactLoading from "react-loading";
import { list } from "./generic.js";
import "./styles.css";

const Spiner = () => {
    return(
        <ReactLoading type={list[0].prop} color="#fff" />
    )

};

export default Spiner;