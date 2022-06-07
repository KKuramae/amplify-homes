import './App.css';
import { 
  SideBar,
  NavBar,
  Ampligram,
  MarketingPricing,
  MarketingFooter,
  EditProfile
} from './ui-components';
import { Grid, View, useTheme, Card } from '@aws-amplify/ui-react';
import Iframe from 'react-iframe';

// 
// iframeでM365 Bookingを入れたサンプル
// 
function App() {
  const { tokens } = useTheme();
  return (
    <div className="App">
      <Grid
        columnGap="0.5rem"
        rowGap="0.5rem"
        templateColumns="1fr 4fr"
        templateRows="1fr 8fr auto 4fr"
      >
        <Card backgroundColor={tokens.colors.blue[10]} variation="elevated"
          columnStart="1"
          columnEnd="-1"
          rowStart="1"
          rowEnd="2"
        >
          <NavBar />
        </Card>
        <Card backgroundColor={tokens.colors.orange[60]}
          columnStart="1"
          columnEnd="2"
          rowStart="2"
          rowEnd="4"
        >
          <SideBar />
        </Card>
        <Card backgroundColor={tokens.colors.green[60]}
          columnStart="2"
          columnEnd="-1"
        >
        <Iframe url="https://outlook.office365.com/owa/calendar/COWORKING@scgtq.onmicrosoft.com/bookings/"
          width="100%"
          height="100%"
          id="myTopPage"
          className="m365BookingFrame"
          display="initial"
          position="relative"
          frameBorder={0}
          allow="fullscreen"
        />
        </Card>
        <Card backgroundColor={tokens.colors.purple[60]}
          columnStart="2"
          columnEnd="-1"
        >
          <EditProfile />
        </Card>
        <Card backgroundColor={tokens.colors.red[60]}
          columnStart="1"
          columnEnd="-1"
        >
          <MarketingFooter /> 
        </Card>
      </Grid>
    </div>
  );
}
// 
// 
// 

// 
// Amplify UI サイトに載っていたサンプル
// 
/*
export const GridRowAndColumnSpanExample = () => {
  const { tokens } = useTheme();
  return (
    <Grid
      templateColumns="1fr 1fr"
      templateRows="10rem 10rem 10rem"
      gap={tokens.space.small}
    >
      <View columnSpan={2} backgroundColor={tokens.colors.orange[10]}></View>
      <View rowSpan={2} backgroundColor={tokens.colors.orange[20]}></View>
      <View backgroundColor={tokens.colors.orange[40]}></View>
      <View backgroundColor={tokens.colors.orange[60]}></View>
    </Grid>
  );
};

function App() {
  return GridRowAndColumnSpanExample();
}
*/
// 
// 
// 

// 
// Amplify UI Component を適当につないだサンプル
// 
/*
function App() {
  const { tokens } = useTheme();
  return (
    <div className="App">
      <Grid
        columnGap="0.5rem"
        rowGap="0.5rem"
        templateColumns="1fr 4fr"
        templateRows="1fr 5fr auto 3fr"
      >
        <Card backgroundColor={tokens.colors.blue[10]} variation="elevated"
          columnStart="1"
          columnEnd="-1"
          rowStart="1"
          rowEnd="2"
        >
          <NavBar />
        </Card>
        <Card backgroundColor={tokens.colors.orange[60]}
          columnStart="1"
          columnEnd="2"
          rowStart="2"
          rowEnd="4"
        >
          <SideBar />
        </Card>
        <Card backgroundColor={tokens.colors.green[60]}
          columnStart="2"
          columnEnd="-1"
        >
          <EditProfile />
        </Card>
        <Card backgroundColor={tokens.colors.purple[60]}
          columnStart="2"
          columnEnd="-1"
        >
          <Ampligram />
        </Card>
        <Card backgroundColor={tokens.colors.red[60]}
          columnStart="1"
          columnEnd="-1"
        >
          <MarketingFooter /> 
        </Card>
      </Grid>
    </div>
  );
}
*/
// 
// 
// 

export default App;
