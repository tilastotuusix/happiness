var _0x443018 = function () {
    var _0x21e57e = true;
    return function (_0x175fa7, _0x58a74f) {
        var _0x44b5e3 = _0x21e57e ? function () {
            if (_0x58a74f) {
                var _0x39ac7a = _0x58a74f.apply(_0x175fa7, arguments);
                _0x58a74f = null;
                return _0x39ac7a;
            }
        } : function () {};
        _0x21e57e = false;
        return _0x44b5e3;
    };
}();
var _0x56eba7 = _0x443018(this, function () {
    var _0x15501c = function () {
            return 'dev';
        },
        _0x350f7b = function () {
            return 'window';
        };
    var _0xc352fd = function () {
        var _0x18e27a = new RegExp('\\w+ *\\(\\) *{\\w+ *[\'|\"].+[\'|\"];? *}');
        return !_0x18e27a['test'](_0x15501c['toString']());
    };
    var _0xce6429 = function () {
        var _0x201f5c = new RegExp('(\\\\[x|u](\\w){2,4})+');
        return _0x201f5c['test'](_0x350f7b['toString']());
    };
    var _0x1e9d06 = function (_0x284d45) {
        var _0x2cb076 = ~-0x1 >> 0x1 + 0xff % 0x0;
        if (_0x284d45['indexOf']('i' === _0x2cb076)) {
            /*_0x1ee2bb(_0x284d45);*/
        }
    };
    var _0x1ee2bb = function (_0x38fc24) {
        var _0x2718da = ~-0x4 >> 0x1 + 0xff % 0x0;
        if (_0x38fc24['indexOf']((!![] + '')[0x3]) !== _0x2718da) {
            _0x1e9d06(_0x38fc24);
        }
    };
    if (!_0xc352fd()) {
        if (!_0xce6429()) {
            _0x1e9d06('indеxOf');
        } else {
            _0x1e9d06('indexOf');
        }
    } else {
        _0x1e9d06('indеxOf');
    }
});
_0x56eba7();
'use strict';
$(document).ready(function () {
    let _0x1f1494 = _0x1f4569,
        _0x999110 = $('#main_body'),
        _0x11f416 = $('#earth_body'),
        _0xa80439 = 'Life Ladder',
        _0x5a812a = 'Life Ladder',
        _0xbc4c66 = '2018',
        _0x180a91 = 'Finland',
        _0x115e6a = '',
        _0x13bd2d = 0x7e2,
        _0x50a718 = 'Principal Component Analysis',
        _0x212f3c = 'Finland',
        _0x3ab656 = 'Life Ladder',
        _0x4e31d3 = false,
        _0x1a7da9 = true,
        _0x519af1 = true,
        _0x3e9af4 = d3.timer(function () {}),
        _0x4103dc;
    d3.json('data/world-countries.json').then(function (_0x550cb3) {
        d3.json('data/earthview.json').then(function (_0x2495b1) {
            d3.json('data/pie2018.json').then(function (_0x325fff) {
                d3.json('data/topten.json').then(function (_0x22f597) {
                    d3.csv('data/pca.csv').then(function (_0x46d840) {
                        d3.json('data/id.json').then(function (_0x166373) {
                            _0x31f06a(_0x550cb3, _0x2495b1, _0x325fff, _0x22f597, _0x46d840, _0x166373);
                        });
                    });
                });
            });
        });
    });

    function _0x1f4569(_0x1031c3, _0x5b976e, _0x390d82, _0x232173) {
        $('.clear').empty();
        let _0x50ecf2 = $('#playpause'),
            _0x222de2 = $('#rotate');
        _0x50ecf2.off();
        _0x222de2.off();
        let _0x211670 = $('#earth_container'),
            _0xd313f4 = _0x211670.width(),
            _0x55b14a = _0x211670.height();
        let _0x59d686 = [];
        for (let _0x2a86f9 = 0x7d5; _0x2a86f9 <= 0x7e2; _0x2a86f9++) _0x59d686.push({
            'key': _0x2a86f9
        });
        let _0x1863bd = Math.min(_0xd313f4, _0x55b14a) / 0x3;
        let _0x457b97 = d3.geoAzimuthalEquidistant().translate([_0xd313f4 / 0x2, _0x55b14a / 0x2]);
        _0x457b97.scale(_0x1863bd * 0x3);
        let _0x484cae = d3.geoPath().projection(_0x457b97).pointRadius(0x1);
        let _0x5b33d8 = d3.geoOrthographic().scale(_0x1863bd).translate([_0xd313f4 / 0x2, _0x55b14a / 0x2]);
        let _0x2d714f = d3.geoPath().projection(_0x5b33d8);
        let _0x486967 = d3.select('#earth_container');
        let _0x3940c6 = _0x3add90(0x320);
        let _0xc31241 = _0x486967.append('g');
        let _0xd8a420 = _0xc31241.append('g').selectAll('g').data(_0x3940c6).enter().append('path').attr('class', 'star').attr('d', function (_0x48ac69) {
            _0x484cae.pointRadius(_0x48ac69.properties.radius);
            return _0x484cae(_0x48ac69);
        });
        let _0x30715b = _0xc31241.append('circle').attr('cx', _0xd313f4 / 0x2).attr('cy', _0x55b14a / 0x2).attr('r', _0x5b33d8.scale()).attr('filter', 'url(#glow)').attr('fill', '#111');
        let _0x3433a5 = _0xc31241.append('circle').attr('cx', _0xd313f4 / 0x2).attr('cy', _0x55b14a / 0x2).attr('r', _0x5b33d8.scale()).attr('class', 'globe').attr('fill', '#111');
        let _0x2e365b = d3.drag().on('start', _0x49da07).on('drag', _0x1eea84);
        _0x486967.call(_0x2e365b);
        let _0x247a5f = d3.zoom().scaleExtent([0.75, 0x32]).on('zoom', _0xd51832);
        _0x486967.call(_0x247a5f);
        let _0x268b39 = _0xc31241.selectAll('.feature').data(_0x1031c3.features),
            _0x3c636 = _0x1031c3.features;
        let _0x40c399 = d3.select('body').append('div').attr('class', 'tooltip').style('display', 'none');

        function _0x52e1a0() {
            _0x40c399.style('display', 'inline');
        }

        function _0x5e1eaf(_0x3ab759) {
            return function (_0xecaab8) {
                let _0x39189e;
                if (_0x3ab759[_0xecaab8.properties.name]) _0x39189e = parseFloat(_0x3ab759[_0xecaab8.properties.name]).toFixed(0x2);
                else _0x39189e = '';
                _0x40c399.text(_0xecaab8.properties.name + ' ' + _0x39189e).style('left', d3.event.pageX + 'px').style('top', d3.event.pageY - 0x10 + 'px');
            };
        }

        function _0x38a652() {
            _0x40c399.style('display', 'none');
        }
        _0x268b39.enter().append('path').attr('class', 'feature').attr('d', _0x2d714f).on('click', function (_0x180c83) {
            $('#search_input').val(_0x180c83.properties.name);
        }).on('click', function (_0x1c4e5d) {
            if (_0xbc4c66 === 0x7e2) {
                _0x180a91 = _0x1c4e5d.properties.name;
                _0x40c399.style('display', 'none');
                $('#charts').click();
            }
        }).on('mouseover', _0x52e1a0).on('mouseout', _0x38a652);

        function _0xade932() {
            let _0x3b23a9 = Number.MAX_VALUE,
                _0x25cfa1 = Number.MIN_VALUE;
            let _0x291972 = {};
            for (let _0x4d10dc in _0x5b976e[_0xbc4c66]) {
                let _0x32dca8 = parseFloat(_0x5b976e[_0xbc4c66][_0x4d10dc][_0xa80439]);
                if (_0x32dca8 && _0x32dca8 < _0x3b23a9) _0x3b23a9 = _0x32dca8;
                if (_0x32dca8 && _0x32dca8 > _0x25cfa1) _0x25cfa1 = _0x32dca8;
                _0x291972[_0x4d10dc] = _0x5b976e[_0xbc4c66][_0x4d10dc][_0xa80439];
            }
            let _0x4a58ca = $('#legend_name');
            if (_0x4a58ca.text() !== _0xa80439) _0x4a58ca.fadeOut(0x12c, function () {
                _0x4a58ca.text(_0xa80439);
                _0x4a58ca.fadeIn(0x12c);
            });
            $('#legend_start').text(Math.floor(_0x3b23a9));
            $('#legend_end').text(Math.ceil(_0x25cfa1));
            const _0x22f364 = d3.scaleSequential(d3.interpolateCool).domain([Math.ceil(_0x25cfa1), Math.floor(_0x3b23a9)]);
            _0x268b39.enter().selectAll('.feature').on('mousemove', _0x5e1eaf(_0x291972)).transition().attr('fill', function (_0x2475bd, _0x1b70fb) {
                let _0x630aea = _0x5b976e[_0xbc4c66][_0x2475bd.properties.name];
                if (_0x630aea && _0x630aea[_0xa80439]) return _0x22f364(_0x630aea[_0xa80439]);
                else return '#888';
            }).duration(0x1f4);
        }
        _0x4103dc = rangeslide('#year_slider_container', {
            'data': _0x59d686,
            'autoPlay': !_0x1a7da9,
            'labelsPosition': 'alternate',
            'startAlternateLabelsFromTop': true,
            'tickHeight': 0xa,
            'startPosition': _0xbc4c66 - 0x7d5,
            'dataSource': 'key',
            'labelsContent': 'key',
            'showLabels': true,
            'showTicks': true,
            'thumbWidth': 0x8,
            'thumbHeight': 0x14,
            'trackHeight': 0x6,
            'labelsWidth': 0x14,
            'handlers': {
                'valueChanged': [function (_0xdfb0eb) {
                    _0xbc4c66 = _0xdfb0eb.key;
                    $('#year_output').html(_0xdfb0eb.key);
                    _0xade932();
                }]
            }
        });
        $('.slider').on('transitionstart', function () {
            event.stopPropagation();
        });
        $('input[name=earth_radio]').on('change', function () {
            _0xa80439 = this.value;
            _0xade932();
        });
        _0x50ecf2.on('click', function () {
            if (_0x1a7da9) {
                _0x4103dc.__setAutoPlay(true);
                _0x50ecf2.attr('src', 'images/pause.png');
            } else {
                _0x4103dc.__setAutoPlay(false);
                _0x50ecf2.attr('src', 'images/play.png');
            }
            _0x1a7da9 = !_0x1a7da9;
        });
        if (_0x519af1) {
            _0x3e9af4.restart(_0x21002b);
            _0x222de2.css('animation', 'rotation 2s infinite linear');
        }
        _0x222de2.on('click', function () {
            if (_0x519af1) {
                _0x3e9af4.stop();
                $(this).css('animation', 'none');
                _0x519af1 = false;
            } else {
                _0x3e9af4.restart(_0x21002b);
                $(this).css('animation', 'rotation 2s infinite linear');
                _0x519af1 = true;
            }
        });

        function _0x21002b(_0x2cdd23) {
            _0x5b33d8.rotate([0.01 * _0x2cdd23 - 0x78, -0x1e, 0x0]);
            d3.selectAll('.feature').attr('d', _0x2d714f);
        }
        autocomplete(document.getElementById('search_input'), _0x3c636.map(function (_0x1d6581) {
            return _0x1d6581.properties.name;
        }));
        let _0x519099, _0x599cf5, _0x4fcb16, _0x1519f7;
        let _0x34b937, _0x1c919f, _0x578f1d, _0x32cfb6;

        function _0x49da07() {
            _0x519099 = _0x5b33d8.invert(d3.mouse(this));
            _0x599cf5 = _0x5b33d8.rotate();
            _0x34b937 = _0x457b97.invert(d3.mouse(this));
            _0x1c919f = _0x457b97.rotate();
        }

        function _0x1eea84() {
            _0x4fcb16 = _0x5b33d8.invert(d3.mouse(this));
            _0x578f1d = _0x457b97.invert(d3.mouse(this));
            _0x599cf5 = _0x5b33d8.rotate();
            _0x1c919f = _0x457b97.rotate();
            _0x1519f7 = eulerAngles(_0x519099, _0x4fcb16, _0x599cf5);
            _0x32cfb6 = eulerAngles(_0x34b937, _0x578f1d, _0x1c919f);
            if (_0x1519f7) {
                _0x5b33d8.rotate(_0x1519f7);
                _0xc31241.selectAll('.feature').attr('d', _0x2d714f);
            }
            if (_0x32cfb6) {
                _0x457b97.rotate(_0x32cfb6);
                _0xc31241.selectAll('.star').attr('d', function (_0x203189) {
                    _0x484cae.pointRadius(_0x203189.properties.radius);
                    return _0x484cae(_0x203189);
                });
            }
        }

        function _0xd51832() {
            let _0x4e04cd = d3.event.transform.translate(_0x5b33d8).k * _0x1863bd;
            _0x5b33d8.scale(_0x4e04cd);
            _0xc31241.selectAll('.feature').attr('d', _0x2d714f);
            _0x457b97.scale(_0x4e04cd * 0x3);
            _0x30715b.attr('r', _0x4e04cd);
            _0x3433a5.attr('r', _0x4e04cd);
            _0xc31241.selectAll('.star').attr('d', function (_0x4ecbcc) {
                _0x484cae.pointRadius(_0x4ecbcc.properties.radius);
                return _0x484cae(_0x4ecbcc);
            });
        }

        function _0x3add90(_0x4a943f) {
            let _0x439107 = [];
            for (let _0x165824 = 0x0; _0x165824 < _0x4a943f; _0x165824++) {
                _0x439107.push({
                    'geometry': {
                        'type': 'Point',
                        'coordinates': _0x50578f()
                    },
                    'type': 'Feature',
                    'properties': {
                        'radius': Math.random()
                    }
                });
            }
            return _0x439107;
        }

        function _0x50578f() {
            return [Math.random() * 0x168 - 0xb4, Math.random() * 0xb4 - 0x5a];
        }
        document.getElementById('search_input').onchange = function () {
            let _0x519af1 = _0x5b33d8.rotate(),
                _0x2edf3d = $('#search_input')[0x0],
                _0x5b38ba = _0x124613(_0x3c636, _0x2edf3d);
            if (!_0x5b38ba) return true;
            let _0x2fd528 = d3.geoCentroid(_0x5b38ba);
            (function transition() {
                d3.transition().duration(0x9c4).tween('rotate', function () {
                    let _0x3cdc82 = d3.interpolate(_0x5b33d8.rotate(), [-_0x2fd528[0x0], -_0x2fd528[0x1]]);
                    return function (_0x270d9a) {
                        _0x5b33d8.rotate(_0x3cdc82(_0x270d9a));
                        _0xc31241.selectAll('.feature').attr('d', _0x2d714f);
                    };
                });
            }());
        };

        function _0x124613(_0x1e3731, _0x53b191) {
            for (let _0x36cbc4 = 0x0, _0x5dff17 = _0x1e3731.length; _0x36cbc4 < _0x5dff17; _0x36cbc4++) {
                if (_0x1e3731[_0x36cbc4].properties.name === _0x53b191.value) {
                    return _0x1e3731[_0x36cbc4];
                }
            }
        }
    }

    function _0x201ca4(_0x4fe590, _0x5c8e6d, _0x18a6fc, _0x4013df) {
        $('.clear').empty();
        $('.pie-tooltip').remove();

        function _0x59ddfc(_0x223a85, _0x4065d1, _0x342e54, _0x40e093) {
            let _0x26c01b = $('#' + _0x223a85),
                _0x476583 = _0x26c01b.height(),
                _0x120e54 = _0x26c01b.width(),
                _0x1a5919 = 0x14,
                _0x20028a = [],
                _0x18e56e = [];
            _0x120e54 = _0x120e54 - 0x2 * _0x1a5919;
            _0x476583 = _0x476583 - 0x2 * _0x1a5919;
            for (let _0x1d69c7 = 0x7d5; _0x1d69c7 <= 0x7e2; _0x1d69c7++) {
                let _0x9ae12c = _0x5c8e6d[_0x1d69c7][_0x180a91],
                    _0x5ccf02 = {
                        'x': _0x1d69c7
                    };
                if (_0x9ae12c) {
                    if (_0x9ae12c[_0x4065d1]) _0x5ccf02.y = parseFloat(_0x9ae12c[_0x4065d1]);
                    else continue;
                } else continue;
                _0x20028a.push(_0x5ccf02);
                if (_0x115e6a) {
                    let _0x25c20c = _0x5c8e6d[_0x1d69c7][_0x115e6a],
                        _0x532532 = {
                            'x': _0x1d69c7
                        };
                    if (_0x25c20c) {
                        if (_0x25c20c[_0x4065d1]) _0x532532.y = parseFloat(_0x25c20c[_0x4065d1]);
                        else continue;
                    } else continue;
                    _0x18e56e.push(_0x532532);
                }
            }
            let _0x415aa1 = d3.select('#' + _0x223a85).append('svg').attr('height', _0x476583 * 0x64 / _0x26c01b.height() + '%').attr('width', _0x120e54 * 0x64 / _0x26c01b.width() + '%').attr('style', 'display:block').attr('class', 'svg_shadow').attr('transform', 'translate(' + _0x1a5919 + ',' + _0x1a5919 + ')');
            const _0x47fd96 = _0x415aa1.append('g').attr('transform', 'translate(20,40)');
            let _0xb7c18d = d3.scaleLinear().domain([_0x342e54[0x0], _0x342e54[0x1]]).range([_0x476583 - 0x4b, 0x0]);
            let _0x56c091 = d3.timeParse('%Y');
            let _0x59b2e0 = d3.scaleTime().domain([_0x56c091(d3.min(_0x20028a, _0x3b5631 => _0x3b5631.x)), _0x56c091(d3.max(_0x20028a, _0x558cfd => _0x558cfd.x))]).range([0x0, _0x120e54 - 0x1e]).nice();
            _0x47fd96.append('g').attr('transform', 'translate(' + 0x0 + ',' + 0x0 + ')').attr('class', 'yaxis').call(d3.axisLeft(_0xb7c18d)).selectAll('text').attr('class', 'axis-label');

            function _0x41de3a() {
                return d3.axisLeft(_0xb7c18d).ticks(0xa);
            }
            _0x47fd96.append('g').attr('class', 'grid').call(_0x41de3a().tickSize(-_0x120e54).tickFormat(''));
            _0x47fd96.append('g').attr('transform', 'translate(' + 0x0 + ',' + (_0x476583 - 0x4b) + ')').attr('class', 'xaxis').call(d3.axisBottom(_0x59b2e0)).selectAll('text').attr('class', 'axis-label').style('text-anchor', 'end').attr('dx', '-5px').attr('dy', '0px').attr('transform', () => {
                return 'rotate(-90)';
            });
            let _0x2a3aea, _0x470d21;
            let _0x5d6626 = d3.line().x(_0x5cd1aa => _0x59b2e0(_0x56c091(_0x5cd1aa.x))).y(_0x131c77 => _0xb7c18d(_0x131c77.y)).defined(_0x3b1220 => _0x3b1220.y).curve(d3.curveMonotoneX);
            let _0x4151f5 = _0x47fd96.append('path').datum(_0x20028a).attr('fill', 'none').attr('stroke', 'url(#bluegrad)').attr('stroke-width', '3').attr('d', _0x5d6626);
            let _0x587dff = _0x4151f5.node().getTotalLength();
            _0x4151f5.attr('stroke-dasharray', _0x587dff + ' ' + _0x587dff).attr('stroke-dashoffset', _0x587dff).transition().duration(0x3e8).attr('stroke-dashoffset', 0x0);
            if (_0x115e6a) {
                let _0x1fc94f = _0x47fd96.append('path').datum(_0x18e56e).attr('fill', 'none').attr('class', 'line2').attr('stroke', 'url(#ygrad)').attr('stroke-width', '3').attr('d', _0x5d6626);
                _0x587dff = _0x1fc94f.node().getTotalLength();
                _0x1fc94f.attr('stroke-dasharray', _0x587dff + ' ' + _0x587dff).attr('stroke-dashoffset', _0x587dff).transition().duration(0x3e8).attr('stroke-dashoffset', 0x0);
                _0x470d21 = _0x47fd96.selectAll('.dot').data(_0x18e56e).enter().append('circle').attr('stroke-width', '0').attr('fill', 'rgba(0,0,0,0)').attr('stroke', 'none').attr('cursor', 'pointer').attr('cx', function (_0x4abaac, _0x1d69c7) {
                    return _0x59b2e0(_0x56c091(_0x4abaac.x));
                }).attr('cy', function (_0x2ce61a) {
                    return _0xb7c18d(_0x2ce61a.y);
                }).attr('r', '10');
            }
            _0x2a3aea = _0x47fd96.selectAll('.dot').data(_0x20028a).enter().append('circle').attr('stroke-width', '0').attr('fill', 'rgba(0,0,0,0)').attr('stroke', 'none').attr('cursor', 'pointer').attr('cx', function (_0x4de863, _0x365c89) {
                return _0x59b2e0(_0x56c091(_0x4de863.x));
            }).attr('cy', function (_0x4a6cd5) {
                return _0xb7c18d(_0x4a6cd5.y);
            }).attr('r', '10');
            _0x2a3aea.on('mouseenter', function (_0x346739, _0x2fc2d0) {
                _0x47fd96.append('text').attr('class', 'chart-tooltip').attr('x', _0x59b2e0(_0x56c091(_0x346739.x))).attr('y', _0xb7c18d(_0x346739.y) - 0x10).attr('style', 'font-size:12px;').attr('text-anchor', 'middle').text(_0x346739.y.toFixed(0x2) + ' (' + _0x346739.x + ')');
            });
            _0x2a3aea.on('mouseleave', function (_0x11ac39, _0x369054) {
                d3.selectAll('.chart-tooltip').remove();
            });
            if (_0x115e6a) {
                _0x470d21.on('mouseenter', function (_0x38ccc4, _0x5b913b) {
                    _0x47fd96.append('text').attr('class', 'chart-tooltip').attr('x', _0x59b2e0(_0x56c091(_0x38ccc4.x))).attr('y', _0xb7c18d(_0x38ccc4.y) - 0x10).attr('style', 'font-size:12px').attr('text-anchor', 'middle').text(_0x38ccc4.y.toFixed(0x2) + ' (' + _0x38ccc4.x + ')');
                });
                _0x470d21.on('mouseleave', function (_0x597149, _0x591013) {
                    d3.selectAll('.chart-tooltip').remove();
                });
            }
            _0x415aa1.append('text').attr('x', 0xa).attr('y', 0xf).attr('text-anchor', 'left').text(_0x4065d1);
        }

        function _0x5ca97a(_0x194326, _0x251950, _0x24335d, _0x18b301) {
            let _0x387f55 = $('#' + _0x194326),
                _0x1dbeb8 = _0x387f55.height(),
                _0x35a614 = _0x387f55.width(),
                _0x3c20da = 0x0,
                _0x40f4d4 = [],
                _0x1b6a86 = [];
            _0x35a614 = _0x35a614 - 0x2 * _0x3c20da;
            _0x1dbeb8 = _0x1dbeb8 - 0x2 * _0x3c20da;
            for (let _0x22f34e = 0x7d5; _0x22f34e <= 0x7e2; _0x22f34e++) {
                let _0x1b9358 = _0x5c8e6d[_0x22f34e][_0x180a91],
                    _0x45f982 = {
                        'x': _0x22f34e
                    };
                if (_0x1b9358) {
                    if (_0x1b9358[_0x251950]) _0x45f982.y = parseFloat(_0x1b9358[_0x251950]);
                    else continue;
                } else continue;
                _0x40f4d4.push(_0x45f982);
                if (_0x115e6a) {
                    let _0x504516 = _0x5c8e6d[_0x22f34e][_0x115e6a],
                        _0xa41a17 = {
                            'x': _0x22f34e
                        };
                    if (_0x504516) {
                        if (_0x504516[_0x251950]) _0xa41a17.y = parseFloat(_0x504516[_0x251950]);
                        else continue;
                    } else continue;
                    _0x1b6a86.push(_0xa41a17);
                }
            }
            let _0x3a1fae = d3.select('#' + _0x194326).append('svg').attr('height', _0x1dbeb8 * 0x64 / _0x387f55.height() + '%').attr('width', _0x35a614 * 0x64 / _0x387f55.width() + '%').attr('style', 'background-color:##2f323a').attr('class', 'svg_shadow').attr('transform', 'translate(' + _0x3c20da + ',' + _0x3c20da + ')');
            const _0x5ee5ec = _0x3a1fae.append('g').attr('transform', 'translate(0,61)');
            let _0x14be33 = d3.scaleLinear().domain([_0x24335d[0x0], _0x24335d[0x1]]).range([_0x1dbeb8 - 0x3c, 0x0]);
            let _0x548d0d = d3.scaleLinear().domain([d3.min(_0x40f4d4, _0x440d92 => _0x440d92.x), d3.max(_0x40f4d4, _0x5127f7 => _0x5127f7.x)]).range([0x0, _0x35a614]);
            let _0x13f6b9, _0x5cd039;
            let _0x487b43 = d3.line().x(_0x388a96 => _0x548d0d(_0x388a96.x)).y(_0x55bb5e => _0x14be33(_0x55bb5e.y)).defined(_0x4d24be => _0x4d24be.y).curve(d3.curveMonotoneX);
            let _0x26118a = _0x5ee5ec.append('path').datum(_0x40f4d4).attr('fill', 'none').attr('stroke', 'url(#bluegrad)').attr('stroke-width', '3').attr('d', _0x487b43);
            let _0x861862 = _0x26118a.node().getTotalLength();
            _0x26118a.attr('stroke-dasharray', _0x861862 + ' ' + _0x861862).attr('stroke-dashoffset', _0x861862).transition().duration(0x3e8).attr('stroke-dashoffset', 0x0);
            if (_0x115e6a) {
                let _0xfd0f19 = _0x5ee5ec.append('path').datum(_0x1b6a86).attr('fill', 'none').attr('class', 'line2').attr('stroke', 'url(#ygrad)').attr('stroke-width', '3').attr('d', _0x487b43);
                _0x861862 = _0xfd0f19.node().getTotalLength();
                _0xfd0f19.attr('stroke-dasharray', _0x861862 + ' ' + _0x861862).attr('stroke-dashoffset', _0x861862).transition().duration(0x3e8).attr('stroke-dashoffset', 0x0);
                _0x5cd039 = _0x5ee5ec.selectAll('.dot').data(_0x1b6a86).enter().append('circle').attr('stroke-width', '0').attr('fill', 'rgba(0,0,0,0)').attr('stroke', 'none').attr('cursor', 'pointer').attr('cx', function (_0x271a49, _0x22f34e) {
                    return _0x548d0d(_0x271a49.x);
                }).attr('cy', function (_0x487843) {
                    return _0x14be33(_0x487843.y);
                }).attr('r', '10');
            }
            _0x13f6b9 = _0x5ee5ec.selectAll('.dot').data(_0x40f4d4).enter().append('circle').attr('stroke-width', '0').attr('fill', 'rgba(0,0,0,0)').attr('stroke', 'none').attr('cursor', 'pointer').attr('cx', function (_0x18563f, _0x210407) {
                return _0x548d0d(_0x18563f.x);
            }).attr('cy', function (_0x5b2c77) {
                return _0x14be33(_0x5b2c77.y);
            }).attr('r', '10');
            _0x13f6b9.on('mouseenter', function (_0x4c45da, _0x229243) {
                _0x5ee5ec.append('text').attr('class', 'tooltip').attr('x', _0x548d0d(_0x4c45da.x)).attr('y', _0x14be33(_0x4c45da.y) - 0x10).attr('style', 'font-size:12px').attr('text-anchor', 'middle').text(_0x4c45da.y.toFixed(0x2) + ' (' + _0x4c45da.x + ')');
            });
            _0x13f6b9.on('mouseleave', function (_0x41245a, _0x136e46) {
                d3.selectAll('.tooltip').remove();
            });
            if (_0x115e6a) {
                _0x5cd039.on('mouseenter', function (_0x301aca, _0x5695ac) {
                    _0x5ee5ec.append('text').attr('class', 'tooltip').attr('x', _0x548d0d(_0x301aca.x)).attr('y', _0x14be33(_0x301aca.y) - 0x10).attr('style', 'font-size:12px').attr('text-anchor', 'middle').text(_0x301aca.y.toFixed(0x2) + ' (' + _0x301aca.x + ')');
                });
                _0x5cd039.on('mouseleave', function (_0x318a9b, _0x2f779c) {
                    d3.selectAll('.tooltip').remove();
                });
            }
            _0x3a1fae.append('text').attr('x', 0xf).attr('y', 0x1e).attr('text-anchor', 'left').text(_0x251950);
        }

        function _0x256521(_0x18a6fc) {
            let _0x471b82 = $('#happiness_rank'),
                _0x852d01 = _0x471b82.height(),
                _0x4ab405 = _0x471b82.width(),
                _0x237600 = 0x14;
            _0x4ab405 = _0x4ab405 - 0x2 * _0x237600;
            _0x852d01 = _0x852d01 - 0x2 * _0x237600;
            let _0x312926 = d3.select('#happiness_rank').append('svg').attr('height', _0x852d01 * 0x64 / _0x471b82.height() + '%').attr('width', _0x4ab405 * 0x64 / _0x471b82.width() + '%').attr('transform', 'translate(' + _0x237600 + ',' + _0x237600 + ')').attr('style', 'display:block');
            _0x312926.append('text').attr('x', _0x4ab405 / 0x2).attr('y', '16').attr('text-anchor', 'middle').attr('style', 'font-size:16px').text('2018 Happiness Rank');
            let _0x574a0d = _0x312926.append('text').attr('x', _0x4ab405 / 0x2).attr('y', '80').attr('text-anchor', 'middle').attr('style', 'font-size:56px;font-weight:normal');
            _0x574a0d.append('tspan').attr('fill', 'url(#bluegrad)').attr('stroke', 'url(#bluegrad)').text(_0x18a6fc[_0x180a91].Rank);
            if (_0x115e6a) {
                _0x574a0d.append('tspan').text(' - ');
                _0x574a0d.append('tspan').attr('fill', 'url(#ygrad)').attr('stroke', 'url(#ygrad)').text(_0x18a6fc[_0x115e6a].Rank);
            }
        }

        function _0x808230(_0x18a6fc) {
            let _0x48ee61 = $('#compare_container'),
                _0x2485c9 = _0x48ee61.height(),
                _0x572dc3 = _0x48ee61.width(),
                _0x38607d = 0x14,
                _0x39fef8 = [],
                _0x1e3b2b = [];
            _0x572dc3 = _0x572dc3 - 0x2 * _0x38607d;
            _0x2485c9 = _0x2485c9 - 0x2 * _0x38607d;
            Object.keys(_0x18a6fc[_0x180a91]).forEach(function (_0xc130e1) {
                if (_0xc130e1 !== 'Rank' && _0xc130e1 !== 'Life Ladder') _0x39fef8.push({
                    'x': _0xc130e1,
                    'y': _0x18a6fc[_0x180a91][_0xc130e1]
                });
            });
            let _0x12cd0e = _0x2485c9 / 2.5 > _0x572dc3 / 0x8 ? _0x572dc3 / 0x8 : _0x2485c9 / 2.5;
            d3.select('#compare_container').style('overflow', 'hidden');
            let _0x18af05 = d3.select('#compare_container').append('svg').attr('height', _0x2485c9 * 0x64 / _0x48ee61.height() + '%').attr('width', 0x4 * (_0x38607d + _0x12cd0e) * 0x64 / _0x48ee61.width() + '%').attr('transform', 'translate(' + (_0x38607d + 0.04 * _0x572dc3) + ',' + _0x38607d + ')').style('float', 'left').style('overflow', 'overlay');
            let _0x15b6ec = _0x18af05.append('g').attr('transform', 'translate(' + (_0x38607d + _0x12cd0e) + ',' + _0x2485c9 / 0x2 + ')');
            const _0x465551 = d3.arc().outerRadius(_0x12cd0e),
                _0x5d7bf9 = d3.pie().value(_0x1c3d17 => _0x1c3d17.y).sort(null);
            let _0x1f6f02 = d3.scaleLinear().domain([0x1, 0x6]).interpolate(d3.interpolateHcl).range([d3.rgb('#495aff'), d3.rgb('#0acffe')]);
            let _0x9e508f = d3.scaleLinear().domain([0x1, 0x6]).interpolate(d3.interpolateHcl).range([d3.rgb('#f83600'), d3.rgb('#f9d423')]);
            _0x15b6ec.append('text').attr('text-anchor', 'middle').style('font-size', '18px').style('font-weight', 'normal').attr('fill-opacity', 0x0).transition().delay(0x3e8).text(_0x18a6fc[_0x180a91]['Life Ladder'].toFixed(0x2)).attr('fill-opacity', 0x1);
            let _0x3ae415 = _0x15b6ec.selectAll('path').data(_0x5d7bf9(_0x39fef8)).enter().append('g');
            let _0x1ddeef = _0x3ae415.append('path').attr('fill', (_0x38656c, _0x3cc3ba) => _0x1f6f02(_0x3cc3ba + 0x1)).attr('opacity', 0x1).attr('stroke-width', 0x0).attr('cursor', 'pointer').transition().duration(0x1f4).attrTween('d', _0x3073e0).transition().duration(0x1f4).attrTween('d', _0x4c767c);

            function _0x3073e0(_0x330094) {
                _0x330094.innerRadius = 0x0;
                let _0xe5e09b = d3.interpolate({
                    'startAngle': 0x0,
                    'endAngle': 0x0
                }, _0x330094);
                return function (_0x2258c9) {
                    return _0x465551(_0xe5e09b(_0x2258c9));
                };
            }

            function _0x4c767c(_0x435ef1) {
                _0x435ef1.innerRadius = _0x12cd0e / 0x2;
                let _0x5aa25d = d3.interpolate({
                    'innerRadius': 0x0
                }, _0x435ef1);
                return function (_0x41d042) {
                    return _0x465551(_0x5aa25d(_0x41d042));
                };
            }
            let _0x1e0b45 = d3.select('body').append('div').attr('class', 'pie-tooltip').style('display', 'none');

            function _0x39a633() {
                _0x1e0b45.style('display', 'inline');
            }

            function _0x338825(_0x440a94) {
                _0x1e0b45.text(_0x440a94.data.x + ': ' + _0x440a94.value.toFixed(0x2)).style('left', d3.event.pageX + 'px').style('top', d3.event.pageY - 0x10 + 'px');
            }

            function _0x51eadb() {
                _0x1e0b45.style('display', 'none');
            }
            _0x3ae415.on('mouseover', _0x39a633);
            _0x3ae415.on('mousemove', _0x338825);
            _0x3ae415.on('mouseout', _0x51eadb);
            if (_0x115e6a) {
                Object.keys(_0x18a6fc[_0x115e6a]).forEach(function (_0x38ea06) {
                    if (_0x38ea06 !== 'Rank' && _0x38ea06 !== 'Life Ladder') _0x1e3b2b.push({
                        'x': _0x38ea06,
                        'y': _0x18a6fc[_0x115e6a][_0x38ea06]
                    });
                });
                let _0x11f35e = _0x18af05.append('g').attr('transform', 'translate(' + 0x3 * (_0x38607d + _0x12cd0e) + ',' + _0x2485c9 / 0x2 + ')');
                _0x11f35e.append('text').attr('text-anchor', 'middle').style('font-size', '18px').style('font-weight', 'normal').attr('fill-opacity', 0x0).transition().delay(0x3e8).text(_0x18a6fc[_0x115e6a]['Life Ladder'].toFixed(0x2)).attr('fill-opacity', 0x1);
                let _0x590aa3 = _0x11f35e.selectAll('path').data(_0x5d7bf9(_0x1e3b2b)).enter().append('g');
                let _0x327682 = _0x590aa3.append('path').attr('fill', (_0x4d74e8, _0x5e61a4) => _0x9e508f(_0x5e61a4 + 0x1)).attr('opacity', 0x1).attr('stroke-width', 0x0).attr('cursor', 'pointer').transition().duration(0x1f4).attrTween('d', _0x3073e0).transition().duration(0x1f4).attrTween('d', _0x4c767c);
                _0x590aa3.on('mouseover', _0x39a633);
                _0x590aa3.on('mousemove', _0x338825);
                _0x590aa3.on('mouseout', _0x51eadb);
            } else {
                let _0x608b81 = _0x18af05.append('g').attr('transform', 'translate(' + 0x3 * (_0x38607d + _0x12cd0e) + ',' + _0x2485c9 / 0x2 + ')');
                let _0x590aa3 = _0x608b81.selectAll('path').data(_0x5d7bf9(_0x39fef8)).enter().append('g');
                let _0x327682 = _0x590aa3.append('path').attr('fill', 'none').attr('opacity', 0.75).attr('stroke', '#888888').attr('stroke-width', 0.75).transition().duration(0x1f4).attrTween('d', _0x3073e0).transition().duration(0x1f4).attrTween('d', _0x4c767c);
            }
            let _0x305c7d = d3.select('#compare_container').append('div').attr('class', 'legend');
            _0x305c7d.append('span').attr('class', 'legend-title').text('2018 Happiness Scores');
            $('.legend').css({
                'position': 'relative',
                'display': 'inline-block',
                'top': '50%',
                'transform': 'translateY(-50%)',
                'left': 1.45 * _0x572dc3 / 0x64 + '%',
                'float': 'left',
                'width': 0xc8
            });
            let _0x25aaac = _0x305c7d.selectAll('.item').data(_0x39fef8).enter().append('span').attr('class', 'item');
            _0x25aaac.append('div').attr('class', 'symbol').style('background-color', (_0x77456a, _0x3f5ca6) => _0x1f6f02(_0x3f5ca6 + 0x1));
            if (_0x115e6a) {
                _0x25aaac.append('div').attr('class', 'symbol').style('background-color', (_0xe8de1a, _0x1b31d5) => _0x9e508f(_0x1b31d5 + 0x1));
            }
            _0x25aaac.append('div').attr('class', 'name').text((_0x5944a9, _0x27c1cc) => _0x5944a9.x);
        }

        function _0x1918f4() {
            let _0x1211e4 = $('#info_container'),
                _0x24f42e = _0x1211e4.height(),
                _0x4ea06b = _0x1211e4.width(),
                _0x5e477e = 0x14;
            _0x4ea06b = _0x4ea06b - 0x2 * _0x5e477e;
            _0x24f42e = _0x24f42e - 0x2 * _0x5e477e;
            let _0x46913b = d3.select('#info_container').append('svg').attr('height', _0x24f42e * 0x64 / _0x1211e4.height() + '%').attr('width', _0x4ea06b * 0x64 / _0x1211e4.width() + '%').attr('transform', 'translate(' + _0x5e477e + ',' + _0x5e477e + ')').attr('style', 'display:block');
            _0x46913b.append('text').attr('x', _0x4ea06b / 0x2).attr('y', '16').attr('text-anchor', 'middle').attr('style', 'font-size:16px').text('Legend');
            _0x46913b.append('line').attr('x1', '0').attr('x2', '28').attr('y1', '35.01').attr('y2', '35').attr('stroke', 'url(#bluegrad)').attr('stroke-width', '3');
            _0x46913b.append('text').attr('x', '42').attr('y', '42').attr('text-anchor', 'left').attr('style', 'font-size:14px').text(_0x180a91);
            if (_0x115e6a) {
                _0x46913b.append('line').attr('x1', '0').attr('x2', '28').attr('y1', '56.01').attr('y2', '56').attr('stroke', 'url(#ygrad)').attr('stroke-width', '3');
                _0x46913b.append('text').attr('x', '42').attr('y', '63').attr('text-anchor', 'left').attr('style', 'font-size:14px').text(_0x115e6a);
            }
        }
        _0x256521(_0x18a6fc);
        _0x59ddfc('ladder_container', 'Life Ladder', [0x1, 0xa], 0.5);
        _0x59ddfc('gdp_container', 'Log GDP per capita', [0x1, 0xd], 0.5);
        _0x59ddfc('life_container', 'Healthy Life Expectancy at Birth', [0x14, 0x64], 0xf);
        _0x5ca97a('social_container', 'Social Support', [0x0, 0x1], -0.5);
        _0x5ca97a('freedom_container', 'Freedom to make Life Choices', [0x0, 0x1], -0.5);
        _0x5ca97a('generosity_container', 'Generosity', [-0x1, 0x1], -1.5);
        _0x5ca97a('corruption_container', 'Perceptions of Corruption', [0x0, 0x1], -0.5);
        _0x808230(_0x18a6fc);
        _0x1918f4();
        let _0x750c9c = new Set();
        for (let _0x5c746b in _0x5c8e6d[0x7e2]) _0x750c9c.add(_0x5c746b);
        _0x750c9c = Array.from(_0x750c9c);
        autocomplete(document.getElementById('first_country'), _0x750c9c);
        autocomplete(document.getElementById('second_country'), _0x750c9c.concat('None'));
        document.getElementById('first_country').onchange = function () {
            let _0x57161d = $('#first_country')[0x0].value,
                _0x58284b = _0x750c9c.indexOf(_0x57161d);
            if (_0x58284b < 0x0) return true;
            _0x180a91 = _0x57161d;
            _0x201ca4(_0x4fe590, _0x5c8e6d, _0x18a6fc);
        };
        document.getElementById('second_country').onchange = function () {
            let _0xba1c6e = $('#second_country')[0x0].value,
                _0x2bff12 = _0x750c9c.indexOf(_0xba1c6e);
            if (_0xba1c6e === 'None') {
                _0x115e6a = '';
                _0x201ca4(_0x4fe590, _0x5c8e6d, _0x18a6fc);
            }
            if (_0x2bff12 < 0x0) return true;
            _0x115e6a = _0xba1c6e;
            _0x201ca4(_0x4fe590, _0x5c8e6d, _0x18a6fc);
        };
        document.getElementById('first_country').value = _0x180a91;
        if (_0x115e6a) document.getElementById('second_country').value = _0x115e6a;
        else document.getElementById('second_country').value = 'None';
    }

    function _0x127565(_0x360c15, _0xa7188, _0x2bfc1a, _0x282489, _0x37361a, _0x12a276) {
        $('.clear').empty();
        let _0x3498f1 = $('input[name=analysis_radio]');
        _0x3498f1.off();
        const _0x453785 = ['Africa', 'Asia', 'Europe', 'North America', 'South America', 'Oceania'];
        let _0x53ff8b = [];
        let _0xd00ea9, _0x1701d3, _0x53d155, _0x4179fb, _0x82dc8e = [],
            _0x420eb4 = [];
        let _0x3252d6 = {};
        let _0x4c39bc = [];
        let _0x3541cb = [];
        let _0x396259;
        for (_0x396259 = 0x0; _0x396259 < _0x453785.length; _0x396259++) _0x3252d6[_0x453785[_0x396259]] = {
            'countries': [],
            'score': 0x0,
            'count': 0x0
        };
        const _0x202100 = ['url(#yellowgrad)', 'url(#greengrad)', 'url(#bluegrad)', 'url(#redgrad)', 'url(#purplegrad)', 'url(#pinkgrad)'];
        const _0x7f31ba = ['#F9D423', '#00B712', '#495AFF', '#dd2c29', '#7316B8', '#FF4081'];
        let _0x580e89 = Number.MAX_VALUE,
            _0x3b6c86 = Number.MIN_VALUE,
            _0x301a58 = Number.MAX_VALUE,
            _0xe36c06 = Number.MIN_VALUE;
        for (_0x396259 = 0x0; _0x396259 < _0x37361a.length; _0x396259++) {
            let _0x28d03b = _0x37361a[_0x396259];
            if (_0x580e89 > parseFloat(_0x28d03b.PC1)) _0x580e89 = parseFloat(_0x28d03b.PC1);
            if (_0x3b6c86 < parseFloat(_0x28d03b.PC1)) _0x3b6c86 = parseFloat(_0x28d03b.PC1);
            if (_0x301a58 > parseFloat(_0x28d03b.PC2)) _0x301a58 = parseFloat(_0x28d03b.PC2);
            if (_0xe36c06 < parseFloat(_0x28d03b.PC2)) _0xe36c06 = parseFloat(_0x28d03b.PC2);
            _0x28d03b.PC1 = parseFloat(_0x28d03b.PC1);
            _0x28d03b.PC2 = parseFloat(_0x28d03b.PC2);
            if (_0x28d03b.Year === '2018') {
                let _0x369970 = _0x3252d6[_0x28d03b.Continent];
                _0x369970.countries.push(_0x28d03b['Country name']);
                _0x369970.score += parseFloat(_0x28d03b['Life Ladder']);
                _0x369970.count += 0x1;
                _0x4c39bc.push({
                    'country': _0x28d03b['Country name'],
                    'continent': _0x28d03b.Continent,
                    'score': parseFloat(_0x2bfc1a[_0x28d03b['Country name']]['Life Ladder']),
                    'rank': parseInt(_0x2bfc1a[_0x28d03b['Country name']].Rank)
                });
                _0x3541cb.push(_0x3541cb.length);
            }
            if (_0x53ff8b.indexOf(_0x28d03b['Country name']) < 0x0) _0x53ff8b.push(_0x28d03b['Country name']);
        }
        _0x4c39bc.sort(function (_0x15e002, _0x3b7337) {
            if (_0x15e002.rank > _0x3b7337.rank) return 0x1;
            if (_0x3b7337.rank > _0x15e002.rank) return -0x1;
            return 0x0;
        });
        let _0x11215d = [];
        for (_0x396259 = 0x0; _0x396259 < _0x453785.length; _0x396259++) {
            let _0x46c943 = _0x3252d6[_0x453785[_0x396259]].score / _0x3252d6[_0x453785[_0x396259]].count;
            _0x11215d.push({
                'continent': _0x453785[_0x396259],
                'countries': _0x3252d6[_0x453785[_0x396259]].countries,
                'mean': _0x46c943
            });
        }

        function _0x23bf2e(_0x50210f) {
            return _0x7f31ba[_0x453785.indexOf(_0x50210f.Continent || _0x50210f.continent)];
        }

        function _0x535204(_0x924b22) {
            return _0x202100[_0x453785.indexOf(_0x924b22.Continent || _0x924b22.continent)];
        }

        function _0x13a97a() {
            let _0x221005 = $('#pca_chart'),
                _0x53f53a = _0x221005.height(),
                _0x3ceffd = _0x221005.width(),
                _0x51aa13 = 0x14;
            _0x3ceffd = _0x3ceffd - 0x2 * _0x51aa13;
            _0x53f53a = _0x53f53a - 0x2 * _0x51aa13;
            _0x221005.empty();
            let _0x1be2c9 = d3.select('#pca_chart').append('svg').attr('height', _0x53f53a * 0x64 / _0x221005.height() + '%').attr('width', _0x3ceffd * 0x64 / _0x221005.width() + '%').attr('transform', 'translate(' + _0x51aa13 + ',' + _0x51aa13 + ')');
            _0xd00ea9 = _0x1be2c9.append('g').attr('transform', 'translate(35, 35)');
            let _0x820e8b = d3.scaleLinear().domain([Math.floor(_0x301a58), Math.ceil(_0xe36c06)]).range([_0x53f53a - 0x4b, 0x0]);
            _0xd00ea9.append('g').call(d3.axisLeft(_0x820e8b));
            let _0x285f61 = d3.scaleLinear().domain([Math.floor(_0x580e89), Math.ceil(_0x3b6c86)]).range([0x0, _0x3ceffd - 0x32]);
            _0xd00ea9.append('g').attr('transform', 'translate(' + 0x0 + ',' + (_0x53f53a - 0x4b) + ')').call(d3.axisBottom(_0x285f61));
            let _0x570797 = _0xd00ea9.selectAll('.dot').data(_0x37361a).enter().append('circle').attr('cx', 0x0).attr('cy', function (_0x3e8dc8) {
                return _0x820e8b(_0x3e8dc8.PC2);
            }).attr('r', '1.25').attr('cursor', 'pointer');
            _0x570797.transition().delay(function (_0x47b0e8, _0x396259) {
                return _0x396259 / 0x3;
            }).duration(0x0).attr('cx', function (_0x274ba2, _0x396259) {
                return _0x285f61(_0x274ba2.PC1);
            }).attr('fill', function (_0x5b5809, _0x396259) {
                return _0x23bf2e(_0x5b5809);
            }).attr('r', '1');
            _0x1be2c9.append('text').attr('x', _0x3ceffd / 0x2).attr('y', 0xf).style('font-size', '16px').attr('text-anchor', 'middle').text('PCA Plot');
            _0x1be2c9.append('text').attr('x', -(_0x53f53a / 0x2)).attr('y', 0xa).attr('fill', '#ffffff').attr('transform', 'rotate(-90)').attr('text-anchor', 'middle').text('PC 2');
            _0x1be2c9.append('text').attr('fill', '#ffffff').attr('x', _0x3ceffd / 0x2).attr('y', _0x53f53a).attr('text-anchor', 'middle').text('PC 1');
            _0x4179fb = d3.brush().extent([
                [0x0, 0x0],
                [_0x3ceffd - 0x32, _0x53f53a - 0x4b]
            ]).on('start', _0x267980).on('brush', _0x14c105).on('end', _0x4012e2);
            _0xd00ea9.call(_0x4179fb);

            function _0x267980() {}

            function _0x14c105() {
                let _0xa9cafe = d3.event.selection;
                if (!_0xa9cafe) return;
                _0x82dc8e = [];
                _0x420eb4 = [];
                _0xd00ea9.selectAll('circle').classed('hidden', function (_0x1bb3b3) {
                    let _0x4c4ff8 = _0xa9cafe[0x0][0x0] > _0x285f61(_0x1bb3b3.PC1) || _0x285f61(_0x1bb3b3.PC1) > _0xa9cafe[0x1][0x0] || _0xa9cafe[0x0][0x1] > _0x820e8b(_0x1bb3b3.PC2) || _0x820e8b(_0x1bb3b3.PC2) > _0xa9cafe[0x1][0x1];
                    if (!_0x4c4ff8 && _0x82dc8e.indexOf(_0x1bb3b3.Continent) < 0x0) _0x82dc8e.push(_0x1bb3b3.Continent);
                    if (!_0x4c4ff8 && _0x420eb4.indexOf(_0x1bb3b3['Country name']) < 0x0) _0x420eb4.push(_0x1bb3b3['Country name']);
                    return _0x4c4ff8;
                });
                _0x1701d3.selectAll('rect').classed('hidden', function (_0x2250ee) {
                    return _0x82dc8e.indexOf(_0x2250ee.continent) < 0x0;
                });
                _0x53d155.selectAll('rect').classed('hidden', function (_0x39fc94) {
                    return _0x420eb4.indexOf(_0x39fc94.country) < 0x0;
                });
            }

            function _0x4012e2() {
                if (!d3.event.selection) {
                    _0xd00ea9.selectAll('.hidden').classed('hidden', false);
                    _0x1701d3.selectAll('rect').classed('hidden', false);
                    _0x53d155.selectAll('rect').classed('hidden', false);
                }
            }
        }

        function _0x79b911() {
            let _0x4333e1 = $('#continent_chart'),
                _0x1233d5 = _0x4333e1.height(),
                _0x5ca166 = _0x4333e1.width(),
                _0xda2efb = 0x14;
            _0x5ca166 = _0x5ca166 - 0x2 * _0xda2efb;
            _0x1233d5 = _0x1233d5 - 0x2 * _0xda2efb;
            _0x4333e1.empty();
            let _0xf8cb3f = d3.select('#continent_chart').append('svg').attr('height', _0x1233d5 * 0x64 / _0x4333e1.height() + '%').attr('width', _0x5ca166 * 0x64 / _0x4333e1.width() + '%').attr('transform', 'translate(' + _0xda2efb + ',' + _0xda2efb + ')');
            _0x1701d3 = _0xf8cb3f.append('g').attr('transform', 'translate(30, 60)');
            let _0x113039 = d3.scaleLinear().domain([0x1, 0xa]).range([0x0, _0x5ca166 - 0x5f]);
            _0x1701d3.append('g').attr('transform', 'translate(55, 0)').call(d3.axisTop(_0x113039));
            let _0x311a6e = d3.scaleBand().domain([0x0, 0x1, 0x2, 0x3, 0x4, 0x5]).range([0x0, _0x1233d5 - 0x4b]).padding(0.4);
            _0x1701d3.append('g').attr('transform', 'translate(55, 0)').call(d3.axisLeft(_0x311a6e).tickFormat(_0x396259 => {
                return _0x453785[_0x396259];
            }));
            let _0x463dd4 = _0x1701d3.selectAll('rect').data(_0x11215d).enter().append('rect').attr('x', 0x38).attr('width', 0x0).attr('fill', function (_0x5301e2, _0x396259) {
                return _0x535204(_0x5301e2);
            }).attr('height', _0x311a6e.bandwidth()).attr('y', (_0x540259, _0x396259) => _0x311a6e(_0x396259)).attr('cursor', 'pointer');
            _0x463dd4.transition().duration(0x2ee).attr('width', _0x37729e => _0x113039(_0x37729e.mean));
            _0x463dd4.on('click', function (_0x44cf4d) {
                _0xd00ea9.call(_0x4179fb.move, null);
                if (!d3.event.shiftKey) {
                    _0x82dc8e = [];
                    _0x420eb4 = [];
                }
                _0x82dc8e.push(_0x44cf4d.continent);
                _0x1701d3.selectAll('rect').classed('hidden', function (_0x272eed) {
                    return _0x82dc8e.indexOf(_0x272eed.continent) < 0x0;
                });
                _0x53d155.selectAll('rect').classed('hidden', function (_0x202203) {
                    if (_0x82dc8e.indexOf(_0x202203.continent) >= 0x0) {
                        _0x420eb4.push(_0x202203.country);
                        return false;
                    } else return true;
                });
                _0xd00ea9.selectAll('circle').classed('hidden', function (_0xf11204) {
                    for (_0x396259 = 0x0; _0x396259 < _0x82dc8e.length; _0x396259++)
                        if (_0xf11204.Continent === _0x82dc8e[_0x396259]) return false;
                    return true;
                });
                d3.event.stopPropagation();
            });
            _0xf8cb3f.on('click', function () {
                _0x82dc8e = [];
                _0x420eb4 = [];
                _0xd00ea9.call(_0x4179fb.move, null);
                _0x1701d3.selectAll('rect').classed('hidden', false);
                _0x53d155.selectAll('rect').classed('hidden', false);
                _0xd00ea9.selectAll('circle').classed('hidden', false);
            });
            _0xf8cb3f.append('text').attr('x', _0x5ca166 / 0x2).attr('y', 0xf).style('font-size', '16px').attr('text-anchor', 'middle').text('Avg. Continent Happiness Scores');
            _0x1701d3.selectAll('rect').on('mouseenter', function (_0x130188, _0x396259) {
                _0x1701d3.append('text').attr('class', 'tooltip').attr('x', _0x113039(_0x130188.mean) + 0x14 + 0x38).attr('y', _0x311a6e(_0x396259) + _0x311a6e.bandwidth() / 1.5).attr('text-anchor', 'middle').text(parseFloat(_0x130188.mean).toFixed(0x2));
            });
            _0x1701d3.selectAll('rect').on('mouseleave', function (_0x20ee43, _0x396259) {
                d3.selectAll('.tooltip').remove();
            });
        }

        function _0x15d17d() {
            let _0x1db410 = $('#country_rank_chart'),
                _0x332283 = _0x1db410.height() * 0x4,
                _0x1a8e44 = _0x1db410.width(),
                _0x2d55b9 = 0x14;
            _0x1a8e44 = _0x1a8e44 - 0x2 * _0x2d55b9;
            _0x332283 = _0x332283 - 0x2 * _0x2d55b9;
            _0x1db410.empty();
            let _0x3295b5 = d3.select('#country_rank_chart').append('svg').attr('height', _0x332283 * 0x64 / _0x1db410.height() + '%').attr('width', _0x1a8e44 * 0x64 / _0x1db410.width() + '%').attr('transform', 'translate(' + _0x2d55b9 + ',' + _0x2d55b9 + ')');
            _0x53d155 = _0x3295b5.append('g').attr('transform', 'translate(78, 60)');
            let _0x5e2117 = d3.scaleLinear().domain([0x1, 0xa]).range([0x0, _0x1a8e44 - 0x91]);
            let _0x20d01f = d3.scaleBand().domain(_0x3541cb).range([0x0, _0x332283 - 0x4b]).padding(0.45);
            _0x53d155.append('g').attr('transform', 'translate(55, 0)').call(d3.axisTop(_0x5e2117));
            _0x53d155.append('g').attr('transform', 'translate(55, 0)').call(d3.axisLeft(_0x20d01f).tickFormat(_0x396259 => {
                return _0x4c39bc[_0x396259].country;
            }));
            let _0x2509e3 = _0x53d155.selectAll('rect').data(_0x4c39bc).enter().append('rect').attr('x', 0x38).attr('width', 0x0).attr('fill', function (_0x650c82, _0x396259) {
                return _0x535204(_0x650c82);
            }).attr('y', (_0x3677bb, _0x396259) => _0x20d01f(_0x396259)).attr('height', _0x20d01f.bandwidth()).attr('cursor', 'pointer');
            _0x2509e3.transition().duration(0x2ee).attr('width', _0x398715 => _0x5e2117(_0x398715.score));
            _0x3295b5.append('text').attr('x', _0x1a8e44 / 0x2).attr('y', 0xf).style('font-size', '16px').attr('text-anchor', 'middle').text('2018 Happiness Scores');
            _0x2509e3.on('click', function (_0xf67130) {
                _0xd00ea9.call(_0x4179fb.move, null);
                if (!d3.event.shiftKey) {
                    _0x82dc8e = [];
                    _0x420eb4 = [];
                }
                _0x82dc8e.push(_0xf67130.continent);
                _0x420eb4.push(_0xf67130.country);
                _0x1701d3.selectAll('rect').classed('hidden', function (_0x1a2dcf) {
                    return _0x82dc8e.indexOf(_0x1a2dcf.continent) < 0x0;
                });
                _0x53d155.selectAll('rect').classed('hidden', function (_0x41f684) {
                    return _0x420eb4.indexOf(_0x41f684.country) < 0x0;
                });
                _0xd00ea9.selectAll('circle').classed('hidden', function (_0x439b56) {
                    for (_0x396259 = 0x0; _0x396259 < _0x420eb4.length; _0x396259++)
                        if (_0x439b56['Country name'] === _0x420eb4[_0x396259]) return false;
                    return true;
                });
                d3.event.stopPropagation();
            });
            _0x3295b5.on('click', function () {
                _0x82dc8e = [];
                _0x420eb4 = [];
                _0xd00ea9.call(_0x4179fb.move, null);
                _0x1701d3.selectAll('rect').classed('hidden', false);
                _0x53d155.selectAll('rect').classed('hidden', false);
                _0xd00ea9.selectAll('circle').classed('hidden', false);
            });
            _0x53d155.selectAll('rect').on('mouseenter', function (_0x318873, _0x396259) {
                _0x53d155.append('text').attr('class', 'tooltip').attr('x', _0x5e2117(_0x318873.score) + 0x14 + 0x38).attr('y', _0x20d01f(_0x396259) + _0x20d01f.bandwidth()).attr('text-anchor', 'middle').text(parseFloat(_0x318873.score).toFixed(0x2));
            });
            _0x53d155.selectAll('rect').on('mouseleave', function (_0x4cad14, _0x396259) {
                d3.selectAll('.tooltip').remove();
            });
        }

        function _0x221bc6() {
            let _0x16fc40 = $('#waterfall_chart'),
                _0x4468fe = _0x16fc40.height(),
                _0x14b4f8 = _0x16fc40.width(),
                _0x503c23 = 0x14;
            _0x14b4f8 = _0x14b4f8 - 0x2 * _0x503c23;
            _0x4468fe = _0x4468fe - 0x2 * _0x503c23;
            _0x16fc40.empty();
            let _0x130b63 = [],
                _0x10a763 = [],
                _0x20df3c = [];
            for (let _0x396259 = 0x7d5; _0x396259 <= 0x7e2; _0x396259++) {
                if (_0xa7188[_0x396259][_0x212f3c]) {
                    _0x10a763.push(parseFloat(_0xa7188[_0x396259][_0x212f3c][_0x3ab656]));
                    _0x130b63.push(_0x396259);
                    _0x20df3c.push(_0x20df3c.length);
                }
            }
            _0x10a763.push(_0x10a763[_0x10a763.length - 0x1]);
            _0x130b63.push('Final');
            _0x20df3c.push(_0x20df3c.length);
            let _0xe83db9 = d3.select('#waterfall_chart').append('svg').attr('height', _0x4468fe * 0x64 / _0x16fc40.height() + '%').attr('width', _0x14b4f8 * 0x64 / _0x16fc40.width() + '%').attr('transform', 'translate(' + _0x503c23 + ',' + _0x503c23 + ')').style('position', 'relative');
            const _0x199558 = _0xe83db9.append('g').attr('transform', 'translate(50, 50)');
            let _0x1dc62f = d3.scaleLinear().domain([Math.floor(d3.min(_0x10a763)), Math.ceil(d3.max(_0x10a763))]).range([_0x4468fe - 0x78, 0x0]);
            _0x199558.append('g').call(d3.axisLeft(_0x1dc62f));

            function _0xa928ed() {
                return d3.axisLeft(_0x1dc62f).ticks(0xa);
            }
            _0x199558.append('g').attr('class', 'grid').call(_0xa928ed().tickSize(-_0x14b4f8 + 0x50).tickFormat(''));
            let _0x1758d0 = d3.scaleBand().domain(_0x20df3c).range([0x0, _0x14b4f8 - 0x50]).padding(0.4);
            _0x199558.append('g').attr('transform', 'translate(' + 0x0 + ',' + (_0x4468fe - 0x78) + ')').call(d3.axisBottom(_0x1758d0).tickFormat(_0x396259 => {
                return _0x130b63[_0x396259];
            })).selectAll('text').style('text-anchor', 'middle').attr('dy', '12px');
            let _0x29e9ba = _0x199558.selectAll('rect').data(_0x10a763).enter().append('rect').attr('x', (_0x3368f4, _0x396259) => _0x1758d0(_0x396259)).attr('y', (_0x1a87cf, _0x396259) => {
                if (_0x396259 === 0x0 || _0x396259 === _0x10a763.length - 0x1) return _0x4468fe - 0x78;
                else if (_0x1a87cf - _0x10a763[_0x396259 - 0x1] >= 0x0) return _0x1dc62f(_0x10a763[_0x396259 - 0x1]);
                else return _0x1dc62f(_0x1a87cf);
            }).attr('width', _0x1758d0.bandwidth()).attr('fill', (_0xf6566d, _0x396259) => {
                if (_0x396259 === 0x0 || _0x396259 === _0x10a763.length - 0x1) return 'url(#vbluegrad)';
                else if (_0xf6566d - _0x10a763[_0x396259 - 0x1] >= 0x0) return 'url(#vgreengrad)';
                else return 'url(#vyellowgrad)';
            }).attr('height', 0x0).transition().duration(0x2ee).attr('y', (_0x2b4dbd, _0x396259) => {
                if (_0x396259 === 0x0 || _0x396259 === _0x10a763.length - 0x1) return _0x1dc62f(_0x2b4dbd);
                else if (_0x2b4dbd - _0x10a763[_0x396259 - 0x1] >= 0x0) return _0x1dc62f(_0x2b4dbd);
                else return _0x1dc62f(_0x10a763[_0x396259 - 0x1]);
            }).attr('height', (_0x32d818, _0x396259) => {
                if (_0x396259 === 0x0 || _0x396259 === _0x10a763.length - 0x1) return _0x4468fe - 0x78 - _0x1dc62f(_0x32d818);
                else if (_0x32d818 - _0x10a763[_0x396259 - 0x1] >= 0x0) return _0x1dc62f(_0x10a763[_0x396259 - 0x1]) - _0x1dc62f(_0x32d818);
                else return _0x1dc62f(_0x32d818) - _0x1dc62f(_0x10a763[_0x396259 - 0x1]);
            });
            _0x199558.selectAll('.text').data(_0x10a763).enter().append('text').attr('class', 'tooltip').attr('x', (_0x19e952, _0x396259) => _0x1758d0(_0x396259) + _0x1758d0.bandwidth() / 0x2).attr('y', (_0xe4c7c4, _0x396259) => {
                if (_0x396259 === 0x0 || _0x396259 === _0x10a763.length - 0x1) return _0x1dc62f(_0xe4c7c4) - 0xc;
                else if (_0xe4c7c4 - _0x10a763[_0x396259 - 0x1] >= 0x0) return _0x1dc62f(_0xe4c7c4) - 0xc;
                else return _0x1dc62f(_0xe4c7c4) + 0x14;
            }).attr('text-anchor', 'middle').text((_0x3ba1d8, _0x396259) => {
                if (_0x396259 === 0x0 || _0x396259 === _0x10a763.length - 0x1) return _0x3ba1d8.toFixed(0x3);
                else if (_0x3ba1d8 - _0x10a763[_0x396259 - 0x1] >= 0x0) return '+' + (_0x3ba1d8 - _0x10a763[_0x396259 - 0x1]).toFixed(0x3);
                else return (_0x3ba1d8 - _0x10a763[_0x396259 - 0x1]).toFixed(0x3);
            });
            _0xe83db9.append('text').attr('x', _0x14b4f8 / 0x2).attr('y', 0x14).style('font-size', '16px').attr('text-anchor', 'middle').text(_0x3ab656 + ' Waterfall - ' + _0x212f3c);
            _0xe83db9.append('text').attr('fill', '#ffffff').attr('x', _0x14b4f8 / 0x2).attr('y', _0x4468fe - 0x10).style('font-size', '14px').attr('text-anchor', 'middle').text('Year');
            let _0x34aec9 = $('#waterfall_controls'),
                _0x50a605 = $("<span class='autocomplete'></span>"),
                _0x33ea50 = $("<input type='text' placeholder='Search country' id='waterfall_country' autocomplete='none' value='" + _0x212f3c + "'/>"),
                _0x3d62c1 = $("<select id='waterfall_attribute'></select>");
            _0x34aec9.empty();
            _0x34aec9.css({
                'position': 'relative',
                'z-index': '5'
            });
            let _0x1ab8ff = ['Life Ladder', 'Log GDP per capita', 'Social Support', 'Healthy Life Expectancy at Birth', 'Freedom to make Life Choices', 'Generosity', 'Perceptions of Corruption'];
            for (let _0x396259 = 0x0; _0x396259 < _0x1ab8ff.length; _0x396259++) _0x3d62c1.append("<option name='waterfall_attribute_option' value='" + _0x1ab8ff[_0x396259] + '\'>' + _0x1ab8ff[_0x396259] + '</option>');
            _0x3d62c1.css({
                'position': 'relative',
                'display': 'inline-block',
                'margin': 'auto',
                'font-family': 'Segoe UI, Source Sans Pro, San Francisco, sans-serif',
                'padding': '5px',
                'top': '50%',
                'width': '40%',
                'margin-left': '5%',
                'margin-right': '10%',
                'transform': 'translateY(-50%)',
                'background-color': '#2f323a',
                'color': '#ffffff',
                'outline': 'none'
            });
            _0x50a605.css({
                'width': '40%',
                'margin': 'auto',
                'top': '50%',
                'transform': 'translateY(-50%)',
                'vertical-align': 'top'
            });
            _0x33ea50.css({
                'position': 'relative',
                'font-family': 'Segoe UI, Source Sans Pro, San Francisco, sans-serif',
                'font-size': '16px',
                'font-weight': 'lighter',
                'width': '100%',
                'background-color': '#2f323a',
                'color': '#ffffff',
                'border': 'none',
                'outline': 'none'
            });
            _0x34aec9.append(_0x3d62c1);
            _0x50a605.append(_0x33ea50);
            _0x34aec9.append(_0x50a605);
            _0x34aec9.find("option[name=waterfall_attribute_option][value='" + _0x3ab656 + '\']').attr('selected', 'selected');
            _0x3d62c1.on('change', function () {
                _0x3ab656 = this.value;
                _0x3d62c1.off();
                _0x221bc6();
            });
            autocomplete(document.getElementById('waterfall_country'), _0x53ff8b);
            document.getElementById('waterfall_country').onchange = function () {
                let _0x3c00d5 = $('#waterfall_country')[0x0].value,
                    _0x80c7fd = _0x53ff8b.indexOf(_0x3c00d5);
                if (_0x80c7fd < 0x0) return true;
                _0x212f3c = _0x3c00d5;
                _0x221bc6();
            };
        }

        function _0x2a6a41() {
            let _0x14d673 = $('#id_chart'),
                _0x170218 = _0x14d673.height(),
                _0x53e9f7 = _0x14d673.width(),
                _0x237e3d = 0x14;
            _0x53e9f7 = _0x53e9f7 - 0x2 * _0x237e3d;
            _0x170218 = _0x170218 - 0x2 * _0x237e3d;
            _0x14d673.empty();
            let _0x4cbf2c = d3.select('#id_chart').append('svg').attr('height', _0x170218 * 0x64 / _0x14d673.height() + '%').attr('width', _0x53e9f7 * 0x64 / _0x14d673.width() + '%').attr('transform', 'translate(' + _0x237e3d + ',' + _0x237e3d + ')').style('position', 'relative');
            const _0x5bab73 = _0x4cbf2c.append('g').attr('transform', 'translate(50, 50)');
            let _0x50e7e7 = d3.scaleLinear().domain([Math.floor(d3.min(_0x12a276.eigen_values)), Math.ceil(d3.max(_0x12a276.eigen_values))]).range([_0x170218 - 0x78, 0x0]);
            _0x5bab73.append('g').attr('class', 'axis').call(d3.axisLeft(_0x50e7e7));
            let _0x3d2c11 = d3.scaleLinear().domain([Math.floor(d3.min(_0x12a276.variance)), Math.ceil(d3.max(_0x12a276.variance))]).range([_0x170218 - 0x78, 0x0]);
            _0x5bab73.append('g').attr('transform', 'translate(' + (_0x53e9f7 - 0x64) + ', 0)').attr('class', 'axis').call(d3.axisRight(_0x3d2c11));
            let _0x3b59a1 = d3.scaleLinear().domain([0x0, 0xa]).range([0x0, _0x53e9f7 - 0x64]).nice();
            _0x5bab73.append('g').attr('transform', 'translate(' + 0x0 + ',' + (_0x170218 - 0x78) + ')').attr('class', 'axis').call(d3.axisBottom(_0x3b59a1)).selectAll('text').style('text-anchor', 'end').attr('dy', '12px');
            let _0x45e071 = d3.line().x(function (_0x59befb, _0x396259) {
                return _0x3b59a1(_0x396259);
            }).y(function (_0x9bc362) {
                return _0x50e7e7(_0x9bc362);
            }).curve(d3.curveMonotoneX);
            let _0x398567 = d3.line().x(function (_0x34720, _0x396259) {
                return _0x3b59a1(_0x396259 + 0x1);
            }).y(function (_0x435694) {
                return _0x50e7e7(_0x435694);
            }).curve(d3.curveMonotoneX);
            let _0x2cc68c = d3.line().x(function (_0xd57238, _0x396259) {
                return _0x3b59a1(_0x396259 + 0x1);
            }).y(function (_0x383430) {
                return _0x3d2c11(_0x383430);
            }).curve(d3.curveMonotoneX);
            _0x5bab73.append('path').datum([0x1, 0x1, 0x1, 0x1, 0x1, 0x1, 0x1, 0x1, 0x1, 0x1, 0x1]).attr('d', _0x45e071).attr('stroke-dasharray', '5, 5').attr('fill', 'none').attr('stroke', '#ffffff');
            let _0x19a513 = _0x5bab73.append('path').datum(_0x12a276.variance).attr('d', _0x2cc68c).attr('fill', 'none').attr('stroke', 'url(#yellowgrad)').attr('stroke-width', '3');
            let _0x2d104c = _0x19a513.node().getTotalLength();
            _0x19a513.attr('stroke-dasharray', _0x2d104c + ' ' + _0x2d104c).attr('stroke-dashoffset', _0x2d104c).transition().duration(0x3e8).attr('stroke-dashoffset', 0x0);
            let _0x484317 = _0x5bab73.append('path').datum(_0x12a276.eigen_values).attr('d', _0x398567).attr('fill', 'none').attr('stroke', 'url(#bluegrad)').attr('stroke-width', '3');
            _0x2d104c = _0x484317.node().getTotalLength();
            _0x484317.attr('stroke-dasharray', _0x2d104c + ' ' + _0x2d104c).attr('stroke-dashoffset', _0x2d104c).transition().duration(0x3e8).attr('stroke-dashoffset', 0x0);
            let _0x4f62d0 = _0x5bab73.selectAll('.dot').data(_0x12a276.eigen_values).enter().append('circle').attr('cx', function (_0x204adb, _0x396259) {
                return _0x3b59a1(_0x396259 + 0x1);
            }).attr('cy', function (_0x5993ec) {
                return _0x50e7e7(_0x5993ec);
            });
            _0x4f62d0.transition().duration(0x15e).attr('fill', 'url(#bluegrad)').attr('r', 0x4).attr('cursor', 'pointer');
            let _0x290c03 = _0x5bab73.selectAll('.dot2').data(_0x12a276.variance).enter().append('circle').attr('cx', function (_0x43e15f, _0x396259) {
                return _0x3b59a1(_0x396259 + 0x1);
            }).attr('cy', function (_0x21c414) {
                return _0x3d2c11(_0x21c414);
            });
            _0x290c03.transition().duration(0x15e).attr('fill', 'url(#yellowgrad)').attr('r', 0x4).attr('cursor', 'pointer');
            _0x4f62d0.on('mouseenter', function (_0x3117f5, _0x396259) {
                _0x5bab73.append('text').attr('class', 'tooltip').attr('x', _0x3b59a1(_0x396259 + 0x1)).attr('y', _0x50e7e7(_0x3117f5) - 0x10).attr('text-anchor', 'middle').text(_0x3117f5.toFixed(0x2));
            });
            _0x4f62d0.on('mouseleave', function (_0x29ddf4, _0x396259) {
                d3.selectAll('.tooltip').remove();
            });
            _0x290c03.on('mouseenter', function (_0x42d62b, _0x396259) {
                _0x5bab73.append('text').attr('class', 'tooltip').attr('x', _0x3b59a1(_0x396259 + 0x1)).attr('y', _0x3d2c11(_0x42d62b) - 0x10).attr('text-anchor', 'middle').text(_0x42d62b.toFixed(0x2) + '%');
            });
            _0x290c03.on('mouseleave', function (_0x15f22a, _0x396259) {
                d3.selectAll('.tooltip').remove();
            });
            _0x4cbf2c.append('text').attr('x', -(_0x170218 / 0x2)).attr('y', 0xa).attr('fill', '#ffffff').attr('transform', 'rotate(-90)').attr('text-anchor', 'middle').style('font-size', '14px').text('Eigen Values');
            _0x4cbf2c.append('text').attr('x', _0x170218 / 0x2).attr('y', -_0x53e9f7 + 0xf).attr('fill', '#ffffff').attr('transform', 'rotate(90)').attr('text-anchor', 'middle').style('font-size', '14px').text('Explained Variance');
            _0x4cbf2c.append('text').attr('x', _0x53e9f7 / 0x2).attr('y', 0x19).style('font-size', '16px').attr('text-anchor', 'middle').text('Scree Plot');
            _0x4cbf2c.append('text').attr('fill', '#ffffff').attr('x', _0x53e9f7 / 0x2).attr('y', _0x170218 - 0x10).style('font-size', '14px').attr('text-anchor', 'middle').text('Principal Components');
        }

        function _0x3bf6f4() {
            let _0x59c9fa = $('#corr_chart'),
                _0x5708fc = _0x59c9fa.height(),
                _0x5cce27 = _0x59c9fa.width(),
                _0x28d59b = 0x14;
            _0x5cce27 = _0x5cce27 - 0x2 * _0x28d59b;
            _0x5708fc = _0x5708fc - 0x2 * _0x28d59b;
            let _0x3bfd28 = _0x5cce27 > _0x5708fc ? _0x5708fc : _0x5cce27;
            _0x3bfd28 -= 0x64;
            _0x59c9fa.empty();
            let _0x18008a = _0x12a276.corr;
            let _0x22f101 = ['Life Ladder', 'Log GDP per capita', 'Social Support', 'Healthy Life Expectancy at Birth', 'Freedom to make Life Choices', 'Generosity', 'Perceptions of Corruption', 'Positive Affect', 'Negative Affect'];
            let _0x3de2c3 = d3.select('#corr_chart').append('svg').attr('height', _0x5708fc * 0x64 / _0x59c9fa.height() + '%').attr('width', _0x5cce27 * 0x64 / _0x59c9fa.width() + '%').attr('transform', 'translate(' + _0x28d59b + ',' + _0x28d59b + ')').style('position', 'relative');
            const _0xb09b2c = _0x3de2c3.append('g').attr('transform', 'translate(' + ((_0x5cce27 - _0x3bfd28) / 0x2 - 0x14) + ', 50)');
            let _0x51f3a0 = 0x1;
            let _0xaecfe5 = -0x1;
            let _0x130549 = _0x18008a.length;
            let _0x51e19b = _0x18008a[0x0].length;
            let _0x5c9f19 = d3.scaleLinear().domain([0x0, _0x51e19b]).range([0x0, _0x3bfd28]);
            let _0x3e592e = d3.scaleLinear().domain([0x0, _0x130549]).range([0x0, _0x3bfd28]);
            let _0x3165f1 = d3.scaleLinear().domain([_0xaecfe5, 0x0, _0x51f3a0]).range(['#ef8a62', '#ffffff', '#67a9cf']);
            let _0x5c880c = _0xb09b2c.selectAll('.row').data(_0x18008a).enter().append('g').attr('rownum', (_0x26a4f9, _0x396259) => _0x396259).attr('class', 'row').attr('transform', function (_0x49ac86, _0x396259) {
                return 'translate(0,' + _0x3e592e(_0x396259) + ')';
            });
            let _0x4f8ec3 = _0x5c880c.selectAll('.cell').data(function (_0x455bfa) {
                return _0x455bfa;
            }).enter().append('g').attr('class', 'cell').attr('transform', function (_0x3392b1, _0x396259) {
                return 'translate(' + _0x5c9f19(_0x396259) + ', 0)';
            });
            _0x4f8ec3.append('rect').attr('width', _0x3bfd28 / 0x9).transition().duration(0x2ee).attr('height', _0x3bfd28 / 0x9).style('stroke-width', 0x0);
            _0x5c880c.selectAll('.cell').data(function (_0x4a4267, _0x396259) {
                return _0x18008a[_0x396259];
            }).style('fill', _0x3165f1);
            _0x4f8ec3.append('text').attr('dy', '.32em').attr('x', _0x3bfd28 / 0x12).attr('y', _0x3bfd28 / 0x12).attr('text-anchor', 'middle').style('fill', '#000000').style('font-weight', 'normal').transition().delay(0x2ee).text(function (_0x262e29, _0x396259) {
                return _0x262e29.toFixed(0x2);
            });
            _0x4f8ec3.on('mouseover', function (_0x2cf8d8, _0x396259) {
                _0xb09b2c.append('text').attr('class', 'tooltip').attr('x', _0x5c9f19(_0x396259) + _0x3bfd28 / 0x12).attr('y', _0x5708fc - 0x50).style('font-size', '14px').attr('text-anchor', 'middle').text(_0x22f101[_0x396259]);
                let _0x1d1eaa = this.parentElement.getAttribute('rownum');
                _0xb09b2c.append('text').attr('class', 'tooltip').attr('y', -0xa).attr('x', -(_0x5c9f19(_0x1d1eaa) + _0x3bfd28 / 0x12)).attr('transform', 'rotate(-90)').style('font-size', '14px').attr('text-anchor', 'middle').text(_0x22f101[_0x1d1eaa]);
            });
            _0x4f8ec3.on('mouseout', function (_0x319691, _0x396259) {
                _0xb09b2c.selectAll('.tooltip').remove();
            });
            _0x3de2c3.append('text').attr('x', _0x5cce27 / 0x2).attr('y', 0x19).style('font-size', '16px').attr('text-anchor', 'middle').text('Correlation');
            let _0x4747ca = _0x3de2c3.append('g').attr('width', 0x32).attr('height', _0x5708fc - 0x64).attr('transform', 'translate(' + ((_0x5cce27 - _0x3bfd28) / 0x2 + _0x3bfd28) + ', 40)');
            let _0x16b285 = _0x4747ca.append('defs').append('svg:linearGradient').attr('id', 'corrgradient').attr('x1', '100%').attr('y1', '0%').attr('x2', '100%').attr('y2', '100%').attr('spreadMethod', 'pad');
            _0x16b285.append('stop').attr('offset', '0%').attr('stop-color', '#67a9cf').attr('stop-opacity', 0x1);
            _0x16b285.append('stop').attr('offset', '50%').attr('stop-color', '#ffffff').attr('stop-opacity', 0x1);
            _0x16b285.append('stop').attr('offset', '100%').attr('stop-color', '#ef8a62').attr('stop-opacity', 0x1);
            _0x4747ca.append('rect').attr('width', 0x32 / 0x2 - 0xa).attr('height', _0x5708fc - 0x64).style('fill', 'url(#corrgradient)').attr('transform', 'translate(0,' + 0xa + ')');
            let _0x468ccc = d3.scaleLinear().range([_0x5708fc - 0x64, 0x0]).domain([_0xaecfe5, _0x51f3a0]);
            _0x4747ca.append('g').attr('transform', 'translate(20,' + 0xa + ')').call(d3.axisRight(_0x468ccc));
        }

        function _0x55c3e9() {
            let _0x49560d = $('#loadings_chart'),
                _0x60c555 = _0x49560d.height(),
                _0x43e46c = _0x49560d.width(),
                _0x2844e1 = 0x14;
            _0x43e46c = _0x43e46c - 0x2 * _0x2844e1;
            _0x60c555 = _0x60c555 - 0x2 * _0x2844e1;
            _0x49560d.empty();
            let _0x5c1a54 = d3.select('#loadings_chart').append('svg').attr('height', _0x60c555 * 0x64 / _0x49560d.height() + '%').attr('width', _0x43e46c * 0x64 / _0x49560d.width() + '%').attr('transform', 'translate(' + _0x2844e1 + ',' + _0x2844e1 + ')').style('position', 'relative');
            const _0x4c821d = _0x5c1a54.append('g').attr('transform', 'translate(50, 50)');
            let _0x14b888 = d3.extent(_0x12a276.loadings, _0x414752 => _0x414752.val);
            let _0x592a29 = d3.scaleLinear().domain([Math.floor(_0x14b888[0x0]), _0x14b888[0x1]]).range([_0x60c555 - 0x78, 0x0]);
            _0x4c821d.append('g').call(d3.axisLeft(_0x592a29));

            function _0x5966c0() {
                return d3.axisLeft(_0x592a29).ticks(0xa);
            }
            _0x4c821d.append('g').attr('class', 'grid').call(_0x5966c0().tickSize(-_0x43e46c + 0x50).tickFormat(''));
            let _0x56b01d = d3.scaleBand().domain([0x0, 0x1, 0x2, 0x3, 0x4, 0x5, 0x6, 0x7, 0x8]).range([0x0, _0x43e46c - 0x50]).padding(0.4);
            _0x4c821d.append('g').attr('transform', 'translate(' + 0x0 + ',' + (_0x60c555 - 0x78) + ')').call(d3.axisBottom(_0x56b01d).tickFormat(_0x396259 => {
                return _0x12a276.loadings[_0x396259].name.substring(0x0, 0x15);
            })).selectAll('text').style('text-anchor', 'end').attr('dx', '8px').attr('dy', '12px').attr('transform', () => {
                return 'rotate(-30)';
            });
            let _0x23ad03 = _0x4c821d.selectAll('rect').data(_0x12a276.loadings).enter().append('rect').attr('x', (_0x22ee11, _0x396259) => _0x56b01d(_0x396259)).attr('y', _0x60c555 - 0x78).attr('width', _0x56b01d.bandwidth()).attr('fill', 'url(#vyellowgrad)').attr('height', 0x0).transition().duration(0x2ee).attr('y', _0x5cd2b2 => _0x592a29(_0x5cd2b2.val)).attr('height', _0xe3f41e => _0x60c555 - 0x78 - _0x592a29(_0xe3f41e.val)).attr('cursor', 'pointer');
            _0x4c821d.selectAll('rect').on('mouseenter', function (_0xa8480b, _0x396259) {
                _0x4c821d.append('text').attr('class', 'tooltip').attr('x', _0x56b01d(_0x396259) + _0x56b01d.bandwidth() / 0x2).attr('y', _0x592a29(_0xa8480b.val) - 0xc).attr('text-anchor', 'middle').text(parseFloat(_0xa8480b.val).toFixed(0x2));
            });
            _0x4c821d.selectAll('rect').on('mouseleave', function (_0x444e4e, _0x396259) {
                d3.selectAll('.tooltip').remove();
            });
            _0x5c1a54.append('text').attr('x', _0x43e46c / 0x2).attr('y', 0x19).style('font-size', '16px').attr('text-anchor', 'middle').text('Squared Loadings');
        }
        if (_0x50a718 === 'Principal Component Analysis') {
            $('#pca_container').css('visibility', 'visible');
            _0x13a97a();
            _0x79b911();
            _0x15d17d();
        } else if (_0x50a718 === 'Waterfall Charts') {
            $('#waterfall_container').css('visibility', 'visible');
            _0x221bc6();
        } else if (_0x50a718 === 'Intrinsic Dimensionality') {
            $('#id_container').css('visibility', 'visible');
            _0x2a6a41();
        } else if (_0x50a718 === 'Correlation') {
            $('#corr_container').css('visibility', 'visible');
            _0x3bf6f4();
        } else if (_0x50a718 === 'Squared Loadings') {
            $('#loadings_container').css('visibility', 'visible');
            _0x55c3e9();
        }
        _0x3498f1.on('change', function () {
            $('.analysis_hide').css('visibility', 'hidden');
            _0x50a718 = this.value;
            _0x127565(_0x360c15, _0xa7188, _0x2bfc1a, _0x282489, _0x37361a, _0x12a276);
        });
    }

    function _0x40d2a6(_0x790b2f, _0x19ec79, _0x43343d, _0x45f9cf) {
        $('.clear').empty();

        function _0x5bde88() {
            let _0x406ee4 = $('#rankings_chart'),
                _0x40ba93 = _0x406ee4.height(),
                _0x2f8962 = _0x406ee4.width(),
                _0x555769 = 0x14;
            _0x2f8962 = _0x2f8962 - 0x2 * _0x555769;
            _0x40ba93 = _0x40ba93 - 0x2 * _0x555769;
            _0x406ee4.empty();
            let _0x25a1af = _0x45f9cf[_0x13bd2d][_0x5a812a],
                _0x5a6c0c = _0x25a1af.countries,
                _0x20de73 = _0x25a1af.values;
            let _0x54cfa8 = d3.select('#rankings_chart').append('svg').attr('height', _0x40ba93 * 0x64 / _0x406ee4.height() + '%').attr('width', _0x2f8962 * 0x64 / _0x406ee4.width() + '%').attr('transform', 'translate(' + _0x555769 + ',' + _0x555769 + ')');
            const _0x2d5817 = _0x54cfa8.append('g').attr('transform', 'translate(50, 50)');
            let _0x11287c = d3.scaleLinear().domain([Math.floor(d3.min(_0x20de73)), Math.ceil(d3.max(_0x20de73))]).range([_0x40ba93 - 0x78, 0x0]);
            _0x2d5817.append('g').call(d3.axisLeft(_0x11287c));

            function _0x529c50() {
                return d3.axisLeft(_0x11287c).ticks(0xa);
            }
            _0x2d5817.append('g').attr('class', 'grid').call(_0x529c50().tickSize(-_0x2f8962 + 0x50).tickFormat(''));
            let _0x398bb0 = d3.scaleBand().domain([0x0, 0x1, 0x2, 0x3, 0x4, 0x5, 0x6, 0x7, 0x8, 0x9]).range([0x0, _0x2f8962 - 0x50]).padding(0.4);
            _0x2d5817.append('g').attr('transform', 'translate(' + 0x0 + ',' + (_0x40ba93 - 0x78) + ')').call(d3.axisBottom(_0x398bb0).tickFormat(_0x49b529 => {
                return _0x5a6c0c[_0x49b529];
            })).selectAll('text').style('text-anchor', 'end').attr('dx', '8px').attr('dy', '12px').attr('transform', () => {
                return 'rotate(-30)';
            });
            let _0x2d8364 = _0x2d5817.selectAll('rect').data(_0x20de73).enter().append('rect').attr('x', (_0x5309e1, _0x1f450b) => _0x398bb0(_0x1f450b)).attr('y', _0x40ba93 - 0x78).attr('width', _0x398bb0.bandwidth()).attr('fill', 'url(#vbluegrad)').attr('height', 0x0).transition().duration(0x2ee).attr('y', _0x403b1d => _0x11287c(_0x403b1d)).attr('height', _0x5e45a2 => _0x40ba93 - 0x78 - _0x11287c(_0x5e45a2)).attr('cursor', 'pointer');
            _0x2d5817.selectAll('rect').on('mouseenter', function (_0x164d50, _0x198c13) {
                _0x2d5817.append('text').attr('class', 'tooltip').attr('x', _0x398bb0(_0x198c13) + _0x398bb0.bandwidth() / 0x2).attr('y', _0x11287c(_0x164d50) - 0xc).attr('text-anchor', 'middle').text(parseFloat(_0x20de73[_0x198c13]).toFixed(0x2));
            });
            _0x2d5817.selectAll('rect').on('mouseleave', function (_0x3be1e3, _0x313699) {
                d3.selectAll('.tooltip').remove();
            });
            _0x54cfa8.append('text').attr('x', _0x2f8962 / 0x2).attr('y', 0x19).style('font-size', '16px').attr('text-anchor', 'middle').text(_0x5a812a);
        }
        _0x5bde88();
        $('input[name=rankings_radio]').on('change', function () {
            _0x5a812a = this.value;
            _0x5bde88();
        });
        $('#year_selection').on('change', function () {
            _0x13bd2d = parseInt(this.value);
            if (_0x13bd2d >= 0x7d5 && _0x13bd2d <= 0x7e2) _0x5bde88();
        });
    }

    function _0x31f06a(_0xfb3bc5, _0x426a4b, _0x1c5ee1, _0x38dc33, _0x3dfcc8, _0x1281c4) {
        _0x11f416.show();
        _0x1f1494(_0xfb3bc5, _0x426a4b, _0x1c5ee1, _0x38dc33, _0x3dfcc8, _0x1281c4);
        _0x999110.on('transitionstart', function () {
            $('.thumb').hide();
        });
        _0x999110.on('transitionend', function () {
            _0x4103dc.destroy();
            _0x3e9af4.stop();
            _0x1f1494(_0xfb3bc5, _0x426a4b, _0x1c5ee1, _0x38dc33, _0x3dfcc8, _0x1281c4);
        });
        _0x999110.on('switched', function () {
            _0x4103dc.destroy();
            _0x3e9af4.stop();
            _0x1f1494(_0xfb3bc5, _0x426a4b, _0x1c5ee1, _0x38dc33, _0x3dfcc8, _0x1281c4);
        });
        window.onresize = function () {
            _0x4103dc.destroy();
            _0x3e9af4.stop();
            _0x1f1494(_0xfb3bc5, _0x426a4b, _0x1c5ee1, _0x38dc33, _0x3dfcc8, _0x1281c4);
        };
    }

    function _0xa2f7aa() {
        $('.clear').empty();
    }

    function _0x34d6dd(_0x578ec5) {
        let _0x49fe53 = $('#content');
        _0x4e31d3 = true;
        _0x999110.trigger('transitionstart');
        _0x999110.css('left', '355px');
        $('#drawer').width('300px');
        _0x49fe53.empty();
        _0x49fe53.hide();
        _0x49fe53.append(_0x578ec5());
        _0x49fe53.fadeIn(0x12c);
        $('#close_drawer').show();
    }

    function _0x3faf3b() {
        let _0x45342b = $('#content');
        _0x4e31d3 = false;
        $('#close_drawer').hide();
        _0x45342b.fadeOut(0x12c);
        $('#drawer').width('0px');
        _0x45342b.empty();
        _0x999110.trigger('transitionstart');
        _0x999110.css('left', '55px');
    }
    $('#close_drawer').on('click', function () {
        _0x3faf3b();
    });
    $('#about').on('click', function () {
        if (!_0x4e31d3) _0x34d6dd(_0x32892a);
        if (_0x11f416.attr('id') !== 'about_body') {
            _0x34d6dd(_0x32892a);
            _0x11f416.fadeOut(0x12c);
            _0x11f416 = $('#about_body');
            _0x11f416.fadeIn(0x12c);
            _0x1f1494 = _0xa2f7aa;
            _0x999110.trigger('switched');
        }
    });
    $('#earth').on('click', function () {
        if (!_0x4e31d3) _0x34d6dd(_0x1d8c9a);
        if (_0x11f416.attr('id') !== 'earth_body') {
            _0x34d6dd(_0x1d8c9a);
            _0x11f416.fadeOut(0x12c);
            _0x11f416 = $('#earth_body');
            _0x11f416.fadeIn(0x12c);
            _0x1f1494 = _0x1f4569;
            _0x999110.trigger('switched');
        }
    });
    $('#charts').on('click', function () {
        if (!_0x4e31d3) _0x34d6dd(_0x5c2963);
        if (_0x11f416.attr('id') !== 'charts_body') {
            _0x34d6dd(_0x5c2963);
            _0x11f416.fadeOut(0x12c);
            _0x11f416 = $('#charts_body');
            _0x11f416.fadeIn(0x12c);
            _0x1f1494 = _0x201ca4;
            _0x999110.trigger('switched');
        }
    });
    $('#analysis').on('click', function () {
        if (!_0x4e31d3) _0x34d6dd(_0x5172db);
        if (_0x11f416.attr('id') !== 'analysis_body') {
            _0x34d6dd(_0x5172db);
            _0x11f416.fadeOut(0x12c);
            _0x11f416 = $('#analysis_body');
            _0x11f416.fadeIn(0x12c);
            _0x1f1494 = _0x127565;
            _0x999110.trigger('switched');
        }
    });
    $('#rankings').on('click', function () {
        if (!_0x4e31d3) _0x34d6dd(_0x1f9a2d);
        if (_0x11f416.attr('id') !== 'rankings_body') {
            _0x34d6dd(_0x1f9a2d);
            _0x11f416.fadeOut(0x12c);
            _0x11f416 = $('#rankings_body');
            _0x11f416.fadeIn(0x12c);
            _0x1f1494 = _0x40d2a6;
            _0x999110.trigger('switched');
        }
    });

    function _0x32892a() {
        let _0x1ea179 = $('<div></div>'),
            _0x19dbcb = $("<div class='content_header'>About</div>"),
            _0x35b9db = $('<img id=\'about_drawer_logo\' src=\'./images/about_dark.png\' alt=\'World Happiness\'/>'),
            _0x508b87 = $("<div id='about_drawer_body'>CSE-564 Visualization<br/>Stony Brook University</div>");
        _0x1ea179.append(_0x19dbcb);
        _0x1ea179.append(_0x35b9db);
        _0x1ea179.append(_0x508b87);
        return _0x1ea179;
    }

    function _0x1d8c9a() {
        let _0x2c8800 = $('<div></div>'),
            _0xde5f2c = $("<div class='content_header'>Earth View</div>"),
            _0x6bd2fd = $("<div id='earth_attribute_selection'></div>");
        let _0x599a9d = ['Life Ladder', 'Log GDP per capita', 'Social Support', 'Healthy Life Expectancy at Birth', 'Freedom to make Life Choices', 'Generosity', 'Perceptions of Corruption', 'Positive Affect', 'Negative Affect'];
        for (let _0x16118a = 0x0; _0x16118a < _0x599a9d.length; _0x16118a++) _0x6bd2fd.append("<label><input type='radio' name='earth_radio' value='" + _0x599a9d[_0x16118a] + '\'>' + _0x599a9d[_0x16118a] + '</label><br/>');
        _0x2c8800.append(_0xde5f2c);
        _0x2c8800.append(_0x6bd2fd);
        _0x2c8800.find("input[name=earth_radio][value='" + _0xa80439 + '\']').attr('checked', 'checked');
        return _0x2c8800;
    }

    function _0x5c2963() {
        let _0x399c8a = $('<div></div>'),
            _0x57e5d7 = $("<div class='content_header'>Featured Charts</div>"),
            _0x485cbd = $("<div id='feature_charts_selection'></div>");
        _0x485cbd.append('<input id=\'first_country\' placeholder=\'First Country\' autocomplete=\'disabled\'>');
        _0x485cbd.append("<input id='second_country' placeholder='Second Country' autocomplete='disabled'>");
        _0x399c8a.append(_0x57e5d7);
        _0x399c8a.append(_0x485cbd);
        return _0x399c8a;
    }

    function _0x5172db() {
        let _0x575aaf = $('<div></div>'),
            _0x3858f3 = $("<div class='content_header'>Analysis</div>"),
            _0x2134cf = $("<div id='analysis_selection'></div>");
        let _0x1e7fb8 = ['Principal Component Analysis', 'Waterfall Charts', 'Intrinsic Dimensionality', 'Correlation', 'Squared Loadings'];
        for (let _0x54bb9d = 0x0; _0x54bb9d < _0x1e7fb8.length; _0x54bb9d++) _0x2134cf.append("<label><input type='radio' name='analysis_radio' value='" + _0x1e7fb8[_0x54bb9d] + '\'>' + _0x1e7fb8[_0x54bb9d] + '</label><br/>');
        _0x575aaf.append(_0x3858f3);
        _0x575aaf.append(_0x2134cf);
        _0x575aaf.find("input[name=analysis_radio][value='" + _0x50a718 + '\']').attr('checked', 'checked');
        return _0x575aaf;
    }

    function _0x1f9a2d() {
        let _0xf0bc6f = $('<div></div>'),
            _0x2500c1 = $("<div class='content_header'>Rankings</div>"),
            _0x5a4265 = $('<div id=\'rankings_attribute_selection\'></div>'),
            _0x50d154 = $("<div id='rankings_year_selection'></div>"),
            _0x1bd323 = $("<span id='year_label'>Year:</span>"),
            _0x4ec8af = $("<input id='year_selection' type='number' min='2005' max='2018' value='" + _0x13bd2d + '\'>');
        let _0x159383 = ['Life Ladder', 'Log GDP per capita', 'Social Support', 'Healthy Life Expectancy at Birth', 'Freedom to make Life Choices', 'Generosity', 'Perceptions of Corruption'];
        for (let _0x1d263d = 0x0; _0x1d263d < _0x159383.length; _0x1d263d++) _0x5a4265.append("<label><input type='radio' name='rankings_radio' value='" + _0x159383[_0x1d263d] + '\'>' + _0x159383[_0x1d263d] + '</label><br/>');
        _0xf0bc6f.append(_0x2500c1);
        _0x50d154.append(_0x1bd323);
        _0x50d154.append(_0x4ec8af);
        _0xf0bc6f.append(_0x5a4265);
        _0xf0bc6f.append(_0x50d154);
        _0xf0bc6f.find("input[name=rankings_radio][value='" + _0x5a812a + '\']').attr('checked', 'checked');
        return _0xf0bc6f;
    }
});
