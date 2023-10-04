import '../../pages/realizarPago/realizarPago.css'

function pago() {
    return (
        <div >
            <div className="body-wallpaper" >
                <div className="container" >
                    <div className="col1" >
                        <h1>CHECK OUT</h1>
                        <div className="botones">
                            <button className="btn" id="tarjeta">Debito o crédito</button>
                            <button className="btn" id="paypal"><img src=".\PayPal-Logo-PNG-Image.png" /></button>
                        </div>

                        <hr className="linea-divisora1" />

                        <div className="info">
                            <div className="f1">
                                <div className="f1_1">
                                    <label htmlFor="email">Correo de contacto</label><br />
                                    <input type="text" id="email" name="email"/><br/>
                                </div>
                                <div className="f1_2">
                                    <div className="f1_2_1">
                                        <label htmlFor="name">Nombre</label><br/>
                                        <input type="text" id="name" name="name"/><br/>
                                    </div>
                                    <div className="f1_2_2">
                                        <label htmlFor="lastname">Apellido</label><br/>
                                        <input type="text" id="lastname" name="lastname"/><br/>
                                    </div>
                                </div>
                            </div>
                            <div className="f2">
                                <div className="f2_1">
                                    <label htmlFor="card_no">Numero de la tarjeta</label><br/>
                                    <input type="number" id="card_no" name="card_no"/><br/>
                                </div>
                                <div className="f2_2">
                                    <div className="f2_2_1">
                                        <label id="date" htmlFor="card_date">Fecha de expiración</label><br/>
                                        <input type="number" id="nacard_dateme" name="card_date"/><br/>
                                    </div>
                                    <div className="f2_2_2">
                                        <label htmlFor="card_cvv">CVV</label><br/>
                                        <input type="number" id="card_cvv" name="card_cvv"/><br/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col2">
                        <div className="product_info">
                            <div className="imagenc"><img src="./img/CartaJuego.png" alt=""/></div>
                            <h2 id="nombre_carta">Carta de espada de una mano</h2>
                            <h2 id="precio_carta">$118.000</h2>
                        </div>
                        <div className="product_info">
                            <div className="imagenc"><img src="./img/CartaJuego.png" alt=""/></div>
                            <h2 id="nombre_carta">Carta de espada de una mano</h2>
                            <h2 id="precio_carta">$118.000</h2>
                        </div>

                        <hr className="linea-divisora2" />

                        <div className="total">
                            <h2>TOTAL</h2>
                            <h2>COP 117.000</h2>
                        </div>

                        <div className="siguiente">
                            <button className="btn2" id="siguiente">SIGUIENTE</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default pago;