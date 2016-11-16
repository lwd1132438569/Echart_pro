var drillDown = {
    getOption : function () {
        var option = null;
                option = {
                    title : {
                        text: '院长指挥舱',
                        subtext: '测试DEMO',
                        x:'center'
                    },
                    tooltip : {
                        trigger: 'item',
                        formatter: "{a} <br/>{b} : {c} ({d}%)"
                    },
                    legend: {
                        orient: 'vertical',
                        left: 'left',
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
    initChart : function (myChart,option) {
        myChart.setOption(option);
        myChart.on('click',function(object){
          // 销毁之前的echarts实例
        // echarts.dispose(dom);
        // 初始化一个新的实例
        if (object.dataIndex == 0) {
        var dom1 = document.getElementById("container1");
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
                toolbox: {
                    show: true,
                    feature: {
                        dataView:{
                            show:true
                        },
                        restore:{
                            show:true
                        },
                        dataZoom:{
                            show:true
                        },
                        saveAsImage: {
                            show: true
                        },
                        magicType: {
                            type: ['line', 'bar',]
                        }
                    }
                },
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    data: ['人次']
                },
                xAxis: {
                    data: ["王医生", "张医生", "李医生", "陈医生", "许医生", "翟医生"]
                },
                yAxis: {},
                series: [{
                    name: '人次',
                    type: 'bar',
                    data: [5, 20, 36, 10, 10, 20]
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
        var dom1 = document.getElementById("container1");
        var myChart = echarts.init(dom1);

        var option = {
                toolbox: {
                    show: true,
                    feature: {
                        saveAsImage: {
                            show: true
                        }
                    }
                },
                legend: {
                    data: ['人次']
                },
                color:['blue'],
                xAxis: {
                    data: ["韩医生", "赵医生", "李医生", "史医生", "梁医生"]
                },
                yAxis: {},
                series: [{
                    name: '人次',
                    type: 'bar',
                    data: [15, 20, 30, 30, 17]
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
        var dom1 = document.getElementById("container1");
        var myChart = echarts.init(dom1);

        var option = {
                toolbox: {
                    show: true,
                    feature: {
                        saveAsImage: {
                            show: true
                        }
                    }
                },
                legend: {
                    data: ['人次']
                },
                xAxis: {
                    data: ["韩医生", "赵医生", "史医生", "梁医生"]
                },
                yAxis: {},
                series: [{
                    name: '人次',
                    type: 'bar',
                    data: [15, 20, 30, 17]
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
        var dom1 = document.getElementById("container1");
        var myChart = echarts.init(dom1);

        var option = {
                toolbox: {
                    show: true,
                    feature: {
                        saveAsImage: {
                            show: true
                        }
                    }
                },
                legend: {
                    data: ['人次']
                },
                color:['green'],
                xAxis: {
                    data: ["韩医生", "赵医生", "李医生", "史医生", "梁医生", "最医生"]
                },
                yAxis: {},
                series: [{
                    name: '人次',
                    type: 'bar',
                    data: [15, 20, 30, 30, 37, 11]
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
        var dom1 = document.getElementById("container1");
        var myChart = echarts.init(dom1);

        var option = {
                toolbox: {
                    show: true,
                    feature: {
                        saveAsImage: {
                            show: true
                        }
                    }
                },
                legend: {
                    data: ['人次']
                },
                color:['yellow'],
                xAxis: {
                    data: ["韩医生", "史医生", "梁医生"]
                },
                yAxis: {},
                series: [{
                    name: '人次',
                    type: 'bar',
                    data: [35, 30, 37]
                }]
            };

        myChart.setOption(option, true);  
    };
    });
  },

};
