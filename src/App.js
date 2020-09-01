import {
  FlexBox,
  FlexBoxAlignItems,
  FlexBoxDirection,
  FlexBoxJustifyContent,
  Link,
  LinkDesign,
  ShellBar,
  ThemeProvider
} from '@ui5/webcomponents-react';
import React from 'react';
import './App.css';
import "@ui5/webcomponents-fiori/dist/FlexibleColumnLayout.js";

function App() {

/*
<script>
      col1list.addEventListener("item-click", function(e) {
        fcl.layout = "TwoColumnsMidExpanded";
      });

      col2list.addEventListener("item-click", function(e) {
        fcl.layout = "ThreeColumnsEndExpanded";
      });

      closeMidColumn.addEventListener("click", function(e) {
        fcl.layout = "OneColumn";
      });
      fullscreenMidColumn.addEventListener("click", function(e) {
        fcl.layout = "MidColumnFullscreen";
      });

      fullscreenEndColumn.addEventListener("click", function(e) {
        fcl.layout = "EndColumnFullscreen";
      });

      closeEndColumn.addEventListener("click", function(e) {
        fcl.layout = "TwoColumnsMidExpanded";
      });
    </script>
*/

  return (
    <ThemeProvider>
      <ui5-flexible-column-layout id="fcl">
        <div slot="startColumn">
          <ui5-shellbar primary-title="Dep. New York, USA">
          </ui5-shellbar>

          <ui5-list id="col1list" header-text="Employees">
          </ui5-list>
        </div>

        <div slot="midColumn">
          <div class="colHeader">
            <ui5-button design="Emphasized">Edit</ui5-button>
            <ui5-button design="Transparent" icon="add"></ui5-button>
            <ui5-button id="fullscreenMidColumn" design="Transparent" icon="full-screen"></ui5-button>
            <ui5-button id="closeMidColumn" icon="decline" design="Transparent"></ui5-button>
          </div>

          <ui5-list id="col2list" header-text="Employees">
          </ui5-list>
        </div>

        <div slot="endColumn">
          <div class="colHeader">
            <ui5-button design="Emphasized">Edit</ui5-button>
            <ui5-button design="Transparent" icon="add"></ui5-button>
            <ui5-button id="fullscreenEndColumn" design="Transparent" icon="full-screen"></ui5-button>
            <ui5-button id="closeEndColumn" icon="decline" design="Transparent"></ui5-button>
          </div>

          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod..."
          </p>
        </div>
      </ui5-flexible-column-layout>
    </ThemeProvider>
  );
}

export default App;
