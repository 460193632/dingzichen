function modelSelect(model_x)//切换模型函数
{
    if (model_x==1)
    {  
        loader.load('1.obj',function (obj) {
            // 控制台查看返回结构：包含一个网格模型Mesh的组Group
            //console.log(obj);
            // 查看加载器生成的材质对象：MeshPhongMaterial
            //console.log(obj.children[0].material);
            group=obj;
            group.position.set(mesh_x,mesh_y,mesh_z);
            scene.add(group);
          })
    }
    else if (model_x==2)
    {
        loader.load('2.obj',function (obj) {
            // 控制台查看返回结构：包含一个网格模型Mesh的组Group
            //console.log(obj);
            // 查看加载器生成的材质对象：MeshPhongMaterial
            //console.log(obj.children[0].material);
            group=obj;
            group.position.set(mesh_x,mesh_y,mesh_z);
            scene.add(group);
        })
    }
    else if (model_x==3)
    {
        loader.load('3.obj',function (obj) {
            // 控制台查看返回结构：包含一个网格模型Mesh的组Group
            //console.log(obj);
            // 查看加载器生成的材质对象：MeshPhongMaterial
            //console.log(obj.children[0].material);
            group=obj;
            group.position.set(mesh_x,mesh_y,mesh_z);
            scene.add(group);
        })
    }
    else
    {
        mtlloader.load('car.mtl', function(materials) {
        console.log(materials);
        loader.setMaterials(materials);
        loader.load('car.obj',function(obj) {
            console.log(obj);
            //obj.scale.set(30, 30, 30); //放大obj组对象
            group=obj;
            group.position.set(mesh_x,mesh_y,mesh_z);
            scene.add(obj);//返回的组对象插入场景中
          })
        })
    }    
}
function myfunction1()//模型绕Y轴旋转90度
{
    Y_1=-Math.PI/2;
    group.rotateY(Y_1);//旋转90°
    console.log(group);
    console.log(group.children);
}

function myfunction2()//恢复模型初始状态函数
{
    camera.position.set(100, 100, 200); //设置相机位置
    camera.lookAt(scene.position)
    mesh_x=0;
    mesh_y=0;
    mesh_z=0;
    group.position.set(mesh_x,mesh_y,mesh_z);//设置模型的三坐标位置
}

//控制自动旋转开关
function myfunction4()//模型旋转的条件函数
{
    button_off=button_off+1;
    button_off_1=(button_off%2==0)?1:0;
}

function myfunction5()//切换不同模型的条件函数
{
    model_x=model_x+1;
    if (model_x>4)
    {
        model_x=1;
    }
    scene.remove(group);
    modelSelect(model_x);
}

function myfunction6()//模型X坐标右移动10个单位函数
{
    mesh_x+=10;
    group.position.set(mesh_x,mesh_y,mesh_z);
}

function myfunction7()//模型y坐标上移动10个单位函数
{
    mesh_y+=10;
    group.position.set(mesh_x,mesh_y,mesh_z);
}

function myfunction8()//模型z坐标前移动10个单位函数
{
    mesh_z+=10;
    group.position.set(mesh_x,mesh_y,mesh_z);
}

function myfunction9()//开启阴影投射...开启后会有卡顿
{
    shadow_button++;
    if(shadow_button%2==1)
    {
    group.children[0].castShadow = true;//开启投影
    group.children[0].receiveShadow = true;//接收阴影
    group.children[1].castShadow = true;//开启投影
    group.children[1].receiveShadow = true;//接收阴影
    group.children[2].castShadow = true;//开启投影
    group.children[2].receiveShadow = true;//接收阴影
    mesh1.castShadow=true;//托盘开启阴影
    mesh1.receiveShadow=true;//托盘接收阴影
    point.castShadow=true;//开启灯光投射阴影
    renderer.shadowMap.enabled = true;//渲染开启阴影，加上阴影渲染
    }
    else
    {
    group.children[0].castShadow = false;//关闭投影
    group.children[0].receiveShadow = false;//关闭接收阴影
    group.children[1].castShadow = false;//关闭投影
    group.children[1].receiveShadow = false;//关闭接收阴影
    group.children[2].castShadow = false;//关闭投影
    group.children[2].receiveShadow = false;//关闭接收阴影
    mesh1.castShadow=false;//托盘关闭阴影
    mesh1.receiveShadow=false;//托盘关闭接收阴影
    point.castShadow=false;//关闭灯光投射阴影
    renderer.shadowMap.enabled = false;//渲染关闭阴影，加上阴影渲染
    }
}

function myfunction10()//线框显示
{
    Wireframe_button++;
    if (Wireframe_button%2==1)
    {
        group.children[0].material.wireframe=true;
        group.children[1].material.wireframe=true;
        group.children[2].material.wireframe=true;
        mesh1.material.wireframe=true;
    }
    else
    {
        group.children[0].material.wireframe=false;
        group.children[1].material.wireframe=false;
        group.children[2].material.wireframe=false;
        mesh1.material.wireframe=false;
    }
}



function myfunction100()//通过改变组中的网格模型属性来改变整个模型颜色
{
    myfunction101();
    group.children[0].material.color = new THREE.Color(a1,b1,c1);	
    group.children[1].material.color = new THREE.Color(a1,b1,c1);	
    group.children[2].material.color = new THREE.Color(a1,b1,c1);	
    console.log( new THREE.Color( a1,b1,c1 ));
}

function myfunction101()//自动变换组中的网格模型属性中模型颜色
{
    x1=x1+1;
    if (0<x1,x1<=100){
        c1=c1+0.01;
    }
    else if (100<x1,x1<=200){
        a1=a1-0.01;
    }
    else if (200<x1,x1<=300){
        b1=b1+0.01;
    }
    else if (300<x1,x1<=400){
        c1=c1-0.01;
    }
    else if (400<x1,x1<=500){
        a1=a1+0.01;
    }
    else if (500<x1,x1<=600){
        b1=b1-0.01;
        if(x1==600){
            x1=0;
        }
    }
    group.children[0].material.color = new THREE.Color( a1,b1,c1 );	
    group.children[1].material.color = new THREE.Color( a1,b1,c1 );	
    group.children[2].material.color = new THREE.Color( a1,b1,c1 );	
}

function myfunction102()//模型自动变换颜色开关
{
    x1_button++;
}
function render() //渲染模型函数
{
    //旋转函数
    if(button_off_1==0)
    {
    var T1 = new Date();//本次时间
    var t = T1-T0;//时间差
    T0 = T1;//把本次时间赋值给上次时间
    }
    else
    {
    var T1 = new Date();//本次时间
    T0 = T1;//把本次时间赋值给上次时间//为了控制自动旋转之后暂停后再开启自动旋转模型无法从暂停状态重启需要继续将时间变量延续下去
    t=0;
    }
    requestAnimationFrame(render);
    renderer.render(scene,camera);//执行渲染操作
    if (x1_button%2==1){
    myfunction101()//颜色变换
    }
    group.rotateY(-Math.PI/3600*t);//旋转角速度0.05弧度每次执行函数
}

//模型自适应网页窗口大小变换居中显示
window.onresize=function(){
    // 重置渲染器输出画布canvas尺寸
    renderer.setSize(window.innerWidth,window.innerHeight);
    // 重置相机投影的相关参数
    k = window.innerWidth/window.innerHeight;//窗口宽高比
    camera.left = -s*k;
    camera.right = s*k;
    camera.top = s;
    camera.bottom = -s;
    // 渲染器执行render方法的时候会读取相机对象的投影矩阵属性projectionMatrix
    // 但是不会每渲染一帧，就通过相机的属性计算投影矩阵(节约计算资源)
    // 如果相机的一些属性发生了变化，需要执行updateProjectionMatrix ()方法更新相机的投影矩阵
    camera.updateProjectionMatrix ();
};

function show()
{
    var reader = new FileReader();
    reader.onload = function()
    {
        //alert(this.result)
        console.log(this.result);
        Temporary_model=this.result;
    }
        
    var f = document.getElementById("filePicker").files[0];
    reader.readAsText(f);
}
