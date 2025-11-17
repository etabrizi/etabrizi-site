import { json } from "@remix-run/node";
import { projects } from "~/data/projects";

export const loader = () => {
  return json({ projects });
};
