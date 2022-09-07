
dir=../pages/post/Visual

# 此脚本并不十分安全，注意重复执行
for name in `ls $dir`; 
do  
    res=$(echo $name | grep "/$")
    if [ $res != "" ];
    then
        echo "need not change" $name $res
        continue;
    fi
    echo 'change: ' $name
    mv $dir/$name $dir/${name%.*}$.md;
done

# for name in `ls ../pages/post`;do  mv $name  ${name%.CHECK*};done
