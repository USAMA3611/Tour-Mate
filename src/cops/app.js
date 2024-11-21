import React from 'react';

import Home from "./Pages/Home";

function app() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home/>}> </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default app
