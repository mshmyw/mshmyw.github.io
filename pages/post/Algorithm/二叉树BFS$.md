---
title: "二叉树BFS"
date: 2019-08-08T01:36:26+08:00

tags: ["go","python","Algorithm"]
categories: ["go","python","Algorithm"]
series: ["技术"]

# draft: true
---

# bfs 和 队列

学过数据结构的都知道，二叉树的层次遍历。

层次遍历利用的数据结构是队列。

那么，

# 思考一下

为什么层次遍历，要用到队列，而不是其他的数据结构，比如栈呢？换句话说，队列在二叉树的层次遍历过程中起到了什么作用呢？

# 队列在二叉树层次遍历中的作用

我们知道，二叉树的结构如下:

```
/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
```



从结构中大致可以知道，二叉树的根跟左右还是是采用链表的形式联系的，父节点，保存了左右孩子的指针，所以，我们知道了父节点，必然也就知道了左右孩子的信息。

但是，在一个二叉树中，同层之间的信息通过什么联系在一起的呢？

![tree_0.svg](https://blog.nanpuyue.com/usr/uploads/2019/05/380282528.svg)

比如上图中的2，6，9，12，这时层次遍历的时候，我们如何保持同层之间的顺序呢？这个就应该是靠队列的作用了。

队列的一个特点是，元素是先进先出，我们可以把同层的兄弟元素依次入队，然后，在出队的过程中再遍历左右孩子，循环以上操作即可。



# 通过数组创建二叉树vs二叉树的层次遍历

今天，做leetcode上的一道二叉树层次遍历的题目，由于需要在本地调试，所以想在本地创建一个二叉树，于是想到了，通过数组去创建一个二叉树，也就是将一个数组转化为完全二叉树。



最后发现，原来，通过数组创建二叉树和二叉树的层次遍历其实存在着某种联系，他们是一个相反的过程。



也就是通过数组创建二叉树是将数组转化为二叉树，而二叉树的层次遍历其实是将二叉树转化为数组的形式。

确实很妙。

下面给出代码

## python

```python
#!/usr/bin/python 
#-*- coding: UTF-8 -*-
class node():
	def __init__(self,k=None,l=None,r=None):
		self.key=k;
		self.left=l;
		self.right=r;
 
def create_tree_by_array(input_list):
  """
  通过数组创建二叉树，
  其实是层次遍历
  需要利用节点队列 
  """  

  def _createNode(item):
    if item is '#':
      return None
    else:
      return node(k=item)

  queue = []

  root = _createNode(input_list.pop(0))
  queue.append(root)

  while len(input_list) > 0:
    curNode = queue.pop(0)
    curNode.left = _createNode(input_list.pop(0))
    curNode.right = _createNode(input_list.pop(0))
    if curNode.left: 
      queue.append(curNode.left)
    if curNode.right:
      queue.append(curNode.right)

  return root

def traverse_tree_by_level(root):
  """
  层次遍历
  需要利用节点队列
  """

  queue = []
  output_list = []
  queue.append(root)
  output_list.append(root.key)
  while len(queue) > 0:
    curNode = queue.pop(0)
    if curNode.left:
      output_list.append(curNode.left.key)
      queue.append(curNode.left)
    if curNode.right:
      output_list.append(curNode.right.key)
      queue.append(curNode.right)
    
  print(output_list)

def inorder(root):     #中序遍历
	if root is None:
		return ;
	else:
		inorder(root.left);
		print(root.key,)
		inorder(root.right);

tree_data_list = [3,9, 20, '#','#', 15,7]
root=None;     # 测试代码
root=create_tree_by_array(tree_data_list);
inorder(root);
traverse_tree_by_level(root)

```



## golang

```go
package main

import (
	"fmt"
)

type Node struct {
	Value int
	Left  *Node
	Right *Node
}

func CreateNode(item int) *Node {

	if item == -1 {
		return nil
	}

	return &Node{item, nil, nil}
}

func CreateByBreadthFirstSearch(inputList []int) *Node {

	queue := []*Node{}
	root := CreateNode(inputList[0])
	queue = append(queue, root)

	inputList = inputList[1:]

	for len(inputList) > 0 {
		curNode := queue[0]
		queue = queue[1:]

		curNode.Left = CreateNode(inputList[0])
		if curNode.Left != nil {
			queue = append(queue, curNode.Left)
		}
		inputList = inputList[1:]

		if len(inputList) > 0 {
			curNode.Right = CreateNode(inputList[0])
			if curNode.Right != nil {
				queue = append(queue, curNode.Right)
			}
			inputList = inputList[1:]
		}

	}

	return root
}

func (node *Node) BreadthFirstSearch() {
	if node == nil {
		return
	}
	output_list := []int{}
	queue := []*Node{node}
	for len(queue) > 0 {
		curNode := queue[0]
		queue = queue[1:]
		output_list = append(output_list, curNode.Value)
		if curNode.Left != nil {
			queue = append(queue, curNode.Left)
		}
		if curNode.Right != nil {
			queue = append(queue, curNode.Right)
		}
	}
	for _, v := range output_list {
		fmt.Print(v, " ")
	}
}

func main() {

	input_list := []int{3, 7, 9, -1, -1, 20, 4}
	root := CreateByBreadthFirstSearch(input_list)
	root.BreadthFirstSearch()
}

```

