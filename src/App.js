import React from "react";
import { Routes, Route } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import { Navbar, Footer, Sidebar, ThemeSettings } from "./components";
import {
  Ecommerce,
  Orders,
  Calendar,
  Employees,
  Stacked,
  Pyramid,
  Customers,
  Kanban,
  Area,
  Bar,
  Pie,
  Financial,
  ColorPicker,
  ColorMapping,
  Editor,
  Line,
} from "./pages";
import "./App.css";
import { useStateContext } from "./contexts/ContextProvider";
import { ErrorBoundary } from "./pages/ErrorBoundary";


function App() {
  const {
    activeMenu,
    themeSettings,
    setThemeSettings,
    currentColor,
    currentMode,
  } = useStateContext();

  return (
    <div className={currentMode === "Dark" ? "dark" : ""}>
      <div className="flex relative dark:bg-main-dark-bg">
        <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
          <TooltipComponent content="Settings" position="Top">
            <button
              type="button"
              className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white"
              style={{ background: currentColor, borderRadius: "50%" }}
              onClick={() => setThemeSettings(true)}
            >
              <FiSettings />
            </button>
          </TooltipComponent>
        </div>
        {activeMenu ? (
          <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
            <Sidebar />
          </div>
        ) : (
          <div className="w-0 dark:bg-secondary-dark-bg">
            <Sidebar />
          </div>
        )}
        <div
          className={` bg-main-bg min-h-screen w-full dark:bg-main-dark-bg ${
            activeMenu ? "md:ml-72" : "flex-2"
          }`}
        >
          <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
            <Navbar />
          </div>
          <div>
            {themeSettings && <ThemeSettings />}
            <Routes>
              {/* Dashboard */}
              <Route
                path="/"
                element={
                  <ErrorBoundary>
                    <Ecommerce />
                  </ErrorBoundary>
                }
              />
              <Route
                path="/ecommerce"
                element={
                  <ErrorBoundary>
                    <Ecommerce />
                  </ErrorBoundary>
                }
              />

              {/* Pages */}
              <Route
                path="/orders"
                element={
                  <ErrorBoundary>
                    <Orders />
                  </ErrorBoundary>
                }
              />
              <Route
                path="/employees"
                element={
                  <ErrorBoundary>
                    <Employees />
                  </ErrorBoundary>
                }
              />
              <Route
                path="/customers"
                element={
                  <ErrorBoundary>
                    <Customers />
                  </ErrorBoundary>
                }
              />

              {/* Apps */}
              <Route
                path="/calendar"
                element={
                  <ErrorBoundary>
                    <Calendar />
                  </ErrorBoundary>
                }
              />
              <Route
                path="/kanban"
                element={
                  <ErrorBoundary>
                    <Kanban />
                  </ErrorBoundary>
                }
              />
              <Route
                path="/editor"
                element={
                  <ErrorBoundary>
                    <Editor />
                  </ErrorBoundary>
                }
              />
              <Route
                path="/color-picker"
                element={
                  <ErrorBoundary>
                    <ColorPicker />
                  </ErrorBoundary>
                }
              />

              {/* Charts */}
              <Route
                path="/line"
                element={
                  <ErrorBoundary>
                    <Line />
                  </ErrorBoundary>
                }
              />
              <Route
                path="/area"
                element={
                  <ErrorBoundary>
                    <Area />
                  </ErrorBoundary>
                }
              />
              <Route
                path="/bar"
                element={
                  <ErrorBoundary>
                    <Bar />
                  </ErrorBoundary>
                }
              />
              <Route
                path="/pie"
                element={
                  <ErrorBoundary>
                    <Pie />
                  </ErrorBoundary>
                }
              />
              <Route
                path="/financial"
                element={
                  <ErrorBoundary>
                    <Financial />
                  </ErrorBoundary>
                }
              />
              <Route
                path="/color-mapping"
                element={
                  <ErrorBoundary>
                    <ColorMapping />
                  </ErrorBoundary>
                }
              />
              <Route
                path="/pyramid"
                element={
                  <ErrorBoundary>
                    <Pyramid />
                  </ErrorBoundary>
                }
              />
              <Route
                path="/stacked"
                element={
                  <ErrorBoundary>
                    <Stacked />
                  </ErrorBoundary>
                }
              />
            </Routes>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
