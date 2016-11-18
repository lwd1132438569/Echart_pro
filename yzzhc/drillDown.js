var drillDown = {
    getOption : function () {
        var option = null;
                option = {
                    title : {
                        text: '门诊挂号科室分布',
                        x:'center'
                    },
                    tooltip : {
                        trigger: 'item',
                        formatter: "{a} <br/>{b} : {c} ({d}%)"
                    },
                    color:['#EE2C2C','#CD5C5C','#7EC0EE','#EE7621','#CDCD00'],
                    legend: {
                        orient: 'vertical',
                        left: 'right',
                        data: ['儿科','内科','普外科','妇产科','口腔科']
                    },
                    series : [
                        {
                            name: '访问来源',
                            type: 'pie',
                            radius : '55%',
                            center: ['50%', '60%'],
                            data:[
                                {value:5014, name:'儿科'},
                                {value:2542, name:'内科'},
                                {value:1354, name:'普外科'},
                                {value:571, name:'妇产科'},
                                {value:509, name:'口腔科'}
                            ]
                        }
                    ]
                };
                return option;
    },

    // 分时折线图
  initChart_line : function (myChart,option) {
        myChart.setOption(option);
        
        var dom_line = document.getElementById("container");
        var myChart = echarts.init(dom_line);

        var option = {
               title : {
                    text: '门诊挂号分时统计图',
                    x:"center"
                },
               tooltip : {
                    trigger: 'axis'
                },
                legend: {
                    data:['人次'],
                    x:"left"
                },
                toolbox: {
                    show : true,
                    feature : {
                       
                        saveAsImage : {show: true}
                    }
                },
                calculable : true,
                xAxis : [
                    {
                        type : 'category',
                        boundaryGap : false,
                        data : ['8：00','9:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00']
                    }
                ],
                yAxis : [
                    {
                        type : 'value',
                        
                    }
                ],
               series : [
                    {
                        name:'人数',
                        type:'line',
                        data:[0, 120, 520, 180, 0,0, 0,630,320,120,210,0],
                    },
                ]
            };

        myChart.setOption(option, true);  

  },

    //第一个扇区对应的图
    initChart : function (myChart,option) {
        myChart.setOption(option);
        myChart.on('click',function(object){
          // 销毁之前的echarts实例
        // echarts.dispose(dom);
        // 初始化一个新的实例
        if (object.name == "儿科") {
        var dom1 = document.getElementById("container2");
        var myChart = echarts.init(dom1);
        // object为当前的这个echart对象，大家可以自己打印出来看看
        // var a = object.dataIndex;
        // alert(a);
        // 我们可以看到name属性即为当前点击点的对应月份值，那么我们可以通过这个值去接口查询对应201609月份下的每一天的值.
        // 此处的201609月份数据可以通过接口读取
        // $.ajax(
        //     type : 'get',
        //     url : interfaceUrl + '&month=' + object.name, // 此处可以替换为你的接口地址
        //     dataType : 'json',
        //     success : function (msg){
        //         option.xAxis.data = msg.xAxis;
        //         option.series[0].data = msg.yAxis[0];
        //         myChart.setOption(option, true);
        //     }
        // );

        // 我这里就模拟一个测试数据，做为demo演示
       var option = {
                title : {
                        text: '科室医生挂号统计',
                        x:'center'
                    },
                toolbox: {
                    show: true,
                    feature: {
                        saveAsImage: {
                            show: true
                        }
                    }
                },
                legend: {
                    data: ['人次'],
                    x:"left"
                },
                color:['#EE2C2C'],
                xAxis: {
                    data: ["韩医生", "赵医生", "李医生", "史医生", "梁医生","许医生","苗医生","林医生","曲医生"]
                },
                yAxis: {},
                series: [{
                    name: '人次',
                    type: 'bar',
                    data: [15, 20, 36, 30, 17, 22, 10, 13, 19]
                }]
            };


        myChart.setOption(option, true);  
    };
    });
  },
  
  // 第二个扇区对应的图
  initChart1 : function (myChart,option) {
        myChart.setOption(option);
        myChart.on('click',function(object){
        if (object.dataIndex == 1) {
        var dom1 = document.getElementById("container2");
        var myChart = echarts.init(dom1);

        var option = {
                title : {
                        text: '科室医生挂号统计',
                        x:'center'
                    },
                toolbox: {
                    show: true,
                    feature: {
                        saveAsImage: {
                            show: true
                        }
                    }
                },
                legend: {
                    data: ['人次'],
                    x:"left"
                },
                itemStyle:{
                   normal:{
                     color:'#CD5C5C',
                     }
                },
                xAxis: {
                    data: ["韩医生", "赵医生", "李医生", "史医生", "梁医生","许医生","苗医生","林医生","曲医生"]
                },
                yAxis: {},
                series: [{
                    name: '人次',
                    type: 'bar',
                    data: [15, 20, 36, 30, 17, 22, 10, 13, 19]
                }]
            };

        myChart.setOption(option, true);  
    };
    });
  },
  // 第三个扇区对应的图
  initChart2 : function (myChart,option) {
        myChart.setOption(option);
        myChart.on('click',function(object){
        if (object.dataIndex == 2) {
        var dom1 = document.getElementById("container2");
        var myChart = echarts.init(dom1);

        var option = {
                title : {
                        text: '科室医生挂号统计',
                        x:'center'
                    },
                toolbox: {
                    show: true,
                    feature: {
                        saveAsImage: {
                            show: true
                        }
                    }
                },
                legend: {
                    data: ['人次'],
                    x:"left"
                },
                itemStyle:{
                   normal:{
                     color:'#7EC0EE',
                     }
                },
                xAxis: {
                    data: ["韩医生", "赵医生", "李医生", "史医生", "梁医生","许医生","苗医生","林医生","曲医生"]
                },
                yAxis: {},
                series: [{
                    name: '人次',
                    type: 'bar',
                    data: [15, 20, 30, 17, 23, 12, 16, 19, 15]
                }]
            };

        myChart.setOption(option, true);  
    };
    });
  },
  // 第四个扇区对应的图
  initChart3 : function (myChart,option) {
        myChart.setOption(option);
        myChart.on('click',function(object){
        if (object.dataIndex == 3) {
        var dom1 = document.getElementById("container2");
        var myChart = echarts.init(dom1);

        var option = {
                title : {
                        text: '科室医生挂号统计',
                        x:'center'
                    },
                toolbox: {
                    show: true,
                    feature: {
                        saveAsImage: {
                            show: true
                        }
                    }
                },
                legend: {
                    data: ['人次'],
                    x:"left"
                },
                itemStyle:{
                   normal:{
                     color:'#EE7621',
                     }
                },
                xAxis: {
                    data: ["韩医生", "赵医生", "李医生", "史医生", "梁医生","许医生","苗医生","林医生","曲医生"]
                },
                yAxis: {},
                series: [{
                    name: '人次',
                    type: 'bar',
                    data: [15, 20, 30, 30, 37, 11, 22, 18, 21]
                }]
            };

        myChart.setOption(option, true);  
    };
    });
  },
  // 第五个扇区对应的图
  initChart4 : function (myChart,option) {
        myChart.setOption(option);
        myChart.on('click',function(object){
        if (object.dataIndex == 4) {
        var dom1 = document.getElementById("container2");
        var myChart = echarts.init(dom1);

        var option = {
                title : {
                        text: '科室医生挂号统计',
                        x:'center'
                    },
                toolbox: {
                    show: true,
                    feature: {
                        saveAsImage: {
                            show: true
                        }
                    }
                },
                legend: {
                    data: ['人次'],
                    x:"left"
                },
                itemStyle:{
                   normal:{
                     color:'#CDCD00',
                     }
                },
                xAxis: {
                    data: ["韩医生", "赵医生", "李医生", "史医生", "梁医生","许医生","苗医生","林医生","曲医生"]
                },
                yAxis: {},
                series: [{
                    name: '人次',
                    type: 'bar',
                    data: [35, 30, 37, 23, 33, 23, 12, 12, 23]
                }]
            };

        myChart.setOption(option, true);  
    };
    });
  },

};
