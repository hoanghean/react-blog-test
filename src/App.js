import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import PostList from "./components/PostList";
import PostDetail from "./components/PostDetail";
import Menu from "./components/Menu";
import Tag from "./components/Tag";
import BkTW from "./components/BkTW";
import NotFound from './pages/NotFound'

const App = () => {
  return (
    <BrowserRouter basename='/'>
      <input className="prfI hidden" id="offPrf" type="checkbox" />
      <input className="navI hidden" id="offNav" type="checkbox" />
      <input className="navM hidden" id="onMode" type="checkbox" />
      <div className="nLght" id="neonLight"></div>
      <div className="section" id="license" name="License">
        <div className="widget HTML" data-version="2" id="HTML15">
          <div className="blog-admin" id="admCk"></div>
          <span
            className="pu-views"
            data-add="true"
            data-id="WebsiteStats"
          ></span>
        </div>
      </div>
      <div className="mntnM">
        <div className="no-items section" id="maintenance-mode"></div>
      </div>
      <div className="mainWrp">
        <Header />
        <div className="mainIn">
          <Menu />
          <div className="blogCont">
            <div className="secIn">
              <Tag />
              <div className="blogM">
                <main className="blogItm mainbar">
                  <div className="section" id="main-widget">
                    <div className="widget Blog">
                      <Routes>
                        <Route path="/" element={<PostList />} />
                        <Route path="/page/:id" element={<PostList />} />
                        <Route path="/:slug" element={<PostDetail />} />
                        <Route component={NotFound} />
                      </Routes>
                    </div>
                  </div>
                </main>
              </div>
              <Footer />
            </div>
          </div>
        </div>
        <BkTW />
      </div>
    </BrowserRouter>
  );
};

export default App;
