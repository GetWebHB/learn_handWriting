import Node from './Node'

type NodeType<T> = Node<T> | null

class TreeNode<T> extends Node<T> {
  left: NodeType<T> = null
  right: NodeType<T> = null
}

class BSTTree<T> {
  private root: NodeType<T> = null
}
