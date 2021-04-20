import React,{useState} from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import { UserContext } from '../../Components/Contextapi/CustomContext';
import Footer from '../../Components/Footer/Footer';
import MyNavbar from '../../Components/MyNavbar/MyNavbar';
import StripeCardForm from '../StripeForm/StripeCardForm';
import StripeForm from '../StripeForm/StripeForm';

const BuyService = () => {
    const {serviceId} = useParams()
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [clickedService, setClickedService] = useState({})
    const [dataWithPaymentInfo, setDataWithPaymentInfo] = useState({})
    const {loggedInUser} = useContext(UserContext)
    const [isUserData, setIsUserData] = useState(false)
    const [isPaymentComplete, setIsPaymentComplete] = useState(false)

    const onSubmit = data => {

        setDataWithPaymentInfo({
            ...dataWithPaymentInfo,
            ...data,
            price: clickedService?.price,
        });
        const OrderDataWithPayment = {
            ...dataWithPaymentInfo,
            ...data,
            price:clickedService?.price
        }
        console.log(OrderDataWithPayment)
        


        fetch("https://glossy-massage-spa-assingment.herokuapp.com/add-order", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(OrderDataWithPayment),
        })
            .then((res) => res.json())
            .then((data) => setIsPaymentComplete(data));

    };


    useEffect(()=> {
        fetch(`https://glossy-massage-spa-assingment.herokuapp.com/services/?id=${serviceId}`).then(res=> res.json())
        .then(data=> setClickedService(data[0]))
    },[serviceId])

    console.log(clickedService?.name)

    return (
        <div>
            <MyNavbar />
            <main>
                <div className="container">
                    <div className="col-10 col-md-8 col-lg-6 mx-auto p-4 alert-info mt-5">
                        {isPaymentComplete && (
                            <div class="alert alert-success" role="alert">
                                <h4 class="alert-heading">Well done!</h4>
                                <p>Your name : {dataWithPaymentInfo.buyerName}</p>
                                <p>Your email : {dataWithPaymentInfo.buyerEmail}</p>
                                <p>Your Address : {dataWithPaymentInfo.buyerAddress}</p>
                                <p>Your orderd Date : {dataWithPaymentInfo.date}</p>
                                <hr />
                                <p class="mb-0">Congratulation .. you have orderd.{clickedService?.name} service </p>
                            </div>
                        )}

                        {isPaymentComplete || !isUserData || (
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <label htmlFor="">your name</label>
                                <input className="form-control mb-3" value={loggedInUser?.displayName} {...register("buyerName", { required: true })} />
                                {errors.buyerName && <span>This field is required</span>}

                                <label htmlFor="">your Email</label>
                                <input className="form-control mb-3" value={loggedInUser?.email} {...register("buyerEmail", { required: true })} />
                                {errors.buyerEmail && <span>This field is required</span>}

                                <label htmlFor="">Orderd Data</label>
                                <input className="form-control mb-3" value={new Date().toDateString()} {...register("date", { required: true })} />
                                {errors.date && <span>This field is required</span>}

                                <label htmlFor="">Service Name</label>
                                <input className="form-control mb-3" value={clickedService?.name} {...register("serviceName", { required: true })} />
                                {errors.serviceName && <span>This field is required</span>}

                                <label htmlFor="">your Address</label>
                                <input className={errors.buyerAddress ? "form-control mb-3" : 'form-control'} {...register("buyerAddress", { required: true })} />
                                {errors.buyerAddress && <span className="mb-3">This field is required</span>}
                                <input type="submit" className="btn btn-primary mt-4 d-block col-10 mx-auto" value="Place order" />
                            </form>
                        )}
                        {isUserData || (
                            <StripeForm>
                                <StripeCardForm setDataWithPaymentInfo={setDataWithPaymentInfo} dataWithPaymentInfo={dataWithPaymentInfo} setIsUserData={setIsUserData} />
                            </StripeForm>
                        )}
                    </div>
                </div>
            </main>
            <div className="p-5"></div>
            <div className="p-5"></div>
            <Footer/>
        </div>
    );
};

export default BuyService;