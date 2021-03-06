// add scripts

$(document).on('ready', function() {
  console.log('sanity check!');

  window.addEventListener('DOMContentLoaded', function() {

      var canvas = document.getElementById('renderCanvas');

      var engine = new BABYLON.Engine(canvas, true);

      var createScene = function() {
        // create a basic BJS Scene object
        var scene = new BABYLON.Scene(engine);

        // create a FreeCamera, and set its position to (x:0, y:5, z:-10)
        var camera = new BABYLON.FreeCamera('camera1', new BABYLON.Vector3(0, 5,-10), scene);

        // target the camera to scene origin
        camera.setTarget(BABYLON.Vector3.Zero());

        // attach the camera to the canvas
        camera.attachControl(canvas, false);

        // create a basic light, aiming 0,1,0 - meaning, to the sky
        var light = new BABYLON.HemisphericLight('light1', new BABYLON.Vector3(0,1,0), scene);

        // create a built-in "sphere" shape; its constructor takes 5 params: name, width, depth, subdivisions, scene
        var sphere = BABYLON.Mesh.CreateSphere('sphere1', 16, 2, scene);

        // move the sphere upward 1/2 of its height
        sphere.position.y = 0;

        // create a built-in "ground" shape; its constructor takes the same 5 params as the sphere's one
        // var ground = BABYLON.Mesh.CreateGround('ground1', 6, 6, 2, scene);

        // create a ring around the sphere
        // var torus =
        var torus = BABYLON.MeshBuilder.CreateTorus("torus", {thickness: 0.2}, scene);

        torus.scaling = new BABYLON.Vector3(7, 0.050, 2);



        // return the created scene
        return scene;
        }

      var scene = createScene();
      engine.runRenderLoop(function() {
        scene.render();
      });

    });
  window.addEventListener('resize', function() {
    engine.resize();
  });
});