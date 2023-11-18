export const filterData = [ {name:"Ride",image: require('../../assets/ride.png'), id:"0"},
                            {name:"Bike",image:require("../../assets/food.png"),id:"1"},
                            {name:"Rickshaw",image:require("../../assets/package.png"),id:"2"},
                            {name:"Reserve",image:require("../../assets/reserve.png"),id:"3"}
                          
                           ];


export const rideData =[
    {street:"University of Narowal    ",area:"Behbalwale shakargarh road, Narowal, Punjab, Pakistan",id:"0"},
    {street:"Regional Passport Office Narowal    ",area:"Kachehri Road, Narowal, Punjab, Pakistan",id:"1"},
    {street:"Z F C(Zafarwal Fried Chicken)    ",area:" Circular Rd, Narowal, Punjab 54000, Pakistan",id:"2"},
    {street:"Narowal railway station    ",area:" Mohalla Ganj Hassanabad, Narowal, Punjab, Pakistan",id:"3"},
    {street:"Narowal Bus Stand    ",area:"Circular Rd, Mohalla Chiraghpura, Narowal, Punjab, Pakistan",id:"4"},
];

export const carTypeData =[
    {title:"Popular",
     data:[
    {name:"Uber Go",group :2, price:7,image: require('../../assets/uberGo.png'),note:"Affordable.compact rides",promotion:5 ,time:"20:19",id:"0"},
    {name:"UberX",group :3, price:5.5,image: require('../../assets/uberX.png'),note:"Affordable everyday trips",promotion:0,time:"20:20", id:"1"},
    {name:"Connect", group:0, price:12.6,image: require('../../assets/uberConnect.png'),note:"Send and receive packages",promotion:10,time:"20:33", id:"2"}
     ]
    },

    {title:"Premium",
    data:[
   {name:"Black",group :3, price:17.4,image: require('../../assets/uberBlack.png'),note:"Premium trips in luxury cars",promotion:0,time:"20:31",id:"3"},
   {name:"Van", group:6, price:22.3,image: require('../../assets/uberVan.png'),note:"Rides for groups up to 6",promotion:12,time:"20:31", id:"4"},
    ]
   },

   {title:"More",
   data:[
  {name:"Assist",group :3, price:35.3,image: require('../../assets/uberAssist.png'),note:"Special assistance from certified drivers",promotion:26,time:"20:25",id:"5"},
   ]
  },

];

 export const requestData = [{
    name:"For Me",id:0
},
{
    name:"For Someone",id:1
}

]

export const rideOptions = [{name:"Personal",icon:"account", id:"0"},
{name:"Business",icon:"briefcase", id:"1"},  

];

export const paymentOptions = [{image:require('../../assets/visaIcon.png'),text:"Visa ...0476"},
                                {image:require('../../assets/cashIcon.png'),text:"Cash"}]

export const availableServices = ["Uber Go","UberX","Uber connect","Uber Black","Uber Van","Uber Assist"]

export const carsAround = [{latitude:32.10197000,longitude:74.87303000},
    {latitude:32.10197000,longitude:74.87303000},
    {latitude:-26.202424,longitude:28.236612},
    {latitude:-26.208565,longitude:28.237191},
    {latitude:-26.203598,longitude:28.239509},
]