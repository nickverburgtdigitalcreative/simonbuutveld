import * as d3 from 'd3'
import ScrollMagic from './ScrollMagic'
// import ScrollMagic from 'scrollmagic'
import { TimelineMax, Linear, Power1, TimelineLite } from 'gsap'
import { CountUp } from 'countup.js'

export function viewportWidth(){
    return window.innerWidth || document.documentElement.clientWidth;
}

export function innerPageSlideUp() {
    const page = document.getElementsByClassName('page')
    const alphaDark = document.getElementsByClassName('alpha_dark')
    page[0].classList.add('slideup')
    alphaDark[0].classList.add('slideup')

    checkOrientation()

    window.addEventListener('resize', checkOrientation)

}

function checkOrientation(){
    if (window.orientation === undefined){
        return
    }
    if (window.orientation === 0) {
        document.body.classList.remove('landscape')
        document.body.classList.add('portrait')
    } else {
        document.body.classList.add('landscape')
        document.body.classList.remove('portrait')
    }
}

function calcPercent(percent) {
    return [percent, 100 - percent];
}

export function drawDonutChart(element, percent, width, height, text_y, radiusSize, svgClass) {

    const duration = 4000
    width = typeof width !== 'undefined' ? width : 290
    height = typeof height !== 'undefined' ? height : 290
    text_y = typeof text_y !== 'undefined' ? text_y : "-.10em"

    var dataset = {
        lower: calcPercent(0),
        upper: calcPercent(percent)
    },
        radius = Math.min(width, height) / radiusSize,
        pie = d3.pie().sort(null),
        format = d3.format(".0%")
    var arc = d3.arc().innerRadius(radius - 30).outerRadius(radius);
    var svg = d3.select(element)
        .append("svg")
        .attr("width", width)
        .attr("height", height)
        .attr("class", svgClass)
        .append("g")
        .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
    var path = svg
        .selectAll("path")
        .data(pie(dataset.lower))
        .enter()
        .append("path")
        .attr("class", function (d, i) {
            return "color" + i
        })
        .attr("d", arc).each(function (d) {
            this._current = d
        });
    // var text = svg.append("text").attr("text-anchor", "middle").attr("dy", text_y);
    
    
    if (typeof (percent) === "string") {
        // text.text(percent)
    } else {
        var progress = 0;
        var timeout = setTimeout(function () {
            clearTimeout(timeout);
            path = path.data(pie(dataset.upper));
            path.transition().duration(duration).attrTween("d", function (a) {
                var i = d3.interpolate(this._current, a);
                var i2 = d3.interpolate(progress, percent)
                this._current = i(0);
                return function (t) {
                    // text.text(format(i2(t) / 100));
                    return arc(i(t))
                }
            })
        }, 200)
    }
};

export function drawDonutChartTrigger(donut1, donut2,  radius, svgClass) {
    const ctrl = new ScrollMagic.Controller();
    const time = 1;
    const graph_s03g02tl = new TimelineMax();
    graph_s03g02tl.pause(0);
    graph_s03g02tl.to("#donutTexts", time, { autoAlpha: 1, ease: Linear.easeNone }, "+=0.5");
    
    let donut1Text = new CountUp('donutBg1', 16, { duration: 10, suffix: '%'})
    let donut2Text = new CountUp('donutBg2', 31, { duration: 10, suffix: '%'})
    new ScrollMagic.Scene({ 
        duration: "100%", 
        triggerElement: "#section3_graph2", 
        reverse: !1 
    })
    .on("enter", function (e) {
        graph_s03g02tl.play();
        document.getElementById('donut1').classList.add('show')
        document.getElementById('donut2').classList.add('show')
        drawDonutChart('#donut1', 16, donut1, donut1, ".35em", radius, svgClass);
        drawDonutChart('#donut2', 31, donut2, donut2, ".35em", radius, svgClass);
        donut1Text.start()
        donut2Text.start()
    }).addTo(ctrl);
}

export function section2_graph() {
    const controller = new ScrollMagic.Controller()
    const time = 0.5
    const graph_s02g01tl = new TimelineMax()

    graph_s02g01tl.pause();
    graph_s02g01tl.to("#r01", time, {autoAlpha: 0, height: 70, width: 70, ease: Power1.easeOut}, "+=0.25");
    graph_s02g01tl.to("#r02", time, {autoAlpha: 0, height: 70, width: 70, ease: Power1.easeOut}, "+=0.25");
    graph_s02g01tl.to("#r03", time, {autoAlpha: 0, height: 70, width: 70, ease: Power1.easeOut}, "+=0.25");
    graph_s02g01tl.to("#r04", time, {autoAlpha: 0, height: 70, width: 70, ease: Power1.easeOut}, "+=0.25");
    graph_s02g01tl.to("#r05", time, {autoAlpha: 0, height: 70, width: 70, ease: Power1.easeOut}, "+=0.25");
    graph_s02g01tl.to("#r06", time, {autoAlpha: 0, height: 70, width: 70, ease: Power1.easeOut}, "+=1");
    graph_s02g01tl.to("#r07", time, {autoAlpha: 0, height: 70, width: 70, ease: Power1.easeOut}, "-=0.25");
    graph_s02g01tl.to("#r08", time, {autoAlpha: 0, height: 70, width: 70, ease: Power1.easeOut}, "-=0.25");
    graph_s02g01tl.to("#marker", 1, { autoAlpha: 1, top: "41.33%", ease: Power1.easeOut })
    graph_s02g01tl.to("#marker", 1, { top: "16%", ease: Power1.easeInOut }, "+=2")
    graph_s02g01tl.to("#line_grey", 3, { width: "95%", ease: Linear.easeNone })
    graph_s02g01tl.to("#legend", 1, { autoAlpha: 1, ease: Linear.easeNone }, "-=3")
    graph_s02g01tl.to("#bg02", time, { autoAlpha: 1, ease: Linear.easeNone }, "+=0.5")

    new ScrollMagic.Scene({
        duration: "100%",
        triggerElement: "#section2_graph1",
        reverse: false,
        offset: -250,
    })
        .on("enter", function (e) {
            graph_s02g01tl.play();
        })
        .addTo(controller);
};

export function section3_quadrant() {
    const controller = new ScrollMagic.Controller();
    const time = 0.5;
    const graph_s03g01tl = new TimelineMax();

    graph_s03g01tl.pause(0);
    graph_s03g01tl.to("#dot01", time, { autoAlpha: 1, ease: Linear.easeNone }, "+=0.5");
    graph_s03g01tl.to("#dot02", time, { autoAlpha: 1, ease: Linear.easeNone }, "+=0.3");
    graph_s03g01tl.to("#dot03", time, { autoAlpha: 1, ease: Linear.easeNone }, "+=0.3");
    graph_s03g01tl.to("#dot04", time, { autoAlpha: 1, ease: Linear.easeNone }, "+=0.3");
    graph_s03g01tl.to("#dot05", time, { autoAlpha: 1, ease: Linear.easeNone }, "+=0.3");
    graph_s03g01tl.to("#dot06", time, { autoAlpha: 1, ease: Linear.easeNone }, "+=0.3");
    graph_s03g01tl.to("#dot07", time, { autoAlpha: 1, ease: Linear.easeNone }, "+=0.3");
    graph_s03g01tl.to("#dot08", time, { autoAlpha: 1, ease: Linear.easeNone }, "+=0.3");
    graph_s03g01tl.to("#quarter01", time, { autoAlpha: 1, ease: Linear.easeNone }, "+=2");
    graph_s03g01tl.to("#quarter02", time, { autoAlpha: 1, ease: Linear.easeNone }, "+=0.3");
    graph_s03g01tl.to("#quarter03", time, { autoAlpha: 1, ease: Linear.easeNone }, "+=0.3");
    graph_s03g01tl.to("#quarter04", time, { autoAlpha: 1, ease: Linear.easeNone }, "+=0.3");
    graph_s03g01tl.to("#quarter04", 0.075, { autoAlpha: 0.5, ease: Linear.easeNone }, "+=1");
    graph_s03g01tl.to("#quarter04", 0.075, { autoAlpha: 1, ease: Linear.easeNone });
    graph_s03g01tl.to("#quarter04", 0.075, { autoAlpha: 0.5, ease: Linear.easeNone });
    graph_s03g01tl.to("#quarter04", 0.075, { autoAlpha: 1, ease: Linear.easeNone });
    graph_s03g01tl.to("#quarter04", 0.075, { autoAlpha: 0.5, ease: Linear.easeNone });
    graph_s03g01tl.to("#quarter04", 0.075, { autoAlpha: 1, ease: Linear.easeNone });
    graph_s03g01tl.to("#quarter04", 0.075, { autoAlpha: 0.5, ease: Linear.easeNone });
    graph_s03g01tl.to("#quarter04", 0.075, { autoAlpha: 1, ease: Linear.easeNone });
    new ScrollMagic.Scene({
        duration: "100%",
        triggerElement: "#section3_graph1",
        reverse: !1
    }).on("enter", function (e) {
        graph_s03g01tl.play()
    }).addTo(controller);
}

export function section3_graph3() {
    const controller = new ScrollMagic.Controller();
    const time = 0.5;
    const graph_s03g03tl = new TimelineMax();
    graph_s03g03tl.pause(0);
    graph_s03g03tl.to("#ring", time, { autoAlpha: 1, ease: Linear.easeNone }, "+=0.5");
    new ScrollMagic.Scene({
        duration: "100%",
        triggerElement: "#section3_graph3",
        reverse: !1
    }).on("enter", function (e) {
        graph_s03g03tl.play()
    }).addTo(controller);
}

export function section4Animation01() {
    const controller = new ScrollMagic.Controller();
    // const s4_cars_tl = document.getElementById('s4_cars');
    const s4_cars_tl = new TimelineMax();
    const time = 0.5;
    s4_cars_tl.pause();
    s4_cars_tl.to("#s4_cars_redL", time, { autoAlpha: 1 }, "+=1");
    s4_cars_tl.to("#s4_cars_redL", time, { autoAlpha: 0 }, "+=1");
    s4_cars_tl.to("#s4_cars_redR", time, { autoAlpha: 1 });
    s4_cars_tl.to("#s4_cars_redR", time, { autoAlpha: 0 }, "+=1");
    s4_cars_tl.to("#s4_cars_redL", time, { autoAlpha: 1 });
    s4_cars_tl.to("#s4_cars_redL", time, { autoAlpha: 0 }, "+=1");
    s4_cars_tl.to("#s4_cars_redR", time, { autoAlpha: 1 });
    s4_cars_tl.to("#s4_cars_redR", time, { autoAlpha: 0 }, "+=1");
    s4_cars_tl.to("#s4_cars_redL", time, { autoAlpha: 1 });
    s4_cars_tl.to("#s4_cars_redL", 0.075, { autoAlpha: 0 }, "+=1");
    s4_cars_tl.to("#s4_cars_redL", 0.075, { autoAlpha: 1 });
    s4_cars_tl.to("#s4_cars_redL", 0.075, { autoAlpha: 0 });
    s4_cars_tl.to("#s4_cars_redL", 0.075, { autoAlpha: 1 });
    s4_cars_tl.to("#s4_cars_redL", 0.075, { autoAlpha: 0 });
    s4_cars_tl.to("#s4_cars_redL", 0.075, { autoAlpha: 1 });
    s4_cars_tl.to("#s4_cars_redL", 0.075, { autoAlpha: 0 });
    s4_cars_tl.to("#s4_cars_redL", 0.075, { autoAlpha: 1 });
    s4_cars_tl.to("#s4_cars_redL", 0.075, { autoAlpha: 0 });
    s4_cars_tl.to("#s4_cars_redL", 0.075, { autoAlpha: 1 });
    new ScrollMagic.Scene({
        duration: "100%",
        triggerElement: "#s4_cars",
        reverse: false
    })
        .on("enter", function (e) {
            s4_cars_tl.play()
        }).addTo(controller);
}

export function section4Animation02() {
    const controller = new ScrollMagic.Controller();
    const s4_house_tl = new TimelineMax();
    const time = 0.5;
    s4_house_tl.pause();
    s4_house_tl.to("#s4_house_red", time, { autoAlpha: 1 }, "+=1");
    s4_house_tl.to("#s4_house_red", 0.075, { autoAlpha: 0 }, "+=1");
    s4_house_tl.to("#s4_house_red", 0.075, { autoAlpha: 1 });
    s4_house_tl.to("#s4_house_red", 0.075, { autoAlpha: 0 });
    s4_house_tl.to("#s4_house_red", 0.075, { autoAlpha: 1 });
    s4_house_tl.to("#s4_house_red", 0.075, { autoAlpha: 0 });
    s4_house_tl.to("#s4_house_red", 0.075, { autoAlpha: 1 });
    s4_house_tl.to("#s4_house_red", 0.075, { autoAlpha: 0 });
    s4_house_tl.to("#s4_house_red", 0.075, { autoAlpha: 1 });
    s4_house_tl.to("#s4_house_red", 0.075, { autoAlpha: 0 });
    s4_house_tl.to("#s4_house_red", 0.075, { autoAlpha: 1 });
    new ScrollMagic.Scene({
        duration: "100%",
        triggerElement: "#s4_house",
        reverse: false,
        offset: -100,
    })
        .on("enter", function (e) {
            s4_house_tl.play()
        }).addTo(controller)
}

export function section5Animation01() {
    const controller = new ScrollMagic.Controller();
    const robots_tl = new TimelineMax();
    const time = 0.25;
    robots_tl.pause();
    robots_tl.to("#s5_robots_redR", time, { autoAlpha: 1 }, "+=1");
    robots_tl.to("#s5_robots_redR", time, { autoAlpha: 0 }, "+=1");
    robots_tl.to("#s5_robots_redL", time, { autoAlpha: 1 });
    robots_tl.to("#s5_robots_redL", time, { autoAlpha: 0 }, "+=1");
    robots_tl.to("#s5_robots_redR", time, { autoAlpha: 1 });
    robots_tl.to("#s5_robots_redR", time, { autoAlpha: 0 }, "+=1");
    robots_tl.to("#s5_robots_redL", time, { autoAlpha: 1 });
    robots_tl.to("#s5_robots_redL", time, { autoAlpha: 0 }, "+=1");
    robots_tl.to("#s5_robots_redR", time, { autoAlpha: 1 });
    robots_tl.to("#s5_robots_redR", 0.075, { autoAlpha: 0 }, "+=1");
    robots_tl.to("#s5_robots_redR", 0.075, { autoAlpha: 1 });
    robots_tl.to("#s5_robots_redR", 0.075, { autoAlpha: 0 });
    robots_tl.to("#s5_robots_redR", 0.075, { autoAlpha: 1 });
    robots_tl.to("#s5_robots_redR", 0.075, { autoAlpha: 0 });
    robots_tl.to("#s5_robots_redR", 0.075, { autoAlpha: 1 });
    robots_tl.to("#s5_robots_redR", 0.075, { autoAlpha: 0 });
    robots_tl.to("#s5_robots_redR", 0.075, { autoAlpha: 1 });
    robots_tl.to("#s5_robots_redR", 0.075, { autoAlpha: 0 });
    robots_tl.to("#s5_robots_redR", 0.075, { autoAlpha: 1 });
    new ScrollMagic.Scene({
        duration: "100%",
        triggerElement: "#s5_robots",
        reverse: false
    })
        .on("enter", function (e) {
            robots_tl.play()
        }).addTo(controller);
}

export function section5Video1() {
    const controller = new ScrollMagic.Controller();
    const video = document.getElementById('section5_art')
    
    new ScrollMagic.Scene({
        duration: "100%",
        triggerElement: "#section5_art",
        reverse: false
    })
        .on('enter', function (e) {
            // video.play()
            let myVideo = video.play()
            if (myVideo !== undefined){
                myVideo.then(_ => {})
                .catch(error => console.log('not able to play the video: ', error))
            }
        }).addTo(controller)  
}

export function bodyHeight() {

    const winH = window.innerHeight;
    const winH4 = window.innerHeight / 4;
    const page = document.getElementsByClassName('page')
    const logo = document.getElementById('logo')
    const subpage = document.getElementById('subpage')

    if (page.length > 0){
        const pageH = page[0].offsetHeight
        const logoP = logo.offsetHeight * 1.5;
        const bodyCalc = winH + pageH - winH4 + logoP;
    
        document.body.classList.add('sub')
        document.body.style.height = bodyCalc + 'px'

        if  ( 
            (subpage && window.innerWidth <= 667) || 
            ( window.orientation === 90 || window.orientation === -90 ) 
        ){
            subpage.style.height = bodyCalc + 'px'
        }
    }    
    

    window.addEventListener('resize', bodyHeight);

}

export function updateCurrentSectionClass(current) {
    const currentSection = `section-${current}`
    const allSections = Array.from(document.getElementsByClassName('section'))
    // const allVideos = Array.from(document.getElementsByTagName('video'))
    // const allBackgroundImage = Array.from(document.getElementsByClassName('background_image'))

    allSections.forEach(item => item.classList.remove('show'))
    // allBackgroundImage.forEach(item => item.classList.remove('show'))
    // allVideos.forEach(item => item.classList.remove('hide'))

    if ('undefined' !== typeof(current)){
        setTimeout(() => {
            document.getElementById(currentSection).classList.add('show')
        }, 1000);
    }
}

export function dotAnimation(){
    const time = 0.5
    const el = new TimelineLite({ onComplete: function() {
        this.restart() 
    }})
    el.to(".e1", time, { autoAlpha: 0 }, "+=0.5");
    el.to(".e2", time, { autoAlpha: 0 }, "-=0.25");
    el.to(".e3", time, { autoAlpha: 0 }, "-=0.25");
    el.to(".e1", time, { autoAlpha: 1 });
    el.to(".e2", time, { autoAlpha: 1 }, "-=0.25");
    el.to(".e3", time, { autoAlpha: 1 }, "-=0.25");
}

// Video playback methods

function videoPlayback(e, vidEl) {

    let vidStart
    let vidReset

    if (!vidEl) return;

    // Play Video
    if ( ( e.state === "DURING" && e.type === "start") || ( e.state === "DURING" && e.type === "end") ) {

        vidStart = setTimeout(function(){

            let myVideo = vidEl.play()
            vidEl.classList.add('show')
            
            if (myVideo !== undefined){
                myVideo.then(_ => {})
                .catch(error => console.log('not able to play the video: ', error))
            }
            
            vidEl.addEventListener('ended', (video) => {
                video.target.classList.remove('show')
                video.target.classList.add('hide')
                if (video.target.nextSibling){
                    video.target.nextSibling.classList.add('show')
                }
                
            }, false)
            clearTimeout(vidStart);
        }, 2500);

    }
    // Reset Video
    if ( ( e.state === "AFTER" && e.type === "end") || ( e.state === "BEFORE" && e.type === "start") ) {
        vidReset = setTimeout(function(){
            vidEl.classList.remove('show')
            vidEl.classList.remove('hide')

            console.log(vidEl)
            
            if (vidEl.nextSibling){
                vidEl.nextSibling.classList.remove('show')
            }
            
            vidEl.pause();
            vidEl.currentTime = 0;
            clearTimeout(vidReset);
        }, 600);

    }

}

export function videosAnimation(sectionId) {
    var controller = new ScrollMagic.Controller();
    var time = 1;

    var animation = new TimelineMax({paused: true});
    animation.to("#section-" + sectionId + " .art_videos", time, {autoAlpha: 1});
    const videoId = sectionId - 2
    var index_video = document.getElementById('video_' + videoId);
    new ScrollMagic.Scene({triggerElement: "#section-" + sectionId, duration: '100%'})
    .addTo(controller)
    .on("start end", function (e) {
        
        videoPlayback(e, index_video);

    })
    .setTween(animation.play());

    
}

export function homepageAnimation() {
    const controller = new ScrollMagic.Controller()
    
    const mobileHomeSections = document.getElementsByClassName('section_mobile')

    if (mobileHomeSections){
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
        })
        Array.from(mobileHomeSections).forEach((e) => {
            new ScrollMagic.Scene({
                triggerElement: '#' + e.id,
            })
            .setClassToggle(e, 'show')
            .addTo(controller)
        });
    }
};