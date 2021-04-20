import React from 'react';
import { useForm } from "react-hook-form";
import axios   from "axios"
import { useState } from 'react';




const AddServices = () => {

    const [imageURL, setImageURL] = useState();
    
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {

        const serviceData = {
            ...data,
            imge: imageURL
        }

        fetch("https://glossy-massage-spa-assingment.herokuapp.com/addservice", {
            method:"POST",
            body:JSON.stringify(serviceData),
            headers:{
                "content-type": "application/json"
            }
        }).then(res => res.json())
        .then(result => console.log(result))


    };



    const getImageUrl = (event) => {
        debugger
        console.log(event.target.FileList);
        const imageData = new FormData();
        imageData.set("key", "db2003832c36dc3e4775eca19ca80e26");
        imageData.append("image", event.target.files[0]);
        axios
            .post("https://api.imgbb.com/1/upload", imageData)
            .then(function (response) {
                setImageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    };




    return (
        <div>
            <div className="container">
                <div className="row justify-content-center">
                        <div className="pt-5"></div>
                    <div className="col-lg-8 bg-light border-2 col-md-10 mx-auto">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="py-2">
                                <label htmlFor="exampleInputEmail1" className="form-label">
                                    Service Name
                                </label>
                                <input className="form-control" name="name" {...register("name", { required: true })} />
                                {errors.name && <span className="form-text  mb-3">This field is required</span>}
                            </div>

                            <div className="py-2">
                                <label htmlFor="exampleInputEmail1" className="form-label">
                                    Service Short description
                                </label>
                                <textarea className="form-control" {...register("description", { required: true })}></textarea>
                                {errors.description && <span className="form-text  mb-3">This field is required</span>}
                            </div>

                            <div className="row">
                                <div className="col-6">
                                    <div className="py-2">
                                        <label htmlFor="exampleInputEmail1" className="form-label">
                                            Service Icon / (small size imge)
                                        </label>
                                        <input className="form-control" onChange={getImageUrl} type={"file"} required />
                                        {errors.image && <span className="form-text  mb-3">This field is required</span>}
                                    </div>
                                </div>

                                <div className="col-6">
                                    <div className="py-2">
                                        <label htmlFor="exampleInputEmail1" className="form-label">
                                            Price
                                        </label>
                                        <input className="form-control" {...register("price", { required: true })} />
                                        {errors.price && <span className="form-text  mb-3">This field is required</span>}
                                    </div>
                                </div>
                            </div>

                            <div className="text-center">
                                <input className={imageURL ? "btn btn-success" : "btn btn-success disabled"} type="submit" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddServices;