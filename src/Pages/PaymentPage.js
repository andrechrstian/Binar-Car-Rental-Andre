import Footer from "../Components/Footer";
import HeroPayment from "../Components/HeroPayment";
import NavBar from "../Components/Navbar";
import PaymentMethod from "../Components/PaymentMethod";

const PaymentPage = () => {
    return ( 
        <div>
            <NavBar />
            <HeroPayment />
            {/* tempat componen bagus start */}
            <PaymentMethod />
            {/* tempat componen bagus end */}


        
            <Footer />
        </div>
    );
}

export default PaymentPage;