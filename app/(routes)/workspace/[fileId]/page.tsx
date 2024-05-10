import React from "react";
import WorkspaceHeader from "../_components/WorkspaceHeader";

function Workspace() {
  return (
    <div>
      <WorkspaceHeader />

      {/* workspace layout  */}

      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Document  */}
        <div className="bg-blue-400 h-screen">
                Documet

        </div>
        {/* whiteBoard */}
        <div className="bg-red-400 h-screen">
            canvas

        </div>
      </div>
    </div>
  );
}

export default Workspace;
