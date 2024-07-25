import React from "react";

import CardComponent from "./HomeLimitedCard";
import viewBtnStyle from "../../assets/css/ViewAll.module.css";

import ZeniusBCuteCapsule60S from "../../assets/Images/Limited_Time_Leads/zenius_b_cute_capsule_60s_671146_0_1.jpg";
import MedisynthKofeeszCoughSyrup from "../../assets/Images/Limited_Time_Leads/medisynth_kofeez_cough_syrup_120_ml_0_1.jpg";
import ZeniusXtraPowerGoldCapsule30S from "../../assets/Images/Limited_Time_Leads/zenius_xtra_power_gold_capsule_morning_30s_671040_0_1.jpg";
import MedisynthJondileForteSyrup120Ml from "../../assets/Images/Limited_Time_Leads/medisynth_jondila_forte_syrup_120_ml_459787_0_2.jpg";
import TruuthSterilizedCottonBalls30S from "../../assets/Images/Limited_Time_Leads/truuth_sterilized_cotton_balls_30s_472649_0_2 (1).jpg";
import OneTouchSelectPlusSimpleBloodGlucose from "../../assets/Images/Limited_Time_Leads/onetouch_select_plus_simple_blood_glucose_monitoring_system_free_10_test_strips_lancing_device_10_lancets_76348_0_10.jpg";
import CremaffinConstipationReliefLiquid from "../../assets/Images/Limited_Time_Leads/cremaffin_constipation_relief_liquid_mixed_fruit_450ml_85687_0_5.jpg";
import FarlinRabbitCoolingGumSoother from "../../assets/Images/Limited_Time_Leads/farlin_rabbit_cooling_gum_soother_pink_1s_0_0.jpg";
import PediasureAdvancePlusPowerVanillaDelightFlavour400gm from "../../assets/Images/Limited_Time_Leads/pediasure_advance_plus_powder_vanilla_delight_flavour_400_gm_refill_pack_138303_0_2.jpg";
import FarlinFishShapeNailClipperPink1s from "../../assets/Images/Limited_Time_Leads/farlin_fish_shape_nail_clipper_pink_1s_0_0.jpg";
import BauschLombSofLen59MonthlyContactLens6LensBox from "../../assets/Images/Limited_Time_Leads/bausch_lomb_soflens_59_monthly_contact_lens_6_lens_box_0_75_84299_0_1.jpg";
import TynorAncleBraceSD02 from "../../assets/Images/Limited_Time_Leads/tynor_ankle_brace_l_d_02_0_2.jpg";
import SoftovacSfSugarFreePower250gm from "../../assets/Images/Limited_Time_Leads/softovac_sf_sugar_free_powder_250gm_0_0.jpg";
import CoqLcTablet10S from "../../assets/Images/Limited_Time_Leads/coq_lc_tablet_10s_53524_0_2.jpg";
import FarlinWashingHairHatBlue1S from "../../assets/Images/Limited_Time_Leads/farlin_washing_hair_hat_blue_1s_0_0.jpg";
import AcuvueOasysWithHydraclearPlusTwoWeekReusableContactLenses from "../../assets/Images/Limited_Time_Leads/acuvue_oasys_with_hydraclear_plus_two_week_reusable_contact_lenses_4_75_power_pack_of_6s_483087_0_0 (1).jpg";
import VisscoCoreSacroLumbarBeltWithDoubleStrappingMildSupport0101L from "../../assets/Images/Limited_Time_Leads/vissco_core_sacro_lumbar_belt_with_double_strapping_mild_support_0101_l_1s_481377_0_0.jpg";
import NicotexNicotineTransdermal14MgPatch7S from "../../assets/Images/Limited_Time_Leads/nicotex_nicotine_transdermal_patch_21mg_7s_0_0.jpg";
import PampersAllRoundProtectionDiaperPantsM12s from "../../assets/Images/Limited_Time_Leads/pampers_all_round_protection_diaper_pants_m_12s_534325_0_0.jpg";
import KlarEyePremiumK4011ReadingGlassBurgundy125Power from "../../assets/Images/Limited_Time_Leads/klar_eye_premium_k_4011_reading_glass_burgundy_1_25_power_1s_485623_0_0.jpg";
import FarlinTrainingToothbrushRed1s from "../../assets/Images/Limited_Time_Leads/farlin_training_toothbrush_8_14_months_red_1s_0_0.jpg";
import FarlinFoodGrinderBlue1s from "../../assets/Images/Limited_Time_Leads/farlin_food_grinder_blue_1s_0_0.jpg";
import { Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const AllLimited = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    console.log("handleBack called");
    navigate("/");
  };

  return (
    <>
      <Container fluid id={viewBtnStyle.viewAllBtnContainer}>
        <Row>
          <Col>
            <button onClick={handleBack}>Back to Home</button>
          </Col>
          <Col className={viewBtnStyle.viewCol}>
            <CardComponent
              title="Zenius B Cute Capsule 60'S"
              img={ZeniusBCuteCapsule60S}
              price="671.58"
              finalPrice="1,2456.25"
              getOff="GET 58% off"
            />
            <CardComponent
              title="Medisynth Kofeez Cough Syrup 120 ml"
              img={MedisynthKofeeszCoughSyrup}
              price="114.00"
              finalPrice="1,2456.25"
              getOff="GET 5% off"
            />
            <CardComponent
              title="Zenius Xtra Power Gold Capsule(Morning) 30'S"
              img={ZeniusXtraPowerGoldCapsule30S}
              price="799.60"
              finalPrice="1,2456.25"
              getOff="GET 60% off"
            />
            <CardComponent
              title="Medisynth Jondile Forte Syrup 120 Ml"
              img={MedisynthJondileForteSyrup120Ml}
              price="102.00"
              finalPrice="1,2456.25"
              getOff="GET 15% off"
            />
            <CardComponent
              title="Truuth Sterilized Cotton Balls 30'S"
              price="18.00"
              finalPrice="45.00"
              getOff="GET 60% off"
              img={TruuthSterilizedCottonBalls30S}
            />
            <CardComponent
              title="Pediasure Advance Plus Power - Vanilla Delight Flavour 400 gm"
              price="869.25"
              finalPrice="915.00"
              getOff="GET 5% off"
              img={PediasureAdvancePlusPowerVanillaDelightFlavour400gm}
            />
            <CardComponent
              title="Farlin Fish Shape Nail Clipper - Pink 1's"
              price="234.85"
              finalPrice="385.00"
              getOff="GET 39% off"
              img={FarlinFishShapeNailClipperPink1s}
            />
            <CardComponent
              title="Bausch & Lomb SofLen 59 Monthly Contact Lens - 6 Lens/Box"
              price="689.54"
              finalPrice="1,499.00"
              getOff="GET 54% off"
              img={BauschLombSofLen59MonthlyContactLens6LensBox}
            />
            <CardComponent
              title="TYNOR ANCLE BRACE(S) (D 02)"
              price="375.70"
              finalPrice="730.00"
              getOff="GET 51% off"
              img={TynorAncleBraceSD02}
            />
            <CardComponent
              title="SOFTOVAC SF SUGAR FREE Powder 250 gm"
              price="412.25"
              finalPrice="485.00"
              getOff="GET 15% off"
              img={SoftovacSfSugarFreePower250gm}
            />
            <CardComponent
              title="COQ LC Tablet 10's"
              price="935.00"
              finalPrice="1,100.00"
              getOff="GET 15% off"
              img={CoqLcTablet10S}
            />
            <CardComponent
              title="Farlin Washing Hair Hat-Blue 1'S"
              price="335.50"
              finalPrice="550.00"
              getOff="GET 39% off"
              img={FarlinWashingHairHatBlue1S}
            />
            <CardComponent
              title="Acuvue Oasys With Hydraclear Plus Two Week Reusable Contact Lenses"
              price="1,226.40"
              finalPrice="2,190.00"
              getOff="GET 44% off"
              img={AcuvueOasysWithHydraclearPlusTwoWeekReusableContactLenses}
            />
            <CardComponent
              title="Vissco Core Sacro Lumbar Belt With Double Strapping Mild Support (0101)(L)"
              price="533.00"
              finalPrice="1,025.00"
              getOff="GET 48% off"
              img={VisscoCoreSacroLumbarBeltWithDoubleStrappingMildSupport0101L}
            />
            <CardComponent
              title="Nicotex Nicotine Transdermal 14 Mg Patch 7's"
              price="594.15"
              finalPrice="699.00"
              getOff="GET 15% off"
              img={NicotexNicotineTransdermal14MgPatch7S}
            />
            <CardComponent
              title="Pampers All Round Protection Diaper Pants (M) 12's"
              price="159.20"
              finalPrice="199.00"
              getOff="GET 20% off"
              img={PampersAllRoundProtectionDiaperPantsM12s}
            />
            <CardComponent
              title="Klar Eye Premium K-4011 Reading Glass - Burgundy, 1.25 Power"
              price="1,034.31"
              finalPrice="1,499.00"
              getOff="GET 31% off"
              img={KlarEyePremiumK4011ReadingGlassBurgundy125Power}
            />
            <CardComponent
              title="OneTouch Select Plus Simple Blood Glucose"
              price="871.72"
              finalPrice="1,147.00"
              getOff="GET 24% off"
              img={OneTouchSelectPlusSimpleBloodGlucose}
            />
            <CardComponent
              title="Cremaffin Constipation Relief Liquid"
              price="294.23"
              finalPrice="338.20"
              getOff="GET 13% off"
              img={CremaffinConstipationReliefLiquid}
            />
            <CardComponent
              title="Farlin Rabbit Cooling Gum Soother"
              price="137.25"
              finalPrice="225.00"
              getOff="GET 39% off"
              img={FarlinRabbitCoolingGumSoother}
            />
            <CardComponent
              title="Farlin Training Toothbrush Red 1's"
              price="103.70"
              finalPrice="170.00"
              getOff="GET 39% off"
              img={FarlinTrainingToothbrushRed1s}
            />
            <CardComponent
              title="Farlin Food Grinder Blue 1's"
              price="323.30"
              finalPrice="530.00"
              getOff="GET 39% off"
              img={FarlinFoodGrinderBlue1s}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AllLimited;
