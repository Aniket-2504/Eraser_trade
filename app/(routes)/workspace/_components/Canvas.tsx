import React from 'react';
import { Excalidraw, MainMenu, WelcomeScreen } from "@excalidraw/excalidraw";

function Canvas() {
  return (
    <div style={{ height: "830px" }}>
    <Excalidraw 
    theme='light'
    onChange={(excalidrawElements, appState, files) => console.log(excalidrawElements)}
    UIOptions={{
      canvasActions:{
        saveToActiveFile:false,
        loadScene:false,
        export:false,
        toggleTheme:false

      }
    }}

  >
    <MainMenu>
      <MainMenu.DefaultItems.ClearCanvas/>
      <MainMenu.DefaultItems.SaveAsImage/>
      <MainMenu.DefaultItems.ChangeCanvasBackground/>
      <MainMenu.DefaultItems.Export/>
    </MainMenu>
    <WelcomeScreen>

      <WelcomeScreen.Hints.MenuHint/>
      <WelcomeScreen.Hints.MenuHint/>
      <WelcomeScreen.Hints.ToolbarHint/>
    </WelcomeScreen>
    </Excalidraw>
  </div>

  )
}

export default Canvas