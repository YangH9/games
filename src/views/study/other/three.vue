<template>
  <div class="container">
    <Breadcrumb overlayShow />
    <a-card v-calcHeight="{ height: 21, dom: '.ant-card-body' }" title="three Demo" :hoverable="true">
      <canvas id="threeDom3"></canvas>
      <canvas id="threeDom2"></canvas>
      <canvas id="threeDom1"></canvas>
    </a-card>
  </div>
</template>

<script setup lang="jsx">
import Breadcrumb from '@/components/Breadcrumb.vue'
import { ref, onMounted } from 'vue'
import * as THREE from 'three'

const main3 = () => {
  // 创建场景
  const scene = new THREE.Scene()

  // 创建相机
  const fov = 75
  const aspect = 2 // 相机默认值
  const near = 0.1
  const far = 5
  const camera = new THREE.PerspectiveCamera(fov, aspect, near, far)
  camera.position.z = 5

  // 创建渲染器
  const canvas = document.querySelector('#threeDom3')
  const renderer = new THREE.WebGLRenderer({ antialias: true, canvas })

  // 创建一个长方体作为手机的基本形状
  const geometry = new THREE.BoxGeometry(1, 2, 0.5) // 宽度, 高度, 深度
  const material = new THREE.MeshBasicMaterial({ color: 0x404040, wireframe: true }) // 设置为线框模式以便观察
  const mesh = new THREE.Mesh(geometry, material)
  scene.add(mesh)

  // 添加光源
  const light = new THREE.AmbientLight(0x404040) // 环境光
  scene.add(light)

  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5)
  directionalLight.position.set(1, 1, 1)
  scene.add(directionalLight)

  renderer.render(scene, camera)
}

const main1 = () => {
  const canvas = document.querySelector('#threeDom1')
  const renderer = new THREE.WebGLRenderer({ antialias: true, canvas })

  const fov = 75
  const aspect = 2 // 相机默认值
  const near = 0.1
  const far = 5
  const camera = new THREE.PerspectiveCamera(fov, aspect, near, far)
  camera.position.z = 2

  const scene = new THREE.Scene()
  const boxWidth = 1
  const boxHeight = 1
  const boxDepth = 1
  const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth)

  const material = new THREE.MeshPhongMaterial({ color: 0x44aa88 })
  const cube = new THREE.Mesh(geometry, material)
  scene.add(cube)

  {
    const color = 0xffffff
    const intensity = 3
    const light = new THREE.DirectionalLight(color, intensity)
    light.position.set(-1, 2, 4)
    scene.add(light)
  }

  function makeInstance(geometry, color, x) {
    const material = new THREE.MeshPhongMaterial({ color })

    const cube = new THREE.Mesh(geometry, material)
    scene.add(cube)

    cube.position.x = x

    return cube
  }

  const cubes = [
    makeInstance(geometry, 0x44aa88, 0),
    makeInstance(geometry, 0x8844aa, -2),
    makeInstance(geometry, 0xaa8844, 2)
  ]

  renderer.render(scene, camera)

  function resizeRendererToDisplaySize(renderer) {
    const canvas = renderer.domElement
    const pixelRatio = window.devicePixelRatio
    const width = Math.floor(canvas.clientWidth * pixelRatio)
    const height = Math.floor(canvas.clientHeight * pixelRatio)
    const needResize = canvas.width !== width || canvas.height !== height
    if (needResize) {
      renderer.setSize(width, height, false)
    }
    return needResize
  }

  function render(time) {
    time *= 0.001 // 将时间单位变为秒

    if (resizeRendererToDisplaySize(renderer)) {
      const canvas = renderer.domElement
      camera.aspect = canvas.clientWidth / canvas.clientHeight
      camera.updateProjectionMatrix()
    }

    const canvas = renderer.domElement
    camera.aspect = canvas.clientWidth / canvas.clientHeight
    camera.updateProjectionMatrix()

    cube.rotation.x = time * 1
    cube.rotation.y = time * -1

    cubes.forEach((cube, ndx) => {
      const speed = 1 + ndx * 0.1
      const rot = time * speed
      cube.rotation.x = rot
      cube.rotation.y = rot
    })

    renderer.render(scene, camera)

    requestAnimationFrame(render)
  }
  requestAnimationFrame(render)
}

const main2 = () => {
  const canvas = document.querySelector('#threeDom2')
  const renderer = new THREE.WebGLRenderer({ antialias: true, canvas })

  const fov = 40
  const aspect = 2 // the canvas default
  const near = 0.1
  const far = 1000
  const camera = new THREE.PerspectiveCamera(fov, aspect, near, far)
  camera.position.z = 120

  const scene = new THREE.Scene()
  scene.background = new THREE.Color(0xaaaaaa)

  {
    const color = 0xffffff
    const intensity = 3
    const light = new THREE.DirectionalLight(color, intensity)
    light.position.set(-1, 2, 4)
    scene.add(light)
  }

  {
    const color = 0xffffff
    const intensity = 3
    const light = new THREE.DirectionalLight(color, intensity)
    light.position.set(1, -2, -4)
    scene.add(light)
  }

  const objects = []
  const spread = 15

  const addObject = (x, y, obj) => {
    obj.position.x = x * spread
    obj.position.y = y * spread

    scene.add(obj)
    objects.push(obj)
  }

  const createMaterial = () => {
    const material = new THREE.MeshPhongMaterial({
      side: THREE.DoubleSide
    })

    const hue = Math.random()
    const saturation = 1
    const luminance = 0.5
    material.color.setHSL(hue, saturation, luminance)

    return material
  }

  const addSolidGeometry = (x, y, geometry) => {
    const mesh = new THREE.Mesh(geometry, createMaterial())
    addObject(x, y, mesh)
  }

  const addLineGeometry = (x, y, geometry) => {
    const material = new THREE.LineBasicMaterial({ color: 0x000000 })
    const mesh = new THREE.LineSegments(geometry, material)
    addObject(x, y, mesh)
  }

  {
    const width = 8
    const height = 8
    const depth = 8
    addSolidGeometry(-2, 2, new THREE.BoxGeometry(width, height, depth))
  }

  {
    const radius = 7
    const segments = 24
    addSolidGeometry(-1, 2, new THREE.CircleGeometry(radius, segments))
  }

  {
    const radius = 6
    const height = 8
    const segments = 16
    addSolidGeometry(0, 2, new THREE.ConeGeometry(radius, height, segments))
  }

  {
    const radiusTop = 4
    const radiusBottom = 4
    const height = 8
    const radialSegments = 12
    addSolidGeometry(1, 2, new THREE.CylinderGeometry(radiusTop, radiusBottom, height, radialSegments))
  }

  {
    const radius = 7
    addSolidGeometry(2, 2, new THREE.DodecahedronGeometry(radius))
  }

  {
    const shape = new THREE.Shape()
    const x = -2.5
    const y = -5
    shape.moveTo(x + 2.5, y + 2.5)
    shape.bezierCurveTo(x + 2.5, y + 2.5, x + 2, y, x, y)
    shape.bezierCurveTo(x - 3, y, x - 3, y + 3.5, x - 3, y + 3.5)
    shape.bezierCurveTo(x - 3, y + 5.5, x - 1.5, y + 7.7, x + 2.5, y + 9.5)
    shape.bezierCurveTo(x + 6, y + 7.7, x + 8, y + 4.5, x + 8, y + 3.5)
    shape.bezierCurveTo(x + 8, y + 3.5, x + 8, y, x + 5, y)
    shape.bezierCurveTo(x + 3.5, y, x + 2.5, y + 2.5, x + 2.5, y + 2.5)

    const extrudeSettings = {
      steps: 2,
      depth: 2,
      bevelEnabled: true,
      bevelThickness: 1,
      bevelSize: 1,
      bevelSegments: 2
    }

    addSolidGeometry(-2, 1, new THREE.ExtrudeGeometry(shape, extrudeSettings))
  }

  {
    const radius = 7
    addSolidGeometry(-1, 1, new THREE.IcosahedronGeometry(radius))
  }

  {
    const points = []
    for (let i = 0; i < 10; ++i) {
      points.push(new THREE.Vector2(Math.sin(i * 0.2) * 3 + 3, (i - 5) * 0.8))
    }

    addSolidGeometry(0, 1, new THREE.LatheGeometry(points))
  }

  {
    const radius = 7
    addSolidGeometry(1, 1, new THREE.OctahedronGeometry(radius))
  }

  {
    const width = 9
    const height = 9
    const widthSegments = 2
    const heightSegments = 2
    addSolidGeometry(-2, 0, new THREE.PlaneGeometry(width, height, widthSegments, heightSegments))
  }

  {
    const verticesOfCube = [-1, -1, -1, 1, -1, -1, 1, 1, -1, -1, 1, -1, -1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1]
    const indicesOfFaces = [
      2, 1, 0, 0, 3, 2, 0, 4, 7, 7, 3, 0, 0, 1, 5, 5, 4, 0, 1, 2, 6, 6, 5, 1, 2, 3, 7, 7, 6, 2, 4, 5, 6, 6, 7, 4
    ]
    const radius = 7
    const detail = 2
    addSolidGeometry(-1, 0, new THREE.PolyhedronGeometry(verticesOfCube, indicesOfFaces, radius, detail))
  }

  {
    const innerRadius = 2
    const outerRadius = 7
    const segments = 18
    addSolidGeometry(0, 0, new THREE.RingGeometry(innerRadius, outerRadius, segments))
  }

  {
    const shape = new THREE.Shape()
    const x = -2.5
    const y = -5
    shape.moveTo(x + 2.5, y + 2.5)
    shape.bezierCurveTo(x + 2.5, y + 2.5, x + 2, y, x, y)
    shape.bezierCurveTo(x - 3, y, x - 3, y + 3.5, x - 3, y + 3.5)
    shape.bezierCurveTo(x - 3, y + 5.5, x - 1.5, y + 7.7, x + 2.5, y + 9.5)
    shape.bezierCurveTo(x + 6, y + 7.7, x + 8, y + 4.5, x + 8, y + 3.5)
    shape.bezierCurveTo(x + 8, y + 3.5, x + 8, y, x + 5, y)
    shape.bezierCurveTo(x + 3.5, y, x + 2.5, y + 2.5, x + 2.5, y + 2.5)
    addSolidGeometry(1, 0, new THREE.ShapeGeometry(shape))
  }

  {
    const radius = 7
    const widthSegments = 12
    const heightSegments = 8
    addSolidGeometry(2, 0, new THREE.SphereGeometry(radius, widthSegments, heightSegments))
  }

  {
    const radius = 7
    addSolidGeometry(-2, -1, new THREE.TetrahedronGeometry(radius))
  }

  {
    const radius = 5
    const tubeRadius = 2
    const radialSegments = 8
    const tubularSegments = 24
    addSolidGeometry(0, -1, new THREE.TorusGeometry(radius, tubeRadius, radialSegments, tubularSegments))
  }

  {
    const radius = 3.5
    const tube = 1.5
    const radialSegments = 8
    const tubularSegments = 64
    const p = 2
    const q = 3
    addSolidGeometry(1, -1, new THREE.TorusKnotGeometry(radius, tube, tubularSegments, radialSegments, p, q))
  }

  {
    class CustomSinCurve extends THREE.Curve {
      constructor(scale) {
        super()
        this.scale = scale
      }
      getPoint(t) {
        const tx = t * 3 - 1.5
        const ty = Math.sin(2 * Math.PI * t)
        const tz = 0
        return new THREE.Vector3(tx, ty, tz).multiplyScalar(this.scale)
      }
    }

    const path = new CustomSinCurve(4)
    const tubularSegments = 20
    const radius = 1
    const radialSegments = 8
    const closed = false
    addSolidGeometry(2, -1, new THREE.TubeGeometry(path, tubularSegments, radius, radialSegments, closed))
  }

  {
    const width = 8
    const height = 8
    const depth = 8
    const thresholdAngle = 15
    addLineGeometry(-1, -1, new THREE.EdgesGeometry(new THREE.BoxGeometry(width, height, depth), thresholdAngle))
  }

  {
    const width = 8
    const height = 8
    const depth = 8
    addLineGeometry(2, 1, new THREE.WireframeGeometry(new THREE.BoxGeometry(width, height, depth)))
  }

  const resizeRendererToDisplaySize = renderer => {
    const canvas = renderer.domElement
    const width = canvas.clientWidth
    const height = canvas.clientHeight
    const needResize = canvas.width !== width || canvas.height !== height
    if (needResize) {
      renderer.setSize(width, height, false)
    }

    return needResize
  }

  const render = time => {
    time *= 0.001

    if (resizeRendererToDisplaySize(renderer)) {
      const canvas = renderer.domElement
      camera.aspect = canvas.clientWidth / canvas.clientHeight
      camera.updateProjectionMatrix()
    }

    objects.forEach((obj, ndx) => {
      const speed = 0.1 + ndx * 0.05
      const rot = time * speed
      obj.rotation.x = rot
      obj.rotation.y = rot
    })

    renderer.render(scene, camera)

    requestAnimationFrame(render)
  }

  requestAnimationFrame(render)
}

onMounted(() => {
  main1()
  main2()
  main3()
})
</script>

<style scoped lang="scss">
.ant-card :deep(.ant-card-body) {
  position: relative;
  overflow: auto;
}

canvas {
  width: 100%;
  height: 100%;
}
</style>
