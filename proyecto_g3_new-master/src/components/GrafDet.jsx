import React from "react"
import Header from "./Header"
import "bootstrap/dist/css/bootstrap.css"
import "../styles/H6.css"
import GRAFICA from "../assets/pc_comps/grafica.png"

let itemsAComprar = []

const GrafDet = () => {

    // const guardarProd = () => {
    //     let comp = {}
    //     comp.name = "NVIDIA RTX 3070",
    //     comp.price = 679,
    //     comp.img = "../assets/grafica.png"
        
    //     localStorage.setItem('ordenes',JSON.stringify(itemsAComprar))
    // }

    return <div className="bg-dark">
        <Header />

        <div className="container" style={{margintop:"10%",padding:"50px"}} >

            <div className="row mb-4" >

                <div className="col" style={{width:"20%",height:"150px"}} >

                    <div className="bg-light p-2 text-dark bg-opacity-10" style={{width:"60%" }}>

                        <div style={{marginLeft:"10%", width:"50%"}}>
                            <img  width={250} height={250} src={GRAFICA} alt="GRAFICA" />
                        </div>



                            <button id="bot" style={{marginLeft:"25%", width:"50%"}} type="button" className="both3 btn btn-danger border-0" >Agrega al carrito</button>
                    </div>
                </div>

      


                <div className="col" >

                    <div className="bg-primary p-2 text-dark bg-opacity-25">

                        <h1>NVIDIA GEFORCE <br/>RTX 3070 8 GB</h1>
                        <h2><b>$229</b></h2>

                        <h3>Shipping calculated at checkout.</h3>

                        <table style={{margintop:"20px"}}>
                            
                                <tr>
                                    <th><b>CHIPSET <br/> MANUFACTURER </b> </th><th>NVIDIA</th></tr>
                                <tr>
                                    <td><b>GPU</b></td><td>GeForce GTX 3070</td></tr>
                                <tr>
                                    <td><b>CORE CLOCK</b>   </td><td>1530 MHz</td></tr>
                                <tr>
                                    <td><b>BOOST CLOCK</b>    </td><td>OC Mode: 1800 MHz <br/> Gaming Mode <br/> (Default): 1770 MHz</td></tr>
                                <tr>
                                    <td><b>CUDA CORES</b>    </td><td>1280</td></tr>
                            
                        </table>
                            

                    </div>

                </div>

            </div>
        </div>
    </div>

}

export default GrafDet;
