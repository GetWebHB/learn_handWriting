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

graph.traverse()

export default Graph
