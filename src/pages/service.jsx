import { useParams } from "react-router-dom";
import { services } from "../data/services";
import { useEffect, useState } from "react";
import HomeLoan from "../components/services/homeLoan";
import Footer from "../components/footer";
import PersonalLoan from "../components/services/personalLoans";
import CarLoan from "../components/services/carLoan";
import Refinance from "../components/services/Refinance";
import CommercialLoans from "../components/services/commercialLoans";
import CashFlowLending from "../components/services/cashFlowLending";
import Equipment from "../components/services/Equipment";
import LineOfCredit from "../components/services/LineOfCredit";
import LoDocLoans from "../components/services/LoDocLoans";
import DebtRemoval from "../components/services/DebtRemoval";
import SmsfLoans from "../components/services/SmsfLoans";

function Service() {
  const { id } = useParams()
  const [service, setService] = useState({})

  useEffect(() => {
    setService(services.find(s => s.id == id))
  }, [])

  return (
    <>
      {service.id === 1 && <HomeLoan />}
      {service.id === 2 && <PersonalLoan />}
      {service.id === 3 && <CarLoan />}
      {service.id === 4 && <Refinance />}
      {service.id === 5 && <CommercialLoans />}
      {service.id === 6 && <CashFlowLending />}
      {service.id === 7 && <Equipment />}
      {service.id === 8 && <LineOfCredit />}
      {service.id === 9 && <LoDocLoans />}
      {service.id === 10 && <DebtRemoval />}
      {service.id === 11 && <SmsfLoans />}
      <Footer />
    </>
  );
}

export default Service;