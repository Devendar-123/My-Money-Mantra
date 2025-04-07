import React from 'react';
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Navbar from '../Navbar/Navbar';
import CrteditCards from '../CreditCards/CrteditCards';
import Hdfc from '../CreditCards/HDFC credit/Hdfc';
import SbiCredit from '../CreditCards/Sbi credit/SbiCredit';
import PopularCredit from '../CreditCards/Popular credit/PopularCredit';
import IdfcBank from '../CreditCards/Idfc credit/IdfcBank';
import Axis from '../CreditCards/Axis credit/Axis';
import Hsbc from '../CreditCards/Hsbc credit/Hsbc';
import AuBank from '../CreditCards/Au credit/AuBank';
import American from '../CreditCards/American credit/American';
import Icici from '../CreditCards/Icici credit/Icici';
import Indus from '../CreditCards/Indus/Indus';
import Loans from '../Loans/Loans';
import PersonalLoan from '../Loans/Personal/PersonalLoan';
import BusinessLoan from '../Loans/BusinessLoan/BusinessLoan';
import HomeBalanceLoan from '../Loans/HomeBalance/HomeBalanceLoan';
import HomeLoan from '../Loans/Home/HomeLoan';
import Blogs from '../Blogs/Blogs';
import ImproveCibil from '../CreditScore/ImproveCibil/ImproveCibil';
import CibilScore from '../CreditScore/CibilScore/CibilScore';
import CibilRange from '../CreditScore/CibilRange/CibilRange';
import InstantCibil from '../CreditScore/InatantCibil/InstantCibil';
import FreeCibil from '../CreditScore/FreeCibil/FreeCibil';
import BankCibil from '../CreditScore/BankCibil/BankCibil';
import PanCard from '../CreditScore/PanCard/PanCard';
import CreditScore from '../CreditScore/CreditScore';
import Emi from '../Emi/Emi';
import HomeLoanEmi from '../Emi/HomeLoanEmi/HomeLoanEmi';
import PersonalLoanEmi from '../Emi/PersonalLoanEmi/PersonalLoanEmi';
import BusinessLoanEmi from '../Emi/BusinessLoanEmi/BusinessLoanEmi';
import CompoundInterest from '../Emi/CompoundInterest/CompoundInterest';
import PrePayment from '../Emi/LoanPrePayment/PrePayment';
import RdLoan from '../Emi/RDLoan/RdLoan';
import FDLoan from '../Emi/FDLoan/FDLoan';
import Insurance from '../Insurance/Insurance';
import HealthInsurance from '../Insurance/HealthInsurance/HealthInsurance';
import LifeInsurance from '../Insurance/LifeInsurance/LifeInsurance';
import GoldLoan from '../Loans/Gold/GoldLoan';
import PropertyLoan from '../Loans/Property/PropertyLoan';
import OverdraftLoan from '../Loans/Overdraft/OverdraftLoan';
import CreditCardLoan from '../Loans/CreditCard/CreditCardLoan';
import PersonalLoanAmount from '../Loans/PersonalLoanAmount/PersonalLoanAmount';
import PersonalLoanInterest from '../Loans/PersonalLoanInterest/PersonalLoanInterest';
import Footer from '../Footer/Footer';
import Home from '../Home/Home';
import Products from '../Products/Products';
import Partners from '../Partners/Partners';
import Mobileapp from '../Mobileapp/Mobileapp';
import EMICalculator from '../EmiCalculator/EmiCalculator';
import WhyChooseus from '../WhyChooseus/WhyChooseus';
const Pages = () => {

  const router = createBrowserRouter([
    {
      path: '/',
      element: (
      <div>
        <Navbar/>
        <Home/>
        <Products/>
        <EMICalculator/>
        <Partners/>
        <WhyChooseus/>
        <Mobileapp/>
        <Blogs/>
        <Footer/>
      </div>
      ),
    },
    {
      path: '/credit-cards',
      element: (
      <div>
        <Navbar/>
        <CrteditCards/>
      </div>
      ),
    },
    {
      path: '/credit-cards/hdfc',
      element: (
      <div>
        <Navbar/>
        <Hdfc/>
      </div>
      ),
    },
    {
      path: '/credit-cards/hdfc/swiggy',
      element: (
      <div>
        <Navbar/>
        <Hdfc/>
      </div>
      ),
    },
    {
      path: '/credit-cards/hdfc/tata',
      element: (
      <div>
        <Navbar/>
        <Hdfc/>
      </div>
      ),
    },
    {
      path: '/credit-cards/hdfc/millennia',
      element: (
      <div>
        <Navbar/>
        <Hdfc/>
      </div>
      ),
    },
    {
      path: '/credit-cards/hdfc/freedom',
      element: (
      <div>
        <Navbar/>
        <Hdfc/>
      </div>
      ),
    },
    {
      path: '/credit-cards/hdfc/indianoil',
      element: (
      <div>
        <Navbar/>
        <Hdfc/>
      </div>
      ),
    },
    {
      path: '/credit-cards/hdfc/moneyback',
      element: (
      <div>
        <Navbar/>
        <Hdfc/>
      </div>
      ),
    },
    {
      path: '/credit-cards/hdfc/rupay',
      element: (
      <div>
        <Navbar/>
        <Hdfc/>
      </div>
      ),
    },
    {
      path: '/credit-cards/hdfc/moneybackplus',
      element: (
      <div>
        <Navbar/>
        <Hdfc/>
      </div>
      ),
    },
    {
      path: '/credit-cards/sbi',
      element: (
      <div>
        <Navbar/>
        <SbiCredit/>
      </div>
      ),
    },
    {
      path: '/credit-cards/popular',
      element: (
      <div>
        <Navbar/>
        <PopularCredit/>
      </div>
      ),
    },
    {
      path: '/credit-cards/idfc',
      element: (
      <div>
        <Navbar/>
        <IdfcBank/>
      </div>
      ),
    },
    {
      path: '/credit-cards/axis',
      element: (
      <div>
        <Navbar/>
        <Axis/>
      </div>
      ),
    },
    {
      path: '/credit-cards/hsbc',
      element: (
      <div>
        <Navbar/>
        <Hsbc/>
      </div>
      ),
    },
    {
      path: '/credit-cards/au',
      element: (
      <div>
        <Navbar/>
        <AuBank/>
      </div>
      ),
    },
    {
      path: '/credit-cards/american',
      element: (
      <div>
        <Navbar/>
        <American/>
      </div>
      ),
    },
    {
      path: '/credit-cards/icici',
      element: (
      <div>
        <Navbar/>
        <Icici/>
      </div>
      ),
    },
    {
      path: '/credit-cards/indus',
      element: (
      <div>
        <Navbar/>
        <Indus/>
      </div>
      ),
    },
    {
      path: '/loan',
      element: (
      <div>
        <Navbar/>
        <Loans/>
      </div>
      ),
    },
    {
      path: '/loan/personal',
      element: (
      <div>
        <Navbar/>
        <PersonalLoan/>
      </div>
      ),
    },
    {
      path: '/loan/business',
      element: (
      <div>
        <Navbar/>
        <BusinessLoan/>
      </div>
      ),
    },
    {
      path: '/loan/home',
      element: (
      <div>
        <Navbar/>
        <HomeLoan/>
      </div>
      ),
    },
    {
      path: '/loan/gold',
      element: (
      <div>
        <Navbar/>
        <GoldLoan/>
      </div>
      ),
    },
    {
      path: '/loan/homeloanbalance',
      element: (
      <div>
        <Navbar/>
        <HomeBalanceLoan/>
      </div>
      ),
    },
    {
      path: '/loan/loanproperty',
      element: (
      <div>
        <Navbar/>
        <PropertyLoan/>
      </div>
      ),
    },
    {
      path: '/loan/overdraft',
      element: (
      <div>
        <Navbar/>
        <OverdraftLoan/>
      </div>
      ),
    },
    {
      path: '/loan/loancreditcard',
      element: (
      <div>
        <Navbar/>
        <CreditCardLoan/>
      </div>
      ),
    },
    {
      path: '/loan/personakloanamount',
      element: (
      <div>
        <Navbar/>
        <PersonalLoanAmount/>
      </div>
      ),
    },
    {
      path: '/loan/personalloaninterest',
      element: (
      <div>
        <Navbar/>
        <PersonalLoanInterest/>
      </div>
      ),
    },

    {
      path: '/insurance',
      element: (
      <div>
        <Navbar/>
        <Insurance/>
      </div>
      ),
    },
    {
      path: '/insurance/health',
      element: (
      <div>
        <Navbar/>
        <HealthInsurance/>
      </div>
      ),
    },
    {
      path: '/insurance/life',
      element: (
      <div>
        <Navbar/>
        <LifeInsurance/>
      </div>
      ),
    },
    {
      path: '/emi',
      element: (
      <div>
        <Navbar/>
        <Emi/>
      </div>
      ),
    },
    {
      path: '/emi/homeloan',
      element: (
      <div>
        <Navbar/>
        <HomeLoanEmi/>
      </div>
      ),
    },
    {
      path: '/emi/personalloan',
      element: (
      <div>
        <Navbar/>
        <PersonalLoanEmi/>
      </div>
      ),
    },
    {
      path: '/emi/businessloan',
      element: (
      <div>
        <Navbar/>
        <BusinessLoanEmi/>
      </div>
      ),
    },
    {
      path: '/emi/compoundinterest',
      element: (
      <div>
        <Navbar/>
        <CompoundInterest/>
      </div>
      ),
    },
    {
      path: '/emi/loanprepayment',
      element: (
      <div>
        <Navbar/>
        <PrePayment/>
      </div>
      ),
    },
    {
      path: '/emi/rdloan',
      element: (
      <div>
        <Navbar/>
        <RdLoan/>
      </div>
      ),
    },
    {
      path: '/emi/fdloan',
      element: (
      <div>
        <Navbar/>
        <FDLoan/>
      </div>
      ),
    },
    
    {
      path: '/creditscore',
      element: (
      <div>
        <Navbar/>
        <CreditScore/>
      </div>
      ),
    },
    {
      path: '/creditscore/cibilpancard',
      element: (
      <div>
        <Navbar/>
        <PanCard/>
      </div>
      ),
    },
    {
      path: '/creditscore/cibilbank',
      element: (
      <div>
        <Navbar/>
        <BankCibil/>
      </div>
      ),
    },
    {
      path: '/creditscore/freecibil',
      element: (
      <div>
        <Navbar/>
        <FreeCibil/>
      </div>
      ),
    },
    {
      path: '/creditscore/instantcibil',
      element: (
      <div>
        <Navbar/>
        <InstantCibil/>
      </div>
      ),
    },
    {
      path: '/creditscore/cibilrange',
      element: (
      <div>
        <Navbar/>
        <CibilRange/>
      </div>
      ),
    },
    {
      path: '/creditscore/cibilscore',
      element: (
      <div>
        <Navbar/>
        <CibilScore/>
      </div>
      ),
    },
    {
      path: '/creditscore/improvecibil',
      element: (
      <div>
        <Navbar/>
        <ImproveCibil/>
      </div>
      ),
    },
    {
      path: '/blogs',
      element: (
      <div>
        <Navbar/>
        <Blogs/>
      </div>
      ),
    },
    
  ]) 
  return (
    <div>
      <RouterProvider router={router}/>
      
    </div>
  )
}


export default Pages
