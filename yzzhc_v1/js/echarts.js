 // 路径配置
		require.config({
            paths: {
                echarts: 'http://echarts.baidu.com/build/dist'
            }
        });
        
        // 使用
        require(
            [
                'echarts',
                'echarts/chart/pie', // 使用柱状图就加载bar模块，按需加载
                 'echarts/chart/line',
                 'echarts/chart/bar'
                 
            ],
 function (ec) {
	
	//myChart,option,main
	
	var myChart = ec.init(document.getElementById('main'));
		var
		   option = {
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
    
                // 为echarts对象加载数据 
                myChart.setOption(option); 
                
      
      //myChart1,main1,option1
	              var myChart1 = ec.init(document.getElementById('main1')); 
                
               
		 var
		option1 = {
    title : {
        text: '门诊挂号科室分布',
        x:'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
      x:"center",y:"bottom",
        data:['儿科','内科','普外科','妇产科','口腔科']
    },
    toolbox: {
        show : true,
            feature : {
           
            saveAsImage : {show: true}
        }
        
    },
    calculable : true,
    series : [
        {
            name:'科室',
            type:'pie',
            radius : '55%',
            //控制饼图在布局中位置
            center: ['50%', '50%'],
             
             itemStyle : {
                 normal : {
                    label : {
                        position : 'inner',
                        formatter : function (params) {                         
                          return (params.percent - 0).toFixed(0) + '%'
                        }
                    },
                    
                    labelLine : {
                        show : false
                    }
                },
                
                //饼图上内容
                emphasis : {
                    label : {
                        show : true,
                        formatter : "{d}%"
                    }
                }
            },
            
            data:[
                {value:335, name:'儿科'},
                {value:310, name:'内科'},
                {value:234, name:'普外科'},
                {value:135, name:'妇产科'},
                {value:1548, name:'口腔科'}
            ]
        }
    ]
};
    
                // 为echarts对象加载数据 
                myChart1.setOption(option1); 
                
                  
           //myChart2,option2,main2
                
//              var myChart2 = ec.init(document.getElementById('main2')); 
                
                var option2 = {
                   //tooltip,显示提示
                   tooltip: {
                        show: true
                    },
                    title:{
                    	text:"儿科医生挂号数量统计",
                    	x:'center'
                    },
                    color:['#FF8C00'],
                    legend: {
                        data:['人次'],
                        x:"left",
                       
                    },
                    toolbox: {
        show : true,
        feature : {
           
            saveAsImage : {show: true}
        }
    },
                    xAxis : [
                        {
                            type : 'category',
                            data : ["王医生","李医生","苗医生","高医生","夏医生","张医生","李医生","马医生","袁医生"]
                        }
                    ],
                    yAxis : [
                        {
                            type : 'value'
                        }
                    ],
                    
                    
                    series : [
                        {
                            "name":"数量",
                            "type":"bar",
                            "data":[65, 32, 55, 63, 44, 53,38,63,56]
                        }
                    ]
                };
                
                
                
                //myChart3
                  // 基于准备好的dom，初始化echarts图表
                
                
                var option3 = {
                   //tooltip,显示提示
                   tooltip: {
                        show: true
                    },
                    title:{
                    	text:"内科医生挂号统计",
                    	x:'center'
                    },
                    color:['#87CEFA'],
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
                    xAxis : [
                        {
                            type : 'category',
                            data : ["王医生","李医生","苗医生","高医生","夏医生","张医生","李医生","马医生","袁医生"]
                        }
                    ],
                    yAxis : [
                        {
                            type : 'value'
                        }
                    ],
                    
                    
                    series : [
                        {
                            "name":"数量",
                            "type":"bar",
                            "data":[65, 32, 55, 63, 44, 53,38,63,56]
                        }
                    ]
                };
                
                //option4
                var option4 = {
                   //tooltip,显示提示
                   tooltip: {
                        show: true
                    },
                    title:{
                    	text:"普外科医生挂号统计",
                    	x:'center'
                    },
                    color:['#DA70D6'],
                    legend: {
                        data:['人次'],
                        x:"left",
                    },
                    toolbox: {
        show : true,
        feature : {
           
            saveAsImage : {show: true}
        }
    },
                    xAxis : [
                        {
                            type : 'category',
                            data : ["王医生","李医生","苗医生","高医生","夏医生","张医生","李医生","马医生","袁医生"]
                        }
                    ],
                    yAxis : [
                        {
                            type : 'value'
                        }
                    ],
                    
                    
                    series : [
                        {
                            "name":"数量",
                            "type":"bar",
                            "data":[65, 32, 55, 63, 44, 53,38,63,56]
                        }
                    ]
                };
                
                
                //option5
                var option5= {
                   //tooltip,显示提示
                   tooltip: {
                        show: true
                    },
                    title:{
                    	text:"妇产科医生挂号统计",
                    	x:'center'
                    },
                    color:['#32CD32'],
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
                    xAxis : [
                        {
                            type : 'category',
                            data : ["王医生","李医生","苗医生","高医生","夏医生","张医生","李医生","马医生","袁医生"]
                        }
                    ],
                    yAxis : [
                        {
                            type : 'value'
                        }
                    ],
                    
                    
                    series : [
                        {
                            "name":"数量",
                            "type":"bar",
                            "data":[65, 32, 55, 63, 44, 53,38,63,56]
                        }
                    ]
                };
                
                //option6
                var option6 = {
                   //tooltip,显示提示
                   tooltip: {
                        show: true
                    },
                    title:{
                    	text:"口腔科医生挂号统计",
                    	x:'center'
                    },
                     color:['#6495ED'],
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
                    xAxis : [
                        {
                            type : 'category',
                            data : ["王医生","高医生","夏医生","张医生","李医生","马医生","袁医生"]
                        }
                    ],
                    yAxis : [
                        {
                            type : 'value'
                        }
                    ],
                    
                    
                    series : [
                        {
                            "name":"数量",
                            "type":"bar",
                            "data":[65, 32, 55, 63, 44, 53,38]
                        }
                    ]
                };
        
                
               var ecConfig = require("echarts/config");
                myChart1.on(ecConfig.EVENT.CLICK,eConsole);
       function eConsole(param){
                	
                	//点击时间显示的内容
        if (typeof param.seriesIndex == 'undefined') {    
            return;    
        }   
        if (param.type == 'click') {  
         if (param.name == "儿科") {
         	var myChart2 = ec.init(document.getElementById('main2')); 
        	myChart2.setOption(option2);
          }
         if (param.name == "内科") {
            var myChart2 = ec.init(document.getElementById('main2')); 
        	myChart2.setOption(option3); 
        	
          }
         if (param.name == "普外科") {
         	var myChart2 = ec.init(document.getElementById('main2')); 
        	myChart2.setOption(option4); 
          }
         if (param.name == "妇产科") {
         	var myChart2 = ec.init(document.getElementById('main2')); 
        	myChart2.setOption(option5); 
          }
         if (param.name == "口腔科") {
         	var myChart2 = ec.init(document.getElementById('main2')); 
        	myChart2.setOption(option6); 
          }
        }
                }
         
        
                // 为echarts对象加载数据 
//              myChart2.setOption(option2); 
            }
        );