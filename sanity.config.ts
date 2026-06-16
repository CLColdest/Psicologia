import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { bootstrapContentTool } from "./sanity/bootstrap-content-tool";
import { sanityEnv } from "./sanity/env";
import { structure } from "./sanity/structure";
import { schemaTypes } from "./sanity/schemaTypes";

export default defineConfig({
  name: "default",
  title: "Consulta Psicologica",
  projectId: sanityEnv.projectId,
  dataset: sanityEnv.dataset,
  basePath: "/studio",
  plugins: [deskTool({ structure }), bootstrapContentTool(), visionTool()],
  schema: {
    types: schemaTypes
  }
});
