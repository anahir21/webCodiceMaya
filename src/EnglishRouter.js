import React from "react";
import { Navbar } from "./components/en/navbar/Navbar";
import { Route, Switch, Redirect } from "react-router-dom";
import { HomeEn } from "./components/en/homen/HomeEn";
import { Introduction } from "./components/en/introduction/Introduction";
import { Codex } from "./components/en/codex/Codex";
import { Iconography } from "./components/en/iconografia/Iconografia";
import { Studies } from "./components/en/studies/Studies";
import { EditorialProject } from "./components/en/editorial-project/EditorialProject";
import { Downloads } from "./components/en/downloads/Downloads";
import { Credits } from "./components/en/credits/Credits";

export const EnglishRouter = () => {
  return (
    <>
      <Navbar />
      <div>
        <Switch>
          <Route path="/en/" component={HomeEn}></Route>

          <Route path="/en/introduction" exact component={Introduction}></Route>

          <Route path="/en/codex" component={Codex}></Route>

          <Route path="/en/iconography" component={Iconography}></Route>

          <Route path="/en/studies" component={Studies}></Route>

          <Route
            path="/en/editorial-project"
            component={EditorialProject}
          ></Route>

          <Route path="/en/downloads" component={Downloads}></Route>

          <Route path="/en/credits" component={Credits}></Route>

          <Redirect to ="/en"></Redirect>
        </Switch>
      </div>
    </>
  );
};
