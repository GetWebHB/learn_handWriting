const tree = {
  top: 2,
  product: '服装-内裤',
  data: {
    name: '服装-内裤',
    specs: '/条',
    up: [
      {
        name: '纺织产品-包纱',
        specs: '/公斤',
        up: [],
        down: [],
      },
      {
        name: '纺织产品-全棉特纺筒纱',
        specs: '40支/吨',
        up: [],
        down: [],
      },
    ],
    down: [
      {
        name: '鞋-凉拖鞋',
        specs: '/双',
        up: [],
        down: [],
      },
    ],
  },
}

const data = [
  {
    // root
    name: 'flare',
    // 左子树
    children: [
      {
        name: 'cluster',
        children: [
          {
            name: 'cluster',
          },
          {
            name: 'AgglomerativeCluster',
          },
          {
            name: 'CommunityStructure',
          },
        ],
      },
      {
        name: 'AgglomerativeCluster',
        children: [
          {
            name: 'cluster',
          },
          {
            name: 'AgglomerativeCluster',
          },
          {
            name: 'CommunityStructure',
          },
        ],
      },
    ],
  },
]

function formatTree(trees, sign = 'up') {
  const treeMap = {}
  function _f(_trees, map) {
    for (const val of _trees) {
      const children = map.children
      const name = `${val.name}&${val.specs}`
      const obj = { name }

      !children ? (map.children = [obj]) : map.children.push(obj)

      if (val[sign].length) {
        _f(val[sign], obj)
      }
    }
  }

  _f(trees, treeMap)

  return treeMap
}

console.log(formatTree(tree.data.up, 'up'))
console.log(formatTree(tree.data.down, 'down'))
