/* global AFRAME */
AFRAME.registerComponent("follow-camera", {
  schema: {
    offset: { type: "vec3", default: { x: 0, y: 1.5, z: -2 } },
  },

  tick: function () {
    const cameraEl = document.querySelector("[camera]");
    if (!cameraEl) return;

    const camWorldPos = new THREE.Vector3();
    cameraEl.object3D.getWorldPosition(camWorldPos);

    const camWorldDir = new THREE.Vector3();
    cameraEl.object3D.getWorldDirection(camWorldDir);

    // Setting offset from camera
    const offset = this.data.offset;
    const newPos = camWorldPos
      .clone()
      .add(camWorldDir.multiplyScalar(offset.z));
    newPos.y += offset.y;
    newPos.x += offset.x;

    this.el.object3D.position.copy(newPos);

    // Rotate panel to camera
    this.el.object3D.lookAt(camWorldPos);
  },
});
