let THREE = require('./node_modules/three/examples')
let scene = new THREE.Scene()
let geometry = new THREE.Geometry()
let arc = new THREE.ArcCurve(0, 0, 100, 0, 2 * Math.PI)
let points = new arc.getPoints(50)
geometry.setFromPoints(points)
let material = new THREE.LineBasicMaterial({
  color: 0x000000
})
let line = new THREE.Line(geometry, material)
scene.add(line)