import React from "react";
import { useState, useEffect, } from "react";
import { useParams, Routes, Route, Link, useResolvedPath } from "react-router-dom";
import { buscar } from "../api/api";
import ListCategories from "../components/ListCategories";
import ListPosts from "../components/ListPosts";
import Subcategoria from "./Subcategoria";

import '../assets/css/blog.css'
const Categoria = () => {
  const { id } = useParams(); 
  const [subcategorias, setSubcategorias] = useState([]); 
  useEffect(()=>{
    buscar(`/categorias?id=${id}`, (response)=>{
      setSubcategorias(response[0].subcategorias)
    })
  },[id])

  const url = useResolvedPath('').pathname;
  return (
    <>
      <div className = 'container'>
        <h2 className = 'title-page'>Pet Noticias</h2>
      </div> 
      <ListCategories/>
      {/* <ListPosts url={`/posts?categoria=${id}`}/> */}
      <ul className="category-list container flex">
      {
        subcategorias.map((subcategoria)=>{
          return(
            <li className={`category-list__category category-list__category--${id}`} key={ subcategoria }>
              <Link to = {`${url}/${subcategoria}`}>
                { subcategoria }
              </Link>            
            </li>
          )
        })
      }
      </ul>
      <Routes>
        <Route path = '/' element = { <ListPosts url={`/posts?categoria=${id}`}/> }></Route>
        <Route path = '/:subcategoria' element = {<Subcategoria/>}></Route>
      </Routes>
    </>
  );
}

export default Categoria;
