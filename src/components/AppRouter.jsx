import React from "react";
import { Routes, Route, Navigate } from 'react-router-dom'
import { publicRoutes } from "../routes";


const AppRouter = () => {
  return (
    <Routes>
      {publicRoutes.map(({path, Element}) =>
        <Route key={path} path={path} element={Element} exact/>
      )}
      <Route path="*" element={<Navigate to ="/" />}/>
    </Routes>
  )
}

export default AppRouter;