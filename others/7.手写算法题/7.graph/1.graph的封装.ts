class Graph<T> {
  // 顶点
  verteces: T[]
  // 邻接表
  adjList: Map<T, T[]>
}

export default Graph
