import React from 'react';
import '../../components/Login_Register.css'

class Login_Register extends React.Component {
    render() {
        return (
            <div className='form'>
                <div class="login-container">
                    <input id="item-1" type="radio" name="item" class="sign-in" checked /><label for="item-1" class="item">CONECTARE</label>
                    <input id="item-2" type="radio" name="item" class="sign-up" /><label for="item-2" class="item">INREGISTRARE</label>
                    <div className='login-form'>
                        <div className='conectare'>
                            <div className='casuta'>
                                <input placeholder='Email' id="email" type="text" class='input'></input>
                            </div>
                            <div className='casuta'>
                                <input placeholder='Parola' id='parola' type='text' data-type="password" class='input'></input>
                            </div>
                            <div className='casuta'>
                                <input type='button' class='button' value={"Conectează-te"} ></input>
                            </div>
                            <div class="hr"></div>
                            <div class="footer">
                                <a href="#forgot">Ai uitat parola?</a>
                            </div>
                        </div>
                        <div class="inregistrare">
                            <div class="casuta">
                                <input placeholder="Nume" id="nume" type="text" class="input" />
                            </div>
                            <div class="casuta">
                                <input placeholder="Prenume" id="prenume" type="text" class="input" />
                            </div>
                            <div class="casuta">
                                <input placeholder="Locație" id="locatie" type="text" class="input" />
                            </div>
                            <div class="casuta">
                                <input placeholder="Adresa de email" id="email" type="text" class="input" />
                            </div>
                            <div class="casuta">
                                <input placeholder="Parola" id="parola" type="text" class="input" data-type="password" />
                            </div>
                            <div class="casuta">
                                <input placeholder="Confirmă parola" id="parola_conf" type="text" class="input" data-type="password" />
                            </div>
                            <div class="casuta">
                                <input type="button" class="button" value="Inregistrare" />
                            </div>
                            <div class="hr"></div>
                            <div class="footer">
                                <label for="item-1">Ai deja un cont?</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default Login_Register;