/* global AFRAME */
AFRAME.registerComponent("glow-paths", {
  init: function () {
    const THREE = AFRAME.THREE;

    // All paths: an array of arrays of points
    const pathPointsArray = [
      // Path 1
      [
        new THREE.Vector3(47.11546, 0.038, 11.79299),
        new THREE.Vector3(49.9, 0.1922, 5.766),
        new THREE.Vector3(46.128, 0.1922, 2.88),
        new THREE.Vector3(34.596, 0.769, 23),
        new THREE.Vector3(7.69, 0.96, 38.44),
        new THREE.Vector3(-9.61, 0.577, 42.3),
        new THREE.Vector3(-19.22, 0.1922, 34.6),
        new THREE.Vector3(-23, 0.38, 30.75),
        new THREE.Vector3(-15.38, 0.38, 26.9),
        new THREE.Vector3(-16.50272, 0.23787, 25.09608),
      ],
      // Path 2
      [
        new THREE.Vector3(47.11546, 0.038, 11.79299),
        new THREE.Vector3(50, 0.192, 5),
        new THREE.Vector3(46.1, 0.192, 2.11),
        new THREE.Vector3(38.44, 0.384, 3.08),
        new THREE.Vector3(19.22, 0.38, 11.532),
        new THREE.Vector3(7.67, 0.0, 9.61),
        new THREE.Vector3(1.922, 0.0, 5.77),
        new THREE.Vector3(0, 0.05, -9.61),
        new THREE.Vector3(-1.922, 0.05, -11.532),
        new THREE.Vector3(-2.38591, 0, -9.19091),
      ],
    ];

    this.meshes = [];

    // Creating mesh for each path
    pathPointsArray.forEach((points) => {
      const curve = new THREE.CatmullRomCurve3(points);
      const geometry = new THREE.TubeGeometry(curve, 200, 0.02, 8, false);

      const material = new THREE.MeshStandardMaterial({
        color: new THREE.Color("#ffd500"),
        emissive: new THREE.Color("#ffd500"),
        emissiveIntensity: 1,
        roughness: 0.3,
        metalness: 0.2,
        transparent: true,
        opacity: 0.5,
      });

      const mesh = new THREE.Mesh(geometry, material);
      this.el.object3D.add(mesh);
      this.meshes.push(mesh);
    });
  },

  tick: function (time) {
    this.meshes.forEach((mesh) => {
      if (mesh.material) {
        mesh.material.emissiveIntensity = 0.5 + 0.5 * Math.sin(time / 500);
      }
    });
  },
});
