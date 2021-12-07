"use strict";

var gProjects;
const DB = "projectsDB";

function getProjects()
{
    return gProjects;
}

function getProj(id)
{
  var idx = gProjects.findIndex(proj=>{
    return proj.id === id;
  })
  return gProjects[idx];
}

function createProjects() {
  var projects = loadFromStorage(DB);
  if (!projects || !projects.length) {
    projects = [];
    projects.push(
      _createProject(
        "Mine-Sweeper",
        "Shole Hamoksim",
        "A fun thinking game for all ages",
        "https://noamshir.github.io/minesweeper1/",
        Date.now(),
        ["Matrixes", "local-storage"]
      )
    );
    projects.push(
      _createProject(
        "Touch-Nums",
        "Numbers Game",
        "A fun thinking game for all ages",
        "https://noamshir.github.io/minesweeper1/",
        Date.now(),
        ["Matrixes", "local-storage"]
      )
    );
    projects.push(
      _createProject(
        "In-Picture",
        "Guessing Game",
        "A fun thinking game for all ages",
        "https://noamshir.github.io/minesweeper1/",
        Date.now(),
        ["local-storage"]
      )
    );
    projects.push(
      _createProject(
        "Pop-Baloons",
        "Pop the ballons!",
        "A fun clicking game for all ages",
        "https://noamshir.github.io/minesweeper1/",
        Date.now(),
        ["keyboard events", "local-storage"]
      )
    );
  }
  gProjects = projects;
  _saveProjToStorage();
}

function _createProject(name, title, desc, url, publishedAt, labels) {
  return {
    id: name,
    name,
    title,
    desc,
    url,
    publishedAt,
    labels,
  };
}

function _saveProjToStorage() {
  saveToStorage(DB, gProjects);
}
