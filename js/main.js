$(function(){
    var params;
    $('#planetButton').on('click',function(){
        params ={
            el: '#container',
            data: {
                planets : getPlanets()
            }
        };
        renderRactive('planets.html',"ShowPlanets",params);
    });

    $('#continentButton').on('click',function(){
        params = {
            el: '#container',
            data: {
                continents : getContinents()
            }
        };
        renderRactive('continent.html',"ShowContinents",params);
    });


});

function renderRactive(component,action,params){
    var myApp
     Ractive.load( component ).then ( function ( action ){
        myApp = new action(params);
     });
}

function getPlanets(){
     var planets =[
        {
            name : "Mercury",
            moon : 0
        },
        {
            name : "Venus",
            moon : 0
        },
        {
            name : "Earth",
            moon : 1
        },
        {
            name : "Mars",
            moon : 2
        },
        {
            name : "Jupiter",
            moon : 67
        },
        {
            name : "Saturn",
            moon : 62
        },
        {
            name : "Uranus",
            moon : 27
        },
        {
            name : "Neptune",
            moon : 14
        }
    ]
    return planets;
}

function getContinents(){
    var continents = [
        {
            name : "Asia",
            countries : 47,
            population : 3674000000
        },
        {
             name : "Africa",
             countries : 54,
             population : 778000000
        },
        {
            name : "North America",
            countries : 23,
            population : 483000000
        },
        {
            name : "South America",
            countries : 12,
            population : 342000000
        },
        {
            name : "Antarctica",
            countries : 0,
            population : 0
        },
        {
            name : "Europe",
            countries : 43,
            population : 342000000
        },
        {
            name : "Australia and Oceania",
            countries : 14,
            population : 31000000
        }
    ]
    return continents;
}