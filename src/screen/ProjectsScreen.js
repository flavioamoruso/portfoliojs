import React from "react";
import Work from "../components/Projects/work";
import { projects } from "../constants";

function ProjectsScreen() {
  return (
    <div>
      {projects.map((project, ind) => (
        <Work
          key={ind}
          title={project.title}
          body={project.body}
          tags={project.tags}
        />
      ))}
    </div>
  );
}

export default ProjectsScreen;
