import FirstMembership from '../components/Home_Membership/FirstMembership';
import NewArrival from '../components/Home_NewArrival/NewArrival';
import PaymentPartner from '../components/Home_Payment/PaymentPartner';
import SpecializedStore from '../components/Home_Specialized/SpecializedStore';
import Home_TrendingToday from '../components/Home_TrendingToday/Home_TrendingToday';
import Home_TopCarousele from '../components/HomeCarousele/Home_TopCarousele';
import OBW from '../components/OBW/OBW';



function Home_Body() {


  return (
      <div>
         <Home_TopCarousele/>
         <OBW/>
         <PaymentPartner/>
         <FirstMembership/>
         <Home_TrendingToday/>
         <SpecializedStore/>
         <NewArrival/>
      </div>
  )
}

export default Home_Body;