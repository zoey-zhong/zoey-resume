window.onload=function(){

var h=$(window).height();
$(".head").css("height",h)
$(window).resize(function(){
	var h=$(window).height();
	$(".head").css("height",h)
})



$(".more").click(function(){
	var t=$(".aboutme").offset().top;
	$("body").animate({scrollTop:t},500);
	
})

//
var myChart=echarts.init(document.querySelector('.chart'));
var geoCoordMap = {
//      '长春': [125.8154, 44.2584],
//      '长沙': [113.0823, 28.2568],
//      '贵阳': [106.6992, 26.7682],
//      '西安': [109.1162, 34.2004],
//      '深圳': [114.5435, 22.5439],
//      '济南': [117.1582, 36.8701],
//      '海口': [110.3893, 19.8516],
//      '沈阳': [123.1238, 42.1216],
//      '武汉': [114.3896, 30.6628],
        '昆明': [102.9199, 25.4663],
        '杭州': [119.5313, 29.8773],
        '成都': [103.9526, 30.7617],
        '拉萨': [91.1865, 30.1465],
        '天津': [117.4219, 39.4189],
        '合肥': [117.29, 32.0581],
        '呼和浩特': [111.4124, 40.4901],
        '哈尔滨': [127.9688, 45.368],
        '北京': [116.4551, 40.2539],
        '南京': [118.8062, 31.9208],
        '南宁': [108.479, 23.1152],
        '南昌': [116.0046, 28.6633],
        '乌鲁木齐': [87.9236, 43.5883],
        '上海': [121.4648, 31.2891]
    };

    var data = [{
//      name: '长春',
//      value: 90
//  }, {
//      name: '长沙',
//      value: 10
//  }, {
//      name: '贵阳',
//      value: 20
//  }, {
//      name: '西安',
//      value: 20
//  }, {
//      name: '深圳',
//      value: 20
//  }, {
//      name: '济南',
//      value: 50
//  }, {
//      name: '海口',
//      value: 58
//  }, {
//      name: '沈阳',
//      value: 64
//  }, {
//      name: '武汉',
//      value: 68
//  }, {
        name: '昆明',
        value: 45
    }, {
        name: '杭州',
        value: 68
    }, {
        name: '成都',
        value: 49
    }, {
        name: '拉萨',
        value: 66
    }, {
        name: '天津',
        value: 86
    }, {
        name: '合肥',
        value: 58
    }, {
        name: '呼和浩特',
        value: 59
    }, {
        name: '哈尔滨',
        value: 95
    }, {
        name: '北京',
        value: 68
    }, {
        name: '南京',
        value: 56
    }, {
        name: '南宁',
        value: 89
    }, {
        name: '南昌',
        value: 48
    }, {
        name: '乌鲁木齐',
        value: 49
    }, {
        name: '上海',
        value: 78
    }];

    function formtGCData(geoData, data, srcNam, dest) {
        var tGeoDt = [];
        if (dest) {
            for (var i = 0, len = data.length; i < len; i++) {
                if (srcNam != data[i].name) {
                    tGeoDt.push({
                        coords: [geoData[srcNam], geoData[data[i].name]]
                    });
                }
            }
        } else {
            for (var i = 0, len = data.length; i < len; i++) {
                if (srcNam != data[i].name) {
                    tGeoDt.push({
                        coords: [geoData[data[i].name], geoData[srcNam]]
                    });
                }
            }
        }
        return tGeoDt;
    }

    function formtVData(geoData, data, srcNam) {
        var tGeoDt = [];
        for (var i = 0, len = data.length; i < len; i++) {
            var tNam = data[i].name
            if (srcNam != tNam) {
                tGeoDt.push({
                    name: tNam,
                    value: geoData[tNam]
                });
            }

        }
        tGeoDt.push({
            name: srcNam,
            value: geoData[srcNam],
            symbolSize: 8,
            itemStyle: {
                normal: {
                    color: 'red',
                    borderColor: '#000'
                }
            }
        });
        return tGeoDt;
    }

    //var planePath = 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z';
    var planePath = 'arrow';

option = {
    backgroundColor: 'lightgray',
    title: {
        text: '',
        left: '35%',
        top: '10px',
        textStyle: {
			color: "white",
			fontSize: 16,
			fontWeight: 100
		},
        itemStyle: {
            normal: {
                borderColor: 'rgba(100,149,237,1)',
                borderWidth: 0.5,

                areaStyle: {
                    color: 'white'
                }
            }
        }
    },
    tooltip: {
        trigger: 'item',
    },
    geo: {
        map: 'china',
        label: {
            emphasis: {
                show: true
            }
        },
        roam: true,
        silent: true,
        itemStyle: {
            normal: {
                areaColor: '#37376e',
                borderColor: '#000'
            },
            emphasis: {
                areaColor: '#2a333d'
            }
        }
    },
    series: [{

            type: 'lines',
            zlevel: 2,
            effect: {
                show: true,
                period: 6,
                trailLength: 0.1,
                color: '#db9982',
                symbol: planePath,
                symbolSize: 8
            },
            lineStyle: {
                normal: {
                    color: '#a6c84c',
                    width: 1,
                    opacity: 0.4,
                    curveness: 0.2
                }
            },
            data: formtGCData(geoCoordMap, data, '上海', true)
        },
            {

                type: 'lines',
                zlevel: 2,
                effect: {
                    show: true,
                    period: 6,
                    trailLength: 0.1,
                    color: 'maroon',
                    symbol: planePath,
                    symbolSize: 8
                },
                lineStyle: {
                    normal: {
                        color: '#a6c84c',
                        width: 1,
                        opacity: 0.4,
                        curveness: 0.2
                    }
                },
                data: formtGCData(geoCoordMap, data, '上海', false)
            },
            {

                type: 'effectScatter',
                coordinateSystem: 'geo',
                zlevel: 2,
                rippleEffect: {
                    period: 4,
                    scale: 2.5,
                    brushType: 'fill'
                },
                label: {
                    normal: {
                        show: true,
                        position: 'right',
                        formatter: '{b}'
                    }
                },
                symbolSize: 5,
                itemStyle: {
                    normal: {
                        color: '#0D6695',
                        borderColor: 'white'
                    }
                },

                data: formtVData(geoCoordMap, data, '上海')
            }]
};

myChart.setOption(option)

//movie
	var movie=echarts.init(document.querySelector('.movie'));
	movie.showLoading();
	var d;
	var setData = (function() {
	    var option = {
	        title: {
	            text: '最近上映电影',
	            top:'3.5%',
	            left: '50%',
	            textAlign: 'center',
				textStyle: {
			color: "#ED334A",
			fontSize: 24,
		}
	        },
	        grid: {
	            left: 0,
	            right: 20,
	            bottom: 100,
	            top: 80
	        },
	        tooltip: {
	            formatter: function(params) {
	                if (params.componentSubType == 'pictorialBar') {
	                    return '电影：' + params.name + '</br> 豆瓣评分：' + (params.value * 1 + 10).toFixed(1);
	                }
	            }
	        },
	        xAxis: {
	            data: []
	        },
	        yAxis: {
	            splitLine: {
	                show: false
	            },
	            axisLine: {
	                show: false
	            }
	        },
	        series: [{
	            type: 'bar',
	            barWidth: 1,
	            data: [],
	            animationDelay: function(idx) {
	                return idx * 100;
	            }
	        }, {
	            type: 'pictorialBar',
	            symbolPosition: 'end',
	            symbolRotate: 165,
	            symbolOffset: ['20%', '100%'],
	            data: [],
	            animationDelay: function(idx) {
	                return idx * 100 + 500;
	            }
	        }, {
	            type: 'graph',
	            data: [{
	                x: 0,
	                y: 0,
	                symbolSize: 0
	            }, {
	                name: 'btn',
	                x: 0,
	                y: 1,
	                symbolSize: 35
	            }],
	            itemStyle: {
	                normal: {
	                    color: 'transparent',
	                    borderWidth: 1,
	                    borderColor: '#ED334A',
	                }
	            }
	        }]
	    };
	    var mark = 1;
	    return function() {
	        var pics = [];
	        for (var i = 0; i < d.subjects.length; i++) {
	            pics.push({
	                value: ((d.subjects[i].rating.average || 0.1) - 10).toFixed(1),
	                symbol: 'image://' + d.subjects[i].images.small,
	                symbolSize: ['68.75', '88'],
	                name: d.subjects[i].title
	            })
	        }
	        if (mark % 2 == 0) {
	            pics.sort(function(a, b) {
	                return (mark / 2 | 0) % 2 == 0 ? (b.value - a.value) : (a.value - b.value)
	            })
	        }
	        option.series[0].data = pics;
	        option.series[1].data = pics;
	        movie.hideLoading();
	        movie.setOption(option);
	        mark++;
	    }
	})();
	$.ajax({
	    type: "GET",
	    url: "http://api.douban.com/v2/movie/in_theaters",
	    dataType: "jsonp",
	    success: function(data) {
	        d = data;
	        setData();
	    }
	});
	movie.on('click', function(params) {
	    if (params.name == 'btn') {
	        setData();
	    }
	})


}