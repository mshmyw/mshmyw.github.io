import{c as u}from"./index.1fa5d347.js";const r={},C="wrapper";function e({components:t,...F}){return u(C,{...r,...F,components:t,mdxType:"MDXLayout"},u("h1",null,"bfs \u548C \u961F\u5217"),u("p",null,"\u5B66\u8FC7\u6570\u636E\u7ED3\u6784\u7684\u90FD\u77E5\u9053\uFF0C\u4E8C\u53C9\u6811\u7684\u5C42\u6B21\u904D\u5386\u3002"),u("p",null,"\u5C42\u6B21\u904D\u5386\u5229\u7528\u7684\u6570\u636E\u7ED3\u6784\u662F\u961F\u5217\u3002"),u("p",null,"\u90A3\u4E48\uFF0C"),u("h1",null,"\u601D\u8003\u4E00\u4E0B"),u("p",null,"\u4E3A\u4EC0\u4E48\u5C42\u6B21\u904D\u5386\uFF0C\u8981\u7528\u5230\u961F\u5217\uFF0C\u800C\u4E0D\u662F\u5176\u4ED6\u7684\u6570\u636E\u7ED3\u6784\uFF0C\u6BD4\u5982\u6808\u5462\uFF1F\u6362\u53E5\u8BDD\u8BF4\uFF0C\u961F\u5217\u5728\u4E8C\u53C9\u6811\u7684\u5C42\u6B21\u904D\u5386\u8FC7\u7A0B\u4E2D\u8D77\u5230\u4E86\u4EC0\u4E48\u4F5C\u7528\u5462\uFF1F"),u("h1",null,"\u961F\u5217\u5728\u4E8C\u53C9\u6811\u5C42\u6B21\u904D\u5386\u4E2D\u7684\u4F5C\u7528"),u("p",null,"\u6211\u4EEC\u77E5\u9053\uFF0C\u4E8C\u53C9\u6811\u7684\u7ED3\u6784\u5982\u4E0B:"),u("pre",null,u("code",{parentName:"pre"},`/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
`)),u("p",null,"\u4ECE\u7ED3\u6784\u4E2D\u5927\u81F4\u53EF\u4EE5\u77E5\u9053\uFF0C\u4E8C\u53C9\u6811\u7684\u6839\u8DDF\u5DE6\u53F3\u8FD8\u662F\u662F\u91C7\u7528\u94FE\u8868\u7684\u5F62\u5F0F\u8054\u7CFB\u7684\uFF0C\u7236\u8282\u70B9\uFF0C\u4FDD\u5B58\u4E86\u5DE6\u53F3\u5B69\u5B50\u7684\u6307\u9488\uFF0C\u6240\u4EE5\uFF0C\u6211\u4EEC\u77E5\u9053\u4E86\u7236\u8282\u70B9\uFF0C\u5FC5\u7136\u4E5F\u5C31\u77E5\u9053\u4E86\u5DE6\u53F3\u5B69\u5B50\u7684\u4FE1\u606F\u3002"),u("p",null,"\u4F46\u662F\uFF0C\u5728\u4E00\u4E2A\u4E8C\u53C9\u6811\u4E2D\uFF0C\u540C\u5C42\u4E4B\u95F4\u7684\u4FE1\u606F\u901A\u8FC7\u4EC0\u4E48\u8054\u7CFB\u5728\u4E00\u8D77\u7684\u5462\uFF1F"),u("p",null,u("img",{parentName:"p",src:"https://blog.nanpuyue.com/usr/uploads/2019/05/380282528.svg",alt:"tree_0.svg"})),u("p",null,"\u6BD4\u5982\u4E0A\u56FE\u4E2D\u76842\uFF0C6\uFF0C9\uFF0C12\uFF0C\u8FD9\u65F6\u5C42\u6B21\u904D\u5386\u7684\u65F6\u5019\uFF0C\u6211\u4EEC\u5982\u4F55\u4FDD\u6301\u540C\u5C42\u4E4B\u95F4\u7684\u987A\u5E8F\u5462\uFF1F\u8FD9\u4E2A\u5C31\u5E94\u8BE5\u662F\u9760\u961F\u5217\u7684\u4F5C\u7528\u4E86\u3002"),u("p",null,"\u961F\u5217\u7684\u4E00\u4E2A\u7279\u70B9\u662F\uFF0C\u5143\u7D20\u662F\u5148\u8FDB\u5148\u51FA\uFF0C\u6211\u4EEC\u53EF\u4EE5\u628A\u540C\u5C42\u7684\u5144\u5F1F\u5143\u7D20\u4F9D\u6B21\u5165\u961F\uFF0C\u7136\u540E\uFF0C\u5728\u51FA\u961F\u7684\u8FC7\u7A0B\u4E2D\u518D\u904D\u5386\u5DE6\u53F3\u5B69\u5B50\uFF0C\u5FAA\u73AF\u4EE5\u4E0A\u64CD\u4F5C\u5373\u53EF\u3002"),u("h1",null,"\u901A\u8FC7\u6570\u7EC4\u521B\u5EFA\u4E8C\u53C9\u6811vs\u4E8C\u53C9\u6811\u7684\u5C42\u6B21\u904D\u5386"),u("p",null,"\u4ECA\u5929\uFF0C\u505Aleetcode\u4E0A\u7684\u4E00\u9053\u4E8C\u53C9\u6811\u5C42\u6B21\u904D\u5386\u7684\u9898\u76EE\uFF0C\u7531\u4E8E\u9700\u8981\u5728\u672C\u5730\u8C03\u8BD5\uFF0C\u6240\u4EE5\u60F3\u5728\u672C\u5730\u521B\u5EFA\u4E00\u4E2A\u4E8C\u53C9\u6811\uFF0C\u4E8E\u662F\u60F3\u5230\u4E86\uFF0C\u901A\u8FC7\u6570\u7EC4\u53BB\u521B\u5EFA\u4E00\u4E2A\u4E8C\u53C9\u6811\uFF0C\u4E5F\u5C31\u662F\u5C06\u4E00\u4E2A\u6570\u7EC4\u8F6C\u5316\u4E3A\u5B8C\u5168\u4E8C\u53C9\u6811\u3002"),u("p",null,"\u6700\u540E\u53D1\u73B0\uFF0C\u539F\u6765\uFF0C\u901A\u8FC7\u6570\u7EC4\u521B\u5EFA\u4E8C\u53C9\u6811\u548C\u4E8C\u53C9\u6811\u7684\u5C42\u6B21\u904D\u5386\u5176\u5B9E\u5B58\u5728\u7740\u67D0\u79CD\u8054\u7CFB\uFF0C\u4ED6\u4EEC\u662F\u4E00\u4E2A\u76F8\u53CD\u7684\u8FC7\u7A0B\u3002"),u("p",null,"\u4E5F\u5C31\u662F\u901A\u8FC7\u6570\u7EC4\u521B\u5EFA\u4E8C\u53C9\u6811\u662F\u5C06\u6570\u7EC4\u8F6C\u5316\u4E3A\u4E8C\u53C9\u6811\uFF0C\u800C\u4E8C\u53C9\u6811\u7684\u5C42\u6B21\u904D\u5386\u5176\u5B9E\u662F\u5C06\u4E8C\u53C9\u6811\u8F6C\u5316\u4E3A\u6570\u7EC4\u7684\u5F62\u5F0F\u3002"),u("p",null,"\u786E\u5B9E\u5F88\u5999\u3002"),u("p",null,"\u4E0B\u9762\u7ED9\u51FA\u4EE3\u7801"),u("h2",null,"python"),u("pre",null,u("code",{parentName:"pre",className:"language-python"},`#!/usr/bin/python 
#-*- coding: UTF-8 -*-
class node():
    def __init__(self,k=None,l=None,r=None):
        self.key=k;
        self.left=l;
        self.right=r;
 
def create_tree_by_array(input_list):
  """
  \u901A\u8FC7\u6570\u7EC4\u521B\u5EFA\u4E8C\u53C9\u6811\uFF0C
  \u5176\u5B9E\u662F\u5C42\u6B21\u904D\u5386
  \u9700\u8981\u5229\u7528\u8282\u70B9\u961F\u5217 
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
  \u5C42\u6B21\u904D\u5386
  \u9700\u8981\u5229\u7528\u8282\u70B9\u961F\u5217
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

def inorder(root):     #\u4E2D\u5E8F\u904D\u5386
    if root is None:
        return ;
    else:
        inorder(root.left);
        print(root.key,)
        inorder(root.right);

tree_data_list = [3,9, 20, '#','#', 15,7]
root=None;     # \u6D4B\u8BD5\u4EE3\u7801
root=create_tree_by_array(tree_data_list);
inorder(root);
traverse_tree_by_level(root)

`)),u("h2",null,"golang"),u("pre",null,u("code",{parentName:"pre",className:"language-go"},`package main

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

`)))}e.isMDXComponent=!0;var E=Object.freeze(Object.defineProperty({__proto__:null,default:e},Symbol.toStringTag,{value:"Module"}));const o={};o.main=E;export{o as default};
