import React from "react";

export const Home = () => {
    return <>
        <div>
            <img src="" alt="" />
        </div>
        <form>
            <div>
                <h1>Войти</h1>
            </div>
            <label htmlFor="email">Логин</label>
            <input id="email" type="email" name="email" size={28} />
            <label htmlFor="password">Пароль</label>
            <input id="password" type="password" name="password" size={28} />
        </form>
    </>
}