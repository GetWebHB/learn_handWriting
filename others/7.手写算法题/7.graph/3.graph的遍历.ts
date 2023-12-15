class Graph<T> {
  // 顶点
  verteces: T[] = []
  // 邻接表
  adjList: Map<T, T[]> = new Map()

  // 增加顶点
  addVertex(v: T) {
    this.verteces.push(v)
    this.adjList.set(v, [])
  }

  // 增加边
  addEdge(v1: T, v2: T) {
    // 双向的
    this.adjList.get(v1)?.push(v2)
    this.adjList.get(v2)?.push(v1)
  }

  // 遍历图结构
  traverse() {
    this.verteces.forEach((ver) => {
      const adj = this.adjList.get(ver)!
      console.log(`顶点：${ver} ->`, adj.join(','))
    })
  }

  // 广度优先: 先访问和我连接着的 队列
  bfs() {
    // 第一个直接入队
    const queue = [this.verteces[0]]
    const vistied = new Set<T>()
    vistied.add(this.verteces[0])

    while (queue.length) {
      const top = queue.shift()!
      console.log(top) // 访问

      const edges = this.adjList.get(top)
      if (!edges) continue

      for (let edge of edges) {
        if (!vistied.has(edge)) {
          vistied.add(edge)
          queue.push(edge)
        }
      }
    }
  }

  // 深度优先：一条道走到黑 栈（栈和递归可以相互转换）
  dfs() {
    const stack = [this.verteces[0]]
    const vistied = new Set<T>()
    vistied.add(this.verteces[0])

    while (stack.length) {
      const v = stack.pop()!
      console.log(v)

      const edges = this.adjList.get(v)
      if (!edges) continue

      for (let i = edges.length - 1; i >= 0; i--) {
        const edge = edges[i]
        if (!vistied.has(edge)) {
          vistied.add(edge)
          stack.push(edge)
        }
      }
    }
  }
}

const graph = new Graph()

graph.addVertex('A')
graph.addVertex('B')
graph.addVertex('C')
graph.addVertex('D')
graph.addVertex('E')
graph.addVertex('F')
graph.addVertex('G')
graph.addVertex('H')
graph.addVertex('I')

graph.addEdge('A', 'B')
graph.addEdge('A', 'C')
graph.addEdge('A', 'D')
graph.addEdge('B', 'F')
graph.addEdge('B', 'E')
graph.addEdge('C', 'D')
graph.addEdge('C', 'G')
graph.addEdge('G', 'D')
graph.addEdge('G', 'H')
graph.addEdge('E', 'I')

// graph.traverse()

// graph.bfs()
graph.dfs()

export default Graph
