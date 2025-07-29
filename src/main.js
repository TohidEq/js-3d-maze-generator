import Maze3D from "./maze3d.js";

function main() {
  const maze = new Maze3D(7, 7, 7);

  maze.generateDFS();
  //maze.generatePrime();

  console.log("Generated Maze:");
  //console.log(maze.toString());
  console.log(maze.getGrid());

  console.log(maze.toString(0));
  console.log("\n");
  console.log(maze.toString(1));
  console.log("\n");
  console.log(maze.toString(2));
  console.log("\n");
  console.log(maze.toString(3));
  console.log("\n");
  console.log(maze.toString(4));
  console.log("\n");
  console.log(maze.toString(5));
  console.log("\n");
  console.log(maze.toString(6));
  console.log("\n");
  //console.log(maze.toString(7));
  console.log("\n");
}

main();
