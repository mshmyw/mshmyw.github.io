---
title: "Git"
date: 2019-12-18T23:57:26+08:00
draft: false
categories: ["git"]
series: ["git"]
---

# git squash



# git 统计

git log --after="2018-04-16 00:00:00" --before="2018-04-16 10:11:12" --stat

or

git log --since="2018-04-16 01:10:00" --until="2018-04-16 10:11:12" --stat

查看排名前 5 的贡献者：http://jartto.wang/2019/07/09/git-stats/

```
git log --pretty='%aN' | sort | uniq -c | sort -k1 -n -r | head -n 5
```
统计工具
git_stats cloc

# git rebase



# git reset

