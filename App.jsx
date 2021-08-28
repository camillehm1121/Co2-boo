import "./App.css";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Home1 from "./components/Home1";
import Home22 from "./components/Home22";
import Breakfast from "./components/Breakfast";
import Home32 from "./components/Home32";
import Dates from "./components/Dates";
import Lunch from "./components/Lunch";
import Home2 from "./components/Home2";
import Summary1 from "./components/Summary1";
import Summary from "./components/Summary";
import Home3 from "./components/Home3";
import Home4 from "./components/Home4";
import MyStats from "./components/MyStats";
import CreateAccount from "./components/CreateAccount";
import HomeProcessedVegetable1 from "./components/HomeProcessedVegetable1";
import HomeDairy from "./components/HomeDairy";
import HomeProteinFood from "./components/HomeProteinFood";
import OnBoardingCompare from "./components/OnBoardingCompare";
import Dinner from "./components/Dinner";
import Home21 from "./components/Home21";
import Home31 from "./components/Home31";
import Home41 from "./components/Home41";
import HomeFreshVegetable from "./components/HomeFreshVegetable";
import SignIn from "./components/SignIn";
import HomeMeats from "./components/HomeMeats";
import HomeAddedFatAndOil from "./components/HomeAddedFatAndOil";
import HomeGrainFood from "./components/HomeGrainFood";
import OnBoardingCalculate from "./components/OnBoardingCalculate";
import FreshFruit from "./components/FreshFruit";
import Search from "./components/Search";
import HomeProcessedFruit from "./components/HomeProcessedFruit";
import Other from "./components/Other";
import HomeDrink from "./components/HomeDrink";
import HomeChocolate from "./components/HomeChocolate";
import AddNew from "./components/AddNew";
import OnBoardingAnalyze from "./components/OnBoardingAnalyze";
import Settings from "./components/Settings";
import HomeFreshFruit from "./components/HomeFreshFruit";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home-1">
          <Home1 {...home1Data} />
        </Route>
        <Route path="/home-2-2">
          <Home22 {...home22Data} />
        </Route>
        <Route path="/breakfast">
          <Breakfast {...breakfastData} />
        </Route>
        <Route path="/home-3-2">
          <Home32 {...home32Data} />
        </Route>
        <Route path="/dates">
          <Dates {...datesData} />
        </Route>
        <Route path="/lunch">
          <Lunch {...lunchData} />
        </Route>
        <Route path="/home-2">
          <Home2 {...home2Data} />
        </Route>
        <Route path="/summary-1">
          <Summary1 {...summary1Data} />
        </Route>
        <Route path="/summary">
          <Summary {...summaryData} />
        </Route>
        <Route path="/home-3">
          <Home3 {...home3Data} />
        </Route>
        <Route path="/home-4">
          <Home4 {...home4Data} />
        </Route>
        <Route path="/my-stats">
          <MyStats
            group1Props={myStatsData.group1Props}
            layer23Props={myStatsData.layer23Props}
            component1341Props={myStatsData.component1341Props}
            component1351Props={myStatsData.component1351Props}
            component1361Props={myStatsData.component1361Props}
            component10613Props={myStatsData.component10613Props}
          />
        </Route>
        <Route path="/create-account">
          <CreateAccount {...createAccountData} />
        </Route>
        <Route path="/home-processed-vegetable-1">
          <HomeProcessedVegetable1 {...homeProcessedVegetable1Data} />
        </Route>
        <Route path="/home-dairy">
          <HomeDairy {...homeDairyData} />
        </Route>
        <Route path="/home-protein-food">
          <HomeProteinFood {...homeProteinFoodData} />
        </Route>
        <Route path="/on-boarding-compare">
          <OnBoardingCompare {...onBoardingCompareData} />
        </Route>
        <Route path="/dinner">
          <Dinner {...dinnerData} />
        </Route>
        <Route path="/home-2-1">
          <Home21 {...home21Data} />
        </Route>
        <Route path="/home-3-1">
          <Home31 {...home31Data} />
        </Route>
        <Route path="/home-4-1">
          <Home41 {...home41Data} />
        </Route>
        <Route path="/home-fresh-vegetable">
          <HomeFreshVegetable {...homeFreshVegetableData} />
        </Route>
        <Route path="/sign-in">
          <SignIn {...signInData} />
        </Route>
        <Route path="/home-meats">
          <HomeMeats {...homeMeatsData} />
        </Route>
        <Route path="/home-added-fat-and-oil">
          <HomeAddedFatAndOil {...homeAddedFatAndOilData} />
        </Route>
        <Route path="/home-grain-food">
          <HomeGrainFood {...homeGrainFoodData} />
        </Route>
        <Route path="/on-boarding-calculate">
          <OnBoardingCalculate {...onBoardingCalculateData} />
        </Route>
        <Route path="/:path(|fresh-fruit)">
          <FreshFruit {...freshFruitData} />
        </Route>
        <Route path="/search">
          <Search
            text65="What are you searching for?"
            iconSearch3Props={searchData.iconSearch3Props}
            iconArrowProps={searchData.iconArrowProps}
            component1271Props={searchData.component1271Props}
            keyboardProps={searchData.keyboardProps}
          />
        </Route>
        <Route path="/home-processed-fruit">
          <HomeProcessedFruit {...homeProcessedFruitData} />
        </Route>
        <Route path="/other">
          <Other {...otherData} />
        </Route>
        <Route path="/home-drink">
          <HomeDrink {...homeDrinkData} />
        </Route>
        <Route path="/home-chocolate">
          <HomeChocolate {...homeChocolateData} />
        </Route>
        <Route path="/add-new">
          <AddNew
            text75="Couldn’t find what you looking for"
            homeHeadingProps={addNewData.homeHeadingProps}
            iconCloseProps={addNewData.iconCloseProps}
            iconArrowProps={addNewData.iconArrowProps}
            component1291Props={addNewData.component1291Props}
            buttonProps={addNewData.buttonProps}
          />
        </Route>
        <Route path="/on-boarding-analyze">
          <OnBoardingAnalyze {...onBoardingAnalyzeData} />
        </Route>
        <Route path="/settings">
          <Settings {...settingsData} />
        </Route>
        <Route path="/home-fresh-fruit">
          <HomeFreshFruit {...homeFreshFruitData} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const component941Data = {
    className: "",
};

const network4Data = {
    path67: "/img/path-67-10@1x.png",
    path68: "/img/path-68-10@1x.png",
};

const group1Data = {
    networkProps: network4Data,
};

const component9512Data = {
    overlapGroup4: "/img/rectangle-2302-13@1x.png",
    className: "",
    component941Props: component941Data,
    group1Props: group1Data,
};

const homeHeading42Data = {
    component9512Props: component9512Data,
};

const group31422Data = {
    className: "group-3143",
};

const group31312Data = {
    className: "group-3132",
};

const group3141Data = {
    group3131Props22: group31312Data,
};

const group313123Data = {
    className: "group-3132-12",
};

const group314142Data = {
    group313122Props2: group313123Data,
};

const group3131322Data = {
    className: "group-3132-24",
};

const group31412Data = {
    group31313Props44: group3131322Data,
};

const group2971Data = {
    src: "/img/path-11553-1@1x.png",
};

const iconadd2Data = {
    className: "",
};

const iconadd42Data = {
    className: "iconadd-1",
};

const iconadd3Data = {
    src: "/img/union-17@1x.png",
};

const group2758Data = {
    iconadd2Props: iconadd2Data,
    iconadd4Props2: iconadd42Data,
    iconadd3Props: iconadd3Data,
};

const component9764Data = {
    src: "/img/rectangle-2308-19@1x.png",
};

const group2734Data = {
    component9764Props: component9764Data,
};

const group2730Data = {
    group2730: "/img/rectangle-2308-24@1x.png",
    stapleFood: "Staple Food",
};

const group2732Data = {
    overlapGroup9: "/img/rectangle-2308-26@1x.png",
    grainFood: "Grain Food",
};

const group27322Data = {
    overlapGroup9: "/img/rectangle-2308-8@1x.png",
    grainFood: "Added fat and oil",
    className: "group-3405-1",
};

const group27323Data = {
    overlapGroup9: "/img/rectangle-2308-9@1x.png",
    grainFood: " Processed Fruit",
    className: "group-3406-1",
};

const scrollGroup3Data = {
    group2734Props: group2734Data,
    group2730Props2: group2730Data,
    group2732Props2: group2732Data,
    group27322Props: group27322Data,
    group27323Props: group27323Data,
};

const scrollGroup2Data = {
    group2734Props: scrollGroup3Data,
};

const icon34searchData = {
    src: "/img/search@1x.png",
};

const component10627Data = {
    overlapGroup16: "/img/path-11547-10@1x.png",
    group2756: "/img/path-11535-1@1x.png",
    ico: "/img/ico-10@1x.png",
    setting: "/img/setting-10@1x.png",
    profile: "/img/path-11532-10@1x.png",
};

const home1Data = {
    fontawsomeBars: "/img/fontawsome--bars--1@1x.png",
    ellipse2: "/img/ellipse-2-1@1x.png",
    projectSimulator: "Project simulator",
    spanText: "Try it out for different type of food",
    spanText2: "",
    group2984: "/img/subtraction-40@1x.png",
    union13: "/img/union-13-1@1x.png",
    subtraction49: "/img/subtraction-49-1@1x.png",
    union11: "/img/union-11@1x.png",
    amount: " Amount",
    beef: "Beef",
    color: "Tomato",
    apple: "Apple",
    serving: "Serving",
    x1Serving3Oz: "*1 serving = 3 oz",
    path11680: "/img/path-11680@1x.png",
    path11553: "/img/path-11553-3@1x.png",
    text3: "Discover by Food Category",
    homeHeading42Props: homeHeading42Data,
    group3142Props: group31422Data,
    group3141Props: group3141Data,
    group314142Props: group314142Data,
    group31412Props: group31412Data,
    group2971Props: group2971Data,
    group2758Props: group2758Data,
    scrollGroup2Props: scrollGroup2Data,
    icon34searchProps: icon34searchData,
    component10627Props: component10627Data,
};

const component9412Data = {
    className: "component-94-1-1",
};

const network42Data = {
    path67: "/img/path-67-10@1x.png",
    path68: "/img/path-68-10@1x.png",
};

const group12Data = {
    className: "group-1-1",
    networkProps: network42Data,
};

const component95122Data = {
    overlapGroup4: "/img/rectangle-2302-13@1x.png",
    className: "component-95-12-1",
    component941Props: component9412Data,
    group1Props: group12Data,
};

const homeHeading32Data = {
    component9512Props: component95122Data,
};

const component10451Data = {
    surname: "Day",
    week: "Week",
    month: "Month",
};

const group2982222Data = {
    className: "group-2982-1",
};

const group3193Data = {
    group3193: "/img/subtraction-82-2@1x.png",
    union11: "/img/union-11@1x.png",
};

const group297122Data = {
    className: "group-2971-2",
};

const group31313Data = {
    className: "group-3131-1",
};

const group31314Data = {
    className: "group-3132-1",
};

const group31332Data = {
    className: "group-3133-1",
};

const group314162Data = {
    group31312Props: group31313Data,
    group31312Props2: group31314Data,
    group31312Props3: group31332Data,
};

const group313125Data = {
    className: "group-3132-13",
};

const group3141422Data = {
    className: "group-3141-8",
    group313122Props2: group313125Data,
};

const group3131324Data = {
    className: "group-3132-25",
};

const group314122Data = {
    className: "group-3141-14",
    group31313Props44: group3131324Data,
};

const group31423Data = {
    className: "group-3142-1",
};

const group31424Data = {
    className: "group-3143-1",
};

const group31442Data = {
    className: "group-3144-1",
};

const group31452Data = {
    className: "group-3145-1",
};

const scrollGroup12Data = {
    className: "scroll-group-1-1",
};

const group27602Data = {
    className: "group-2760-1",
};

const iconadd44Data = {
    className: "iconadd-3",
};

const iconadd45Data = {
    className: "iconadd-4",
};

const iconadd32Data = {
    src: "/img/union-17@1x.png",
};

const group275822Data = {
    iconadd4Props: iconadd44Data,
    iconadd42Props: iconadd45Data,
    iconadd3Props: iconadd32Data,
};

const component97642Data = {
    src: "/img/rectangle-2308-19@1x.png",
};

const group27342Data = {
    component9764Props: component97642Data,
};

const group27302Data = {
    group2730: "/img/rectangle-2308-24@1x.png",
    stapleFood: "Staple Food",
};

const group27324Data = {
    overlapGroup9: "/img/rectangle-2308-26@1x.png",
    grainFood: "Grain Food",
};

const group27325Data = {
    overlapGroup9: "/img/rectangle-2308-8@1x.png",
    grainFood: "Added fat and oil",
    className: "group-3405-2",
};

const group27326Data = {
    overlapGroup9: "/img/rectangle-2308-9@1x.png",
    grainFood: " Processed Fruit",
    className: "group-3406-2",
};

const scrollGroup32Data = {
    group2734Props: group27342Data,
    group2730Props2: group27302Data,
    group2732Props2: group27324Data,
    group27322Props: group27325Data,
    group27323Props: group27326Data,
};

const scrollGroup22Data = {
    group2734Props: scrollGroup32Data,
};

const group2761Data = {
    scrollGroup2Props: scrollGroup22Data,
};

const component106272Data = {
    home: "/img/path-11535-1@1x.png",
    setting: "/img/setting-10@1x.png",
};

const home22Data = {
    fontawsomeBars: "/img/fontawsome--bars--1@1x.png",
    serving: "Serving",
    subtraction49: "/img/subtraction-49-1@1x.png",
    x1Serving3Oz: "*1 serving = 3 oz",
    color: "Tomato",
    beef: "Beef",
    apple: "Apple",
    amount: " Amount",
    subtraction82: "/img/subtraction-82-1@1x.png",
    union11: "/img/union-11-1@1x.png",
    path11548: "/img/path-11548@1x.png",
    homeHeading3Props: homeHeading32Data,
    component10451Props: component10451Data,
    group3193Props2: group2982222Data,
    group3193Props3: group3193Data,
    group2761Props: group297122Data,
    group314162Props: group314162Data,
    group314142Props: group3141422Data,
    group31412Props: group314122Data,
    homeHeading3Props2: group31423Data,
    group3142Props: group31424Data,
    group3142Props2: group31442Data,
    homeHeading3Props3: group31452Data,
    scrollGroup1Props: scrollGroup12Data,
    group275822Props: group27602Data,
    group275822Props2: group275822Data,
    group2761Props2: group2761Data,
    component106272Props: component106272Data,
};

const component9413Data = {
    className: "component-94-1-2",
};

const network43Data = {
    path67: "/img/path-67-10@1x.png",
    path68: "/img/path-68-10@1x.png",
};

const group13Data = {
    networkProps: network43Data,
};

const component95123Data = {
    overlapGroup4: "/img/rectangle-2302-1@1x.png",
    className: "component-95-12-2",
    component941Props: component9413Data,
    group1Props: group13Data,
};

const homeHeadingData = {
    todaysFeed: "Today’s Feed",
    component9512Props: component95123Data,
};

const layer23Data = {
    src: "/img/path-11542-10@1x.png",
    className: "",
};

const iconadd33Data = {
    src: "/img/union-15@1x.png",
    className: "iconadd-13",
};

const group2718Data = {
    layer2Props: layer23Data,
    iconadd3Props: iconadd33Data,
};

const totalCo23Data = {
    className: "total-co2-2",
};

const card132Data = {
    totalCo2Props: totalCo23Data,
};

const group2594Data = {
    discoverByMeal: "Discover by Meal",
    path11543: "/img/path-11543@1x.png",
    card132Props: card132Data,
};

const component9414Data = {
    className: "group-2641",
};

const component94122Data = {
    component941Props: component9414Data,
};

const titleData = {
    children: "Breakfast",
};

const iconSearchData = {
    src: "/img/line@1x.png",
};

const iconArrowSmallData = {
    className: "",
};

const buttonData = {
    iconArrowSmallProps: iconArrowSmallData,
};

const component1062722Data = {
    home: "/img/path-11535-1@1x.png",
    setting: "/img/setting-10@1x.png",
    className: "component-106-12",
};

const network44Data = {
    path67: "/img/path-67-10@1x.png",
    path68: "/img/path-68-10@1x.png",
};

const group14Data = {
    className: "group-1-3",
    networkProps: network44Data,
};

const layer232Data = {
    src: "/img/path-11542-10@1x.png",
    className: "layer-2-1",
};

const iconadd34Data = {
    src: "/img/union-15@1x.png",
    className: "iconadd-16",
};

const breakfastData = {
    rectangle2308: "/img/rectangle-2308-10@1x.png",
    rectangle2371: "/img/rectangle-2371@1x.png",
    rectangle2372: "/img/rectangle-2372@1x.png",
    rectangle2373: "/img/rectangle-2373@1x.png",
    bread: "Bread",
    color: "Orange",
    place: "Egg",
    x100G: "100g",
    x200G: "200g",
    x100G2: "100g",
    homeHeadingProps: homeHeadingData,
    group2718Props: group2718Data,
    group2594Props: group2594Data,
    component9412Props: component94122Data,
    titleProps: titleData,
    iconSearchProps: iconSearchData,
    buttonProps: buttonData,
    component106272Props: component1062722Data,
    group1Props: group14Data,
    layer23Props: layer232Data,
    iconadd3Props: iconadd34Data,
};

const component9415Data = {
    className: "component-94-1-3",
};

const group132Data = {
    className: "",
};

const component951222Data = {
    overlapGroup4: "/img/rectangle-2302-13@1x.png",
    component941Props: component9415Data,
    group132Props: group132Data,
};

const homeHeading722Data = {
    component95123Props: component951222Data,
};

const component104512Data = {
    surname: "Day",
    week: "Week",
    month: "Month",
};

const group2982223Data = {
    className: "group-2982-2",
};

const group31932Data = {
    group3193: "/img/subtraction-82-2@1x.png",
    union11: "/img/union-11@1x.png",
};

const group297123Data = {
    className: "group-2971-3",
};

const group2806422Data = {
    className: "group-2806-5",
};

const group2807422Data = {
    className: "group-2807-5",
};

const group31315Data = {
    className: "group-3131-2",
};

const group31316Data = {
    className: "group-3132-2",
};

const group31333Data = {
    className: "group-3133-2",
};

const group313127Data = {
    className: "group-3132-14",
};

const group3141423Data = {
    className: "group-3141-9",
    group313122Props2: group313127Data,
};

const group3131326Data = {
    className: "group-3132-26",
};

const group314123Data = {
    className: "group-3141-15",
    group31313Props44: group3131326Data,
};

const group31425Data = {
    className: "group-3142-2",
};

const group31426Data = {
    className: "group-3143-2",
};

const scrollGroup13Data = {
    className: "scroll-group-1-2",
};

const group27603Data = {
    className: "group-2760-2",
};

const iconadd47Data = {
    className: "iconadd-6",
};

const iconadd48Data = {
    className: "iconadd-7",
};

const iconadd35Data = {
    src: "/img/union-17@1x.png",
};

const group2758222Data = {
    iconadd4Props: iconadd47Data,
    iconadd42Props: iconadd48Data,
    iconadd3Props: iconadd35Data,
};

const component97643Data = {
    src: "/img/rectangle-2308-19@1x.png",
};

const group27343Data = {
    component9764Props: component97643Data,
};

const group27303Data = {
    group2730: "/img/rectangle-2308-24@1x.png",
    stapleFood: "Staple Food",
};

const group27327Data = {
    overlapGroup9: "/img/rectangle-2308-26@1x.png",
    grainFood: "Grain Food",
};

const group27328Data = {
    overlapGroup9: "/img/rectangle-2308-8@1x.png",
    grainFood: "Added fat and oil",
    className: "group-3405-3",
};

const group27329Data = {
    overlapGroup9: "/img/rectangle-2308-9@1x.png",
    grainFood: " Processed Fruit",
    className: "group-3406-3",
};

const scrollGroup33Data = {
    group2734Props: group27343Data,
    group2730Props2: group27303Data,
    group2732Props2: group27327Data,
    group27322Props: group27328Data,
    group27323Props: group27329Data,
};

const scrollGroup23Data = {
    group2734Props: scrollGroup33Data,
};

const group27612Data = {
    scrollGroup2Props: scrollGroup23Data,
};

const component1062723Data = {
    home: "/img/path-11535-1@1x.png",
    setting: "/img/setting-10@1x.png",
    className: "component-106-4",
};

const home32Data = {
    fontawsomeBars: "/img/fontawsome--bars--1@1x.png",
    path11553: "/img/path-11553-4@1x.png",
    serving: "Serving",
    subtraction49: "/img/subtraction-49-1@1x.png",
    x1Serving3Oz: "*1 serving = 3 oz",
    color: "Tomato",
    beef: "Beef",
    apple: "Apple",
    amount: " Amount",
    spanText: "gCO",
    spanText2: "2",
    union11: "/img/union-11-1@1x.png",
    subtraction82: "/img/subtraction-82-3@1x.png",
    union112: "/img/union-11-4@1x.png",
    path11548: "/img/path-11548@1x.png",
    homeHeading722Props: homeHeading722Data,
    component10451Props: component104512Data,
    group298222Props: group2982223Data,
    group3193Props: group31932Data,
    group29712Props: group297123Data,
    group280642Props: group2806422Data,
    group280742Props: group2807422Data,
    group3131Props: group31315Data,
    group31312Props: group31316Data,
    group3133Props: group31333Data,
    group314142Props: group3141423Data,
    group31412Props: group314123Data,
    group3142Props: group31425Data,
    group31422Props: group31426Data,
    scrollGroup1Props: scrollGroup13Data,
    group2760Props: group27603Data,
    group275822Props: group2758222Data,
    group2761Props: group27612Data,
    component106272Props: component1062723Data,
};

const component9416Data = {
    className: "component-94-1-4",
};

const component95125Data = {
    overlapGroup5: "/img/rectangle-2302-7@1x.png",
    component941Props: component9416Data,
};

const homeHeading82Data = {
    component95125Props: component95125Data,
};

const group25472Data = {
    className: "group-2700",
};

const component9612Data = {
    className: "component-96-1-1",
};

const component32422Data = {
    breakfast: "Breakfast",
    x15Gco: "15gCO",
    group2701: "/img/path-11520-10@1x.png",
    lunch: "Lunch",
    group2547Props: group25472Data,
    component961Props: component9612Data,
};

const totalCo25Data = {
    className: "total-co2-4",
};

const card142Data = {
    component3242Props: component32422Data,
    totalCo2Props: totalCo25Data,
};

const scrollGroup14Data = {
    className: "scroll-group-1-3",
};

const card2Data = {
    scrollGroup1Props: scrollGroup14Data,
};

const component104513Data = {
    surname: "Day",
    week: "Week",
    month: "Month",
    className: "component-104-2",
};

const iconadd410Data = {
    className: "iconadd-9",
};

const iconadd411Data = {
    className: "iconadd-10",
};

const iconadd36Data = {
    src: "/img/union-17@1x.png",
};

const group2758223Data = {
    className: "group-2661",
    iconadd4Props: iconadd410Data,
    iconadd42Props: iconadd411Data,
    iconadd3Props: iconadd36Data,
};

const component97644Data = {
    src: "/img/rectangle-2308-19@1x.png",
};

const group27344Data = {
    component9764Props: component97644Data,
};

const group27304Data = {
    group2730: "/img/rectangle-2308-22@1x.png",
    stapleFood: "Chocolate",
    className: "group-2730-2",
};

const group27294Data = {
    className: "group-2729-4",
};

const group27305Data = {
    group2730: "/img/rectangle-2308-24@1x.png",
    stapleFood: "Staple Food",
};

const group273210Data = {
    overlapGroup9: "/img/rectangle-2308-26@1x.png",
    grainFood: "Grain Food",
};

const scrollGroup222Data = {
    group2734Props: group27344Data,
    group2730Props: group27304Data,
    group2729Props: group27294Data,
    group27302Props: group27305Data,
    group2732Props: group273210Data,
};

const iconArrowData = {
    line: "/img/line-7@1x.png",
};

const iconCloseData = {
    overlapGroup2: "/img/line-8@1x.png",
    line: "/img/line-9@1x.png",
};

const component1321Data = {
    name: "AUGUST",
    number: "2018",
    group153: "/img/chevron-right-1--1@1x.png",
    group152: "/img/chevron-right-1-@1x.png",
    line16: "/img/line-16@1x.png",
    price: "S",
    m: "M",
    t: "T",
    w: "W",
    t2: "T",
    f: "F",
    price2: "S",
    number2: "29",
    number3: "5",
    number4: "12",
    number5: "19",
    number6: "26",
    number7: "2",
    number8: "30",
    number9: "6",
    number10: "13",
    number11: "20",
    number12: "27",
    number13: "3",
    number14: "31",
    number15: "7",
    number16: "14",
    number17: "21",
    number18: "28",
    number19: "4",
    number20: "1",
    number21: "8",
    number22: "15",
    number23: "22",
    number24: "29",
    number25: "5",
    number26: "2",
    number27: "9",
    number28: "16",
    number29: "23",
    number30: "30",
    number31: "6",
    number32: "3",
    number33: "10",
    number34: "17",
    number35: "24",
    number36: "31",
    number37: "7",
    number38: "4",
    number39: "11",
    number40: "18",
    number41: "25",
    number42: "1",
    number43: "8",
    iconArrowProps: iconArrowData,
    iconCloseProps: iconCloseData,
};

const network45Data = {
    path67: "/img/path-67-11@1x.png",
    path68: "/img/path-68-11@1x.png",
};

const network46Data = {
    path67: "/img/path-67-10@1x.png",
    path68: "/img/path-68-10@1x.png",
};

const menu22Data = {
    overlapGroup19: "/img/path-11547-10@1x.png",
    home: "/img/path-11535-6@1x.png",
    activity: "/img/activity-1@1x.png",
    profile: "/img/path-11532-10@1x.png",
    setting: "/img/setting-10@1x.png",
};

const datesData = {
    fontawsomeBars: "/img/fontawsome--bars--1@1x.png",
    path11544: "/img/path-11544@1x.png",
    wifi: "/img/group-51-11@1x.png",
    text14: "12:30",
    wifi2: "/img/group-51-10@1x.png",
    text15: "12:30",
    homeHeading82Props: homeHeading82Data,
    card142Props: card142Data,
    card2Props: card2Data,
    component10451Props: component104513Data,
    group275822Props: group2758223Data,
    scrollGroup22Props: scrollGroup222Data,
    component1321Props: component1321Data,
    network4Props: network45Data,
    network42Props: network46Data,
    menu22Props: menu22Data,
};

const component9417Data = {
    className: "component-94-1-5",
};

const network47Data = {
    path67: "/img/path-67-10@1x.png",
    path68: "/img/path-68-10@1x.png",
};

const group15Data = {
    networkProps: network47Data,
};

const component95124Data = {
    overlapGroup4: "/img/rectangle-2302-1@1x.png",
    className: "component-95-12-3",
    component941Props: component9417Data,
    group1Props: group15Data,
};

const homeHeading2Data = {
    todaysFeed: "Today’s Feed",
    className: "home-heading-7",
    component9512Props: component95124Data,
};

const totalCo26Data = {
    className: "total-co2-5",
};

const card1322Data = {
    className: "card-1-3",
    totalCo2Props: totalCo26Data,
};

const iconArrowSmall2Data = {
    className: "icon-arrow-small-1",
};

const button2Data = {
    className: "button-1",
    iconArrowSmallProps: iconArrowSmall2Data,
};

const title2Data = {
    children: "Lunch",
    className: "lunch",
};

const group2644Data = {
    titleProps: title2Data,
};

const group26712Data = {
    className: "group-2670",
};

const iconadd37Data = {
    src: "/img/union-15@1x.png",
    className: "iconadd-25",
};

const iconSearch222Data = {
    className: "icon-search-2",
};

const network48Data = {
    path67: "/img/path-67-10@1x.png",
    path68: "/img/path-68-10@1x.png",
};

const group16Data = {
    className: "group-1-5",
    networkProps: network48Data,
};

const layer233Data = {
    src: "/img/path-11542-2@1x.png",
    className: "layer-2-2",
};

const component1062724Data = {
    home: "/img/path-11535-1@1x.png",
    setting: "/img/setting-2@1x.png",
    className: "component-106-14",
};

const lunchData = {
    discoverByMeal: "Discover by Meal",
    rectangle2308: "/img/rectangle-2308-11@1x.png",
    rectangle2375: "/img/rectangle-2375@1x.png",
    rectangle2373: "/img/rectangle-2373-1@1x.png",
    rectangle2374: "/img/rectangle-2374@1x.png",
    beans: "Beans",
    x100G: "100g",
    tamato: "Tamato",
    x100G2: "100g",
    place: "Chicken",
    x100G3: "100g",
    homeHeadingProps: homeHeading2Data,
    card132Props: card1322Data,
    buttonProps: button2Data,
    group2644Props: group2644Data,
    group2671Props: group26712Data,
    iconadd3Props: iconadd37Data,
    iconSearch22Props: iconSearch222Data,
    group1Props: group16Data,
    layer23Props: layer233Data,
    component106272Props: component1062724Data,
};

const component9418Data = {
    className: "component-94-1-6",
};

const network49Data = {
    path67: "/img/path-67-10@1x.png",
    path68: "/img/path-68-10@1x.png",
};

const group17Data = {
    className: "group-1-6",
    networkProps: network49Data,
};

const component95126Data = {
    overlapGroup4: "/img/rectangle-2302-13@1x.png",
    className: "component-95-12-4",
    component941Props: component9418Data,
    group1Props: group17Data,
};

const homeHeading422Data = {
    className: "home-heading-1",
    component9512Props: component95126Data,
};

const group298232Data = {
    group2982: "/img/subtraction-35-11@1x.png",
};

const group3181Data = {
    group3181: "/img/subtraction-40-1@1x.png",
};

const group2971323Data = {
    className: "group-2971-8",
};

const group3131327Data = {
    className: "group-3131-12",
};

const group3131328Data = {
    className: "group-3132-27",
};

const group3133324Data = {
    className: "group-3133-12",
};

const group3134324Data = {
    className: "group-3134-17",
};

const group313129Data = {
    className: "group-3132-15",
};

const group3141424Data = {
    className: "group-3141-10",
    group313122Props2: group313129Data,
};

const group31318Data = {
    className: "group-3132-3",
};

const group31413Data = {
    className: "group-3141-1",
    group3131Props22: group31318Data,
};

const group31427Data = {
    className: "group-3142-3",
};

const group31428Data = {
    className: "group-3143-3",
};

const scrollGroup15Data = {
    className: "scroll-group-1-4",
};

const group27604Data = {
    className: "group-2760-3",
};

const iconadd22Data = {
    className: "iconadd-5",
};

const iconadd413Data = {
    className: "iconadd-12",
};

const iconadd38Data = {
    src: "/img/union-17@1x.png",
};

const group27582Data = {
    className: "group-2758-1",
    iconadd2Props: iconadd22Data,
    iconadd4Props2: iconadd413Data,
    iconadd3Props: iconadd38Data,
};

const component97645Data = {
    src: "/img/rectangle-2308-19@1x.png",
};

const group27345Data = {
    component9764Props: component97645Data,
};

const group27306Data = {
    group2730: "/img/rectangle-2308-24@1x.png",
    stapleFood: "Staple Food",
};

const group273211Data = {
    overlapGroup9: "/img/rectangle-2308-26@1x.png",
    grainFood: "Grain Food",
};

const group273212Data = {
    overlapGroup9: "/img/rectangle-2308-8@1x.png",
    grainFood: "Added fat and oil",
    className: "group-3405-4",
};

const group273213Data = {
    overlapGroup9: "/img/rectangle-2308-9@1x.png",
    grainFood: " Processed Fruit",
    className: "group-3406-4",
};

const scrollGroup34Data = {
    group2734Props: group27345Data,
    group2730Props2: group27306Data,
    group2732Props2: group273211Data,
    group27322Props: group273212Data,
    group27323Props: group273213Data,
};

const scrollGroup24Data = {
    group2734Props: scrollGroup34Data,
};

const group27613Data = {
    scrollGroup2Props: scrollGroup24Data,
};

const component1062725Data = {
    home: "/img/path-11535-1@1x.png",
    setting: "/img/setting-2@1x.png",
    className: "component-106-6",
};

const home2Data = {
    fontawsomeBars: "/img/fontawsome--bars--1@1x.png",
    path11553: "/img/path-11553-3@1x.png",
    serving: "Serving",
    subtraction74: "/img/subtraction-35-1@1x.png",
    subtraction35: "/img/subtraction-35-6@1x.png",
    union12: "/img/union-12-6@1x.png",
    subtraction49: "/img/subtraction-49-1@1x.png",
    union11: "/img/union-11-1@1x.png",
    x1Serving3Oz: "*1 serving = 3 oz",
    path115532: "/img/path-11553-17@1x.png",
    slider: "/img/slider-1@1x.png",
    amount: " Amount",
    spanText: "gCO",
    spanText2: "2",
    path11548: "/img/path-11548@1x.png",
    homeHeading4Props: homeHeading422Data,
    group29823Props: group298232Data,
    group3181Props2: group3181Data,
    group297132Props: group2971323Data,
    group313132Props: group3131327Data,
    group3131322Props: group3131328Data,
    group313332Props: group3133324Data,
    group313432Props: group3134324Data,
    group314142Props: group3141424Data,
    group3141Props: group31413Data,
    group3142Props: group31427Data,
    group31422Props: group31428Data,
    scrollGroup1Props: scrollGroup15Data,
    group2758Props: group27604Data,
    group2758Props2: group27582Data,
    group2761Props: group27613Data,
    component106272Props: component1062725Data,
};

const network410Data = {
    path67: "/img/path-67-10@1x.png",
    path68: "/img/path-68-10@1x.png",
};

const group18Data = {
    networkProps: network410Data,
};

const component95127Data = {
    overlapGroup4: "/img/rectangle-2302-13@1x.png",
    group1Props: group18Data,
};

const group26512Data = {
    className: "group-2651-3",
};

const homeHeading72Data = {
    component9512Props: component95127Data,
    component9512Props2: group26512Data,
};

const group25602Data = {
    className: "group-2560-5",
};

const group27022Data = {
    className: "group-2702-1",
};

const group27052Data = {
    className: "group-2705-1",
};

const group25474Data = {
    className: "group-2700-1",
};

const component9614Data = {
    className: "component-96-1-3",
};

const component324Data = {
    breakfast: "Breakfast",
    x15Gco: "15gCO",
    group2701: "/img/path-11520-10@1x.png",
    lunch: "Lunch",
    group2547Props: group25602Data,
    group2547Props2: group27022Data,
    group2547Props3: group27052Data,
    group2547Props4: group25474Data,
    component961Props: component9614Data,
};

const totalCo28Data = {
    className: "total-co2-7",
};

const card12Data = {
    component324Props: component324Data,
    totalCo2Props: totalCo28Data,
};

const scrollGroup16Data = {
    className: "scroll-group-1-5",
};

const card22Data = {
    className: "card-2-1",
    scrollGroup1Props: scrollGroup16Data,
};

const bgShadow2Data = {
    className: "",
};

const bgShadowData = {
    rectangle: "/img/rectangle-2@1x.png",
    bgShadow2Props: bgShadow2Data,
};

const iconArrow2Data = {
    line: "/img/line-29@1x.png",
    className: "icon-arrow-1",
};

const strawberryData = {
    strawberry: "/img/strawberry-shadow@1x.png",
    strawberry2: "/img/strawberry@1x.png",
};

const component94110Data = {
    className: "component-94-1-8",
};

const network411Data = {
    path67: "/img/path-67-10@1x.png",
    path68: "/img/path-68-10@1x.png",
};

const group19Data = {
    className: "group-1-8",
    networkProps: network411Data,
};

const component95128Data = {
    overlapGroup4: "/img/rectangle-2302-10@1x.png",
    className: "component-95-12-6",
    group1Props: component94110Data,
    group1Props2: group19Data,
};

const homeHeading3Data = {
    todaysFeed: "Summary",
    className: "home-heading-8",
    component9512Props: component95128Data,
};

const summary1Data = {
    fontawsomeBars: "/img/fontawsome--bars--1@1x.png",
    path11541: "/img/path-11541@1x.png",
    subTotal: "Sub-total",
    total: "Total",
    strawberries: "Strawberries",
    rectangle2383: "/img/rectangle-2383@1x.png",
    rectangle2384: "/img/rectangle-2384@1x.png",
    rectangle2385: "/img/rectangle-2385@1x.png",
    rectangle2386: "/img/rectangle-2386@1x.png",
    breakfast: "Breakfast",
    lunch: "Lunch",
    dinner: "Dinner",
    other: "Other",
    number: "65",
    number2: "65",
    number3: "65",
    number4: "65",
    homeHeading72Props: homeHeading72Data,
    card12Props: card12Data,
    card2Props: card22Data,
    bgShadowProps: bgShadowData,
    iconArrowProps: iconArrow2Data,
    strawberryProps: strawberryData,
    homeHeadingProps: homeHeading3Data,
};

const bgShadow3Data = {
    rectangle: "/img/rectangle-2@1x.png",
};

const iconArrow3Data = {
    line: "/img/line-30@1x.png",
    className: "icon-arrow-2",
};

const strawberry2Data = {
    strawberry: "/img/pepper-shadow-1@1x.png",
    strawberry2: "/img/pepper-2@1x.png",
    className: "pepper",
};

const strawberry3Data = {
    strawberry: "/img/pepper-shadow-1@1x.png",
    strawberry2: "/img/pepper-1@1x.png",
    className: "pepper-2",
};

const strawberry4Data = {
    strawberry: "/img/pepper-shadow-1@1x.png",
    strawberry2: "/img/pepper@1x.png",
    className: "pepper-4",
};

const strawberry5Data = {
    strawberry: "/img/strawberry-shadow-1@1x.png",
    strawberry2: "/img/strawberry-1@1x.png",
    className: "strawberry-2",
};

const component94111Data = {
    className: "component-94-1-9",
};

const network412Data = {
    path67: "/img/path-67-10@1x.png",
    path68: "/img/path-68-10@1x.png",
};

const group110Data = {
    className: "group-1-9",
    networkProps: network412Data,
};

const component95129Data = {
    overlapGroup4: "/img/rectangle-2302-10@1x.png",
    className: "component-95-12-7",
    group1Props: component94111Data,
    group1Props2: group110Data,
};

const homeHeading22Data = {
    title: "Summary",
    component951222Props: component95129Data,
};

const iconArrow4Data = {
    line: "/img/line-18@1x.png",
    className: "icon-arrow-3",
};

const iconClose2Data = {
    overlapGroup2: "/img/line-19@1x.png",
    line: "/img/line-20@1x.png",
    className: "icon-close-1",
};

const summaryData = {
    broccoli: "Broccoli",
    x100G: "100g",
    x100G2: "100g",
    kale: "Kale",
    x100G3: "100g",
    redPeppers: "Red Peppers",
    x100G4: "100g",
    strawberries: "Strawberries",
    total: "Total",
    bgShadowProps: bgShadow3Data,
    iconArrowProps: iconArrow3Data,
    strawberryProps: strawberry2Data,
    strawberry2Props: strawberry3Data,
    strawberry3Props: strawberry4Data,
    strawberry4Props: strawberry5Data,
    homeHeading2Props: homeHeading22Data,
    iconArrow2Props: iconArrow4Data,
    iconCloseProps: iconClose2Data,
};

const component94112Data = {
    className: "component-94-1-10",
};

const component951223Data = {
    overlapGroup4: "/img/rectangle-2302-13@1x.png",
    component941Props: component94112Data,
};

const homeHeading5Data = {
    component95123Props: component951223Data,
};

const group29713Data = {
    src: "/img/path-11553-3@1x.png",
    className: "group-40-1",
};

const group2982322Data = {
    group2982: "/img/subtraction-35-11@1x.png",
    className: "group-3116-1",
};

const group31172Data = {
    className: "group-3117-1",
};

const group3147Data = {
    union12: "/img/union-12-10@1x.png",
};

const group31812Data = {
    group3181: "/img/subtraction-40-1@1x.png",
};

const group2971324Data = {
    className: "group-2971-9",
};

const group2806222Data = {
    className: "group-2806-7",
};

const group2807222Data = {
    className: "group-2807-7",
};

const group3131329Data = {
    className: "group-3131-19",
};

const group31313210Data = {
    className: "group-3132-28",
};

const group3133325Data = {
    className: "group-3133-19",
};

const group3134325Data = {
    className: "group-3134-18",
};

const group3131211Data = {
    className: "group-3132-16",
};

const group3141425Data = {
    className: "group-3141-11",
    group313122Props2: group3131211Data,
};

const group313110Data = {
    className: "group-3132-4",
};

const group31414Data = {
    className: "group-3141-2",
    group3131Props22: group313110Data,
};

const group31429Data = {
    className: "group-3142-4",
};

const group314210Data = {
    className: "group-3143-4",
};

const group31445Data = {
    className: "group-3144-4",
};

const scrollGroup17Data = {
    className: "scroll-group-1-6",
};

const group27605Data = {
    className: "group-2760-4",
};

const iconadd415Data = {
    className: "iconadd-14",
};

const iconadd416Data = {
    className: "iconadd-15",
};

const iconadd39Data = {
    src: "/img/union-17@1x.png",
};

const group2758224Data = {
    iconadd4Props: iconadd415Data,
    iconadd42Props: iconadd416Data,
    iconadd3Props: iconadd39Data,
};

const component97646Data = {
    src: "/img/rectangle-2308-19@1x.png",
};

const group27346Data = {
    component9764Props: component97646Data,
};

const group27307Data = {
    group2730: "/img/rectangle-2308-24@1x.png",
    stapleFood: "Staple Food",
};

const group273214Data = {
    overlapGroup9: "/img/rectangle-2308-26@1x.png",
    grainFood: "Grain Food",
};

const group273215Data = {
    overlapGroup9: "/img/rectangle-2308-8@1x.png",
    grainFood: "Added fat and oil",
    className: "group-3405-5",
};

const group273216Data = {
    overlapGroup9: "/img/rectangle-2308-9@1x.png",
    grainFood: " Processed Fruit",
    className: "group-3406-5",
};

const scrollGroup35Data = {
    group2734Props: group27346Data,
    group2730Props2: group27307Data,
    group2732Props2: group273214Data,
    group27322Props: group273215Data,
    group27323Props: group273216Data,
};

const scrollGroup25Data = {
    group2734Props: scrollGroup35Data,
};

const group27614Data = {
    scrollGroup2Props: scrollGroup25Data,
};

const component1062726Data = {
    home: "/img/path-11535-12@1x.png",
    setting: "/img/setting-16@1x.png",
    className: "component-106-7",
};

const home3Data = {
    fontawsomeBars: "/img/fontawsome--bars--1@1x.png",
    serving: "Serving",
    subtraction74: "/img/subtraction-35-1@1x.png",
    subtraction49: "/img/subtraction-49-1@1x.png",
    union11: "/img/union-11-1@1x.png",
    x1Serving3Oz: "*1 serving = 3 oz",
    path11553: "/img/path-11553-21@1x.png",
    slider: "/img/slider-1@1x.png",
    amount: " Amount",
    spanText: "gCO",
    spanText2: "2",
    path11548: "/img/path-11548@1x.png",
    homeHeading5Props: homeHeading5Data,
    group2971Props: group29713Data,
    group29823Props: group2982322Data,
    group3117Props: group31172Data,
    group3147Props: group3147Data,
    group3181Props2: group31812Data,
    group297132Props: group2971324Data,
    group280622Props: group2806222Data,
    group280722Props: group2807222Data,
    group313132Props: group3131329Data,
    group3131322Props: group31313210Data,
    group313332Props: group3133325Data,
    group313432Props: group3134325Data,
    group314142Props: group3141425Data,
    group3141Props: group31414Data,
    group3142Props: group31429Data,
    group31422Props: group314210Data,
    group3144Props: group31445Data,
    scrollGroup1Props: scrollGroup17Data,
    group275822Props: group27605Data,
    group275822Props2: group2758224Data,
    group2761Props: group27614Data,
    component106272Props: component1062726Data,
};

const component94113Data = {
    className: "component-94-1-11",
};

const component951224Data = {
    overlapGroup4: "/img/rectangle-2302-13@1x.png",
    component941Props: component94113Data,
};

const homeHeading52Data = {
    component95123Props: component951224Data,
};

const component104514Data = {
    surname: "Day",
    week: "Week",
    month: "Month",
};

const group29714Data = {
    src: "/img/path-11553-3@1x.png",
    className: "group-40-2",
};

const group31813Data = {
    group3181: "/img/union-13-1@1x.png",
    className: "group-3156",
};

const group2971325Data = {
    className: "group-2971-10",
};

const group297142Data = {
    slider: "/img/slider-1@1x.png",
};

const group2806223Data = {
    className: "group-2806-8",
};

const group2807223Data = {
    className: "group-2807-8",
};

const group31313211Data = {
    className: "group-3131-20",
};

const group31313212Data = {
    className: "group-3132-29",
};

const group3133326Data = {
    className: "group-3133-20",
};

const group3134326Data = {
    className: "group-3134-22",
};

const group314152Data = {
    group31313Props: group31313211Data,
    group313132Props: group31313212Data,
    group31333Props: group3133326Data,
    group31343Props: group3134326Data,
};

const group3131213Data = {
    className: "group-3132-17",
};

const group3141426Data = {
    className: "group-3141-12",
    group313122Props2: group3131213Data,
};

const group313112Data = {
    className: "group-3132-5",
};

const group31415Data = {
    className: "group-3141-3",
    group3131Props22: group313112Data,
};

const group314211Data = {
    className: "group-3142-5",
};

const group314212Data = {
    className: "group-3143-5",
};

const group31446Data = {
    className: "group-3144-5",
};

const group2982323Data = {
    group2982: "/img/subtraction-35-11@1x.png",
    className: "group-3116-2",
};

const group31173Data = {
    className: "group-3117-2",
};

const group31472Data = {
    union12: "/img/union-12-10@1x.png",
};

const group3148Data = {
    union12: "/img/union-12-15@1x.png",
};

const group3150Data = {
    union12: "/img/union-12-17@1x.png",
};

const scrollGroup18Data = {
    className: "scroll-group-1-7",
};

const group27606Data = {
    className: "group-2760-5",
};

const iconadd418Data = {
    className: "iconadd-17",
};

const iconadd419Data = {
    className: "iconadd-18",
};

const iconadd310Data = {
    src: "/img/union-17@1x.png",
};

const group2758225Data = {
    iconadd4Props: iconadd418Data,
    iconadd42Props: iconadd419Data,
    iconadd3Props: iconadd310Data,
};

const component97647Data = {
    src: "/img/rectangle-2308-19@1x.png",
};

const group27347Data = {
    component9764Props: component97647Data,
};

const group27308Data = {
    group2730: "/img/rectangle-2308-24@1x.png",
    stapleFood: "Staple Food",
};

const group273217Data = {
    overlapGroup9: "/img/rectangle-2308-26@1x.png",
    grainFood: "Grain Food",
};

const group273218Data = {
    overlapGroup9: "/img/rectangle-2308-8@1x.png",
    grainFood: "Added fat and oil",
    className: "group-3405",
};

const group273219Data = {
    overlapGroup9: "/img/rectangle-2308-9@1x.png",
    grainFood: " Processed Fruit",
    className: "group-3406",
};

const scrollGroup36Data = {
    group2734Props: group27347Data,
    group2730Props2: group27308Data,
    group2732Props2: group273217Data,
    group27322Props: group273218Data,
    group27323Props: group273219Data,
};

const scrollGroup26Data = {
    className: "scroll-group-2-2",
    group2734Props: scrollGroup36Data,
};

const component97648Data = {
    src: "/img/rectangle-2308-19@1x.png",
};

const group27348Data = {
    component9764Props: component97648Data,
};

const group27309Data = {
    group2730: "/img/rectangle-2308-24@1x.png",
    stapleFood: "Staple Food",
};

const group273220Data = {
    overlapGroup9: "/img/rectangle-2308-26@1x.png",
    grainFood: "Grain Food",
};

const group273221Data = {
    overlapGroup9: "/img/rectangle-2308-8@1x.png",
    grainFood: "Added fat and oil",
    className: "group-3405",
};

const group273222Data = {
    overlapGroup9: "/img/rectangle-2308-9@1x.png",
    grainFood: " Processed Fruit",
    className: "group-3406",
};

const scrollGroup37Data = {
    group2734Props: group27348Data,
    group2730Props2: group27309Data,
    group2732Props2: group273220Data,
    group27322Props: group273221Data,
    group27323Props: group273222Data,
};

const scrollGroup27Data = {
    className: "scroll-group-2",
    group2734Props: scrollGroup37Data,
};

const component1062727Data = {
    home: "/img/path-11535-12@1x.png",
    setting: "/img/setting-16@1x.png",
    className: "component-106-8",
};

const home4Data = {
    fontawsomeBars: "/img/fontawsome--bars--1@1x.png",
    serving: "Serving",
    subtraction77: "/img/subtraction-40-1@1x.png",
    subtraction40: "/img/subtraction-40-7@1x.png",
    union13: "/img/union-13-18@1x.png",
    subtraction49: "/img/subtraction-49-1@1x.png",
    union11: "/img/union-11-1@1x.png",
    x1Serving3Oz: "*1 serving = 3 oz",
    amount: " Amount",
    subtraction74: "/img/subtraction-35-1@1x.png",
    path11548: "/img/path-11548@1x.png",
    text53: "Discover by Food Category",
    homeHeading5Props: homeHeading52Data,
    component10451Props: component104514Data,
    group2971Props: group29714Data,
    group3181Props: group31813Data,
    group297132Props: group2971325Data,
    group297142Props: group297142Data,
    group280622Props: group2806223Data,
    group280722Props: group2807223Data,
    group314152Props: group314152Data,
    group314142Props: group3141426Data,
    group3141Props: group31415Data,
    group3142Props: group314211Data,
    group31422Props: group314212Data,
    group3144Props: group31446Data,
    group29823Props: group2982323Data,
    group3117Props: group31173Data,
    group3147Props: group31472Data,
    group3148Props: group3148Data,
    group3150Props: group3150Data,
    scrollGroup1Props: scrollGroup18Data,
    group275822Props2: group27606Data,
    group275822Props22: group2758225Data,
    scrollGroup2Props: scrollGroup26Data,
    scrollGroup22Props: scrollGroup27Data,
    component106272Props: component1062727Data,
};

const network413Data = {
    path67: "/img/path-67-10@1x.png",
    path68: "/img/path-68-10@1x.png",
};

const group111Data = {
    className: "group-1-10",
    networkProps: network413Data,
};

const layer234Data = {
    src: "/img/path-11542-10@1x.png",
    className: "layer-2-3",
};

const barsTimeBlackData = {
    time: "/img/file--time@1x.png",
};

const statusBardarkData = {
    statusBarDark: "/img/background@1x.png",
    cellularConnection: "/img/cellular-connection@1x.png",
    wifi: "/img/wifi@1x.png",
    overlapGroup1: "/img/border@1x.png",
    capacity: "/img/capacity@1x.png",
    cap: "/img/cap@1x.png",
    barsTimeBlackProps: barsTimeBlackData,
};

const tab3OptionsdarkData = {
    today: "TODAY",
    week: "WEEK",
    month: "MONTH",
};

const component1331Data = {
    head: "Activity",
    statusBardarkProps: statusBardarkData,
    tab3OptionsdarkProps: tab3OptionsdarkData,
};

const iconslightbackData = {
    line36: "/img/line-36@1x.png",
    path12: "/img/path-12-1@1x.png",
};

const headerLightData = {
    headerLight: "/img/bg@1x.png",
    component1331Props: component1331Data,
    iconslightbackProps: iconslightbackData,
};

const component1341Data = {
    wedMay6Th: "Wed, May 6th",
    avatar: "/img/avatar@1x.png",
    headerLightProps: headerLightData,
};

const component1351Data = {
    beef: "Beef",
    path11676: "/img/path-11676@1x.png",
    pork: "Pork",
    cheese: "Cheese",
    color: "Chocolate",
    spanText: "Food released most CO",
    spanText2: "2",
};

const component1361Data = {
    x20K: "20k",
    x15K: "15k",
    x10K: "10k",
    x5K: "5k",
    bars: "/img/bars@1x.png",
    number: "10",
    number2: "9",
    number3: "8",
    number4: "7",
    number5: "6",
    number6: "5",
    number7: "4",
    number8: "3",
    number9: "2",
    number10: "1",
    review: "Review",
};

const component10613Data = {
    overlapGroup27: "/img/path-11547-10@1x.png",
    home: "/img/path-11535-10@1x.png",
    ico: "/img/ico-10@1x.png",
    setting: "/img/setting-10@1x.png",
    profile: "/img/path-11532-11@1x.png",
};

const myStatsData = {
    group1Props: group111Data,
    layer23Props: layer234Data,
    component1341Props: component1341Data,
    component1351Props: component1351Data,
    component1361Props: component1361Data,
    component10613Props: component10613Data,
};

const bgShadow23Data = {
    className: "ellipse-8",
};

const bgShadow4Data = {
    rectangle: "/img/rectangle-2@1x.png",
    className: "bg-shadow-2",
    bgShadow2Props: bgShadow23Data,
};

const card6Data = {
    className: "button-17",
};

const inputFieldData = {
    children: "Full Name",
};

const inputField2Data = {
    children: "Email",
    className: "input-field-4",
};

const inputField3Data = {
    children: "Password",
    className: "input-field",
};

const component1261Data = {
    inputFieldProps: inputFieldData,
    inputField2Props: inputField2Data,
    inputField3Props: inputField3Data,
};

const iconAccountData = {
    src: "/img/path-34@1x.png",
};

const iconClose3Data = {
    overlapGroup2: "/img/line-22@1x.png",
    line: "/img/line-23@1x.png",
    className: "icon-close-2",
};

const component94114Data = {
    className: "component-94-1-12",
};

const network414Data = {
    path67: "/img/path-67-10@1x.png",
    path68: "/img/path-68-10@1x.png",
};

const group112Data = {
    className: "group-1-11",
    networkProps: network414Data,
};

const component951210Data = {
    overlapGroup4: "/img/rectangle-2302-10@1x.png",
    className: "component-95-12-8",
    group1Props: component94114Data,
    group1Props2: group112Data,
};

const homeHeading92Data = {
    createAccount: "Create Account",
    component95122Props: component951210Data,
};

const iconArrow5Data = {
    line: "/img/line-18@1x.png",
    className: "icon-arrow-4",
};

const iconClose4Data = {
    overlapGroup2: "/img/line-19@1x.png",
    line: "/img/line-20@1x.png",
    className: "icon-close-3",
};

const createAccountData = {
    letsGetStarted: "Let’s get started!",
    bgShadowProps: bgShadow4Data,
    cardProps: card6Data,
    component1261Props: component1261Data,
    iconAccountProps: iconAccountData,
    iconCloseProps: iconClose3Data,
    homeHeading92Props: homeHeading92Data,
    iconArrowProps: iconArrow5Data,
    iconClose2Props: iconClose4Data,
};

const group1324Data = {
    className: "group-1-21",
};

const layer235Data = {
    src: "/img/path-11542-10@1x.png",
    className: "",
};

const iconadd311Data = {
    src: "/img/union-14@1x.png",
    className: "iconadd-33",
};

const group27182Data = {
    layer23Props: layer235Data,
    iconadd3Props: iconadd311Data,
};

const component94115Data = {
    className: "group-2641-1",
};

const component94123Data = {
    className: "group-2642-1",
    component941Props: component94115Data,
};

const title3Data = {
    children: "Processed Vegetables",
    className: "text-35",
};

const profileData = {
    src: "/img/path-11540-10@1x.png",
};

const scaleData = {
    profileProps: profileData,
};

const profile2Data = {
    src: "/img/path-11540-10@1x.png",
};

const scale2Data = {
    x100G: "100g",
    x200G: "200g",
    x500G: "500g",
    profileProps: profile2Data,
};

const profile3Data = {
    src: "/img/path-11540-10@1x.png",
};

const scale3Data = {
    className: "scale",
    profileProps: profile3Data,
};

const profile4Data = {
    src: "/img/path-11540-10@1x.png",
};

const scale4Data = {
    className: "scale",
    profileProps: profile4Data,
};

const group2688Data = {
    fruitVegetables: "Fruit Vegetables",
    scaleProps: scale4Data,
};

const component10011Data = {
    cannedVegetables: "Canned Vegetables",
    frozenVegatables: "Frozen Vegatables",
    driedVegetables: "Dried Vegetables",
    rectangle2356: "/img/rectangle-2356-2@1x.png",
    scaleProps: scaleData,
    scale2Props: scale2Data,
    scale2Props2: scale3Data,
    group26885Props: group2688Data,
};

const iconArrowSmall3Data = {
    className: "icon-arrow-small-2",
};

const button3Data = {
    className: "button-2",
    iconArrowSmallProps: iconArrowSmall3Data,
};

const component1062728Data = {
    home: "/img/path-11535-12@1x.png",
    setting: "/img/setting-12@1x.png",
    className: "component-106-17",
};

const homeProcessedVegetable1Data = {
    overlapGroup: "/img/rectangle-2308-27@1x.png",
    rectangle2336: "/img/rectangle-2336-4@1x.png",
    rectangle23362: "/img/rectangle-2336-5@1x.png",
    rectangle2354: "/img/rectangle-2354-1@1x.png",
    group132Props: group1324Data,
    group27182Props: group27182Data,
    component9412Props: component94123Data,
    titleProps: title3Data,
    component10011Props: component10011Data,
    buttonProps: button3Data,
    component106272Props: component1062728Data,
};

const component94116Data = {
    className: "group-2641-2",
};

const component94124Data = {
    className: "group-2642-2",
    component941Props: component94116Data,
};

const title4Data = {
    children: "Dairy Food",
    className: "dairy-food-21",
};

const layer236Data = {
    src: "/img/path-11542-10@1x.png",
};

const iconadd312Data = {
    src: "/img/union-15@1x.png",
    className: "iconadd-34",
};

const group27183Data = {
    className: "group-2718-1",
    layer2Props: layer236Data,
    iconadd3Props: iconadd312Data,
};

const group1325Data = {
    className: "group-1-26",
};

const profile5Data = {
    src: "/img/path-11540-10@1x.png",
};

const scale5Data = {
    className: "scale-1",
    profileProps: profile5Data,
};

const profile6Data = {
    src: "/img/path-11540-10@1x.png",
};

const scale6Data = {
    className: "scale-1",
    profileProps: profile6Data,
};

const profile7Data = {
    src: "/img/path-11540-10@1x.png",
};

const scale7Data = {
    className: "scale-1",
    profileProps: profile7Data,
};

const profile8Data = {
    src: "/img/path-11540-10@1x.png",
};

const scale8Data = {
    className: "scale-1",
    profileProps: profile8Data,
};

const component1062729Data = {
    home: "/img/path-11535-12@1x.png",
    setting: "/img/setting-12@1x.png",
    className: "component-106-26",
};

const profile9Data = {
    src: "/img/path-11540-10@1x.png",
};

const scale9Data = {
    className: "scale-1",
    profileProps: profile9Data,
};

const profile10Data = {
    src: "/img/path-11540-10@1x.png",
};

const scale10Data = {
    className: "scale-15",
    profileProps: profile10Data,
};

const profile11Data = {
    src: "/img/path-11540-10@1x.png",
};

const scale11Data = {
    className: "scale-1",
    profileProps: profile11Data,
};

const profile12Data = {
    src: "/img/path-11540-10@1x.png",
};

const scale12Data = {
    className: "scale-1",
    profileProps: profile12Data,
};

const profile13Data = {
    src: "/img/path-11540-10@1x.png",
};

const scale13Data = {
    className: "scale-16",
    profileProps: profile13Data,
};

const profile14Data = {
    src: "/img/path-11540-10@1x.png",
};

const scale14Data = {
    className: "scale-1",
    profileProps: profile14Data,
};

const profile15Data = {
    src: "/img/path-11540-10@1x.png",
};

const scale15Data = {
    className: "scale-1",
    profileProps: profile15Data,
};

const iconArrowSmall4Data = {
    className: "icon-arrow-small-3",
};

const button4Data = {
    className: "button-3",
    iconArrowSmallProps: iconArrowSmall4Data,
};

const homeDairyData = {
    rectangle2308: "/img/rectangle-2308-17@1x.png",
    path11678: "/img/path-11678@1x.png",
    rectangle2357: "/img/rectangle-2357-1@1x.png",
    cheese: "Cheese",
    rectangle23572: "/img/rectangle-2357-3@1x.png",
    yogurt: "Yogurt",
    rectangle23573: "/img/rectangle-2357-2@1x.png",
    cottageCheese: "Cottage cheese",
    rectangle23574: "/img/rectangle-2357-4@1x.png",
    iceCream: "Ice cream",
    rectangle23575: "/img/rectangle-2357@1x.png",
    condensedMilk: "Condensed milk",
    rectangle3471: "/img/rectangle-3471@1x.png",
    dryMildProduct: "Dry mild product",
    rectangle3470: "/img/rectangle-3470-2@1x.png",
    halfHalf: "Half & half",
    rectangle34702: "/img/rectangle-3470@1x.png",
    eggnog: "Eggnog",
    text38: "Light and heavy cream",
    rectangle34703: "/img/rectangle-3470-1@1x.png",
    rectangle34704: "/img/rectangle-3470-3@1x.png",
    creamCheese: "Cream cheese",
    rectangle34705: "/img/rectangle-3470-4@1x.png",
    sourCream: "Sour cream",
    component9412Props: component94124Data,
    titleProps: title4Data,
    group2718Props: group27183Data,
    group132Props: group1325Data,
    scaleProps: scale5Data,
    scale2Props: scale6Data,
    scale3Props: scale7Data,
    scale4Props: scale8Data,
    component106272Props: component1062729Data,
    scale5Props: scale9Data,
    scale6Props: scale10Data,
    scale7Props: scale11Data,
    scale8Props: scale12Data,
    scale9Props: scale13Data,
    scale10Props: scale14Data,
    scale11Props: scale15Data,
    buttonProps: button4Data,
};

const group1326Data = {
    className: "group-1-27",
};

const layer237Data = {
    src: "/img/path-11542-10@1x.png",
};

const iconadd313Data = {
    src: "/img/union-14@1x.png",
    className: "iconadd-35",
};

const group271822Data = {
    layer23Props: layer237Data,
    iconadd3Props: iconadd313Data,
};

const component94117Data = {
    className: "group-2641-3",
};

const component94125Data = {
    className: "group-2642-3",
    component941Props: component94117Data,
};

const title5Data = {
    children: "Protein Food",
    className: "protein-food",
};

const profile16Data = {
    src: "/img/path-11540-10@1x.png",
};

const scale16Data = {
    className: "scale-2",
    profileProps: profile16Data,
};

const group26882Data = {
    beans: "Beans",
    scaleProps: scale16Data,
};

const profile17Data = {
    src: "/img/path-11540-10@1x.png",
};

const scale17Data = {
    className: "scale-2",
    profileProps: profile17Data,
};

const group26883Data = {
    eggs: "Eggs",
    scaleProps: scale17Data,
};

const profile18Data = {
    src: "/img/path-11540-10@1x.png",
};

const scale18Data = {
    className: "scale-2",
    profileProps: profile18Data,
};

const profile19Data = {
    src: "/img/path-11540-10@1x.png",
};

const scale19Data = {
    className: "scale-2",
    profileProps: profile19Data,
};

const group26884Data = {
    prawn: "Prawn",
    scaleProps: scale19Data,
};

const component99642Data = {
    className: "rectangle-2326",
};

const component1008Data = {
    oatmeal: "Oatmeal",
    rectangle2356: "/img/rectangle-2356-1@1x.png",
    group26882Props: group26882Data,
    group26883Props: group26883Data,
    scaleProps: scale18Data,
    group26884Props: group26884Data,
    component9964Props: component99642Data,
};

const profile20Data = {
    src: "/img/path-11540-10@1x.png",
};

const scale20Data = {
    className: "scale-2",
    profileProps: profile20Data,
};

const group26885Data = {
    tofu: "Tofu",
    scaleProps: scale20Data,
};

const component10627210Data = {
    home: "/img/path-11535-12@1x.png",
    setting: "/img/setting-12@1x.png",
    className: "component-106-18",
};

const iconArrowSmall5Data = {
    className: "icon-arrow-small-4",
};

const button5Data = {
    className: "button-4",
    iconArrowSmallProps: iconArrowSmall5Data,
};

const homeProteinFoodData = {
    overlapGroup1: "/img/rectangle-2308-27@1x.png",
    rectangle2336: "/img/rectangle-2336-2@1x.png",
    rectangle2356: "/img/rectangle-2356@1x.png",
    rectangle23362: "/img/rectangle-2336-3@1x.png",
    rectangle2354: "/img/rectangle-2354@1x.png",
    group132Props: group1326Data,
    group27182Props: group271822Data,
    component9412Props: component94125Data,
    titleProps: title5Data,
    component1008Props: component1008Data,
    group26885Props: group26885Data,
    component106272Props: component10627210Data,
    buttonProps: button5Data,
};

const component94118Data = {
    className: "component-94-1-13",
};

const network415Data = {
    path67: "/img/path-67-10@1x.png",
    path68: "/img/path-68-10@1x.png",
};

const group113Data = {
    className: "group-1-12",
    networkProps: network415Data,
};

const component951211Data = {
    overlapGroup4: "/img/rectangle-2302-13@1x.png",
    className: "component-95-12-9",
    component941Props: component94118Data,
    group1Props: group113Data,
};

const homeHeading10Data = {
    component9512Props: component951211Data,
};

const group2971522Data = {
    className: "group-40-7",
};

const component104515Data = {
    surname: "Day",
    week: "Week",
    month: "Month",
    className: "component-104-53",
};

const group27607Data = {
    className: "group-2760-6",
};

const group27806Data = {
    className: "group-2780-7",
};

const group27946Data = {
    className: "group-2794-5",
};

const group3161Data = {
    union13: "/img/union-13-24@1x.png",
};

const group29843Data = {
    group3161Props: group3161Data,
};

const group31933Data = {
    union11: "/img/subtraction-49-13@1x.png",
    group3193: "/img/union-11-1@1x.png",
    className: "group-3172",
};

const group3171Data = {
    group3193Props: group31933Data,
};

const group2971422Data = {
    slider: "/img/slider-11@1x.png",
    className: "group-2971-14",
};

const group2806322Data = {
    className: "group-2806-1",
};

const maskGroup4Data = {
    group280632Props: group2806322Data,
};

const group313113Data = {
    className: "group-3131-6",
};

const group313114Data = {
    className: "group-3132-6",
};

const group31338Data = {
    className: "group-3133-6",
};

const group3141622Data = {
    className: "group-3141-20",
    group31312Props: group313113Data,
    group31312Props2: group313114Data,
    group31312Props3: group31338Data,
};

const group3131214Data = {
    className: "group-3131-13",
};

const group3131215Data = {
    className: "group-3132-18",
};

const group313347Data = {
    className: "group-3133-13",
};

const group31416Data = {
    group31312Props: group3131214Data,
    group313122Props: group3131215Data,
    group31334Props: group313347Data,
};

const group31473Data = {
    union12: "/img/union-12-22@1x.png",
};

const group31482Data = {
    union12: "/img/union-12-23@1x.png",
};

const group31492Data = {
    className: "group-3149-1",
};

const group31502Data = {
    union12: "/img/union-12-25@1x.png",
};

const group29822Data = {
    group3147Props: group31473Data,
    group3148Props: group31482Data,
    group3149Props: group31492Data,
    group3150Props: group31502Data,
};

const group31313213Data = {
    className: "group-3131-21",
};

const group31313214Data = {
    className: "group-3132-30",
};

const group3133327Data = {
    className: "group-3133-21",
};

const group3134327Data = {
    className: "group-3134-23",
};

const group3141522Data = {
    className: "group-3141-27",
    group31313Props: group31313213Data,
    group313132Props: group31313214Data,
    group31333Props: group3133327Data,
    group31343Props: group3134327Data,
};

const group314213Data = {
    className: "group-3142-6",
};

const group314214Data = {
    className: "group-3143-6",
};

const group31447Data = {
    className: "group-3144-6",
};

const maskGroup10Data = {
    group3142Props: group314213Data,
    group31422Props: group314214Data,
    group3144Props: group31447Data,
};

const group31612Data = {
    union13: "/img/union-13-24@1x.png",
};

const group3170Data = {
    union13: "/img/union-13-40@1x.png",
};

const group3164Data = {
    group3161Props: group31612Data,
    group3170Props: group3170Data,
};

const component99121Data = {
    group2756: "/img/path-11535-18@1x.png",
    setting: "/img/setting-2@1x.png",
};

const onBoardingCompareData = {
    subtraction78: "/img/subtraction-49-1@1x.png",
    fontawsomeBars: "/img/fontawsome--bars--1@1x.png",
    path11548: "/img/path-11548-10@1x.png",
    serving: "Serving",
    x1Serving3Oz: "*1 serving = 3 oz",
    color: "Tomato",
    beef: "Beef",
    apple: "Apple",
    amount: " Amount",
    address: "340  gCO2e",
    path11577: "/img/path-11577@1x.png",
    path11633: "/img/path-11633@1x.png",
    path11569: "/img/path-11569@1x.png",
    path11675: "/img/path-11675@1x.png",
    path11634: "/img/path-11634@1x.png",
    homeHeading10Props: homeHeading10Data,
    group297152Props: group2971522Data,
    component10451Props: component104515Data,
    group2760Props: group27607Data,
    group2780Props: group27806Data,
    group2794Props: group27946Data,
    group29843Props: group29843Data,
    group3171Props: group3171Data,
    group297142Props: group2971422Data,
    maskGroup4Props: maskGroup4Data,
    group314162Props: group3141622Data,
    group31416Props: group31416Data,
    group29822Props: group29822Data,
    group314152Props: group3141522Data,
    maskGroup10Props: maskGroup10Data,
    group3164Props: group3164Data,
    component99121Props: component99121Data,
};

const component94119Data = {
    className: "component-94-1-14",
};

const network416Data = {
    path67: "/img/path-67-10@1x.png",
    path68: "/img/path-68-10@1x.png",
};

const group114Data = {
    networkProps: network416Data,
};

const component951212Data = {
    overlapGroup4: "/img/rectangle-2302-1@1x.png",
    className: "component-95-12-10",
    component941Props: component94119Data,
    group1Props: group114Data,
};

const homeHeading4Data = {
    todaysFeed: "Today’s Feed",
    className: "home-heading-9",
    component9512Props: component951212Data,
};

const totalCo212Data = {
    className: "total-co2-11",
};

const card1323Data = {
    totalCo2Props: totalCo212Data,
};

const iconArrowSmall6Data = {
    className: "icon-arrow-small-5",
};

const button6Data = {
    className: "button-5",
    iconArrowSmallProps: iconArrowSmall6Data,
};

const component94120Data = {
    className: "group-2641-4",
};

const component94126Data = {
    className: "group-2642-4",
    component941Props: component94120Data,
};

const group26713Data = {
    className: "group-2670-1",
};

const network417Data = {
    path67: "/img/path-67-10@1x.png",
    path68: "/img/path-68-10@1x.png",
};

const group115Data = {
    className: "group-1-14",
    networkProps: network417Data,
};

const iconSearch223Data = {
    className: "icon-search-3",
};

const iconadd314Data = {
    src: "/img/union-15@1x.png",
    className: "iconadd-36",
};

const component10627211Data = {
    home: "/img/path-11535-1@1x.png",
    setting: "/img/setting-2@1x.png",
    className: "component-106-28",
};

const dinnerData = {
    discoverByMeal: "Discover by Meal",
    rectangle2308: "/img/rectangle-2308-12@1x.png",
    dinner: "Dinner",
    q3Icons: "/img/path-11542-10@1x.png",
    rectangle2378: "/img/rectangle-2378@1x.png",
    rectangle2377: "/img/rectangle-2377@1x.png",
    rectangle2376: "/img/rectangle-2376@1x.png",
    beef: "Beef",
    pasta: "Pasta",
    wine: "Wine",
    x100G: "100g",
    x100G2: "100g",
    x200G: "200g",
    homeHeadingProps: homeHeading4Data,
    card132Props: card1323Data,
    buttonProps: button6Data,
    component9412Props: component94126Data,
    group2671Props: group26713Data,
    group1Props: group115Data,
    iconSearch22Props: iconSearch223Data,
    iconadd3Props: iconadd314Data,
    component106272Props: component10627211Data,
};

const component94121Data = {
    className: "component-94-1-15",
};

const network418Data = {
    path67: "/img/path-67-10@1x.png",
    path68: "/img/path-68-10@1x.png",
};

const group116Data = {
    className: "group-1-15",
    networkProps: network418Data,
};

const component951213Data = {
    overlapGroup4: "/img/rectangle-2302-13@1x.png",
    className: "component-95-12-11",
    component941Props: component94121Data,
    group1Props: group116Data,
};

const homeHeading423Data = {
    className: "home-heading-2",
    component9512Props: component951213Data,
};

const component104516Data = {
    surname: "Day",
    week: "Week",
    month: "Month",
};

const group29716Data = {
    src: "/img/path-11553-3@1x.png",
    className: "group-40-3",
};

const group2982324Data = {
    group2982: "/img/union-12-1@1x.png",
    className: "group-2982-4",
};

const group31814Data = {
    group3181: "/img/union-13-1@1x.png",
    className: "group-3181",
};

const group313116Data = {
    className: "group-3132-7",
};

const group31417Data = {
    className: "group-3141-4",
    group3131Props22: group313116Data,
};

const group3131216Data = {
    className: "group-3131-14",
};

const group3131217Data = {
    className: "group-3132-19",
};

const group313348Data = {
    className: "group-3133-14",
};

const group313448Data = {
    className: "group-3134-19",
};

const group31313216Data = {
    className: "group-3132-31",
};

const group314124Data = {
    className: "group-3141-16",
    group31313Props44: group31313216Data,
};

const group314215Data = {
    className: "group-3142-7",
};

const group314216Data = {
    className: "group-3143-7",
};

const group31448Data = {
    className: "group-3144-7",
};

const group31458Data = {
    className: "group-3145-7",
};

const scrollGroup19Data = {
    className: "scroll-group-1-8",
};

const group27608Data = {
    className: "group-2760-7",
};

const iconadd421Data = {
    className: "iconadd-20",
};

const iconadd422Data = {
    className: "iconadd-21",
};

const iconadd315Data = {
    src: "/img/union-17@1x.png",
};

const group2758226Data = {
    iconadd4Props: iconadd421Data,
    iconadd42Props: iconadd422Data,
    iconadd3Props: iconadd315Data,
};

const component97649Data = {
    src: "/img/rectangle-2308-19@1x.png",
};

const group27349Data = {
    component9764Props: component97649Data,
};

const group273010Data = {
    group2730: "/img/rectangle-2308-24@1x.png",
    stapleFood: "Staple Food",
};

const group273223Data = {
    overlapGroup9: "/img/rectangle-2308-26@1x.png",
    grainFood: "Grain Food",
};

const group273224Data = {
    overlapGroup9: "/img/rectangle-2308-8@1x.png",
    grainFood: "Added fat and oil",
    className: "group-3405-6",
};

const group273225Data = {
    overlapGroup9: "/img/rectangle-2308-9@1x.png",
    grainFood: " Processed Fruit",
    className: "group-3406-6",
};

const scrollGroup38Data = {
    group2734Props: group27349Data,
    group2730Props2: group273010Data,
    group2732Props2: group273223Data,
    group27322Props: group273224Data,
    group27323Props: group273225Data,
};

const scrollGroup28Data = {
    group2734Props: scrollGroup38Data,
};

const group27615Data = {
    scrollGroup2Props: scrollGroup28Data,
};

const component10627212Data = {
    home: "/img/path-11535-1@1x.png",
    setting: "/img/setting-2@1x.png",
    className: "component-106-11",
};

const home21Data = {
    fontawsomeBars: "/img/fontawsome--bars--1@1x.png",
    serving: "Serving",
    subtraction40: "/img/subtraction-40-1@1x.png",
    subtraction81: "/img/subtraction-81-14@1x.png",
    union13: "/img/union-13-43@1x.png",
    subtraction49: "/img/subtraction-49-1@1x.png",
    union11: "/img/union-11-1@1x.png",
    x1Serving3Oz: "*1 serving = 3 oz",
    color: "Tomato",
    beef: "Beef",
    apple: "Apple",
    amount: " Amount",
    spanText: "gCO",
    spanText2: "2",
    path11553: "/img/path-11553-30@1x.png",
    slider: "/img/slider-11@1x.png",
    path115532: "/img/path-11553-31@1x.png",
    path11548: "/img/path-11548@1x.png",
    homeHeading42Props: homeHeading423Data,
    component10451Props: component104516Data,
    group2971Props: group29716Data,
    group298232Props: group2982324Data,
    group3181Props: group31814Data,
    group3141Props: group31417Data,
    group31312Props: group3131216Data,
    group313122Props: group3131217Data,
    group31334Props: group313348Data,
    group31344Props: group313448Data,
    group31412Props: group314124Data,
    group3142Props: group314215Data,
    group31422Props: group314216Data,
    group3144Props: group31448Data,
    group3145Props: group31458Data,
    scrollGroup1Props: scrollGroup19Data,
    group2760Props: group27608Data,
    group275822Props: group2758226Data,
    group2761Props: group27615Data,
    component106272Props: component10627212Data,
};

const component94127Data = {
    className: "component-94-1-16",
};

const network419Data = {
    path67: "/img/path-67-10@1x.png",
    path68: "/img/path-68-10@1x.png",
};

const group117Data = {
    className: "group-1-16",
    networkProps: network419Data,
};

const component951214Data = {
    overlapGroup4: "/img/rectangle-2302-13@1x.png",
    className: "component-95-12-12",
    component941Props: component94127Data,
    group1Props: group117Data,
};

const homeHeading424Data = {
    className: "home-heading-3",
    component9512Props: component951214Data,
};

const component104517Data = {
    surname: "Day",
    week: "Week",
    month: "Month",
};

const group29717Data = {
    src: "/img/path-11553-3@1x.png",
    className: "group-40-4",
};

const group2982325Data = {
    group2982: "/img/union-12-1@1x.png",
    className: "group-2982-5",
};

const group31815Data = {
    group3181: "/img/union-13-1@1x.png",
    className: "group-3181-1",
};

const group31822Data = {
    className: "group-3182-1",
};

const group297124Data = {
    className: "group-2971-4",
};

const group280643Data = {
    className: "group-2806-10",
};

const group313118Data = {
    className: "group-3132-8",
};

const group31418Data = {
    className: "group-3141-5",
    group3131Props22: group313118Data,
};

const group3131218Data = {
    className: "group-3131-15",
};

const group3131219Data = {
    className: "group-3132-20",
};

const group313349Data = {
    className: "group-3133-15",
};

const group313449Data = {
    className: "group-3134-20",
};

const group31313218Data = {
    className: "group-3132-32",
};

const group314125Data = {
    className: "group-3141-17",
    group31313Props44: group31313218Data,
};

const group314217Data = {
    className: "group-3142-8",
};

const group314218Data = {
    className: "group-3143-8",
};

const group31449Data = {
    className: "group-3144-8",
};

const scrollGroup110Data = {
    className: "scroll-group-1-9",
};

const group27609Data = {
    className: "group-2760-8",
};

const iconadd424Data = {
    className: "iconadd-23",
};

const iconadd425Data = {
    className: "iconadd-24",
};

const iconadd316Data = {
    src: "/img/union-17@1x.png",
};

const group2758227Data = {
    iconadd4Props: iconadd424Data,
    iconadd42Props: iconadd425Data,
    iconadd3Props: iconadd316Data,
};

const component976410Data = {
    src: "/img/rectangle-2308-19@1x.png",
};

const group273410Data = {
    component9764Props: component976410Data,
};

const group273011Data = {
    group2730: "/img/rectangle-2308-24@1x.png",
    stapleFood: "Staple Food",
};

const group273226Data = {
    overlapGroup9: "/img/rectangle-2308-26@1x.png",
    grainFood: "Grain Food",
};

const group273227Data = {
    overlapGroup9: "/img/rectangle-2308-8@1x.png",
    grainFood: "Added fat and oil",
    className: "group-3405-7",
};

const group273228Data = {
    overlapGroup9: "/img/rectangle-2308-9@1x.png",
    grainFood: " Processed Fruit",
    className: "group-3406-7",
};

const scrollGroup39Data = {
    group2734Props: group273410Data,
    group2730Props2: group273011Data,
    group2732Props2: group273226Data,
    group27322Props: group273227Data,
    group27323Props: group273228Data,
};

const scrollGroup29Data = {
    group2734Props: scrollGroup39Data,
};

const group27616Data = {
    scrollGroup2Props: scrollGroup29Data,
};

const component10627213Data = {
    home: "/img/path-11535-1@1x.png",
    setting: "/img/setting-2@1x.png",
};

const home31Data = {
    fontawsomeBars: "/img/fontawsome--bars--1@1x.png",
    serving: "Serving",
    subtraction40: "/img/subtraction-40-1@1x.png",
    subtraction49: "/img/subtraction-49-1@1x.png",
    union11: "/img/union-11-1@1x.png",
    x1Serving3Oz: "*1 serving = 3 oz",
    color: "Tomato",
    beef: "Beef",
    apple: "Apple",
    amount: " Amount",
    spanText: "gCO",
    spanText2: "2",
    path11553: "/img/path-11553-34@1x.png",
    path11548: "/img/path-11548@1x.png",
    homeHeading42Props: homeHeading424Data,
    component10451Props: component104517Data,
    group2971Props: group29717Data,
    group298232Props: group2982325Data,
    group3181Props: group31815Data,
    group3182Props: group31822Data,
    group29712Props: group297124Data,
    group28064Props: group280643Data,
    group3141Props: group31418Data,
    group31312Props: group3131218Data,
    group313122Props: group3131219Data,
    group31334Props: group313349Data,
    group31344Props: group313449Data,
    group31412Props: group314125Data,
    group3142Props: group314217Data,
    group31422Props: group314218Data,
    group3144Props: group31449Data,
    scrollGroup1Props: scrollGroup110Data,
    group2760Props: group27609Data,
    group275822Props: group2758227Data,
    group2761Props: group27616Data,
    component106272Props: component10627213Data,
};

const component94128Data = {
    className: "component-94-1-17",
};

const network420Data = {
    path67: "/img/path-67-10@1x.png",
    path68: "/img/path-68-10@1x.png",
};

const group118Data = {
    className: "group-1-17",
    networkProps: network420Data,
};

const component951215Data = {
    overlapGroup4: "/img/rectangle-2302-13@1x.png",
    className: "component-95-12-13",
    component941Props: component94128Data,
    group1Props: group118Data,
};

const homeHeading425Data = {
    className: "home-heading-4",
    component9512Props: component951215Data,
};

const component104518Data = {
    surname: "Day",
    week: "Week",
    month: "Month",
    className: "component-104-50",
};

const group27949Data = {
    className: "group-2794-8",
};

const group2780222Data = {
    className: "group-2780-1",
};

const group314219Data = {
    className: "group-3142-9",
};

const group314220Data = {
    className: "group-3143-9",
};

const group314410Data = {
    className: "group-3144-9",
};

const group31816Data = {
    group3181: "/img/union-13-1@1x.png",
    className: "group-3181-2",
};

const group31823Data = {
    className: "group-3182-2",
};

const group31613Data = {
    union13: "/img/union-13-60@1x.png",
    className: "group-3190",
};

const group2982326Data = {
    group2982: "/img/subtraction-35-1@1x.png",
    className: "group-2982-6",
};

const group280644Data = {
    className: "group-2806-11",
};

const group280744Data = {
    className: "group-2807-11",
};

const group29718Data = {
    src: "/img/path-11553-3@1x.png",
    className: "group-40-5",
};

const group313120Data = {
    className: "group-3132-9",
};

const group31419Data = {
    className: "group-3141-6",
    group3131Props22: group313120Data,
};

const group3131220Data = {
    className: "group-3131-16",
};

const group3131221Data = {
    className: "group-3132-21",
};

const group3133410Data = {
    className: "group-3133-16",
};

const group3134410Data = {
    className: "group-3134-21",
};

const group297125Data = {
    className: "group-2971-5",
};

const group31313220Data = {
    className: "group-3132-33",
};

const group314126Data = {
    className: "group-3141-18",
    group31313Props44: group31313220Data,
};

const scrollGroup111Data = {
    className: "scroll-group-1-10",
};

const group276010Data = {
    className: "group-2760-9",
};

const iconadd427Data = {
    className: "iconadd-26",
};

const iconadd428Data = {
    className: "iconadd-27",
};

const iconadd317Data = {
    src: "/img/union-17@1x.png",
};

const group2758228Data = {
    iconadd4Props: iconadd427Data,
    iconadd42Props: iconadd428Data,
    iconadd3Props: iconadd317Data,
};

const component976411Data = {
    src: "/img/rectangle-2308-19@1x.png",
};

const group273411Data = {
    component9764Props: component976411Data,
};

const group273012Data = {
    group2730: "/img/rectangle-2308-24@1x.png",
    stapleFood: "Staple Food",
};

const group273229Data = {
    overlapGroup9: "/img/rectangle-2308-26@1x.png",
    grainFood: "Grain Food",
};

const group273230Data = {
    overlapGroup9: "/img/rectangle-2308-8@1x.png",
    grainFood: "Added fat and oil",
    className: "group-3405-8",
};

const group273231Data = {
    overlapGroup9: "/img/rectangle-2308-9@1x.png",
    grainFood: " Processed Fruit",
    className: "group-3406-8",
};

const scrollGroup310Data = {
    group2734Props: group273411Data,
    group2730Props2: group273012Data,
    group2732Props2: group273229Data,
    group27322Props: group273230Data,
    group27323Props: group273231Data,
};

const scrollGroup210Data = {
    group2734Props: scrollGroup310Data,
};

const group27617Data = {
    scrollGroup2Props: scrollGroup210Data,
};

const component10627214Data = {
    home: "/img/path-11535-1@1x.png",
    setting: "/img/setting-2@1x.png",
};

const home41Data = {
    fontawsomeBars: "/img/fontawsome--bars--1@1x.png",
    subtraction40: "/img/subtraction-40-1@1x.png",
    subtraction81: "/img/path-20@1x.png",
    union13: "/img/union-13-8@1x.png",
    subtraction812: "/img/subtraction-81-8@1x.png",
    union132: "/img/union-13-59@1x.png",
    subtraction813: "/img/subtraction-81-10@1x.png",
    union133: "/img/union-13-11@1x.png",
    subtraction814: "/img/subtraction-81-11@1x.png",
    union134: "/img/union-13-12@1x.png",
    subtraction49: "/img/subtraction-49-1@1x.png",
    union11: "/img/union-11-1@1x.png",
    amount: " Amount",
    serving: "Serving",
    x1Serving3Oz: "*1 serving = 3 oz",
    beef: "Beef",
    path11553: "/img/path-11553-5@1x.png",
    color: "Tomato",
    spanText: "gCO",
    spanText2: "2",
    apple: "Apple",
    path11548: "/img/path-11548@1x.png",
    homeHeading42Props: homeHeading425Data,
    component10451Props: component104518Data,
    group2794Props: group27949Data,
    group278022Props: group2780222Data,
    group3142Props: group314219Data,
    group31422Props: group314220Data,
    group3144Props: group314410Data,
    group3181Props: group31816Data,
    group3182Props: group31823Data,
    group3161Props: group31613Data,
    group298232Props: group2982326Data,
    group28064Props: group280644Data,
    group28074Props: group280744Data,
    group2971Props: group29718Data,
    group3141Props: group31419Data,
    group31312Props: group3131220Data,
    group313122Props: group3131221Data,
    group31334Props: group3133410Data,
    group31344Props: group3134410Data,
    group29712Props: group297125Data,
    group31412Props: group314126Data,
    scrollGroup1Props: scrollGroup111Data,
    group2760Props: group276010Data,
    group275822Props: group2758228Data,
    group2761Props: group27617Data,
    component106272Props: component10627214Data,
};

const component94129Data = {
    className: "component-94-1-18",
};

const group1327Data = {
    className: "group-1-28",
};

const component951225Data = {
    overlapGroup4: "/img/rectangle-2302-1@1x.png",
    className: "component-95-12-24",
    component941Props: component94129Data,
    group132Props: group1327Data,
};

const homeHeading11Data = {
    component95122Props: component951225Data,
};

const layer238Data = {
    src: "/img/path-11542-6@1x.png",
    className: "layer-2-4",
};

const iconadd318Data = {
    src: "/img/union-14@1x.png",
    className: "iconadd-40",
};

const group271823Data = {
    className: "group-2718-6",
    layer23Props: layer238Data,
    iconadd3Props: iconadd318Data,
};

const component94130Data = {
    className: "group-2641-5",
};

const component941210Data = {
    className: "group-2642-5",
    component941Props: component94130Data,
};

const component99643Data = {
    className: "component-99-64",
};

const profile21Data = {
    src: "/img/path-11540-10@1x.png",
};

const scale21Data = {
    className: "scale-3",
    profileProps: profile21Data,
};

const group268842Data = {
    prawn: "Beans",
    className: "group-2688-10",
    scaleProps: scale21Data,
};

const profile22Data = {
    src: "/img/path-11540-10@1x.png",
};

const scale22Data = {
    className: "scale-3",
    profileProps: profile22Data,
};

const profile23Data = {
    src: "/img/path-11540-10@1x.png",
};

const scale23Data = {
    className: "scale-3",
    profileProps: profile23Data,
};

const profile24Data = {
    src: "/img/path-11540-10@1x.png",
};

const scale24Data = {
    className: "scale-3",
    profileProps: profile24Data,
};

const group3234Data = {
    artichokes: "Artichokes",
    scaleProps: scale24Data,
};

const component10627215Data = {
    home: "/img/path-11535-5@1x.png",
    setting: "/img/setting-12@1x.png",
    className: "component-106-20",
};

const profile25Data = {
    src: "/img/path-11540-10@1x.png",
};

const scale25Data = {
    className: "scale-17",
    profileProps: profile25Data,
};

const group32342Data = {
    asparagus: "Asparagus",
    scaleProps: scale25Data,
};

const profile26Data = {
    src: "/img/path-11540-10@1x.png",
};

const scale26Data = {
    className: "scale-3",
    profileProps: profile26Data,
};

const group32343Data = {
    artichokes: "Bell Pepper",
    className: "group-3234-1-2",
    scaleProps: scale26Data,
};

const group3321Data = {
    rectangle3291: "/img/rectangle-3291@1x.png",
    group3234Props: group32343Data,
};

const profile27Data = {
    src: "/img/path-11540-10@1x.png",
};

const scale27Data = {
    className: "scale-3",
    profileProps: profile27Data,
};

const profile28Data = {
    src: "/img/path-11540-10@1x.png",
};

const scale28Data = {
    className: "scale-18",
    profileProps: profile28Data,
};

const profile29Data = {
    src: "/img/path-11540-10@1x.png",
};

const scale29Data = {
    className: "scale-19",
    profileProps: profile29Data,
};

const group323422Data = {
    asparagus: "Cabbage",
    className: "group-3234-2",
    scaleProps: scale29Data,
};

const profile30Data = {
    src: "/img/path-11540-10@1x.png",
};

const scale30Data = {
    className: "scale-3",
    profileProps: profile30Data,
};

const profile31Data = {
    src: "/img/path-11540-10@1x.png",
};

const scale31Data = {
    className: "scale-3",
    profileProps: profile31Data,
};

const group32344Data = {
    artichokes: "Cauliflower",
    scaleProps: scale31Data,
};

const group33212Data = {
    rectangle3291: "/img/rectangle-3300@1x.png",
    group3234Props: group32344Data,
};

const profile32Data = {
    src: "/img/path-11540-10@1x.png",
};

const scale32Data = {
    className: "scale-3",
    profileProps: profile32Data,
};

const profile33Data = {
    src: "/img/path-11540-10@1x.png",
};

const scale33Data = {
    className: "scale-3",
    profileProps: profile33Data,
};

const profile34Data = {
    src: "/img/path-11540-10@1x.png",
};

const scale34Data = {
    className: "scale-3",
    profileProps: profile34Data,
};

const group323432Data = {
    surname: "Sweet corn",
    scaleProps: scale34Data,
};

const profile35Data = {
    src: "/img/path-11540-10@1x.png",
};

const scale35Data = {
    className: "scale-3",
    profileProps: profile35Data,
};

const group3330Data = {
    cucumbers: "Cucumbers",
    rectangle3306: "/img/rectangle-3306@1x.png",
    scaleProps: scale35Data,
};

const profile36Data = {
    src: "/img/path-11540-10@1x.png",
};

const scale36Data = {
    className: "scale-3",
    profileProps: profile36Data,
};

const profile37Data = {
    src: "/img/path-11540-10@1x.png",
};

const scale37Data = {
    className: "scale-3",
    profileProps: profile37Data,
};

const group323442Data = {
    escarole: "Escarole",
    scaleProps: scale37Data,
};

const profile38Data = {
    src: "/img/path-11540-10@1x.png",
};

const scale38Data = {
    className: "scale-3",
    profileProps: profile38Data,
};

const profile39Data = {
    src: "/img/path-11540-10@1x.png",
};

const scale39Data = {
    className: "scale-3",
    profileProps: profile39Data,
};

const profile40Data = {
    src: "/img/path-11540-10@1x.png",
};

const scale40Data = {
    className: "scale-3",
    profileProps: profile40Data,
};

const group33302Data = {
    cucumbers: "Head lettuce",
    rectangle3306: "/img/rectangle-3315@1x.png",
    className: "group-3335",
    scaleProps: scale40Data,
};

const profile41Data = {
    src: "/img/path-11540-10@1x.png",
};

const scale41Data = {
    className: "scale-20",
    profileProps: profile41Data,
};

const profile42Data = {
    src: "/img/path-11540-10@1x.png",
};

const scale42Data = {
    className: "scale-4",
    profileProps: profile42Data,
};

const group3242Data = {
    limeBeans: "Lime beans",
    scaleProps: scale42Data,
};

const profile43Data = {
    src: "/img/path-11540-10@1x.png",
};

const scale43Data = {
    className: "scale-4",
    profileProps: profile43Data,
};

const group32422Data = {
    limeBeans: "Mushrooms",
    scaleProps: scale43Data,
};

const profile44Data = {
    src: "/img/path-11540-32@1x.png",
    className: "profile-38",
};

const scale310Data = {
    x100G: "100g",
    x500G: "500g",
    x200G: "200g",
    profileProps: profile44Data,
};

const profile45Data = {
    src: "/img/path-11540-10@1x.png",
};

const scale44Data = {
    className: "scale-3",
    profileProps: profile45Data,
};

const group323443Data = {
    escarole: "Okra",
    className: "group-32-3",
    scaleProps: scale44Data,
};

const profile46Data = {
    src: "/img/path-11540-10@1x.png",
};

const scale45Data = {
    className: "scale-4",
    profileProps: profile46Data,
};

const group32423Data = {
    limeBeans: "Onions",
    scaleProps: scale45Data,
};

const profile47Data = {
    src: "/img/path-11540-10@1x.png",
};

const scale46Data = {
    className: "scale-4",
    profileProps: profile47Data,
};

const group32424Data = {
    limeBeans: "Pumpkin",
    scaleProps: scale46Data,
};

const profile48Data = {
    src: "/img/path-11540-10@1x.png",
};

const scale47Data = {
    className: "scale-4",
    profileProps: profile48Data,
};

const group32425Data = {
    limeBeans: "Radishes",
    scaleProps: scale47Data,
};

const profile49Data = {
    src: "/img/path-11540-10@1x.png",
};

const scale48Data = {
    className: "scale-4",
    profileProps: profile49Data,
};

const group32426Data = {
    limeBeans: "Squash",
    scaleProps: scale48Data,
};

const profile50Data = {
    src: "/img/path-11540-10@1x.png",
};

const scale49Data = {
    className: "scale-4",
    profileProps: profile50Data,
};

const profile51Data = {
    src: "/img/path-11540-10@1x.png",
};

const scale50Data = {
    className: "scale-3",
    profileProps: profile51Data,
};

const group323433Data = {
    surname: "Turnip greens",
    className: "group-32",
    scaleProps: scale50Data,
};

const iconArrowSmall7Data = {
    className: "icon-arrow-small-6",
};

const button7Data = {
    className: "button-6",
    iconArrowSmallProps: iconArrowSmall7Data,
};

const homeFreshVegetableData = {
    rectangle2308: "/img/rectangle-2308-16@1x.png",
    freshVegetable: "Fresh Vegetable",
    rectangle2336: "/img/rectangle-2336-1@1x.png",
    rectangle23362: "/img/rectangle-2336@1x.png",
    tamato: "Tamato",
    potato: "Potato",
    rectangle3286: "/img/rectangle-3286@1x.png",
    rectangle3288: "/img/rectangle-3288@1x.png",
    rectangle3289: "/img/rectangle-3289@1x.png",
    broccoli: "Broccoli",
    rectangle3291: "/img/rectangle-3291-1@1x.png",
    brusselsSprouts: "Brussels sprouts",
    rectangle3294: "/img/rectangle-3294@1x.png",
    rectangle3296: "/img/rectangle-3296@1x.png",
    carrots: "Carrots",
    rectangle3298: "/img/rectangle-3298@1x.png",
    celery: "Celery",
    rectangle3302: "/img/rectangle-3302-1@1x.png",
    collards: "Collards",
    rectangle33022: "/img/rectangle-3302@1x.png",
    rectangle3304: "/img/rectangle-3304@1x.png",
    eggplant: "Eggplant",
    rectangle3308: "/img/rectangle-3308@1x.png",
    rectangle3310: "/img/rectangle-3310@1x.png",
    garlic: "Garlic",
    rectangle3312: "/img/rectangle-3312@1x.png",
    kale: "Kale",
    rectangle3314: "/img/rectangle-3314@1x.png",
    text54: "Romaine & leaf lettuce",
    rectangle3318: "/img/rectangle-3318@1x.png",
    rectangle3319: "/img/rectangle-2336@1x.png",
    rectangle3320: "/img/rectangle-3320@1x.png",
    rectangle3321: "/img/rectangle-2336@1x.png",
    rectangle3322: "/img/rectangle-3322@1x.png",
    mustardGreens: "Mustard greens",
    rectangle3323: "/img/rectangle-3323@1x.png",
    rectangle3326: "/img/rectangle-3326@1x.png",
    rectangle3327: "/img/rectangle-2336@1x.png",
    rectangle3328: "/img/rectangle-3328@1x.png",
    rectangle3329: "/img/rectangle-2336@1x.png",
    rectangle3330: "/img/rectangle-3330@1x.png",
    rectangle3331: "/img/rectangle-3331@1x.png",
    rectangle3333: "/img/rectangle-2336@1x.png",
    rectangle3334: "/img/rectangle-3334@1x.png",
    surname: "Sweet potatoes",
    rectangle3335: "/img/rectangle-2336@1x.png",
    rectangle3339: "/img/rectangle-3320@1x.png",
    rectangle3336: "/img/rectangle-3336@1x.png",
    rectangle3337: "/img/rectangle-3337@1x.png",
    homeHeading11Props: homeHeading11Data,
    group27182Props: group271823Data,
    component9412Props: component941210Data,
    component9964Props: component99643Data,
    group26884Props: group268842Data,
    scaleProps: scale22Data,
    scale2Props: scale23Data,
    group3234Props: group3234Data,
    component106272Props: component10627215Data,
    group32342Props: group32342Data,
    group3321Props: group3321Data,
    scale3Props: scale27Data,
    scale4Props: scale28Data,
    group323422Props: group323422Data,
    scale5Props: scale30Data,
    group33212Props: group33212Data,
    scale6Props: scale32Data,
    scale7Props: scale33Data,
    group32343Props: group323432Data,
    group3330Props: group3330Data,
    scale8Props: scale36Data,
    group32344Props: group323442Data,
    scale9Props: scale38Data,
    scale10Props: scale39Data,
    group33302Props: group33302Data,
    scale11Props: scale41Data,
    group3242Props: group3242Data,
    group32422Props: group32422Data,
    scale3Props2: scale310Data,
    group323442Props: group323443Data,
    group32423Props: group32423Data,
    group32424Props: group32424Data,
    group32425Props: group32425Data,
    group32426Props: group32426Data,
    scale12Props: scale49Data,
    group323432Props: group323433Data,
    buttonProps: button7Data,
};

const component94131Data = {
    className: "component-94-1-19",
};

const network421Data = {
    path67: "/img/path-67-10@1x.png",
    path68: "/img/path-68-10@1x.png",
};

const group119Data = {
    className: "group-1-18",
    networkProps: network421Data,
};

const component951216Data = {
    overlapGroup4: "/img/rectangle-2302-10@1x.png",
    className: "component-95-12-14",
    group1Props: component94131Data,
    group1Props2: group119Data,
};

const homeHeading12Data = {
    setting: "Setting",
    component9512Props: component951216Data,
};

const iconArrow6Data = {
    line: "/img/line-18@1x.png",
    className: "icon-arrow-5",
};

const iconClose5Data = {
    overlapGroup2: "/img/line-19@1x.png",
    line: "/img/line-20@1x.png",
    className: "icon-close-4",
};

const inputField4Data = {
    children: "Email",
    className: "input-field-2",
};

const iconMail2Data = {
    className: "icon-mail-1",
};

const inputField5Data = {
    children: "Password",
    className: "input-field-3",
};

const iconPadlock2Data = {
    className: "icon-padlock-1",
};

const card7Data = {
    className: "button-18",
};

const signInData = {
    letsGetStarted: "Let’s get started!",
    homeHeading12Props: homeHeading12Data,
    iconArrowProps: iconArrow6Data,
    iconCloseProps: iconClose5Data,
    inputFieldProps: inputField4Data,
    iconMailProps: iconMail2Data,
    inputField2Props: inputField5Data,
    iconPadlockProps: iconPadlock2Data,
    cardProps: card7Data,
};

const component94132Data = {
    className: "rectangle-2324",
};

const component94133Data = {
    className: "component-94-1-20",
};

const component951242Data = {
    component941Props: component94133Data,
};

const homeHeading13Data = {
    component95124Props: component951242Data,
};

const component94134Data = {
    className: "group-2641-6",
};

const component941211Data = {
    className: "group-2642-6",
    component941Props: component94134Data,
};

const title6Data = {
    children: "Meat",
    className: "meat-21",
};

const layer239Data = {
    src: "/img/path-11542-6@1x.png",
    className: "layer-2-4",
};

const iconadd319Data = {
    src: "/img/union-10@1x.png",
    className: "iconadd-41",
};

const group271824Data = {
    className: "group-2718-7",
    layer23Props: layer239Data,
    iconadd3Props: iconadd319Data,
};

const profile52Data = {
    src: "/img/path-11540-10@1x.png",
    className: "profile-39",
};

const profile53Data = {
    src: "/img/path-11540-10@1x.png",
    className: "profile-40",
};

const profile54Data = {
    src: "/img/path-11540-10@1x.png",
    className: "profile-30",
};

const group32932Data = {
    className: "group-2676",
};

const group2681Data = {
    profileProps: profile54Data,
    group3293Props: group32932Data,
};

const group26252Data = {
    className: "group-2626",
};

const profile55Data = {
    src: "/img/path-11540-28@1x.png",
    className: "profile-41",
};

const profile56Data = {
    src: "/img/path-11540-10@1x.png",
    className: "profile-30",
};

const group32933Data = {
    className: "group-2676",
};

const group26812Data = {
    className: "group-3308",
    profileProps: profile56Data,
    group3293Props: group32933Data,
};

const component10627216Data = {
    home: "/img/path-11535-5@1x.png",
    setting: "/img/setting-12@1x.png",
    className: "component-106-21",
};

const profile57Data = {
    src: "/img/path-11540-10@1x.png",
};

const profile58Data = {
    src: "/img/path-11540-10@1x.png",
};

const profile59Data = {
    src: "/img/path-11540-10@1x.png",
};

const profile60Data = {
    src: "/img/path-11540-10@1x.png",
};

const button8Data = {
    className: "button-7",
};

const homeMeatsData = {
    rectangle2308: "/img/rectangle-2308-15@1x.png",
    wifi: "/img/group-51-10@1x.png",
    text58: "12:30",
    rectangle2330: "/img/rectangle-2330@1x.png",
    poultry: "Poultry",
    rectangle2337: "/img/rectangle-2337@1x.png",
    beef: "Beef",
    x100G: "100g",
    x200G: "200g",
    x500G: "500g",
    rectangle2335: "/img/rectangle-2335@1x.png",
    discoverByMeal: "Discover by Meal",
    rectangle23352: "/img/rectangle-2335-5@1x.png",
    rectangle23353: "/img/rectangle-2335-4@1x.png",
    veal: "Veal",
    x100G2: "100g",
    x200G2: "200g",
    x500G2: "500g",
    rectangle23354: "/img/rectangle-2335-1@1x.png",
    shellfish: "Shellfish",
    x100G3: "100g",
    x200G3: "200g",
    x500G3: "500g",
    rectangle23355: "/img/rectangle-2335-1@1x.png",
    cannedFish: "Canned fish",
    x100G4: "100g",
    x200G4: "200g",
    x500G4: "500g",
    rectangle23356: "/img/rectangle-2335-3@1x.png",
    curedFish: "Cured fish",
    x100G5: "100g",
    x200G5: "200g",
    x500G5: "500g",
    component941Props: component94132Data,
    homeHeading13Props: homeHeading13Data,
    component9412Props: component941211Data,
    titleProps: title6Data,
    group27182Props: group271824Data,
    profileProps: profile52Data,
    profile2Props: profile53Data,
    group2681Props: group2681Data,
    group2625Props: group26252Data,
    profile3Props: profile55Data,
    group26812Props: group26812Data,
    component106272Props: component10627216Data,
    profile4Props: profile57Data,
    profile5Props: profile58Data,
    profile6Props: profile59Data,
    profile7Props: profile60Data,
    buttonProps: button8Data,
};

const group134Data = {
    className: "group-1-13",
};

const layer2310Data = {
    src: "/img/path-11542-6@1x.png",
    className: "layer-2-4",
};

const iconadd320Data = {
    src: "/img/union-10@1x.png",
    className: "iconadd-42",
};

const group271825Data = {
    layer23Props: layer2310Data,
    iconadd3Props: iconadd320Data,
};

const component94135Data = {
    className: "group-2641-7",
};

const component941212Data = {
    className: "group-2642-7",
    component941Props: component94135Data,
};

const title7Data = {
    children: "Added Fat and Oil",
    className: "added-fat-and-oil-10",
};

const component99644Data = {
    className: "rectangle-2316",
};

const component99645Data = {
    className: "rectangle-2329",
};

const component99646Data = {
    className: "rectangle-232",
};

const component99647Data = {
    className: "rectangle-232",
};

const component1007Data = {
    component9964Props: component99644Data,
    component99642Props: component99645Data,
    component99643Props: component99646Data,
    component99644Props: component99647Data,
};

const profile61Data = {
    src: "/img/path-11540-10@1x.png",
};

const scale51Data = {
    className: "scale-5",
    profileProps: profile61Data,
};

const profile62Data = {
    src: "/img/path-11540-10@1x.png",
};

const scale52Data = {
    className: "scale-5",
    profileProps: profile62Data,
};

const profile63Data = {
    src: "/img/path-11540-10@1x.png",
};

const scale53Data = {
    className: "scale-5",
    profileProps: profile63Data,
};

const profile64Data = {
    src: "/img/path-11540-10@1x.png",
};

const scale54Data = {
    className: "scale-5",
    profileProps: profile64Data,
};

const group3341Data = {
    cookingOil: "Cooking oil",
    scaleProps: scale54Data,
};

const component10627217Data = {
    home: "/img/path-11535-5@1x.png",
    setting: "/img/setting-12@1x.png",
    className: "component-106-23",
};

const profile65Data = {
    src: "/img/path-11540-10@1x.png",
};

const scale55Data = {
    className: "scale-5",
    profileProps: profile65Data,
};

const group33412Data = {
    cookingOil: "Added fat",
    className: "group-3341-1",
    scaleProps: scale55Data,
};

const iconArrowSmall9Data = {
    className: "icon-arrow-small-8",
};

const button9Data = {
    className: "button-8",
    iconArrowSmallProps: iconArrowSmall9Data,
};

const homeAddedFatAndOilData = {
    overlapGroup1: "/img/rectangle-2308-52@1x.png",
    rectangle2356: "/img/rectangle-2356-3@1x.png",
    butter: "Butter",
    rectangle23562: "/img/rectangle-2356-4@1x.png",
    margarine: "Margarine",
    rectangle23563: "/img/rectangle-2356-5@1x.png",
    lardBeefTallow: "Lard & beef tallow",
    group13Props: group134Data,
    group27182Props: group271825Data,
    component9412Props: component941212Data,
    titleProps: title7Data,
    component1007Props: component1007Data,
    scaleProps: scale51Data,
    scale2Props: scale52Data,
    scale3Props: scale53Data,
    group3341Props: group3341Data,
    component106272Props: component10627217Data,
    group33412Props: group33412Data,
    buttonProps: button9Data,
};

const group135Data = {
    className: "group-1-31",
};

const layer2311Data = {
    src: "/img/path-11542-5@1x.png",
    className: "layer-2-4",
};

const iconadd321Data = {
    src: "/img/union-16@1x.png",
    className: "iconadd-43",
};

const group27184Data = {
    className: "group-2718-2",
    layer2Props: layer2311Data,
    iconadd3Props: iconadd321Data,
};

const component94136Data = {
    className: "group-2641-8",
};

const component941213Data = {
    className: "group-2642-8",
    component941Props: component94136Data,
};

const profile66Data = {
    src: "/img/path-11540-10@1x.png",
};

const scale56Data = {
    className: "scale-6",
    profileProps: profile66Data,
};

const profile67Data = {
    src: "/img/path-11540-10@1x.png",
};

const scale57Data = {
    className: "scale-6",
    profileProps: profile67Data,
};

const profile68Data = {
    src: "/img/path-11540-10@1x.png",
};

const scale58Data = {
    className: "scale-6",
    profileProps: profile68Data,
};

const group268852Data = {
    tofu: "Rice",
    className: "group-2688-12",
    scaleProps: scale58Data,
};

const profile69Data = {
    src: "/img/path-11540-10@1x.png",
};

const scale59Data = {
    className: "scale-6",
    profileProps: profile69Data,
};

const component1009Data = {
    rectangle2357: "/img/rectangle-2357-8@1x.png",
    wheatFlours: "Wheat flours",
    overlapGroup3: "/img/path-11679@1x.png",
    oatProduct: "Oat product",
    cornProduct: "Corn product",
    scaleProps: scale56Data,
    scale2Props: scale57Data,
    group26885Props: group268852Data,
    scale3Props: scale59Data,
};

const component10627218Data = {
    home: "/img/path-11535-5@1x.png",
    setting: "/img/setting-12@1x.png",
    className: "component-106-24",
};

const iconArrowSmall10Data = {
    className: "icon-arrow-small-9",
};

const button10Data = {
    className: "button-9",
    iconArrowSmallProps: iconArrowSmall10Data,
};

const homeGrainFoodData = {
    overlapGroup: "/img/rectangle-2308-18@1x.png",
    grainFood: "Grain Food",
    rectangle2357: "/img/rectangle-2357-5@1x.png",
    rectangle23572: "/img/rectangle-2357-6@1x.png",
    rectangle23573: "/img/rectangle-2357-7@1x.png",
    group13Props: group135Data,
    group2718Props: group27184Data,
    component9412Props: component941213Data,
    component1009Props: component1009Data,
    component106272Props: component10627218Data,
    buttonProps: button10Data,
};

const component94137Data = {
    className: "component-94-1-21",
};

const network422Data = {
    path67: "/img/path-67-10@1x.png",
    path68: "/img/path-68-10@1x.png",
};

const group120Data = {
    className: "group-1-19",
    networkProps: network422Data,
};

const component951217Data = {
    overlapGroup4: "/img/rectangle-2302-13@1x.png",
    className: "component-95-12-15",
    component941Props: component94137Data,
    group1Props: group120Data,
};

const homeHeading102Data = {
    component9512Props: component951217Data,
};

const group2971523Data = {
    className: "group-40-8",
};

const component104519Data = {
    surname: "Day",
    week: "Week",
    month: "Month",
    className: "component-104-54",
};

const group276011Data = {
    className: "group-2760-10",
};

const iconadd430Data = {
    className: "iconadd-29",
};

const iconadd431Data = {
    className: "iconadd-30",
};

const iconadd322Data = {
    src: "/img/union-17@1x.png",
};

const group27809Data = {
    className: "group-2780-10",
};

const group279410Data = {
    className: "group-2794-9",
};

const group31614Data = {
    union13: "/img/union-13-24@1x.png",
};

const group298432Data = {
    group3161Props: group31614Data,
};

const group31934Data = {
    union11: "/img/subtraction-49-13@1x.png",
    group3193: "/img/union-11-1@1x.png",
    className: "group-3172-1",
};

const group31712Data = {
    group3193Props: group31934Data,
};

const group2971423Data = {
    slider: "/img/slider-11@1x.png",
    className: "group-2971-15",
};

const group2806323Data = {
    className: "group-2806-2",
};

const maskGroup42Data = {
    group280632Props: group2806323Data,
};

const group313121Data = {
    className: "group-3131-10",
};

const group313130Data = {
    className: "group-3132-10",
};

const group313312Data = {
    className: "group-3133-10",
};

const group3141623Data = {
    className: "group-3141-21",
    group31312Props: group313121Data,
    group31312Props2: group313130Data,
    group31312Props3: group313312Data,
};

const group3131222Data = {
    className: "group-3131-17",
};

const group3131223Data = {
    className: "group-3132-22",
};

const group3133411Data = {
    className: "group-3133-17",
};

const group314163Data = {
    group31312Props: group3131222Data,
    group313122Props: group3131223Data,
    group31334Props: group3133411Data,
};

const group31474Data = {
    union12: "/img/union-12-22@1x.png",
};

const group31483Data = {
    union12: "/img/union-12-23@1x.png",
};

const group31493Data = {
    className: "group-3149-2",
};

const group31503Data = {
    union12: "/img/union-12-25@1x.png",
};

const group298223Data = {
    group3147Props: group31474Data,
    group3148Props: group31483Data,
    group3149Props: group31493Data,
    group3150Props: group31503Data,
};

const group31313221Data = {
    className: "group-3131-25",
};

const group31313222Data = {
    className: "group-3132-34",
};

const group31333211Data = {
    className: "group-3133-25",
};

const group31343211Data = {
    className: "group-3134-27",
};

const group3141523Data = {
    className: "group-3141-28",
    group31313Props: group31313221Data,
    group313132Props: group31313222Data,
    group31333Props: group31333211Data,
    group31343Props: group31343211Data,
};

const group314221Data = {
    className: "group-3142-10",
};

const group314222Data = {
    className: "group-3143-10",
};

const group314411Data = {
    className: "group-3144-10",
};

const maskGroup102Data = {
    group3142Props: group314221Data,
    group31422Props: group314222Data,
    group3144Props: group314411Data,
};

const group31615Data = {
    union13: "/img/union-13-24@1x.png",
};

const group31702Data = {
    union13: "/img/union-13-40@1x.png",
};

const group31642Data = {
    group3161Props: group31615Data,
    group3170Props: group31702Data,
};

const component991212Data = {
    group2756: "/img/path-11535-18@1x.png",
    setting: "/img/setting-10@1x.png",
};

const onBoardingCalculateData = {
    subtraction78: "/img/subtraction-49-1@1x.png",
    fontawsomeBars: "/img/fontawsome--bars--1@1x.png",
    path11548: "/img/path-11548-10@1x.png",
    rectangle2366: "/img/rectangle-2366-1@1x.png",
    troubleZone: "Breakfast",
    x5Min6Exercises: "42g",
    rectangle2368: "/img/rectangle-2368-1@1x.png",
    troubleZone2: "Lunch",
    x5Min6Exercises2: "54g",
    rectangle2369: "/img/rectangle-2369-1@1x.png",
    troubleZone3: "Dinner",
    x5Min6Exercises3: "86g",
    rectangle2370: "/img/rectangle-2370-1@1x.png",
    troubleZone4: "Other",
    x5Min6Exercises4: "425g",
    serving: "Serving",
    x1Serving3Oz: "*1 serving = 3 oz",
    color: "Tomato",
    beef: "Beef",
    apple: "Apple",
    amount: " Amount",
    address: "340  gCO2e",
    homeHeading10Props: homeHeading102Data,
    group297152Props: group2971523Data,
    component10451Props: component104519Data,
    group2760Props: group276011Data,
    iconadd4Props: iconadd430Data,
    iconadd42Props: iconadd431Data,
    iconadd3Props: iconadd322Data,
    group2780Props: group27809Data,
    group2794Props: group279410Data,
    group29843Props: group298432Data,
    group3171Props: group31712Data,
    group297142Props: group2971423Data,
    maskGroup4Props: maskGroup42Data,
    group314162Props: group3141623Data,
    group31416Props: group314163Data,
    group29822Props: group298223Data,
    group314152Props: group3141523Data,
    maskGroup10Props: maskGroup102Data,
    group3164Props: group31642Data,
    component99121Props: component991212Data,
};

const component94138Data = {
    className: "component-94-1-22",
};

const component951243Data = {
    component941Props: component94138Data,
};

const homeHeading132Data = {
    className: "home-heading-29",
    component95124Props: component951243Data,
};

const component976412Data = {
    src: "/img/rectangle-2308-14@1x.png",
    className: "component-97-5",
};

const profile70Data = {
    src: "/img/path-11540-10@1x.png",
};

const scale60Data = {
    className: "scale-7",
    profileProps: profile70Data,
};

const group3280Data = {
    scaleProps: scale60Data,
};

const profile71Data = {
    src: "/img/path-11540-10@1x.png",
};

const scale61Data = {
    className: "scale-7",
    profileProps: profile71Data,
};

const group3281Data = {
    scaleProps: scale61Data,
};

const profile72Data = {
    src: "/img/path-11540-10@1x.png",
};

const scale62Data = {
    className: "scale-21",
    profileProps: profile72Data,
};

const group3282Data = {
    scaleProps: scale62Data,
};

const profile73Data = {
    src: "/img/path-11540-10@1x.png",
};

const scale63Data = {
    className: "scale-7",
    profileProps: profile73Data,
};

const group268843Data = {
    prawn: "Cirtus",
    className: "group-2673",
    scaleProps: scale63Data,
};

const group2674Data = {
    group26884Props: group268843Data,
};

const profile74Data = {
    src: "/img/path-11540-10@1x.png",
};

const scale64Data = {
    className: "scale-8",
    profileProps: profile74Data,
};

const group3283Data = {
    scaleProps: scale64Data,
};

const profile75Data = {
    src: "/img/path-11540-10@1x.png",
};

const scale65Data = {
    className: "scale-22",
    profileProps: profile75Data,
};

const group3274Data = {
    scaleProps: scale65Data,
};

const profile76Data = {
    src: "/img/path-11540-10@1x.png",
};

const scale66Data = {
    className: "scale-8",
    profileProps: profile76Data,
};

const group3275Data = {
    scaleProps: scale66Data,
};

const profile77Data = {
    src: "/img/path-11540-10@1x.png",
};

const scale67Data = {
    className: "scale-8",
    profileProps: profile77Data,
};

const group3276Data = {
    cranberries: "Cranberries",
    rectangle3273: "/img/rectangle-3273@1x.png",
    scaleProps: scale67Data,
};

const profile78Data = {
    src: "/img/path-11540-10@1x.png",
};

const scale68Data = {
    className: "scale-8",
    profileProps: profile78Data,
};

const group3277Data = {
    scaleProps: scale68Data,
};

const profile79Data = {
    src: "/img/path-11540-10@1x.png",
};

const scale69Data = {
    className: "scale-8",
    profileProps: profile79Data,
};

const group3278Data = {
    scaleProps: scale69Data,
};

const profile80Data = {
    src: "/img/path-11540-10@1x.png",
};

const scale70Data = {
    className: "scale-8",
    profileProps: profile80Data,
};

const group3279Data = {
    scaleProps: scale70Data,
};

const profile81Data = {
    src: "/img/path-11540-10@1x.png",
};

const scale71Data = {
    className: "scale-8",
    profileProps: profile81Data,
};

const group3285Data = {
    scaleProps: scale71Data,
};

const profile82Data = {
    src: "/img/path-11540-10@1x.png",
};

const scale72Data = {
    className: "scale-8",
    profileProps: profile82Data,
};

const group3286Data = {
    scaleProps: scale72Data,
};

const profile83Data = {
    src: "/img/path-11540-10@1x.png",
};

const scale73Data = {
    className: "scale-8",
    profileProps: profile83Data,
};

const group32762Data = {
    cranberries: "Pineapples",
    rectangle3273: "/img/rectangle-3280@1x.png",
    className: "group-32-4",
    scaleProps: scale73Data,
};

const profile84Data = {
    src: "/img/path-11540-10@1x.png",
};

const scale74Data = {
    className: "scale-8",
    profileProps: profile84Data,
};

const group3288Data = {
    scaleProps: scale74Data,
};

const profile85Data = {
    src: "/img/path-11540-10@1x.png",
};

const scale75Data = {
    className: "scale-8",
    profileProps: profile85Data,
};

const group3289Data = {
    scaleProps: scale75Data,
};

const profile86Data = {
    src: "/img/path-11540-10@1x.png",
};

const scale76Data = {
    className: "scale-8",
    profileProps: profile86Data,
};

const group3290Data = {
    scaleProps: scale76Data,
};

const profile87Data = {
    src: "/img/path-11540-10@1x.png",
};

const scale77Data = {
    className: "scale-8",
    profileProps: profile87Data,
};

const group3291Data = {
    scaleProps: scale77Data,
};

const profile88Data = {
    src: "/img/path-11540-10@1x.png",
};

const scale78Data = {
    className: "scale-8",
    profileProps: profile88Data,
};

const group3292Data = {
    scaleProps: scale78Data,
};

const profile89Data = {
    src: "/img/path-11540-10@1x.png",
};

const scale79Data = {
    className: "scale-8",
    profileProps: profile89Data,
};

const group3284Data = {
    scaleProps: scale79Data,
};

const profile90Data = {
    src: "/img/path-11540-10@1x.png",
};

const scale80Data = {
    className: "scale-7",
    profileProps: profile90Data,
};

const group3273Data = {
    scaleProps: scale80Data,
};

const layer2312Data = {
    src: "/img/path-11542-5@1x.png",
    className: "layer-2-4",
};

const iconadd323Data = {
    src: "/img/union-10@1x.png",
    className: "iconadd-45",
};

const group271826Data = {
    className: "group-2718-9",
    layer23Props: layer2312Data,
    iconadd3Props: iconadd323Data,
};

const group137Data = {
    className: "group-1-33",
};

const component10627219Data = {
    home: "/img/path-11535-5@1x.png",
    setting: "/img/setting-12@1x.png",
    className: "component-106-22",
};

const iconArrowSmall11Data = {
    className: "icon-arrow-small-10",
};

const button11Data = {
    className: "button-10",
    iconArrowSmallProps: iconArrowSmall11Data,
};

const freshFruitData = {
    homeHeading13Props: homeHeading132Data,
    component9764Props: component976412Data,
    group3280Props: group3280Data,
    group3281Props: group3281Data,
    group3282Props: group3282Data,
    group2674Props: group2674Data,
    group3283Props: group3283Data,
    group3274Props: group3274Data,
    group3275Props: group3275Data,
    group3276Props: group3276Data,
    group3277Props: group3277Data,
    group3278Props: group3278Data,
    group3279Props: group3279Data,
    group3285Props: group3285Data,
    group3286Props: group3286Data,
    group32762Props: group32762Data,
    group3288Props: group3288Data,
    group3289Props: group3289Data,
    group3290Props: group3290Data,
    group3291Props: group3291Data,
    group3292Props: group3292Data,
    group3284Props: group3284Data,
    group3273Props: group3273Data,
    group27182Props: group271826Data,
    group13Props: group137Data,
    component106272Props: component10627219Data,
    buttonProps: button11Data,
};

const iconSearch3Data = {
    src: "/img/line-21@1x.png",
};

const iconArrow7Data = {
    line: "/img/line-18@1x.png",
    className: "icon-arrow-6",
};

const component94139Data = {
    className: "component-94-1-23",
};

const network423Data = {
    path67: "/img/path-67-10@1x.png",
    path68: "/img/path-68-10@1x.png",
};

const group121Data = {
    className: "group-1-20",
    networkProps: network423Data,
};

const component951218Data = {
    overlapGroup4: "/img/rectangle-2302-10@1x.png",
    className: "component-95-12-16",
    group1Props: component94139Data,
    group1Props2: group121Data,
};

const homeHeading6Data = {
    todaysFeed: "Search",
    className: "home-heading-10",
    component9512Props: component951218Data,
};

const bgShadow24Data = {
    className: "bg-shadow-3",
};

const iconClose6Data = {
    overlapGroup2: "/img/line-19@1x.png",
    line: "/img/line-20@1x.png",
    className: "icon-close-5",
};

const component1271Data = {
    homeHeadingProps: homeHeading6Data,
    bgShadow2Props: bgShadow24Data,
    iconCloseProps: iconClose6Data,
};

const component94140Data = {
    className: "rectangle",
};

const component1281Data = {
    price: "Q",
    w: "W",
    e: "E",
    price2: "R",
    t: "T",
    y: "Y",
    u: "U",
    i: "I",
    o: "O",
    price3: "P",
    a: "A",
    price4: "S",
    d: "D",
    f: "F",
    g: "G",
    h: "H",
    j: "J",
    k: "K",
    price5: "L",
    z: "Z",
    union4: "/img/union-4-1@1x.png",
    x: "X",
    c: "C",
    v: "V",
    b: "B",
    n: "N",
    m: "M",
    union5: "/img/union-5-1@1x.png",
    number: "123",
    space: "SPACE",
    go: "Go",
    component941Props: component94140Data,
};

const keyboardData = {
    component1281Props: component1281Data,
};

const searchData = {
    iconSearch3Props: iconSearch3Data,
    iconArrowProps: iconArrow7Data,
    component1271Props: component1271Data,
    keyboardProps: keyboardData,
};

const layer2313Data = {
    src: "/img/path-11542-5@1x.png",
    className: "layer-2-12",
};

const group138Data = {
    className: "group-1-34",
};

const iconadd324Data = {
    src: "/img/union-16@1x.png",
    className: "iconadd-46",
};

const component94141Data = {
    className: "group-2641-9",
};

const component941214Data = {
    className: "group-2642-9",
    component941Props: component94141Data,
};

const title8Data = {
    children: "Processed Fruit",
    className: "processed-fruit-10",
};

const profile91Data = {
    src: "/img/path-11540-10@1x.png",
};

const scale81Data = {
    className: "scale-9",
    profileProps: profile91Data,
};

const profile92Data = {
    src: "/img/path-11540-10@1x.png",
};

const scale82Data = {
    className: "scale-23",
    profileProps: profile92Data,
};

const profile93Data = {
    src: "/img/path-11540-10@1x.png",
};

const scale83Data = {
    className: "scale-9",
    profileProps: profile93Data,
};

const profile94Data = {
    src: "/img/path-11540-10@1x.png",
};

const scale84Data = {
    className: "scale-9",
    profileProps: profile94Data,
};

const component10010Data = {
    cannedFruit: "Canned Fruit",
    frozenFruit: "Frozen Fruit",
    driedFruit: "Dried Fruit",
    rectangle2356: "/img/rectangle-2356-8@1x.png",
    fruitJuice: "Fruit Juice",
    scaleProps: scale81Data,
    scale2Props: scale82Data,
    scale3Props: scale83Data,
    scale4Props: scale84Data,
};

const component10627220Data = {
    home: "/img/path-11535-5@1x.png",
    setting: "/img/setting-12@1x.png",
    className: "component-106-25",
};

const button12Data = {
    className: "button-11",
};

const homeProcessedFruitData = {
    overlapGroup1: "/img/rectangle-2308-27@1x.png",
    rectangle2336: "/img/rectangle-2336-6@1x.png",
    group3269: "/img/rectangle-2336-7@1x.png",
    rectangle2354: "/img/rectangle-2354-2@1x.png",
    layer23Props: layer2313Data,
    group13Props: group138Data,
    iconadd3Props: iconadd324Data,
    component9412Props: component941214Data,
    titleProps: title8Data,
    component10010Props: component10010Data,
    component106272Props: component10627220Data,
    buttonProps: button12Data,
};

const component94142Data = {
    className: "component-94-1-24",
};

const network424Data = {
    path67: "/img/path-67-10@1x.png",
    path68: "/img/path-68-10@1x.png",
};

const group122Data = {
    networkProps: network424Data,
};

const component951219Data = {
    overlapGroup4: "/img/rectangle-2302-1@1x.png",
    className: "component-95-12-17",
    component941Props: component94142Data,
    group1Props: group122Data,
};

const homeHeading7Data = {
    todaysFeed: "Today’s Feed",
    className: "home-heading-11",
    component9512Props: component951219Data,
};

const totalCo217Data = {
    className: "total-co2-16",
};

const card1324Data = {
    totalCo2Props: totalCo217Data,
};

const component94143Data = {
    className: "group-2641-10",
};

const component941215Data = {
    className: "group-2642-10",
    component941Props: component94143Data,
};

const title9Data = {
    children: "Other",
    className: "other",
};

const iconArrowSmall13Data = {
    className: "icon-arrow-small-12",
};

const button13Data = {
    className: "button-12",
    iconArrowSmallProps: iconArrowSmall13Data,
};

const group26714Data = {
    className: "group-2670-2",
};

const network425Data = {
    path67: "/img/path-67-10@1x.png",
    path68: "/img/path-68-10@1x.png",
};

const group123Data = {
    className: "group-1-22",
    networkProps: network425Data,
};

const iconadd325Data = {
    src: "/img/union-15@1x.png",
    className: "iconadd-47",
};

const component10627221Data = {
    home: "/img/path-11535-1@1x.png",
    setting: "/img/setting-10@1x.png",
    className: "component-106-16",
};

const otherData = {
    discoverByMeal: "Discover by Meal",
    rectangle2308: "/img/rectangle-2308-13@1x.png",
    x100G: "100g",
    rectangle2377: "/img/rectangle-2377-1@1x.png",
    rectangle23772: "/img/rectangle-2377-2@1x.png",
    darkChocolate: "Dark Chocolate",
    cheese: "Cheese",
    x100G2: "100g",
    q3Icons: "/img/path-11542-2@1x.png",
    homeHeadingProps: homeHeading7Data,
    card132Props: card1324Data,
    component9412Props: component941215Data,
    titleProps: title9Data,
    buttonProps: button13Data,
    group2671Props: group26714Data,
    group1Props: group123Data,
    iconadd3Props: iconadd325Data,
    component106272Props: component10627221Data,
};

const component99648Data = {
    className: "rectangle-2322-1",
};

const component94144Data = {
    className: "component-94-1-25",
};

const group1328Data = {
    className: "group-1-29",
};

const component951226Data = {
    overlapGroup4: "/img/rectangle-2302-1@1x.png",
    className: "component-95-12-25",
    component941Props: component94144Data,
    group132Props: group1328Data,
};

const homeHeading112Data = {
    className: "home-heading-25",
    component95122Props: component951226Data,
};

const totalCo218Data = {
    className: "total-co2-17",
};

const card14Data = {
    totalCo2Props: totalCo218Data,
};

const iconArrowSmall14Data = {
    className: "icon-arrow-small-13",
};

const button14Data = {
    className: "button-13",
    iconArrowSmallProps: iconArrowSmall14Data,
};

const profile95Data = {
    src: "/img/path-11540-10@1x.png",
};

const scale85Data = {
    className: "scale-10",
    profileProps: profile95Data,
};

const group268822Data = {
    beans: "Coffee",
    className: "group-2688-7",
    scaleProps: scale85Data,
};

const profile96Data = {
    src: "/img/path-11540-10@1x.png",
};

const scale86Data = {
    className: "scale-10",
    profileProps: profile96Data,
};

const profile97Data = {
    src: "/img/path-11540-10@1x.png",
};

const scale87Data = {
    className: "scale-10",
    profileProps: profile97Data,
};

const group268832Data = {
    eggs: "Wine",
    className: "group-2692",
    scaleProps: scale87Data,
};

const profile98Data = {
    src: "/img/path-11540-10@1x.png",
};

const scale88Data = {
    className: "scale-10",
    profileProps: profile98Data,
};

const component1006Data = {
    place: "Tea",
    place2: "Beer",
    group26882Props: group268822Data,
    scaleProps: scale86Data,
    group26883Props: group268832Data,
    scale2Props: scale88Data,
};

const component94145Data = {
    className: "group-2641-11",
};

const component941216Data = {
    className: "group-2642-11",
    component941Props: component94145Data,
};

const layer2314Data = {
    src: "/img/path-11542-14@1x.png",
    className: "layer-2-4",
};

const iconadd326Data = {
    src: "/img/union-15@1x.png",
    className: "iconadd-48",
};

const group271827Data = {
    className: "group-2718-10",
    layer23Props: layer2314Data,
    iconadd3Props: iconadd326Data,
};

const group27452Data = {
    className: "group-2745-2",
};

const component991213Data = {
    group2756: "/img/path-11535-28@1x.png",
    setting: "/img/setting-12@1x.png",
    className: "component-99-78",
};

const menu2Data = {
    overlapGroup16: "/img/path-11547-10@1x.png",
    home: "/img/path-11535-27@1x.png",
    activity: "/img/activity-1@1x.png",
    profile: "/img/path-11532-10@1x.png",
    setting: "/img/setting-12@1x.png",
};

const homeDrinkData = {
    discoverByMeal: "Discover by Meal",
    rectangle2308: "/img/rectangle-2308-129@1x.png",
    drink: "Drink",
    rectangle2336: "/img/rectangle-2336-8@1x.png",
    rectangle23362: "/img/rectangle-2336-9@1x.png",
    rectangle23363: "/img/rectangle-2336-10@1x.png",
    rectangle23364: "/img/rectangle-2336-11@1x.png",
    component9964Props: component99648Data,
    homeHeading11Props: homeHeading112Data,
    card14Props: card14Data,
    buttonProps: button14Data,
    component1006Props: component1006Data,
    component9412Props: component941216Data,
    group27182Props: group271827Data,
    group2745Props: group27452Data,
    component99121Props: component991213Data,
    menu2Props: menu2Data,
};

const component94146Data = {
    className: "component-94-1-26",
};

const group1329Data = {
    className: "group-1-30",
};

const component951227Data = {
    overlapGroup4: "/img/rectangle-2302-1@1x.png",
    className: "component-95-12-26",
    component941Props: component94146Data,
    group132Props: group1329Data,
};

const homeHeading113Data = {
    className: "home-heading-26",
    component95122Props: component951227Data,
};

const totalCo219Data = {
    className: "total-co2-18",
};

const card143Data = {
    totalCo2Props: totalCo219Data,
};

const profile99Data = {
    src: "/img/path-11540-10@1x.png",
};

const scale89Data = {
    className: "scale-11",
    profileProps: profile99Data,
};

const group26886Data = {
    fruitVegetables: "Dark Chocolate",
    className: "group-2688-4",
    scaleProps: scale89Data,
};

const profile100Data = {
    src: "/img/path-11540-10@1x.png",
};

const scale90Data = {
    className: "scale-11",
    profileProps: profile100Data,
};

const component1004Data = {
    milkChocolate: "Milk Chocolate",
    group2688Props: group26886Data,
    scaleProps: scale90Data,
};

const iconArrowSmall15Data = {
    className: "icon-arrow-small-14",
};

const button15Data = {
    className: "button-14",
    iconArrowSmallProps: iconArrowSmall15Data,
};

const component94147Data = {
    className: "group-2641-12",
};

const component941217Data = {
    className: "group-2642-12",
    component941Props: component94147Data,
};

const title10Data = {
    children: "Added Sugar and Sweetener",
    className: "text-73",
};

const layer2315Data = {
    src: "/img/path-11542-14@1x.png",
    className: "layer-2-4",
};

const iconadd327Data = {
    src: "/img/union-15@1x.png",
    className: "iconadd-49",
};

const group27185Data = {
    className: "group-2718-3",
    layer2Props: layer2315Data,
    iconadd3Props: iconadd327Data,
};

const group27453Data = {
    className: "group-2745-3",
};

const component991214Data = {
    group2756: "/img/path-11535-28@1x.png",
    setting: "/img/setting-12@1x.png",
    className: "component-99-79",
};

const homeChocolateData = {
    discoverByMeal: "Discover by Meal",
    rectangle2308: "/img/rectangle-2308-130@1x.png",
    rectangle2336: "/img/rectangle-2336-12@1x.png",
    rectangle23362: "/img/rectangle-2336-13@1x.png",
    homeHeading11Props: homeHeading113Data,
    card14Props: card143Data,
    component1004Props: component1004Data,
    buttonProps: button15Data,
    component9412Props: component941217Data,
    titleProps: title10Data,
    group2718Props: group27185Data,
    group2745Props: group27453Data,
    component99121Props: component991214Data,
};

const component94148Data = {
    className: "component-94-1-27",
};

const network426Data = {
    path67: "/img/path-67-10@1x.png",
    path68: "/img/path-68-10@1x.png",
};

const group124Data = {
    className: "group-1-23",
    networkProps: network426Data,
};

const component951220Data = {
    overlapGroup4: "/img/rectangle-2302-10@1x.png",
    className: "component-95-12-18",
    group1Props: component94148Data,
    group1Props2: group124Data,
};

const homeHeading8Data = {
    todaysFeed: "Add New Item",
    className: "home-heading-12",
    component9512Props: component951220Data,
};

const iconClose7Data = {
    overlapGroup2: "/img/line-19@1x.png",
    line: "/img/line-20@1x.png",
    className: "icon-close-6",
};

const iconArrow8Data = {
    line: "/img/line-18@1x.png",
    className: "icon-arrow-7",
};

const iconadd328Data = {
    src: "/img/union-21@1x.png",
    className: "iconadd-50",
};

const iconadd329Data = {
    src: "/img/union-22@1x.png",
    className: "iconadd-51",
};

const component1301Data = {
    itemName: "Item Name",
    amont: "Amont",
    iconadd3Props: iconadd328Data,
    iconadd32Props: iconadd329Data,
};

const component1291Data = {
    component1301Props: component1301Data,
};

const iconArrowSmall16Data = {
    className: "icon-arrow-small-15",
};

const button16Data = {
    className: "button-15",
    iconArrowSmallProps: iconArrowSmall16Data,
};

const addNewData = {
    homeHeadingProps: homeHeading8Data,
    iconCloseProps: iconClose7Data,
    iconArrowProps: iconArrow8Data,
    component1291Props: component1291Data,
    buttonProps: button16Data,
};

const component94149Data = {
    className: "component-94-1-28",
};

const network427Data = {
    path67: "/img/path-67-10@1x.png",
    path68: "/img/path-68-10@1x.png",
};

const group125Data = {
    className: "group-1-24",
    networkProps: network427Data,
};

const component951221Data = {
    overlapGroup4: "/img/rectangle-2302-13@1x.png",
    className: "component-95-12-19",
    component941Props: component94149Data,
    group1Props: group125Data,
};

const homeHeading103Data = {
    component9512Props: component951221Data,
};

const group2971524Data = {
    className: "group-40-9",
};

const component1045110Data = {
    surname: "Day",
    week: "Week",
    month: "Month",
    className: "component-104-55",
};

const group276012Data = {
    className: "group-2760-11",
};

const group278010Data = {
    className: "group-2780-11",
};

const group279411Data = {
    className: "group-2794-10",
};

const group31616Data = {
    union13: "/img/union-13-24@1x.png",
};

const group31935Data = {
    union11: "/img/subtraction-49-13@1x.png",
    group3193: "/img/union-11@1x.png",
    className: "group-3172-2",
};

const group2971424Data = {
    slider: "/img/slider-11@1x.png",
    className: "group-2971-16",
};

const group2806324Data = {
    className: "group-2806-3",
};

const maskGroup43Data = {
    group280632Props: group2806324Data,
};

const group313131Data = {
    className: "group-3131-11",
};

const group313133Data = {
    className: "group-3132-11",
};

const group313313Data = {
    className: "group-3133-11",
};

const group3141624Data = {
    className: "group-3141-22",
    group31312Props: group313131Data,
    group31312Props2: group313133Data,
    group31312Props3: group313313Data,
};

const group3131224Data = {
    className: "group-3131-18",
};

const group3131225Data = {
    className: "group-3132-23",
};

const group3133412Data = {
    className: "group-3133-18",
};

const group314164Data = {
    group31312Props: group3131224Data,
    group313122Props: group3131225Data,
    group31334Props: group3133412Data,
};

const group31475Data = {
    union12: "/img/union-12-22@1x.png",
};

const group31484Data = {
    union12: "/img/union-12-23@1x.png",
};

const group31494Data = {
    className: "group-3149-3",
};

const group31504Data = {
    union12: "/img/union-12-25@1x.png",
};

const group31313223Data = {
    className: "group-3131-26",
};

const group31313224Data = {
    className: "group-3132-35",
};

const group31333212Data = {
    className: "group-3133-26",
};

const group31343212Data = {
    className: "group-3134-28",
};

const group3141524Data = {
    className: "group-3141-29",
    group31313Props: group31313223Data,
    group313132Props: group31313224Data,
    group31333Props: group31333212Data,
    group31343Props: group31343212Data,
};

const group314223Data = {
    className: "group-3142-11",
};

const group314224Data = {
    className: "group-3143-11",
};

const group314412Data = {
    className: "group-3144-11",
};

const maskGroup103Data = {
    group3142Props: group314223Data,
    group31422Props: group314224Data,
    group3144Props: group314412Data,
};

const group31617Data = {
    union13: "/img/union-13-24@1x.png",
};

const group31703Data = {
    union13: "/img/union-13-106@1x.png",
};

const component991215Data = {
    group2756: "/img/path-11535-18@1x.png",
    setting: "/img/setting-10@1x.png",
};

const onBoardingAnalyzeData = {
    subtraction78: "/img/subtraction-49-1@1x.png",
    fontawsomeBars: "/img/fontawsome--bars--1@1x.png",
    path11548: "/img/path-11548-10@1x.png",
    serving: "Serving",
    subtraction76: "/img/subtraction-76-4@1x.png",
    group3171: "/img/subtraction-49-1@1x.png",
    x1Serving3Oz: "*1 serving = 3 oz",
    color: "Tomato",
    beef: "Beef",
    apple: "Apple",
    amount: " Amount",
    subtraction74: "/img/subtraction-74-3@1x.png",
    group3116: "/img/subtraction-35-11@1x.png",
    union12: "/img/union-12-38@1x.png",
    subtraction762: "/img/subtraction-76-4@1x.png",
    subtraction79: "/img/subtraction-49-1@1x.png",
    subtraction49: "/img/subtraction-49-13@1x.png",
    union11: "/img/union-11@1x.png",
    address: "340  gCO2e",
    path11617: "/img/path-11617@1x.png",
    path11618: "/img/path-11618@1x.png",
    path1495: "/img/path-1495@1x.png",
    path1496: "/img/path-1496@1x.png",
    path1513: "/img/path-1513@1x.png",
    path1514: "/img/path-1514@1x.png",
    path1515: "/img/path-1515@1x.png",
    path11619: "/img/path-11619@1x.png",
    homeHeading10Props: homeHeading103Data,
    group297152Props: group2971524Data,
    component10451Props: component1045110Data,
    group2760Props: group276012Data,
    group2780Props: group278010Data,
    group2794Props: group279411Data,
    group3161Props: group31616Data,
    group3193Props: group31935Data,
    group297142Props: group2971424Data,
    maskGroup4Props: maskGroup43Data,
    group314162Props: group3141624Data,
    group31416Props: group314164Data,
    group3147Props: group31475Data,
    group3148Props: group31484Data,
    group3149Props: group31494Data,
    group3150Props: group31504Data,
    group314152Props: group3141524Data,
    maskGroup10Props: maskGroup103Data,
    group31612Props: group31617Data,
    group3170Props: group31703Data,
    component99121Props: component991215Data,
};

const card8Data = {
    className: "card-3",
};

const iconAccount2Data = {
    src: "/img/path-34@1x.png",
    className: "icon-account-1",
};

const card9Data = {
    className: "card-3",
};

const iconOrdersData = {
    rectangle: "/img/rectangle-1@1x.png",
    rectangle2: "/img/rectangle-1@1x.png",
    path2: "/img/path-32@1x.png",
};

const card10Data = {
    className: "card-3",
};

const iconChatData = {
    overlapGroup2: "/img/path-77@1x.png",
    line: "/img/line-16@1x.png",
    line2: "/img/line-16@1x.png",
};

const card11Data = {
    className: "card-3",
};

const switchOffData = {
    switchLine2: "/img/switch-line-2@1x.png",
    switchLine1: "/img/switch-line-1@1x.png",
};

const card13Data = {
    className: "card-3",
};

const iconSignOutData = {
    line: "/img/line-14@1x.png",
    line2: "/img/line-15@1x.png",
};

const component1311Data = {
    yourAccount: "Your Account",
    yourOrders: "Your Orders",
    liveChat: "Live Chat",
    notifications: "Notifications",
    signOut: "Sign Out",
    cardProps: card8Data,
    iconAccountProps: iconAccount2Data,
    card2Props: card9Data,
    iconOrdersProps: iconOrdersData,
    card3Props: card10Data,
    iconChatProps: iconChatData,
    card4Props: card11Data,
    switchOffProps: switchOffData,
    card5Props: card13Data,
    iconSignOutProps: iconSignOutData,
};

const barsTimeBlack2Data = {
    time: "/img/file--time@1x.png",
    className: "bars-time-black-1",
};

const component94150Data = {
    className: "component-94-1-29",
};

const network428Data = {
    path67: "/img/path-67-10@1x.png",
    path68: "/img/path-68-10@1x.png",
};

const group126Data = {
    className: "group-1-25",
    networkProps: network428Data,
};

const component951228Data = {
    overlapGroup4: "/img/rectangle-2302-10@1x.png",
    className: "component-95-12-20",
    group1Props: component94150Data,
    group1Props2: group126Data,
};

const homeHeading23Data = {
    title: "Setting",
    className: "home-heading-17",
    component951222Props: component951228Data,
};

const iconArrow9Data = {
    line: "/img/line-18@1x.png",
    className: "icon-arrow-8",
};

const iconClose8Data = {
    overlapGroup2: "/img/line-19@1x.png",
    line: "/img/line-20@1x.png",
    className: "icon-close-7",
};

const settingsData = {
    path644: "/img/path-644@1x.png",
    path643: "/img/path-643@1x.png",
    path645: "/img/path-645@1x.png",
    path646: "/img/path-646@1x.png",
    path647: "/img/path-647@1x.png",
    background: "/img/background-2@1x.png",
    overlapGroup2: "/img/border-1@1x.png",
    capacity: "/img/capacity-1@1x.png",
    cap: "/img/cap-1@1x.png",
    wifi: "/img/wifi-1@1x.png",
    cellularConnection: "/img/cellular-connection-1@1x.png",
    ring: "/img/ring@1x.png",
    component1311Props: component1311Data,
    barsTimeBlackProps: barsTimeBlack2Data,
    homeHeading2Props: homeHeading23Data,
    iconArrowProps: iconArrow9Data,
    iconCloseProps: iconClose8Data,
};

const component94151Data = {
    className: "component-94-1-30",
};

const component951244Data = {
    component941Props: component94151Data,
};

const homeHeading133Data = {
    className: "home-heading-30",
    component95124Props: component951244Data,
};

const component3233Data = {
    overlapGroup8: "/img/path-20@1x.png",
    path2: "/img/path-19@1x.png",
    group2541: "/img/path-11520-10@1x.png",
    fruits: "Fruits",
    x20Gco: "20gCO",
    number: "2",
    group2540: "/img/path-11520-10@1x.png",
    e: "e",
    meats: "Meats",
    x60Gco: "60gCO",
    veggies: "Veggies",
    number2: "2",
    x15Gco: "15gCO",
    number3: "2",
    e2: "e",
};

const totalCo221Data = {
    className: "total-co2-20",
};

const card15Data = {
    path311: "/img/path-311-1@1x.png",
    component3233Props: component3233Data,
    totalCo2Props: totalCo221Data,
};

const component94152Data = {
    className: "rectangle-2313",
};

const component976413Data = {
    src: "/img/rectangle-2308-14@1x.png",
    className: "component-97-5-1",
};

const component99649Data = {
    className: "rectangle-2318",
};

const profile101Data = {
    src: "/img/path-11540-10@1x.png",
};

const scale91Data = {
    className: "scale-12",
    profileProps: profile101Data,
};

const group32802Data = {
    className: "group-3280-1",
    scaleProps: scale91Data,
};

const profile102Data = {
    src: "/img/path-11540-10@1x.png",
};

const scale92Data = {
    className: "scale-12",
    profileProps: profile102Data,
};

const group32812Data = {
    className: "group-3281-1",
    scaleProps: scale92Data,
};

const profile103Data = {
    src: "/img/path-11540-10@1x.png",
};

const scale93Data = {
    className: "scale-24",
    profileProps: profile103Data,
};

const group32822Data = {
    className: "group-3282-1",
    scaleProps: scale93Data,
};

const profile104Data = {
    src: "/img/path-11540-10@1x.png",
};

const scale94Data = {
    className: "scale-12",
    profileProps: profile104Data,
};

const group268844Data = {
    prawn: "Cirtus",
    className: "group-2673-1",
    scaleProps: scale94Data,
};

const group26742Data = {
    className: "group-2674-1",
    group26884Props: group268844Data,
};

const profile105Data = {
    src: "/img/path-11540-10@1x.png",
};

const scale95Data = {
    className: "scale-13",
    profileProps: profile105Data,
};

const group32832Data = {
    className: "group-3283-1",
    scaleProps: scale95Data,
};

const profile106Data = {
    src: "/img/path-11540-10@1x.png",
};

const scale96Data = {
    className: "scale-25",
    profileProps: profile106Data,
};

const group32742Data = {
    scaleProps: scale96Data,
};

const profile107Data = {
    src: "/img/path-11540-10@1x.png",
};

const scale97Data = {
    className: "scale-13",
    profileProps: profile107Data,
};

const group32752Data = {
    scaleProps: scale97Data,
};

const profile108Data = {
    src: "/img/path-11540-10@1x.png",
};

const scale98Data = {
    className: "scale-13",
    profileProps: profile108Data,
};

const group32763Data = {
    cranberries: "Cranberries",
    rectangle3273: "/img/rectangle-3273@1x.png",
    scaleProps: scale98Data,
};

const profile109Data = {
    src: "/img/path-11540-10@1x.png",
};

const scale99Data = {
    className: "scale-13",
    profileProps: profile109Data,
};

const group32772Data = {
    scaleProps: scale99Data,
};

const profile110Data = {
    src: "/img/path-11540-10@1x.png",
};

const scale100Data = {
    className: "scale-13",
    profileProps: profile110Data,
};

const group32782Data = {
    scaleProps: scale100Data,
};

const profile111Data = {
    src: "/img/path-11540-10@1x.png",
};

const scale101Data = {
    className: "scale-13",
    profileProps: profile111Data,
};

const group32792Data = {
    scaleProps: scale101Data,
};

const profile112Data = {
    src: "/img/path-11540-10@1x.png",
};

const scale102Data = {
    className: "scale-13",
    profileProps: profile112Data,
};

const group32852Data = {
    scaleProps: scale102Data,
};

const profile113Data = {
    src: "/img/path-11540-10@1x.png",
};

const scale103Data = {
    className: "scale-13",
    profileProps: profile113Data,
};

const group32862Data = {
    scaleProps: scale103Data,
};

const profile114Data = {
    src: "/img/path-11540-10@1x.png",
};

const scale104Data = {
    className: "scale-13",
    profileProps: profile114Data,
};

const group32764Data = {
    cranberries: "Pineapples",
    rectangle3273: "/img/rectangle-3280@1x.png",
    className: "group-32-5",
    scaleProps: scale104Data,
};

const profile115Data = {
    src: "/img/path-11540-10@1x.png",
};

const scale105Data = {
    className: "scale-13",
    profileProps: profile115Data,
};

const group32882Data = {
    scaleProps: scale105Data,
};

const profile116Data = {
    src: "/img/path-11540-10@1x.png",
};

const scale106Data = {
    className: "scale-13",
    profileProps: profile116Data,
};

const group32892Data = {
    scaleProps: scale106Data,
};

const profile117Data = {
    src: "/img/path-11540-10@1x.png",
};

const scale107Data = {
    className: "scale-13",
    profileProps: profile117Data,
};

const group32902Data = {
    scaleProps: scale107Data,
};

const profile118Data = {
    src: "/img/path-11540-10@1x.png",
};

const scale108Data = {
    className: "scale-13",
    profileProps: profile118Data,
};

const group32912Data = {
    scaleProps: scale108Data,
};

const profile119Data = {
    src: "/img/path-11540-10@1x.png",
};

const scale109Data = {
    className: "scale-13",
    profileProps: profile119Data,
};

const group32922Data = {
    scaleProps: scale109Data,
};

const profile120Data = {
    src: "/img/path-11540-10@1x.png",
};

const scale110Data = {
    className: "scale-13",
    profileProps: profile120Data,
};

const group32842Data = {
    scaleProps: scale110Data,
};

const profile121Data = {
    src: "/img/path-11540-10@1x.png",
};

const scale111Data = {
    className: "scale-12",
    profileProps: profile121Data,
};

const group32732Data = {
    scaleProps: scale111Data,
};

const layer2316Data = {
    src: "/img/path-11542-5@1x.png",
    className: "layer-2-4",
};

const iconadd330Data = {
    src: "/img/union-10@1x.png",
    className: "iconadd-52",
};

const group271828Data = {
    className: "group-2718-11",
    layer23Props: layer2316Data,
    iconadd3Props: iconadd330Data,
};

const group1310Data = {
    className: "group-1-36",
};

const component10627222Data = {
    home: "/img/path-11535-5@1x.png",
    setting: "/img/setting-12@1x.png",
    className: "component-106-22-1",
};

const iconArrowSmall17Data = {
    className: "icon-arrow-small-16",
};

const button17Data = {
    className: "button-16",
    iconArrowSmallProps: iconArrowSmall17Data,
};

const homeFreshFruitData = {
    discoverByMeal: "Discover by Meal",
    homeHeading13Props: homeHeading133Data,
    card15Props: card15Data,
    component941Props: component94152Data,
    component9764Props: component976413Data,
    component9964Props: component99649Data,
    group3280Props: group32802Data,
    group3281Props: group32812Data,
    group3282Props: group32822Data,
    group2674Props: group26742Data,
    group3283Props: group32832Data,
    group3274Props: group32742Data,
    group3275Props: group32752Data,
    group3276Props: group32763Data,
    group3277Props: group32772Data,
    group3278Props: group32782Data,
    group3279Props: group32792Data,
    group3285Props: group32852Data,
    group3286Props: group32862Data,
    group32762Props: group32764Data,
    group3288Props: group32882Data,
    group3289Props: group32892Data,
    group3290Props: group32902Data,
    group3291Props: group32912Data,
    group3292Props: group32922Data,
    group3284Props: group32842Data,
    group3273Props: group32732Data,
    group27182Props: group271828Data,
    group13Props: group1310Data,
    component106272Props: component10627222Data,
    buttonProps: button17Data,
};

